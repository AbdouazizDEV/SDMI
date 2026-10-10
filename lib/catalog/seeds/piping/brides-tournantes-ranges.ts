import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "brides-tournantes";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesTournantesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2106",
    slug: "serie-brides-tournantes-2106-bride-tournante-plate-acier-type-02-a-pn10-16",
    name: frEn("2106 - Bride tournante plate acier type 02/A PN10/16", "2106 - Flange tournante plate steel type 02/A PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2be",
    slug: "serie-brides-tournantes-2be-bride-tournante-emboutie-inox-304l-point-bleu-pn10-din2642",
    name: frEn("2BE - Bride tournante emboutie inox 304L point bleu PN10 DIN2642", "2BE - Flange tournante emboutie stainless 304L point bleu PN10 DIN2642"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2bt",
    slug: "serie-brides-tournantes-2bt-bride-tournante-plate-inox-304l-type-02-a-pn10-40",
    name: frEn("2BT - Bride tournante plate inox 304L type 02/A PN10/40", "2BT - Flange tournante plate stainless 304L type 02/A PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2lj20",
    slug: "serie-brides-tournantes-2lj20-bride-tournante-inox-304l-forge-lap-joint-class150-pn20-ansi-b16-9",
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
    reference: "4be",
    slug: "serie-brides-tournantes-4be-bride-tournante-emboutie-inox-316-point-bleu-pn10-din2642",
    name: frEn("4BE - Bride tournante emboutie inox 316 point bleu PN10 DIN2642", "4BE - Flange tournante emboutie stainless 316 point bleu PN10 DIN2642"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4bt",
    slug: "serie-brides-tournantes-4bt-bride-tournante-plate-inox-316l-type-02-a-pn10-40",
    name: frEn("4BT - Bride tournante plate inox 316L type 02/A PN10/40", "4BT - Flange tournante plate stainless 316L type 02/A PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4lj20",
    slug: "serie-brides-tournantes-4lj20-bride-tournante-inox-316l-forge-lap-joint-class150-pn20-ansi-b16-9",
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
    slug: "serie-brides-tournantes-4lj50-bride-tournante-inox-316l-forge-lap-joint-class300-pn50-ansi-b16-9",
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
    reference: "abe",
    slug: "serie-brides-tournantes-abe-bride-tournante-emboutie-acier-bichromate-point-bleu-din2642-pn10",
    name: frEn("ABE - Bride tournante emboutie acier bichromaté point bleu DIN2642 PN10", "ABE - Flange tournante emboutie steel bichromaté point bleu DIN2642 PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "abt",
    slug: "serie-brides-tournantes-abt-bride-tournante-aluminium-iso-type-c-din2642-pn10",
    name: frEn("ABT - Bride tournante aluminium ISO type C DIN2642 PN10", "ABT - Flange tournante aluminium ISO type C DIN2642 PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
