import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-soupape-pointeau";
const SUB = "robinets-incendie-colonne-seche-prise-simple-ou-double";

function frEn(fr: string, en: string) {
  return { fr, en };
}

/** Colonnes sèches — prises simple / double et accessoires. */
export const fireDryColumnValveRanges: CatalogRangeSeed[] = [
  {
    reference: "455",
    slug: "serie-455-robinet-colonne-seche-prise-simple-guillemin",
    name: frEn(
      "Robinet colonne sèche prise simple — sortie Guillemin",
      "Dry riser valve single outlet — Guillemin",
    ),
    description: frEn(
      "Entrée mâle ou rainurée, équipement incendie immeubles.",
      "Male or grooved inlet, building fire riser equipment.",
    ),
    dn: null,
    pn: null,
    material: frEn("Fonte / laiton", "Cast iron / brass"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "special",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 4 },
  },
  {
    reference: "456",
    slug: "serie-456-robinet-colonne-seche-prise-double",
    name: frEn(
      "Robinet colonne sèche prise double — entrée mâle, axe nu",
      "Dry riser valve double outlet — male inlet, bare stem",
    ),
    description: frEn("Double prise, sans bouchon, colonne sèche.", "Double outlet, no plug, dry column."),
    dn: null,
    pn: null,
    material: frEn("Fonte / laiton", "Cast iron / brass"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "special",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 4 },
  },
  {
    reference: "2449",
    slug: "serie-2449-raccord-bouchon-chainette-colonne-seche",
    name: frEn(
      "Raccord symétrique — bouchon sans verrou à chaînette",
      "Symmetrical fitting — plug with chain (no lock)",
    ),
    description: frEn("Accessoire colonne sèche, alliages cuivreux.", "Dry riser accessory, copper alloy."),
    dn: null,
    pn: null,
    material: frEn("Alliage cuivreux", "Copper alloy"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
  {
    reference: "9825701",
    slug: "serie-9825701-volant-alu-colonne-seche-d88",
    name: frEn(
      "Volant aluminium — robinet colonne sèche Ø 88",
      "Aluminium handwheel — dry riser valve Ø 88",
    ),
    description: frEn("Volant de manœuvre pour colonne sèche.", "Handwheel for dry riser valve."),
    dn: null,
    pn: null,
    material: frEn("Aluminium", "Aluminium"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
];
