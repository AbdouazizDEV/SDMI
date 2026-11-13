import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "joints-toriques";

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
  compositionFr?: string;
  compositionEn?: string;
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

/** Toriques et bagues anti-extrusion. */
export const toriquesRanges: CatalogRangeSeed[] = [
  base({
    reference: "EYRCAP",
    slug: "joint-torique-revetu-eyrcap-rp-rf",
    name: frEn(
      "Joint torique revêtu Eyrcap RP et RF",
      "Eyrcap RP and RF encapsulated O-ring",
    ),
    description: buildDescription({
      bulletsFr: [
        "Revêtement en résine perfluorée FEP ou PFA : excellente résistance chimique et en température",
        "Bonne résistance chimique aux fluides à basses températures (azote liquide, oxygène liquide)",
        "Répond aux exigences et normes spécifiques de l'hydrogène",
        "Excellente reprise élastique grâce au ressort interne",
        "Durée de stockage illimitée",
        "Recommandé pour l'hydrogène",
      ],
      bulletsEn: [
        "FEP or PFA perfluorinated resin coating: excellent chemical and temperature resistance",
        "Good chemical resistance to low-temperature fluids (liquid nitrogen, liquid oxygen)",
        "Meets hydrogen-specific requirements and standards",
        "Excellent elastic recovery thanks to the internal spring",
        "Unlimited shelf life",
        "Recommended for hydrogen",
      ],
      bodyFr:
        "Les joints toriques encapsulés EYRCAP RP et RF sont idéaux sur les applications utilisant des produits très agressifs qui interdisent l'emploi des joints toriques en élastomère.\n\nIls possèdent une excellente reprise élastique et une grande capacité de résistance qui les rendent efficaces au contact de l'hydrogène, de très basses et hautes températures (-250 °C à +260 °C).\n\nLeur fiabilité et leurs performances ont été mises à l'épreuve avec succès dans plusieurs lancements de navettes spatiales et fusées par Boeing, la NASA, Lockheed…\n\nComposition et caractéristiques EYRCAP RF :\n• Enveloppe extérieure FEP\n• Ressort en inox ASTM type 302\n• Plage de température : de -250 °C à +204 °C\n\nComposition et caractéristiques EYRCAP RP :\n• Enveloppe extérieure PFA\n• Ressort en inox ASTM type 302\n• Plage de températures : de -250 °C à +260 °C",
      bodyEn:
        "EYRCAP RP and RF encapsulated O-rings are ideal for applications with highly aggressive media where elastomer O-rings cannot be used.\n\nThey offer excellent elastic recovery and high resistance, performing well with hydrogen and from cryogenic to high temperatures (-250 °C to +260 °C).\n\nTheir reliability has been proven successfully in several space shuttle and rocket launches by Boeing, NASA, Lockheed…\n\nEYRCAP RF composition and characteristics:\n• Outer jacket: FEP\n• Spring: ASTM type 302 stainless steel\n• Temperature range: -250 °C to +204 °C\n\nEYRCAP RP composition and characteristics:\n• Outer jacket: PFA\n• Spring: ASTM type 302 stainless steel\n• Temperature range: -250 °C to +260 °C",
      applicationsFr: [
        "Recommandé pour l'hydrogène",
        "Aérospatial",
        "Cryogénie ou très basses températures",
      ],
      applicationsEn: [
        "Recommended for hydrogen",
        "Aerospace",
        "Cryogenics or very low temperatures",
      ],
      specsFr: [
        "Température min : -60 °C (fiche) / jusqu'à -250 °C selon grade",
        "Température max : +260 °C",
      ],
      specsEn: [
        "Min temperature: -60 °C (datasheet) / down to -250 °C by grade",
        "Max temperature: +260 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn(
      "FEP / PFA + ressort inox",
      "FEP / PFA + stainless spring",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      fluids: ["hydrogène", "azote liquide", "oxygène liquide"],
      documentCount: 1,
    },
  }),
  base({
    reference: "EYRTOR",
    slug: "joint-torique-metallique-eyrtor",
    name: frEn(
      "Joint torique métallique Eyrtor®",
      "Eyrtor® metallic O-ring",
    ),
    description: buildDescription({
      bulletsFr: [
        "Fabriqués à partir de tubes, bandes et fils en acier inoxydable ou en alliage hautes températures",
        "Résistants aux conditions sévères de température et de pression, ainsi qu'aux environnements corrosifs",
        "Utilisés en applications statiques, montés en gorge",
      ],
      bulletsEn: [
        "Made from stainless-steel or high-temperature alloy tubes, strips and wires",
        "Resistant to severe temperature and pressure conditions and corrosive environments",
        "Used in static applications, installed in a groove",
      ],
      bodyFr:
        "Pour montage sur brides à faces plates ou surélevées, il convient d'utiliser le type CSE-A. Le type CSI-A convient de préférence pour les brides à faces à emboîtement simple. Ces deux joints toriques métalliques sont avec anneau de centrage servant également de limiteur d'écrasement. Ces anneaux sont éventuellement récupérables après reconditionnement du joint.\n\nPrincipe de fonctionnement : le joint torique métallique se déforme lors du serrage offrant aux faces de brides un contact métal/métal. La réaction du joint peut se faire de trois façons différentes : pressurisation, auto-activation et activation par ressort.\n\nLes joints toriques métalliques peuvent être recouverts d'une couche fine malléable qui a pour but d'améliorer l'étanchéité.\n\nComposition et profil : le détail de la composition et des profils est disponible dans notre fiche technique téléchargeable.",
      bodyEn:
        "For flat or raised-face flanges, use type CSE-A. Type CSI-A is preferred for tongue-and-groove flanges. Both metallic O-rings include a centering ring that also acts as a crush limiter. These rings may be reusable after joint reconditioning.\n\nOperating principle: the metallic O-ring deforms on tightening, providing metal-to-metal contact with the flange faces. Joint reaction can occur in three ways: pressurization, self-activation and spring activation.\n\nMetallic O-rings can be coated with a thin malleable layer to improve sealing.\n\nComposition and profiles: details are available in our downloadable datasheet.",
      applicationsFr: [
        "Aérospatiale",
        "Nucléaire",
        "Automobile",
        "Industrie",
        "Médical",
      ],
      applicationsEn: [
        "Aerospace",
        "Nuclear",
        "Automotive",
        "Industry",
        "Medical",
      ],
      specsFr: ["Matière : Métal", "Température max : +1200 °C"],
      specsEn: ["Material: Metal", "Max temperature: +1200 °C"],
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Acier inoxydable / alliage HT",
      "Stainless steel / HT alloy",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      fluids: ["gaz", "fluides corrosifs"],
      documentCount: 1,
    },
  }),
  base({
    reference: "O-RING",
    slug: "joint-torique-elastomere-o-ring",
    name: frEn(
      "Joint torique élastomère O-ring",
      "Elastomer O-ring",
    ),
    description: buildDescription({
      bulletsFr: [
        "Joints toriques polymères à sections circulaires en caoutchouc ou autres matériaux plastiques",
        "Développés pour être aptes au contact alimentaire",
        "Compacts et légers",
        "Forme de tore",
        "Utilisation pour les encombrements réduits en applications statiques et dynamiques (pistons, tiges, racleurs, guidages)",
      ],
      bulletsEn: [
        "Polymer O-rings with circular cross-section in rubber or other plastics",
        "Developed for food-contact suitability",
        "Compact and lightweight",
        "Toroidal shape",
        "For tight spaces in static and dynamic applications (pistons, rods, scrapers, guides)",
      ],
      bodyFr:
        "Les joints toriques polymères sont des anneaux à sections circulaires (tore) en caoutchouc ou autres matériaux plastiques. Ils sont logés dans une gorge dimensionnée en fonction du joint retenu. C'est la combinaison de ces 2 éléments — joint et logement — qui permet d'obtenir l'étanchéité.\n\nIls sont compacts et légers, se logent dans des gorges de faible encombrement, ne demandent pas de couple de serrage important et assurent l'étanchéité sur une large gamme de pressions, températures et tolérances. Ils sont réalisés par moulage, par usinage ou à partir d'une corde extrudée vulcanisée à chaud (joints VulcOring).\n\nL'extrusion-vulcanisation permet de réaliser des joints de très grandes dimensions (pas de limite de taille), des joints cadre, des joints de forme, etc. Ce procédé permet également des joints en corps creux de sections variées, y compris avec une paroi très fine pour de très faibles couples de serrage.\n\nComposition — large gamme d'élastomères :\n• Ethylène-Propylène (EPDM) : bonnes propriétés mécaniques ; très bonne tenue à l'eau, la vapeur et solutions aqueuses ; bonne tenue aux bases fortes, cétones et acides dilués ; excellente tenue à l'ozone, intempéries, chaleur et froid ; faible tenue aux huiles minérales et hydrocarbures.\n• Nitrile (NBR) : bonnes propriétés mécaniques ; très bonne tenue aux huiles et produits pétroliers, solvants aliphatiques ; bonne tenue à l'eau jusqu'à +70 °C, bases fortes et gaz ; faible tenue aux agents atmosphériques, acides, liquides de frein.\n• Nitrile carboxylé (XNBR) : propriétés proches du NBR avec meilleur comportement à l'usure en dynamique.\n• Nitrile hydrogéné (HNBR) : très bon comportement mécanique ; excellente résistance aux huiles, agents atmosphériques, eau, vapeur, bases diluées ; faible tenue aux carburants et liquides de frein.\n• Polychloroprène (CR) : bon comportement mécanique ; bonne tenue aux graisses minérales et agents atmosphériques ; tenue modérée aux huiles minérales, eau jusqu'à +70 °C, liquides de frein ; faible tenue aux carburants et vapeur d'eau.\n• Styrène-butadiène (SBR) : très bonne tenue à l'abrasion, déformation, compression, résilience, flexion ; bonne tenue au froid, eau, bases et acides dilués.\n• Butyl (IIR) : comportement mécanique assez faible ; très bonne tenue à l'eau, vapeur et agents atmosphériques ; bonne tenue aux solutions aqueuses ; faible tenue aux huiles minérales et hydrocarbures ; très bonne imperméabilité aux gaz.\n• Silicone (VMQ) : excellentes propriétés mécaniques ; très bonne tenue à la chaleur, agents atmosphériques, eau jusqu'à +100 °C, froid ; tenue modérée aux huiles minérales ; faible tenue aux carburants ; perméabilité élevée.\n• Silicone fluoré (FVMQ) : comportement mécanique modéré ; très bonne tenue au froid, huiles minérales et hydrocarbures, agents atmosphériques, chaleur.\n• Fluorocarbone FKM (FPM) : comportement mécanique assez bon ; très bonne tenue à la chaleur, acides, huiles, gaz, agents atmosphériques, carburants, solvants aromatiques et aliphatiques ; faible tenue aux bases et liquides de frein ; tenue au froid limitée ; bonne imperméabilité.\n• Perfluorés (FFKM) : très bonnes propriétés mécaniques ; excellente tenue chimique comparable au PTFE ; excellente tenue à la température.\n• Polytétrafluoroéthylène (PTFE) : excellente tenue chimique ; tous fluides agressifs, cryogénie (-200 °C), vide, gaz ; faible coefficient de frottement (dynamique) ; faible élasticité.\n\nIl existe également des joints toriques en métal.",
      bodyEn:
        "Polymer O-rings are circular-section (torus) rings in rubber or other plastics, housed in a groove sized for the selected seal. Sealing comes from the combination of seal and housing.\n\nThey are compact and light, fit in tight grooves, need little tightening torque and seal across a wide range of pressures, temperatures and tolerances. They are made by moulding, machining or from hot-vulcanised extruded cord (VulcOring).\n\nExtrusion-vulcanisation allows very large sizes (no size limit), frame seals, shaped seals, etc., and also hollow-section seals including very thin walls for very low bolt loads.\n\nComposition — wide elastomer range:\n• Ethylene-propylene (EPDM): good mechanical properties; excellent water, steam and aqueous solutions; good strong bases, ketones and dilute acids; excellent ozone, weather, heat and cold; poor mineral oils and hydrocarbons.\n• Nitrile (NBR): good mechanical properties; excellent oils, petroleum products, aliphatic solvents; good water to +70 °C, strong bases and gases; poor atmospheric agents, acids, brake fluids.\n• Carboxylated nitrile (XNBR): NBR-like with better wear in dynamic sealing.\n• Hydrogenated nitrile (HNBR): very good mechanical behaviour; excellent oils, atmospheric agents, water, steam, dilute bases; poor fuels and brake fluids.\n• Polychloroprene (CR): good mechanical behaviour; good mineral greases and atmospheric agents; moderate mineral oils, water to +70 °C, brake fluids; poor fuels and steam.\n• Styrene-butadiene (SBR): very good abrasion, deformation, compression, resilience, flex; good cold, water, dilute bases and acids.\n• Butyl (IIR): fairly low mechanical behaviour; excellent water, steam and atmospheric agents; good aqueous solutions; poor mineral oils and hydrocarbons; excellent gas impermeability.\n• Silicone (VMQ): excellent mechanical properties; excellent heat, atmospheric agents, water to +100 °C, cold; moderate mineral oils; poor fuels; high permeability.\n• Fluorosilicone (FVMQ): moderate mechanical behaviour; excellent cold, mineral oils and hydrocarbons, atmospheric agents, heat.\n• Fluorocarbon FKM (FPM): fairly good mechanical behaviour; excellent heat, acids, oils, gases, atmospheric agents, fuels, aromatic and aliphatic solvents; poor bases and brake fluids; limited cold; good impermeability.\n• Perfluoroelastomers (FFKM): very good mechanical properties; chemical resistance comparable to PTFE; excellent temperature resistance.\n• Polytetrafluoroethylene (PTFE): excellent chemical resistance; aggressive fluids, cryogenics (-200 °C), vacuum, gases; low friction (dynamic); low elasticity.\n\nMetallic O-rings are also available.",
      applicationsFr: [
        "Applications statiques et dynamiques",
        "Pistons, tiges, racleurs, guidages",
        "Contact alimentaire (selon grade)",
      ],
      applicationsEn: [
        "Static and dynamic applications",
        "Pistons, rods, scrapers, guides",
        "Food contact (grade dependent)",
      ],
      specsFr: [
        "Taille du joint : Ø 1 mm à Ø 12 mm",
        "Dimension de gorge (section ronde) : Ø 1,78 mm à Ø 8 mm",
        "Cône de mesure disponible (normes anglo-américaines) : DI 7,65 à 142,24 mm ; tore 1,78 à 6,99 mm",
      ],
      specsEn: [
        "Seal size: Ø 1 mm to Ø 12 mm",
        "Groove size (round section): Ø 1.78 mm to Ø 8 mm",
        "Measuring cone available (US standards): ID 7.65 to 142.24 mm; cord 1.78 to 6.99 mm",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn(
      "Élastomères / PTFE (selon grade)",
      "Elastomers / PTFE (grade dependent)",
    ),
    standards: ["en10204"],
    sectorTags: ["industry", "food", "water"],
    technicalSpecs: {
      fluids: ["eau", "huiles", "vapeur", "alimentaire"],
      documentCount: 1,
    },
  }),
  base({
    reference: "BAE",
    slug: "bague-anti-extrusion",
    name: frEn("Bague anti-extrusion", "Anti-extrusion ring"),
    description: buildDescription({
      bodyFr:
        "La bague anti-extrusion est conçue pour prévenir l'extrusion des joints, en particulier des joints toriques, dans leur logement.\n\nCependant, la bague anti-extrusion n'est pas la seule solution pour prévenir l'extrusion. Si la pression n'excède pas 50 bar, il est possible d'utiliser un élastomère de dureté supérieure, par exemple en choisissant une dureté de 90 Shore à la place de 70 Shore.\n\nTypes de bagues anti-extrusion :\n• Plate : avantage économique grâce à sa forme simple ; peut être fendue ou non fendue (30°, 45°)\n• Concave : se maintient très bien dans son logement car elle épouse la forme du joint ; peut s'installer avec un joint quadrilobe ; fendue ou non fendue (30°, 45°)\n• Spiralée : avantage au montage — appliquer une pression sur l'extérieur pour réduire le diamètre, puis relâcher pour qu'elle s'adapte au logement",
      bodyEn:
        "The anti-extrusion ring is designed to prevent extrusion of seals, especially O-rings, from their housing.\n\nIt is not the only solution: if pressure does not exceed 50 bar, a harder elastomer can be used, e.g. 90 Shore instead of 70 Shore.\n\nAnti-extrusion ring types:\n• Flat: economical simple shape; split or unsplit (30°, 45°)\n• Concave: seats well in the housing as it matches the seal shape; can be used with a quad-lobe seal; split or unsplit (30°, 45°)\n• Spiral: easy installation — press the outside to reduce diameter, then release to fit the housing",
      applicationsFr: [
        "Prévention de l'extrusion des joints toriques",
        "Assemblages sous pression",
      ],
      applicationsEn: [
        "Prevention of O-ring extrusion",
        "Pressurized assemblies",
      ],
      specsFr: [
        "Dimension de gorge recommandée : Ø 1 mm à Ø 17 mm",
        "Matière : NBR, POM, PTFE, PU",
        "Température min : -90 °C",
        "Température max : +300 °C",
      ],
      specsEn: [
        "Recommended groove size: Ø 1 mm to Ø 17 mm",
        "Material: NBR, POM, PTFE, PU",
        "Min temperature: -90 °C",
        "Max temperature: +300 °C",
      ],
    }),
    dn: null,
    pn: null,
    material: frEn("NBR / POM / PTFE / PU", "NBR / POM / PTFE / PU"),
    standards: ["en10204"],
    sectorTags: ["industry"],
    technicalSpecs: {
      fluids: ["huiles", "eau"],
      documentCount: 1,
    },
  }),
];
