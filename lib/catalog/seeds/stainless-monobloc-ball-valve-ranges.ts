import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-monobloc-inox";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function slug(ref: string, suffix: string) {
  return `serie-${ref.toLowerCase()}-robinet-sphere-monobloc-${suffix}`;
}

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Monobloc inox — BSP, passage réduit ou mini PN63. */
export const stainlessMonoblocBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "708",
    slug: slug("708", "inox-ff-bsp"),
    name: frEn(
      "Robinet à tournant sphérique monobloc inox — femelle/femelle BSP",
      "Stainless monobloc ball valve — BSP F/F",
    ),
    description: frEn(
      "Passage réduit, axe inéjectable, PTFE — chimie, pharma, air comprimé.",
      "Reduced bore, injectable stem, PTFE — chemical, pharma, compressed air.",
    ),
    dn: null,
    pn: "PN40",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: {
      pressureClass: "PN40",
      connection: "bsp",
      bore: "standard",
      documentCount: 4,
    },
  }),
  base({
    reference: "708MF",
    slug: slug("708MF", "inox-mf-bsp"),
    name: frEn(
      "Robinet à tournant sphérique monobloc inox — mâle/femelle BSP",
      "Stainless monobloc ball valve — BSP M/F",
    ),
    description: frEn(
      "Bille pleine, passage réduit, sièges PTFE pour fluides compatibles.",
      "Full ball, reduced bore, PTFE seats for compatible fluids.",
    ),
    dn: null,
    pn: "PN40",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: {
      pressureClass: "PN40",
      connection: "bsp",
      documentCount: 4,
    },
  }),
  base({
    reference: "732FF",
    slug: slug("732FF", "mini-inox-ff-bsp-pn63"),
    name: frEn(
      "Mini vanne à sphère inox monobloc — femelle/femelle BSP PN63",
      "Mini stainless monobloc ball valve — BSP F/F PN63",
    ),
    description: frEn("Format compact, haute pression PN63, réseaux taraudés.", "Compact pattern, PN63, threaded lines."),
    dn: null,
    pn: "PN63",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: { pressureClass: "PN63", connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "732MF",
    slug: slug("732MF", "mini-inox-mf-bsp-pn63"),
    name: frEn(
      "Mini vanne à sphère inox monobloc — mâle/femelle BSP PN63",
      "Mini stainless monobloc ball valve — BSP M/F PN63",
    ),
    description: frEn("Gamme mini monobloc, même plage PN63.", "Mini monobloc range, same PN63 rating."),
    dn: null,
    pn: "PN63",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: { pressureClass: "PN63", connection: "bsp", documentCount: 4 },
  }),
  base({
    reference: "732MM",
    slug: slug("732MM", "mini-inox-mm-bsp-pn63"),
    name: frEn(
      "Mini vanne à sphère inox monobloc — mâle/mâle BSP PN63",
      "Mini stainless monobloc ball valve — BSP M/M PN63",
    ),
    description: frEn("Raccordement mâle/mâle, encombrement minimal.", "M/M ends, minimal footprint."),
    dn: null,
    pn: "PN63",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: { pressureClass: "PN63", connection: "bsp", documentCount: 4 },
  }),
];
