import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "joints-en-graphite";

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
  compositionFr?: string;
  compositionEn?: string;
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

  if (input.compositionFr) {
    frParts.push("", `Composition : ${input.compositionFr}`);
  }
  if (input.compositionEn) {
    enParts.push("", `Composition: ${input.compositionEn}`);
  }
  if (input.applicationsFr?.length) {
    frParts.push(
      "",
      "Domaines d'applications :",
      ...input.applicationsFr.map((l) => `• ${l}`),
    );
  }
  if (input.applicationsEn?.length) {
    enParts.push(
      "",
      "Application areas:",
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

const noteFr =
  "Information importante : se rapprocher de nos équipes selon vos conditions d'utilisation.";
const noteEn =
  "Important: contact our teams according to your operating conditions.";

/** Joints graphite - sous-famille Graphite. */
export const graphiteRanges: CatalogRangeSeed[] = [
  base({
    reference: "PSM-AS",
    slug: "klinger-graphite-psm-as",
    name: frEn("KLINGER® Graphite PSM-AS", "KLINGER® Graphite PSM-AS"),
    description: buildDescription({
      bulletsFr: [
        "Graphite expansé laminé renforcé de tôle en inox à picots",
        "Résiste aux contraintes mécaniques élevées des applications associant hautes températures et pressions",
        "Adapté en présence de vapeur d'eau, d'eau surchauffée ainsi que de fluides thermiques",
        "Excellente tenue aux produits chimiques, utilisable sur process chauds jusqu'à +500/550 °C",
        "Anti-adhérent sur les deux faces",
      ],
      bulletsEn: [
        "Laminated expanded graphite reinforced with tanged stainless-steel sheet",
        "Withstands high mechanical loads in high-temperature and high-pressure applications",
        "Suitable for steam, superheated water and thermal fluids",
        "Excellent chemical resistance, usable on hot processes up to +500/550 °C",
        "Anti-stick finish on both faces",
      ],
      bodyFr:
        "Le joint KLINGER® Graphite PSM-AS est composé de graphite expansé laminé renforcé de tôle en inox à picots. Il est particulièrement recommandé pour résister aux contraintes mécaniques élevées des applications associant hautes températures et pressions.\n\nIl est bien adapté en présence de vapeur d'eau, d'eau surchauffée ainsi que de fluides thermiques. Grâce à son excellente tenue aux produits chimiques, il est possible de l'utiliser sur les process, en particulier les process chauds jusqu'à +500/550 °C. Le joint KLINGER® Graphite PSM-AS est traité anti-adhérent sur les deux faces.",
      bodyEn:
        "KLINGER® Graphite PSM-AS is made of laminated expanded graphite reinforced with tanged stainless-steel sheet. It is especially recommended for high mechanical loads combining high temperatures and pressures.\n\nIt performs well with steam, superheated water and thermal fluids. Thanks to excellent chemical resistance, it can be used on processes, especially hot processes up to +500/550 °C. Both faces have an anti-stick finish.",
      compositionFr:
        "Graphite pur (98 %) traité anti-adhérent armé de tôle à picots Inox 316 L de 0,1 mm (ép. 3 mm = 2 inserts, autres épaisseurs = 1 insert).",
      compositionEn:
        "Pure graphite (98%) with anti-stick treatment, reinforced with 0.1 mm 316L stainless tanged sheet (3 mm thickness = 2 inserts; other thicknesses = 1 insert).",
      applicationsFr: [
        "Applications sévères",
        "Hautes températures",
        "Conditions chimiques difficiles",
        "Fluides caloporteurs",
        "Vapeur BP/HP",
      ],
      applicationsEn: [
        "Severe applications",
        "High temperatures",
        "Difficult chemical conditions",
        "Heat-transfer fluids",
        "Low/high pressure steam",
      ],
      specsFr: [
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +500 °C",
        "Pression : 200 bar",
        "Compressibilité : 45 %",
        noteFr,
      ],
      specsEn: [
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +500 °C",
        "Pressure: 200 bar",
        "Compressibility: 45%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn(
      "Graphite expansé / Inox 316L à picots",
      "Expanded graphite / tanged 316L stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["vapeur", "eau", "fluides caloporteurs", "produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MULTI-AS",
    slug: "klinger-graphite-multi-as",
    name: frEn("KLINGER® Graphite MULTI-AS", "KLINGER® Graphite MULTI-AS"),
    description: buildDescription({
      bulletsFr: [
        "Composé de couches multiples de graphite expansé laminé et de feuilles d'acier inoxydable lisses (inserts)",
        "Meilleure résistance à l'écrasement qu'un graphite classique à renfort à picots",
        "Comportement remarquable pour joints à faible largeur de bande (brides à double emboîtement, joints à barrettes)",
        "Facile à découper",
        "Anti-adhérent sur les 2 faces",
      ],
      bulletsEn: [
        "Multiple layers of laminated expanded graphite and smooth stainless-steel foils (inserts)",
        "Better crush resistance than classic tanged-reinforced graphite",
        "Outstanding behaviour for narrow sealing widths (tongue-and-groove flanges, ribbed joints)",
        "Easy to cut",
        "Anti-stick finish on both faces",
      ],
      bodyFr:
        "Le joint KLINGER® Graphite MULTI-AS est composé de couches multiples de graphite expansé laminé et de feuilles d'acier inoxydable lisses (inserts). Ce graphite multicouches possède une bien meilleure résistance à l'écrasement qu'un graphite classique à renfort à picots. Il se comporte de façon remarquable dans le cas de joints à faible largeur de bande (joints pour brides à double emboîtement, joints à barrettes). Il est très facile à découper. Le joint d'étanchéité KLINGER® Graphite MULTI-AS est traité anti-adhérent sur les 2 faces.",
      bodyEn:
        "KLINGER® Graphite MULTI-AS consists of multiple layers of laminated expanded graphite and smooth stainless-steel foils. This multilayer graphite has better crush resistance than classic tanged-reinforced graphite. It performs remarkably well for narrow sealing widths (tongue-and-groove flanges, ribbed joints). It is very easy to cut. Both faces have an anti-stick finish.",
      compositionFr:
        "Graphite pur (98 %) traité anti-adhérent armé de feuillards Inox 316 L de 0,05 mm (ép. 1,5 mm = 2 inserts, ép. 2 mm = 3 inserts, ép. 3 mm = 5 inserts).",
      compositionEn:
        "Pure graphite (98%) with anti-stick treatment, reinforced with 0.05 mm 316L stainless foils (1.5 mm = 2 inserts; 2 mm = 3 inserts; 3 mm = 5 inserts).",
      applicationsFr: [
        "Applications sévères",
        "Hautes températures",
        "Conditions chimiques difficiles",
        "Fluides caloporteurs",
        "Vapeur BP/HP",
      ],
      applicationsEn: [
        "Severe applications",
        "High temperatures",
        "Difficult chemical conditions",
        "Heat-transfer fluids",
        "Low/high pressure steam",
      ],
      specsFr: [
        "Épaisseur : 1 mm",
        "Largeur : 1000 mm",
        "Longueur : 1000 mm",
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +500 °C",
        "Pression : 200 bar",
        "Compressibilité : 41 %",
        noteFr,
      ],
      specsEn: [
        "Thickness: 1 mm",
        "Width: 1000 mm",
        "Length: 1000 mm",
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +500 °C",
        "Pressure: 200 bar",
        "Compressibility: 41%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn(
      "Graphite expansé multicouche / Inox 316L",
      "Multilayer expanded graphite / 316L stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["vapeur", "eau", "fluides caloporteurs", "produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "HL",
    slug: "klinger-graphite-hl",
    name: frEn("KLINGER® Graphite HL", "KLINGER® Graphite HL"),
    description: buildDescription({
      bulletsFr: [
        "Joint souple composé de graphite pur expansé laminé non-armé, adapté aux brides à faible serrage",
        "Découpage très facile",
        "Manipulation des joints découpés délicate",
        "Utilisé pour la confection de revêtements de joints semi-métalliques (striés, plats, métalloplastiques)",
      ],
      bulletsEn: [
        "Soft unreinforced laminated pure expanded graphite sheet, suited to low-bolt-load flanges",
        "Very easy to cut",
        "Cut gaskets require careful handling",
        "Also used as facing for semi-metallic gaskets (serrated, flat, metalloplastic)",
      ],
      bodyFr:
        "Le joint souple KLINGER® Graphite HL est composé de graphite pur expansé laminé non-armé convenant particulièrement aux brides à faible serrage. Le découpage est très facile mais la manipulation des joints découpés demeure délicate. Il est également utilisé pour la confection de revêtements de joints semi-métalliques (striés, plats, métalloplastiques).",
      bodyEn:
        "KLINGER® Graphite HL is an unreinforced laminated pure expanded graphite sheet especially suited to low-bolt-load flanges. Cutting is very easy, but cut gaskets require careful handling. It is also used as facing for semi-metallic gaskets (serrated, flat, metalloplastic).",
      compositionFr: "Graphite pur (98 %).",
      compositionEn: "Pure graphite (98%).",
      applicationsFr: [
        "Applications sévères",
        "Hautes températures",
        "Conditions chimiques difficiles",
        "Fluides caloporteurs",
      ],
      applicationsEn: [
        "Severe applications",
        "High temperatures",
        "Difficult chemical conditions",
        "Heat-transfer fluids",
      ],
      specsFr: [
        "Épaisseur : 0,5 mm",
        "Largeur : 1000 mm",
        "Longueur : 1000 mm",
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +500 °C",
        "Pression : 200 bar",
        "Compressibilité : 50 %",
        noteFr,
      ],
      specsEn: [
        "Thickness: 0.5 mm",
        "Width: 1000 mm",
        "Length: 1000 mm",
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +500 °C",
        "Pressure: 200 bar",
        "Compressibility: 50%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("Graphite expansé pur", "Pure expanded graphite"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["fluides caloporteurs", "produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "SLS-AS",
    slug: "klinger-graphite-sls-as",
    name: frEn("KLINGER® Graphite SLS-AS", "KLINGER® Graphite SLS-AS"),
    description: buildDescription({
      bulletsFr: [
        "Composé de graphite expansé laminé renforcé d'une tôle lisse en inox",
        "Recommandé pour les applications associant hautes températures et pressions",
        "Particulièrement adapté en présence de vapeur d'eau, d'eau surchauffée et de fluides thermiques",
        "Qualité supérieure",
        "Facile à découper, réalisable à molette en atelier de maintenance",
        "Anti-adhérent sur les deux faces",
      ],
      bulletsEn: [
        "Laminated expanded graphite reinforced with a smooth stainless-steel foil",
        "Recommended for high-temperature and high-pressure applications",
        "Especially suited to steam, superheated water and thermal fluids",
        "Premium grade",
        "Easy to cut; can be cut with a gasket cutter in maintenance workshops",
        "Anti-stick finish on both faces",
      ],
      bodyFr:
        "Le joint KLINGER® Graphite SLS-AS est composé de graphite expansé laminé renforcé d'une tôle lisse en inox. Il est recommandé pour les applications associant hautes températures et pressions. Il est particulièrement adapté en présence de vapeur d'eau, d'eau surchauffée ainsi que de fluides thermiques. C'est un produit de qualité supérieure. Faciles à découper, les joints souples KLINGER® Graphite SLS-AS peuvent être réalisés à molette en atelier de maintenance. Le joint graphite KLINGER® Graphite SLS-AS est traité anti-adhérent sur les deux faces.",
      bodyEn:
        "KLINGER® Graphite SLS-AS is laminated expanded graphite reinforced with a smooth stainless-steel foil. It is recommended for high-temperature and high-pressure service and is especially suited to steam, superheated water and thermal fluids. It is a premium grade. Soft sheets are easy to cut and can be prepared with a gasket cutter in maintenance workshops. Both faces have an anti-stick finish.",
      compositionFr:
        "Graphite pur (98 %) traité anti-adhérent armé d'un feuillard Inox 316 L de 0,05 mm.",
      compositionEn:
        "Pure graphite (98%) with anti-stick treatment, reinforced with a 0.05 mm 316L stainless foil.",
      applicationsFr: [
        "Applications sévères",
        "Hautes températures",
        "Conditions chimiques difficiles",
        "Fluides caloporteurs",
        "Vapeur BP/HP",
      ],
      applicationsEn: [
        "Severe applications",
        "High temperatures",
        "Difficult chemical conditions",
        "Heat-transfer fluids",
        "Low/high pressure steam",
      ],
      specsFr: [
        "Épaisseur : 1,5 mm",
        "Largeur : 1000 mm",
        "Longueur : 1000 mm",
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +500 °C",
        "Pression : 200 bar",
        "Compressibilité : 45 %",
        noteFr,
      ],
      specsEn: [
        "Thickness: 1.5 mm",
        "Width: 1000 mm",
        "Length: 1000 mm",
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +500 °C",
        "Pressure: 200 bar",
        "Compressibility: 45%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn(
      "Graphite expansé / feuillard Inox 316L",
      "Expanded graphite / 316L stainless foil",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["vapeur", "eau", "fluides caloporteurs", "produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MLX",
    slug: "eyrgraf-mlx",
    name: frEn("Eyrgraf® MLX", "Eyrgraf® MLX"),
    description: buildDescription({
      bulletsFr: [
        "Assemblage sans colle",
        "Excellente adaptabilité pour toutes surfaces à étancher",
        "Compensation des irrégularités de surfaces de brides",
        "Stabilité des propriétés physiques sur toute la plage de températures",
        "Excellente application à hautes pressions",
        "Très bonne stabilité du revêtement anti-stick à hautes températures",
      ],
      bulletsEn: [
        "Bonded without adhesive",
        "Excellent conformity to sealing surfaces",
        "Compensates flange surface irregularities",
        "Stable physical properties across the full temperature range",
        "Excellent high-pressure performance",
        "Very good anti-stick coating stability at high temperatures",
      ],
      bodyFr:
        "Le graphite EYRGRAF® MLX est adapté aux conditions extrêmes, notamment aux applications hautes pressions et aux températures élevées. Il résiste également au fluage et à la déformation à froid. Ce joint graphite a une structure multicouche composée de feuilles de graphite de haute pureté (> 99 %) de 0,5 mm d'épaisseur et d'inserts lisses en acier inoxydable de 0,05 mm.\n\nUn procédé spécial permet d'assembler plusieurs couches de feuilles de graphite et d'acier inoxydable sans utiliser de colle. Cela lui confère une bonne résistance au vieillissement et à la fragilisation. Une imprégnation spéciale assure une meilleure étanchéité et une excellente manipulation.",
      bodyEn:
        "EYRGRAF® MLX graphite is designed for extreme conditions, including high pressure and high temperature. It also resists creep and cold flow. This graphite gasket has a multilayer structure of high-purity graphite sheets (> 99%) 0.5 mm thick and smooth 0.05 mm stainless-steel inserts.\n\nA special process assembles several graphite and stainless-steel layers without adhesive, giving good resistance to ageing and embrittlement. A special impregnation improves sealing performance and handling.",
      applicationsFr: [
        "Industrie nucléaire",
        "Industrie chimie et pétrochimie",
        "Raffinerie",
      ],
      applicationsEn: [
        "Nuclear industry",
        "Chemical and petrochemical industry",
        "Refining",
      ],
      specsFr: [
        "Densité : 1,1 kg/dm³ (± 5 %)",
        "Température min : -200 °C",
        "Température max : +550 °C",
        "Pression : 200 bar",
        "Compressibilité : 30 - 50 %",
        noteFr,
      ],
      specsEn: [
        "Density: 1.1 kg/dm³ (± 5%)",
        "Min temperature: -200 °C",
        "Max temperature: +550 °C",
        "Pressure: 200 bar",
        "Compressibility: 30 - 50%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn(
      "Graphite haute pureté multicouche / Inox",
      "High-purity multilayer graphite / stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["hydrocarbures", "produits chimiques", "vapeur"],
      documentCount: 1,
    },
  }),
];
