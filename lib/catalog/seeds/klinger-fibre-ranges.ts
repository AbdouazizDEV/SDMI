import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "joints-en-fibres-elastomeres";

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
  compositionFr: string;
  compositionEn: string;
  applicationsFr: string[];
  applicationsEn: string[];
  colorFr: string;
  colorEn: string;
}) {
  return frEn(
    [
      ...input.bulletsFr.map((line) => `• ${line}`),
      "",
      input.bodyFr,
      "",
      `Composition : ${input.compositionFr}`,
      "",
      `Couleur : ${input.colorFr}`,
      "",
      "Domaines d'applications :",
      ...input.applicationsFr.map((line) => `• ${line}`),
    ].join("\n"),
    [
      ...input.bulletsEn.map((line) => `• ${line}`),
      "",
      input.bodyEn,
      "",
      `Composition: ${input.compositionEn}`,
      "",
      `Color: ${input.colorEn}`,
      "",
      "Application areas:",
      ...input.applicationsEn.map((line) => `• ${line}`),
    ].join("\n"),
  );
}

/** Joints fibre KLINGER - sous-famille Fibre. */
export const klingerFibreRanges: CatalogRangeSeed[] = [
  base({
    reference: "TOP-GRAPH-2000",
    slug: "klinger-top-graph-2000",
    name: frEn("KLINGER® top-graph 2000", "KLINGER® top-graph 2000"),
    description: buildDescription({
      bulletsFr: [
        "Produit exceptionnel avec une composition optimisée de graphite expansé et de fibres d'aramide",
        "Qualités totalement nouvelles pour un joint sans amiante dépassant celles des matériaux des joints classiques",
        "Part très élevée de graphite et une faible quantité de liant",
        "Résistance remarquable aux milieux et à la température",
        "Multi-services, découpage et mise en œuvre faciles",
      ],
      bulletsEn: [
        "Outstanding sheet with an optimized blend of expanded graphite and aramid fibers",
        "Asbestos-free performance beyond classic gasket materials",
        "Very high graphite content with a low binder share",
        "Remarkable resistance to media and temperature",
        "Multi-service use with easy cutting and installation",
      ],
      bodyFr:
        "Le joint KLINGER® top-graph 2000 est un produit exceptionnel avec une composition optimisée de graphite expansé et de fibres d'aramide. Il a des qualités totalement nouvelles pour un joint sans amiante dépassant celles des matériaux des joints classiques. Grâce à une part très élevée de graphite et une faible quantité de liant, sa résistance aux milieux et à la température est remarquable. Il est d'usage multi-services, son découpage et sa mise en œuvre sont faciles.",
      bodyEn:
        "KLINGER® top-graph 2000 is an outstanding gasket sheet based on an optimized blend of expanded graphite and aramid fibers. Its asbestos-free performance goes beyond classic gasket materials. With a very high graphite content and low binder share, resistance to media and temperature is remarkable. It is multi-service, easy to cut and install.",
      compositionFr:
        "Graphite expansé renforcé de fibres hautes performances et liant NBR en faible proportion.",
      compositionEn:
        "Expanded graphite reinforced with high-performance fibers and a low share of NBR binder.",
      applicationsFr: [
        "Hydrocarbures",
        "Eau",
        "Huiles",
        "Vapeur BP/MP",
        "Solvants",
        "Acides et bases faibles",
      ],
      applicationsEn: [
        "Hydrocarbons",
        "Water",
        "Oils",
        "Low/medium pressure steam",
        "Solvents",
        "Weak acids and bases",
      ],
      colorFr: "Noir graphite",
      colorEn: "Graphite black",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Graphite expansé / fibres aramide / NBR",
      "Expanded graphite / aramid fibers / NBR",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: [
        "hydrocarbures",
        "eau",
        "huiles",
        "vapeur",
        "solvants",
        "acides faibles",
        "bases faibles",
      ],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-4500",
    slug: "klingersil-c-4500",
    name: frEn("KLINGERSIL® C-4500", "KLINGERSIL® C-4500"),
    description: buildDescription({
      bulletsFr: [
        "Produit de qualité supérieure grâce au choix des fibres technologiquement évoluées",
        "Utilisé sur les process corrosifs comme sur les utilités",
        "Particulièrement adapté pour les process alcalins",
        "Résistance remarquable aux milieux et à la température",
        "Multi-services, découpage et mise en œuvre faciles",
      ],
      bulletsEn: [
        "Premium grade based on advanced fiber technology",
        "Suitable for corrosive processes as well as utilities",
        "Especially adapted to alkaline processes",
        "Remarkable resistance to media and temperature",
        "Multi-service use with easy cutting and installation",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-4500 est un produit de qualité supérieure grâce au choix des fibres technologiquement évoluées. Il est utilisé dans de nombreux domaines aussi bien sur les process corrosifs que sur les utilités. Il est particulièrement adapté pour les process alcalins.",
      bodyEn:
        "KLINGERSIL® C-4500 is a premium sheet based on advanced fiber technology. It is used across many applications, from corrosive processes to utilities, and is particularly suited to alkaline processes.",
      compositionFr:
        "Fibres de carbone renforcées de fibres d'aramide et liant NBR.",
      compositionEn: "Carbon fibers reinforced with aramid fibers and NBR binder.",
      applicationsFr: [
        "Hydrocarbures",
        "Eau",
        "Huiles",
        "Gaz",
        "Réfrigérants",
        "Acides",
        "Alcalis",
        "Vapeur BP",
      ],
      applicationsEn: [
        "Hydrocarbons",
        "Water",
        "Oils",
        "Gases",
        "Refrigerants",
        "Acids",
        "Alkalis",
        "Low-pressure steam",
      ],
      colorFr: "Gris anthracite",
      colorEn: "Anthracite grey",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Fibres de carbone / aramide / NBR",
      "Carbon / aramid fibers / NBR",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: [
        "hydrocarbures",
        "eau",
        "huiles",
        "gaz",
        "refrigerants",
        "acides",
        "alcalis",
        "vapeur",
      ],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-4430",
    slug: "klingersil-c-4430",
    name: frEn("KLINGERSIL® C-4430", "KLINGERSIL® C-4430"),
    description: buildDescription({
      bulletsFr: [
        "Caractéristiques exceptionnelles de tenue au fluage à chaud",
        "Combinaison optimum de fibres de verre renforcées de fibres d'aramide et d'élastomère NBR",
        "Qualité supérieure pour les fluides généraux, utilités et process peu corrosifs",
      ],
      bulletsEn: [
        "Outstanding hot creep resistance",
        "Optimized blend of glass fibers reinforced with aramid fibers and NBR elastomer",
        "Premium grade for general fluids, utilities and mildly corrosive processes",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-4430 offre des caractéristiques exceptionnelles de tenue au fluage à chaud grâce à une combinaison optimum de fibres de verre renforcées de fibres d'aramide et d'élastomère NBR. Il est de qualité supérieure pour les fluides généraux, convenant particulièrement pour les utilités et les process peu corrosifs.",
      bodyEn:
        "KLINGERSIL® C-4430 offers outstanding hot creep resistance thanks to an optimized blend of glass fibers reinforced with aramid fibers and NBR elastomer. It is a premium grade for general fluids, especially utilities and mildly corrosive processes.",
      compositionFr:
        "Fibres de verre renforcées de fibres d'aramide et liant NBR.",
      compositionEn: "Glass fibers reinforced with aramid fibers and NBR binder.",
      applicationsFr: [
        "Hydrocarbures",
        "Eau",
        "Huiles",
        "Gaz",
        "Vapeurs BP",
        "Réfrigérants",
        "Acides et bases faibles",
      ],
      applicationsEn: [
        "Hydrocarbons",
        "Water",
        "Oils",
        "Gases",
        "Low-pressure steam",
        "Refrigerants",
        "Weak acids and bases",
      ],
      colorFr: "Beige / blanc cassé",
      colorEn: "Beige / off-white",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Fibres de verre / aramide / NBR",
      "Glass / aramid fibers / NBR",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: [
        "hydrocarbures",
        "eau",
        "huiles",
        "gaz",
        "vapeur",
        "refrigerants",
        "acides faibles",
        "bases faibles",
      ],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-4438",
    slug: "klingersil-c-4438",
    name: frEn("KLINGERSIL® C-4438", "KLINGERSIL® C-4438"),
    description: buildDescription({
      bulletsFr: [
        "Version armée du KLINGERSIL® C-4430",
        "Mélange optimum de fibres de verre renforcées de fibres aramide et élastomère NBR",
        "Excellente tenue au fluage à chaud",
        "Treillis métallique pour améliorer la tenue à la pression et la résistance mécanique",
        "Qualité supérieure pour les fluides généraux, convenant particulièrement pour les utilités",
      ],
      bulletsEn: [
        "Wire-reinforced version of KLINGERSIL® C-4430",
        "Optimized blend of glass fibers reinforced with aramid fibers and NBR elastomer",
        "Excellent hot creep resistance",
        "Metal mesh for higher pressure and mechanical strength",
        "Premium grade for general fluids, especially utilities",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-4438 est la version armée du KLINGERSIL® C-4430. Le mélange optimum de fibres de verre renforcées de fibres aramide et élastomère NBR offre une excellente tenue au fluage à chaud. Le treillis métallique améliore la tenue à la pression et la résistance mécanique. Il est de qualité supérieure pour les fluides généraux, convenant particulièrement pour les utilités.",
      bodyEn:
        "KLINGERSIL® C-4438 is the wire-reinforced version of KLINGERSIL® C-4430. The optimized blend of glass fibers reinforced with aramid fibers and NBR elastomer provides excellent hot creep resistance. The metal mesh improves pressure capability and mechanical strength. It is a premium grade for general fluids, especially utilities.",
      compositionFr:
        "Fibres de verre renforcées de fibres d'aramide et liant NBR armé d'un treillis en acier, finition graphitée deux faces.",
      compositionEn:
        "Glass fibers reinforced with aramid fibers and NBR binder, steel wire mesh reinforced, graphite finish on both faces.",
      applicationsFr: [
        "Hydrocarbures",
        "Eau",
        "Huiles",
        "Gaz",
        "Vapeur BP",
        "Réfrigérants",
        "Acides et bases faibles",
      ],
      applicationsEn: [
        "Hydrocarbons",
        "Water",
        "Oils",
        "Gases",
        "Low-pressure steam",
        "Refrigerants",
        "Weak acids and bases",
      ],
      colorFr: "Gris anthracite",
      colorEn: "Anthracite grey",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Fibres de verre / aramide / NBR armé acier",
      "Glass / aramid fibers / NBR with steel mesh",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: [
        "hydrocarbures",
        "eau",
        "huiles",
        "gaz",
        "vapeur",
        "refrigerants",
        "acides faibles",
        "bases faibles",
      ],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-4400",
    slug: "klingersil-c-4400",
    name: frEn("KLINGERSIL® C-4400", "KLINGERSIL® C-4400"),
    description: buildDescription({
      bulletsFr: [
        "Qualité supérieure",
        "Spécialement élaboré pour les gaz, les réfrigérants et les fluides frigorigènes",
        "Faible perméabilité",
      ],
      bulletsEn: [
        "Premium grade",
        "Especially developed for gases, refrigerants and refrigerating fluids",
        "Very low permeability",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-4400 est de qualité supérieure, spécialement élaboré pour les gaz, les réfrigérants et les fluides frigorigènes. Il offre une perméabilité très faible.",
      bodyEn:
        "KLINGERSIL® C-4400 is a premium grade especially developed for gases, refrigerants and refrigerating fluids. It offers very low permeability.",
      compositionFr: "Fibres d'aramide et liant NBR.",
      compositionEn: "Aramid fibers and NBR binder.",
      applicationsFr: [
        "Hydrocarbures",
        "Eau",
        "Huiles",
        "Gaz",
        "Réfrigérants",
        "Acides faibles",
      ],
      applicationsEn: [
        "Hydrocarbons",
        "Water",
        "Oils",
        "Gases",
        "Refrigerants",
        "Weak acids",
      ],
      colorFr: "Vert clair",
      colorEn: "Light green",
    }),
    dn: null,
    pn: null,
    material: frEn("Fibres d'aramide / NBR", "Aramid fibers / NBR"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: ["hydrocarbures", "eau", "huiles", "gaz", "refrigerants", "acides faibles"],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-44GW",
    slug: "klingersil-c-44gw",
    name: frEn("KLINGERSIL® C-44GW", "KLINGERSIL® C-44GW"),
    description: buildDescription({
      bulletsFr: [
        "Très bonne compressibilité",
        "Mélange de fibres d'aramide et liant élastomère adapté aux gaz, réfrigérants et eau potable",
        "Agréé Gaz de France et conforme à la norme NF E 29-533",
        "Disponible en joints découpés ou en feuilles",
      ],
      bulletsEn: [
        "Very good compressibility",
        "Aramid fiber and elastomer binder blend suited to gases, refrigerants and drinking water",
        "Gaz de France approved and compliant with NF E 29-533",
        "Available as cut gaskets or sheets",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-44GW possède une très bonne compressibilité. Le dosage du mélange fibres d'aramide et liant élastomère a permis d'obtenir une qualité particulièrement adaptée pour étancher les gaz, les réfrigérants et l'eau potable. Il est agréé Gaz de France et conforme à la norme NF E 29-533.",
      bodyEn:
        "KLINGERSIL® C-44GW offers very good compressibility. The aramid fiber and elastomer binder blend is particularly suited to sealing gases, refrigerants and drinking water. It is Gaz de France approved and compliant with NF E 29-533.",
      compositionFr: "Fibres d'aramide et liant NBR.",
      compositionEn: "Aramid fibers and NBR binder.",
      applicationsFr: [
        "Réfrigérants",
        "Gaz (GDF)",
        "Butane",
        "Propane",
        "Huiles",
        "Hydrocarbures",
        "Eau",
      ],
      applicationsEn: [
        "Refrigerants",
        "Gases (GDF)",
        "Butane",
        "Propane",
        "Oils",
        "Hydrocarbons",
        "Water",
      ],
      colorFr: "Vert sauge",
      colorEn: "Sage green",
    }),
    dn: null,
    pn: null,
    material: frEn("Fibres d'aramide / NBR", "Aramid fibers / NBR"),
    standards: ["en10204"],
    sectorTags: ["energy", "water", "industry"],
    technicalSpecs: {
      fluids: [
        "refrigerants",
        "gaz",
        "butane",
        "propane",
        "huiles",
        "hydrocarbures",
        "eau",
      ],
      documentCount: 1,
    },
  }),
  base({
    reference: "C-4324",
    slug: "klingersil-c-4324",
    name: frEn("KLINGERSIL® C-4324", "KLINGERSIL® C-4324"),
    description: buildDescription({
      bulletsFr: [
        "Qualité standard destinée aux applications sur les utilités, les process peu corrosifs et les gaz de faibles pressions et températures",
      ],
      bulletsEn: [
        "Standard grade for utilities, mildly corrosive processes and low pressure/temperature gases",
      ],
      bodyFr:
        "Le joint KLINGERSIL® C-4324 est de qualité standard destiné aux applications sur les utilités, les process peu corrosifs et les gaz de faibles pressions et températures.",
      bodyEn:
        "KLINGERSIL® C-4324 is a standard grade intended for utilities, mildly corrosive processes and low pressure/temperature gases.",
      compositionFr: "Fibres d'aramide, fibres de verre et liant NBR.",
      compositionEn: "Aramid fibers, glass fibers and NBR binder.",
      applicationsFr: ["Hydrocarbures", "Eau", "Huiles", "Gaz réfrigérants"],
      applicationsEn: ["Hydrocarbons", "Water", "Oils", "Refrigerant gases"],
      colorFr: "Gris foncé",
      colorEn: "Dark grey",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Fibres d'aramide / verre / NBR",
      "Aramid / glass fibers / NBR",
    ),
    standards: ["en10204"],
    sectorTags: ["industry", "water", "energy"],
    technicalSpecs: {
      fluids: ["hydrocarbures", "eau", "huiles", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "SIL-802",
    slug: "klinger-sil-802",
    name: frEn("KLINGER® SIL-802", "KLINGER® SIL-802"),
    description: buildDescription({
      bulletsFr: [
        "Qualité standard économique",
        "Destiné aux applications pour chauffage et sanitaire",
      ],
      bulletsEn: [
        "Economic standard grade",
        "Intended for heating and sanitary applications",
      ],
      bodyFr:
        "Le KLINGER® SIL-802 est de qualité standard économique destiné aux applications pour chauffage et sanitaire.",
      bodyEn:
        "KLINGER® SIL-802 is an economic standard grade intended for heating and sanitary applications.",
      compositionFr: "Fibres organiques et liant NBR.",
      compositionEn: "Organic fibers and NBR binder.",
      applicationsFr: [
        "Eau",
        "Chauffage sanitaire",
        "Climatisation",
        "Gaz",
        "Azote",
        "Hydrocarbures",
      ],
      applicationsEn: [
        "Water",
        "Sanitary heating",
        "Air conditioning",
        "Gases",
        "Nitrogen",
        "Hydrocarbons",
      ],
      colorFr: "Bleu",
      colorEn: "Blue",
    }),
    dn: null,
    pn: null,
    material: frEn("Fibres organiques / NBR", "Organic fibers / NBR"),
    standards: ["en10204"],
    sectorTags: ["water", "industry"],
    technicalSpecs: {
      fluids: ["eau", "gaz", "azote", "hydrocarbures"],
      documentCount: 1,
    },
  }),
  base({
    reference: "QUANTUM",
    slug: "klinger-quantum",
    name: frEn("KLINGER® Quantum", "KLINGER® Quantum"),
    description: buildDescription({
      bulletsFr: [
        "Premier matériau de joint à base de fibres renforcées utilisant uniquement le HNBR comme liant élastomère",
        "Innovation technologique aux caractéristiques exceptionnelles",
        "Joint universel pour une très grande plage d'utilisation de fluides",
        "Joint de sécurité garantissant une longévité incomparable",
      ],
      bulletsEn: [
        "Fiber-reinforced gasket material using HNBR as the sole elastomer binder",
        "Technological innovation with outstanding characteristics",
        "Universal gasket for a very wide fluid range",
        "Safety gasket with outstanding longevity",
      ],
      bodyFr:
        "Le joint Quantum KLINGER® est le premier matériau de joint à base de fibres renforcées utilisant uniquement le HNBR comme liant élastomère. Cette innovation technologique permet d'offrir des caractéristiques exceptionnelles. KLINGER® Quantum est le joint universel pour une très grande plage d'utilisation de fluides. C'est le joint de sécurité garantissant une longévité incomparable.",
      bodyEn:
        "KLINGER® Quantum is a fiber-reinforced gasket material using HNBR as the sole elastomer binder. This technological innovation delivers outstanding characteristics. KLINGER® Quantum is a universal gasket for a very wide fluid range and a safety gasket with outstanding longevity.",
      compositionFr:
        "Fibres renforcées et liant à base d'un mélange HNBR hautes températures.",
      compositionEn:
        "Reinforced fibers and a high-temperature HNBR binder blend.",
      applicationsFr: [
        "Eau",
        "Huiles",
        "Vapeur BP/MP",
        "Gaz",
        "Solutions salines",
        "Fiouls",
        "Alcools",
        "Acides organiques et inorganiques moyens",
        "Hydrocarbures",
        "Lubrifiants",
        "Réfrigérants",
        "Acides faibles",
      ],
      applicationsEn: [
        "Water",
        "Oils",
        "Low/medium pressure steam",
        "Gases",
        "Saline solutions",
        "Fuel oils",
        "Alcohols",
        "Medium organic and inorganic acids",
        "Hydrocarbons",
        "Lubricants",
        "Refrigerants",
        "Weak acids",
      ],
      colorFr: "Blanc cassé",
      colorEn: "Off-white",
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Fibres renforcées / HNBR",
      "Reinforced fibers / HNBR",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      fluids: [
        "eau",
        "huiles",
        "vapeur",
        "gaz",
        "hydrocarbures",
        "refrigerants",
        "acides faibles",
      ],
      documentCount: 1,
    },
  }),
];
