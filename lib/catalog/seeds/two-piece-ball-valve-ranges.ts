import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-2-pieces";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function slug(ref: string, suffix: string) {
  return `serie-${ref.toLowerCase()}-robinet-sphere-2-pieces-${suffix}`;
}

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Robinets 2 pièces — acier / inox, BSP, NPT, BW, ACS. */
export const twoPieceBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "7155",
    slug: slug("7155", "initiale-acs-ff-bsp"),
    name: frEn(
      "Robinet à tournant sphérique 2 pièces Initiale ACS — F/F BSP",
      "Two-piece Initiale ACS ball valve — BSP F/F",
    ),
    description: frEn("Gamme Initiale eau potable ACS, passage intégral.", "Initiale range, ACS potable water, full bore."),
    dn: null, pn: "PN40", material: frEn("Laiton / inox", "Brass / stainless"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN40", connection: "bsp", bore: "full", documentCount: 4 },
  }),
  base({
    reference: "7151",
    slug: slug("7151", "initiale-ff-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces Initiale — F/F BSP", "Two-piece Initiale ball valve — BSP F/F"),
    description: frEn("Initiale sans ACS, réseaux taraudés.", "Initiale without ACS, threaded networks."),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "715",
    slug: slug("715", "inox-ff-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox — F/F BSP", "Two-piece stainless ball valve — BSP F/F"),
    description: frEn("Corps inox, fluides compatibles PTFE.", "Stainless body, PTFE-compatible fluids."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "agro"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "7152",
    slug: slug("7152", "ff-bsp-decompression"),
    name: frEn("Robinet à tournant sphérique 2 pièces — F/F BSP à décompression", "Two-piece ball valve — BSP F/F with bleed"),
    description: frEn("Version à décompression pour mise à pression.", "Bleed version for pressurization."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "705",
    slug: slug("705", "acier-ff-bsp-din-m3"),
    name: frEn("Robinet à tournant sphérique 2 pièces acier — F/F BSP DIN M3", "Two-piece steel ball valve — BSP F/F DIN M3"),
    description: frEn("Acier, face DIN M3, réseaux industriels.", "Steel, DIN M3 pattern, industrial lines."),
    dn: null, pn: "PN40", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "7065",
    slug: slug("7065", "inox-ff-bsp-acs-din-m3"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox ACS — F/F BSP DIN M3", "Two-piece stainless ACS — BSP F/F DIN M3"),
    description: frEn("ACS, inox, même gamme M3.", "ACS stainless, same M3 range."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "706",
    slug: slug("706", "inox-ff-bsp-din-3202-m3"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox — F/F BSP DIN 3202 M3", "Two-piece stainless — BSP F/F DIN 3202 M3"),
    description: frEn("DIN 3202 M3, passage standard.", "DIN 3202 M3, standard bore."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "agro"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "7062",
    slug: slug("7062", "inox-homme-mort-din-m3"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox homme mort — DIN M3", "Two-piece stainless — lockable DIN M3"),
    description: frEn("Cadenassage homme mort, sécurité process.", "Lockable handle, process safety."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "704",
    slug: slug("704", "inox-ff-npt-din3202-m3"),
    name: frEn("Robinet à tournant sphérique inox — F/F NPT DIN3202 M3", "Stainless ball valve — NPT F/F DIN3202 M3"),
    description: frEn("Raccordement NPT, export et process.", "NPT ends, export and process."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "npt", documentCount: 4 },
  }),
  base({
    reference: "714",
    slug: slug("714", "haute-temperature-ff-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces haute température — F/F BSP", "Two-piece high-temperature ball valve — BSP F/F"),
    description: frEn("Sièges adaptés fluides chauds.", "Seats for hot fluid service."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "7143",
    slug: slug("7143", "ff-bsp-degraisse-oxygene"),
    name: frEn("Robinet à tournant sphérique 2 pièces — F/F BSP dégraissé oxygène", "Two-piece ball valve — oxygen degreased BSP F/F"),
    description: frEn("Dégraissé pour oxygène et gaz médicaux.", "Degreased for oxygen and medical gases."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "733",
    slug: slug("733", "iso-acs"),
    name: frEn("Robinet à tournant sphérique 2 pièces ISO ACS", "Two-piece ISO ACS ball valve"),
    description: frEn("Gamme ISO eau potable.", "ISO potable water range."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "7895",
    slug: slug("7895", "inox-acs-mf-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox ACS — M/F BSP", "Two-piece stainless ACS — BSP M/F"),
    description: frEn("ACS, raccordement mâle/femelle.", "ACS, male/female ends."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "789",
    slug: slug("789", "mf-integral"),
    name: frEn("Robinet à tournant sphérique 2 pièces — M/F intégral", "Two-piece ball valve — M/F full bore"),
    description: frEn("Passage intégral, réseaux taraudés.", "Full bore, threaded lines."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", bore: "full", documentCount: 4 },
  }),
  base({
    reference: "7095",
    slug: slug("7095", "inox-acs-mm-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox ACS — M/M BSP", "Two-piece stainless ACS — BSP M/M"),
    description: frEn("Double mâle BSP, ACS.", "BSP M/M, ACS."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "709",
    slug: slug("709", "mm-bsp-passage-reduit"),
    name: frEn("Robinet à tournant sphérique 2 pièces — M/M BSP passage réduit", "Two-piece ball valve — BSP M/M reduced bore"),
    description: frEn("Passage réduit, encombrement linéaire.", "Reduced bore, inline compact."),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water"],
    technicalSpecs: { connection: "bsp", bore: "standard", documentCount: 4 },
  }),
  base({
    reference: "799",
    slug: slug("799", "acier-haute-pression"),
    name: frEn("Robinet à tournant sphérique acier haute pression", "High-pressure steel ball valve"),
    description: frEn("Acier, plage pression renforcée.", "Steel, reinforced pressure rating."),
    dn: null, pn: "PN63", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "PN63", documentCount: 4 },
  }),
  base({
    reference: "717",
    slug: slug("717", "acier-class800-ff-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces acier Class 800 — F/F BSP", "Two-piece steel Class 800 — BSP F/F"),
    description: frEn("Class 800, hydrocarbures et vapeur.", "Class 800, hydrocarbons and steam."),
    dn: null, pn: "Class 800", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "Class 800", connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "716",
    slug: slug("716", "inox-class800-ff-bsp"),
    name: frEn("Robinet à tournant sphérique 2 pièces inox Class 800 — F/F BSP", "Two-piece stainless Class 800 — BSP F/F"),
    description: frEn("Inox Class 800, milieux corrosifs sous pression.", "Stainless Class 800, corrosive pressurized service."),
    dn: null, pn: "Class 800", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { pressureClass: "Class 800", connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "718",
    slug: slug("718", "acier-bw-schedule80-l100"),
    name: frEn(
      "Robinet à tournant sphérique 2 pièces acier — embouts L100 mm Schedule 80 BW",
      "Two-piece steel ball valve — L100 mm Schedule 80 butt weld",
    ),
    description: frEn("Soudure bout à bout, lignes process soudées.", "Butt weld for welded process lines."),
    dn: null, pn: "PN40", material: frEn("Acier", "Steel"),
    connectionType: "bw", standards: ["en10204"], sectorTags: ["energy"],
    technicalSpecs: { connection: "bw", documentCount: 4 },
  }),
];
