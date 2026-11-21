import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "elastomeres";

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
    subfamilySlug: SUBFAMILY,
  };
}

function buildDescription(input: {
  bulletsFr: string[];
  bulletsEn: string[];
  bodyFr: string;
  bodyEn: string;
  featuresFr?: string[];
  featuresEn?: string[];
  applicationsFr?: string[];
  applicationsEn?: string[];
  specsFr?: string[];
  specsEn?: string[];
}) {
  const frParts = [
    ...input.bulletsFr.map((line) => `• ${line}`),
    "",
    input.bodyFr,
  ];
  const enParts = [
    ...input.bulletsEn.map((line) => `• ${line}`),
    "",
    input.bodyEn,
  ];

  if (input.featuresFr?.length) {
    frParts.push("", "Caractéristiques :", ...input.featuresFr.map((l) => `• ${l}`));
  }
  if (input.featuresEn?.length) {
    enParts.push("", "Characteristics:", ...input.featuresEn.map((l) => `• ${l}`));
  }
  if (input.applicationsFr?.length) {
    frParts.push(
      "",
      "Applications :",
      ...input.applicationsFr.map((l) => `• ${l}`),
    );
  }
  if (input.applicationsEn?.length) {
    enParts.push(
      "",
      "Applications:",
      ...input.applicationsEn.map((l) => `• ${l}`),
    );
  }
  if (input.specsFr?.length) {
    frParts.push("", ...input.specsFr);
  }
  if (input.specsEn?.length) {
    enParts.push("", ...input.specsEn);
  }

  return frEn(frParts.join("\n"), enParts.join("\n"));
}

const cellularIntroFr =
  "Les caoutchoucs cellulaires sont proposés en plaque ou en bande, dans différentes épaisseurs, avec ou sans adhésif. Grâce aux ateliers de découpe (jet d'eau, cutter, laser), toute géométrie peut être découpée en petites ou grandes quantités selon plans ou spécifications.\n\nCes matériaux contiennent des myriades de cellules totalement fermées et indépendantes, remplies d'azote. Leur structure cellulaire étanche et élastique leur confère des propriétés remarquables.";

const cellularIntroEn =
  "Cellular rubbers are supplied as sheets or strips, in various thicknesses, with or without adhesive. Cutting workshops (waterjet, cutter, laser) can produce any geometry in small or large quantities from drawings or specifications.\n\nThese materials contain myriads of fully closed, independent nitrogen-filled cells. Their sealed and elastic cellular structure delivers outstanding properties.";

