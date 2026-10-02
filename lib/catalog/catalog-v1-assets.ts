/** Visuels catalogue v1 — placeholders jusqu’aux assets SDMI / fabricants. */

export const catalogV1FamilyImages: Record<string, string> = {
  "robinetterie-petrole-forgee-moulee":
    "/images/catalog/taxonomy/robinetterie-petrole-forgee-moulee.jpg",
  "tuyauterie-et-accessoires": "/images/famille-accessoires-tuyauterie.jpg",
  "vannes-operucle-guillotine": "/images/subfamilies/robinets-a-operucle.jpg",
  "robinets-papillon": "/images/subfamilies/robinets-a-papillon.jpg",
  "robinets-tournant-spherique-acier-inox":
    "/images/subfamilies/robinets-a-boisseau-spherique.jpg",
  "vannes-sphere-laiton-fonte-pvc": "/images/famille-robinetterie.jpg",
};

export const catalogV1SubfamilyImages: Record<string, string> = {
  "vannes-operucle-petrole-forge-moule":
    "/images/catalog/taxonomy/vannes-operucle-petrole-forge-moule.jpg",
  "robinets-petrole-soufflet-soupapes-forge-moule":
    "/images/subfamilies/robinets-a-soupape.jpg",
  "robinets-pointeau-petrole-forge-moule":
    "/images/subfamilies/vannes-a-pointeau.jpg",
  "filtres-petrole-forge-moule": "/images/subfamilies/filtres-a-tamis.jpg",
  "clapets-petrole-forge-moule": "/images/subfamilies/clapet-anti-retour.jpg",
};

export function getCatalogV1FamilyImage(slug: string): string | null {
  return catalogV1FamilyImages[slug] ?? null;
}

export function getCatalogV1SubfamilyImage(slug: string): string | null {
  return catalogV1SubfamilyImages[slug] ?? null;
}
