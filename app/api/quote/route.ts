import { NextResponse } from "next/server";

import { resolveProductIdsBySlugs } from "@/lib/quote/resolve-product-ids";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { quoteSubmitPayloadSchema } from "@/lib/validation/quote-submit";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = quoteSubmitPayloadSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const payload = parsed.data;
  const unresolvedRefs: string[] = [];

  type ResolvedLine = {
    productId: string;
    quantity: number;
    unit: "piece" | "pair" | "set" | "meter" | "kilogram" | "lot";
    lineNotes?: string;
  };

  const resolvedLines: ResolvedLine[] = [];

  if (payload.lines?.length) {
    const slugsToResolve = payload.lines
      .filter((line) => !UUID_RE.test(line.productId))
      .map((line) => line.productId.replace(/^slug:/, ""));

    const slugToId = await resolveProductIdsBySlugs(slugsToResolve);

    for (const line of payload.lines) {
      let productId = line.productId;
      if (!UUID_RE.test(productId)) {
        const slug = productId.replace(/^slug:/, "");
        productId = slugToId.get(slug) ?? "";
      }
      if (!productId || !UUID_RE.test(productId)) {
        unresolvedRefs.push(line.lineNotes ?? line.productId);
        continue;
      }
      resolvedLines.push({
        productId,
        quantity: line.quantity,
        unit: line.unit,
        lineNotes: line.lineNotes,
      });
    }
  }

  const messageParts = [
    payload.message?.trim(),
    payload.productReference
      ? `[Réf. produit] ${payload.productReference.trim()}`
      : null,
    unresolvedRefs.length
      ? `[Références sans fiche catalogue]\n${unresolvedRefs.join("\n")}`
      : null,
  ].filter(Boolean);
  const message = messageParts.length ? messageParts.join("\n\n") : null;

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }

  const { data: quoteRow, error: quoteError } = await supabase
    .from("quote_requests")
    .insert({
      locale: payload.locale,
      company_name: payload.companyName,
      contact_name: payload.contactName,
      email: payload.email,
      phone: payload.phone || null,
      country: payload.country,
      message,
      consent_personal_data: true,
    })
    .select("id")
    .single();

  if (quoteError || !quoteRow) {
    return NextResponse.json({ error: "insert_failed" }, { status: 500 });
  }

  if (resolvedLines.length) {
    const { error: linesError } = await supabase.from("quote_request_lines").insert(
      resolvedLines.map((line) => ({
        quote_request_id: quoteRow.id,
        product_id: line.productId,
        quantity: line.quantity,
        unit: line.unit,
        line_notes: line.lineNotes ?? null,
      })),
    );

    if (linesError) {
      return NextResponse.json({ error: "lines_insert_failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ id: quoteRow.id }, { status: 201 });
}
