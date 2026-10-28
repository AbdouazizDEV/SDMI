import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "raccords-polypropylene";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const raccordsPolypropyleneRanges: CatalogRangeSeed[] = [
  base({
    reference: "1000",
    slug: "serie-raccords-polypropylene-1000-raccord-polypropylene-haute-densite-droit-male-reduit-40-1pouces",
    name: frEn("1000 - Raccord polypropylène haute densité droit mâle réduit 40-1&#039;&#039;", "1000 - Fitting polypropylène haute densité droit mâle réduit 40-1&#039;&#039;"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1001",
    slug: "serie-raccords-polypropylene-1001-raccord-polypropylene-haute-densite-a-serrage-exterieur-droit-male",
    name: frEn("1001 - Raccord polypropylène haute densité à serrage exterieur droit mâle", "1001 - Fitting polypropylène haute densité à serrage exterieur droit mâle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1002",
    slug: "serie-raccords-polypropylene-1002-raccord-polypropylene-haute-densite-droit-male-augmente",
    name: frEn("1002 - Raccord polypropylène haute densité droit mâle augmenté", "1002 - Fitting polypropylène haute densité droit mâle augmenté"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1003",
    slug: "serie-raccords-polypropylene-1003-raccord-polypropylene-haute-densite-droit-femelle",
    name: frEn("1003 - Raccord polypropylène haute densité droit femelle", "1003 - Fitting polypropylène haute densité droit femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1005",
    slug: "serie-raccords-polypropylene-1005-raccord-polypropylene-haute-densite-manchon-d-accouplement",
    name: frEn("1005 - Raccord polypropylène haute densité manchon d&#039;accouplement", "1005 - Fitting polypropylène haute densité Coupling d&#039;accouplement"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1007",
    slug: "serie-raccords-polypropylene-1007-raccord-polypropylene-haute-densite-a-serrage-exterieur-en-t",
    name: frEn("1007 - Raccord polypropylène haute densité à serrage exterieur en T", "1007 - Fitting polypropylène haute densité à serrage exterieur en T"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1009",
    slug: "serie-raccords-polypropylene-1009-raccord-polypropylene-haute-densite-en-t-taraude-femelle",
    name: frEn("1009 - Raccord polypropylène haute densité en T taraudé femelle", "1009 - Fitting polypropylène haute densité en T taraudé femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1012",
    slug: "serie-raccords-polypropylene-1012-raccord-polypropylene-haute-densite-manchon-coude-90degres",
    name: frEn("1012 - Raccord polypropylène haute densité manchon coudé 90°", "1012 - Fitting polypropylène haute densité Coupling coudé 90°"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1013",
    slug: "serie-raccords-polypropylene-1013-raccord-polypropylene-haute-densite-coude-90degres-femelle",
    name: frEn("1013 - Raccord polypropylène haute densité coudé 90° femelle", "1013 - Fitting polypropylène haute densité coudé 90° femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1014",
    slug: "serie-raccords-polypropylene-1014-raccord-polypropylene-haute-densite-coude-90degres",
    name: frEn("1014 - Raccord polypropylène haute densité coudé 90°", "1014 - Fitting polypropylène haute densité coudé 90°"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
  base({
    reference: "1017",
    slug: "serie-raccords-polypropylene-1017-raccord-polypropylene-haute-densite-en-t-filete-male",
    name: frEn("1017 - Raccord polypropylène haute densité en T fileté mâle", "1017 - Fitting polypropylène haute densité en T fileté mâle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "1020",
    slug: "serie-raccords-polypropylene-1020-raccord-polypropylene-haute-densite-bouchon",
    name: frEn("1020 - Raccord polypropylène haute densité bouchon", "1020 - Fitting polypropylène haute densité bouchon"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Polypropylène", "Polypropylene"),
    connectionType: "compression", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "compression", documentCount: 4 },
  }),
];
