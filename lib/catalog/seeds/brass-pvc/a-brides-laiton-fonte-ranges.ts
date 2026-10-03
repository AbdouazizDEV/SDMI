import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-a-brides-laiton-fonte";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const flangedBrassCastBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "500",
    slug: "serie-500-vanne-a-sphere-fonte-gs-nf29323-avec-platine-iso-5211",
    name: frEn("500 - Vanne à sphère fonte GS NF29323 avec platine ISO 5211", "500 - Ball valve cast iron GS NF29323 avec platine ISO 5211"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Fonte", "Cast iron"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "504",
    slug: "serie-504-vanne-a-sphere-laiton-titre-cw617n-a-brides-pn10-16",
    name: frEn("504 - Vanne à sphère laiton titré CW617N à brides PN10/16", "504 - Ball valve brass titré CW617N à brides PN10/16"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "505",
    slug: "serie-505-vanne-a-sphere-fonte-nf29323-avec-platine-iso-5211",
    name: frEn("505 - Vanne à sphère fonte NF29323 avec platine ISO 5211", "505 - Ball valve cast iron NF29323 avec platine ISO 5211"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Fonte", "Cast iron"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "507",
    slug: "serie-507-vanne-a-sphere-fonte-avec-platine-iso-5211-din-3202-atex",
    name: frEn("507 - Vanne à sphère fonte avec platine ISO 5211 DIN 3202 ATEX", "507 - Ball valve cast iron avec platine ISO 5211 DIN 3202 ATEX"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Fonte", "Cast iron"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
