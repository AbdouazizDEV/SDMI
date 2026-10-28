import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "brides-pleines";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesPleinesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2122",
    slug: "serie-brides-pleines-2122-bride-pleine-en-acier-forge-gamme-performance-type-05-a-pn10-16",
    name: frEn("2122 - Bride pleine en acier forgé gamme Performance type 05/A PN10/16", "2122 - Flange pleine en steel forgé gamme Performance type 05/A PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2161",
    slug: "serie-brides-pleines-2161-bride-pleine-acier-forge-type-05-a",
    name: frEn("2161 - Bride pleine acier forgé type 05/A", "2161 - Flange pleine steel forgé type 05/A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2b20",
    slug: "serie-brides-pleines-2b20-bride-pleine-a-face-surelevee-inox-304l-class150-type-05b-pn20",
    name: frEn("2B20 - Bride pleine à face surélevée inox 304L class150 type 05B PN20", "2B20 - Flange pleine à face surélevée stainless 304L class150 type 05B PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2tp",
    slug: "serie-brides-pleines-2tp-bride-pleine-plate-tampon-plein-inox-304l-type-05a",
    name: frEn("2TP - Bride pleine plate tampon plein inox 304L type 05A", "2TP - Flange pleine plate tampon plein stainless 304L type 05A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2tp40",
    slug: "serie-brides-pleines-2tp40-bride-pleine-plate-tampon-plein-inox-304l-pn25-40-type-05a",
    name: frEn("2TP40 - Bride pleine plate tampon plein inox 304L PN25/40 type 05A", "2TP40 - Flange pleine plate tampon plein stainless 304L PN25/40 type 05A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2tpa",
    slug: "serie-brides-pleines-2tpa-bride-pleine-plate-amincie-face-plate-inox-304l-type-05-a-pn10",
    name: frEn("2TPA - Bride pleine plate amincie face plate inox 304L type 05/A PN10", "2TPA - Flange pleine plate amincie face plate stainless 304L type 05/A PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2tpb",
    slug: "serie-brides-pleines-2tpb-bride-pleine-plate-rf-inox-304l-type-05-b-en1092-1",
    name: frEn("2TPB - Bride pleine plate RF inox 304L type 05/B EN1092-1", "2TPB - Flange pleine plate RF stainless 304L type 05/B EN1092-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4b20",
    slug: "serie-brides-pleines-4b20-bride-pleine-a-face-surelevee-inox-316l-class150-type-05b-pn20",
    name: frEn("4B20 - Bride pleine à face surélevée inox 316L class150 type 05B PN20", "4B20 - Flange pleine à face surélevée stainless 316L class150 type 05B PN20"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4b50",
    slug: "serie-brides-pleines-4b50-bride-pleine-a-face-surelevee-inox-316l-class300-type-05b-pn50",
    name: frEn("4B50 - Bride pleine à face surélevée inox 316L class300 type 05B PN50", "4B50 - Flange pleine à face surélevée stainless 316L class300 type 05B PN50"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4tp",
    slug: "serie-brides-pleines-4tp-bride-pleine-plate-tampon-plein-inox-316l-type-05a-en1092-1-pn10-40",
    name: frEn("4TP - Bride pleine plate tampon plein inox 316L type 05A EN1092-1 PN10/40", "4TP - Flange pleine plate tampon plein stainless 316L type 05A EN1092-1 PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4tp40",
    slug: "serie-brides-pleines-4tp40-bride-pleine-plate-tampon-plein-inox-316l-pn25-40-type-05a",
    name: frEn("4TP40 - Bride pleine plate tampon plein inox 316L PN25/40 type 05A", "4TP40 - Flange pleine plate tampon plein stainless 316L PN25/40 type 05A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4tpa",
    slug: "serie-brides-pleines-4tpa-bride-pleine-plate-amincie-face-plate-inox-316l-type-05-a-pn10",
    name: frEn("4TPA - Bride pleine plate amincie face plate inox 316L type 05/A PN10", "4TPA - Flange pleine plate amincie face plate stainless 316L type 05/A PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4tpb",
    slug: "serie-brides-pleines-4tpb-bride-pleine-plate-rf-inox-316l-type-05-b-en1092-1-pn10-16",
    name: frEn("4TPB - Bride pleine plate RF inox 316L type 05/B EN1092-1 PN10/16", "4TPB - Flange pleine plate RF stainless 316L type 05/B EN1092-1 PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
