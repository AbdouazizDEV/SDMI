import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-operucle-guillotine";
const SUB_UNI = "vannes-guillotine-s-gate-unidirectionnelles";
const SUB_BI = "vannes-guillotine-s-gate-bidirectionnelles";
const SUB_PELLE = "vannes-guillotine-s-gate-pelle-traversante";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function slug(ref: string, suffix: string) {
  return `serie-${ref}-vanne-guillotine-${suffix}`;
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

/** Vannes à guillotine S-GATE — eaux usées, pâte, fluides chargés. */
export const knifeGateValveRanges: CatalogRangeSeed[] = [
  base(SUB_UNI, {
    reference: "170",
    slug: slug("170", "uni-fonte-nbr"),
    name: frEn(
      "Vanne à guillotine unidirectionnelle fonte — siège NBR",
      "Unidirectional knife gate — cast iron, NBR seat",
    ),
    description: frEn(
      "Pelle caoutchouc, fluides chargés et eaux usées.",
      "Rubber blade, loaded fluids and wastewater.",
    ),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base(SUB_UNI, {
    reference: "171",
    slug: slug("171", "uni-fonte-epdm"),
    name: frEn("Vanne à guillotine unidirectionnelle fonte — siège EPDM", "Unidirectional knife gate — cast iron, EPDM seat"),
    description: frEn("Siège EPDM, même gamme unidirectionnelle.", "EPDM seat, same unidirectional range."),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base(SUB_UNI, {
    reference: "172",
    slug: slug("172", "uni-inox-epdm"),
    name: frEn("Vanne à guillotine unidirectionnelle inox — siège EPDM", "Unidirectional knife gate — stainless, EPDM seat"),
    description: frEn("Corps inox, milieux corrosifs et boues.", "Stainless body, corrosive media and sludge."),
    dn: null,
    pn: "PN10",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", documentCount: 4 },
  }),
  base(SUB_UNI, {
    reference: "173",
    slug: slug("173", "uni-inox-siege-metal-non-etanche"),
    name: frEn(
      "Vanne à guillotine unidirectionnelle inox — siège métal non étanche",
      "Unidirectional knife gate — stainless, metal seat (non tight)",
    ),
    description: frEn(
      "Siège métal/métal, applications boues et fluides abrasifs.",
      "Metal-to-metal seat, sludge and abrasive fluid service.",
    ),
    dn: null,
    pn: "PN10",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", documentCount: 4 },
  }),
  base(SUB_UNI, {
    reference: "176",
    slug: slug("176", "uni-fonte-siege-metal-metal"),
    name: frEn(
      "Vanne à guillotine unidirectionnelle fonte — siège métal/métal",
      "Unidirectional knife gate — cast iron, metal/metal seat",
    ),
    description: frEn(
      "Pelle métal, service eaux usées à forte abrasion.",
      "Metal blade, abrasive wastewater service.",
    ),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base(SUB_BI, {
    reference: "177",
    slug: slug("177", "bi-fonte-epdm"),
    name: frEn("Vanne à guillotine bidirectionnelle fonte — siège EPDM", "Bidirectional knife gate — cast iron, EPDM seat"),
    description: frEn(
      "Bidirectionnelle, passage plein, réseaux chargés.",
      "Bidirectional, full port, loaded line service.",
    ),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base(SUB_BI, {
    reference: "178",
    slug: slug("178", "bi-fonte-nbr"),
    name: frEn("Vanne à guillotine bidirectionnelle fonte — siège NBR", "Bidirectional knife gate — cast iron, NBR seat"),
    description: frEn("NBR, bidirectionnelle pour eaux usées industrielles.", "NBR, bidirectional for industrial wastewater."),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base(SUB_PELLE, {
    reference: "179",
    slug: slug("179", "pelle-traversante-fonte-epdm"),
    name: frEn(
      "Vanne à guillotine à pelle traversante fonte — siège EPDM",
      "Through-blade knife gate — cast iron, EPDM seat",
    ),
    description: frEn(
      "Pelle traversante, fluides chargés et isolation réseau.",
      "Through-blade design, loaded fluids and line isolation.",
    ),
    dn: null,
    pn: "PN10",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN10", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
];
