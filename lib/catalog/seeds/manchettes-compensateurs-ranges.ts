import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "manchettes-et-compensateurs";

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
  bulletsFr?: string[];
  bulletsEn?: string[];
  bodyFr: string;
  bodyEn: string;
  featuresFr?: string[];
  featuresEn?: string[];
  applicationsFr?: string[];
  applicationsEn?: string[];
  specsFr?: string[];
  specsEn?: string[];
}) {
  const frParts: string[] = [];
  const enParts: string[] = [];

  if (input.bulletsFr?.length) {
    frParts.push(...input.bulletsFr.map((l) => `• ${l}`), "");
  }
  if (input.bulletsEn?.length) {
    enParts.push(...input.bulletsEn.map((l) => `• ${l}`), "");
  }

  frParts.push(input.bodyFr);
  enParts.push(input.bodyEn);

  if (input.featuresFr?.length) {
    frParts.push("", ...input.featuresFr.map((l) => `• ${l}`));
  }
  if (input.featuresEn?.length) {
    enParts.push("", ...input.featuresEn.map((l) => `• ${l}`));
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

/** Manchettes et compensateurs - sous-famille Étanchéité statique. */
export const manchettesCompensateursRanges: CatalogRangeSeed[] = [
  base({
    reference: "SLEEVFLEX",
    slug: "manchette-souple-caoutchouc-sleevflex",
    name: frEn(
      "Manchette souple en caoutchouc Sleevflex®",
      "Sleevflex® soft rubber sleeve",
    ),
    description: buildDescription({
      bodyFr:
        "Réalisées sur mesure pour les conduites de fumée, les gaines de ventilation et les conduites de transfert de produits pulvérulents.\n\nCes manchettes permettent de pallier les contraintes mécaniques (dilatations thermiques, vibrations) engendrant une détérioration de l'installation si celle-ci est rigide. Tout en diminuant les tensions des tuyauteries, elles absorbent les bruits.\n\nLes manchettes Sleevflex® sur mesure sont disponibles dans différentes formes ou matières.",
      bodyEn:
        "Custom-made for flue ducts, ventilation ducts and powder-transfer lines.\n\nThese sleeves absorb mechanical stresses (thermal expansion, vibration) that would damage a rigid installation. While reducing pipe stresses, they also dampen noise.\n\nCustom Sleevflex® sleeves are available in various shapes and materials.",
      featuresFr: [
        "Formes avec ou sans bords tombés : circulaire, conique, carrée, ovale, ronde ou rectangulaire",
        "Matières : Silicone, Linatex, PVC, Nitrile, EPDM, PU, tissu Silicone, Polyuréthane, etc.",
        "Fabrication en salle propre, avec ou sans enduction, selon applications et conditions de service",
        "Fluides : liquides, solides, agressifs (acides, bases, solvants ou abrasifs), poudres, vapeur d'eau ou hydrocarbures",
        "Alimentaire : Directive CE 1935/2004 et FDA",
      ],
      featuresEn: [
        "Shapes with or without flanges: circular, conical, square, oval, round or rectangular",
        "Materials: Silicone, Linatex, PVC, Nitrile, EPDM, PU, silicone fabric, Polyurethane, etc.",
        "Clean-room manufacture, with or without coating, according to service conditions",
        "Media: liquids, solids, aggressive fluids (acids, bases, solvents or abrasives), powders, steam or hydrocarbons",
        "Food contact: EU Regulation 1935/2004 and FDA",
      ],
      applicationsFr: [
        "Transfert de fluides industriels",
        "Industries chimiques, pétrolière, électronique, pharmaceutique, médicale, nucléaire",
      ],
      applicationsEn: [
        "Industrial fluid transfer",
        "Chemical, oil & gas, electronics, pharmaceutical, medical and nuclear industries",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Caoutchouc / élastomères (selon grade)",
      "Rubber / elastomers (grade dependent)",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "food"],
    technicalSpecs: {
      fluids: ["fumées", "poudres", "vapeur", "hydrocarbures", "acides"],
      documentCount: 1,
    },
  }),
  base({
    reference: "FDM-FSC",
    slug: "manchette-connexion-rapide",
    name: frEn(
      "Manchette de connexion rapide",
      "Quick-connection sleeve",
    ),
    description: buildDescription({
      bodyFr:
        "La manchette FDM est un connecteur flexible doté de brides métalliques serties dans le matériau. Un joint d'étanchéité lâche est ensuite ajouté, ce qui rend la connexion étanche à l'air et lui donne un profil d'écoulement régulier.\n\nLa manchette FSC a des brides en acier inoxydable soudées dans le matériau. De cette façon, le matériau sert de joint sans l'utilisation d'un joint d'étanchéité, ce qui rend le manchon prêt à l'emploi sans avoir besoin d'équipement supplémentaire.\n\nElles sont hygiéniques et utilisables sans danger avec des poudres, en faisant une solution populaire dans le secteur de l'agro-alimentaire. Nos manchettes sont directement applicables aux systèmes de tuyauterie Jacob mais des adaptateurs sont disponibles pour d'autres systèmes de tuyauterie.",
      bodyEn:
        "The FDM sleeve is a flexible connector with metal flanges crimped into the material. A loose gasket is then added to make the connection airtight with a smooth flow profile.\n\nThe FSC sleeve has stainless-steel flanges welded into the material, so the material itself acts as the seal without a separate gasket - ready to install without extra equipment.\n\nThey are hygienic and safe with powders, making them popular in food processing. Our sleeves fit Jacob piping systems directly; adapters are available for other systems.",
      featuresFr: [
        "Grande variété de matériaux : polyuréthane, silicone, nitrile, EPDM, etc., et différentes épaisseurs",
        "Résistance à l'explosion (1,5 bar) et au vide",
        "Disponibles en acier inoxydable 304 (1.4301) et 316 (1.4571)",
        "Alimentaire : Directive CE 1935/2004 et FDA",
      ],
      featuresEn: [
        "Wide range of materials: polyurethane, silicone, nitrile, EPDM, etc., in various thicknesses",
        "Explosion resistance (1.5 bar) and vacuum capability",
        "Available in stainless steel 304 (1.4301) and 316 (1.4571)",
        "Food contact: EU Regulation 1935/2004 and FDA",
      ],
      applicationsFr: [
        "Agroalimentaire",
        "Transfert de poudres",
        "Systèmes de tuyauterie Jacob et adaptateurs",
      ],
      applicationsEn: [
        "Food processing",
        "Powder transfer",
        "Jacob piping systems and adapters",
      ],
    }),
    dn: null,
    pn: "1,5 bar",
    material: frEn(
      "PU / silicone / nitrile / EPDM + inox",
      "PU / silicone / nitrile / EPDM + stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["food", "industry"],
    technicalSpecs: {
      pressureClass: "1,5 bar",
      fluids: ["poudres", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "KEMPCHEN-ERV",
    slug: "compensateur-dilatation-elastomeres-kempchen",
    name: frEn(
      "Compensateur de dilatation en élastomères KEMPCHEN®",
      "KEMPCHEN® elastomer expansion joint",
    ),
    description: buildDescription({
      bodyFr:
        "Les compensateurs élastomères KEMPCHEN® diminuent les contraintes mécaniques et thermiques sur les tuyauteries et les systèmes annexes : pompes, compresseurs ou moteurs, isolent des vibrations, corrigent les désalignements et garantissent l'étanchéité de vos installations.\n\nSelon les matériaux utilisés, les compensateurs élastomères KEMPCHEN® ont une tenue aux températures allant jusqu'à +110 °C.",
      bodyEn:
        "KEMPCHEN® elastomer expansion joints reduce mechanical and thermal stresses on piping and connected equipment - pumps, compressors or motors - isolate vibration, correct misalignment and ensure sealing.\n\nDepending on materials, KEMPCHEN® elastomer expansion joints withstand temperatures up to +110 °C.",
      featuresFr: [
        "Paroi intérieure : EPDM, NBR, CR, CSM",
        "Insert : Nylon ou Textile Hautes Températures",
        "Revêtement extérieur : EPDM, CR et CSM",
        "Applications : eau chaude, eaux usées, eau potable (KTW), solutions chlorées, hydrocarbures, huiles, acides, airs comprimés, eau de mer…",
        "Dimension : PN 10, du DN 25 au DN 1000",
        "Alimentaire : FDA et KTW",
      ],
      featuresEn: [
        "Inner liner: EPDM, NBR, CR, CSM",
        "Insert: nylon or high-temperature textile",
        "Outer cover: EPDM, CR and CSM",
        "Media: hot water, wastewater, drinking water (KTW), chlorinated solutions, hydrocarbons, oils, acids, compressed air, seawater…",
        "Size range: PN 10, DN 25 to DN 1000",
        "Food contact: FDA and KTW",
      ],
      applicationsFr: [
        "Industrie chimique",
        "Production d'énergie",
        "Industrie pétrolière",
        "Construction navale",
        "Sidérurgie et métallurgie",
        "Traitement des eaux",
        "Industrie agroalimentaire",
      ],
      applicationsEn: [
        "Chemical industry",
        "Power generation",
        "Oil & gas",
        "Shipbuilding",
        "Steel and metallurgy",
        "Water treatment",
        "Food industry",
      ],
      specsFr: [
        "Température max : +110 °C",
        "PN : 10",
        "DN : 25 à 1000",
      ],
      specsEn: [
        "Max temperature: +110 °C",
        "PN: 10",
        "DN: 25 to 1000",
      ],
    }),
    dn: null,
    pn: "PN10",
    material: frEn(
      "Élastomères EPDM / NBR / CR / CSM",
      "Elastomers EPDM / NBR / CR / CSM",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "water", "industry", "food"],
    technicalSpecs: {
      pressureClass: "PN10",
      fluids: ["eau", "hydrocarbures", "huiles", "acides", "air"],
      documentCount: 1,
    },
  }),
  base({
    reference: "AUTOFLEX",
    slug: "compensateur-dilatation-textiles-autoflex",
    name: frEn(
      "Compensateur de dilatation textiles Autoflex®",
      "Autoflex® textile expansion joint",
    ),
    description: buildDescription({
      bulletsFr: [
        "Gamme : AUTOFLEX ECO, AUTOFLEX HIGH TECH, AUTOFLEX INNOVATION",
        "Standards et sur-mesure",
        "Températures : -40 °C jusqu'à 1 000 °C",
        "Alimentaire : FDA - Sécurité feu : classé feu M0 ou M1",
      ],
      bulletsEn: [
        "Range: AUTOFLEX ECO, AUTOFLEX HIGH TECH, AUTOFLEX INNOVATION",
        "Standard and custom designs",
        "Temperatures: -40 °C up to 1,000 °C",
        "Food contact: FDA - Fire safety: M0 or M1 rated",
      ],
      bodyFr:
        "Pour protéger vos installations des dilatations et des vibrations, nous proposons des compensateurs textiles standards et sur-mesure. Nos compensateurs textiles sont spécialement étudiés pour les applications de désulfuration ou d'épuration et de traitement des fumées. Ils ont une excellente tenue en température et en résistance chimique suivant les matériaux composites utilisés.\n\nCes compensateurs de dilatation textiles bénéficient d'une remarquable capacité d'absorption des mouvements (axiaux, latéraux, torsions).\n\nNos ingénieurs techniciens et commerciaux se déplacent sur vos sites pour relever les cotes et faire des préconisations. À partir de vos contraintes techniques (diamètre, mouvement à absorber, pression, etc.) et de votre cahier des charges, nous déterminons le compensateur de dilatation le plus adapté.",
      bodyEn:
        "To protect installations from expansion and vibration, we supply standard and custom textile expansion joints. Our textile joints are designed for flue-gas desulphurization, purification and treatment applications. Temperature and chemical resistance depend on the composite materials used.\n\nThese textile expansion joints offer outstanding absorption of axial, lateral and torsional movements.\n\nOur engineers visit your sites to take measurements and recommend solutions. From your technical constraints (diameter, movement, pressure, etc.) and specification, we select the most suitable expansion joint.",
      featuresFr: [
        "Formes variées : circulaires, rectangulaires, coniques, raccordements asymétriques, etc.",
      ],
      featuresEn: [
        "Various shapes: circular, rectangular, conical, asymmetric connections, etc.",
      ],
      applicationsFr: [
        "Installation de désulfuration de fumées (IDF)",
        "Installation d'épuration des fumées (IEF) en chimie",
        "Pétrochimie et raffineries",
        "Centrales de production d'énergie",
        "Usines de traitement des déchets (UIOM)",
      ],
      applicationsEn: [
        "Flue-gas desulphurization (FGD)",
        "Flue-gas purification in chemical plants",
        "Petrochemicals and refining",
        "Power plants",
        "Waste treatment plants",
      ],
      specsFr: ["Température : -40 °C à +1 000 °C"],
      specsEn: ["Temperature: -40 °C to +1,000 °C"],
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Textiles composites / silicone",
      "Composite textiles / silicone",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      fluids: ["fumées", "gaz"],
      documentCount: 1,
    },
  }),
  base({
    reference: "COMP-METAL",
    slug: "compensateur-dilatation-metal",
    name: frEn(
      "Compensateur de dilatation en métal",
      "Metal expansion joint",
    ),
    description: buildDescription({
      bodyFr:
        "Vannes, pompes, échangeurs à chaleur, systèmes d'échappement… sont autant d'éléments nécessitant la mise en place de compensateurs de dilatation. Nous vous accompagnons pour protéger toutes vos installations des dilatations et des vibrations.\n\nÀ partir de vos contraintes techniques et de votre cahier des charges, nous déterminons le compensateur de dilatation adapté : diamètre, mouvements à absorber, pression, température, matière et type de raccordement.\n\nNos compensateurs de dilatation absorbent les mouvements axiaux, latéraux et/ou angulaires, et conviennent aux applications les plus exigeantes (températures, pressions…).",
      bodyEn:
        "Valves, pumps, heat exchangers, exhaust systems and more often require expansion joints. We help protect your installations from expansion and vibration.\n\nFrom your technical constraints and specification - diameter, movements, pressure, temperature, material and connection type - we select the right expansion joint.\n\nOur expansion joints absorb axial, lateral and/or angular movements and suit the most demanding temperature and pressure applications.",
      featuresFr: [
        "Compensateur de dilatation à souder (304 SS, 400 °C, 16 bar)",
        "Compensateur de dilatation à brides fixes (304 SS, 400 °C, 16 bar, bride acier au carbone)",
        "Compensateur de dilatation à brides tournantes (304 SS, 400 °C, 16 bar, bride acier au carbone galvanisé)",
        "Compensateur de dilatation en caoutchouc (110 °C, 16 bar, bride acier au carbone galvanisé)",
      ],
      featuresEn: [
        "Weld-end expansion joint (304 SS, 400 °C, 16 bar)",
        "Fixed-flange expansion joint (304 SS, 400 °C, 16 bar, carbon-steel flange)",
        "Floating-flange expansion joint (304 SS, 400 °C, 16 bar, galvanized carbon-steel flange)",
        "Rubber expansion joint (110 °C, 16 bar, galvanized carbon-steel flange)",
      ],
      specsFr: [
        "Température max (métal) : +400 °C",
        "Température max (caoutchouc) : +110 °C",
        "Pression : 16 bar",
        "Matière type : 304 SS",
      ],
      specsEn: [
        "Max temperature (metal): +400 °C",
        "Max temperature (rubber): +110 °C",
        "Pressure: 16 bar",
        "Typical material: 304 SS",
      ],
    }),
    dn: null,
    pn: "16 bar",
    material: frEn(
      "Acier inoxydable 304 / caoutchouc",
      "304 stainless steel / rubber",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry", "water"],
    technicalSpecs: {
      pressureClass: "16 bar",
      fluids: ["eau", "vapeur", "gaz"],
      documentCount: 1,
    },
  }),
];
