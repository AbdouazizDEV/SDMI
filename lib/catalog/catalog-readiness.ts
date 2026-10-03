/** Sous-familles avec fiches / gammes publiées — une entrée par livraison progressive. */
const BROWSEABLE_SUBFAMILY_SLUGS = new Set<string>([
  "vannes-operucle-petrole-forge-moule",
  "robinets-petrole-soufflet-soupapes-forge-moule",
  "robinets-pointeau-petrole-forge-moule",
  "filtres-petrole-forge-moule",
  "clapets-petrole-forge-moule",
  "vannes-opercule-fonte-brides",
  "vannes-opercule-acier-inox-moule",
  "vannes-opercule-forge",
  "vannes-opercule-caoutchouc-o-gate",
  "vannes-guillotine-s-gate-unidirectionnelles",
  "vannes-guillotine-s-gate-bidirectionnelles",
  "vannes-guillotine-s-gate-pelle-traversante",
  "accessoires-vannes-guillotine",
  "robinets-a-soupape",
  "robinets-a-pointeau",
  "robinets-incendie-colonne-seche-prise-simple-ou-double",
  "robinets-pied-de-colonne-perfection-a-flotteur",
  "robinets-tournant-spherique-monobloc-inox",
  "robinets-tournant-spherique-2-pieces",
  "robinets-tournant-spherique-2-pieces-split-body",
  "robinets-tournant-spherique-3-pieces",
]);

/** Familles dont la page catalogue est ouverte (au moins une sous-famille publiée). */
const BROWSEABLE_FAMILY_SLUGS = new Set<string>([
  "robinetterie-petrole-forgee-moulee",
  "vannes-operucle-guillotine",
  "robinets-soupape-pointeau",
  "robinets-tournant-spherique-acier-inox",
]);

export function isCatalogSubfamilyBrowseable(subfamilySlug: string): boolean {
  return BROWSEABLE_SUBFAMILY_SLUGS.has(subfamilySlug);
}

export function isCatalogFamilyBrowseable(familySlug: string): boolean {
  return BROWSEABLE_FAMILY_SLUGS.has(familySlug);
}

/** Prochaine ouverture catalogue v1. */
export const nextCatalogSubfamilySlug = "robinets-tournant-spherique-3-pieces-brides-elsa";
