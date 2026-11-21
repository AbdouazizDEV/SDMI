import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "protection-regulation-des-reseaux";
const SUB = "disconnecteur-antipollution-scudo";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

export const scudoDisconnecteurRanges: CatalogRangeSeed[] = [
  base({
    reference: "920",
    slug: "serie-920-mallette-de-controle-pour-disconnecteur-controlableba-raccords-dn1-2pouces-3-4pouces",
    name: frEn("920 - Mallette de contrôle pour disconnecteur controlableBA raccords DN1/2''-3/4''", "920 - Mallette de contrôle pour Backflow preventer controlableBA raccords DN1/2''-3/4''"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "931",
    slug: "serie-931-disconnecteur-scudo-antipollution-controlable-ba575-fonte-pn10",
    name: frEn("931 - Disconnecteur Scudo antipollution contrôlable BA575 Fonte PN10", "931 - Backflow preventer Scudo anti-pollution contrôlable BA575 cast iron PN10"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: "PN10", material: frEn("Fonte", "Cast iron"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "940",
    slug: "serie-940-disconnecteur-scudo-antipollution-non-controlable-ca573-horizontal-4ms",
    name: frEn("940 - Disconnecteur Scudo antipollution non contrôlable CA573 horizontal 4MS", "940 - Backflow preventer Scudo anti-pollution non contrôlable CA573 horizontal 4MS"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "950",
    slug: "serie-950-disconnecteur-scudo-ba574-antipollution-controlable-horizontal",
    name: frEn("950 - Disconnecteur Scudo BA574 antipollution contrôlable horizontal", "950 - Backflow preventer Scudo BA574 anti-pollution contrôlable horizontal"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "9501",
    slug: "serie-9501-kit-disconnecteur-scudo-antipollution-controlable-horizontal",
    name: frEn("9501 - Kit disconnecteur Scudo antipollution contrôlable horizontal", "9501 - Kit Backflow preventer Scudo anti-pollution contrôlable horizontal"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "955",
    slug: "serie-955-disconnecteur-antipollution-ba-580-horizontal-vertical-4ms",
    name: frEn("955 - Disconnecteur antipollution BA 580 horizontal/vertical 4MS", "955 - Backflow preventer anti-pollution BA 580 horizontal/vertical 4MS"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "95501",
    slug: "serie-95501-kit-monte-nf-disconnecteur-antipollution-ba580",
    name: frEn("95501 - Kit monté NF Disconnecteur antipollution BA580", "95501 - Kit monté NF Backflow preventer anti-pollution BA580"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "960",
    slug: "serie-960-groupe-de-remplissage-auto-avec-disconnecteur-ba",
    name: frEn("960 - Groupe de Remplissage Auto avec Disconnecteur BA", "960 - Groupe de Remplissage Auto avec Backflow preventer BA"),
    description: frEn(
      "Gamme protection et régulation des réseaux — catalogue SDMI.",
      "Network protection & regulation range — SDMI catalog.",
    ),
    dn: null, pn: null, material: frEn("Laiton", "Brass"),
    connectionType: "threaded", standards: ["en10204"], sectorTags: ["water", "building"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];
