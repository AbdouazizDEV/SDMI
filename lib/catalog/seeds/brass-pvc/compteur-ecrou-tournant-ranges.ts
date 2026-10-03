import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "robinets-compteur-laiton-ecrou-tournant";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const compteurEcrouTournantRanges: CatalogRangeSeed[] = [
  base({
    reference: "555",
    slug: "serie-555-vanne-a-sphere-equerre-avant-compteur-laiton-4ms-male-femelle-bsp-manette",
    name: frEn("555 - Vanne à sphère équerre avant compteur laiton 4MS mâle femelle BSP manette", "555 - Ball valve équerre avant compteur brass 4MS mâle femelle BSP manette"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "635",
    slug: "serie-635-robinet-de-compteur-droit-avant-compteur-4ms-femelle-manette-rouge",
    name: frEn("635 - Robinet de compteur droit avant compteur 4MS femelle manette rouge", "635 - Valve de compteur droit avant compteur 4MS femelle manette rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "636",
    slug: "serie-636-robinet-de-compteur-droit-avant-compteur-4ms-male-manette-papillon-rouge",
    name: frEn("636 - Robinet de compteur droit avant compteur 4MS mâle manette papillon rouge", "636 - Valve de compteur droit avant compteur 4MS mâle manette papillon rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "637",
    slug: "serie-637-robinet-de-compteur-cadenassable-male-ecrou-prisonnier-male",
    name: frEn("637 - Robinet de compteur cadenassable mâle Ecrou Prisonnier mâle", "637 - Valve de compteur cadenassable mâle Ecrou Prisonnier mâle"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "638",
    slug: "serie-638-robinet-de-compteur-cadenassable-male-ecrou-prisonnier-femelle-3-4pouces-3-4pouces",
    name: frEn("638 - Robinet de compteur cadenassable mâle Ecrou Prisonnier femelle 3/4&#039;&#039;-3/4&#039;&#039;", "638 - Valve de compteur cadenassable mâle Ecrou Prisonnier femelle 3/4&#039;&#039;-3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "639",
    slug: "serie-639-robinet-de-compteur-droit-a-purge-male-ecrou-tournant-laiton-4ms-3-4pouces-3-4pouces",
    name: frEn("639 - Robinet de compteur droit à purge mâle écrou tournant laiton 4MS 3/4&#039;&#039;-3/4&#039;&#039;", "639 - Valve de compteur droit à purge mâle écrou tournant brass 4MS 3/4&#039;&#039;-3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "641",
    slug: "serie-641-robinet-de-compteur-droit-femelle-laiton-4ms-sans-plomb-nf-manette",
    name: frEn("641 - Robinet de compteur droit femelle laiton 4MS sans plomb NF manette", "641 - Valve de compteur droit femelle brass 4MS sans plomb NF manette"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "642",
    slug: "serie-642-robinet-de-compteur-male-droit-laiton-4ms-nf-poignee-verte-laiton",
    name: frEn("642 - Robinet de compteur mâle droit laiton 4MS NF poignée verte laiton", "642 - Valve de compteur mâle droit brass 4MS NF poignée verte brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "643",
    slug: "serie-643-robinet-droit-apres-compteur-a-purge-male-laiton-sans-plomb-4ms",
    name: frEn("643 - Robinet droit après compteur à purge mâle laiton sans plomb 4MS", "643 - Valve droit après compteur à purge mâle brass sans plomb 4MS"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "644",
    slug: "serie-644-robinet-de-compteur-equerre-male-femelle-laiton-sans-plomb-4ms",
    name: frEn("644 - Robinet de compteur équerre mâle femelle laiton sans plomb 4MS", "644 - Valve de compteur équerre mâle femelle brass sans plomb 4MS"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "645",
    slug: "serie-645-robinet-de-compteur-equerre-male-femelle-laiton-4ms-manette-rouge",
    name: frEn("645 - Robinet de compteur équerre mâle femelle laiton 4MS manette rouge", "645 - Valve de compteur équerre mâle femelle brass 4MS manette rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "646",
    slug: "serie-646-robinet-de-compteur-equerre-male-femelle-laiton-sans-plomb-4ms-spde",
    name: frEn("646 - Robinet de compteur équerre mâle femelle laiton sans plomb 4MS SPDE", "646 - Valve de compteur équerre mâle femelle brass sans plomb 4MS SPDE"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "648",
    slug: "serie-648-robinet-compteur-droit-laiton-4ms-ecrou-prisonnier-femelle-manette-laiton",
    name: frEn("648 - Robinet compteur droit laiton 4MS écrou prisonnier femelle manette laiton", "648 - Valve compteur droit brass 4MS écrou prisonnier femelle manette brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "649",
    slug: "serie-649-robinet-de-compteur-droit-laiton-4ms-ecrou-prisonnier-male-manette-laiton",
    name: frEn("649 - Robinet de compteur droit laiton 4MS écrou prisonnier mâle manette laiton", "649 - Valve de compteur droit brass 4MS écrou prisonnier mâle manette brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "650",
    slug: "serie-650-robinet-compteur-equerre-laiton-4ms-ecrou-prisonnier-male-manette-laiton",
    name: frEn("650 - Robinet compteur équerre laiton 4MS écrou prisonnier mâle manette laiton", "650 - Valve compteur équerre brass 4MS écrou prisonnier mâle manette brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "654",
    slug: "serie-654-robinet-de-compteur-droit-laiton-sans-plomb-4ms-ecrou-tournant",
    name: frEn("654 - Robinet de compteur droit laiton sans plomb 4MS écrou tournant", "654 - Valve de compteur droit brass sans plomb 4MS écrou tournant"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "656",
    slug: "serie-656-robinet-de-compteur-equerre-purge-1-4pouces-laiton-4ms-25-ecrou-prisonnier-3-4pouces",
    name: frEn("656 - Robinet de compteur équerre purge 1/4&#039;&#039; laiton 4MS 25 écrou prisonnier 3/4&#039;&#039;", "656 - Valve de compteur équerre purge 1/4&#039;&#039; brass 4MS 25 écrou prisonnier 3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "657",
    slug: "serie-657-robinet-de-compteur-droit-a-purge-1-4pouces-laiton-4ms-25-ecrou-prisonnier-3-4pouces",
    name: frEn("657 - Robinet de compteur droit à purge 1/4&#039;&#039; laiton 4MS 25 écrou prisonnier 3/4&#039;&#039;", "657 - Valve de compteur droit à purge 1/4&#039;&#039; brass 4MS 25 écrou prisonnier 3/4&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "659",
    slug: "serie-659-robinet-de-compteur-equerre-laiton-sans-plomb-4ms-a-ecrou-tournant",
    name: frEn("659 - Robinet de compteur équerre laiton sans plomb 4MS à écrou tournant", "659 - Valve de compteur équerre brass sans plomb 4MS à écrou tournant"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "660",
    slug: "serie-660-robinet-de-compteur-equerre-femelle-femelle-laiton-4ms-manette-laiton",
    name: frEn("660 - Robinet de compteur équerre femelle femelle laiton 4MS manette laiton", "660 - Valve de compteur équerre femelle femelle brass 4MS manette brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9810403",
    slug: "serie-9810403-cle-passe-partout-pour-vanne-de-compteur-sferalocking-ref-637-638",
    name: frEn("9810403 - Clé passe partout pour vanne de compteur Sferalocking Ref.637-638", "9810403 - Clé passe partout pour vanne de compteur Sferalocking Ref.637-638"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9810404",
    slug: "serie-9810404-kit-systeme-de-cadenassage-pour-vanne-de-compteur-sferalocking",
    name: frEn("9810404 - Kit système de cadenassage pour vanne de compteur Sferalocking", "9810404 - Kit système de cadenassage pour vanne de compteur Sferalocking"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812180",
    slug: "serie-9812180-verrou-magnetique-pour-vannes-a-sphere-laiton",
    name: frEn("9812180 - Verrou magnétique pour vannes à sphère laiton", "9812180 - Verrou magnétique pour vannes à sphère brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812181",
    slug: "serie-9812181-cle-pour-cadenas-magnetique-de-vanne-a-sphere-laiton",
    name: frEn("9812181 - Clé pour cadenas magnétique de vanne à sphère laiton", "9812181 - Clé pour cadenas magnétique de Ball valve brass"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812182",
    slug: "serie-9812182-adaptateur-pour-verrou-magnetique-sur-vannes-serena",
    name: frEn("9812182 - Adaptateur pour verrou magnétique sur vannes Serena", "9812182 - Adaptateur pour verrou magnétique sur vannes Serena"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812183",
    slug: "serie-9812183-adaptateur-pour-verrou-magnetique-vanne-de-compteur-batplus",
    name: frEn("9812183 - Adaptateur pour verrou magnétique vanne de compteur Bat+", "9812183 - Adaptateur pour verrou magnétique vanne de compteur Bat+"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9812184",
    slug: "serie-9812184-adaptateur-pour-verrou-magnetique-vanne-de-compteur-airaga",
    name: frEn("9812184 - Adaptateur pour verrou magnétique vanne de compteur Airaga", "9812184 - Adaptateur pour verrou magnétique vanne de compteur Airaga"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
