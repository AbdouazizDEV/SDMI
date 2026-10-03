import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-industrie-cadenassable-demultiplicateur";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const industrieCadenassableRanges: CatalogRangeSeed[] = [
  base({
    reference: "1385",
    slug: "serie-1385-vanne-equerre-fix-in-acs-avec-fixation-integree",
    name: frEn("1385 - Vanne équerre Fix In ACS avec fixation intégrée", "1385 - Vanne équerre Fix In ACS avec fixation intégrée"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "502",
    slug: "serie-502-vanne-a-sphere-laiton-degraissee-poignee-blanche-serie-industrie",
    name: frEn("502 - Vanne à sphère laiton dégraissée poignée blanche série industrie", "502 - Ball valve brass dégraissée poignée blanche série industrie"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "520",
    slug: "serie-520-vanne-a-sphere-laiton-degraissee-oxygene-industrie-femelle-femelle",
    name: frEn("520 - Vanne à sphère laiton dégraissée oxygène industrie femelle femelle", "520 - Ball valve brass dégraissée oxygène industrie femelle femelle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "521",
    slug: "serie-521-vanne-a-sphere-laiton-serie-industrie-femelle-femelle-npt-poignee-noire",
    name: frEn("521 - Vanne à sphère laiton série industrie femelle femelle NPT poignée noire", "521 - Ball valve brass série industrie femelle femelle NPT poignée noire"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "523",
    slug: "serie-523-vanne-a-sphere-laiton-serie-industrie-femelle-femelle-bsp-papillon-rouge",
    name: frEn("523 - Vanne à sphère laiton série industrie femelle femelle BSP papillon rouge", "523 - Ball valve brass série industrie femelle femelle BSP papillon rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "527",
    slug: "serie-527-vanne-a-sphere-laiton-industrie-filets-longs-male-femelle-poignee-rouge",
    name: frEn("527 - Vanne à sphère laiton industrie filets longs mâle femelle poignée rouge", "527 - Ball valve brass industrie filets longs mâle femelle poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "531",
    slug: "serie-531-vanne-a-sphere-laiton-avec-demultiplicateur-femelle-femelle-bsp",
    name: frEn("531 - Vanne à sphère laiton avec démultiplicateur femelle femelle BSP", "531 - Ball valve brass avec démultiplicateur femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "537",
    slug: "serie-537-vanne-a-sphere-laiton-industrie-filets-longs-male-femelle-manette-rouge",
    name: frEn("537 - Vanne à sphère laiton industrie filets longs mâle femelle manette rouge", "537 - Ball valve brass industrie filets longs mâle femelle manette rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "538",
    slug: "serie-538-vanne-a-sphere-laiton-industrie-filets-longs-male-male-poignee-rouge",
    name: frEn("538 - Vanne à sphère laiton industrie filets longs mâle mâle poignée rouge", "538 - Ball valve brass industrie filets longs mâle mâle poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "548",
    slug: "serie-548-vanne-a-sphere-laiton-industrie-filets-longs-male-male-manette-rouge",
    name: frEn("548 - Vanne à sphère laiton industrie filets longs mâle mâle manette rouge", "548 - Ball valve brass industrie filets longs mâle mâle manette rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "556",
    slug: "serie-556-vanne-a-sphere-laiton-titre-cadenassage-sferalock-femelle-femelle-bsp",
    name: frEn("556 - Vanne à sphère laiton titré cadenassage Sferalock femelle femelle BSP", "556 - Ball valve brass titré cadenassage Sferalock femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "557",
    slug: "serie-557-vanne-a-sphere-laiton-cadenassage-sferalock-a-decompression-femelle-bsp",
    name: frEn("557 - Vanne à sphère laiton cadenassage Sferalock à décompression femelle BSP", "557 - Ball valve brass cadenassage Sferalock à décompression femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "561",
    slug: "serie-561-vanne-a-sphere-laiton-degraissee-oxygene-manette-papillon-femelle-femelle",
    name: frEn("561 - Vanne à sphère laiton dégraissée oxygène manette papillon femelle femelle", "561 - Ball valve brass dégraissée oxygène manette papillon femelle femelle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "576",
    slug: "serie-576-vanne-a-sphere-laiton-industrie-filets-longs-poignee-rouge-femelle-bsp",
    name: frEn("576 - Vanne à sphère laiton Industrie filets longs poignée rouge femelle BSP", "576 - Ball valve brass Industrie filets longs poignée rouge femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "674",
    slug: "serie-674-mini-vanne-a-sphere-laiton-4ms-male-femelle-bsp",
    name: frEn("674 - Mini vanne à sphère laiton 4MS mâle femelle BSP", "674 - Mini Ball valve brass 4MS mâle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "67401",
    slug: "serie-67401-mini-vanne-a-sphere-laiton-acs-4ms-male-femelle-bsp",
    name: frEn("67401 - Mini vanne à sphère laiton ACS 4MS mâle femelle BSP", "67401 - Mini Ball valve brass ACS 4MS mâle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "677",
    slug: "serie-677-mini-vanne-a-sphere-laiton-4ms-femelle-femelle-bsp",
    name: frEn("677 - Mini vanne à sphère laiton 4MS femelle femelle BSP", "677 - Mini Ball valve brass 4MS femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "690",
    slug: "serie-690-mini-vanne-a-sphere-laiton-4ms-male-male-bsp",
    name: frEn("690 - Mini vanne à sphère laiton 4MS mâle mâle BSP", "690 - Mini Ball valve brass 4MS mâle mâle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "691",
    slug: "serie-691-micro-vanne-a-sphere-laiton-femelle-femelle-bsp",
    name: frEn("691 - Micro vanne à sphère laiton femelle femelle BSP", "691 - Micro Ball valve brass femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "692",
    slug: "serie-692-micro-vanne-a-sphere-laiton-male-femelle-bsp",
    name: frEn("692 - Micro vanne à sphère laiton mâle femelle BSP", "692 - Micro Ball valve brass mâle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "693",
    slug: "serie-693-micro-vanne-a-sphere-laiton-male-male-bsp",
    name: frEn("693 - Micro vanne à sphère laiton mâle mâle BSP", "693 - Micro Ball valve brass mâle mâle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "694",
    slug: "serie-694-mini-vanne-a-sphere-laiton-4ms-avec-trou-de-decompression-male-femelle",
    name: frEn("694 - Mini vanne à sphère laiton 4MS avec trou de décompression mâle femelle", "694 - Mini Ball valve brass 4MS avec trou de décompression mâle femelle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "697",
    slug: "serie-697-mini-vanne-a-sphere-laiton-4ms-avec-trou-de-decompression-femelle-femelle",
    name: frEn("697 - Mini vanne à sphère laiton 4MS avec trou de décompression femelle femelle", "697 - Mini Ball valve brass 4MS avec trou de décompression femelle femelle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
