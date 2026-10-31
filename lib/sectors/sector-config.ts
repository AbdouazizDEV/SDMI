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
  mines: siteAssets.sectors["industrie-miniere"],
  energy: siteAssets.sectors["circuit-eau-petrole-gaz"],
  agro: siteAssets.sectors["industrie-agro-alimentaire"],
  water: siteAssets.heroCarousel.eauTraitement,
  fire: siteAssets.sectors["tuyauterie-materiels-incendie"],
};

/** Contenu i18n `Sectors.blocks.*` associé à chaque route `/secteurs/[slug]`. */
export const sectorSlugToBlock: Record<string, SectorBlockKey> = {
  "circuit-eau-petrole-gaz": "energy",
  "robinetterie-industrielle": "mines",
  "industrie-agro-alimentaire": "agro",
  "tuyauterie-materiels-incendie": "fire",
  "industrie-miniere": "mines",
};

/** Familles catalogue mises en avant par secteur. */
export const sectorSlugToFamilies: Record<string, string[]> = {
  "circuit-eau-petrole-gaz": [
    "robinetterie-petrole-forgee-moulee",
    "tuyauteries",
    "accessoires",
    "brides",
    "robinets-tournant-spherique-acier-inox",
    "raccords-et-fittings",
  ],
  "robinetterie-industrielle": [
    "robinetterie-petrole-forgee-moulee",
    "vannes",
    "robinets-soupape-pointeau",
  ],
  "industrie-agro-alimentaire": [
    "robinets-soupape-pointeau",
    "vannes-sphere-laiton-fonte-pvc",
    "robinets-tournant-spherique-acier-inox",
  ],
  "industrie-miniere": [
    "robinetterie-petrole-forgee-moulee",
    "vannes",
    "tuyauteries",
    "brides",
    "raccords-et-fittings",
  ],
  "tuyauterie-materiels-incendie": [
    "tuyauteries",
    "accessoires",
    "brides",
    "vannes",
    "robinetterie-petrole-forgee-moulee",
    "raccords-et-fittings",
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
