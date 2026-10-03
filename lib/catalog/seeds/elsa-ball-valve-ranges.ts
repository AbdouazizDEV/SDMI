import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-3-pieces-brides-elsa";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** ELSA® — 3 pièces à brides tournantes (Orbital, BSP, BW, RF, DBB, etc.). */
export const elsaBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "ELBTO2",
    slug: "serie-elbto2-corps-seul-degraisse-oxygene-pour-vanne-a-sphere-elsa",
    name: frEn("ELBTO2 - Corps seul dégraissé oxygène pour vanne à sphère ELSA", "ELBTO2 - Corps seul dégraissé oxygène pour vanne à sphère ELSA"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELBTO2BSP",
    slug: "serie-elbto2bsp-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene",
    name: frEn("ELBTO2BSP-Robinet à tournant sphérique brides tournantes ELSA dégraissé oxygène", "ELBTO2BSP-ELSA® ball valve rotating flanges ELSA dégraissé oxygène"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "ELBTO2BW",
    slug: "serie-elbto2bw-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene",
    name: frEn("ELBTO2BW-Robinet à tournant sphérique brides tournantes ELSA dégraissé oxygène", "ELBTO2BW-ELSA® ball valve rotating flanges ELSA dégraissé oxygène"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELBTOBPE",
    slug: "serie-elbtobpe-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-bpe",
    name: frEn("ELBTOBPE - Robinet à tournant sphérique brides tournantes Elsa orbital BPE", "ELBTOBPE - ELSA® ball valve rotating flanges Elsa orbital BPE"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELBTODIN",
    slug: "serie-elbtodin-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-din",
    name: frEn("ELBTODIN - Robinet à tournant sphérique brides tournantes Elsa orbital DIN", "ELBTODIN - ELSA® ball valve rotating flanges Elsa orbital DIN"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELBTOISO",
    slug: "serie-elbtoiso-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital",
    name: frEn("ELBTOISO - Robinet à tournant sphérique brides tournantes Elsa orbital", "ELBTOISO - ELSA® ball valve rotating flanges Elsa orbital"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELCF",
    slug: "serie-elcf-coquilles-de-remplissage-tfm1600-elsa",
    name: frEn("ELCF - Coquilles de remplissage TFM1600 - ELSA", "ELCF - Coquilles de remplissage TFM1600 - ELSA"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELIT",
    slug: "serie-elit-robinet-a-tournant-spherique-elsa-corps-seul-inox-1-4409",
    name: frEn("ELIT - Robinet à tournant sphérique Elsa corps seul inox 1.4409", "ELIT - ELSA® ball valve Elsa corps seul stainless 1.4409"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELITBSP",
    slug: "serie-elitbsp-robinet-a-tournant-spherique-brides-tournantes-elsa-bsp-inox-1-4409",
    name: frEn("ELITBSP - Robinet à tournant sphérique brides tournantes Elsa BSP inox 1.4409", "ELITBSP - ELSA® ball valve rotating flanges Elsa BSP stainless 1.4409"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "ELITBW",
    slug: "serie-elitbw-robinet-a-tournant-spherique-brides-tournantes-elsa-bw-inox-bw-inox",
    name: frEn("ELITBW - Robinet à tournant sphérique brides tournantes Elsa BW inox BW inox", "ELITBW - ELSA® ball valve rotating flanges Elsa BW stainless BW stainless"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELITBWDBB",
    slug: "serie-elitbwdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-bw-dn15",
    name: frEn("ELITBWDBB - Robinet à tournant sphérique Elsa Double Block and Bleed BW DN15", "ELITBWDBB - ELSA® ball valve Elsa Double Block and Bleed BW DN15"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELITBWFC",
    slug: "serie-elitbwfc-robinet-a-tournant-spherique-inox-fond-de-cuve-elsa-bw",
    name: frEn("ELITBWFC - Robinet à tournant sphérique inox Fond de Cuve Elsa BW", "ELITBWFC - ELSA® ball valve stainless Fond de Cuve Elsa BW"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELITBWR",
    slug: "serie-elitbwr-robinet-a-tournant-spherique-3pieces-brides-tournantes-passage-reduit",
    name: frEn("ELITBWR - Robinet à tournant sphérique 3pièces brides tournantes passage réduit", "ELITBWR - ELSA® ball valve 3pièces rotating flanges passage réduit"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELITOSMS",
    slug: "serie-elitosms-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-sms",
    name: frEn("ELITOSMS - Robinet à tournant sphérique brides tournantes Elsa orbital SMS", "ELITOSMS - ELSA® ball valve rotating flanges Elsa orbital SMS"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELITRF",
    slug: "serie-elitrf-robinet-a-tournant-spherique-brides-tournantes-elsa-pn40-inox",
    name: frEn("ELITRF - Robinet à tournant sphérique brides tournantes Elsa PN40 inox", "ELITRF - ELSA® ball valve rotating flanges Elsa PN40 stainless"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELITRFDBB",
    slug: "serie-elitrfdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-dn15-pn40",
    name: frEn("ELITRFDBB - Robinet à tournant sphérique Elsa Double Block and Bleed DN15 PN40", "ELITRFDBB - ELSA® ball valve Elsa Double Block and Bleed DN15 PN40"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELITSW",
    slug: "serie-elitsw-robinet-a-tournant-spherique-brides-tournantes-elsa-sw-inox-1-4409-dn15",
    name: frEn("ELITSW - Robinet à tournant sphérique brides tournantes Elsa SW inox 1.4409 DN15", "ELITSW - ELSA® ball valve rotating flanges Elsa SW stainless 1.4409 DN15"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELIU",
    slug: "serie-eliu-corps-seul-vanne-elsa-sieges-uhmwpe",
    name: frEn("ELIU - Corps seul vanne ELSA sièges UHMWPE", "ELIU - Corps seul vanne ELSA sièges UHMWPE"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox / sièges UHMWPE", "Stainless / UHMWPE seats"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELIUBSP",
    slug: "serie-eliubsp-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe",
    name: frEn("ELIUBSP - Robinet à tournant sphérique brides tournantes Elsa sièges UHMWPE", "ELIUBSP - ELSA® ball valve rotating flanges Elsa sièges UHMWPE"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox / sièges UHMWPE", "Stainless / UHMWPE seats"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "ELIUBW",
    slug: "serie-eliubw-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe",
    name: frEn("ELIUBW - Robinet à tournant sphérique brides tournantes Elsa sièges UHMWPE", "ELIUBW - ELSA® ball valve rotating flanges Elsa sièges UHMWPE"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox / sièges UHMWPE", "Stainless / UHMWPE seats"),
    connectionType: "welded", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "welded", documentCount: 4 },
  }),
  base({
    reference: "ELIV",
    slug: "serie-eliv-sphere-v-port-60degres-elsa",
    name: frEn("ELIV - Sphère V Port 60° - ELSA", "ELIV - Sphère V Port 60° - ELSA"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELPR",
    slug: "serie-elpr-poignee-cadenassable-gachette-a-ressort-elsa",
    name: frEn("ELPR - Poignée cadenassable gachette à ressort ELSA", "ELPR - Poignée cadenassable gachette à ressort ELSA"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELRISO",
    slug: "serie-elriso-rehausse-inox-avec-platine-iso-et-visserie",
    name: frEn("ELRISO - Rehausse Inox avec platine ISO et visserie", "ELRISO - Rehausse stainless avec platine ISO et visserie"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "ELVO",
    slug: "serie-elvo-volant-ovale-inox-avec-systeme-de-cadenassage",
    name: frEn("ELVO - Volant ovale inox avec système de cadenassage", "ELVO - Volant ovale stainless avec système de cadenassage"),
    description: frEn(
      "Gamme ELSA® à brides tournantes — robinet 3 pièces.",
      "ELSA® rotating flange range — three-piece ball valve.",
    ),
    dn: null, pn: "PN16-40", material: frEn("Inox 1.4409", "Stainless 1.4409"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["pharma", "food", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
