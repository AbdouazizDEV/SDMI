import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "adaptateurs-de-brides-eau";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const adaptateursBridesEauRanges: CatalogRangeSeed[] = [
  base({
    reference: "2501",
    slug: "serie-adaptateurs-de-brides-eau-2501-adaptateur-de-bride-large-plages-avec-talon-d-appui-acs",
    name: frEn("2501 - Adaptateur de bride large plages avec talon d&#039;appui ACS", "2501 - Adaptateur de Flange large plages avec talon d&#039;appui ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2503",
    slug: "serie-adaptateurs-de-brides-eau-2503-adaptateur-a-bride-verrouille-pour-tubes-pvc-pe-acs",
    name: frEn("2503 - Adaptateur à bride verrouillé pour tubes PVC/PE ACS", "2503 - Adaptateur à Flange verrouillé pour tubes PVC/PE ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2509",
    slug: "serie-adaptateurs-de-brides-eau-2509-adaptateur-de-bride-verrouille-large-plages-acs",
    name: frEn("2509 - Adaptateur de bride verrouillé large plages ACS", "2509 - Adaptateur de Flange verrouillé large plages ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "98607",
    slug: "serie-adaptateurs-de-brides-eau-98607-inserts-inox-304-pour-tubes-pehd",
    name: frEn("98607 - Inserts INOX 304 pour tubes PEHD", "98607 - Inserts stainless 304 pour tubes PEHD"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
];
