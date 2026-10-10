import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "collets-forges";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const colletsForgesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2pas",
    slug: "serie-collets-forges-2pas-bride-plate-a-souder-inox-304l-type-01-a-en1092-1-pn10-40",
    name: frEn("2PAS - Bride plate à souder inox 304L type 01/A EN1092-1 PN10/40", "2PAS - Flange plate à souder stainless 304L type 01/A EN1092-1 PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2pasa",
    slug: "serie-collets-forges-2pasa-bride-plate-amincie-a-souder-inox-304l-type-01-a-en1092-1-pn10",
    name: frEn("2PASA - Bride plate amincie à souder inox 304L type 01/A EN1092-1 PN10", "2PASA - Flange plate amincie à souder stainless 304L type 01/A EN1092-1 PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4ce",
    slug: "serie-collets-forges-4ce-collet-a-souder-inox-316l-iso-usine-epais-type-37",
    name: frEn("4CE - Collet à souder inox 316L ISO usiné épais type 37", "4CE - Forged fitting à souder stainless 316L ISO usiné épais type 37"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "4cm",
    slug: "serie-collets-forges-4cm-collet-a-souder-inox-316l-iso-embouti-type-33",
    name: frEn("4CM - Collet à souder inox 316L ISO embouti type 33", "4CM - Forged fitting à souder stainless 316L ISO embouti type 33"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "4pas",
    slug: "serie-collets-forges-4pas-bride-plate-a-souder-inox-316l-type-01-a-en1092-1-pn10-40",
    name: frEn("4PAS - Bride plate à souder inox 316L type 01/A EN1092-1 PN10/40", "4PAS - Flange plate à souder stainless 316L type 01/A EN1092-1 PN10/40"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4pasa",
    slug: "serie-collets-forges-4pasa-bride-plate-amincie-a-souder-inox-316l-type-01-a-en1092-1-pn10",
    name: frEn("4PASA - Bride plate amincie à souder inox 316L type 01/A EN1092-1 PN10", "4PASA - Flange plate amincie à souder stainless 316L type 01/A EN1092-1 PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
