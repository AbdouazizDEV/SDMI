/** Sous-familles avec fiches / gammes publiées — une entrée par livraison progressive. */
const BROWSEABLE_SUBFAMILY_SLUGS = new Set<string>([
  "vannes-operucle-petrole-forge-moule",
]);

/** Familles dont la page d’accueil catalogue est ouverte (au moins une sous-famille en cours). */
const BROWSEABLE_FAMILY_SLUGS = new Set<string>([
  "robinetterie-petrole-forgee-moulee",
]);

export function isCatalogSubfamilyBrowseable(subfamilySlug: string): boolean {
  return BROWSEABLE_SUBFAMILY_SLUGS.has(subfamilySlug);
}

export function isCatalogFamilyBrowseable(familySlug: string): boolean {
  return BROWSEABLE_FAMILY_SLUGS.has(familySlug);
}

/** Prochaine sous-famille prévue (ordre taxonomie v1 pétrole). */
export const nextCatalogSubfamilySlug =
  "robinets-petrole-soufflet-soupapes-forge-moule";
