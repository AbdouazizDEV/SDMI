import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "roulements";
const SUB = "track-rollers";

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

export const track_rollers_ranges: CatalogRangeSeed[] = [
  base({
    reference: "CAM",
    slug: "serie-galets-de-came",
    name: frEn("Galets de came", "Cam rollers"),
    description: frEn(
      "Basés sur roulements à billes, graissés, étanches et prêts au montage pour tous types de pistes. Une ou deux rangées.",
      "Based on ball bearings, greased, sealed and ready-to-mount for all track types. Single or double row designs.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SUPPORT",
    slug: "serie-galets-supports",
    name: frEn("Galets-supports", "Support rollers"),
    description: frEn(
      "Basés sur roulements à rouleaux cylindriques ou à aiguilles, avec ou sans bagues d'épaulement. Prêts au montage.",
      "Based on cylindrical or needle roller bearings, with or without flange rings. Ready-to-mount.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "CF",
    slug: "serie-galets-came-avec-axe",
    name: frEn("Galets de came avec axe", "Cam followers"),
    description: frEn(
      "Galets à rouleaux de type goujon basés sur rouleaux cylindriques ou aiguilles, pour tous types de pistes.",
      "Stud-type roller track rollers based on cylindrical or needle rollers for all track types.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
];

