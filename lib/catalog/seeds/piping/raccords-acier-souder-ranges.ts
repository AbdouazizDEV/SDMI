import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "raccords-acier-a-souder";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const raccordsAcierSouderRanges: CatalogRangeSeed[] = [
  base({
    reference: "c3dg",
    slug: "serie-raccords-acier-a-souder-c3dg-courbe-3d-acier-a-souder-90degres-sans-soudure-galva-en10253-1",
    name: frEn("C3DG - Courbe 3D acier à souder 90° sans soudure galva EN10253-1", "C3DG - Courbe 3D steel à souder 90° sans soudure galva EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "c3dn",
    slug: "serie-raccords-acier-a-souder-c3dn-courbe-3d-90degres-a-souder-acier-noir-en-2",
    name: frEn("C3DN - Courbe 3D 90° à souder acier noir EN-2", "C3DN - Courbe 3D 90° à souder steel noir EN-2"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "c3dn",
    slug: "serie-raccords-acier-a-souder-c3dn-courbe-3d-acier-a-souder-90degres-sans-soudure-noir-en10253-1",
    name: frEn("C3DN - Courbe 3D acier à souder 90° sans soudure noir EN10253-1", "C3DN - Courbe 3D steel à souder 90° sans soudure noir EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "c3dnr",
    slug: "serie-raccords-acier-a-souder-c3dnr-courbe-3d-acier-a-souder-180degres-sans-soudure-noir-en10253-1",
    name: frEn("C3DNR - Courbe 3D acier à souder 180° sans soudure noir EN10253-1", "C3DNR - Courbe 3D steel à souder 180° sans soudure noir EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "c5dg",
    slug: "serie-raccords-acier-a-souder-c5dg-courbe-5d-acier-a-souder-90degres-sans-soudure-galva-en10253-1",
    name: frEn("C5DG - Courbe 5D acier à souder 90° sans soudure galva EN10253-1", "C5DG - Courbe 5D steel à souder 90° sans soudure galva EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "c5dn",
    slug: "serie-raccords-acier-a-souder-c5dn-courbe-5d-acier-a-souder-90degres-sans-soudure-noir-en10253-1",
    name: frEn("C5DN - Courbe 5D acier à souder 90° sans soudure noir EN10253-1", "C5DN - Courbe 5D steel à souder 90° sans soudure noir EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "fbg",
    slug: "serie-raccords-acier-a-souder-fbg-fond-bombe-a-souder-acier-galvanise-sans-soudure-en-10253-1",
    name: frEn("FBG - Fond bombé à souder acier galvanisé sans soudure EN 10253-1", "FBG - Fond bombé à souder steel galvanisé sans soudure EN 10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "fbn",
    slug: "serie-raccords-acier-a-souder-fbn-fond-bombe-a-souder-acier-noir-sans-soudure-en-10253-1",
    name: frEn("FBN - Fond bombé à souder acier noir sans soudure EN 10253-1", "FBN - Fond bombé à souder steel noir sans soudure EN 10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "rsg",
    slug: "serie-raccords-acier-a-souder-rsg-reduction-concentrique-a-souder-forme1-acier-galva-en10253-1",
    name: frEn("RSG - Réduction concentrique à souder forme1 acier galva EN10253-1", "RSG - Réduction concentrique à souder forme1 steel galva EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "rsn",
    slug: "serie-raccords-acier-a-souder-rsn-reduction-concentrique-a-souder-forme1-acier-noir-en10253-2",
    name: frEn("RSN - Réduction concentrique à souder forme1 acier noir EN10253-2", "RSN - Réduction concentrique à souder forme1 steel noir EN10253-2"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "rsn",
    slug: "serie-raccords-acier-a-souder-rsn-reduction-concentrique-a-souder-forme1-ou-2-acier-noir-en10253-1",
    name: frEn("RSN - Réduction concentrique à souder forme1 ou 2 acier noir EN10253-1", "RSN - Réduction concentrique à souder forme1 ou 2 steel noir EN10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "rsne",
    slug: "serie-raccords-acier-a-souder-rsne-reduction-excentrique-a-souder-acier-noir-en10253-2",
    name: frEn("RSNE - Réduction excentrique à souder acier noir EN10253-2", "RSNE - Réduction excentrique à souder steel noir EN10253-2"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "tasg",
    slug: "serie-raccords-acier-a-souder-tasg-te-egal-a-souder-acier-galva-sans-soudure-en-10253-1",
    name: frEn("TASG - Té égal à souder acier galva sans soudure EN 10253-1", "TASG - Té égal à souder steel galva sans soudure EN 10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "tasn",
    slug: "serie-raccords-acier-a-souder-tasn-te-egal-a-souder-acier-noir-sans-soudure-en-10253-1",
    name: frEn("TASN - Té égal à souder acier noir sans soudure EN 10253-1", "TASN - Té égal à souder steel noir sans soudure EN 10253-1"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
  base({
    reference: "tasn",
    slug: "serie-raccords-acier-a-souder-tasn-te-egal-a-souder-acier-noir-sans-soudure-en-10253-2",
    name: frEn("TASN - Té égal à souder acier noir sans soudure EN 10253-2", "TASN - Té égal à souder steel noir sans soudure EN 10253-2"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier carbone", "Carbon steel"),
    connectionType: "butt-weld", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "butt-weld", documentCount: 4 },
  }),
];