/** Caoutchoucs / élastomères cellulaires - sous-famille Élastomère. */
export const elastomereRanges: CatalogRangeSeed[] = [
  base({
    reference: "MS-7250",
    slug: "silicone-cellulaire-ms-7250",
    name: frEn("Silicone cellulaire MS 7250", "Cellular silicone MS 7250"),
    description: buildDescription({
      bulletsFr: [
        "Silicone cellulaire étanche de couleur blanche",
        "Excellente tenue aux intempéries, à l'ozone, à la chaleur et à la flamme",
        "WRAS Approbation n°0802502 : approuvé pour l'eau potable chaude et froide",
      ],
      bulletsEn: [
        "White sealed cellular silicone",
        "Excellent resistance to weather, ozone, heat and flame",
        "WRAS approval No. 0802502 for hot and cold drinking water",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Bonne résistance aux températures élevées",
        "Souple et flexible en service",
        "Bonne résistance à l'ozone, aux UV et aux conditions météo difficiles",
        "Bonne durée de vie et tenue au vieillissement",
        "Bonne résistance à l'humidité",
      ],
      featuresEn: [
        "Good high-temperature resistance",
        "Soft and flexible in service",
        "Good resistance to ozone, UV and harsh weather",
        "Good service life and ageing resistance",
        "Good moisture resistance",
      ],
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation",
        "Amortissement",
        "Antivibration",
        "Températures élevées",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Insulation",
        "Damping",
        "Anti-vibration",
        "High temperatures",
      ],
      specsFr: ["Couleur : blanche", "Matière : silicone cellulaire"],
      specsEn: ["Color: white", "Material: cellular silicone"],
    }),
    dn: null,
    pn: null,
    material: frEn("Silicone cellulaire", "Cellular silicone"),
    standards: ["en10204"],
    sectorTags: ["water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-411079",
    slug: "epdm-cellulaire-me-411079",
    name: frEn("EPDM cellulaire ME 411079", "Cellular EPDM ME 411079"),
    description: buildDescription({
      bulletsFr: [
        "Joint EPDM cellulaire standard",
        "Caoutchoucs souples à structures cellulaires compressibles et déformables, étanches et inaltérables",
        "Bonne résistance au vieillissement",
        "Excellente résistance à l'air et aux U.V.",
        "Faible tenue aux huiles",
        "Sans CFC ni HCFC, recyclable",
      ],
      bulletsEn: [
        "Standard cellular EPDM gasket material",
        "Soft compressible sealed cellular rubber",
        "Good ageing resistance",
        "Excellent air and UV resistance",
        "Limited oil resistance",
        "CFC/HCFC-free and recyclable",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Étanchéité",
        "Résistance à la compression",
        "Résistance au vieillissement",
        "Résistance aux déchirures",
        "Bonne tenue à l'air, aux U.V., à l'ozone, aux huiles, aux solvants, à la chaleur, aux flammes, à la fumée et à l'oxydation",
      ],
      featuresEn: [
        "Sealing performance",
        "Compression resistance",
        "Ageing resistance",
        "Tear resistance",
        "Good resistance to air, UV, ozone, oils, solvents, heat, flame, smoke and oxidation",
      ],
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
      ],
      specsFr: ["Couleur : noire", "Matière : EPDM cellulaire"],
      specsEn: ["Color: black", "Material: cellular EPDM"],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM cellulaire", "Cellular EPDM"),
    standards: ["en10204"],
    sectorTags: ["industry", "water", "building"],
    technicalSpecs: {
      fluids: ["eau", "gaz", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MS-7400",
    slug: "silicone-cellulaire-alimentaire-fda-ms-7400",
    name: frEn(
      "Silicone cellulaire alimentaire FDA MS 7400",
      "FDA food-grade cellular silicone MS 7400",
    ),
    description: buildDescription({
      bulletsFr: [
        "Matière à cellules principalement fermées (cellules partiellement ouvertes)",
        "Faible absorption de l'eau",
        "Protection contre la pénétration de poussière (IP65)",
        "Excellente résistance à l'ozone, l'oxydation, aux U.V. et aux rayonnements ionisants",
      ],
      bulletsEn: [
        "Mostly closed-cell material (partially open cells)",
        "Low water absorption",
        "Dust ingress protection (IP65)",
        "Excellent resistance to ozone, oxidation, UV and ionizing radiation",
      ],
      bodyFr: `${cellularIntroFr}\n\nLes produits en silicone ont une excellente résistance à l'ozone, à l'oxydation, aux rayons ultraviolets, au rayonnement cosmique, aux rayonnements ionisants et aux intempéries.`,
      bodyEn: `${cellularIntroEn}\n\nSilicone grades offer excellent resistance to ozone, oxidation, ultraviolet light, cosmic radiation, ionizing radiation and weathering.`,
      specsFr: [
        "Matière : Silicone",
        "Densité : 420 kg/m³",
        "Température min : -60 °C",
        "Température max : +230 °C",
        "Température de service max en pointe : +250 °C",
      ],
      specsEn: [
        "Material: Silicone",
        "Density: 420 kg/m³",
        "Min temperature: -60 °C",
        "Max temperature: +230 °C",
        "Peak service temperature: +250 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Silicone cellulaire FDA", "FDA cellular silicone"),
    standards: ["en10204"],
    sectorTags: ["food", "industry", "water"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MN-2175",
    slug: "neoprene-cellulaire-mn-2175",
    name: frEn("Néoprène cellulaire MN 2175", "Cellular neoprene MN 2175"),
    description: buildDescription({
      bulletsFr: [
        "Joint néoprène cellulaire",
        "Caoutchouc cellulaire étanche de couleur noire",
        "CR technique stabilisé, autoextinguible",
        "Bonne résistance aux huiles et aux solvants",
        "Bonne tenue à l'air et aux U.V.",
        "Recyclable",
      ],
      bulletsEn: [
        "Cellular neoprene gasket",
        "Black sealed cellular rubber",
        "Stabilized technical CR, self-extinguishing",
        "Good oil and solvent resistance",
        "Good air and UV resistance",
        "Recyclable",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Bonne résistance à l'eau",
        "Bonne résistance à la chaleur",
        "Bonne résistance à l'ozone, aux UV et aux conditions météo difficiles",
        "Bonne résistance aux huiles et aux solvants",
      ],
      featuresEn: [
        "Good water resistance",
        "Good heat resistance",
        "Good ozone, UV and weather resistance",
        "Good oil and solvent resistance",
      ],
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : CR",
        "Densité : 175 kg/m³",
        "Température min : -40 °C",
        "Température max : +100 °C",
        "Température de service max en pointe : +115 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: CR",
        "Density: 175 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +100 °C",
        "Peak service temperature: +115 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Néoprène cellulaire (CR)", "Cellular neoprene (CR)"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      fluids: ["eau", "huiles", "solvants", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MN-222B",
    slug: "neoprene-cellulaire-mn-222b",
    name: frEn("Néoprène cellulaire MN 222B", "Cellular neoprene MN 222B"),
    description: buildDescription({
      bulletsFr: [
        "Joint néoprène cellulaire",
        "Caoutchouc cellulaire étanche Polychloroprène CR de couleur rouge brique",
        "Hautes propriétés d'élasticité, capacité à se déformer et à reprendre sa forme initiale",
        "Bonne résistance mécanique",
        "Autoextinguible",
      ],
      bulletsEn: [
        "Cellular neoprene gasket",
        "Brick-red sealed polychloroprene CR cellular rubber",
        "High elasticity with shape recovery",
        "Good mechanical strength",
        "Self-extinguishing",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Bonne résistance à l'eau",
        "Bonne résistance à la chaleur",
        "Bonne résistance à l'ozone, aux UV et aux conditions météo difficiles",
        "Bonne résistance aux huiles et aux solvants",
      ],
      featuresEn: [
        "Good water resistance",
        "Good heat resistance",
        "Good ozone, UV and weather resistance",
        "Good oil and solvent resistance",
      ],
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
      ],
      specsFr: [
        "Couleur : rouge brique",
        "Matière : CR",
        "Densité : 180 kg/m³",
        "Température min : -30 °C",
        "Température max : +90 °C",
        "Température de service max en pointe : +110 °C",
      ],
      specsEn: [
        "Color: brick red",
        "Material: CR",
        "Density: 180 kg/m³",
        "Min temperature: -30 °C",
        "Max temperature: +90 °C",
        "Peak service temperature: +110 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Néoprène cellulaire (CR)", "Cellular neoprene (CR)"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      fluids: ["eau", "huiles", "solvants", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MN-CIG3",
    slug: "neoprene-cellulaire-mn-cig3",
    name: frEn("Néoprène cellulaire MN CIG3", "Cellular neoprene MN CIG3"),
    description: buildDescription({
      bulletsFr: [
        "Joint néoprène",
        "Caoutchouc cellulaire étanche Polychloroprène CR ignifugé de couleur grise",
        "Bonne résistance aux intempéries, à la flamme, à l'ozone, aux huiles et produits chimiques",
        "Non-corrosif et non-tâchant",
      ],
      bulletsEn: [
        "Neoprene gasket",
        "Grey flame-retardant sealed polychloroprene CR cellular rubber",
        "Good resistance to weather, flame, ozone, oils and chemicals",
        "Non-corrosive and non-staining",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Bonne résistance à l'eau",
        "Bonne résistance à la chaleur",
        "Bonne résistance à l'ozone, aux UV et aux conditions météo difficiles",
        "Bonne résistance aux huiles et aux solvants",
      ],
      featuresEn: [
        "Good water resistance",
        "Good heat resistance",
        "Good ozone, UV and weather resistance",
        "Good oil and solvent resistance",
      ],
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
      ],
      specsFr: [
        "Couleur : grise",
        "Matière : CR",
        "Densité : 195 kg/m³",
        "Température min : -40 °C",
        "Température max : +90 °C",
        "Température de service max en pointe : +110 °C",
      ],
      specsEn: [
        "Color: grey",
        "Material: CR",
        "Density: 195 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +90 °C",
        "Peak service temperature: +110 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Néoprène cellulaire (CR)", "Cellular neoprene (CR)"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      fluids: ["eau", "huiles", "produits chimiques", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MI-3175",
    slug: "nitrile-cellulaire-mi-3175",
    name: frEn("Nitrile cellulaire MI 3175", "Cellular nitrile MI 3175"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire étanche NBR de couleur noire",
        "Très bonne tenue aux huiles et aux solvants",
        "Excellente tenue à l'air et aux U.V.",
        "Autoextinguible",
      ],
      bulletsEn: [
        "Black sealed cellular NBR rubber",
        "Very good oil and solvent resistance",
        "Excellent air and UV resistance",
        "Self-extinguishing",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
        "Protection",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
        "Protection",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : NBR",
        "Densité : 150 kg/m³",
        "Température min : -40 °C",
        "Température max : +90 °C",
        "Température de service max en pointe : +110 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: NBR",
        "Density: 150 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +90 °C",
        "Peak service temperature: +110 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Nitrile cellulaire (NBR)", "Cellular nitrile (NBR)"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      fluids: ["huiles", "solvants", "gaz", "eau"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MV-9370",
    slug: "evm-cellulaire-mv-9370",
    name: frEn("EVM cellulaire MV 9370", "Cellular EVM MV 9370"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire étanche EVM (Ethyl Vinyl Monomère) de couleur beige clair",
        "Excellente tenue aux U.V. et à l'ozone",
        "Très bonne résistance aux huiles",
        "Grade autoextinguible à faible opacité et faible toxicité des fumées de combustion",
        "Sans halogène, sans CFC et sans soufre",
        "Recyclable",
      ],
      bulletsEn: [
        "Light beige sealed cellular EVM rubber",
        "Excellent UV and ozone resistance",
        "Very good oil resistance",
        "Self-extinguishing grade with low smoke opacity and toxicity",
        "Halogen-free, CFC-free and sulphur-free",
        "Recyclable",
      ],
      bodyFr: `${cellularIntroFr}\n\nParticulièrement adapté aux transports publics (trains, tramways, bus), aux applications maritimes et aéronautiques, et aux applications électriques exigeant des produits sans soufre.`,
      bodyEn: `${cellularIntroEn}\n\nEspecially suited to public transport (trains, trams, buses), marine and aerospace applications, and electrical applications requiring sulphur-free products.`,
      specsFr: [
        "Couleur : beige clair",
        "Matière : EVM",
        "Densité : 370 kg/m³",
        "Température min : -40 °C",
        "Température max : +140 °C",
        "Température de service max en pointe : +160 °C",
      ],
      specsEn: [
        "Color: light beige",
        "Material: EVM",
        "Density: 370 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +140 °C",
        "Peak service temperature: +160 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EVM cellulaire", "Cellular EVM"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      fluids: ["huiles", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-4130",
    slug: "epdm-cr-cellulaire-me-4130",
    name: frEn("EPDM-CR cellulaire ME 4130", "Cellular EPDM-CR ME 4130"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire étanche EPDM/CR de couleur noire",
        "Bonne résistance à l'air, aux U.V. et aux acides",
        "Bonne résistance au vieillissement",
      ],
      bulletsEn: [
        "Black sealed cellular EPDM/CR rubber",
        "Good resistance to air, UV and acids",
        "Good ageing resistance",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Résistance à l'ozone : 200 pphm / 40 °C / 336 h-St",
        "Sans CFC, satisfait la directive 2000/53/CE sur métaux lourds",
      ],
      featuresEn: [
        "Ozone resistance: 200 pphm / 40 °C / 336 h-St",
        "CFC-free, complies with Directive 2000/53/EC on heavy metals",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : EPDM",
        "Densité : 130 kg/m³",
        "Température min : -40 °C",
        "Température max : +110 °C",
        "Température de service max en pointe : +115 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: EPDM",
        "Density: 130 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +110 °C",
        "Peak service temperature: +115 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM/CR cellulaire", "Cellular EPDM/CR"),
    standards: ["en10204"],
    sectorTags: ["industry", "water"],
    technicalSpecs: {
      fluids: ["air", "acides", "eau"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-4150",
    slug: "epdm-sbr-cellulaire-me-4150",
    name: frEn("EPDM-SBR cellulaire ME 4150", "Cellular EPDM-SBR ME 4150"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire EPDM/SBR de couleur blanche",
        "Bonne résistance au vieillissement extérieur",
        "Bonnes déformations rémanentes",
        "Faible taux de HAP",
      ],
      bulletsEn: [
        "White cellular EPDM/SBR rubber",
        "Good outdoor ageing resistance",
        "Good compression set",
        "Low PAH content",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "Usage général pour pièces d'aspect",
        "Faible taux de HAP",
      ],
      featuresEn: [
        "General-purpose grade for appearance parts",
        "Low PAH content",
      ],
      specsFr: [
        "Couleur : blanche",
        "Matière : EPDM",
        "Densité : 140 kg/m³",
        "Température min : -40 °C",
        "Température max : +90 °C",
        "Température de service max en pointe : +115 °C",
      ],
      specsEn: [
        "Color: white",
        "Material: EPDM",
        "Density: 140 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +90 °C",
        "Peak service temperature: +115 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM/SBR cellulaire", "Cellular EPDM/SBR"),
    standards: ["en10204"],
    sectorTags: ["industry", "building"],
    technicalSpecs: {
      fluids: ["air", "eau"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-4175",
    slug: "epdm-cellulaire-me-4175",
    name: frEn("EPDM cellulaire ME 4175", "Cellular EPDM ME 4175"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire EPDM de couleur noire",
        "Excellente tenue au vieillissement extérieur et aux basses températures",
        "Bonnes déformations rémanentes",
      ],
      bulletsEn: [
        "Black cellular EPDM rubber",
        "Excellent outdoor ageing and low-temperature performance",
        "Good compression set",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      featuresFr: [
        "EPDM technique",
        "Excellente tenue à basse température",
        "Excellente étanchéité après vieillissement",
      ],
      featuresEn: [
        "Technical EPDM",
        "Excellent low-temperature performance",
        "Excellent sealing after ageing",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : EPDM",
        "Densité : 175 kg/m³",
        "Température min : -55 °C",
        "Température max : +125 °C",
        "Température de service max en pointe : +140 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: EPDM",
        "Density: 175 kg/m³",
        "Min temperature: -55 °C",
        "Max temperature: +125 °C",
        "Peak service temperature: +140 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM cellulaire", "Cellular EPDM"),
    standards: ["en10204"],
    sectorTags: ["industry", "water", "building"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-4140",
    slug: "epdm-sbr-cellulaire-me-4140",
    name: frEn("EPDM-SBR cellulaire ME 4140", "Cellular EPDM-SBR ME 4140"),
    description: buildDescription({
      bulletsFr: [
        "Usage général pour pièces d'aspect",
        "Faible taux de HAP",
      ],
      bulletsEn: [
        "General-purpose grade for appearance parts",
        "Low PAH content",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      applicationsFr: [
        "Étanchéité (liquides, gaz)",
        "Isolation phonique et thermique",
        "Amortissement",
        "Antivibration",
        "Protection",
      ],
      applicationsEn: [
        "Sealing (liquids, gases)",
        "Acoustic and thermal insulation",
        "Damping",
        "Anti-vibration",
        "Protection",
      ],
      specsFr: [
        "Matière : EPDM",
        "Densité : 140 kg/m³",
        "Température min : -40 °C",
        "Température max : +90 °C",
        "Température de service max en pointe : +115 °C",
      ],
      specsEn: [
        "Material: EPDM",
        "Density: 140 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +90 °C",
        "Peak service temperature: +115 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM/SBR cellulaire", "Cellular EPDM/SBR"),
    standards: ["en10204"],
    sectorTags: ["industry", "building"],
    technicalSpecs: {
      fluids: ["eau", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "ME-411079-ADH",
    slug: "bande-epdm-cellulaire-adhesif-me-411079",
    name: frEn(
      "Bande EPDM cellulaire adhésif ME 411079",
      "Adhesive cellular EPDM tape ME 411079",
    ),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc cellulaire étanche EPDM de couleur noire avec surface adhésivée",
        "Bonne résistance mécanique aux intempéries, au vieillissement et à l'ozone",
      ],
      bulletsEn: [
        "Black sealed cellular EPDM rubber with adhesive face",
        "Good mechanical resistance to weather, ageing and ozone",
      ],
      bodyFr: cellularIntroFr,
      bodyEn: cellularIntroEn,
      applicationsFr: [
        "Construction de machines",
        "Métallerie",
        "Charpente",
        "Isolation thermique",
        "Isolation phonique",
        "Étanchéité à l'air",
        "Étanchéité à l'eau",
        "Armoires électriques",
        "Armoires informatiques",
      ],
      applicationsEn: [
        "Machine construction",
        "Metalwork",
        "Structural framing",
        "Thermal insulation",
        "Acoustic insulation",
        "Air sealing",
        "Water sealing",
        "Electrical cabinets",
        "IT cabinets",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : EPDM",
        "Densité : 100 ± 20 kg/m³",
        "Température min : -40 °C",
        "Température max : +100 °C",
        "Température de service max en pointe : +110 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: EPDM",
        "Density: 100 ± 20 kg/m³",
        "Min temperature: -40 °C",
        "Max temperature: +100 °C",
        "Peak service temperature: +110 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("EPDM cellulaire adhésivé", "Adhesive cellular EPDM"),
    standards: ["en10204"],
    sectorTags: ["building", "industry"],
    technicalSpecs: {
      fluids: ["air", "eau"],
      documentCount: 1,
    },
  }),
  base({
    reference: "NA-101T",
    slug: "sbr-toile-1-2-plis-na-101t",
    name: frEn(
      "SBR Toilé 1 et 2 plis NA 101T",
      "Cloth-inserted SBR 1-2 plies NA 101T",
    ),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc styrène-butadiène (SBR) de couleur noire de qualité standard pour faibles sollicitations",
        "Dureté de 70 Shore A",
        "Le NA 101 T est la version avec insert textile du NA 101",
      ],
      bulletsEn: [
        "Black styrene-butadiene (SBR) rubber, standard grade for light duty",
        "70 Shore A hardness",
        "NA 101 T is the cloth-inserted version of NA 101",
      ],
      bodyFr:
        "Composition : caoutchouc styrène-butadiène SBR.\n\nPropriétés générales : faible résistance mécanique (usure / abrasion), faible résistance aux intempéries et à l'ozone, résistance moyenne aux acides et alcalis, faible résistance à l'essence et aux huiles. Applications sur eau froide et chaude (maxi +70 °C).",
      bodyEn:
        "Composition: styrene-butadiene rubber (SBR).\n\nGeneral properties: limited mechanical resistance (wear/abrasion), limited weather and ozone resistance, medium acid/alkali resistance, limited petrol and oil resistance. Suitable for cold and hot water (max +70 °C).",
      applicationsFr: [
        "Découpe de joints et de rondelles",
        "Confection de pièces diverses en contact avec l'eau (température maximale +70 °C) ou l'air comprimé déshuilé",
      ],
      applicationsEn: [
        "Cutting of gaskets and washers",
        "Fabrication of parts in contact with water (max +70 °C) or oil-free compressed air",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : SBR",
        "Dureté : 60 SH A",
        "Température min : -20 °C",
        "Température max : +70 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: SBR",
        "Hardness: 60 Shore A",
        "Min temperature: -20 °C",
        "Max temperature: +70 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("SBR toilé", "Cloth-inserted SBR"),
    standards: ["en10204"],
    sectorTags: ["water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "NA-101",
    slug: "styrene-butadiene-na-101",
    name: frEn("Styrène-Butadiène NA 101", "Styrene-Butadiene NA 101"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc styrène-butadiène (SBR) de couleur noire",
        "Qualité standard pour faibles sollicitations",
        "Dureté de 70 Shore A",
      ],
      bulletsEn: [
        "Black styrene-butadiene (SBR) rubber",
        "Standard grade for light duty",
        "70 Shore A hardness",
      ],
      bodyFr:
        "Composition : caoutchouc styrène-butadiène SBR.\n\nPropriétés générales : faible résistance mécanique (usure / abrasion), faible résistance aux intempéries et à l'ozone, résistance moyenne aux acides et alcalis, faible résistance à l'essence et aux huiles. Applications sur eau froide et chaude (maxi +70 °C).",
      bodyEn:
        "Composition: styrene-butadiene rubber (SBR).\n\nGeneral properties: limited mechanical resistance (wear/abrasion), limited weather and ozone resistance, medium acid/alkali resistance, limited petrol and oil resistance. Suitable for cold and hot water (max +70 °C).",
      applicationsFr: [
        "Découpe de joints et de rondelles",
        "Confection de pièces diverses en contact avec l'eau (température maximale +70 °C) ou l'air comprimé déshuilé",
      ],
      applicationsEn: [
        "Cutting of gaskets and washers",
        "Fabrication of parts in contact with water (max +70 °C) or oil-free compressed air",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : SBR",
        "Dureté : 65 SH A",
        "Température min : -15 °C",
        "Température max : +70 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: SBR",
        "Hardness: 65 Shore A",
        "Min temperature: -15 °C",
        "Max temperature: +70 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("SBR", "SBR"),
    standards: ["en10204"],
    sectorTags: ["water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "SI-810R",
    slug: "silicone-alimentaire-si-810r",
    name: frEn("Silicone alimentaire SI 810R", "Food-grade silicone SI 810R"),
    description: buildDescription({
      bulletsFr: [
        "Utilisé pour sa grande souplesse, son élasticité, sa résistance aux températures élevées et ses qualités de résistance à l'ozone, aux intempéries et au vieillissement",
        "Excellent isolant électrique",
        "Présenté avec 2 faces lisses (peau)",
        "Domaine de l'étanchéité, la protection, le calage et l'amortissement",
      ],
      bulletsEn: [
        "Used for high flexibility, elasticity, high-temperature resistance and resistance to ozone, weather and ageing",
        "Excellent electrical insulator",
        "Supplied with 2 smooth skin faces",
        "For sealing, protection, packing and damping",
      ],
      bodyFr:
        "Composition : caoutchouc cellulaire étanche synthétique Méthyl-Vinyl Silicone (VMQ).\n\nPropriétés générales : non toxique ; très bonne tenue à la température ; excellente tenue aux intempéries, à l'ozone, à l'air et aux ultra-violets ; excellente résistance électrique ; mauvaise résistance aux acides et aux huiles. Applications en températures élevées, au vieillissement à l'ozone et aux isolations diélectriques.",
      bodyEn:
        "Composition: sealed synthetic methyl-vinyl silicone cellular rubber (VMQ).\n\nGeneral properties: non-toxic; very good temperature resistance; excellent weather, ozone, air and UV resistance; excellent electrical resistance; poor resistance to acids and oils. Used for high temperatures, ozone ageing and dielectric insulation.",
      applicationsFr: [
        "Découpe de joints et rondelles",
        "Confection de pièces diverses en contact avec de l'eau ou de l'air comprimé déshuilé",
      ],
      applicationsEn: [
        "Cutting of gaskets and washers",
        "Fabrication of parts in contact with water or oil-free compressed air",
      ],
      specsFr: [
        "Couleur : rouge / terracotta",
        "Matière : Silicone",
        "Dureté : 60 SH A",
        "Température min : -60 °C",
        "Température max : +230 °C",
      ],
      specsEn: [
        "Color: red / terracotta",
        "Material: Silicone",
        "Hardness: 60 Shore A",
        "Min temperature: -60 °C",
        "Max temperature: +230 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Silicone alimentaire (VMQ)", "Food-grade silicone (VMQ)"),
    standards: ["en10204"],
    sectorTags: ["food", "water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "SI-810B",
    slug: "silicone-alimentaire-si-810b",
    name: frEn("Silicone alimentaire SI 810B", "Food-grade silicone SI 810B"),
    description: buildDescription({
      bulletsFr: [
        "Utilisé pour sa grande souplesse, son élasticité, sa résistance aux températures élevées et ses qualités de résistance à l'ozone, aux intempéries et au vieillissement",
        "Excellent isolant électrique",
        "Présenté avec 2 faces lisses (peau)",
        "Domaine de l'étanchéité, la protection, le calage et l'amortissement",
      ],
      bulletsEn: [
        "Used for high flexibility, elasticity, high-temperature resistance and resistance to ozone, weather and ageing",
        "Excellent electrical insulator",
        "Supplied with 2 smooth skin faces",
        "For sealing, protection, packing and damping",
      ],
      bodyFr:
        "Composition : caoutchouc cellulaire étanche synthétique Méthyl-Vinyl Silicone (VMQ).\n\nPropriétés générales : non toxique ; très bonne tenue à la température ; excellente tenue aux intempéries, à l'ozone, à l'air et aux ultra-violets ; excellente résistance électrique ; mauvaise résistance aux acides et aux huiles. Applications en températures élevées, au vieillissement à l'ozone et aux isolations diélectriques.",
      bodyEn:
        "Composition: sealed synthetic methyl-vinyl silicone cellular rubber (VMQ).\n\nGeneral properties: non-toxic; very good temperature resistance; excellent weather, ozone, air and UV resistance; excellent electrical resistance; poor resistance to acids and oils. Used for high temperatures, ozone ageing and dielectric insulation.",
      applicationsFr: [
        "Découpe de joints et rondelles",
        "Confection de pièces diverses en contact avec de l'eau ou de l'air comprimé déshuilé",
      ],
      applicationsEn: [
        "Cutting of gaskets and washers",
        "Fabrication of parts in contact with water or oil-free compressed air",
      ],
      specsFr: [
        "Couleur : bleue",
        "Matière : Silicone",
        "Dureté : 60 SH A",
        "Température min : -60 °C",
        "Température max : +230 °C",
      ],
      specsEn: [
        "Color: blue",
        "Material: Silicone",
        "Hardness: 60 Shore A",
        "Min temperature: -60 °C",
        "Max temperature: +230 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Silicone alimentaire (VMQ)", "Food-grade silicone (VMQ)"),
    standards: ["en10204"],
    sectorTags: ["food", "water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "SI-810T",
    slug: "silicone-alimentaire-si-810t",
    name: frEn("Silicone alimentaire SI 810T", "Food-grade silicone SI 810T"),
    description: buildDescription({
      bulletsFr: [
        "Utilisé pour sa grande souplesse, son élasticité, sa résistance aux températures élevées et ses qualités de résistance à l'ozone, aux intempéries et au vieillissement",
        "Excellent isolant électrique",
        "Présenté avec 2 faces lisses (peau)",
        "Domaine de l'étanchéité, la protection, le calage et l'amortissement",
      ],
      bulletsEn: [
        "Used for high flexibility, elasticity, high-temperature resistance and resistance to ozone, weather and ageing",
        "Excellent electrical insulator",
        "Supplied with 2 smooth skin faces",
        "For sealing, protection, packing and damping",
      ],
      bodyFr:
        "Composition : caoutchouc cellulaire étanche synthétique Méthyl-Vinyl Silicone (VMQ).\n\nPropriétés générales : non toxique ; très bonne tenue à la température ; excellente tenue aux intempéries, à l'ozone, à l'air et aux ultra-violets ; excellente résistance électrique ; mauvaise résistance aux acides et aux huiles. Applications en températures élevées, au vieillissement à l'ozone et aux isolations diélectriques.",
      bodyEn:
        "Composition: sealed synthetic methyl-vinyl silicone cellular rubber (VMQ).\n\nGeneral properties: non-toxic; very good temperature resistance; excellent weather, ozone, air and UV resistance; excellent electrical resistance; poor resistance to acids and oils. Used for high temperatures, ozone ageing and dielectric insulation.",
      applicationsFr: [
        "Découpe de joints et rondelles",
        "Confection de pièces diverses en contact avec de l'eau ou de l'air comprimé déshuilé",
      ],
      applicationsEn: [
        "Cutting of gaskets and washers",
        "Fabrication of parts in contact with water or oil-free compressed air",
      ],
      specsFr: [
        "Couleur : translucide / blanc laiteux",
        "Matière : Silicone",
        "Dureté : 60 SH A",
        "Température min : -60 °C",
        "Température max : +230 °C",
      ],
      specsEn: [
        "Color: translucent / milky white",
        "Material: Silicone",
        "Hardness: 60 Shore A",
        "Min temperature: -60 °C",
        "Max temperature: +230 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Silicone alimentaire (VMQ)", "Food-grade silicone (VMQ)"),
    standards: ["en10204"],
    sectorTags: ["food", "water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "NA-102B",
    slug: "parabeige-na-102b",
    name: frEn("Parabeige NA 102B", "Parabeige NA 102B"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc naturel (NR) de couleur beige clair et de qualité supérieure",
        "Faible dureté (40 Shore A)",
        "Excellente résistance à l'abrasion et une haute résistance à la rupture",
        "Très souple et élastique",
        "Résistant aux alcalis et moyennement aux acides",
      ],
      bulletsEn: [
        "Light beige natural rubber (NR), premium grade",
        "Low hardness (40 Shore A)",
        "Excellent abrasion resistance and high tear strength",
        "Very soft and elastic",
        "Resistant to alkalis and moderately to acids",
      ],
      bodyFr:
        "Composition : caoutchouc naturel NR.\n\nPropriétés générales : très bonne résistance mécanique (usure / abrasion) ; forte résistance à la rupture ; faible résistance aux intempéries et à l'ozone ; bonne résistance aux alcalis, résistance moyenne aux acides ; faible résistance à l'essence et aux huiles.",
      bodyEn:
        "Composition: natural rubber (NR).\n\nGeneral properties: very good mechanical resistance (wear/abrasion); high tear strength; limited weather and ozone resistance; good alkali resistance, medium acid resistance; limited petrol and oil resistance.",
      applicationsFr: [
        "Fabrication de manchettes souples et résistantes à l'abrasion",
        "Confection de joints faciles à serrer avec de faibles contraintes",
      ],
      applicationsEn: [
        "Manufacture of soft abrasion-resistant sleeves",
        "Gaskets that tighten easily under low clamping force",
      ],
      specsFr: [
        "Couleur : beige clair",
        "Matière : NR",
        "Dureté : 40 SH A",
        "Température min : -30 °C",
        "Température max : +70 °C",
      ],
      specsEn: [
        "Color: light beige",
        "Material: NR",
        "Hardness: 40 Shore A",
        "Min temperature: -30 °C",
        "Max temperature: +70 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Caoutchouc naturel (NR)", "Natural rubber (NR)"),
    standards: ["en10204"],
    sectorTags: ["industry", "mines"],
    technicalSpecs: {
      fluids: ["eau", "alcalis", "acides"],
      documentCount: 1,
    },
  }),
  base({
    reference: "NR-270B",
    slug: "parabeige-nr-270b",
    name: frEn("Parabeige NR 270B", "Parabeige NR 270B"),
    description: buildDescription({
      bulletsFr: [
        "Caoutchouc pure gomme naturelle extra souple",
        "Très bonne tenue à l'abrasion par projection, à la déchirure et au froid",
        "Grande élasticité permettant d'amples déformations",
        "Bonnes propriétés électriques",
        "Bonne tenue aux acides, bases et sels",
        "Mauvaise tenue aux U.V.",
      ],
      bulletsEn: [
        "Extra-soft pure natural rubber gum",
        "Very good resistance to impact abrasion, tearing and cold",
        "High elasticity for large deformations",
        "Good electrical properties",
        "Good resistance to acids, bases and salts",
        "Poor UV resistance",
      ],
      bodyFr:
        "Composition : caoutchouc naturel NA.\n\nFormats : épaisseur 0,5 mm ; largeur 1400 mm ; longueur 20000 mm.\n\nPropriétés générales : très bonne résistance mécanique (usure / abrasion) ; forte résistance à la rupture ; faible résistance aux intempéries et à l'ozone ; bonne résistance aux alcalis, résistance moyenne aux acides ; faible résistance à l'essence et aux huiles.",
      bodyEn:
        "Composition: natural rubber (NA).\n\nFormats: thickness 0.5 mm; width 1400 mm; length 20000 mm.\n\nGeneral properties: very good mechanical resistance (wear/abrasion); high tear strength; limited weather and ozone resistance; good alkali resistance, medium acid resistance; limited petrol and oil resistance.",
      applicationsFr: [
        "Garnissage de matériel d'exploitation tels que cyclones, hydrocyclones et tout matériel de traitement du sable",
        "Confection de bavettes et de manchettes",
        "Joints en contact avec : eau, eau lessivielle, solutions alcalines et salines (maxi +50 °C), acides oxydants et non oxydants, bases de concentration maxi +50 % (maxi +50 °C), acétone (maxi +20 °C) et alcools autres qu'alimentaires",
      ],
      applicationsEn: [
        "Lining of process equipment such as cyclones, hydrocyclones and sand-treatment machinery",
        "Manufacture of flaps and sleeves",
        "Gaskets in contact with water, wash water, alkaline and saline solutions (max +50 °C), oxidizing and non-oxidizing acids, bases up to 50% concentration (max +50 °C), acetone (max +20 °C) and non-food alcohols",
      ],
      specsFr: [
        "Couleur : beige / orange clair",
        "Matière : NR",
        "Dureté : 45 SH A",
        "Épaisseur : 0,5 mm",
        "Largeur : 1400 mm",
        "Longueur : 20000 mm",
        "Température min : -40 °C",
        "Température max : +85 °C",
      ],
      specsEn: [
        "Color: beige / light orange",
        "Material: NR",
        "Hardness: 45 Shore A",
        "Thickness: 0.5 mm",
        "Width: 1400 mm",
        "Length: 20000 mm",
        "Min temperature: -40 °C",
        "Max temperature: +85 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Caoutchouc naturel (NR)", "Natural rubber (NR)"),
    standards: ["en10204"],
    sectorTags: ["mines", "industry"],
    technicalSpecs: {
      fluids: ["eau", "acides", "bases", "sels"],
      documentCount: 1,
    },
  }),
  base({
    reference: "FP-801",
    slug: "fluoroelastomere-viton-fp-801",
    name: frEn(
      "Fluoroélastomère VITON FP 801",
      "Fluoroelastomer VITON FP 801",
    ),
    description: buildDescription({
      bulletsFr: [
        "Mélange synthétique fluorocarbone VITON® type A de couleur noire et de qualité supérieure",
        "Dureté de 70 Shore A",
        "Excellente tenue aux agents atmosphériques, à l'ozone, aux acides dilués et concentrés, aux solvants, aux hydrocarbures",
        "Conserve ses propriétés à haute température (+220 °C)",
      ],
      bulletsEn: [
        "Black premium synthetic fluorocarbon VITON® type A compound",
        "70 Shore A hardness",
        "Excellent resistance to weathering, ozone, dilute and concentrated acids, solvents and hydrocarbons",
        "Retains its properties at high temperature (+220 °C)",
      ],
      bodyFr:
        "Composition : caoutchouc fluorocarbone VITON® A FKM (FPM).\n\nFormats : épaisseur 1 mm ; largeur 1400 mm ; longueur 10000 mm.\n\nPropriétés générales : très bonne résistance mécanique (déchirement / abrasion) ; très bonne résistance aux intempéries, à l'ozone, à l'air et aux ultra-violets ; très bonne tenue à haute température ; très résistant aux acides et alcalis (dilués ou concentrés) ; bonne résistance aux hydrocarbures et aux solvants.",
      bodyEn:
        "Composition: fluorocarbon rubber VITON® A FKM (FPM).\n\nFormats: thickness 1 mm; width 1400 mm; length 10000 mm.\n\nGeneral properties: very good mechanical resistance (tear/abrasion); very good weather, ozone, air and UV resistance; very good high-temperature performance; highly resistant to dilute or concentrated acids and alkalis; good hydrocarbon and solvent resistance.",
      applicationsFr: [
        "Confection de pièces diverses en contact avec : eau (> +80 °C), carburant automobile et aéronautique, produits et fluides de traitement des hydrocarbures aliphatiques / aromatiques",
      ],
      applicationsEn: [
        "Fabrication of parts in contact with water (> +80 °C), automotive and aerospace fuels, and aliphatic/aromatic hydrocarbon process fluids",
      ],
      specsFr: [
        "Couleur : noire",
        "Matière : FKM",
        "Dureté : 70 SH A",
        "Épaisseur : 1 mm",
        "Largeur : 1400 mm",
        "Longueur : 10000 mm",
        "Température min : -17 °C",
        "Température max : +220 °C",
      ],
      specsEn: [
        "Color: black",
        "Material: FKM",
        "Hardness: 70 Shore A",
        "Thickness: 1 mm",
        "Width: 1400 mm",
        "Length: 10000 mm",
        "Min temperature: -17 °C",
        "Max temperature: +220 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("Fluoroélastomère FKM (VITON®)", "Fluoroelastomer FKM (VITON®)"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      fluids: ["eau", "hydrocarbures", "carburants", "acides", "solvants"],
      documentCount: 1,
    },
  }),
];
