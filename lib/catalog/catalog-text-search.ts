import { catalogProductHref, type CatalogProductListItem } from "@/lib/catalog/catalog-product";
import type { ProductSearchHit } from "@/lib/catalog/search";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

function normalizeQuery(raw: string): string {
  return raw.trim().toLowerCase();
}

function productHaystack(product: CatalogProductListItem, locale: SiteLocale): string {
  const name = pickLocalized(product.name, locale).toLowerCase();
  const material = product.material
    ? `${pickLocalized(product.material, locale)}`.toLowerCase()
    : "";
  return [
    name,
    product.reference.toLowerCase(),
    product.slug.toLowerCase(),
    product.pn?.toLowerCase() ?? "",
    material,
    product.dn != null ? `dn${product.dn}` : "",
  ].join(" ");
}

export function searchProductsInList(
  products: CatalogProductListItem[],
  query: string,
  locale: SiteLocale,
  limit = 12,
): ProductSearchHit[] {
  const q = normalizeQuery(query);
  if (q.length < 1) {
    return [];
  }

  const dnMatch = q.match(/^dn\s*(\d+)$/) ?? q.match(/^(\d{1,4})$/);
  const dnValue = dnMatch ? Number.parseInt(dnMatch[1]!, 10) : null;

  const scored = products
    .map((product) => {
      const hay = productHaystack(product, locale);
      let score = 0;
      if (product.reference.toLowerCase().startsWith(q)) score += 100;
      if (product.reference.toLowerCase().includes(q)) score += 50;
      if (pickLocalized(product.name, locale).toLowerCase().includes(q)) score += 30;
      if (hay.includes(q)) score += 10;
      if (dnValue != null && product.dn === dnValue) score += 80;
      if (product.pn?.toLowerCase().includes(q)) score += 25;
      return { product, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  return scored.map(({ product }) => ({
    reference: product.reference,
    slug: product.slug,
    name: pickLocalized(product.name, locale),
    dn: product.dn,
    href: catalogProductHref(product),
  }));
}

export function suggestTermsFromProducts(
  products: CatalogProductListItem[],
  query: string,
  locale: SiteLocale,
  limit = 6,
): string[] {
  const q = normalizeQuery(query);
  if (!q) return [];

  const terms = new Set<string>();
  for (const product of products) {
    const ref = product.reference;
    if (ref.toLowerCase().includes(q)) terms.add(ref);
    const name = pickLocalized(product.name, locale);
    if (name.toLowerCase().includes(q)) terms.add(name);
    if (product.pn && product.pn.toLowerCase().includes(q)) terms.add(product.pn);
    if (product.dn != null && `DN${product.dn}`.toLowerCase().includes(q)) {
      terms.add(`DN${product.dn}`);
    }
    if (terms.size >= limit) break;
  }
  return [...terms].slice(0, limit);
}
