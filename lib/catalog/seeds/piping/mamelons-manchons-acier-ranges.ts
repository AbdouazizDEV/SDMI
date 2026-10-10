import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "tuyauterie-et-accessoires";
const SUB = "mamelons-et-manchons-acier";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const mamelonsManchonsAcierRanges: CatalogRangeSeed[] = [
  base({
    reference: "530ag",
    slug: "serie-mamelons-et-manchons-acier-530ag-demi-mamelon-tube-acier-galva-en-10241-bsp",
    name: frEn("530AG - Demi-mamelon tube acier galva EN 10241 BSP", "530AG - Demi-Nipple tube steel galva EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "530an",
    slug: "serie-mamelons-et-manchons-acier-530an-demi-mamelon-tube-acier-noir-en-10241-bsp",
    name: frEn("530AN - Demi-mamelon tube acier noir EN 10241 BSP", "530AN - Demi-Nipple tube steel noir EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "530at3",
    slug: "serie-mamelons-et-manchons-acier-530at3-demi-mamelon-tube-sans-soudure-acier-noir-en-10241-bsp",
    name: frEn("530AT3 - Demi-mamelon tube sans soudure acier noir EN 10241 BSP", "530AT3 - Demi-Nipple tube sans soudure steel noir EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "530g",
    slug: "serie-mamelons-et-manchons-acier-530g-mamelon-tube-acier-galva-en-10241-bsp",
    name: frEn("530G - Mamelon tube acier galva EN 10241 BSP", "530G - Nipple tube steel galva EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "530n",
    slug: "serie-mamelons-et-manchons-acier-530n-mamelon-tube-acier-noir-en-10241-bsp",
    name: frEn("530N - Mamelon tube acier noir EN 10241 BSP", "530N - Nipple tube steel noir EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "530t3n",
    slug: "serie-mamelons-et-manchons-acier-530t3n-mamelon-tube-acier-noir-sans-soudure-en-10241-bsp",
    name: frEn("530T3N - Mamelon tube acier noir sans soudure EN 10241 BSP", "530T3N - Nipple tube steel noir sans soudure EN 10241 BSP"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "madn-demi",
    slug: "serie-mamelons-et-manchons-acier-madn-demi-manchon-acier-noir-bsp-en-10241",
    name: frEn("MADN - Demi-manchon acier noir BSP EN 10241", "MADN - Demi-Coupling steel noir BSP EN 10241"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "mag",
    slug: "serie-mamelons-et-manchons-acier-mag-manchon-acier-galva-bsp-en-10241",
    name: frEn("MAG - Manchon acier galva BSP EN 10241", "MAG - Coupling steel galva BSP EN 10241"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "maln",
    slug: "serie-mamelons-et-manchons-acier-maln-manchon-acier-noir-longueur-60mm-bsp-en-10241",
    name: frEn("MALN - Manchon acier noir longueur 60mm BSP EN 10241", "MALN - Coupling steel noir longueur 60mm BSP EN 10241"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "man",
    slug: "serie-mamelons-et-manchons-acier-man-manchon-acier-noir-bsp-en-10241",
    name: frEn("MAN - Manchon acier noir BSP EN 10241", "MAN - Coupling steel noir BSP EN 10241"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
