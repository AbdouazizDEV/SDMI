import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

export type ProductSearchHit = {
  reference: string;
  slug: string;
  name: string;
  dn: number | null;
  href: string;
};

function parseName(value: unknown, locale: SiteLocale): string {
  if (
    typeof value === "object" &&
    value !== null &&
    locale in value &&
    typeof (value as LocalizedText)[locale] === "string"
  ) {
    return (value as LocalizedText)[locale];
  }
  return "";
}

export async function searchProducts(
  query: string,
  locale: SiteLocale,
  limit = 8,
): Promise<ProductSearchHit[]> {
  const trimmed = query.trim();
  if (trimmed.length < 2) {
    return [];
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return [];
  }

  const pattern = `%${trimmed.replace(/[%_]/g, "")}%`;
  const dnValue = Number.parseInt(trimmed.replace(/^dn\s*/i, ""), 10);

  let builder = supabase
    .from("products")
    .select("reference, slug, name, dn")
    .eq("is_published", true)
    .limit(limit);

  if (!Number.isNaN(dnValue)) {
    builder = builder.or(
      `reference.ilike.${pattern},slug.ilike.${pattern},dn.eq.${dnValue}`,
    );
  } else {
    builder = builder.or(`reference.ilike.${pattern},slug.ilike.${pattern}`);
  }

  const { data, error } = await builder;

  if (error || !data) {
    return [];
  }

  return data.map((row) => ({
    reference: row.reference,
    slug: row.slug,
    name: parseName(row.name, locale),
    dn: row.dn,
    href: `/produits/${row.slug}`,
  }));
}
