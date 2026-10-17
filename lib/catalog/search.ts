import { catalogProductHref } from "@/lib/catalog/catalog-product";
import { searchProductsInList } from "@/lib/catalog/catalog-text-search";
import { listAllDemoOrMergedProducts } from "@/lib/catalog/get-catalog-products";
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

async function searchProductsRemote(
  trimmed: string,
  locale: SiteLocale,
  limit: number,
): Promise<ProductSearchHit[]> {
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

  const localBySlug = new Map(
    listAllDemoOrMergedProducts().map((p) => [p.slug, p]),
  );

  return data.map((row) => {
    const local = localBySlug.get(row.slug);
    const href = local
      ? catalogProductHref(local)
      : `/produits/${row.slug}`;
    return {
      reference: row.reference,
      slug: row.slug,
      name: parseName(row.name, locale),
      dn: row.dn,
      href,
    };
  });
}

export async function searchProducts(
  query: string,
  locale: SiteLocale,
  limit = 8,
): Promise<ProductSearchHit[]> {
  const trimmed = query.trim();
  if (trimmed.length < 1) {
    return [];
  }

  const localProducts = listAllDemoOrMergedProducts();
  const localHits = searchProductsInList(localProducts, trimmed, locale, limit);

  if (trimmed.length < 2) {
    return localHits;
  }

  const remoteHits = await searchProductsRemote(trimmed, locale, limit);
  if (remoteHits.length === 0) {
    return localHits;
  }

  const seen = new Set<string>();
  const merged: ProductSearchHit[] = [];
  for (const hit of [...remoteHits, ...localHits]) {
    if (seen.has(hit.slug)) continue;
    seen.add(hit.slug);
    merged.push(hit);
    if (merged.length >= limit) break;
  }
  return merged;
}
