/** Visuels catalogue v1 — placeholders jusqu’aux assets SDMI / fabricants. */

export const catalogV1FamilyImages: Record<string, string> = {
  "robinetterie-petrole-forgee-moulee":
    "/images/catalog/taxonomy/robinetterie-petrole-forgee-moulee.jpg",
  "tuyauterie-et-accessoires": "/images/famille-accessoires-tuyauterie.jpg",
  "vannes-operucle-guillotine": "/images/subfamilies/robinets-a-operucle.jpg",
  "robinets-soupape-pointeau":
    "/images/catalog/taxonomy/robinets-soupape-pointeau.jpg",
  "robinets-tournant-spherique-acier-inox":
    "/images/catalog/taxonomy/robinets-tournant-spherique-acier-inox.jpg",
  "vannes-sphere-laiton-fonte-pvc": "/images/famille-robinetterie.jpg",
};

export const catalogV1SubfamilyImages: Record<string, string> = {
  "vannes-operucle-petrole-forge-moule":
    "/images/catalog/taxonomy/vannes-operucle-petrole-forge-moule.jpg",
  "robinets-petrole-soufflet-soupapes-forge-moule":
    "/images/catalog/taxonomy/robinets-petrole-soufflet-soupapes-forge-moule.jpg",
  "robinets-pointeau-petrole-forge-moule":
    "/images/catalog/taxonomy/robinets-pointeau-petrole-forge-moule.jpg",
  "filtres-petrole-forge-moule":
    "/images/catalog/taxonomy/filtres-petrole-forge-moule.jpg",
  "clapets-petrole-forge-moule":
    "/images/catalog/taxonomy/clapets-petrole-forge-moule.jpg",
  "vannes-opercule-fonte-brides": "/images/subfamilies/robinets-a-operucle.jpg",
  "vannes-opercule-acier-inox-moule": "/images/subfamilies/robinets-a-operucle.jpg",
  "vannes-opercule-forge": "/images/subfamilies/robinets-a-operucle.jpg",
  "vannes-opercule-caoutchouc-o-gate": "/images/subfamilies/robinets-a-operucle.jpg",
  "vannes-guillotine-s-gate-unidirectionnelles":
    "/images/subfamilies/vannes-guillotine.jpg",
  "vannes-guillotine-s-gate-bidirectionnelles":
    "/images/subfamilies/vannes-guillotine.jpg",
  "vannes-guillotine-s-gate-pelle-traversante":
    "/images/subfamilies/vannes-guillotine.jpg",
  "accessoires-vannes-guillotine": "/images/subfamilies/vannes-guillotine.jpg",
  "robinets-a-soupape": "/images/catalog/taxonomy/robinets-a-soupape.jpg",
  "robinets-a-pointeau": "/images/catalog/taxonomy/robinets-a-pointeau.jpg",
  "robinets-incendie-colonne-seche-prise-simple-ou-double":
    "/images/catalog/taxonomy/robinets-incendie-colonne-seche-prise-simple-ou-double.jpg",
  "robinets-pied-de-colonne-perfection-a-flotteur":
    "/images/catalog/taxonomy/robinets-pied-de-colonne-perfection-a-flotteur.jpg",
  "robinets-tournant-spherique-monobloc-inox":
    "/images/catalog/taxonomy/robinets-tournant-spherique-monobloc-inox.jpg",
  "robinets-tournant-spherique-2-pieces":
    "/images/catalog/taxonomy/robinets-tournant-spherique-2-pieces.jpg",
  "robinets-tournant-spherique-2-pieces-split-body":
    "/images/catalog/taxonomy/robinets-tournant-spherique-2-pieces-split-body.jpg",
  "robinets-tournant-spherique-3-pieces":
    "/images/catalog/taxonomy/robinets-tournant-spherique-3-pieces.jpg",
  "robinets-tournant-spherique-3-pieces-brides-elsa":
    "/images/catalog/taxonomy/robinets-tournant-spherique-3-pieces-brides-elsa.jpg",
  "robinets-tournant-spherique-3-pieces-a-brides":
    "/images/catalog/taxonomy/robinets-tournant-spherique-3-pieces-a-brides.jpg",
  "robinets-tournant-spherique-3-voies":
    "/images/catalog/taxonomy/robinets-tournant-spherique-3-voies.jpg",
};

export function getCatalogV1FamilyImage(slug: string): string | null {
  return catalogV1FamilyImages[slug] ?? null;
}

export function getCatalogV1SubfamilyImage(slug: string): string | null {
  return catalogV1SubfamilyImages[slug] ?? null;
}
