import type { CatalogRangeSeed } from "@/lib/catalog/range-product";
import { petroleumNeedleValveRanges } from "@/lib/catalog/seeds/petroleum-needle-valve-ranges";

const FAMILY = "robinets-soupape-pointeau";
const SUB = "robinets-a-pointeau";

const FROM_PETROLEUM = new Set([
  "481", "483", "484", "486", "487", "488", "489",
]);

function frEn(fr: string, en: string) {
  return { fr, en };
}

function remapFromPetroleum(seed: CatalogRangeSeed): CatalogRangeSeed {
  const suffix = seed.slug.replace(/^serie-\d+-robinet-pointeau-/, "");
  return {
    ...seed,
    familySlug: FAMILY,
    subfamilySlug: SUB,
    slug: `serie-${seed.reference}-gamme-pointeau-${suffix}`,
    certified31: seed.certified31 ?? false,
  };
}

/** Robinets à pointeau — gammes industrielles (hors pétrole + reprise séries communes). */
export const industrialNeedleValveRanges: CatalogRangeSeed[] = [
  ...petroleumNeedleValveRanges
    .filter((s) => FROM_PETROLEUM.has(s.reference))
    .map(remapFromPetroleum),
  {
    reference: "482",
    slug: "serie-482-robinet-pointeau-bronze-bsp-ff",
    name: frEn(
      "Robinet à pointeau bronze — femelle/femelle BSP",
      "Bronze needle valve — BSP F/F",
    ),
    description: frEn(
      "Prélèvement et réglage fin sur réseaux taraudés.",
      "Sampling and fine adjustment on threaded lines.",
    ),
    dn: null,
    pn: null,
    material: frEn("Bronze", "Bronze"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  },
];
