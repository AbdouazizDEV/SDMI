import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "robinets-tournant-spherique-acier-inox";
const SUB = "robinets-tournant-spherique-sphere-arbree-jc";

function frEn(fr: string, en: string) { return { fr, en }; }

function base(
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };
}

/** Sphère arbrée JC — WCB, graphite / Devlon, Class 150–600. */
export const jcTrunnionBallValveRanges: CatalogRangeSeed[] = [
  base({
    reference: "2515AICG",
    slug: "serie-2515aicg-robinet-a-tournant-spherique-arbre-acier-moule-wcb-jc-graphite-class150",
    name: frEn("2515AICG-Robinet à tournant sphérique arbré acier moulé WCB JC graphite class150", "2515AICG-JC trunnion ball valve arbré steel moulé WCB JC graphite class150"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 150", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2530AICG",
    slug: "serie-2530aicg-robinet-a-tournant-spherique-arbre-acier-wcb-jc-graphite-class300-pn50",
    name: frEn("2530AICG-Robinet à tournant sphérique arbré acier WCB JC graphite class300 PN50", "2530AICG-JC trunnion ball valve arbré steel WCB JC graphite class300 PN50"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 300", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "2560AIDV",
    slug: "serie-2560aidv-robinet-a-tournant-spherique-arbre-acier-wcb-jc-devlon-class-600",
    name: frEn("2560AIDV - Robinet à tournant sphérique arbré acier WCB JC Devlon class 600", "2560AIDV - JC trunnion ball valve arbré steel WCB JC Devlon class 600"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 600", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "6015AICG",
    slug: "serie-6015aicg-robinet-a-tournant-spherique-arbre-acier-jc-graphite-class150-pn20",
    name: frEn("6015AICG - Robinet à tournant sphérique arbré acier JC graphite class150 PN20", "6015AICG - JC trunnion ball valve arbré steel JC graphite class150 PN20"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 150", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "6030AICG",
    slug: "serie-6030aicg-robinet-a-sphere-arbree-jc-a-brides-acier-class300-pn50",
    name: frEn("6030AICG- Robinet à sphère arbrée JC à brides acier Class300 PN50", "6030AICG- JC trunnion ball valve arbrée JC flanged steel Class300 PN50"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 300", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
  base({
    reference: "6060AIDV",
    slug: "serie-6060aidv-robinet-a-sphere-arbree-jc-a-brides-acier-class-600-2pouces",
    name: frEn("6060AIDV- Robinet à sphère arbrée JC à brides acier Class 600 2&#039;&#039;", "6060AIDV- JC trunnion ball valve arbrée JC flanged steel Class 600 2&#039;&#039;"),
    description: frEn(
      "Sphère arbrée étanchéité JC — gamme à brides.",
      "JC trunnion-mounted flanged ball valve range.",
    ),
    dn: null, pn: "Class 600", material: frEn("Acier WCB", "WCB steel"),
    connectionType: "flanged-rf", standards: ["en10204"], sectorTags: ["energy", "industry"],
    technicalSpecs: { connection: "flanged-rf", documentCount: 4 },
  }),
];
