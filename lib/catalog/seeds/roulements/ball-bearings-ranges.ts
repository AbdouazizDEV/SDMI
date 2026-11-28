import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "roulements";
const SUB = "ball-bearings";

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

export const ball_bearings_ranges: CatalogRangeSeed[] = [
  base({
    reference: "DGBB",
    slug: "serie-roulements-rigides-a-billes",
    name: frEn("Roulements rigides à billes", "Deep groove ball bearings"),
    description: frEn(
      "Type de roulement le plus répandu et particulièrement polyvalent. Faible frottement, optimisé pour un faible bruit et de faibles vibrations, ce qui permet des vitesses de rotation élevées. Supportent des charges radiales et axiales dans les deux sens, montage aisé et maintenance réduite. Large gamme de conceptions, variantes et dimensions ; versions Explorer personnalisables selon les besoins de performance.",
      "The most widely used bearing type and particularly versatile. Low friction, optimized for low noise and vibration enabling high rotational speeds. Accommodate radial and axial loads in both directions, easy to mount and require less maintenance. Large range of designs, variants and sizes; Explorer versions customizable for specific performance needs.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "Y",
    slug: "serie-roulements-inserts-y",
    name: frEn("Roulements-inserts (roulements Y)", "Insert bearings (Y-bearings)"),
    description: frEn(
      "Roulements prêts au montage avec bague extérieure sphérique. Supportent le défaut d'alignement statique pour une durée de service accrue en environnement contaminé.",
      "Easy-to-mount bearings with a convex outer ring. Accommodate static misalignment for long service life in contaminated applications.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "ACBB",
    slug: "serie-roulements-billes-contact-oblique",
    name: frEn("Roulements à billes à contact oblique", "Angular contact ball bearings"),
    description: frEn(
      "Excellentes propriétés de fonctionnement et capacité de charge axiale élevée. Conçus pour supporter simultanément charges radiales et axiales.",
      "Good running properties and high axial load capacity. Designed for simultaneously acting radial and axial loads.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SABB",
    slug: "serie-roulements-rotule-billes",
    name: frEn("Roulements à rotule sur billes", "Self-aligning ball bearings"),
    description: frEn(
      "Insensibles aux défauts d'alignement statiques et dynamiques. Deux rangées de billes, faible frottement même à vitesses élevées, maintenance minimale.",
      "Insensitive to static and dynamic misalignment. Two-row design with very little frictional heat even at high speeds.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "TBB",
    slug: "serie-butees-a-billes",
    name: frEn("Butées à billes", "Thrust ball bearings"),
    description: frEn(
      "Conçues pour charges axiales à simple ou double effet. Composants séparables et interchangeables pour simplifier montage, démontage et maintenance.",
      "Designed for axial loads in one or both directions. Separable interchangeable components simplify mounting and maintenance.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "TSB",
    slug: "serie-roulements-section-mince",
    name: frEn("Roulements à section mince", "Thin section bearings"),
    description: frEn(
      "Allègent le poids, réduisent l'encombrement et le frottement, augmentent la flexibilité de conception et la précision de rotation.",
      "Save weight and space, reduce friction, increase design flexibility and running accuracy.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
];

