import { cache } from "react";
import { unstable_cache } from "next/cache";

import { catalogV1Navigation } from "@/lib/catalog/catalog-v1-taxonomy";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

export type {
  CatalogNavFamily,
  CatalogNavSector,
  CatalogNavigation,
} from "@/lib/catalog/navigation-types";

/** Navigation instantanée pour header / footer (sans attente réseau). */
export const catalogNavigationForShell = catalogV1Navigation;

async function fetchCatalogNavigation() {
  // Phase squelette : taxonomie v1 en code. Branchage Supabase lors de l’import produits.
  return catalogV1Navigation;
}

const getCatalogNavigationCached = unstable_cache(
  fetchCatalogNavigation,
  ["sdmi-catalog-navigation-v1"],
  { revalidate: 600 },
);

/** Catalogue — taxonomie v1 (pages produits). */
export const getCatalogNavigation = cache(getCatalogNavigationCached);

export function pickCatalogLabel(
  text: LocalizedText,
  locale: SiteLocale,
): string {
  return text[locale] || text.fr;
}
