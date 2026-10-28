import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "manchons-compensateurs-elastomere";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const compensateursElastomereRanges: CatalogRangeSeed[] = [
  base({
    reference: "1501",
    slug: "serie-manchons-compensateurs-elastomere-1501-manchon-compensateur-elastomere-epdm-a-brides-acier-pn10-16",
    name: frEn("1501 - Manchon compensateur élastomère EPDM à brides acier PN10/16", "1501 - Coupling Expansion joint élastomère EPDM à Flanges steel PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1502",
    slug: "serie-manchons-compensateurs-elastomere-1502-manchon-compensateur-elastomere-epdm-a-brides-acier-pn10-16",
    name: frEn("1502 - Manchon compensateur élastomère EPDM à brides acier PN10/16", "1502 - Coupling Expansion joint élastomère EPDM à Flanges steel PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1503",
    slug: "serie-manchons-compensateurs-elastomere-1503-manchon-compensateur-elastomere-nbr-a-brides-acier-pn10-16",
    name: frEn("1503 - Manchon compensateur élastomère NBR à brides acier PN10/16", "1503 - Coupling Expansion joint élastomère NBR à Flanges steel PN10/16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1504",
    slug: "serie-manchons-compensateurs-elastomere-1504-manchon-compensateur-elastomere-epdm-avec-raccords-fonte-galvanisee",
    name: frEn("1504 - Manchon compensateur élastomère EPDM avec raccords fonte galvanisée", "1504 - Coupling Expansion joint élastomère EPDM avec Fittings cast iron galvanisée"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1505",
    slug: "serie-manchons-compensateurs-elastomere-1505-manchon-compensateur-elastomere-epdm-pn10-16-l130mm",
    name: frEn("1505 - Manchon compensateur élastomère EPDM PN10/16 L130mm", "1505 - Coupling Expansion joint élastomère EPDM PN10/16 L130mm"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1506",
    slug: "serie-manchons-compensateurs-elastomere-1506-manchon-compensateur-elastomere-nbr-pn10-16-l130mm",
    name: frEn("1506 - Manchon compensateur élastomère NBR PN10/16 L130mm", "1506 - Coupling Expansion joint élastomère NBR PN10/16 L130mm"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1507",
    slug: "serie-manchons-compensateurs-elastomere-1507-manchon-compensateur-elastomere-epdm-acs-pn10-16-l130mm",
    name: frEn("1507 - Manchon compensateur élastomère EPDM ACS PN10/16 L130mm", "1507 - Coupling Expansion joint élastomère EPDM ACS PN10/16 L130mm"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1508",
    slug: "serie-manchons-compensateurs-elastomere-1508-manchon-compensateur-elastomere-epdm-acs-avec-raccords-fonte",
    name: frEn("1508 - Manchon compensateur élastomère EPDM ACS avec raccords fonte", "1508 - Coupling Expansion joint élastomère EPDM ACS avec Fittings cast iron"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "2150",
    slug: "serie-manchons-compensateurs-elastomere-2150-equipement-brides-boulons-acier-pour-compensateurs-sferaco",
    name: frEn("2150 - Equipement brides boulons acier pour compensateurs Sferaco", "2150 - Equipement Flanges boulons steel pour Expansion joints Sferaco"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98603",
    slug: "serie-manchons-compensateurs-elastomere-98603-limiteur-d-ecartement-kit-complet-acier-pn16-2-tirants-4-plaques",
    name: frEn("98603 - Limiteur d&#039;écartement - Kit complet Acier PN16 - 2 tirants 4 plaques", "98603 - Limiteur d&#039;écartement - Kit complet steel PN16 - 2 tirants 4 plaques"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98604",
    slug: "serie-manchons-compensateurs-elastomere-98604-limiteur-d-ecartement-kit-complet-acier-2-tirants-4-plaquettes",
    name: frEn("98604 - Limiteur d&#039;écartement - Kit complet Acier - 2 tirants 4 plaquettes", "98604 - Limiteur d&#039;écartement - Kit complet steel - 2 tirants 4 plaquettes"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98606",
    slug: "serie-manchons-compensateurs-elastomere-98606-limiteur-d-ecartement-acier-pn10-l130-avec-2-tirant-4-plaquettes",
    name: frEn("98606 - Limiteur d&#039;écartement acier - PN10 - L130 avec 2 tirant 4 plaquettes", "98606 - Limiteur d&#039;écartement steel - PN10 - L130 avec 2 tirant 4 plaquettes"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
