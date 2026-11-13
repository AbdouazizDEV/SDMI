import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "joints-ptfe";

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

const fpaNoteFr =
  "Le KLINGER® top-chem est désormais fabriqué sans auxiliaires de polymérisation fluorés (FPA), des substances de procédé appartenant à la famille des PFAS. La gamme est donc maintenant qualifiée FPA free. À ce jour, KLINGER® est le seul fabricant à avoir fait évoluer son procédé de production dans ce sens. Aucune modification des caractéristiques techniques du KLINGER® top-chem n'est à signaler.";
const fpaNoteEn =
  "KLINGER® top-chem is now manufactured without fluorinated polymerisation aids (FPA), process substances in the PFAS family. The range is therefore FPA free. To date, KLINGER® is the only manufacturer to have evolved its production process in this way. No change to the technical characteristics of KLINGER® top-chem.";

/** Joints PTFE — sous-famille PTFE. */
export const ptfeRanges: CatalogRangeSeed[] = [
  base({
    reference: "TOP-CHEM-3210",
    slug: "klinger-top-chem-3210",
    name: frEn("KLINGER® top-chem 3210", "KLINGER® top-chem 3210"),
    description: buildDescription({
      bulletsFr: [
        "Nouveau matériau à base de PTFE modifié",
        "Excellentes propriétés d'étanchéité et résistance chimique vis-à-vis des acides et bases",
        "Flexibilité remarquable",
        "Grande stabilité sous contrainte",
        "Mise en œuvre simple",
        "Convient pour toutes les industries",
      ],
      bulletsEn: [
        "New modified PTFE-based material",
        "Excellent sealing properties and chemical resistance to acids and bases",
        "Outstanding flexibility",
        "High stability under load",
        "Easy to install",
        "Suitable for all industries",
      ],
      bodyFr:
        "Le joint KLINGER® top-chem 3210 est un nouveau matériau à base de PTFE modifié offrant d'excellentes propriétés d'étanchéité, une flexibilité remarquable et une grande stabilité sous contrainte. Il a une excellente résistance chimique vis-à-vis des acides et bases. Grâce à sa simplicité de mise en œuvre, il convient pour toutes les industries.\n\n" +
        fpaNoteFr,
      bodyEn:
        "KLINGER® top-chem 3210 is a new modified PTFE-based material offering excellent sealing properties, outstanding flexibility and high stability under load. It has excellent chemical resistance to acids and bases. Easy to install, it suits all industries.\n\n" +
        fpaNoteEn,
      compositionFr: "PTFE modifié chargé silicate.",
      compositionEn: "Silicate-filled modified PTFE.",
      applicationsFr: [
        "Tous fluides : acides, bases, vapeur, produits alimentaires",
        "Restrictions : fluor et métaux alcalins en fusion",
      ],
      applicationsEn: [
        "All fluids: acids, bases, steam, food products",
        "Restrictions: fluorine and molten alkali metals",
      ],
      specsFr: [
        "Épaisseur : 0,8 mm",
        "Largeur : 1250 mm",
        "Longueur : 1250 mm",
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +250 °C",
        "Pression : 200 bar",
        "Compressibilité : 7 %",
      ],
      specsEn: [
        "Thickness: 0.8 mm",
        "Width: 1250 mm",
        "Length: 1250 mm",
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +250 °C",
        "Pressure: 200 bar",
        "Compressibility: 7%",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("PTFE modifié / silicate", "Modified PTFE / silicate"),
    standards: ["en10204"],
    sectorTags: ["industry", "food", "energy"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["acides", "bases", "vapeur", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "GORE-GR",
    slug: "gore-gr",
    name: frEn("GORE® GR", "GORE® GR"),
    description: buildDescription({
      bulletsFr: [
        "Feuilles d'étanchéité",
        "Avantages des feuilles en PTFE conventionnelles sans le fluage à froid et la relaxation associés",
        "Parfaitement adaptées aux surfaces irrégulières",
        "Se compriment en un joint extrêmement résistant",
        "Étanchéité fiable pour tous types de brides et de fluides",
      ],
      bulletsEn: [
        "Gasket sheets",
        "Benefits of conventional PTFE sheets without the usual cold flow and relaxation",
        "Perfectly suited to irregular surfaces",
        "Compress into an extremely strong gasket",
        "Reliable sealing for all flange and fluid types",
      ],
      bodyFr:
        "Les feuilles d'étanchéité GORE® GR présentent les avantages des feuilles en PTFE conventionnelles sans le fluage à froid et la relaxation qui sont généralement associés à ces dernières. Elles s'adaptent parfaitement aux surfaces irrégulières, se compriment en un joint extrêmement résistant qui offre une étanchéité fiable et idéale pour tous types de brides et de fluides.",
      bodyEn:
        "GORE® GR gasket sheets offer the benefits of conventional PTFE sheets without the cold flow and relaxation usually associated with them. They adapt perfectly to irregular surfaces and compress into an extremely strong gasket for reliable sealing on all flange and fluid types.",
      compositionFr:
        "100 % PTFE pur expansé (ePTFE) à structure fibreuse multidirectionnelle.",
      compositionEn:
        "100% pure expanded PTFE (ePTFE) with multidirectional fibrous structure.",
      applicationsFr: [
        "Tous fluides chimiques ayant un pH compris entre 0 et 14, à l'exception des métaux alcalins en fusion ou dissous et du fluor élémentaire",
        "Pour usage industriel uniquement",
        "Ne pas utiliser pour des opérations de fabrication, de préparation, de traitement ou d'emballage des produits alimentaires, pharmaceutiques, cosmétiques ou dispositifs médicaux",
      ],
      applicationsEn: [
        "All chemical fluids with pH 0–14, except molten or dissolved alkali metals and elemental fluorine",
        "For industrial use only",
        "Do not use for manufacturing, preparing, processing or packaging food, pharmaceuticals, cosmetics or medical devices",
      ],
      specsFr: [
        "Matière : PTFE",
        "Température min : -268 °C",
        "Température max : +315 °C",
        "Pression : 40 bar",
        "Compressibilité : 56 %",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -268 °C",
        "Max temperature: +315 °C",
        "Pressure: 40 bar",
        "Compressibility: 56%",
      ],
    }),
    dn: null,
    pn: "40 bar",
    material: frEn("ePTFE 100 % pur", "100% pure ePTFE"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      pressureClass: "40 bar",
      fluids: ["produits chimiques"],
      documentCount: 1,
    },
  }),
  base({
    reference: "TOP-CHEM-2000",
    slug: "klinger-top-chem-2000",
    name: frEn("KLINGER® top-chem 2000", "KLINGER® top-chem 2000"),
    description: buildDescription({
      bulletsFr: [
        "Joint à base de PTFE modifié pour conditions sévères dans toutes les industries",
        "Propriétés uniques de résistance mécanique",
        "Supporte des contraintes de température et de pression très élevées",
        "Résistance au fluage exceptionnelle (5 % sous 50 MPa à +250 °C)",
        "Seul PTFE modifié possédant un certificat Sécurité Feu",
        "Excellente résistance chimique vis-à-vis des acides et bases fortes",
      ],
      bulletsEn: [
        "Modified PTFE gasket for severe conditions in all industries",
        "Unique mechanical strength properties",
        "Withstands very high temperature and pressure loads",
        "Exceptional creep resistance (5% under 50 MPa at +250 °C)",
        "Only modified PTFE with a Fire Safety certificate",
        "Excellent chemical resistance to strong acids and bases",
      ],
      bodyFr:
        "Le KLINGER® top-chem 2000 est le joint à base de PTFE modifié pour conditions sévères dans toutes les industries. Grâce à ses propriétés uniques de résistance mécanique, il est en mesure de supporter des contraintes de température et de pression très élevées. Sa résistance au fluage est exceptionnelle (5 % sous 50 MPa à +250 °C). C'est le seul PTFE modifié qui possède un certificat Sécurité Feu. Il présente une excellente résistance chimique vis-à-vis des acides et bases fortes et offre des performances remarquables dans les applications avec fortes contraintes mécaniques sous hautes températures.\n\n" +
        fpaNoteFr,
      bodyEn:
        "KLINGER® top-chem 2000 is the modified PTFE gasket for severe conditions in all industries. Thanks to its unique mechanical strength, it withstands very high temperature and pressure loads. Creep resistance is exceptional (5% under 50 MPa at +250 °C). It is the only modified PTFE with a Fire Safety certificate. It offers excellent chemical resistance to strong acids and bases and outstanding performance under high mechanical loads at high temperatures.\n\n" +
        fpaNoteEn,
      compositionFr: "PTFE modifié chargé carbure de silicium.",
      compositionEn: "Silicon-carbide-filled modified PTFE.",
      applicationsFr: [
        "Tous fluides : acides et solutions alcalines, vapeur, produits alimentaires",
        "Restrictions : fluor et métaux alcalins en fusion",
      ],
      applicationsEn: [
        "All fluids: acids and alkaline solutions, steam, food products",
        "Restrictions: fluorine and molten alkali metals",
      ],
      specsFr: [
        "Épaisseur : 1 mm",
        "Largeur : 1500 mm",
        "Longueur : 1500 mm",
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +250 °C",
        "Pression : 210 bar",
        "Compressibilité : 2 %",
      ],
      specsEn: [
        "Thickness: 1 mm",
        "Width: 1500 mm",
        "Length: 1500 mm",
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +250 °C",
        "Pressure: 210 bar",
        "Compressibility: 2%",
      ],
    }),
    dn: null,
    pn: "210 bar",
    material: frEn(
      "PTFE modifié / carbure de silicium",
      "Modified PTFE / silicon carbide",
    ),
    standards: ["en10204"],
    sectorTags: ["industry", "food", "energy"],
    technicalSpecs: {
      pressureClass: "210 bar",
      fluids: ["acides", "bases", "vapeur", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "TOP-CHEM-2003",
    slug: "klinger-top-chem-2003",
    name: frEn("KLINGER® top-chem 2003", "KLINGER® top-chem 2003"),
    description: buildDescription({
      bulletsFr: [
        "Matériau à base de PTFE modifié",
        "Excellente résistance chimique vis-à-vis des acides forts et des produits chimiques en général",
        "Grande compressibilité idéale pour maintenir l'étanchéité même avec une pression d'assise faible",
        "Convient particulièrement pour les assemblages à faible serrage",
      ],
      bulletsEn: [
        "Modified PTFE-based material",
        "Excellent chemical resistance to strong acids and chemicals in general",
        "High compressibility ideal for sealing even at low seating pressure",
        "Especially suitable for low-bolt-load assemblies",
      ],
      bodyFr:
        "Le KLINGER® top-chem 2003 est un matériau à base de PTFE modifié qui possède une excellente résistance chimique vis-à-vis des acides forts et des produits chimiques en général. Il présente une grande compressibilité et est idéal pour maintenir l'étanchéité même avec une pression d'assise faible. Il convient particulièrement pour les assemblages à faible serrage.\n\n" +
        fpaNoteFr,
      bodyEn:
        "KLINGER® top-chem 2003 is a modified PTFE-based material with excellent chemical resistance to strong acids and chemicals in general. High compressibility keeps the seal even at low seating pressure. Especially suitable for low-bolt-load assemblies.\n\n" +
        fpaNoteEn,
      compositionFr: "PTFE modifié chargé silicate.",
      compositionEn: "Silicate-filled modified PTFE.",
      applicationsFr: [
        "Tous fluides : acides et solutions alcalines, vapeur, produits alimentaires",
        "Restrictions : fluor et métaux alcalins en fusion",
      ],
      applicationsEn: [
        "All fluids: acids and alkaline solutions, steam, food products",
        "Restrictions: fluorine and molten alkali metals",
      ],
      specsFr: [
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +250 °C",
        "Pression : 200 bar",
        "Compressibilité : 16 %",
      ],
      specsEn: [
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +250 °C",
        "Pressure: 200 bar",
        "Compressibility: 16%",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("PTFE modifié / silicate", "Modified PTFE / silicate"),
    standards: ["en10204"],
    sectorTags: ["industry", "food", "energy"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["acides", "bases", "vapeur", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "32XS",
    slug: "klinger-32xs",
    name: frEn("KLINGER® 32XS", "KLINGER® 32XS"),
    description: buildDescription({
      bulletsFr: [
        "Étanchéité supérieure aux PTFE modifiés à bi-structure",
        "Faible fluage",
        "Forte compressibilité et bonne reprise élastique",
        "Solution fiable pour brides fragiles à faible serrage : céramique, cuivre, verre, plastique, émaillées, etc.",
      ],
      bulletsEn: [
        "Superior sealing vs bi-structure modified PTFE",
        "Low creep",
        "High compressibility and good elastic recovery",
        "Reliable for fragile flanges under low bolt load: ceramic, copper, glass, plastic, enamelled, etc.",
      ],
      bodyFr:
        "La structure en PTFE modifié à contexture homogène maîtrisée du KLINGER® 32XS allie une étanchéité supérieure aux PTFE modifiés à bi-structure, un faible fluage, une forte compressibilité et une bonne reprise élastique. Le joint KLINGER® 32XS est une solution fiable pour les assemblages boulonnés notamment les brides fragiles soumises à de faibles contraintes de serrage : céramique, cuivre, verre, plastique, émaillées, etc.",
      bodyEn:
        "The homogeneous controlled structure of modified PTFE in KLINGER® 32XS combines superior sealing vs bi-structure modified PTFE, low creep, high compressibility and good elastic recovery. KLINGER® 32XS is a reliable solution for bolted assemblies, especially fragile flanges under low bolt load: ceramic, copper, glass, plastic, enamelled, etc.",
      compositionFr: "PTFE modifié à contexture 100 % homogène maîtrisée.",
      compositionEn: "Modified PTFE with 100% homogeneous controlled structure.",
      applicationsFr: [
        "Eau",
        "Agroalimentaire",
        "Chimie fine, chimie lourde et pétrochimie",
        "Bio pharma",
        "Cryogénie",
        "Papeterie",
        "Sidérurgie",
        "Automobile",
        "Aéronautique",
      ],
      applicationsEn: [
        "Water",
        "Food industry",
        "Fine chemicals, heavy chemicals and petrochemicals",
        "Bio-pharma",
        "Cryogenics",
        "Paper",
        "Steel industry",
        "Automotive",
        "Aerospace",
      ],
      specsFr: [
        "Épaisseur : 2 mm",
        "Largeur : 1500 mm",
        "Longueur : 1500 mm",
        "Matière : PTFE",
        "Température min : -200 °C",
        "Température max : +270 °C",
        "Pression : 80 bar",
        "Compressibilité : 55 %",
      ],
      specsEn: [
        "Thickness: 2 mm",
        "Width: 1500 mm",
        "Length: 1500 mm",
        "Material: PTFE",
        "Min temperature: -200 °C",
        "Max temperature: +270 °C",
        "Pressure: 80 bar",
        "Compressibility: 55%",
      ],
    }),
    dn: null,
    pn: "80 bar",
    material: frEn("PTFE modifié homogène", "Homogeneous modified PTFE"),
    standards: ["en10204"],
    sectorTags: ["food", "industry", "water", "energy"],
    technicalSpecs: {
      pressureClass: "80 bar",
      fluids: ["eau", "alimentaire", "chimie"],
      documentCount: 1,
    },
  }),
  base({
    reference: "30SH",
    slug: "teadit-30-sh",
    name: frEn("TEADIT® 30 SH", "TEADIT® 30 SH"),
    description: buildDescription({
      bulletsFr: [
        "Feuille de haute technicité en PTFE expansé multidirectionnel pur à 100 %",
        "Pour les applications extrêmes",
        "PTFE dernière génération, développé pour minimiser le fluage / relaxation à froid et à chaud grâce à des fibres plus homogènes et plus fines",
      ],
      bulletsEn: [
        "High-tech sheet in 100% pure multidirectional expanded PTFE",
        "For extreme applications",
        "Latest-generation PTFE designed to minimise cold and hot creep/relaxation thanks to more homogeneous, finer fibres",
      ],
      bodyFr:
        "Le joint TEADIT® 30 SH dispose d'exceptionnelles propriétés mécaniques qui rendent le phénomène de fluage/relaxation minimum même à hautes températures. Son excellente malléabilité rend le surfaçage ou la réparation de petites irrégularités des faces de brides inutiles. Les joints découpés en TEADIT® 30 SH sont dimensionnellement stables sous l'effet de la compression. TEADIT® 30 SH est rapide et simple à mettre en place.",
      bodyEn:
        "TEADIT® 30 SH has exceptional mechanical properties that minimise creep/relaxation even at high temperatures. Excellent malleability makes facing or repairing small flange irregularities unnecessary. Cut gaskets remain dimensionally stable under compression. TEADIT® 30 SH is quick and easy to install.",
      compositionFr: "PTFE 100 % pur expansé (ePTFE).",
      compositionEn: "100% pure expanded PTFE (ePTFE).",
      applicationsFr: [
        "Convient à toutes les industries : chimiques, pétrochimiques, pharmaceutiques, alimentaires, etc.",
        "Chimiquement inerte contre toutes les substances (pH 0-14) y compris les plus agressives comme les acides et les bases",
        "Restrictions : métaux alcalins en fusion et fluor élémentaire chaud sous haute pression",
      ],
      applicationsEn: [
        "Suitable for all industries: chemical, petrochemical, pharmaceutical, food, etc.",
        "Chemically inert to all substances (pH 0-14) including the most aggressive acids and bases",
        "Restrictions: molten alkali metals and hot elemental fluorine under high pressure",
      ],
      specsFr: [
        "Épaisseur : 0,5 mm",
        "Largeur : 1500 mm",
        "Longueur : 1500 mm",
        "Matière : PTFE",
        "Température min : -268 °C",
        "Température max : +260 °C",
        "Température de service max en pointe : +315 °C",
        "Pression : 200 bar",
        "Compressibilité : 45 %",
      ],
      specsEn: [
        "Thickness: 0.5 mm",
        "Width: 1500 mm",
        "Length: 1500 mm",
        "Material: PTFE",
        "Min temperature: -268 °C",
        "Max temperature: +260 °C",
        "Peak service temperature: +315 °C",
        "Pressure: 200 bar",
        "Compressibility: 45%",
      ],
    }),
    dn: null,
    pn: "200 bar",
    material: frEn("ePTFE 100 % pur", "100% pure ePTFE"),
    standards: ["en10204"],
    sectorTags: ["industry", "food", "energy"],
    technicalSpecs: {
      pressureClass: "200 bar",
      fluids: ["acides", "bases", "chimie"],
      documentCount: 1,
    },
  }),
];
