import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "roulements";
const SUB = "engineered-products";

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

export const engineered_products_ranges: CatalogRangeSeed[] = [
  base({
    reference: "BB",
    slug: "serie-galets-dappui",
    name: frEn("Galets d'appui", "Backing bearings"),
    description: frEn(
      "Galets à bague extérieure épaisse pour laminoirs à froid multicylindriques, redresseuses ou plieuses.",
      "Thick outer ring rollers developed for multi-roll cold rolling mills, straighteners or folders.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SENSOR",
    slug: "serie-roulements-capteurs",
    name: frEn("Roulements-capteurs", "Sensor bearing units"),
    description: frEn(
      "Unités prêtes au montage, compactes et robustes pour suivre avec précision les mouvements de rotation ou linéaires.",
      "Ready-to-mount, compact and robust units to accurately monitor rotating or linear motion.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "HYBRID",
    slug: "serie-roulements-hybrides-ceramique",
    name: frEn("Roulements hybrides céramique", "Hybrid bearings"),
    description: frEn(
      "Bagues acier et éléments roulants en nitrure de silicium : isolation électrique, haute résistance à l'usure et performances élevées.",
      "Steel rings with silicon nitride rolling elements: electrical insulation, high wear resistance and high performance.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "INSOCOAT",
    slug: "serie-roulements-insocoat",
    name: frEn("Roulements INSOCOAT", "INSOCOAT bearings"),
    description: frEn(
      "Revêtement isolant empêchant le courant électrique de traverser le roulement : solution économique contre l'érosion électrique.",
      "Unique coating that prevents electric current from passing through the bearing - cost-effective protection against electrical erosion.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "HT",
    slug: "serie-roulements-temperatures-elevees",
    name: frEn("Roulements et paliers pour températures élevées", "High temperature bearings and bearing units"),
    description: frEn(
      "Plusieurs modèles pour conditions difficiles : hautes températures, environnement sec et faibles vitesses de rotation.",
      "Several designs for demanding conditions: high temperatures, dry environments and low speeds.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "NOWEAR",
    slug: "serie-roulements-revetement-nowear",
    name: frEn("Roulements à revêtement NoWear", "NoWear coated bearings"),
    description: frEn(
      "Revêtement carbone résistant à l'usure applicable aux éléments roulants et/ou pistes de la bague intérieure.",
      "Carbon-based wear-resistant coating that can be applied to rolling elements and/or inner ring raceways.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "SO",
    slug: "serie-roulements-solid-oil",
    name: frEn("Roulements avec Solid Oil", "Bearings with Solid Oil"),
    description: frEn(
      "Lubrifiés à vie, adaptés aux environnements humides ou au contact occasionnel avec l'eau et d'autres contaminants.",
      "Lifetime-lubricated bearings for high humidity or occasional contact with water and other contaminants.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
  base({
    reference: "IRU",
    slug: "serie-galets-de-pression",
    name: frEn("Galets de pression", "Indexing roller units"),
    description: frEn(
      "Galets prêts à l'emploi pour fours continus d'agglomération et applications à charges élevées avec changements fréquents de sens de rotation.",
      "Ready-to-use rollers for continuous sintering furnaces and high-load applications with frequent reverse rotation.",
    ),
    dn: null,
    pn: null,
    material: frEn("Acier de roulement", "Bearing steel"),
    standards: ["iso"],
    sectorTags: ["industry", "mining"],
    technicalSpecs: { documentCount: 1 },
  }),
];

