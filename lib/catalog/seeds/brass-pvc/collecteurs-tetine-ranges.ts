import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-laiton-collecteurs-tetine";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const collecteursTetineBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "553",
    slug: "serie-553-vanne-a-sphere-laiton-femelle-avec-tetine-1-2pouces",
    name: frEn("553 - Vanne à sphère laiton femelle avec tétine 1/2&#039;&#039;", "553 - Ball valve brass femelle avec tétine 1/2&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "554",
    slug: "serie-554-vanne-a-sphere-laiton-male-avec-tetine-1-2pouces",
    name: frEn("554 - Vanne à sphère laiton mâle avec tétine 1/2&#039;&#039;", "554 - Ball valve brass mâle avec tétine 1/2&#039;&#039;"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "633",
    slug: "serie-633-vanne-a-sphere-laiton-4ms-pour-collecteur-a-ecrou-tournant",
    name: frEn("633 - Vanne à sphère laiton 4MS pour collecteur à écrou tournant", "633 - Ball valve brass 4MS pour collecteur à écrou tournant"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
  base({
    reference: "678",
    slug: "serie-678-vanne-laiton-pour-collecteur-a-boisseau-spherique-bsp-1-2poucesf-1-2poucesm",
    name: frEn("678 - Vanne laiton pour collecteur à boisseau sphérique BSP 1/2&#039;&#039;F-1/2&#039;&#039;M", "678 - Vanne brass pour collecteur à boisseau sphérique BSP 1/2&#039;&#039;F-1/2&#039;&#039;M"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("Laiton", "Brass"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
];
