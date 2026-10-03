import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-puisage-laiton-inox";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const puisageLaitonInoxRanges: CatalogRangeSeed[] = [
  base({
    reference: "1345",
    slug: "serie-1345-robinet-de-puisage-laiton-a-potence-pn10-avec-manette-papillon",
    name: frEn("1345 - Robinet de puisage laiton à potence PN10 avec manette papillon", "1345 - Valve de puisage brass à potence PN10 avec manette papillon"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "1346",
    slug: "serie-1346-robinet-de-puisage-laiton-a-potence-oblique-laiton-pn10-1-2pouces-3-4pouces",
    name: frEn("1346 - Robinet de puisage laiton à potence oblique laiton PN10 1/2&#039;&#039;-3/4&#039;&#039;", "1346 - Valve de puisage brass à potence oblique brass PN10 1/2&#039;&#039;-3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "680",
    slug: "serie-680-robinet-de-puisage-laiton-nickele-a-tete-cache-entree",
    name: frEn("680 - Robinet de puisage laiton nickelé à tête cache-entrée", "680 - Valve de puisage brass nickelé à tête cache-entrée"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "681",
    slug: "serie-681-robinet-de-puisage-laiton-brosse-4ms-1-2pouces-3-4-tetine-17-manette-laiton",
    name: frEn("681 - Robinet de puisage laiton brossé 4MS 1/2&#039;&#039;-3/4&#039;&#039; tétine 17 manette laiton", "681 - Valve de puisage brass brossé 4MS 1/2&#039;&#039;-3/4&#039;&#039; tétine 17 manette brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "682",
    slug: "serie-682-robinet-de-puisage-laiton-brosse-4ms-avec-tetine-poignee-acier-plate-rouge",
    name: frEn("682 - Robinet de puisage laiton brossé 4MS avec tétine poignée acier plate rouge", "682 - Valve de puisage brass brossé 4MS avec tétine poignée acier plate rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "686",
    slug: "serie-686-robinet-de-puisage-antigel-icecal-laiton-chrome-4ms-male-1-2pouces-3-4pouces",
    name: frEn("686 - Robinet de puisage antigel Icecal laiton chromé 4MS mâle 1/2&#039;&#039;-3/4&#039;&#039;", "686 - Valve de puisage antigel Icecal brass chromé 4MS mâle 1/2&#039;&#039;-3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "695",
    slug: "serie-695-bouche-d-arrosage-vanne-a-sphere-sortie-d-equerre-laiton-4ms-sortie-male",
    name: frEn("695 - Bouche d&#039;arrosage vanne à sphère sortie d&#039;équerre laiton 4MS sortie mâle", "695 - Bouche d&#039;arrosage Ball valve sortie d&#039;équerre brass 4MS sortie mâle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "696",
    slug: "serie-696-robinet-de-puisage-acs-laiton-4ms-nickele-poignee-acier-plate-rouge",
    name: frEn("696 - Robinet de puisage ACS laiton 4MS nickelé poignée acier plate rouge", "696 - Valve de puisage ACS brass 4MS nickelé poignée acier plate rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "698",
    slug: "serie-698-robinet-de-puisage-antigel-laiton-a-boisseau-spherique-1-2pouces-3-4pouces",
    name: frEn("698 - Robinet de puisage antigel laiton à boisseau sphérique 1/2&#039;&#039;-3/4&#039;&#039;", "698 - Valve de puisage antigel brass à boisseau sphérique 1/2&#039;&#039;-3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "699",
    slug: "serie-699-robinet-de-puisage-cadenassable-laiton-4ms-nickele-acs",
    name: frEn("699 - Robinet de puisage cadenassable laiton 4MS nickelé ACS", "699 - Valve de puisage cadenassable brass 4MS nickelé ACS"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "795",
    slug: "serie-795-robinet-de-puisage-cadenassable-inox-a-boisseau-spherique",
    name: frEn("795 - Robinet de puisage cadenassable inox à boisseau sphérique", "795 - Valve de puisage cadenassable stainless à boisseau sphérique"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton / inox", "Brass / stainless"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9800",
    slug: "serie-9800-tete-pour-robinet-figure-1345",
    name: frEn("9800 - Tête pour robinet figure 1345", "9800 - Tête pour Valve figure 1345"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "98100",
    slug: "serie-98100-cartouche-antigel-de-rechange-icecal-1-2pouces",
    name: frEn("98100 - Cartouche antigel de rechange Icecal 1/2&#039;&#039;", "98100 - Cartouche antigel de rechange Icecal 1/2&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "98104",
    slug: "serie-98104-cle-pour-cache-entree-carre-de-6mm",
    name: frEn("98104 - Clé pour cache-entrée carré de 6mm", "98104 - Clé pour cache-entrée carré de 6mm"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
