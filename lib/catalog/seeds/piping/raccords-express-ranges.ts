import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "accessoires";
const SUB = "raccords-express";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const raccordsExpressRanges: CatalogRangeSeed[] = [
  base({
    reference: "2280",
    slug: "serie-raccords-express-2280-raccord-express-laiton-joint-nbr-cannele-a-collerette",
    name: frEn("2280 - Raccord express laiton joint NBR cannelé à collerette", "2280 - Fitting express brass joint NBR cannelé à collerette"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2281",
    slug: "serie-raccords-express-2281-raccord-express-laiton-joint-nbr-male",
    name: frEn("2281 - Raccord express laiton joint NBR mâle", "2281 - Fitting express brass joint NBR mâle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2282",
    slug: "serie-raccords-express-2282-raccord-express-laiton-joint-nbr-femelle",
    name: frEn("2282 - Raccord express laiton joint NBR femelle", "2282 - Fitting express brass joint NBR femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2283",
    slug: "serie-raccords-express-2283-raccord-express-laiton-joint-nbr-bouchon-entre-griffes-41-mm",
    name: frEn("2283 - Raccord express laiton joint NBR bouchon entre griffes 41 mm", "2283 - Fitting express brass joint NBR bouchon entre griffes 41 mm"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2285",
    slug: "serie-raccords-express-2285-raccord-express-laiton-sans-joint-cannele-a-collerette",
    name: frEn("2285 - Raccord express laiton sans joint cannelé à collerette", "2285 - Fitting express brass sans joint cannelé à collerette"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2286",
    slug: "serie-raccords-express-2286-raccord-express-laiton-sans-joint-male",
    name: frEn("2286 - Raccord express laiton sans joint mâle", "2286 - Fitting express brass sans joint mâle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2287",
    slug: "serie-raccords-express-2287-raccord-express-laiton-sans-joint-femelle",
    name: frEn("2287 - Raccord express laiton sans joint femelle", "2287 - Fitting express brass sans joint femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2288",
    slug: "serie-raccords-express-2288-raccord-express-laiton-sans-joint-bouchon-entre-griffes-41-mm",
    name: frEn("2288 - Raccord express laiton sans joint bouchon entre griffes 41 mm", "2288 - Fitting express brass sans joint bouchon entre griffes 41 mm"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2290",
    slug: "serie-raccords-express-2290-raccord-express-inox-joint-fkm-cannele",
    name: frEn("2290 - Raccord express inox joint FKM cannelé", "2290 - Fitting express stainless joint FKM cannelé"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2291",
    slug: "serie-raccords-express-2291-raccord-express-inox-joint-fkm-male",
    name: frEn("2291 - Raccord express inox joint FKM mâle", "2291 - Fitting express stainless joint FKM mâle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2292",
    slug: "serie-raccords-express-2292-raccord-express-inox-joint-fkm-femelle",
    name: frEn("2292 - Raccord express inox joint FKM femelle", "2292 - Fitting express stainless joint FKM femelle"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "2293",
    slug: "serie-raccords-express-2293-raccord-express-inox-joint-fkm-bouchon-longueur-47",
    name: frEn("2293 - Raccord express inox joint FKM bouchon longueur 47", "2293 - Fitting express stainless joint FKM bouchon longueur 47"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier inoxydable", "Stainless steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "9830970",
    slug: "serie-raccords-express-9830970-joint-de-rechange-neoprene-22-raccord-express",
    name: frEn("9830970 - Joint de rechange Néoprène Ø22 Raccord Express", "9830970 - Joint de rechange Néoprène Ø22 Fitting Express"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "9830971",
    slug: "serie-raccords-express-9830971-joint-de-rechange-reduit-neoprene-16-raccord-express",
    name: frEn("9830971 - Joint de rechange Réduit Néoprène Ø16 Raccord Express", "9830971 - Joint de rechange Réduit Néoprène Ø16 Fitting Express"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "9830983",
    slug: "serie-raccords-express-9830983-joint-de-rechange-reduit-nbr-noir-16-raccord-express",
    name: frEn("9830983 - Joint de rechange Réduit NBR noir Ø16 Raccord Express", "9830983 - Joint de rechange Réduit NBR noir Ø16 Fitting Express"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "9830984",
    slug: "serie-raccords-express-9830984-joint-de-rechange-nbr-noir-22-raccord-express",
    name: frEn("9830984 - Joint de rechange NBR noir Ø22 Raccord Express", "9830984 - Joint de rechange NBR noir Ø22 Fitting Express"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "9830986",
    slug: "serie-raccords-express-9830986-joint-de-rechange-reduit-fkm-15-raccord-express",
    name: frEn("9830986 - Joint de rechange Réduit FKM Ø15 Raccord Express", "9830986 - Joint de rechange Réduit FKM Ø15 Fitting Express"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier", "Steel"),
    connectionType: "mechanical-coupling", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "mechanical-coupling", documentCount: 4 },
  }),
  base({
    reference: "98440",
    slug: "serie-raccords-express-98440-collier-de-serrage-a-griffes-acier-zingue",
    name: frEn("98440 - Collier de serrage à griffes - acier zingué", "98440 - Saddle clamp de serrage à griffes - steel zingué"),
    description: frEn(
      "Gamme tuyauterie et accessoires — catalogue SDMI.",
      "Piping & accessories range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Acier galvanisé", "Galvanized steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["water", "building", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
