import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "brides-petrole-asme";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesPetroleRanges: CatalogRangeSeed[] = [
  base({
    reference: "2b20",
    slug: "serie-brides-petrole-asme-2b20-bride-pleine-a-face-surelevee-inox-304l-class150-type-05b-pn20",
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
    reference: "2lj20",
    slug: "serie-brides-petrole-asme-2lj20-bride-tournante-inox-304l-forge-lap-joint-class150-pn20-ansi-b16-9",
    name: frEn("2LJ20 - Bride tournante inox 304L forgé lap joint class150 PN20 ANSI B16.9", "2LJ20 - Flange tournante stainless 304L forgé lap joint class150 PN20 ANSI B16.9"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2so20",
    slug: "serie-brides-petrole-asme-2so20-bride-a-emmancher-a-collerette-inox-304l-type-12b-class150-pn20",
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
    slug: "serie-brides-petrole-asme-2wn20-bride-a-collerette-inox-304l-a-souder-bw-type-11b-class150-pn20",
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
    reference: "4b20",
    slug: "serie-brides-petrole-asme-4b20-bride-pleine-a-face-surelevee-inox-316l-class150-type-05b-pn20",
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
    slug: "serie-brides-petrole-asme-4b50-bride-pleine-a-face-surelevee-inox-316l-class300-type-05b-pn50",
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
    reference: "4lj20",
    slug: "serie-brides-petrole-asme-4lj20-bride-tournante-inox-316l-forge-lap-joint-class150-pn20-ansi-b16-9",
    name: frEn("4LJ20 - Bride tournante inox 316L forgé lap joint class150 PN20 ANSI B16.9", "4LJ20 - Flange tournante stainless 316L forgé lap joint class150 PN20 ANSI B16.9"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4lj50",
    slug: "serie-brides-petrole-asme-4lj50-bride-tournante-inox-316l-forge-lap-joint-class300-pn50-ansi-b16-9",
    name: frEn("4LJ50 - Bride tournante inox 316L forgé lap joint class300 PN50 ANSI B16.9", "4LJ50 - Flange tournante stainless 316L forgé lap joint class300 PN50 ANSI B16.9"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4so20",
    slug: "serie-brides-petrole-asme-4so20-bride-a-emmancher-a-collerette-inox-316l-type-12b-class150-pn20",
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
    slug: "serie-brides-petrole-asme-4so50-bride-a-emmancher-a-collerette-inox-316l-type-12b-class300-pn50",
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
    slug: "serie-brides-petrole-asme-4wn20-bride-a-collerette-inox-316l-a-souder-bw-type-11b-class150-pn20",
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
    slug: "serie-brides-petrole-asme-4wn50-bride-a-collerette-inox-316l-a-souder-bw-type-11b-class300-pn50",
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
