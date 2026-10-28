import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "brides-reseau-eau";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const bridesReseauEauRanges: CatalogRangeSeed[] = [
  base({
    reference: "2502",
    slug: "serie-brides-reseau-eau-2502-bride-de-raccordement-verrouillee-pour-tubes-pvc-pe-acs",
    name: frEn("2502 - Bride de raccordement verrouillée pour tubes PVC/PE ACS", "2502 - Flange de Fittingement verrouillée pour tubes PVC/PE ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2504",
    slug: "serie-brides-reseau-eau-2504-bride-de-raccordement-libre-pour-tubes-pvc-acs",
    name: frEn("2504 - Bride de raccordement libre pour tubes PVC ACS", "2504 - Flange de Fittingement libre pour tubes PVC ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2510",
    slug: "serie-brides-reseau-eau-2510-bride-fonte-de-reduction-goujonnee-pn16-acs",
    name: frEn("2510 - Bride fonte de réduction goujonnée PN16 ACS", "2510 - Flange cast iron de réduction goujonnée PN16 ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN16", material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2511",
    slug: "serie-brides-reseau-eau-2511-bride-pleine-fonte-ronde-pn10-16-acs",
    name: frEn("2511 - Bride pleine fonte ronde PN10/16 ACS", "2511 - Flange pleine cast iron ronde PN10/16 ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2512",
    slug: "serie-brides-reseau-eau-2512-bride-fonte-taraudee-metrique-petit-bossage-40x300-acs",
    name: frEn("2512 - Bride fonte taraudée métrique petit bossage 40x300 ACS", "2512 - Flange cast iron taraudée métrique petit bossage 40x300 ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2513",
    slug: "serie-brides-reseau-eau-2513-bride-fonte-taraudee-metrique-gros-bossage-55x300-acs",
    name: frEn("2513 - Bride fonte taraudée métrique gros bossage 55x300 ACS", "2513 - Flange cast iron taraudée métrique gros bossage 55x300 ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2514",
    slug: "serie-brides-reseau-eau-2514-bride-fonte-taraudee-bsp-pn10-16-acs",
    name: frEn("2514 - Bride fonte taraudée BSP PN10/16 ACS", "2514 - Flange cast iron taraudée BSP PN10/16 ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98031",
    slug: "serie-brides-reseau-eau-98031-joint-de-brides-epdm-noir-non-perce",
    name: frEn("98031 - Joint de brides EPDM noir NON percé", "98031 - Joint de Flanges EPDM noir NON percé"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98032",
    slug: "serie-brides-reseau-eau-98032-joint-de-brides-epdm-noir-perce",
    name: frEn("98032 - Joint de brides EPDM noir percé", "98032 - Joint de Flanges EPDM noir percé"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
