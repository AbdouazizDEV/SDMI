import { getLocale, getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/features/home/section-heading";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import { isCatalogFamilyBrowseable } from "@/lib/catalog/catalog-readiness";
import { HomeSectionViewAllLink } from "@/components/features/home/home-section-view-all-link";
import type { HomeFamilyCard } from "@/lib/home/get-home-page-data";
import { HOME_SECTION_VISIBLE_CARDS } from "@/lib/home/home-section-limits";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type HomeFamiliesSectionProps = {
  families: HomeFamilyCard[];
};

export async function HomeFamiliesSection({ families }: HomeFamiliesSectionProps) {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;
  const visibleFamilies = families.slice(0, HOME_SECTION_VISIBLE_CARDS);
  const hasMore = families.length > HOME_SECTION_VISIBLE_CARDS;

  return (
    <SectionShell variant="default" labelledBy="home-families-heading">
      <SectionHeading
        id="home-families-heading"
        title={t("families.title")}
        description={t("families.description") || undefined}
        className="mb-10"
      />
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {visibleFamilies.map((family) => {
          const title = pickLocalized(family.name, locale);
          const countLabel = t("families.referenceCount", {
            count: family.productCount,
          });

          const browseable = isCatalogFamilyBrowseable(family.slug);
          const soonLabel = t("families.comingSoon");

          return (
            <li key={family.slug} className="h-full">
              <MediaLinkCard
                href={browseable ? `/produits/${family.slug}` : undefined}
                disabled={!browseable}
                disabledHint={soonLabel}
                title={title}
                footerLinkLabel={browseable ? t("families.explore") : undefined}
                media={
                  <CatalogTaxonomyMedia
                    storagePath={family.imageStoragePath}
                    alt={title}
                    variant="card"
                    className="min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]"
                  />
                }
                footer={<span className="font-medium">{countLabel}</span>}
              />
            </li>
          );
        })}
      </ul>
      {hasMore ? (
        <HomeSectionViewAllLink href="/produits" label={t("families.viewAll")} />
      ) : null}
    </SectionShell>
  );
}
