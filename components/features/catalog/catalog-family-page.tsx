import { getLocale, getTranslations } from "next-intl/server";
import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogFamilyHeroAside } from "@/components/features/catalog/catalog-family-hero-aside";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { PageMain } from "@/components/layout/page-main";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { CatalogSubfamilyEmpty } from "@/components/features/catalog/catalog-subfamily-empty";
import { resolveFamilySubfamilyNavItems } from "@/lib/catalog/catalog-family-subfamily-nav";
import {
  resolveProductShowcaseImage,
  resolveSubfamilyShowcaseImage,
} from "@/lib/catalog/product-showcase-image";
import type { CatalogNavFamily } from "@/lib/catalog/navigation";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type CatalogFamilyPageProps = {
  family: CatalogNavFamily;
};

export async function CatalogFamilyPage({ family }: CatalogFamilyPageProps) {
  const t = await getTranslations("Catalog");
  const locale = (await getLocale()) as SiteLocale;
  const familyName = pickLocalized(family.name, locale);
  const familyImage = resolveProductShowcaseImage(undefined, family.slug);
  const subfamilyCards = resolveFamilySubfamilyNavItems(family, locale);

  return (
    <PageMain>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <CatalogBreadcrumbs
            ariaLabel={t("breadcrumbLabel")}
            homeLabel={t("breadcrumbHome")}
            productsLabel={t("breadcrumbCurrent")}
            items={[{ label: familyName }]}
          />
        </div>
      </div>

      <div className="border-border/60 border-b bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-6 lg:py-12">
          <CatalogFamilyHeroAside
            family={family}
            familyName={familyName}
            locale={locale}
          />

          {familyImage ? (
            <div className="sdmi-surface-card sdmi-surface-card-accent flex w-full min-w-0 overflow-hidden rounded-2xl lg:min-h-[606px]">
              <CatalogTaxonomyMedia
                storagePath={familyImage}
                alt={familyName}
                priority
                variant="hero"
                className="size-full max-w-none rounded-2xl lg:min-h-[606px]"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <h2 className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl">
          {t("subfamiliesTitle")}
        </h2>
        {subfamilyCards.length === 0 ? (
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              {t("familySkeletonHint")}
            </p>
            <CatalogSubfamilyEmpty />
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subfamilyCards.map((item) => {
              const imagePath =
                item.showcaseSubfamilySlug != null
                  ? resolveSubfamilyShowcaseImage(
                      family.slug,
                      item.showcaseSubfamilySlug,
                    )
                  : null;
              const soonLabel = t("comingSoon");

              return (
                <li key={item.key} className="h-full min-w-0">
                  <MediaLinkCard
                    href={item.href ?? undefined}
                    disabled={!item.browseable}
                    disabledHint={soonLabel}
                    title={item.label}
                    titleClassName="text-xs leading-snug md:text-sm"
                    footerLinkLabel={item.browseable ? t("viewProduct") : undefined}
                    media={
                      <CatalogTaxonomyMedia
                        storagePath={imagePath}
                        alt={item.label}
                        variant="card"
                        className="w-full"
                      />
                    }
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </PageMain>
  );
}
