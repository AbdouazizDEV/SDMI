import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-serena-cw724r-pn40";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const serenaCw724rBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "509s",
    slug: "serie-509s-vanne-a-sphere-laiton-cw724r-serena-femelle-femelle-levier-noir",
    name: frEn("509S - Vanne à sphère laiton CW724R Serena femelle femelle levier noir", "509S - Ball valve brass CW724R Serena femelle femelle levier noir"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "510s",
    slug: "serie-510s-vanne-a-sphere-laiton-cw724r-serena-a-purge-femelle-femelle-levier-noir",
    name: frEn("510S - Vanne à sphère laiton CW724R Serena à purge femelle femelle levier noir", "510S - Ball valve brass CW724R Serena à purge femelle femelle levier noir"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "525s",
    slug: "serie-525s-vanne-a-sphere-laiton-cw724r-serena-femelle-femelle-manette-noire",
    name: frEn("525S - Vanne à sphère laiton CW724R Serena femelle femelle manette noire", "525S - Ball valve brass CW724R Serena femelle femelle manette noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "530s",
    slug: "serie-530s-vanne-a-sphere-laiton-cw724r-serena-a-purge-femelle-manette-noire",
    name: frEn("530S - Vanne à sphère laiton CW724R Serena à purge femelle manette noire", "530S - Ball valve brass CW724R Serena à purge femelle manette noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "565s",
    slug: "serie-565s-vanne-a-sphere-laiton-cw724r-serena-male-male-manette-noire",
    name: frEn("565S - Vanne à sphère laiton CW724R Serena mâle mâle manette noire", "565S - Ball valve brass CW724R Serena mâle mâle manette noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "566s",
    slug: "serie-566s-vanne-a-sphere-laiton-cw724r-serena-male-male-levier-noir",
    name: frEn("566S - Vanne à sphère laiton CW724R Serena mâle mâle levier noir", "566S - Ball valve brass CW724R Serena mâle mâle levier noir"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "570s",
    slug: "serie-570s-vanne-a-sphere-laiton-cw724r-serena-male-femelle-manette-noire",
    name: frEn("570S - Vanne à sphère laiton CW724R Serena mâle femelle manette noire", "570S - Ball valve brass CW724R Serena mâle femelle manette noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "571s",
    slug: "serie-571s-vanne-a-sphere-laiton-cw724r-serena-male-femelle-levier-noir",
    name: frEn("571S - Vanne à sphère laiton CW724R Serena mâle femelle levier noir", "571S - Ball valve brass CW724R Serena mâle femelle levier noir"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "615s",
    slug: "serie-615s-vanne-a-sphere-laiton-serena-prolongateur-fixe-femelle-a-poignee-noire",
    name: frEn("615S - Vanne à sphère laiton Serena prolongateur fixe Femelle à poignée noire", "615S - Ball valve brass Serena prolongateur fixe Femelle à poignée noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812148",
    slug: "serie-9812148-kit-bouchon-purge-et-joints-pour-vanne-serena-a-purge",
    name: frEn("9812148 - Kit bouchon, purge et joints pour vanne Serena à purge", "9812148 - Kit bouchon, purge et joints pour vanne Serena à purge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "98125",
    slug: "serie-98125-levier-cadenassable-noir-pour-vannes-serena",
    name: frEn("98125 - Levier cadenassable noir pour vannes Serena", "98125 - Levier cadenassable noir pour vannes Serena"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "981251",
    slug: "serie-981251-rehausse-seule-noire-pour-vannes-serena",
    name: frEn("981251 - Rehausse seule noire pour vannes Serena", "981251 - Rehausse seule noire pour vannes Serena"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812517",
    slug: "serie-9812517-sachet-de-10-clips-rouges-eau-chaude-pour-levier-serena",
    name: frEn("9812517 - Sachet de 10 clips rouges eau chaude pour levier Serena", "9812517 - Sachet de 10 clips rouges eau chaude pour levier Serena"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812518",
    slug: "serie-9812518-sachet-de-10-clips-bleus-eau-froide-pour-levier-serena",
    name: frEn("9812518 - Sachet de 10 clips bleus eau froide pour levier Serena", "9812518 - Sachet de 10 clips bleus eau froide pour levier Serena"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
