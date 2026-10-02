import type { LocalizedText } from "@/types/localized";

/** Type de fiche catalogue : gamme (configurable) ou référence SKU. */
export type ProductListingKind = "range" | "sku";

/** Attributs techniques filtrables (stockés en jsonb côté Supabase). */
export type CatalogTechnicalSpecs = {
  pressureClass?: string;
  trim?: string;
  connection?: string;
  connectionLabel?: LocalizedText;
  bodyProcess?: "forged" | "cast";
  bodyMaterialKey?: string;
  bore?: "standard" | "full";
  fluids?: string[];
  atexCapable?: boolean;
  documentCount?: number;
};

export type CatalogRangeSeed = {
  reference: string;
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  dn: number | null;
  pn: string | null;
  material: LocalizedText;
  familySlug: string;
  subfamilySlug: string;
  listingKind: ProductListingKind;
  stockUnits?: number;
  certified31?: boolean;
  connectionType?: string | null;
  standards?: string[];
  sectorTags?: string[];
  technicalSpecs?: CatalogTechnicalSpecs;
};
