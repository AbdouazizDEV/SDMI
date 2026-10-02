import { getLocale, getTranslations } from "next-intl/server";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { SectorEnvironmentBlock } from "@/components/features/sectors/sector-environment-block";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import { pickLocalized } from "@/lib/home/pick-localized";
import {
  getSectorImagePath,
  sectorBlockKeys,
  sectorSlugToBlock,
} from "@/lib/sectors/sector-config";
import type { SiteLocale } from "@/lib/site";
import { siteAssets } from "@/lib/images/site-assets";

export async function SectorsLandingPage() {
  const t = await getTranslations("Sectors");
  const locale = (await getLocale()) as SiteLocale;
  const stats = t.raw("stats") as { label: string; value: string }[];

  return (
    <PageMain>
      <CompanyPageLayout
        breadcrumbHome={t("breadcrumbHome")}
        breadcrumbCurrent={t("breadcrumbCurrent")}
        breadcrumbLabel={t("breadcrumbLabel")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        heroAside={
          <div className="sdmi-surface-card sdmi-surface-card-accent w-full max-w-lg overflow-hidden justify-self-center lg:justify-self-end">
            <CatalogTaxonomyMedia
              storagePath={siteAssets.mainSlider.robinetterieIndustrielle}
              alt={t("title")}
              priority
              variant="hero"
              className="aspect-video max-w-none min-h-[200px]"
            />
          </div>
        }
        className="space-y-14 lg:space-y-16"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <div className="sdmi-trust-tile h-full p-5 text-center">
                <p className="font-heading text-cta text-xl font-bold md:text-2xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <section aria-labelledby="sectors-grid-heading">
          <h2
            id="sectors-grid-heading"
            className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl"
          >
            {t("gridTitle")}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {legacyCatalogNavigation.sectors.map((sector) => {
              const title = pickLocalized(sector.name, locale);
              const imagePath = getSectorImagePath(sector.slug);
              const blockKey = sectorSlugToBlock[sector.slug];
              const description = blockKey
                ? t(`blocks.${blockKey}.body`)
                : null;

              return (
                <li key={sector.slug} className="h-full min-w-0">
                  <MediaLinkCard
                    href={`/secteurs/${sector.slug}`}
                    title={title}
                    description={description}
                    footerLinkLabel={t("exploreSector")}
                    media={
                      <CatalogTaxonomyMedia
                        storagePath={imagePath}
                        alt={title}
                        variant="card"
                        className="w-full"
                      />
                    }
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="sectors-environments-heading">
          <h2
            id="sectors-environments-heading"
            className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl"
          >
            {t("environmentsTitle")}
          </h2>
          <div className="space-y-8 lg:space-y-10">
            {sectorBlockKeys.map((key, index) => (
              <SectorEnvironmentBlock
                key={key}
                id={`secteur-${key}`}
                blockKey={key}
                reverse={index % 2 === 1}
                eyebrow={t(`blocks.${key}.eyebrow`)}
                title={t(`blocks.${key}.title`)}
                body={t(`blocks.${key}.body`)}
                standards={t(`blocks.${key}.standards`)}
                recommendedTitle={t("recommendedTitle")}
                refsCta={t("refsCta")}
                quoteCta={t("quoteCta")}
                whatsappCta={t("whatsappCta")}
              />
            ))}
          </div>
        </section>
      </CompanyPageLayout>

      <CompanyFinalCta />
    </PageMain>
  );
}
