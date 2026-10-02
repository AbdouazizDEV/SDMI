import type {
  CatalogTechnicalSpecs,
  ProductListingKind,
} from "@/lib/catalog/range-product";
import type { LocalizedText } from "@/types/localized";

export type CatalogProductListItem = {
  id: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  description: LocalizedText;
  dn: number | null;
  pn: string | null;
  material: LocalizedText | null;
  familySlug: string;
  subfamilySlug: string;
  /** Gamme configurable (série) ou référence SKU. */
  listingKind?: ProductListingKind;
  /** Cotation selon DN, classe et plan — typique des gammes. */
  quoteOnConfiguration?: boolean;
  technicalSpecs?: CatalogTechnicalSpecs;
};

export function catalogProductHref(product: Pick<CatalogProductListItem, "slug" | "familySlug" | "subfamilySlug">) {
  return `/produits/${product.familySlug}/${product.subfamilySlug}/${product.slug}`;
}

export function formatPn(pn: number | string | null): string | null {
  if (pn === null || pn === undefined || pn === "") {
    return null;
  }
  if (typeof pn === "number") {
    return `PN${pn}`;
  }
  return pn;
}
