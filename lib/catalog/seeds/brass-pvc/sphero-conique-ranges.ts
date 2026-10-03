import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-sphero-conique";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const spheroConiqueBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "524",
    slug: "serie-524-vanne-a-sphere-laiton-4ms-avec-raccord-demontable-male-femelle-bsp",
    name: frEn("524 - Vanne à sphère laiton 4MS avec raccord démontable mâle femelle BSP", "524 - Ball valve brass 4MS avec raccord démontable mâle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "620",
    slug: "serie-620-vanne-a-sphere-laiton-nf-rob-gaz-airagas-femelle-femelle-bsp-sphero-conique",
    name: frEn("620 - Vanne à sphère laiton NF ROB-GAZ Airagas femelle femelle BSP", "620 - Ball valve brass NF ROB-GAZ Airagas femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "670",
    slug: "serie-670-vanne-sphere-laiton-a-raccordement-sphero-conique-male-male-manette-rouge",
    name: frEn("670 - Vanne sphère laiton à raccordement sphéro-conique mâle mâle manette rouge", "670 - Vanne sphère brass à raccordement sphéro-conique mâle mâle manette rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "675",
    slug: "serie-675-vanne-a-sphere-laiton-a-raccordement-sphero-conique-male-femelle-bsp-1-2pouces",
    name: frEn("675 - Vanne à sphère laiton à raccordement sphéro-conique mâle femelle BSP 1/2&#039;&#039;", "675 - Ball valve brass à raccordement sphéro-conique mâle femelle BSP 1/2&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
