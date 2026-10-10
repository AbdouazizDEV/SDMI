import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "brides-taraudees";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesTaraudeesRanges: CatalogRangeSeed[] = [
  base({
    reference: "2123",
    slug: "serie-brides-taraudees-2123-bride-taraudee-type-13-b1-gamme-performance-pn10-16",
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
    reference: "2157",
    slug: "serie-brides-taraudees-2157-bride-taraudee-acier-forge-type-13-b1-gamme-excellence",
    name: frEn("2157 - Bride taraudée acier forgé type 13/B1 gamme Excellence", "2157 - Flange taraudée steel forgé type 13/B1 gamme Excellence"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2158",
    slug: "serie-brides-taraudees-2158-bride-taraudee-acier-zingue-forge-type-13-b1-gamme-excellence",
    name: frEn("2158 - Bride taraudée acier zingué forgé type 13/B1 gamme Excellence", "2158 - Flange taraudée steel zingué forgé type 13/B1 gamme Excellence"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
