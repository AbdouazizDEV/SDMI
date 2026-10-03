import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-wafer-brides-etroit";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Wafer entre brides étroit — 720, 770-777 */
export const waferBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "720",
    slug: "serie-720-robinet-a-tournant-spherique-2-pieces-etroit-acier-pn40-adler",
    name: frEn("720 - Robinet à tournant sphérique 2 pièces étroit acier PN40 ADLER", "720 - wafer ball valve 2 pièces narrow steel PN40 ADLER"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "PN40", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "770",
    slug: "serie-770-robinet-a-tournant-spherique-2-pieces-etroit-inox-pn16-40-adler",
    name: frEn("770 - Robinet à tournant sphérique 2 pièces étroit inox PN16/40 ADLER", "770 - wafer ball valve 2 pièces narrow stainless PN16/40 ADLER"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "PN16-40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "771",
    slug: "serie-771-robinet-a-tournant-spherique-modele-etroit-a-brides-inox-pn16",
    name: frEn("771 - Robinet à tournant sphérique modèle étroit à brides inox PN16", "771 - wafer ball valve modèle narrow flanged stainless PN16"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "772",
    slug: "serie-772-robinet-a-tournant-spherique-etroit-acier-a-brides-class150",
    name: frEn("772 - Robinet à tournant sphérique étroit acier à brides class150", "772 - wafer ball valve narrow steel flanged class150"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "Class 150", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "773",
    slug: "serie-773-robinet-a-tournant-spherique-2-pieces-a-brides-inox-wafer",
    name: frEn("773 - Robinet à tournant sphérique 2 pièces à brides inox Wafer", "773 - wafer ball valve 2 pièces flanged stainless wafer"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "774",
    slug: "serie-774-robinet-a-tournant-spherique-etroit-acier-a-brides-class300",
    name: frEn("774 - Robinet à tournant sphérique étroit acier à brides class300", "774 - wafer ball valve narrow steel flanged class300"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "Class 300", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "775",
    slug: "serie-775-robinet-a-tournant-spherique-etroit-inox-entre-brides-class300",
    name: frEn("775 - Robinet à tournant sphérique étroit inox entre brides class300", "775 - wafer ball valve narrow stainless wafer class300"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "Class 300", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "776",
    slug: "serie-776-robinet-a-tournant-spherique-2-pieces-etroit-acier-a-brides-class600",
    name: frEn("776 - Robinet à tournant sphérique 2 pièces étroit acier à brides class600", "776 - wafer ball valve 2 pièces narrow steel flanged class600"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "Class 600", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "777",
    slug: "serie-777-robinet-a-tournant-spherique-2-pieces-etroit-inox-a-brides-class600",
    name: frEn("777 - Robinet à tournant sphérique 2 pièces étroit inox à brides class600", "777 - wafer ball valve 2 pièces narrow stainless flanged class600"),
    description: frEn("Robinet wafer entre brides étroit — gamme Adler / Performance.", "Narrow wafer ball valve — Adler range."),
    dn: null, pn: "Class 600", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
