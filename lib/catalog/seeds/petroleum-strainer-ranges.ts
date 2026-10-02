import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinetterie-petrole-forgee-moulee";
const SUB = "filtres-petrole-forge-moule";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function slug(ref: string, suffix: string) {
  return `serie-${ref}-filtre-petrole-${suffix}`;
}

/** Filtres pétrole forgé / moulé — gammes par série. */
export const petroleumStrainerRanges: CatalogRangeSeed[] = [
  {
    reference: "231",
    slug: slug("231", "forge-class800-bsp"),
    name: frEn(
      "Filtre à tamis acier forgé Class 800 — BSP F/F",
      "Forged steel strainer Class 800 — BSP F/F",
    ),
    description: frEn(
      "Corps forgé, tamis intégré, protection des organes en aval sur lignes hydrocarbures.",
      "Forged body, integrated screen, downstream equipment protection on hydrocarbon lines.",
    ),
    dn: null,
    pn: "Class 800",
    material: frEn("Acier forgé A105N", "Forged steel A105N"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["energy"],
    certified31: true,
    technicalSpecs: {
      pressureClass: "Class 800",
      connection: "bsp",
      bodyProcess: "forged",
      documentCount: 4,
    },
  },
  {
    reference: "232",
    slug: slug("232", "forge-class800-sw"),
    name: frEn("Filtre à tamis acier forgé Class 800 — SW", "Forged steel strainer Class 800 — SW"),
    description: frEn(
      "Soudure socket, même gamme forgée pour réseaux process soudés.",
      "Socket weld, same forged range for welded process networks.",
    ),
    dn: null,
    pn: "Class 800",
    material: frEn("Acier forgé A105N", "Forged steel A105N"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "sw",
    standards: ["en10204"],
    sectorTags: ["energy"],
    certified31: true,
    technicalSpecs: {
      pressureClass: "Class 800",
      connection: "sw",
      bodyProcess: "forged",
      documentCount: 4,
    },
  },
  {
    reference: "234",
    slug: slug("234", "forge-class800-npt"),
    name: frEn("Filtre à tamis acier forgé Class 800 — NPT", "Forged steel strainer Class 800 — NPT"),
    description: frEn(
      "Raccordement NPT F/F, filtration en ligne compacte.",
      "NPT F/F ends, compact in-line filtration.",
    ),
    dn: null,
    pn: "Class 800",
    material: frEn("Acier forgé A105N", "Forged steel A105N"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["energy"],
    certified31: true,
    technicalSpecs: { pressureClass: "Class 800", connection: "npt", bodyProcess: "forged", documentCount: 4 },
  },
  {
    reference: "239",
    slug: slug("239", "inox-forge-y-class800-npt"),
    name: frEn("Filtre en Y inox forgé Class 800 — NPT", "Forged stainless Y-strainer Class 800 — NPT"),
    description: frEn(
      "Configuration en Y, inox forgé, fluides corrosifs et process pétrochimie.",
      "Y-pattern, forged stainless, corrosive fluids and petrochemical process.",
    ),
    dn: null,
    pn: "Class 800",
    material: frEn("Inox forgé F316", "Forged F316 stainless"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["energy", "agro"],
    certified31: true,
    technicalSpecs: { pressureClass: "Class 800", connection: "npt", bodyProcess: "forged", documentCount: 4 },
  },
  {
    reference: "235",
    slug: slug("235", "y-acier-brides-pn40"),
    name: frEn("Filtre en Y à tamis acier — brides PN40", "Steel Y-strainer — PN40 flanged"),
    description: frEn(
      "Filtre en Y à brides, acier, réseaux industriels sous pression.",
      "Flanged Y-strainer, steel body, pressurized industrial networks.",
    ),
    dn: null,
    pn: "PN40",
    material: frEn("Acier", "Steel"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "PN40", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  },
  {
    reference: "243",
    slug: slug("243", "y-acier-brides-class150"),
    name: frEn("Filtre en Y à tamis acier — brides Class 150", "Steel Y-strainer — Class 150 RF"),
    description: frEn(
      "Tamis en Y, brides RF Class 150 PN20, protection pompes et organes.",
      "Y strainer, RF flanges Class 150 PN20, pump and equipment protection.",
    ),
    dn: null,
    pn: "PN20",
    material: frEn("Acier", "Steel"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "Class 150", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  },
  {
    reference: "244",
    slug: slug("244", "y-acier-brides-class300"),
    name: frEn("Filtre en Y à tamis acier — brides Class 300", "Steel Y-strainer — Class 300 RF"),
    description: frEn(
      "Class 300 PN50, filtration en amont des réseaux pétrole haute pression.",
      "Class 300 PN50, upstream filtration on high-pressure oil networks.",
    ),
    dn: null,
    pn: "PN50",
    material: frEn("Acier", "Steel"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "Class 300", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  },
];
