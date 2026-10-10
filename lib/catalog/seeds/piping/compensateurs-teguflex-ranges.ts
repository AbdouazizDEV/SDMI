import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "manchons-compensateurs-teguflex";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const compensateursTeguflexRanges: CatalogRangeSeed[] = [
  base({
    reference: "1560",
    slug: "serie-manchons-compensateurs-teguflex-1560-manchon-compensateur-industrie-l130mm-pn10-16-epdm-rouge",
    name: frEn("1560 - Manchon compensateur industrie L130mm PN10/16 EPDM rouge", "1560 - Coupling Expansion joint industrie L130mm PN10/16 EPDM rouge"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1561",
    slug: "serie-manchons-compensateurs-teguflex-1561-manchon-compensateur-industrie-l130mm-pn10-16-epdm-rouge-blanc-acs",
    name: frEn("1561 - Manchon compensateur industrie L130mm PN10/16 EPDM rouge blanc ACS", "1561 - Coupling Expansion joint industrie L130mm PN10/16 EPDM rouge blanc ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1562",
    slug: "serie-manchons-compensateurs-teguflex-1562-manchon-compensateur-l130mm-epdm-haute-temperature-double-rouge",
    name: frEn("1562 - Manchon compensateur L130mm EPDM Haute température double rouge", "1562 - Coupling Expansion joint L130mm EPDM Haute température double rouge"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Élastomère", "Elastomer"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1563",
    slug: "serie-manchons-compensateurs-teguflex-1563-manchon-compensateur-industrie-l130mm-epichlorhydrine-jaune",
    name: frEn("1563 - Manchon compensateur industrie L130mm épichlorhydrine jaune", "1563 - Coupling Expansion joint industrie L130mm épichlorhydrine jaune"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1564",
    slug: "serie-manchons-compensateurs-teguflex-1564-manchon-compensateur-industrie-l130mm-pn10-16-csm-vert",
    name: frEn("1564 - Manchon compensateur industrie L130mm PN10/16 CSM vert", "1564 - Coupling Expansion joint industrie L130mm PN10/16 CSM vert"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1565",
    slug: "serie-manchons-compensateurs-teguflex-1565-manchon-compensateur-industrie-l130mm-nbr-alimentaire-blanc-fda",
    name: frEn("1565 - Manchon compensateur industrie L130mm NBR alimentaire blanc FDA", "1565 - Coupling Expansion joint industrie L130mm NBR alimentaire blanc FDA"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1566",
    slug: "serie-manchons-compensateurs-teguflex-1566-manchon-compensateur-industrie-pn10-16-l130mm-sbr-bleu",
    name: frEn("1566 - Manchon compensateur industrie PN10/16 L130mm SBR bleu", "1566 - Coupling Expansion joint industrie PN10/16 L130mm SBR bleu"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1567",
    slug: "serie-manchons-compensateurs-teguflex-1567-manchon-compensateur-industrie-pn10-16-l130mm-fkm-double-violet",
    name: frEn("1567 - Manchon compensateur industrie PN10/16 L130mm FKM double violet", "1567 - Coupling Expansion joint industrie PN10/16 L130mm FKM double violet"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1568",
    slug: "serie-manchons-compensateurs-teguflex-1568-manchon-compensateur-industrie-pn10-16-l130mm-hnbr-double-jaune",
    name: frEn("1568 - Manchon compensateur industrie PN10/16 L130mm HNBR double jaune", "1568 - Coupling Expansion joint industrie PN10/16 L130mm HNBR double jaune"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Acier", "Steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "9815",
    slug: "serie-manchons-compensateurs-teguflex-9815-bague-de-vide-inox",
    name: frEn("9815 - Bague de vide inox", "9815 - Bague de vide stainless"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98606",
    slug: "serie-manchons-compensateurs-teguflex-98606-limiteur-d-ecartement-acier-pn10-l130-avec-2-tirant-4-plaquettes",
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
