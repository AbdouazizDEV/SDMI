/** Secteurs avec contenu dédié `Sectors.pages.[slug]` sur `/secteurs/[slug]`. */
export const sectorDetailPageSlugs = [
  "circuit-eau-petrole-gaz",
  "industrie-agro-alimentaire",
  "tuyauterie-materiels-incendie",
  "industrie-miniere",
] as const;

export type SectorDetailPageSlug = (typeof sectorDetailPageSlugs)[number];

export function isSectorDetailPageSlug(slug: string): slug is SectorDetailPageSlug {
  return (sectorDetailPageSlugs as readonly string[]).includes(slug);
}
