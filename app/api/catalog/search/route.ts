import { NextResponse } from "next/server";

import { searchProducts } from "@/lib/catalog/search";
import { siteConfig } from "@/lib/site";
import { catalogSearchQuerySchema } from "@/lib/validation/search-query";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parsed = catalogSearchQuerySchema.safeParse({
    q: searchParams.get("q") ?? "",
    locale: searchParams.get("locale") ?? siteConfig.defaultLocale,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { results: [], error: "invalid_query" },
      { status: 400 },
    );
  }

  const results = await searchProducts(parsed.data.q, parsed.data.locale);

  return NextResponse.json(
    { results },
    {
      headers: {
        "Cache-Control": "private, max-age=0, no-store",
      },
    },
  );
}
