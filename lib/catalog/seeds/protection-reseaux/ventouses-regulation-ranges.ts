import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "protection-regulation-des-reseaux";
const SUB = "ventouses-et-regulation";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const ventousesRegulationRanges: CatalogRangeSeed[] = [
  base({
    reference: "3110",
    slug: "serie-3110-ventouse-csa-simple-fonction-reseau-d-eau-potable",
    name: frEn("3110 - Ventouse CSA simple fonction réseau d'eau potable", "3110 - Air valve CSA simple fonction réseau d'eau potable"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3130",
    slug: "serie-3130-ventouse-automatique-3-fonctions-composite-immergeable-avec-ou-sans-vanne",
    name: frEn("3130 - Ventouse automatique 3 fonctions composite immergeable avec ou sans vanne", "3130 - Air valve automatique 3 fonctions composite immergeable avec ou sans vanne"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Composite / plastique", "Composite / plastic"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3130",
    slug: "serie-3130-ventouse-csa-triple-fonction-reseau-d-eau-potable-plastique",
    name: frEn("3130 - Ventouse CSA triple fonction réseau d'eau potable plastique", "3130 - Air valve CSA triple fonction réseau d'eau potable plastique"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Composite / plastique", "Composite / plastic"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3131",
    slug: "serie-3131-ventouse-csa-triple-fonction-fonte-fox-rfp-eau-potable-anti-belier",
    name: frEn("3131 - Ventouse CSA Triple fonction Fonte FOX RFP Eau Potable Anti-Bélier", "3131 - Air valve CSA Triple fonction cast iron FOX RFP Eau Potable Anti-Bélier"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte", "Cast iron"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3132",
    slug: "serie-3132-ventouse-csa-triple-fonction-reseau-d-eau-potable-passage-reduit",
    name: frEn("3132 - Ventouse CSA triple fonction réseau d'eau potable passage réduit", "3132 - Air valve CSA triple fonction réseau d'eau potable passage réduit"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3160",
    slug: "serie-3160-ventouse-csa-quadruple-fonction-reseau-d-eau-usee-4f",
    name: frEn("3160 - Ventouse CSA quadruple fonction réseau d'eau usée 4F", "3160 - Air valve CSA quadruple fonction réseau d'eau usée 4F"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "3165",
    slug: "serie-3165-ventouse-csa-quadruple-fonction-reseau-d-eau-usee-a-bride-pn10-16-ou-pn25",
    name: frEn("3165 - Ventouse CSA quadruple fonction réseau d'eau usée à bride PN10/16 ou PN25", "3165 - Air valve CSA quadruple fonction réseau d'eau usée à bride PN10/16 ou PN25"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Laiton", "Brass"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "3180",
    slug: "serie-3180-soupape-antibelier-vrca-decharge-verticale-a-bride-pn10-16-ou-pn25",
    name: frEn("3180-Soupape Antibélier VRCA décharge verticale à bride PN10/16 ou PN25", "3180-Soupape Antibélier VRCA décharge verticale à bride PN10/16 ou PN25"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Laiton", "Brass"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "3185",
    slug: "serie-3185-soupape-antibelier-gemina-a-sortie-canalisee-a-bride-pn10-16-ou-pn25",
    name: frEn("3185-Soupape Antibélier Gemina à sortie canalisée à bride PN10/16 ou PN25", "3185-Soupape Antibélier Gemina à sortie canalisée à bride PN10/16 ou PN25"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN25", material: frEn("Laiton", "Brass"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "495",
    slug: "serie-495-stabilisateur-reducteur-de-pression-aval",
    name: frEn("495 - Stabilisateur réducteur de pression aval", "495 - Stabilisateur réducteur de pression aval"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "496",
    slug: "serie-496-vanne-de-regulation-csa-a-membrane-maintien-de-pression-amont",
    name: frEn("496 - Vanne de régulation CSA à membrane maintien de pression amont", "496 - Vanne de régulation CSA à membrane maintien de pression amont"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "497",
    slug: "serie-497-vanne-de-regulation-pression-aval-xlc410-xlc410-pn16",
    name: frEn("497 - Vanne de régulation pression aval XLC410 / XLC410 PN16", "497 - Vanne de régulation pression aval XLC410 / XLC410 PN16"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN16", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "497alt",
    slug: "serie-497alt-vanne-de-regulation-altimetrique-passage-integral-ou-reduit-pn10-16",
    name: frEn("497ALT - Vanne de régulation altimétrique passage intégral ou réduit PN10/16", "497ALT - Vanne de régulation altimétrique passage intégral ou réduit PN10/16"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "497deb",
    slug: "serie-497deb-vanne-regulation-de-debit-passage-integral-ou-reduit-xlc430-330-pn10-16",
    name: frEn("497DEB - Vanne régulation de débit passage intégral ou réduit XLC430/330 PN10/16", "497DEB - Vanne régulation de débit passage intégral ou réduit XLC430/330 PN10/16"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "497dec",
    slug: "serie-497dec-vanne-regulation-decharge-de-pression-passage-integral-ou-reduit-xlc",
    name: frEn("497DEC - Vanne régulation décharge de pression passage intégral ou réduit XLC", "497DEC - Vanne régulation décharge de pression passage intégral ou réduit XLC"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "498",
    slug: "serie-498-vanne-de-maintien-pression-amont-csa-xlc420s-xlc320s",
    name: frEn("498 - Vanne de maintien pression amont CSA XLC420S / XLC320S", "498 - Vanne de maintien pression amont CSA XLC420S / XLC320S"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "499",
    slug: "serie-499-vanne-de-reduction-aval-maintien-amont-xlc412-xlc312",
    name: frEn("499 - Vanne de réduction aval maintien amont XLC412 / XLC312", "499 - Vanne de réduction aval maintien amont XLC412 / XLC312"),
    description: frEn(
      "Gamme protection et régulation des réseaux - catalogue SDMI.",
      "Network protection & regulation range - SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
