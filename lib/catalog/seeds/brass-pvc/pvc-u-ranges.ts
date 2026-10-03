import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SUB = "vannes-sphere-pvc-u";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const pvcUBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "583",
    slug: "serie-583-vanne-a-sphere-pvc-u-serie-batiment-a-coller",
    name: frEn("583 - Vanne à sphère PVC-U série Bâtiment à coller", "583 - Ball valve PVC-U série Bâtiment à coller"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("PVC-U", "PVC-U"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
  base({
    reference: "584",
    slug: "serie-584-vanne-a-sphere-pvc-u-serie-batiment-femelle-femelle-bsp",
    name: frEn("584 - Vanne à sphère PVC-U série Bâtiment femelle femelle BSP", "584 - Ball valve PVC-U série Bâtiment femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("PVC-U", "PVC-U"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
  base({
    reference: "598",
    slug: "serie-598-vanne-a-sphere-pvc-u-serie-industrie-a-coller",
    name: frEn("598 - Vanne à sphère PVC-U série Industrie à coller", "598 - Ball valve PVC-U série Industrie à coller"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("PVC-U", "PVC-U"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
  base({
    reference: "599",
    slug: "serie-599-vanne-a-sphere-pvc-u-serie-industrie-taraudee-femelle-femelle-bsp",
    name: frEn("599 - Vanne à sphère PVC-U série Industrie taraudée femelle femelle BSP", "599 - Ball valve PVC-U série Industrie taraudée femelle femelle BSP"),
    description: frEn(
      "Gamme vannes à sphère — catalogue SDMI.",
      "Ball valve range — SDMI catalog.",
    ),
    dn: null, pn: "PN40", material: frEn("PVC-U", "PVC-U"),
    connectionType: "solvent-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "solvent-weld", documentCount: 4 },
  }),
];
