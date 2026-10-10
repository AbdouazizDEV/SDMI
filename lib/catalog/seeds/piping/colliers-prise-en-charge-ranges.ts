import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "colliers-de-prise-en-charge";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const colliersPriseEnChargeRanges: CatalogRangeSeed[] = [
  base({
    reference: "1189",
    slug: "serie-colliers-de-prise-en-charge-1189-collier-de-prise-en-charge-polypropylene-pour-tube-pe-femelle-bsp",
    name: frEn("1189 - Collier de prise en charge Polypropylène pour tube PE femelle BSP", "1189 - Saddle clamp de prise en charge Polypropylène pour tube PE femelle BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "1190",
    slug: "serie-colliers-de-prise-en-charge-1190-collier-de-prise-en-charge-corps-fonte-gjs-pour-multitubes",
    name: frEn("1190 - Collier de prise en charge corps fonte GJS pour multitubes", "1190 - Saddle clamp de prise en charge corps cast iron GJS pour multitubes"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1401",
    slug: "serie-colliers-de-prise-en-charge-1401-collier-de-reparation-type-m-1-tirant-l80mm-joint-epdm-acs",
    name: frEn("1401 - Collier de réparation type M 1 tirant L80mm joint EPDM ACS", "1401 - Saddle clamp de réparation type M 1 tirant L80mm joint EPDM ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1403",
    slug: "serie-colliers-de-prise-en-charge-1403-collier-de-reparation-b-3-tirants-l200mm-joint-epdm-acs",
    name: frEn("1403 - Collier de réparation B 3 tirants L200mm joint EPDM ACS", "1403 - Saddle clamp de réparation B 3 tirants L200mm joint EPDM ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1405",
    slug: "serie-colliers-de-prise-en-charge-1405-collier-de-reparation-b-3-tirants-l200mm-joint-nbr",
    name: frEn("1405 - Collier de réparation B 3 tirants L200mm joint NBR", "1405 - Saddle clamp de réparation B 3 tirants L200mm joint NBR"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1406",
    slug: "serie-colliers-de-prise-en-charge-1406-collier-de-reparation-epdm-200mm-type-d-3x2tirants-acs",
    name: frEn("1406 - Collier de réparation EPDM 200mm type D 3x2tirants ACS", "1406 - Saddle clamp de réparation EPDM 200mm type D 3x2tirants ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1407",
    slug: "serie-colliers-de-prise-en-charge-1407-collier-de-reparation-inox-3-tirants-type-ab-l200mm-joints-epdm",
    name: frEn("1407 - Collier de réparation inox 3 tirants type AB L200mm joints EPDM", "1407 - Saddle clamp de réparation stainless 3 tirants type AB L200mm joints EPDM"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1408",
    slug: "serie-colliers-de-prise-en-charge-1408-collier-de-reparation-300mm-simple-bande-4-tirants-acs",
    name: frEn("1408 - Collier de réparation 300mm Simple Bande 4 Tirants ACS", "1408 - Saddle clamp de réparation 300mm Simple Bande 4 Tirants ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1409",
    slug: "serie-colliers-de-prise-en-charge-1409-collier-de-reparation-double-bande-300mm-2x4-tirants",
    name: frEn("1409 - Collier de réparation double bande 300mm 2x4 tirants", "1409 - Saddle clamp de réparation double bande 300mm 2x4 tirants"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
