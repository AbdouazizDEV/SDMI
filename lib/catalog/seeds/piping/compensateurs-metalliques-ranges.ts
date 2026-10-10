import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "manchons-compensateurs-metalliques";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const compensateursMetalliquesRanges: CatalogRangeSeed[] = [
  base({
    reference: "1511",
    slug: "serie-manchons-compensateurs-metalliques-1511-manchon-compensateur-metallique-a-soufflet-inox-butt-welding-bw",
    name: frEn("1511 - Manchon compensateur métallique à soufflet inox Butt Welding BW", "1511 - Coupling Expansion joint métallique à soufflet stainless Butt Welding BW"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1521",
    slug: "serie-manchons-compensateurs-metalliques-1521-manchon-compensateur-metallique-a-soufflet-inox-a-brides-pn16",
    name: frEn("1521 - Manchon compensateur métallique à soufflet inox à brides PN16", "1521 - Coupling Expansion joint métallique à soufflet stainless à Flanges PN16"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: "PN16", material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "1551",
    slug: "serie-manchons-compensateurs-metalliques-1551-manchon-compensateur-metallique-a-soufflet-inox",
    name: frEn("1551 - Manchon compensateur métallique à soufflet inox", "1551 - Coupling Expansion joint métallique à soufflet stainless"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
];
