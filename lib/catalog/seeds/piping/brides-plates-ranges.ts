import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "brides-plates";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesPlatesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2120",
    slug: "serie-brides-plates-2120-bride-plate-amincie-acier-forge-gamme-performance-pn10a",
    name: frEn("2120 - Bride plate amincie acier forgé gamme Performance PN10A", "2120 - Flange plate amincie steel forgé gamme Performance PN10A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2121",
    slug: "serie-brides-plates-2121-bride-plate-acier-forge-a-souder-gamme-performance-type-01-a",
    name: frEn("2121 - Bride plate acier forgé à souder gamme Performance type 01/A", "2121 - Flange plate steel forgé à souder gamme Performance type 01/A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2160",
    slug: "serie-brides-plates-2160-bride-plate-acier-forge-a-souder-gamme-excellence-type-01-a",
    name: frEn("2160 - Bride plate acier forgé à souder gamme Excellence type 01/A", "2160 - Flange plate steel forgé à souder gamme Excellence type 01/A"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2pas40",
    slug: "serie-brides-plates-2pas40-bride-plate-a-souder-inox-304l-type-01-a-en1092-1",
    name: frEn("2PAS40 - Bride plate à souder inox 304L type 01/A EN1092-1", "2PAS40 - Flange plate à souder stainless 304L type 01/A EN1092-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2pasb",
    slug: "serie-brides-plates-2pasb-bride-plate-a-souder-rf-inox-304l-type-01-b-en1092-1",
    name: frEn("2PASB - Bride plate à souder RF inox 304L type 01/B EN1092-1", "2PASB - Flange plate à souder RF stainless 304L type 01/B EN1092-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2pt",
    slug: "serie-brides-plates-2pt-bride-plate-taraudee-femelle-femelle-bsp-inox-304l",
    name: frEn("2PT - Bride plate taraudée femelle femelle BSP inox 304L", "2PT - Flange plate taraudée femelle femelle BSP stainless 304L"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4pas40",
    slug: "serie-brides-plates-4pas40-bride-plate-a-souder-inox-316l-type-01-a-en1092-1",
    name: frEn("4PAS40 - Bride plate à souder inox 316L type 01/A EN1092-1", "4PAS40 - Flange plate à souder stainless 316L type 01/A EN1092-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4pasb",
    slug: "serie-brides-plates-4pasb-bride-plate-a-souder-rf-inox-304l-type-01-b-en1092-1",
    name: frEn("4PASB - Bride plate à souder RF inox 304L type 01/B EN1092-1", "4PASB - Flange plate à souder RF stainless 304L type 01/B EN1092-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204","en1092"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4pt",
    slug: "serie-brides-plates-4pt-bride-plate-taraudee-bsp-face-plate-inox-316l-femelle-pn10-16",
    name: frEn("4PT - Bride plate taraudée BSP face plate inox 316L femelle PN10/16", "4PT - Flange plate taraudée BSP face plate stainless 316L femelle PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
