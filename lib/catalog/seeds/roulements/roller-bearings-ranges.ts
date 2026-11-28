import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "roulements";
const SUB = "roller-bearings";

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

export const roller_bearings_ranges: CatalogRangeSeed[] = [
  base({
    reference: "CRB",
    slug: "serie-roulements-rouleaux-cylindriques",
    name: frEn("Roulements à rouleaux cylindriques", "Cylindrical roller bearings"),
    description: frEn(
      "Nombreuses conceptions, personnalisables pour charges ou vitesses élevées. Séparables pour faciliter les inspections de maintenance.",
      "Many designs, customizable for high loads or speeds. Separable for easier maintenance inspections.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "NRB",
    slug: "serie-roulements-a-aiguilles",
    name: frEn("Roulements à aiguilles", "Needle roller bearings"),
    description: frEn(
      "Nombreux rouleaux de diamètre réduit par rapport à leur longueur : solution compacte, grande rigidité et capacité de charge élevée.",
      "Many rollers with small diameter relative to length: compact solution with high stiffness and load capacity.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "TRB",
    slug: "serie-roulements-rouleaux-coniques",
    name: frEn("Roulements à rouleaux coniques", "Tapered roller bearings"),
    description: frEn(
      "Pistes coniques et rouleaux coniques. Conçus pour supporter d'importantes charges combinées radiales et axiales.",
      "Tapered raceways and rollers. Designed to accommodate high combined loads.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SRB",
    slug: "serie-roulements-rotule-rouleaux",
    name: frEn("Roulements à rotule sur rouleaux", "Spherical roller bearings"),
    description: frEn(
      "Robustes pour charges axiales élevées et charges radiales très élevées, même avec défaut d'alignement ou flexion d'arbre.",
      "Robust bearings for high axial and very high radial loads where misalignment or shaft deflection may occur.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "COOPER",
    slug: "serie-roulements-cooper-split",
    name: frEn("Roulements à rotule sur rouleaux en deux parties Cooper", "Cooper split roller bearings"),
    description: frEn(
      "Conceptions catalogue ou sur mesure, adaptés aux zones difficiles d'accès où le remplacement sans joint diamétral est complexe.",
      "Catalogue or custom designs for hard-to-reach locations where split mounting simplifies replacement.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "CARB",
    slug: "serie-roulements-toroidaux-carb",
    name: frEn("Roulements à rouleaux toroïdaux CARB", "CARB toroidal roller bearings"),
    description: frEn(
      "Position de palier libre, auto-aligneurs, capacité de charge élevée et déplacement axial. Performances Explorer.",
      "Non-locating bearings that are self-aligning with high load capacity and axial displacement. Explorer performance.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "CRTB",
    slug: "serie-butees-rouleaux-cylindriques",
    name: frEn("Butées à rouleaux cylindriques", "Cylindrical roller thrust bearings"),
    description: frEn(
      "Pour montages à charge axiale importante sans charge radiale. Très rigides, encombrement axial minimal.",
      "For arrangements with high axial load and no radial load. Very stiff with minimal axial space.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "NRTB",
    slug: "serie-butees-a-aiguilles",
    name: frEn("Butées à aiguilles", "Needle roller thrust bearings"),
    description: frEn(
      "Rigidité élevée dans un minimum d'espace axial. Cage rigide guidant de nombreuses aiguilles.",
      "High stiffness in minimal axial space. Rigid cage retaining and guiding many needles.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "TRTB",
    slug: "serie-butees-rouleaux-coniques",
    name: frEn("Butées à rouleaux coniques", "Tapered roller thrust bearings"),
    description: frEn(
      "Supportent charges axiales importantes et charges de pointe avec répartition optimale. Très rigides, encombrement axial réduit.",
      "Accommodate high axial and peak loads with optimal load distribution. Very stiff, minimal axial space.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SRTB",
    slug: "serie-butees-rotule-rouleaux",
    name: frEn("Butées à rotule sur rouleaux", "Spherical roller thrust bearings"),
    description: frEn(
      "Auto-aligneurs avec pistes et rouleaux asymétriques. Charges axiales unilatérales et charges radiales associées.",
      "Self-aligning with specially designed raceways and asymmetrical rollers for unidirectional axial and accompanying radial loads.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
];

