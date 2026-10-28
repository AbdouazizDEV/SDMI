import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const ACCESSORIES = "accessoires";
const TUBES = "tuyauteries";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function base(
  familySlug: string,
  subfamilySlug: string,
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return {
    ...partial,
    listingKind: "range",
    familySlug,
    subfamilySlug,
  };
}

/** Offre tubes et lignes brides SDMI (hors références détaillées fournisseur). */
export const sdmiTubesAndFlangesRanges: CatalogRangeSeed[] = [
  base(TUBES, "tubes-acier-carbone", {
    reference: "TUBE-C-API5L",
    slug: "tubes-acier-carbone-api5l-a106-a53-a333",
    name: frEn(
      "Tubes acier carbone — API 5L / ASTM A106 A53 Gr.B / A333 Gr.6",
      "Carbon steel tubes — API 5L / ASTM A106 A53 Gr.B / A333 Gr.6",
    ),
    description: frEn(
      "Gamme conduite acier carbone, soudée (API 5L) et sans soudure (ASTM A106, A53 Gr.B, A333/A333M-05 Gr.6). Épaisseurs SCH10 à SCH XXS, diamètres DN6 à DN1000, extrémités chanfreinées pour soudure bout à bout. Certificat matière EN 10204 3.1 sur demande.",
      "Carbon steel line pipe, welded (API 5L) and seamless (ASTM A106, A53 Gr.B, A333/A333M-05 Gr.6). Wall thickness SCH10 to SCH XXS, sizes DN6 to DN1000, bevelled ends for butt welding. EN 10204 3.1 material certificate on request.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone API 5L / A106 / A53 Gr.B / A333 Gr.6", "Carbon steel API 5L / A106 / A53 Gr.B / A333 Gr.6"),
    connectionType: "butt-weld",
    standards: ["api-5l", "astm-a106", "astm-a53", "astm-a333", "en10204"],
    sectorTags: ["energy", "water", "industry"],
    technicalSpecs: {
      pressureClass: "SCH10 – SCH XXS",
      connection: "butt-weld",
      connectionLabel: frEn("Soudure bout à bout (BW)", "Butt weld (BW)"),
      documentCount: 4,
    },
  }),
  base(TUBES, "tubes-acier-soudes", {
    reference: "TUBE-C-SOUDE",
    slug: "tubes-acier-soudes-api5l",
    name: frEn(
      "Tubes acier soudés — API 5L",
      "Welded carbon steel tubes — API 5L",
    ),
    description: frEn(
      "Tubes soudés longitudinalement ou en spirale pour conduites, nuance API 5L. Épaisseurs SCH10 à SCH XXS, diamètres DN6 à DN1000. Adaptés aux réseaux eau, hydrocarbures et gaz. Certificat 3.1 sur demande.",
      "Longitudinally or spirally welded line pipe to API 5L. Wall thickness SCH10 to SCH XXS, sizes DN6 to DN1000. For water, oil and gas networks. 3.1 certificate on request.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone API 5L", "API 5L carbon steel"),
    connectionType: "butt-weld",
    standards: ["api-5l", "en10204"],
    sectorTags: ["energy", "water", "industry"],
    technicalSpecs: {
      pressureClass: "SCH10 – SCH XXS",
      connection: "butt-weld",
      connectionLabel: frEn("Soudure bout à bout (BW)", "Butt weld (BW)"),
      documentCount: 4,
    },
  }),
  base(TUBES, "tubes-acier-sans-soudure", {
    reference: "TUBE-C-SMLS",
    slug: "tubes-acier-sans-soudure-a106-a53-a333",
    name: frEn(
      "Tubes acier sans soudure — ASTM A106 / A53 Gr.B / A333 Gr.6",
      "Seamless carbon steel tubes — ASTM A106 / A53 Gr.B / A333 Gr.6",
    ),
    description: frEn(
      "Tubes sans soudure pour service haute température (A106), usage général (A53 Gr.B) et basse température (A333/A333M-05 Gr.6). Épaisseurs SCH10 à SCH XXS, diamètres DN6 à DN1000.",
      "Seamless tubes for high temperature (A106), general service (A53 Gr.B) and low temperature (A333/A333M-05 Gr.6). Wall thickness SCH10 to SCH XXS, sizes DN6 to DN1000.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone A106 / A53 Gr.B / A333 Gr.6", "Carbon steel A106 / A53 Gr.B / A333 Gr.6"),
    connectionType: "butt-weld",
    standards: ["astm-a106", "astm-a53", "astm-a333", "en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "SCH10 – SCH XXS",
      connection: "butt-weld",
      connectionLabel: frEn("Soudure bout à bout (BW)", "Butt weld (BW)"),
      documentCount: 4,
    },
  }),
  base(TUBES, "tubes-acier-inoxydable", {
    reference: "TUBE-SS-A312",
    slug: "tubes-acier-inoxydable-a312-tp304l-316l",
    name: frEn(
      "Tubes acier inoxydable — ASTM A312 TP304L / 316L / 309L / 310L",
      "Stainless steel tubes — ASTM A312 TP304L / 316L / 309L / 310L",
    ),
    description: frEn(
      "Tubes inox austénitiques ASTM A312, nuances TP304L, TP316L, TP309L et TP310L. Épaisseurs SCH10 à SCH80, diamètres DN6 à DN300, pour process, eau et fluides corrosifs.",
      "Austenitic stainless tubes to ASTM A312, grades TP304L, TP316L, TP309L and TP310L. Wall thickness SCH10 to SCH80, sizes DN6 to DN300, for process, water and corrosive fluids.",
    ),
    dn: null,
    pn: null,
    material: frEn("Inox ASTM A312 TP304L / 316L / 309L / 310L", "Stainless ASTM A312 TP304L / 316L / 309L / 310L"),
    connectionType: "butt-weld",
    standards: ["astm-a312", "en10204"],
    sectorTags: ["industry", "food", "water"],
    technicalSpecs: {
      pressureClass: "SCH10 – SCH80",
      connection: "butt-weld",
      connectionLabel: frEn("Soudure bout à bout (BW)", "Butt weld (BW)"),
      documentCount: 4,
    },
  }),
  base(TUBES, "tubes-carbone-pre-enrobes-3pe", {
    reference: "TUBE-C-3PE",
    slug: "tubes-acier-carbone-pre-enrobes-3pe",
    name: frEn(
      "Tube acier SCH40 pré-enrobé 3PE polypropylène",
      "SCH40 3PE polypropylene coated carbon steel tube",
    ),
    description: frEn(
      "Tube acier carbone SCH40 avec revêtement anticorrosion tricouche 3PE polypropylène. Nuances API 5L, ASTM A106 et A53 Gr.B. Diamètres DN80 à DN500, pour réseaux enterrés eau, pétrole et gaz.",
      "SCH40 carbon steel tube with a three-layer 3PE polypropylene corrosion coating. Grades API 5L, ASTM A106 and A53 Gr.B. Sizes DN80 to DN500, for buried water, oil and gas lines.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier carbone API 5L / A106 / A53 Gr.B", "Carbon steel API 5L / A106 / A53 Gr.B"),
    connectionType: "butt-weld",
    standards: ["api-5l", "astm-a106", "astm-a53", "en10204"],
    sectorTags: ["energy", "water"],
    technicalSpecs: {
      pressureClass: "SCH40",
      connection: "butt-weld",
      connectionLabel: frEn("Soudure bout à bout (BW)", "Butt weld (BW)"),
      documentCount: 4,
    },
  }),
  base(ACCESSORIES, "brides-en1092-acier-carbone", {
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
  base(ACCESSORIES, "brides-asme-b16-5-a105", {
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
  base(ACCESSORIES, "brides-inox-en1092-asme", {
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
  base(ACCESSORIES, "brides-acier-galvanise", {
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
