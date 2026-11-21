import { isCatalogSubfamilyBrowseable } from "@/lib/catalog/catalog-readiness";
import type { CatalogNavFamily } from "@/lib/catalog/navigation";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

type SubfamilyNavGroup = {
  id: string;
  label: LocalizedText;
  subfamilySlugs: string[];
};

function frEn(fr: string, en: string): LocalizedText {
  return { fr, en };
}

/** Regroupements affichés dans le hero famille (navigation compacte). */
const familySubfamilyNavGroups: Record<string, SubfamilyNavGroup[]> = {
  accessoires: [
    {
      id: "brides",
      label: frEn(
        "Brides EN 1092, ASME, inox et réseau eau",
        "EN 1092, ASME, stainless and water network flanges",
      ),
      subfamilySlugs: [
        "brides-asme-b16-5-a105",
        "brides-inox-en1092-asme",
        "brides-acier-galvanise",
        "brides-a-collerettes",
        "brides-plates",
        "brides-pleines",
        "brides-taraudees",
        "brides-reseau-eau",
      ],
    },
    {
      id: "raccords-specifiques",
      label: frEn(
        "Raccords DECA et polypropylène",
        "DECA and polypropylene fittings",
      ),
      subfamilySlugs: ["raccords-deca", "raccords-polypropylene"],
    },
    {
      id: "compensateurs",
      label: frEn(
        "Manchons compensateurs élastomère, métalliques et antibruit",
        "Rubber, metal and noise-reducing expansion joints",
      ),
      subfamilySlugs: [
        "manchons-compensateurs-elastomere",
        "manchons-compensateurs-teguflex",
        "manchons-compensateurs-metalliques",
        "manchons-compensateurs-antibruit",
      ],
    },
    {
      id: "reseau-eau-accessoires",
      label: frEn(
        "Adaptateurs et manchons réseau eau",
        "Water network adapters and couplings",
      ),
      subfamilySlugs: ["adaptateurs-de-brides-eau", "manchons-reseau-eau"],
    },
  ],
};

export type ResolvedSubfamilyNavItem = {
  key: string;
  label: string;
  href: string | null;
  browseable: boolean;
  /** Sous-famille utilisée pour le visuel (1er produit de la gamme). */
  showcaseSubfamilySlug: string | null;
};

export const FAMILY_SUBFAMILY_NAV_TWO_COLUMN_MIN = 6;

export function resolveFamilySubfamilyNavItems(
  family: CatalogNavFamily,
  locale: SiteLocale,
): ResolvedSubfamilyNavItem[] {
  const groups = familySubfamilyNavGroups[family.slug];
  const familySlug = family.slug;

  if (!groups) {
    return family.subfamilies.map((sub) => {
      const browseable = isCatalogSubfamilyBrowseable(sub.slug);
      return {
        key: sub.slug,
        label: pickLocalized(sub.name, locale),
        href: browseable ? `/produits/${familySlug}/${sub.slug}` : null,
        browseable,
        showcaseSubfamilySlug: sub.slug,
      };
    });
  }

  return groups.map((group) => {
    const browseableSlug = group.subfamilySlugs.find(
      (slug) =>
        isCatalogSubfamilyBrowseable(slug) &&
        family.subfamilies.some((sub) => sub.slug === slug),
    );
    const showcaseSlug =
      browseableSlug ??
      group.subfamilySlugs.find((slug) =>
        family.subfamilies.some((sub) => sub.slug === slug),
      ) ??
      null;
    return {
      key: group.id,
      label: pickLocalized(group.label, locale),
      href: browseableSlug ? `/produits/${familySlug}/${browseableSlug}` : null,
      browseable: Boolean(browseableSlug),
      showcaseSubfamilySlug: showcaseSlug,
    };
  });
}
