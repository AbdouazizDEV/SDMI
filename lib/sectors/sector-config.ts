import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import { siteAssets } from "@/lib/images/site-assets";

export const sectorBlockKeys = [
  "mines",
  "energy",
  "agro",
  "water",
  "fire",
] as const;

export type SectorBlockKey = (typeof sectorBlockKeys)[number];

export const sectorBlockImages: Record<SectorBlockKey, string> = {
  mines: siteAssets.sectors["robinetterie-industrielle"],
  energy: siteAssets.heroCarousel.petroleGaz,
  agro: siteAssets.heroCarousel.agroalimentaire,
  water: siteAssets.heroCarousel.eauTraitement,
  fire: siteAssets.heroCarousel.incendie,
};

/** Contenu i18n `Sectors.blocks.*` associé à chaque route `/secteurs/[slug]`. */
export const sectorSlugToBlock: Record<string, SectorBlockKey> = {
  "circuit-eau-petrole-gaz": "energy",
  "robinetterie-industrielle": "mines",
  "industrie-agro-alimentaire": "agro",
  "tuyauterie-materiels-incendie": "fire",
};

/** Familles catalogue mises en avant par secteur. */
export const sectorSlugToFamilies: Record<string, string[]> = {
  "circuit-eau-petrole-gaz": [
    "robinetterie-petrole-forgee-moulee",
    "tuyauterie-et-accessoires",
    "robinets-tournant-spherique-acier-inox",
  ],
  "robinetterie-industrielle": [
    "robinetterie-petrole-forgee-moulee",
    "vannes-operucle-guillotine",
    "robinets-papillon",
  ],
  "industrie-agro-alimentaire": [
    "robinets-papillon",
    "vannes-sphere-laiton-fonte-pvc",
    "robinets-tournant-spherique-acier-inox",
  ],
  "tuyauterie-materiels-incendie": [
    "tuyauterie-et-accessoires",
    "vannes-operucle-guillotine",
    "robinetterie-petrole-forgee-moulee",
  ],
};

export function listSectorSlugs(): string[] {
  return legacyCatalogNavigation.sectors.map((sector) => sector.slug);
}

export function isSectorSlug(slug: string): boolean {
  return listSectorSlugs().includes(slug);
}

export function getSectorNavItem(slug: string) {
  return legacyCatalogNavigation.sectors.find((sector) => sector.slug === slug);
}

export function getSectorImagePath(slug: string): string | null {
  return (
    siteAssets.sectors[slug as keyof typeof siteAssets.sectors] ?? null
  );
}

export function getSectorBlockKey(slug: string): SectorBlockKey | null {
  return sectorSlugToBlock[slug] ?? null;
}
