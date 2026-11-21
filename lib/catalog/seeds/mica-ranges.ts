import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "etancheite-statique";
const SUBFAMILY = "joints-mica";

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

/** Joints mica - sous-famille Mica. */
export const micaRanges: CatalogRangeSeed[] = [
  base({
    reference: "MILAM-PSS",
    slug: "klinger-milam-pss",
    name: frEn("KLINGER® Milam PSS", "KLINGER® Milam PSS"),
    description: buildDescription({
      bulletsFr: [
        "Composé de couches de Mica pur avec liant haute température, renforcé de tôles en inox à picots",
        "Destiné à la fabrication de joints d'étanchéité résistants à de très hautes températures",
        "Principalement utilisé dans les applications en contact avec des gaz chauds et secs",
        "Convient particulièrement sur les gaz SO2/SO3, sur les gaz nitreux, ainsi que sur les gaz chlorés jusqu'à +800/850 °C",
      ],
      bulletsEn: [
        "Layers of pure mica with high-temperature binder, reinforced with tanged stainless-steel sheets",
        "Designed for manufacturing gaskets resistant to very high temperatures",
        "Mainly used in applications in contact with hot, dry gases",
        "Especially suitable for SO2/SO3, nitrous gases and chlorinated gases up to +800/850 °C",
      ],
      bodyFr:
        "Le joint KLINGER® Milam PSS est composé de couches de mica pur avec liant haute température, renforcé de tôles en inox à picots. Il est destiné à la fabrication de joints d'étanchéité résistants à de très hautes températures. Il est principalement utilisé dans les applications en contact avec des gaz chauds et secs. Le KLINGER® Milam PSS convient particulièrement sur les gaz SO2/SO3, sur les gaz nitreux, ainsi que sur les gaz chlorés jusqu'à +800/850 °C.",
      bodyEn:
        "KLINGER® Milam PSS consists of layers of pure mica with a high-temperature binder, reinforced with tanged stainless-steel sheets. It is designed for manufacturing gaskets resistant to very high temperatures. It is mainly used with hot, dry gases. KLINGER® Milam PSS is especially suitable for SO2/SO3, nitrous gases and chlorinated gases up to +800/850 °C.",
      compositionFr:
        "Mica phlogopite et liant haute température, armé de tôle à picots Inox 316 L de 0,1 mm (ép. 3 mm = 2 inserts, autres épaisseurs = 1 insert).",
      compositionEn:
        "Phlogopite mica and high-temperature binder, reinforced with 0.1 mm 316L stainless tanged sheet (3 mm thickness = 2 inserts; other thicknesses = 1 insert).",
      applicationsFr: ["Gaz et fumées acides", "Gaz chauds et secs"],
      applicationsEn: ["Acid gases and fumes", "Hot, dry gases"],
      specsFr: [
        "Épaisseur : 1,5 mm",
        "Largeur : 1000 mm",
        "Longueur : 1200 mm",
        "Matière : Mica",
        "Température max : +900 °C",
        "Pression : 6 bar",
        "Compressibilité : 15 %",
        noteFr,
      ],
      specsEn: [
        "Thickness: 1.5 mm",
        "Width: 1000 mm",
        "Length: 1200 mm",
        "Material: Mica",
        "Max temperature: +900 °C",
        "Pressure: 6 bar",
        "Compressibility: 15%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "6 bar",
    material: frEn(
      "Mica phlogopite / Inox 316L à picots",
      "Phlogopite mica / tanged 316L stainless",
    ),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "6 bar",
      fluids: ["gaz chauds", "SO2", "SO3", "gaz nitreux", "gaz chlorés"],
      documentCount: 1,
    },
  }),
  base({
    reference: "MILAM-HL",
    slug: "klinger-milam-hl",
    name: frEn("KLINGER® Milam HL", "KLINGER® Milam HL"),
    description: buildDescription({
      bulletsFr: [
        "Composé de couches de Mica pur et liant haute température",
        "Destiné à la fabrication de joints d'étanchéité résistants à de très hautes températures",
        "Principalement utilisé dans les applications en contact avec des gaz chauds et secs",
      ],
      bulletsEn: [
        "Layers of pure mica and high-temperature binder",
        "Designed for manufacturing gaskets resistant to very high temperatures",
        "Mainly used in applications in contact with hot, dry gases",
      ],
      bodyFr:
        "Le joint KLINGER® Milam HL est composé de couches de mica pur et liant haute température. Il est destiné à la fabrication de joints d'étanchéité résistants à de très hautes températures. Il est principalement utilisé dans les applications en contact avec des gaz chauds et secs.",
      bodyEn:
        "KLINGER® Milam HL consists of layers of pure mica and a high-temperature binder. It is designed for manufacturing gaskets resistant to very high temperatures. It is mainly used with hot, dry gases.",
      compositionFr: "Mica phlogopite et liant haute température.",
      compositionEn: "Phlogopite mica and high-temperature binder.",
      applicationsFr: ["Gaz chauds et secs"],
      applicationsEn: ["Hot, dry gases"],
      specsFr: [
        "Épaisseur : 1 mm",
        "Largeur : 1000 mm",
        "Longueur : 12000 mm",
        "Matière : Mica",
        "Température max : +1000 °C",
        "Pression : 5 bar",
        "Compressibilité : 20 %",
        noteFr,
      ],
      specsEn: [
        "Thickness: 1 mm",
        "Width: 1000 mm",
        "Length: 12000 mm",
        "Material: Mica",
        "Max temperature: +1000 °C",
        "Pressure: 5 bar",
        "Compressibility: 20%",
        noteEn,
      ],
    }),
    dn: null,
    pn: "5 bar",
    material: frEn("Mica phlogopite", "Phlogopite mica"),
    standards: ["en10204"],
    sectorTags: ["energy", "industry"],
    technicalSpecs: {
      pressureClass: "5 bar",
      fluids: ["gaz chauds"],
      documentCount: 1,
    },
  }),
];
