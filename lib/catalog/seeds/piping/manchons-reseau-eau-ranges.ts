import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "manchons-reseau-eau";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const manchonsReseauEauRanges: CatalogRangeSeed[] = [
  base({
    reference: "2505",
    slug: "serie-manchons-reseau-eau-2505-manchon-fonte-universel-large-plages-pour-tubes-rigides-acs",
    name: frEn("2505 - Manchon fonte universel large plages pour tubes rigides ACS", "2505 - Coupling cast iron universel large plages pour tubes rigides ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2507",
    slug: "serie-manchons-reseau-eau-2507-manchon-fonte-universel-verrouille-large-autobute-plages-acs",
    name: frEn("2507 - Manchon fonte universel verrouillé large autobuté plages ACS", "2507 - Coupling cast iron universel verrouillé large autobuté plages ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2508",
    slug: "serie-manchons-reseau-eau-2508-manchon-fonte-verrouille-autobute-pour-tubes-pvc-pe-acs",
    name: frEn("2508 - Manchon fonte verrouillé autobuté pour tubes PVC-PE ACS", "2508 - Coupling cast iron verrouillé autobuté pour tubes PVC-PE ACS"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Fonte malléable", "Malleable cast iron"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "98607",
    slug: "serie-manchons-reseau-eau-98607-inserts-inox-304-pour-tubes-pehd",
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
