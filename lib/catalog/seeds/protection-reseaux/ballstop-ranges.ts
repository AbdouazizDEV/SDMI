import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "protection-regulation-des-reseaux";
const SUB = "vannes-a-sphere-avec-clapet-anti-retour-ballstop";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const ballstopRanges: CatalogRangeSeed[] = [
  base({
    reference: "324",
    slug: "serie-324-vanne-a-sphere-avec-clapet-antipollution-scudoball-acs",
    name: frEn("324 - Vanne à sphère avec clapet antipollution Scudoball ACS", "324 - Ball valve avec Check valve anti-pollution Scudoball ACS"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "324250",
    slug: "serie-324250-clapet-anti-retour-antipollution-ea-avec-vanne-incorporee",
    name: frEn("324250 - Clapet Anti retour Antipollution EA avec Vanne Incorporée", "324250 - Check valve Anti retour anti-pollution EA avec Vanne Incorporée"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
