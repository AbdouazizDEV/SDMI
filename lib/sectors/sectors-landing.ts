import { HOME_FEATURED_SECTOR_SLUGS } from "@/lib/home/home-featured-sectors";

/** Ordre d’affichage sur `/secteurs` — aligné accueil. */
export const sectorsLandingPrimarySlugs = [...HOME_FEATURED_SECTOR_SLUGS] as const;

export const sectorsLandingSecondarySlugs = ["robinetterie-industrielle"] as const;

export const sectorsLandingDeepDiveSlugs = [...HOME_FEATURED_SECTOR_SLUGS] as const;
