import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function base(
  subfamilySlug: string,
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return {
    ...partial,
    listingKind: "range",
    familySlug: FAMILY,
    subfamilySlug,
  };
}

/** Offre tubes et lignes brides SDMI (hors références détaillées fournisseur). */
export const sdmiTubesAndFlangesRanges: CatalogRangeSeed[] = [
  base("tubes-acier-carbone", {
    reference: "TUBE-C-API5L",
    slug: "tubes-acier-carbone-api5l-a106-a53-a333",
    name: frEn(
      "Tubes acier carbone — API 5L / ASTM A106 A53 Gr.B / A333 Gr.6",
      "Carbon steel tubes — API 5L / ASTM A106 A53 Gr.B / A333 Gr.6",
    ),
    description: frEn(
      "Tubes sans soudure et soudés, épaisseurs SCH10 à SCH XXS, diamètres nominaux DN6 à DN1000.",
      "Seamless and welded tubes, SCH10 to SCH XXS wall thickness, nominal sizes DN6 to DN1000.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld",
    standards: ["api-5l", "astm-a106", "astm-a53", "astm-a333", "en10204"],
    sectorTags: ["industry", "water", "building"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base("tubes-acier-inoxydable", {
    reference: "TUBE-SS-A312",
    slug: "tubes-acier-inoxydable-a312-tp304l-316l",
    name: frEn(
      "Tubes acier inoxydable — ASTM A312 TP304L / 316L / 309L / 310L",
      "Stainless steel tubes — ASTM A312 TP304L / 316L / 309L / 310L",
    ),
    description: frEn(
      "Tubes inox austénitiques, SCH10 à SCH80, DN6 à DN300.",
      "Austenitic stainless tubes, SCH10 to SCH80, DN6 to DN300.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "butt-weld",
    standards: ["astm-a312", "en10204"],
    sectorTags: ["industry", "food"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base("tubes-carbone-pre-enrobes-3pe", {
    reference: "TUBE-C-3PE",
    slug: "tubes-acier-carbone-pre-enrobes-3pe",
    name: frEn(
      "Tubes acier carbone pré-enrobés 3PE polypropylène",
      "3PE polypropylene coated carbon steel tubes",
    ),
    description: frEn(
      "Protection anticorrosion 3PE, acier carbone API 5L / ASTM A106 A53 Gr.B, DN80 à DN500.",
      "3PE corrosion coating, carbon steel API 5L / ASTM A106 A53 Gr.B, DN80 to DN500.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld",
    standards: ["api-5l", "astm-a106", "en10204"],
    sectorTags: ["water", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base("brides-en1092-acier-carbone", {
    reference: "BR-EN1092-C",
    slug: "brides-en1092-acier-carbone-pn10-pn40",
    name: frEn(
      "Brides EN 1092 acier carbone — plate, pleine, WN, SW, slip-on, taraudée",
      "EN 1092 carbon steel flanges — plate, blank, WN, SW, slip-on, threaded",
    ),
    description: frEn(
      "PN10, PN16, PN25, PN40 — DN15 à DN1000. Types plate, pleine, à collerette (WN), à souder (SW), slip-on et taraudée.",
      "PN10, PN16, PN25, PN40 — DN15 to DN1000. Plate, blank, weld neck, socket weld, slip-on and threaded types.",
    ),
    dn: null,
    pn: "PN16",
    material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf",
    standards: ["en1092", "en10204"],
    sectorTags: ["industry", "water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base("brides-asme-b16-5-a105", {
    reference: "BR-ASME-A105",
    slug: "brides-asme-b16-5-a105-150-2500",
    name: frEn(
      "Brides ASTM A105 ASME B16.5 — 150# à 2500#, JIS 5K / 10K",
      "ASTM A105 ASME B16.5 flanges — 150# to 2500#, JIS 5K / 10K",
    ),
    description: frEn(
      "SCH40 à SCH80 — types pleine, WN, SW, slip-on, taraudée, RTJ.",
      "SCH40 to SCH80 — blank, WN, SW, slip-on, threaded, RTJ types.",
    ),
    dn: null,
    pn: "150#",
    material: frEn("Acier carbone A105", "Carbon steel A105"),
    connectionType: "flanged-rf",
    standards: ["asme-b16-5", "astm-a105", "en10204"],
    sectorTags: ["industry", "oil-gas"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base("brides-inox-en1092-asme", {
    reference: "BR-SS-EN-ASME",
    slug: "brides-inox-304l-316l-en1092-asme",
    name: frEn(
      "Brides inox 304L / 316L — EN 1092 et ASME B16.5 150# / 300#",
      "304L / 316L stainless flanges — EN 1092 and ASME B16.5 150# / 300#",
    ),
    description: frEn(
      "Types plate, pleine, WN et slip-on pour réseaux process et eau.",
      "Plate, blank, WN and slip-on types for process and water networks.",
    ),
    dn: null,
    pn: "150#",
    material: frEn("Acier inoxydable 304L / 316L", "Stainless steel 304L / 316L"),
    connectionType: "flanged-rf",
    standards: ["en1092", "asme-b16-5", "en10204"],
    sectorTags: ["industry", "food", "water"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base("brides-acier-galvanise", {
    reference: "BR-GALV",
    slug: "brides-acier-galvanise-plate-taraudee",
    name: frEn(
      "Brides acier galvanisé — plate et taraudée",
      "Galvanized steel flanges — plate and threaded",
    ),
    description: frEn(
      "Brides pour réseaux eau et bâtiment, finition galvanisée à chaud.",
      "Flanges for water and building networks, hot-dip galvanized finish.",
    ),
    dn: null,
    pn: "PN16",
    material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "flanged-rf",
    standards: ["en1092", "en10204"],
    sectorTags: ["water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
