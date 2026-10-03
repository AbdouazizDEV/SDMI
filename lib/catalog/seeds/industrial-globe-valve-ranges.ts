import type { CatalogRangeSeed } from "@/lib/catalog/range-product";
import { petroleumGlobeBellowsRanges } from "@/lib/catalog/seeds/petroleum-globe-bellows-ranges";

const FAMILY = "robinets-soupape-pointeau";
const SUB = "robinets-a-soupape";

/** Séries « robinets à soupape » aussi présentes en robinetterie pétrole. */
const SOUPAPE_FROM_PETROLEUM = new Set([
  "402", "403", "404", "405", "406", "412", "413", "414", "416", "417", "418",
  "419", "420", "421", "440", "441", "443", "444", "452", "453", "471",
]);

function frEn(fr: string, en: string) {
  return { fr, en };
}

function slug(ref: string, suffix: string) {
  return `serie-${ref}-robinet-soupape-${suffix}`;
}

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

function remapFromPetroleum(seed: CatalogRangeSeed): CatalogRangeSeed {
  const suffix = seed.slug.replace(/^serie-\d+-robinet-soupape-/, "");
  return {
    ...seed,
    familySlug: FAMILY,
    subfamilySlug: SUB,
    slug: `serie-${seed.reference}-gamme-soupape-${suffix}`,
    certified31: seed.certified31 ?? false,
  };
}

const fromPetroleum = petroleumGlobeBellowsRanges
  .filter((s) => SOUPAPE_FROM_PETROLEUM.has(s.reference))
  .map(remapFromPetroleum);

/** Gammes hors pétrole — bronze, fonte, soufflet réseaux eau / chauffage. */
const dedicated: CatalogRangeSeed[] = [
  base({
    reference: "451",
    slug: slug("451", "bronze-chapeau-union-metal"),
    name: frEn(
      "Robinet à soupape bronze taraudé — chapeau union métal/métal",
      "Threaded bronze globe valve — union bonnet metal/metal",
    ),
    description: frEn("Robinet à passage droit, eau et fluides neutres.", "Straight pattern, water and neutral fluids."),
    dn: null,
    pn: null,
    material: frEn("Bronze", "Bronze"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "454",
    slug: slug("454", "bronze-chapeau-union-ptfe"),
    name: frEn(
      "Robinet à soupape bronze taraudé — chapeau union PTFE",
      "Threaded bronze globe valve — union bonnet PTFE",
    ),
    description: frEn("Siège PTFE, étanchéité renforcée.", "PTFE seat, enhanced sealing."),
    dn: null,
    pn: null,
    material: frEn("Bronze", "Bronze"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "460",
    slug: slug("460", "bronze-chapeau-visse-metal"),
    name: frEn(
      "Robinet à soupape bronze taraudé — chapeau vissé métal/métal",
      "Threaded bronze globe — screwed bonnet metal/metal",
    ),
    description: frEn("Gamme bronze taraudée réseaux bâtiment.", "Threaded bronze range for building services."),
    dn: null,
    pn: null,
    material: frEn("Bronze", "Bronze"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "462",
    slug: slug("462", "bronze-chapeau-visse-ptfe"),
    name: frEn(
      "Robinet à soupape bronze taraudé — chapeau vissé siège PTFE",
      "Threaded bronze globe — screwed bonnet PTFE seat",
    ),
    description: frEn("Siège PTFE, manœuvre volant.", "PTFE seat, handwheel operation."),
    dn: null,
    pn: null,
    material: frEn("Bronze", "Bronze"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
  base({
    reference: "470",
    slug: slug("470", "fonte-brides-pn16"),
    name: frEn("Robinet à soupape fonte à brides PN16", "Cast iron flanged globe valve PN16"),
    description: frEn("Sectionnement réseaux eau et chauffage.", "Isolation on water and heating networks."),
    dn: null,
    pn: "PN16",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN16", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base({
    reference: "472",
    slug: slug("472", "inox-soufflet-pn16-40"),
    name: frEn("Robinet à soupape inox à soufflet — PN16/40", "Stainless bellows globe valve — PN16/40"),
    description: frEn("Soufflet inox, fluides sensibles aux fuites.", "Stainless bellows, leak-sensitive fluids."),
    dn: null,
    pn: "PN40",
    material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water", "energy"],
    technicalSpecs: { pressureClass: "PN40", connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "475",
    slug: slug("475", "acier-soufflet-inox-pn40"),
    name: frEn("Robinet à soupape acier à soufflet inox PN40", "Steel globe with stainless bellows PN40"),
    description: frEn("Corps acier, soufflet inox, réseaux vapeur / eau chaude.", "Steel body, SS bellows, steam / hot water."),
    dn: null,
    pn: "PN40",
    material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water", "energy"],
    technicalSpecs: { pressureClass: "PN40", connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "4753",
    slug: slug("4753", "acier-soufflet-cpcu-pn40"),
    name: frEn("Robinet à soupape acier à soufflet inox CPCU PN40", "Steel bellows globe CPCU PN40"),
    description: frEn("Gamme réseaux urbains chauffage CPCU.", "District heating CPCU networks."),
    dn: null,
    pn: "PN40",
    material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water", "energy"],
    technicalSpecs: { pressureClass: "PN40", connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "476",
    slug: slug("476", "fonte-soufflet-inox-pn16-25"),
    name: frEn("Robinet à soupape fonte à soufflet inox PN16/25", "Cast iron bellows globe PN16/25"),
    description: frEn("Soufflet inox sur corps fonte, eau chaude.", "SS bellows on cast body, hot water."),
    dn: null,
    pn: "PN25",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water"],
    technicalSpecs: { pressureClass: "PN25", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base({
    reference: "479",
    slug: slug("479", "fonte-brides-300c-pn16"),
    name: frEn("Robinet à soupape fonte à brides −10 à 300 °C PN16", "Cast flanged globe −10 to 300 °C PN16"),
    description: frEn("Large plage thermique, régulation et isolement.", "Wide temperature range, control and isolation."),
    dn: null,
    pn: "PN16",
    material: frEn("Fonte", "Cast iron"),
    connectionType: "flanged-rf",
    standards: ["en10204"],
    sectorTags: ["water", "energy"],
    technicalSpecs: { pressureClass: "PN16", connection: "flanged-rf", bodyProcess: "cast", documentCount: 4 },
  }),
  base({
    reference: "485",
    slug: slug("485", "inox-chapeau-visse-ff"),
    name: frEn(
      "Robinet à soupape inox taraudé — chapeau vissé F/F",
      "Threaded stainless globe — screwed bonnet F/F",
    ),
    description: frEn("Inox, fluides corrosifs et process.", "Stainless, corrosive fluids and process."),
    dn: null,
    pn: null,
    material: frEn("Inox", "Stainless steel"),
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "agro"],
    technicalSpecs: { connection: "threaded", documentCount: 4 },
  }),
];

export const industrialGlobeValveRanges: CatalogRangeSeed[] = [
  ...fromPetroleum,
  ...dedicated,
];
