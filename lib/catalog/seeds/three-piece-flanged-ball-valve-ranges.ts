import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-3-pieces-a-brides";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Robinets 3 pièces à brides — platine ISO, sécurité feu, gamme 730/731. */
export const threePieceFlangedBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "7034",
    slug: "serie-7034-robinet-a-tournant-spherique-3-pieces-a-brides-pn40-inox-securite-feu-liste-a-brides",
    name: frEn("7034 - Robinet à tournant sphérique 3 pièces à brides PN40 inox sécurité feu", "7034 - Three-piece ball valve three-piece flanged PN40 stainless sécurité feu"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "703dm4",
    slug: "serie-703dm4-robinet-a-tournant-spherique-3-pieces-iso5211-securite-feu-pn40-liste-a-brides",
    name: frEn("703DM4-Robinet à tournant sphérique 3 pièces ISO5211 sécurité feu PN40", "703DM4-Three-piece ball valve three-piece ISO5211 sécurité feu PN40"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox / acier", "Stainless / steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "710",
    slug: "serie-710-robinet-a-tournant-spherique-acier-3-pieces-pn40-avec-platine-iso-liste-a-brides",
    name: frEn("710 - Robinet à tournant sphérique acier 3 pièces PN40 avec platine ISO", "710 - Three-piece ball valve steel three-piece PN40 avec platine ISO"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "711",
    slug: "serie-711-robinet-a-tournant-spherique-inox-3-pieces-a-brides-avec-platine-iso-liste-a-brides",
    name: frEn("711 - Robinet à tournant sphérique inox 3 pièces à brides avec platine ISO", "711 - Three-piece ball valve stainless three-piece flanged avec platine ISO"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "730",
    slug: "serie-730-robinet-a-tournant-spherique-3-pieces-a-brides-acier",
    name: frEn("730 - Robinet à tournant sphérique 3 pièces à brides acier", "730 - Three-piece ball valve three-piece flanged steel"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Acier", "Steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "731",
    slug: "serie-731-robinet-a-tournant-spherique-3-pieces-a-brides-inox",
    name: frEn("731 - Robinet à tournant sphérique 3 pièces à brides inox", "731 - Three-piece ball valve three-piece flanged stainless"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "981061",
    slug: "serie-981061-rehausse-inox-304-pour-vanne-3-pieces-790-796",
    name: frEn("981061 - Réhausse INOX 304 pour vanne 3 pièces 790/796", "981061 - Réhausse stainless 304 pour vanne three-piece 790/796"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "981074",
    slug: "serie-981074-poignee-homme-mort-pour-robinet-avec-platine-iso-5211",
    name: frEn("981074 - Poignée homme mort pour robinet avec Platine ISO 5211", "981074 - Poignée homme mort pour robinet avec Platine ISO 5211"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox / acier", "Stainless / steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "983047",
    slug: "serie-983047-rehausse-inox-iso-5211-pour-vannes-702dm-703dm",
    name: frEn("983047 - Réhausse inox ISO 5211 pour vannes 702DM-703DM", "983047 - Réhausse stainless ISO 5211 pour vannes 702DM-703DM"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "983048",
    slug: "serie-983048-volant-ovale-cadenassable-inox-304-pour-vannes-702dm-703dm",
    name: frEn("983048 - Volant ovale cadenassable inox 304 pour vannes 702DM-703DM", "983048 - Volant ovale cadenassable stainless 304 pour vannes 702DM-703DM"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox", "Stainless steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "983058",
    slug: "serie-983058-gaine-bleue-pour-poignee-de-vannes-ref-790-796",
    name: frEn("983058 - Gaine bleue pour poignée de vannes Ref.790/796", "983058 - Gaine bleue pour poignée de vannes Ref.790/796"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox / acier", "Stainless / steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "M020",
    slug: "serie-m020-montage-rehausse-volant-ou-systeme-de-cadenassage",
    name: frEn("M020 - Montage réhausse, volant ou système de cadenassage", "M020 - Montage réhausse, volant ou système de cadenassage"),
    description: frEn(
      "Robinet 3 pièces à brides — gamme catalogue.",
      "Three-piece flanged ball valve — catalog range.",
    ),
    dn: null, pn: "PN40", material: frEn("Inox / acier", "Stainless / steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
