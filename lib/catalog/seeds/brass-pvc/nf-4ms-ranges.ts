import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-nf-4ms";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const nf4msBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "506",
    slug: "serie-506-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-a-purge-poignee-verte",
    name: frEn("506 - Vanne à sphère laiton titré 4MS NF femelle femelle à purge poignée verte", "506 - Ball valve brass titré 4MS NF femelle femelle à purge poignée verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "526",
    slug: "serie-526-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-a-purge-papillon-vert",
    name: frEn("526 - Vanne à sphère laiton titré 4MS NF  femelle femelle à purge papillon vert", "526 - Ball valve brass titré 4MS NF  femelle femelle à purge papillon vert"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "528",
    slug: "serie-528-vanne-a-sphere-laiton-titre-4ms-nf-male-femelle-poignee-plate-verte",
    name: frEn("528 - Vanne à sphère laiton titré 4MS NF mâle femelle poignée plate verte", "528 - Ball valve brass titré 4MS NF mâle femelle poignée plate verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "544",
    slug: "serie-544-vanne-a-sphere-laiton-titre-4ms-nf-male-male-a-purge-poignee-verte",
    name: frEn("544 - Vanne à sphère laiton titré 4MS NF mâle mâle à purge poignée verte", "544 - Ball valve brass titré 4MS NF mâle mâle à purge poignée verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "545",
    slug: "serie-545-vanne-a-sphere-laiton-titre-4ms-nf-male-male-a-purge-papillon-vert",
    name: frEn("545 - Vanne à sphère laiton titré 4MS NF mâle mâle à purge papillon vert", "545 - Ball valve brass titré 4MS NF mâle mâle à purge papillon vert"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "549",
    slug: "serie-549-vanne-a-sphere-laiton-titre-4ms-nf-male-femelle-purge-poignee-plate-verte",
    name: frEn("549 - Vanne à sphère laiton titré 4MS NF mâle femelle purge poignée plate verte", "549 - Ball valve brass titré 4MS NF mâle femelle purge poignée plate verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "550",
    slug: "serie-550-vanne-a-sphere-laiton-4ms-nf-male-femelle-a-purge-manette-papillon",
    name: frEn("550 - Vanne à sphère laiton 4MS NF mâle femelle à purge manette papillon", "550 - Ball valve brass 4MS NF mâle femelle à purge manette papillon"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "567",
    slug: "serie-567-vanne-a-sphere-laiton-titre-4ms-nf-male-male-poignee-plate-verte",
    name: frEn("567 - Vanne à sphère laiton titré 4MS NF mâle mâle poignée plate verte", "567 - Ball valve brass titré 4MS NF mâle mâle poignée plate verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "568",
    slug: "serie-568-vanne-a-sphere-laiton-titre-4ms-nf-male-male-manette-papillon-verte",
    name: frEn("568 - Vanne à sphère laiton titré 4MS NF mâle mâle manette papillon verte", "568 - Ball valve brass titré 4MS NF mâle mâle manette papillon verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "569",
    slug: "serie-569-vanne-sphere-laiton-titre-4ms-nf-male-femelle-manette-papillon-verte",
    name: frEn("569 - Vanne sphère laiton titré 4MS NF mâle femelle manette papillon verte", "569 - Vanne sphère brass titré 4MS NF mâle femelle manette papillon verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "577",
    slug: "serie-577-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-poignee-plate-verte",
    name: frEn("577 - Vanne à sphère laiton titré 4MS NF femelle femelle poignée plate verte", "577 - Ball valve brass titré 4MS NF femelle femelle poignée plate verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "578",
    slug: "serie-578-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-manette-papillon-verte",
    name: frEn("578 - Vanne à sphère laiton titré 4MS NF femelle femelle manette papillon verte", "578 - Ball valve brass titré 4MS NF femelle femelle manette papillon verte"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "610",
    slug: "serie-610-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-a-prolongateur-tournant",
    name: frEn("610 - Vanne à sphère laiton titré 4MS NF femelle femelle à prolongateur tournant", "610 - Ball valve brass titré 4MS NF femelle femelle à prolongateur tournant"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "620",
    slug: "serie-620-vanne-a-sphere-laiton-nf-rob-gaz-airagas-femelle-femelle-bsp",
    name: frEn("620 - Vanne à sphère laiton NF ROB-GAZ Airagas femelle femelle BSP", "620 - Ball valve brass NF ROB-GAZ Airagas femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812008",
    slug: "serie-9812008-kit-comprenant-bouchon-purge-et-joints-pour-vanne-a-sphere-nf",
    name: frEn("9812008 - Kit comprenant bouchon, purge et joints pour vanne à sphère NF", "9812008 - Kit comprenant bouchon, purge et joints pour Ball valve NF"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "981232",
    slug: "serie-981232-rehausse-compatible-avec-toute-la-serie-nf",
    name: frEn("981232 - Réhausse compatible avec toute la série NF", "981232 - Réhausse compatible avec toute la série NF"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
