import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "brides-a-collerettes";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesCollerettesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2100",
    slug: "serie-brides-a-collerettes-2100-bride-en-acier-forge-a-collerette-butt-welding-bw-type-11-b1-pn10-16-40",
    name: frEn("2100 - Bride en acier forgé à collerette Butt Welding BW type 11/B1 PN10/16/40", "2100 - Flange en steel forgé à collerette Butt Welding BW type 11/B1 PN10/16/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2101",
    slug: "serie-brides-a-collerettes-2101-bride-en-acier-forge-a-collerette-butt-welding-bw-type-11-b1-pn10",
    name: frEn("2101 - Bride en acier forgé à collerette Butt Welding BW type 11/B1 PN10", "2101 - Flange en steel forgé à collerette Butt Welding BW type 11/B1 PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2105",
    slug: "serie-brides-a-collerettes-2105-bride-a-collerette-type11-b1-excellence-butt-welding-bw-pn25-40",
    name: frEn("2105 - Bride à collerette type11/B1 Excellence Butt Welding BW PN25/40", "2105 - Flange à collerette type11/B1 Excellence Butt Welding BW PN25/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2123",
    slug: "serie-brides-a-collerettes-2123-bride-taraudee-type-13-b1-gamme-performance-pn10-16",
    name: frEn("2123 - Bride taraudée type 13/B1 gamme Performance PN10/16", "2123 - Flange taraudée type 13/B1 gamme Performance PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2124",
    slug: "serie-brides-a-collerettes-2124-bride-a-collerette-type-11-b1-butt-welding-bw-gamme-performance-pn6",
    name: frEn("2124 - Bride à collerette type 11/B1 Butt Welding BW gamme Performance PN6", "2124 - Flange à collerette type 11/B1 Butt Welding BW gamme Performance PN6"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2151",
    slug: "serie-brides-a-collerettes-2151-bride-a-collerette-type-11-b1-butt-welding-bw-pn6-gamme-excellence",
    name: frEn("2151 - Bride à collerette type 11/B1 Butt Welding BW PN6 gamme Excellence", "2151 - Flange à collerette type 11/B1 Butt Welding BW PN6 gamme Excellence"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2152",
    slug: "serie-brides-a-collerettes-2152-bride-a-collerette-11-b1-gamme-excellence-butt-welding-bw",
    name: frEn("2152 - Bride à collerette 11/B1 gamme Excellence Butt Welding BW", "2152 - Flange à collerette 11/B1 gamme Excellence Butt Welding BW"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2153",
    slug: "serie-brides-a-collerettes-2153-bride-a-collerette-electro-zinguee-excellence-butt-welding",
    name: frEn("2153 - Bride à collerette électro-zinguée Excellence Butt Welding", "2153 - Flange à collerette électro-zinguée Excellence Butt Welding"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2155",
    slug: "serie-brides-a-collerettes-2155-bride-a-collerette-simple-emboitement-male-butt-welding",
    name: frEn("2155 - Bride à collerette simple emboîtement mâle Butt Welding", "2155 - Flange à collerette simple emboîtement mâle Butt Welding"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2156",
    slug: "serie-brides-a-collerettes-2156-bride-collerette-simple-emboitement-femelle-butt-welding",
    name: frEn("2156 - Bride collerette simple emboîtement femelle Butt Welding", "2156 - Flange collerette simple emboîtement femelle Butt Welding"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2col40",
    slug: "serie-brides-a-collerettes-2col40-bride-a-collerette-a-souder-bw-inox-304l-11-b1-pn25-40",
    name: frEn("2COL40 - Bride à collerette à souder BW inox 304L 11/B1 PN25/40", "2COL40 - Flange à collerette à souder BW stainless 304L 11/B1 PN25/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2col50",
    slug: "serie-brides-a-collerettes-2col50-bride-a-collerette-a-souder-bw-inox-304l-type-11-b1-pn10-40",
    name: frEn("2COL50 - Bride à collerette à souder BW inox 304L Type 11/B1 PN10/40", "2COL50 - Flange à collerette à souder BW stainless 304L Type 11/B1 PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2so20",
    slug: "serie-brides-a-collerettes-2so20-bride-a-emmancher-a-collerette-inox-304l-type-12b-class150-pn20",
    name: frEn("2SO20 - Bride à emmancher à collerette inox 304L type 12B class150 PN20", "2SO20 - Flange à emmancher à collerette stainless 304L type 12B class150 PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2wn20",
    slug: "serie-brides-a-collerettes-2wn20-bride-a-collerette-inox-304l-a-souder-bw-type-11b-class150-pn20",
    name: frEn("2WN20 - Bride à collerette inox 304L à souder BW type 11B class150 PN20", "2WN20 - Flange à collerette stainless 304L à souder BW type 11B class150 PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4col",
    slug: "serie-brides-a-collerettes-4col-bride-a-collerette-a-souder-bw-inox-316l-type-11b-pn10-40",
    name: frEn("4COL - Bride à collerette à souder BW inox 316L type 11B PN10/40", "4COL - Flange à collerette à souder BW stainless 316L type 11B PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4col40",
    slug: "serie-brides-a-collerettes-4col40-bride-a-collerette-a-souder-bw-inox-316l-type-11b-pn40",
    name: frEn("4COL40 - Bride à collerette à souder BW inox 316L type 11B PN40", "4COL40 - Flange à collerette à souder BW stainless 316L type 11B PN40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4so20",
    slug: "serie-brides-a-collerettes-4so20-bride-a-emmancher-a-collerette-inox-316l-type-12b-class150-pn20",
    name: frEn("4SO20 - Bride à emmancher à collerette inox 316L type 12B class150 PN20", "4SO20 - Flange à emmancher à collerette stainless 316L type 12B class150 PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4so50",
    slug: "serie-brides-a-collerettes-4so50-bride-a-emmancher-a-collerette-inox-316l-type-12b-class300-pn50",
    name: frEn("4SO50 - Bride à emmancher à collerette inox 316L type 12B class300 PN50", "4SO50 - Flange à emmancher à collerette stainless 316L type 12B class300 PN50"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4wn20",
    slug: "serie-brides-a-collerettes-4wn20-bride-a-collerette-inox-316l-a-souder-bw-type-11b-class150-pn20",
    name: frEn("4WN20 - Bride à collerette inox 316L à souder BW type 11B class150 PN20", "4WN20 - Flange à collerette stainless 316L à souder BW type 11B class150 PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4wn50",
    slug: "serie-brides-a-collerettes-4wn50-bride-a-collerette-inox-316l-a-souder-bw-type-11b-class300-pn50",
    name: frEn("4WN50 - Bride à collerette inox 316L à souder BW type 11B class300 PN50", "4WN50 - Flange à collerette stainless 316L à souder BW type 11B class300 PN50"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
