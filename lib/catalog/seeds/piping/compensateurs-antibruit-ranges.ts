import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "manchons-compensateurs-antibruit";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const compensateursAntibruitRanges: CatalogRangeSeed[] = [
  base({
    reference: "1509",
    slug: "serie-manchons-compensateurs-antibruit-1509-manchon-antibruit-epdm-a-inserts-taraudes-acier-pn10",
    name: frEn("1509 - Manchon antibruit EPDM à inserts taraudés acier PN10", "1509 - Coupling antibruit EPDM à inserts taraudés steel PN10"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
