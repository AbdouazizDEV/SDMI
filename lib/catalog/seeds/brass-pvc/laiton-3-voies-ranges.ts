import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-3-voies";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const brassThreeWayBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "513",
    slug: "serie-513-vanne-a-sphere-laiton-3-voies-en-l-femelle-bsp",
    name: frEn("513 - Vanne à sphère laiton 3 voies en L femelle BSP", "513 - Ball valve brass 3 voies en L femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "514",
    slug: "serie-514-vanne-a-sphere-laiton-3-voies-en-t-femelle-bsp",
    name: frEn("514 - Vanne à sphère laiton 3 voies en T femelle BSP", "514 - Ball valve brass 3 voies en T femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "534",
    slug: "serie-534-vanne-a-sphere-laiton-4ms-3-voies-en-l-passage-integral-femelle-bsp",
    name: frEn("534 - Vanne à sphère laiton 4MS 3 voies en L passage intégral femelle BSP", "534 - Ball valve brass 4MS 3 voies en L passage intégral femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "535",
    slug: "serie-535-vanne-a-sphere-laiton-4ms-3-voies-en-t-passage-standard-femelle-bsp",
    name: frEn("535 - Vanne à sphère laiton 4MS 3 voies en T passage standard femelle BSP", "535 - Ball valve brass 4MS 3 voies en T passage standard femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "589",
    slug: "serie-589-vanne-a-sphere-laiton-titre-3-voies-en-y",
    name: frEn("589 - Vanne à sphère laiton titré 3 voies en Y", "589 - Ball valve brass titré 3 voies en Y"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
