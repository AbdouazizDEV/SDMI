import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-3-voies";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Robinets 3 voies — L / T, acier et inox, Adler, haute pression. */
export const threeWayBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "721",
    slug: "serie-721-robinet-a-tournant-spherique-3-voies-haute-pression-taraude-en-l",
    name: frEn("721 - Robinet à tournant sphérique 3 voies Haute Pression taraudé en L", "721 - Three-way ball valve three-way Haute Pression taraudé en L"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Acier / inox", "Steel / stainless"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "722",
    slug: "serie-722-vanne-a-sphere-acier-3-voies-l-adler-pn16",
    name: frEn("722 - Vanne à sphère acier 3 voies L ADLER PN16", "722 - Three-way ball valve steel three-way L ADLER PN16"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "723",
    slug: "serie-723-vanne-a-sphere-inox-3-voies-l-t-adler-pn16",
    name: frEn("723 - Vanne à sphère inox 3 voies L/T ADLER PN16", "723 - Three-way ball valve stainless three-way L/T ADLER PN16"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "780",
    slug: "serie-780-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-l",
    name: frEn("780 - Robinet à tournant sphérique 3 voies taraudé lumière en L", "780 - Three-way ball valve three-way taraudé lumière en L"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier / inox", "Steel / stainless"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "781",
    slug: "serie-781-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-t-bsp",
    name: frEn("781 - Robinet à tournant sphérique 3 voies taraudé lumière en T BSP", "781 - Three-way ball valve three-way taraudé lumière en T BSP"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier / inox", "Steel / stainless"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "783",
    slug: "serie-783-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-l",
    name: frEn("783 - Robinet à tournant sphérique 3 voies acier lumière en L", "783 - Three-way ball valve three-way steel lumière en L"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "784",
    slug: "serie-784-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-t",
    name: frEn("784 - Robinet à tournant sphérique 3 voies acier lumière en T", "784 - Three-way ball valve three-way steel lumière en T"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier", "Steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "785",
    slug: "serie-785-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-l",
    name: frEn("785 - Robinet à tournant sphérique 3 voies inox lumière en L", "785 - Three-way ball valve three-way stainless lumière en L"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "786",
    slug: "serie-786-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-t",
    name: frEn("786 - Robinet à tournant sphérique 3 voies inox lumière en T", "786 - Three-way ball valve three-way stainless lumière en T"),
    description: frEn(
      "Robinet 3 voies — configuration L ou T, gamme catalogue.",
      "Three-way ball valve — L or T port, catalog range.",
    ),
    dn: null, pn: "PN16", material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "energy", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
