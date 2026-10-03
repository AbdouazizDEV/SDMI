import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-batiment-plus-4ms";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const batimentPlus4msBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "508",
    slug: "serie-508-vanne-a-sphere-laiton-titre-femelle-femelle-poignee-plate-bleue",
    name: frEn("508 - Vanne à sphère laiton titré femelle femelle poignée plate bleue", "508 - Ball valve brass titré femelle femelle poignée plate bleue"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "511",
    slug: "serie-511-vanne-a-sphere-laiton-titre-male-femelle-poignee-acier-plate-bleue",
    name: frEn("511 - Vanne à sphère laiton titré mâle femelle poignée acier plate bleue", "511 - Ball valve brass titré mâle femelle poignée acier plate bleue"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "529",
    slug: "serie-529-vanne-a-sphere-laiton-titre-male-male-poignee-acier-bleue",
    name: frEn("529 - Vanne à sphère laiton titré mâle mâle poignée acier bleue", "529 - Ball valve brass titré mâle mâle poignée acier bleue"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "533",
    slug: "serie-533-vanne-a-sphere-laiton-titre-batimentplus-male-femelle-manette-bleue",
    name: frEn("533 - Vanne à sphère laiton titré Bâtiment+ mâle femelle manette bleue", "533 - Ball valve brass titré Bâtiment+ mâle femelle manette bleue"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "536",
    slug: "serie-536-vanne-a-sphere-laiton-titre-male-male-manette-papillon-bleue",
    name: frEn("536 - Vanne à sphère laiton titré mâle mâle manette papillon bleue", "536 - Ball valve brass titré mâle mâle manette papillon bleue"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "542",
    slug: "serie-542-vanne-a-sphere-laiton-titre-batplus-male-male-a-purge-portee-plate-manette",
    name: frEn("542 - Vanne à sphère laiton titré Bât+ mâle mâle à purge portée plate manette", "542 - Ball valve brass titré Bât+ mâle mâle à purge portée plate manette"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "543",
    slug: "serie-543-vanne-sphere-laiton-titre-batplus-male-male-purge-portee-plate-3-4-poignee",
    name: frEn("543 - Vanne sphère laiton titré Bât+ mâle mâle purge portée plate 3/4&#039;&#039; poignée", "543 - Vanne sphère brass titré Bât+ mâle mâle purge portée plate 3/4&#039;&#039; poignée"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "546",
    slug: "serie-546-vanne-a-sphere-laiton-male-femelle-a-purge-portee-plate-manette-papillon",
    name: frEn("546 - Vanne à sphère laiton mâle femelle à purge portée plate manette papillon", "546 - Ball valve brass mâle femelle à purge portée plate manette papillon"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "547",
    slug: "serie-547-vanne-a-sphere-laiton-male-femelle-purge-portee-plate-poignee-plate-rouge",
    name: frEn("547 - Vanne à sphère laiton mâle femelle purge portée plate poignée plate rouge", "547 - Ball valve brass mâle femelle purge portée plate poignée plate rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "560",
    slug: "serie-560-vanne-sphere-laiton-titre-4ms-femelle-femelle-purge-manette-papillon-rouge",
    name: frEn("560 - Vanne sphère laiton titré 4MS femelle femelle purge manette papillon rouge", "560 - Vanne sphère brass titré 4MS femelle femelle purge manette papillon rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "564",
    slug: "serie-564-vanne-a-sphere-laiton-titre-4ms-femelle-femelle-manette-papillon-bleue-80s",
    name: frEn("564 - Vanne à sphère laiton titré 4MS femelle femelle manette papillon bleue 80S", "564 - Ball valve brass titré 4MS femelle femelle manette papillon bleue 80S"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "580",
    slug: "serie-580-vanne-sphere-laiton-titre-4ms-batimentplus-femelle-femelle-bsp-poignee-rouge",
    name: frEn("580 - Vanne sphère laiton titré 4MS Bâtiment+ femelle femelle BSP poignée rouge", "580 - Vanne sphère brass titré 4MS Bâtiment+ femelle femelle BSP poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "581",
    slug: "serie-581-vanne-a-sphere-laiton-titre-4ms-batimentplus-male-femelle-bsp-poignee-rouge",
    name: frEn("581 - Vanne à sphère laiton titré 4MS bâtiment+ mâle femelle BSP poignée rouge", "581 - Ball valve brass titré 4MS bâtiment+ mâle femelle BSP poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "582",
    slug: "serie-582-vanne-sphere-laiton-titre-4ms-batimentplus-male-male-bsp-poignee-rouge",
    name: frEn("582 - Vanne sphère laiton titré 4MS Bâtiment+ mâle mâle BSP poignée rouge", "582 - Vanne sphère brass titré 4MS Bâtiment+ mâle mâle BSP poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "585",
    slug: "serie-585-vanne-sphere-laiton-titre-batplus-femelle-femelle-a-purge-1-4-poignee-rouge",
    name: frEn("585 - Vanne sphère laiton titré Bât+ femelle femelle à purge 1/4&#039;&#039; poignée rouge", "585 - Vanne sphère brass titré Bât+ femelle femelle à purge 1/4&#039;&#039; poignée rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "586",
    slug: "serie-586-vanne-sphere-laiton-titre-4ms-batplus-femelle-femelle-manette-papillon",
    name: frEn("586 - Vanne sphère laiton titré 4MS Bât+ femelle femelle manette papillon", "586 - Vanne sphère brass titré 4MS Bât+ femelle femelle manette papillon"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "587",
    slug: "serie-587-vanne-sphere-laiton-titre-4ms-batplus-male-femelle-manette-papillon",
    name: frEn("587 - Vanne sphère laiton titré 4MS Bât+ mâle femelle manette papillon", "587 - Vanne sphère brass titré 4MS Bât+ mâle femelle manette papillon"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "588",
    slug: "serie-588-vanne-sphere-laiton-titre-4ms-bat-plus-male-male-bsp-manette-papillon-rouge",
    name: frEn("588 - Vanne sphère laiton titré 4MS Bât + mâle mâle BSP manette papillon rouge", "588 - Vanne sphère brass titré 4MS Bât + mâle mâle BSP manette papillon rouge"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "981215",
    slug: "serie-981215-levier-cadenassable-pour-serie-batimentplus-580",
    name: frEn("981215 - Levier cadenassable pour série Bâtiment+ 580", "981215 - Levier cadenassable pour série Bâtiment+ 580"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "981233",
    slug: "serie-981233-rehausse-compatible-avec-toutes-les-series-batiment-plus",
    name: frEn("981233 - Réhausse compatible avec toutes les séries bâtiment +", "981233 - Réhausse compatible avec toutes les séries bâtiment +"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "kit-purge-avec-bouchon-pour",
    slug: "serie-kit-purge-avec-bouchon-pour-vannes-542-543-et-546-547",
    name: frEn("Kit Purge avec bouchon pour Vannes 542/543 et 546/547", "Kit Purge avec bouchon pour Vannes 542/543 et 546/547"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "vanne",
    slug: "serie-vanne-a-sphere-laiton-titre-batiment-plus-a-prolongateur-fixe",
    name: frEn("Vanne à sphère laiton titré Bâtiment + à prolongateur fixe", "Ball valve brass titré Bâtiment + à prolongateur fixe"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
