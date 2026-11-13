import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "tresses-rubans-etancheite";

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

/** Tresses et rubans d'étanchéité. */
export const tressesRubansRanges: CatalogRangeSeed[] = [
  base({
    reference: "K36",
    slug: "tresse-kempchen-k36",
    name: frEn("Tresse KEMPCHEN® K36", "KEMPCHEN® K36 packing"),
    description: buildDescription({
      bulletsFr: [
        "Garniture de presse-étoupe de vanne",
        "Très bas coefficient de frottement",
        "Particulièrement recommandée pour les étanchéités de vannes pilotées",
        "Exceptionnelle résistance aux produits chimiques agressifs",
        "Utilisée particulièrement dans l'industrie chimique",
      ],
      bulletsEn: [
        "Valve stuffing-box packing",
        "Very low friction coefficient",
        "Especially recommended for actuated valve sealing",
        "Exceptional resistance to aggressive chemicals",
        "Particularly used in the chemical industry",
      ],
      bodyFr:
        "La tresse KEMPCHEN® K36 est une garniture de presse-étoupe de vanne à très bas coefficient de frottement, particulièrement recommandée pour les étanchéités de vannes pilotées.",
      bodyEn:
        "KEMPCHEN® K36 packing is a valve stuffing-box packing with a very low friction coefficient, especially recommended for actuated valve sealing.",
      compositionFr:
        "Tressage de fibres de PTFE pur et d'une imprégnation de PTFE en dispersion.",
      compositionEn:
        "Braid of pure PTFE fibres with PTFE dispersion impregnation.",
      applicationsFr: [
        "Garnitures de presse-étoupe de vannes",
        "Applications semi-statiques et statiques",
      ],
      applicationsEn: [
        "Valve stuffing-box packings",
        "Semi-static and static applications",
      ],
      specsFr: [
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +280 °C",
        "Pression : 200 bar",
        "Vitesse maximale alternative : 2 m/s",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +280 °C",
        "Pressure: 200 bar",
        "Max reciprocating speed: 2 m/s",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("PTFE", "PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K36SL",
    slug: "tresse-kempchen-k36sl",
    name: frEn("Tresse KEMPCHEN® K36SL", "KEMPCHEN® K36SL packing"),
    description: buildDescription({
      bulletsFr: [
        "Très bas coefficient de frottement",
        "Particulièrement recommandée pour les étanchéités de vannes pilotées",
        "Exceptionnelle résistance aux produits chimiques agressifs",
        "Utilisée particulièrement dans l'industrie chimique",
        "Conçue pour être en contact avec les denrées alimentaires (conformité FDA)",
      ],
      bulletsEn: [
        "Very low friction coefficient",
        "Especially recommended for actuated valve sealing",
        "Exceptional resistance to aggressive chemicals",
        "Particularly used in the chemical industry",
        "Designed for food contact (FDA compliant)",
      ],
      bodyFr:
        "La tresse K36SL est très facile de mise en œuvre ; elle offre l'avantage de toutes les tresses à base de PTFE de pouvoir s'extraire facilement sans laisser de résidus dans le fond du presse-étoupe.",
      bodyEn:
        "K36SL packing is easy to install and, like all PTFE-based packings, can be removed easily without leaving residues in the stuffing box.",
      compositionFr:
        "Multifilaments de PTFE pur dégraissés (type 419S Lenzing GmbH).",
      compositionEn:
        "Degreased pure PTFE multifilaments (type 419S Lenzing GmbH).",
      applicationsFr: ["Garnitures de presse-étoupe de vannes"],
      applicationsEn: ["Valve stuffing-box packings"],
      specsFr: [
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +280 °C",
        "Pression : 200 bar",
        "Vitesse maximale alternative : 2 m/s",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +280 °C",
        "Pressure: 200 bar",
        "Max reciprocating speed: 2 m/s",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("PTFE", "PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry", "food"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["produits chimiques", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K39",
    slug: "tresse-kempchen-k39",
    name: frEn("Tresse KEMPCHEN® K39", "KEMPCHEN® K39 packing"),
    description: buildDescription({
      bulletsFr: [
        "Garniture de presse-étoupe pour pompes",
        "Exceptionnelle résistance aux produits chimiques agressifs",
        "Utilisée particulièrement dans l'industrie chimique",
        "Bonne stabilité volumétrique sous conditions de service difficiles grâce à la dispersion de PTFE et au lubrifiant",
      ],
      bulletsEn: [
        "Pump stuffing-box packing",
        "Exceptional resistance to aggressive chemicals",
        "Particularly used in the chemical industry",
        "Good volumetric stability under severe service thanks to PTFE dispersion and lubricant",
      ],
      bodyFr:
        "La souplesse de la structure de cette tresse permet une étanchéité efficace sans serrage important du fouloir du presse-étoupe. C'est également une excellente tresse pour les applications d'étanchéité sur brides. Sa mise en œuvre est aisée et elle s'extrait facilement sans laisser de résidus dans le fond du presse-étoupe.",
      bodyEn:
        "The flexible structure provides effective sealing without heavy gland tightening. It is also excellent for flange sealing. Easy to install and remove without leaving residues in the stuffing box.",
      compositionFr:
        "Tressage de fibres de PTFE pur et d'une imprégnation de PTFE en dispersion additionné d'un lubrifiant.",
      compositionEn:
        "Braid of pure PTFE fibres with PTFE dispersion impregnation plus lubricant.",
      applicationsFr: ["Garnitures de presse-étoupe de pompes"],
      applicationsEn: ["Pump stuffing-box packings"],
      specsFr: [
        "Matière : PTFE",
        "Température min : -100 °C",
        "Température max : +280 °C",
        "Pression : 15 bar",
        "Vitesse maximale alternative : 3 m/s",
        "Vitesse maximale rotative : 8 m/s",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -100 °C",
        "Max temperature: +280 °C",
        "Pressure: 15 bar",
        "Max reciprocating speed: 3 m/s",
        "Max rotary speed: 8 m/s",
      ],
    }),
    dn: null,
    pn: "15 bar",
    material: frEn("PTFE", "PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "15 bar",
      fluids: ["produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K40",
    slug: "tresse-kempchen-k40",
    name: frEn("Tresse KEMPCHEN® K40", "KEMPCHEN® K40 packing"),
    description: buildDescription({
      bulletsFr: [
        "Garniture d'étanchéité 100 % GFO® de GORE®, fibres plus stables que les fibres de PTFE classiques",
        "Présence de graphite évacuant très efficacement l'échauffement dû à la friction",
        "Résiste parfaitement à l'extrusion",
        "Très bonne conductibilité thermique réduisant la dilatation à haute vitesse et les surtensions dans le presse-étoupe",
      ],
      bulletsEn: [
        "100% GORE® GFO® packing with fibres more stable than classic PTFE",
        "Graphite content efficiently dissipates frictional heat",
        "Excellent extrusion resistance",
        "High thermal conductivity reducing expansion at high speed and stuffing-box stress",
      ],
      bodyFr:
        "La tresse K40 est particulièrement bien adaptée aux fluides agressifs, aux fluides à très faible viscosité et à fort pouvoir pénétrant. La tresse K40 est une garniture pouvant fonctionner à sec sous certaines conditions.",
      bodyEn:
        "K40 packing is especially suited to aggressive fluids, very low-viscosity and highly penetrating media. Under certain conditions it can run dry.",
      compositionFr:
        "Tressage de fils de PTFE graphité, additionné d'un lubrifiant (qualité 100 % GFO® de GORE®).",
      compositionEn:
        "Braid of graphited PTFE yarns with lubricant (100% GORE® GFO® quality).",
      applicationsFr: ["Garnitures de presse-étoupe de pompes"],
      applicationsEn: ["Pump stuffing-box packings"],
      specsFr: [
        "Matière : GFO",
        "Température min : -100 °C",
        "Température max : +280 °C",
        "Pression : 100 bar",
        "Vitesse maximale alternative : 5 m/s",
        "Vitesse maximale rotative : 20 m/s",
      ],
      specsEn: [
        "Material: GFO",
        "Min temperature: -100 °C",
        "Max temperature: +280 °C",
        "Pressure: 100 bar",
        "Max reciprocating speed: 5 m/s",
        "Max rotary speed: 20 m/s",
      ],
    }),
    dn: null,
    pn: "100 bar",
    material: frEn("GFO® / PTFE graphité", "GFO® / graphited PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "100 bar",
      fluids: ["fluides agressifs", "faible viscosité"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K81",
    slug: "tresse-kempchen-k81",
    name: frEn("Tresse KEMPCHEN® K81", "KEMPCHEN® K81 packing"),
    description: buildDescription({
      bulletsFr: [
        "Très bonne résistance à l'abrasion et bonne résistance aux fluides chimiques agressifs",
        "Applications où les jeux de fonctionnement sont importants",
        "Très bonne stabilité thermique",
        "Larges caractéristiques pour une grande variété d'applications",
        "Mise en œuvre aisée",
      ],
      bulletsEn: [
        "Very good abrasion resistance and good resistance to aggressive chemicals",
        "Suitable where running clearances are large",
        "Very good thermal stability",
        "Broad characteristics for a wide range of applications",
        "Easy to install",
      ],
      bodyFr:
        "De manière à éviter les problèmes d'effilochage des extrémités, il est préférable de les maintenir pendant la coupe à l'aide d'une bande adhésive. La dilatation des fibres d'aramide est assez significative lors des changements de température : être attentif au rodage et ne jamais trop serrer le fouloir. La tresse K81 s'extrait facilement sans laisser de résidus dans le fond du presse-étoupe.",
      bodyEn:
        "To avoid fraying, hold the ends with adhesive tape when cutting. Aramid fibre expansion is significant with temperature changes: take care during running-in and never overtighten the gland. K81 packing removes easily without residues.",
      compositionFr:
        "Tressage de fibres d'aramide (TWARON®) avec une imprégnation PTFE et un lubrifiant silicone.",
      compositionEn:
        "Braid of aramid fibres (TWARON®) with PTFE impregnation and silicone lubricant.",
      applicationsFr: ["Garnitures de presse-étoupe de pompes"],
      applicationsEn: ["Pump stuffing-box packings"],
      specsFr: [
        "Matière : Aramide",
        "Température min : -100 °C",
        "Température max : +280 °C",
        "Pression : 300 bar",
        "Vitesse maximale alternative : 3 m/s",
        "Vitesse maximale rotative : 20 m/s",
      ],
      specsEn: [
        "Material: Aramid",
        "Min temperature: -100 °C",
        "Max temperature: +280 °C",
        "Pressure: 300 bar",
        "Max reciprocating speed: 3 m/s",
        "Max rotary speed: 20 m/s",
      ],
    }),
    dn: null,
    pn: "300 bar",
    material: frEn("Aramide / PTFE", "Aramid / PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "300 bar",
      fluids: ["fluides chimiques", "abrasifs"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K89",
    slug: "tresse-kempchen-k89",
    name: frEn("Tresse KEMPCHEN® K89", "KEMPCHEN® K89 packing"),
    description: buildDescription({
      bulletsFr: [
        "Nouvelle garniture de presse-étoupe avec tressage mixte",
        "Meilleure résistance à l'extrusion en présence de jeux importants",
        "Très bonne reprise élastique ; accepte des vitesses linéaires jusqu'à 15 m/s et plus selon la pression",
        "Stabilité sous de sévères conditions de service",
        "Bonne résistance chimique ; contact alimentaire possible (non polluante)",
      ],
      bulletsEn: [
        "New mixed-braid stuffing-box packing",
        "Better extrusion resistance with large clearances",
        "Very good elastic recovery; linear speeds up to 15 m/s and more depending on pressure",
        "Stable under severe service conditions",
        "Good chemical resistance; food contact possible (non-polluting)",
      ],
      bodyFr:
        "Sa mise en œuvre est aisée et elle offre l'avantage de toutes les tresses à base de PTFE de pouvoir s'extraire facilement sans laisser de résidus dans le fond du presse-étoupe.",
      bodyEn:
        "Easy to install and, like all PTFE-based packings, easy to remove without leaving residues in the stuffing box.",
      compositionFr:
        "Tressage élaboré à partir d'une base de fibres de PTFE pur renforcé dans les angles par des fibres d'aramide et imprégné d'un lubrifiant.",
      compositionEn:
        "Braid based on pure PTFE fibres reinforced at the corners with aramid fibres and impregnated with lubricant.",
      applicationsFr: ["Garnitures de presse-étoupe de pompes"],
      applicationsEn: ["Pump stuffing-box packings"],
      specsFr: [
        "Matière : Aramide / PTFE",
        "Température min : -100 °C",
        "Température max : +280 °C",
        "Pression : 50 bar",
        "Vitesse maximale alternative : 15 m/s",
        "Vitesse maximale rotative : 5 m/s",
      ],
      specsEn: [
        "Material: Aramid / PTFE",
        "Min temperature: -100 °C",
        "Max temperature: +280 °C",
        "Pressure: 50 bar",
        "Max reciprocating speed: 15 m/s",
        "Max rotary speed: 5 m/s",
      ],
    }),
    dn: null,
    pn: "50 bar",
    material: frEn("Aramide / PTFE", "Aramid / PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry", "food"],
    technicalSpecs: {
      pressureClass: "50 bar",
      fluids: ["fluides chimiques", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K90",
    slug: "tresse-kempchen-k90",
    name: frEn("Tresse KEMPCHEN® K90", "KEMPCHEN® K90 packing"),
    description: buildDescription({
      bulletsFr: [
        "Nouvelle génération de garniture de presse-étoupe",
        "Tressage mixte associant résistance à l'abrasion des fibres d'aramide et bas coefficient de frottement du PTFE",
        "Très bonne reprise élastique ; accepte des jeux importants selon la pression",
        "Bonne tenue aux fluides chimiques agressifs",
        "Excellente résistance à l'abrasion",
      ],
      bulletsEn: [
        "New-generation stuffing-box packing",
        "Mixed braid combining aramid abrasion resistance with PTFE low friction",
        "Very good elastic recovery; accepts large clearances depending on pressure",
        "Good resistance to aggressive chemicals",
        "Excellent abrasion resistance",
      ],
      bodyFr:
        "Sa mise en œuvre est aisée et elle s'extrait facilement sans laisser de résidus dans le fond du presse-étoupe.",
      bodyEn:
        "Easy to install and remove without leaving residues in the stuffing box.",
      compositionFr:
        "Tressage de fils de PTFE graphité, additionné d'un lubrifiant, et renforcé dans les angles de fibres d'aramide.",
      compositionEn:
        "Braid of graphited PTFE yarns with lubricant, reinforced at the corners with aramid fibres.",
      applicationsFr: ["Garnitures de presse-étoupe de pompes"],
      applicationsEn: ["Pump stuffing-box packings"],
      specsFr: [
        "Matière : Aramide / PTFE graphité",
        "Température min : -200 °C",
        "Température max : +280 °C",
        "Pression : 200 bar",
        "Vitesse maximale alternative : 10 m/s",
        "Vitesse maximale rotative : 10 m/s",
      ],
      specsEn: [
        "Material: Aramid / graphited PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +280 °C",
        "Pressure: 200 bar",
        "Max reciprocating speed: 10 m/s",
        "Max rotary speed: 10 m/s",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("Aramide / PTFE graphité", "Aramid / graphited PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["fluides chimiques", "abrasifs"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K95",
    slug: "tresse-kempchen-k95",
    name: frEn("Tresse KEMPCHEN® K95", "KEMPCHEN® K95 packing"),
    description: buildDescription({
      bulletsFr: [
        "Bandes de graphite pur à 98 %, sans liant ni autre composant",
        "Exempte de fil métallique",
        "Très bonnes propriétés de fonctionnement à sec",
        "Teneur en chlore inférieure à 50 ppm",
        "Conseillée pour les applications nucléaires ; idéale pour pompes et vannes en pétrochimie, hydrocarbures, papeterie, centrale thermique",
      ],
      bulletsEn: [
        "98% pure graphite tapes, without binder or other components",
        "No metal wire",
        "Very good dry-running properties",
        "Chlorine content below 50 ppm",
        "Recommended for nuclear service; ideal for pumps and valves in petrochemicals, hydrocarbons, paper and power plants",
      ],
      bodyFr:
        "La garniture K95 a une excellente résistance à la pression et aux températures élevées. Elle est très élastique et compressible et présente une bonne conductibilité thermique. Elle élimine les usures sur les arbres de pompes et les tiges de vannes, est autolubrifiante et permet des gains importants en maintenance.",
      bodyEn:
        "K95 packing offers excellent pressure and high-temperature resistance. It is highly elastic and compressible with good thermal conductivity. It reduces wear on pump shafts and valve stems, is self-lubricating and cuts maintenance time and cost.",
      compositionFr: "Tressage de bandes de graphite expansé pur à 98 %.",
      compositionEn: "Braid of 98% pure expanded graphite tapes.",
      applicationsFr: ["Garnitures de presse-étoupe de vannes et de pompes"],
      applicationsEn: ["Valve and pump stuffing-box packings"],
      specsFr: [
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +650 °C",
        "Pression : 300 bar",
        "Vitesse maximale alternative : 10 m/s",
        "Vitesse maximale rotative : 30 m/s",
      ],
      specsEn: [
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +650 °C",
        "Pressure: 300 bar",
        "Max reciprocating speed: 10 m/s",
        "Max rotary speed: 30 m/s",
      ],
    }),
    dn: null,
    pn: "300 bar",
    material: frEn("Graphite expansé 98 %", "98% expanded graphite"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "300 bar",
      fluids: ["vapeur", "hydrocarbures"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K100",
    slug: "tresse-kempchen-k100",
    name: frEn("Tresse KEMPCHEN® K100", "KEMPCHEN® K100 packing"),
    description: buildDescription({
      bulletsFr: [
        "Bandes de graphite expansé souple, chimiquement pur à 99,85 %, tressage spécial",
        "Sans imprégnation, renforcée de fils métalliques en acier inoxydable pour hautes températures",
        "Excellente durée de vie en étanchéité d'arbres coulissants en présence de vapeur haute pression",
        "Haut pouvoir de résistance à l'extrusion et très bonne régularité de densité",
        "Installation facile et larges tolérances de fabrication",
      ],
      bulletsEn: [
        "Soft expanded graphite tapes, chemically pure to 99.85%, special braid",
        "No impregnation; reinforced with high-temperature stainless-steel wires",
        "Excellent service life on sliding shafts with high-pressure steam",
        "High extrusion resistance and very consistent density",
        "Easy to install with wide manufacturing tolerances",
      ],
      bodyFr:
        "Elle donne aussi de très bons résultats dans le cas de montages mixtes comme bague anti-extrusion. Le choix des matières lui confère une excellente stabilité volumétrique à haute température, non comparable aux garnitures conventionnelles en graphite.",
      bodyEn:
        "It also performs very well in mixed assemblies as an anti-extrusion ring. Material selection gives excellent high-temperature volumetric stability, unlike conventional graphite packings.",
      compositionFr:
        "Tressage de bandes de graphite souple, chimiquement pur à 99,85 %, renforcé avec des fils d'acier inoxydable résistant aux hautes températures, sans lubrifiant.",
      compositionEn:
        "Braid of soft graphite tapes, chemically pure to 99.85%, reinforced with high-temperature stainless-steel wires, without lubricant.",
      applicationsFr: ["Garnitures de presse-étoupe de vannes"],
      applicationsEn: ["Valve stuffing-box packings"],
      specsFr: [
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +650 °C",
        "Pression : 500 bar",
        "Vitesse maximale alternative : 2 m/s",
        "Vitesse maximale rotative : 5 m/s",
      ],
      specsEn: [
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +650 °C",
        "Pressure: 500 bar",
        "Max reciprocating speed: 2 m/s",
        "Max rotary speed: 5 m/s",
      ],
    }),
    dn: null,
    pn: "500 bar",
    material: frEn(
      "Graphite 99,85 % / Inox HT",
      "99.85% graphite / HT stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "500 bar",
      fluids: ["vapeur"],
      documentCount: 1,
    },
  }),
  base({
    reference: "E10",
    slug: "tresse-efiflon-ce1935-e10",
    name: frEn(
      "Tresse EFIFLON CE1935 E10",
      "EFIFLON CE1935 E10 packing",
    ),
    description: buildDescription({
      bulletsFr: [
        "Garniture de presse-étoupe spécialement étudiée pour pompes",
        "Fils de PTFE pur et de PTFE expansé imprégnés d'un lubrifiant spécial Alimentaire et BioPharma",
        "Garniture innovante",
        "Convient pour les applications les plus sévères",
      ],
      bulletsEn: [
        "Stuffing-box packing specially designed for pumps",
        "Pure PTFE and expanded PTFE yarns impregnated with a special food and BioPharma lubricant",
        "Innovative packing",
        "Suitable for the most severe applications",
      ],
      bodyFr:
        "Garniture innovante pour presse-étoupe de pompes, adaptée aux industries agroalimentaires et pharmaceutiques ainsi qu'aux fluides agressifs.",
      bodyEn:
        "Innovative pump stuffing-box packing for food and pharmaceutical industries as well as aggressive fluids.",
      compositionFr:
        "Tressage de multifilaments de PTFE pur et de PTFE expansé additionné d'un lubrifiant alimentaire.",
      compositionEn:
        "Braid of pure PTFE and expanded PTFE multifilaments with food-grade lubricant.",
      applicationsFr: [
        "Presse-étoupe de pompes, malaxeurs, agitateurs et pompes à piston pour tous fluides, acides et solutions alcalines fortes",
        "Industries agroalimentaires et pharmaceutiques",
      ],
      applicationsEn: [
        "Stuffing boxes for pumps, mixers, agitators and piston pumps for all fluids, acids and strong alkaline solutions",
        "Food and pharmaceutical industries",
      ],
      specsFr: [
        "Matière : PTFE",
        "Température min : -100 °C",
        "Température max : +280 °C",
        "Pression : 100 bar",
        "Vitesse maximale alternative : 2 m/s",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -100 °C",
        "Max temperature: +280 °C",
        "Pressure: 100 bar",
        "Max reciprocating speed: 2 m/s",
      ],
    }),
    dn: null,
    pn: "100 bar",
    material: frEn("PTFE", "PTFE"),
    standards: ["en10204"],
    sectorTags: ["food", "industry"],
    technicalSpecs: {
      pressureClass: "100 bar",
      fluids: ["acides", "alcalins", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K80",
    slug: "bague-matricee-kempchen-k80",
    name: frEn(
      "Bague matricée KEMPCHEN® K80",
      "KEMPCHEN® K80 die-formed ring",
    ),
    description: buildDescription({
      bulletsFr: [
        "Anneau préformé en bandes de graphite expansé souple chimiquement pur à 99,85 %",
        "Combinaison mixte d'anneaux préformés K80",
        "Excellente durée de vie en étanchéité d'arbres coulissants en présence de vapeur haute pression",
      ],
      bulletsEn: [
        "Preformed ring from chemically pure 99.85% soft expanded graphite tapes",
        "Mixed assembly of K80 preformed rings",
        "Excellent service life on sliding shafts with high-pressure steam",
      ],
      bodyFr:
        "Le montage mixte comprenant un anneau de tête et des anneaux centraux en K80 empêche la migration du graphite existant dans les garnitures conventionnelles et évite ainsi l'effet d'adhérence. Cette structure spéciale permet de maintenir un effort de friction constant.",
      bodyEn:
        "A mixed assembly with a header ring and central K80 rings prevents graphite migration found in conventional packings and avoids sticking. This special structure maintains a constant friction force.",
      compositionFr:
        "Bague préformée à partir de graphite expansé à 99,85 %.",
      compositionEn: "Preformed ring from 99.85% expanded graphite.",
      applicationsFr: ["Garnitures de presse-étoupe de vannes"],
      applicationsEn: ["Valve stuffing-box packings"],
      specsFr: [
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +650 °C",
        "Pression : 300 bar",
        "Vitesse maximale alternative : 2 m/s",
        "Vitesse maximale rotative : 5 m/s",
      ],
      specsEn: [
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +650 °C",
        "Pressure: 300 bar",
        "Max reciprocating speed: 2 m/s",
        "Max rotary speed: 5 m/s",
      ],
    }),
    dn: null,
    pn: "300 bar",
    material: frEn("Graphite 99,85 %", "99.85% graphite"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "300 bar",
      fluids: ["vapeur"],
      documentCount: 1,
    },
  }),
  base({
    reference: "K80S",
    slug: "bague-matricee-kempchen-k80s",
    name: frEn(
      "Bague matricée KEMPCHEN® K80S",
      "KEMPCHEN® K80S die-formed ring",
    ),
    description: buildDescription({
      bulletsFr: [
        "Anneau préformé en graphite armé de fines feuilles d'acier inoxydable",
        "Renfort métallique",
        "Excellente tenue à l'extrusion et très bonne régularité de densité",
        "Combinaison mixte d'anneaux préformés K80S",
        "Excellente durée de vie en étanchéité d'arbres coulissants en présence de vapeur haute pression",
      ],
      bulletsEn: [
        "Preformed ring from graphite reinforced with fine stainless-steel foils",
        "Metal reinforcement",
        "Excellent extrusion resistance and very consistent density",
        "Mixed assembly of K80S preformed rings",
        "Excellent service life on sliding shafts with high-pressure steam",
      ],
      bodyFr:
        "Le montage mixte comprenant un anneau de tête et de fond en K80S empêche la migration du graphite existant dans les garnitures conventionnelles et évite ainsi l'effet d'adhérence. Cette structure spéciale permet de maintenir un effort de friction constant.",
      bodyEn:
        "A mixed assembly with K80S header and bottom rings prevents graphite migration found in conventional packings and avoids sticking. This special structure maintains a constant friction force.",
      compositionFr:
        "Bague préformée à partir de graphite expansé à 99,85 %, avec renfort de fines feuilles d'acier inoxydable.",
      compositionEn:
        "Preformed ring from 99.85% expanded graphite reinforced with fine stainless-steel foils.",
      applicationsFr: ["Garnitures de presse-étoupe de vannes"],
      applicationsEn: ["Valve stuffing-box packings"],
      specsFr: [
        "Matière : Graphite",
        "Température min : -200 °C",
        "Température max : +650 °C",
        "Pression : 1500 bar",
        "Vitesse maximale alternative : 2 m/s",
        "Vitesse maximale rotative : 5 m/s",
      ],
      specsEn: [
        "Material: Graphite",
        "Min temperature: -200 °C",
        "Max temperature: +650 °C",
        "Pressure: 1500 bar",
        "Max reciprocating speed: 2 m/s",
        "Max rotary speed: 5 m/s",
      ],
    }),
    dn: null,
    pn: "1500 bar",
    material: frEn(
      "Graphite 99,85 % / feuilles Inox",
      "99.85% graphite / stainless foils",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "1500 bar",
      fluids: ["vapeur"],
      documentCount: 1,
    },
  }),
  base({
    reference: "25BI",
    slug: "ruban-teadit-25-bi",
    name: frEn("Ruban TEADIT 25 BI", "TEADIT 25 BI tape"),
    description: buildDescription({
      bulletsFr: [
        "Facilité de mise en œuvre et adaptabilité à toutes les formes pour des réparations rapides",
        "Convient aux brides fragiles, endommagées, ainsi qu'aux systèmes vibrants ou en rotation",
        "Simplification de la gestion des stocks grâce à leur large plage d'applications",
        "Adaptés à tous types de brides pour une polyvalence optimale",
      ],
      bulletsEn: [
        "Easy to install and adaptable to all shapes for quick repairs",
        "Suitable for fragile or damaged flanges and vibrating or rotating systems",
        "Simplifies stock management thanks to a wide application range",
        "Suitable for all flange types for maximum versatility",
      ],
      bodyFr:
        "TEADIT 25 BI est une bande d'étanchéité multidirectionnelle expansée, fabriquée à partir de PTFE pur à 100 %. Idéal pour les zones d'étanchéité étroites et partout où une largeur de joint définie est requise. Excellentes performances d'étanchéité (pH 0-14). Il ne vieillit pas et peut être stocké indéfiniment.\n\nCaractéristiques : excellente malléabilité pour compenser irrégularités ou dommages ; procédé de fabrication spécial pour une résistance à la traction égale dans les sens axial et radial.\n\nDimensions : largeur de 10 à 65 mm ; épaisseur 2, 3, 6 ou 9 mm.\n\nMontage : nettoyer et sécher les surfaces ; retirer le ruban protecteur avant collage ; combler les inégalités importantes par une seconde couche ponctuelle ; un joint complémentaire sur le diamètre extérieur empêche la déformation des brides et améliore l'étanchéité en cas de vibrations ; pour bride fragile ou largeur ≥ 17 mm, réaliser un raccordement en coupe biseau.",
      bodyEn:
        "TEADIT 25 BI is a multidirectional expanded sealing tape made from 100% pure PTFE. Ideal for narrow sealing areas and wherever a defined gasket width is required. Excellent sealing performance (pH 0-14). It does not age and can be stored indefinitely.\n\nFeatures: excellent malleability to compensate for irregularities or damage; special manufacturing for equal tensile strength in axial and radial directions.\n\nDimensions: width 10 to 65 mm; thickness 2, 3, 6 or 9 mm.\n\nInstallation: clean and dry surfaces; remove protective film before bonding; fill major irregularities with a second local layer; an outer complementary seal prevents flange distortion and improves sealing under vibration; for fragile flanges or width ≥ 17 mm, use a bevel joint.",
      compositionFr: "PTFE pur à 100 %, bande multidirectionnelle expansée.",
      compositionEn: "100% pure PTFE, multidirectional expanded tape.",
      applicationsFr: [
        "Brides fragiles ou endommagées",
        "Systèmes vibrants ou en rotation",
        "Industrie chimique (pH 0-14)",
      ],
      applicationsEn: [
        "Fragile or damaged flanges",
        "Vibrating or rotating systems",
        "Chemical industry (pH 0-14)",
      ],
      specsFr: [
        "Épaisseur type : 2 mm",
        "Largeur type : 10 mm",
        "Matière : PTFE",
        "Température min : -240 °C",
        "Température max : +270 °C",
        "Température de service max en pointe : +315 °C",
        "Pression : 200 bar",
        "Compressibilité : 70 %",
        "Qualité : DIN EN ISO 9001 / 14001",
      ],
      specsEn: [
        "Typical thickness: 2 mm",
        "Typical width: 10 mm",
        "Material: PTFE",
        "Min temperature: -240 °C",
        "Max temperature: +270 °C",
        "Peak service temperature: +315 °C",
        "Pressure: 200 bar",
        "Compressibility: 70%",
        "Quality: DIN EN ISO 9001 / 14001",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("PTFE expansé", "Expanded PTFE"),
    standards: ["en10204"],
    sectorTags: ["industry", "energy"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["produits chimiques"],
      documentCount: 1,
    },
  }),
];
