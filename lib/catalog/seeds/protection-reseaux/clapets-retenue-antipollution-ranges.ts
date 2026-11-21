import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "protection-regulation-des-reseaux";
const SUB = "clapets-de-retenue-antipollution";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const clapetsRetenueAntipollutionRanges: CatalogRangeSeed[] = [
  base({
    reference: "1308",
    slug: "serie-1308-purge-laiton-brosse-avec-bouchon-imperdable-1-4pouces",
    name: frEn("1308 - Purge laiton brossé avec bouchon imperdable 1/4''", "1308 - Purge brass brossé avec bouchon imperdable 1/4''"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "340",
    slug: "serie-340-clapet-antipollution-ea3046-nf-acs-femelle-male-purges-polyamide",
    name: frEn("340 - Clapet antipollution EA3046 NF ACS femelle mâle purges polyamide", "340 - Check valve anti-pollution EA3046 NF ACS femelle mâle purges polyamide"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "341",
    slug: "serie-341-clapet-antipollution-ea3045-nf-acs-femelle-purges-polyamide",
    name: frEn("341 - Clapet antipollution EA3045 NF ACS femelle purges polyamide", "341 - Check valve anti-pollution EA3045 NF ACS femelle purges polyamide"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "342",
    slug: "serie-342-clapet-antipollution-ea3046-nf-acs-femelle-male-court-laiton",
    name: frEn("342 - Clapet antipollution EA3046 NF ACS femelle mâle court laiton", "342 - Check valve anti-pollution EA3046 NF ACS femelle mâle court brass"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "343",
    slug: "serie-343-clapet-antipollution-ea3046-nf-acs-femelle-male-bouchons-laiton",
    name: frEn("343 - Clapet antipollution EA3046 NF ACS femelle mâle bouchons laiton", "343 - Check valve anti-pollution EA3046 NF ACS femelle mâle bouchons brass"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "344",
    slug: "serie-344-clapet-antipollution-ea3045-nf-acs-femelle-bouchons-laiton",
    name: frEn("344 - Clapet antipollution EA3045 NF ACS femelle bouchons laiton", "344 - Check valve anti-pollution EA3045 NF ACS femelle bouchons brass"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "345",
    slug: "serie-345-clapet-antipollution-ea3046-nf-acs-equerre-femelle-male",
    name: frEn("345 - Clapet antipollution EA3046 NF ACS équerre femelle mâle", "345 - Check valve anti-pollution EA3046 NF ACS équerre femelle mâle"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "346",
    slug: "serie-346-clapet-antipollution-ea-577-fonte-a-brides-acs-nf",
    name: frEn("346 - Clapet antipollution EA 577 fonte à brides ACS NF", "346 - Check valve anti-pollution EA 577 cast iron à brides ACS NF"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "348",
    slug: "serie-348-clapet-antipollution-ea3046-nf-acs-femelle-male-purge-imperdable",
    name: frEn("348 - Clapet antipollution EA3046 NF ACS femelle mâle purge imperdable", "348 - Check valve anti-pollution EA3046 NF ACS femelle mâle purge imperdable"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "98000",
    slug: "serie-98000-bouchon-pour-clapet-antipollution-nf-type-ea3046",
    name: frEn("98000 - Bouchon pour clapet antipollution NF type EA3046", "98000 - Bouchon pour Check valve anti-pollution NF type EA3046"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
