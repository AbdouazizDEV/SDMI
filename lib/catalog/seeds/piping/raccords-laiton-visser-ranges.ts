import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "raccords-laiton-a-visser";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const raccordsLaitonVisserRanges: CatalogRangeSeed[] = [
  base({
    reference: "embout",
    slug: "serie-raccords-laiton-a-visser-embout-laiton-cw617n-cannele-femelle-bsp-ref-2800",
    name: frEn("Embout laiton CW617N cannelé femelle BSP Ref.2800", "Embout brass CW617N cannelé femelle BSP Ref.2800"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "embout",
    slug: "serie-raccords-laiton-a-visser-embout-laiton-cw617n-cannele-male-bsp-ref-2820",
    name: frEn("Embout laiton CW617N cannelé mâle BSP Ref.2820", "Embout brass CW617N cannelé mâle BSP Ref.2820"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
