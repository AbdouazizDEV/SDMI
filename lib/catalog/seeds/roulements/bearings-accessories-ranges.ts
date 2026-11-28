import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "roulements";
const SUB = "bearings-accessories";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return {
    ...partial,
    listingKind: "range",
    familySlug: FAMILY,
    subfamilySlug: SUB,
  };
}

export const bearings_accessories_ranges: CatalogRangeSeed[] = [
  base({
    reference: "H",
    slug: "serie-manchons-de-serrage",
    name: frEn("Manchons de serrage", "Adapter sleeves"),
    description: frEn(
      "Manchons faciles à installer pour fixer les roulements à alésage conique sur arbres lisses ou épaulés.",
      "Easy-to-install sleeves to locate bearings with a tapered bore on smooth or stepped shafts.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "AH",
    slug: "serie-manchons-de-demontage",
    name: frEn("Manchons de démontage", "Withdrawal sleeves"),
    description: frEn(
      "Manchons coniques fendus facilitant le montage et le démontage de roulements à alésage conique sur portée cylindrique d'arbres épaulés.",
      "Slotted tapered sleeves that facilitate mounting and dismounting of bearings with a tapered bore on cylindrical seating of stepped shafts.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "KM",
    slug: "serie-ecrous-de-serrage",
    name: frEn("Écrous de serrage", "Lock nuts"),
    description: frEn(
      "Bloquent les roulements sur l'arbre, montent ou démontent des roulements sur manchons, immobilisent pignons, poulies et autres composants.",
      "Used to locate bearings on a shaft, mount or dismount bearings on sleeves, and secure gears, pulleys and other machine components.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
];

