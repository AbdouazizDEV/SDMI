import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-operucle-guillotine";
const SUB = "accessoires-vannes-guillotine";

function frEn(fr: string, en: string) {
  return { fr, en };
}

/** Accessoires guillotine S-GATE (kits joints, supports). */
export const knifeGateAccessoryRanges: CatalogRangeSeed[] = [
  {
    reference: "98020",
    slug: "kit-98020-plaques-support-inox-guillotine",
    name: frEn(
      "Kit plaques support inox avec visserie — vanne guillotine",
      "Stainless support plate kit with screws — knife gate valve",
    ),
    description: frEn(
      "Fixation et alignement des vannes guillotine sur réseau.",
      "Mounting and alignment of knife gate valves on line.",
    ),
    dn: null,
    pn: null,
    material: frEn("Inox", "Stainless steel"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
  {
    reference: "KIT-GU-UNI",
    slug: "kit-joints-etancheite-guillotine-unidirectionnelle",
    name: frEn(
      "Kit de joints d'étanchéité — guillotine unidirectionnelle",
      "Sealing gasket kit — unidirectional knife gate",
    ),
    description: frEn(
      "Consommables de maintenance pour gamme unidirectionnelle.",
      "Maintenance consumables for unidirectional range.",
    ),
    dn: null,
    pn: null,
    material: frEn("Elastomère", "Elastomer"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
  {
    reference: "KIT-GU-BI",
    slug: "kit-joints-etancheite-guillotine-bidirectionnelle",
    name: frEn(
      "Kit de joints d'étanchéité — guillotine bidirectionnelle",
      "Sealing gasket kit — bidirectional knife gate",
    ),
    description: frEn(
      "Joints de rechange pour vannes bidirectionnelles S-GATE.",
      "Replacement gaskets for S-GATE bidirectional valves.",
    ),
    dn: null,
    pn: null,
    material: frEn("Elastomère", "Elastomer"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
  {
    reference: "KIT-GU-PT",
    slug: "kit-joints-nbr-guillotine-pelle-traversante",
    name: frEn(
      "Kit de joints NBR — guillotine à pelle traversante",
      "NBR gasket kit — through-blade knife gate",
    ),
    description: frEn(
      "Étanchéité NBR pour gamme à pelle traversante.",
      "NBR sealing for through-blade range.",
    ),
    dn: null,
    pn: null,
    material: frEn("NBR", "NBR"),
    familySlug: FAMILY,
    subfamilySlug: SUB,
    listingKind: "range",
    sectorTags: ["water"],
    technicalSpecs: { documentCount: 2 },
  },
];
