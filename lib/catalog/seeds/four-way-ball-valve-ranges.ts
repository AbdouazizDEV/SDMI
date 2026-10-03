import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-4-voies";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Robinets 4 voies X/T — Adler PN16 */
export const fourWayBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "726",
    slug: "serie-726-vanne-a-sphere-acier-4-voies-x-t-adler-pn16",
    name: frEn("726 - Vanne à sphère acier 4 voies X/T ADLER PN16", "726 - Four-way ball valve steel four-way X/T ADLER PN16"),
    description: frEn("Robinet 4 voies X/T — gamme Adler.", "Four-way X/T ball valve — Adler range."),
    dn: null, pn: "PN16", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "727",
    slug: "serie-727-vanne-a-sphere-inox-4-voies-x-t-adler-pn16",
    name: frEn("727 - Vanne à sphère inox 4 voies X/T ADLER PN16", "727 - Four-way ball valve stainless four-way X/T ADLER PN16"),
    description: frEn("Robinet 4 voies X/T — gamme Adler.", "Four-way X/T ball valve — Adler range."),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
