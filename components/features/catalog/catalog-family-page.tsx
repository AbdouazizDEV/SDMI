import { getLocale, getTranslations } from "next-intl/server";
import { CheckCircle2Icon } from "lucide-react";

import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { PageMain } from "@/components/layout/page-main";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { CatalogSubfamilyEmpty } from "@/components/features/catalog/catalog-subfamily-empty";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import { isCatalogSubfamilyBrowseable } from "@/lib/catalog/catalog-readiness";
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
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-12">
          <div className="min-w-0">
            <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
              {t("eyebrow")}
            </p>
            <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
              {familyName}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
              {t("familyDescription")}
            </p>
            <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-emerald-600/20">
              <CheckCircle2Icon aria-hidden className="size-4 text-emerald-600" />
              {t("stockBadge")}
            </p>
          </div>

          {familyImage ? (
            <div className="sdmi-surface-card sdmi-surface-card-accent w-full max-w-md overflow-hidden justify-self-center lg:max-w-none lg:justify-self-end">
              <CatalogTaxonomyMedia
                storagePath={familyImage}
                alt={familyName}
                priority
                variant="hero"
                className="aspect-video max-w-none min-h-[200px]"
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <h2 className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl">
          {t("subfamiliesTitle")}
        </h2>
        {family.subfamilies.length === 0 ? (
          <div className="max-w-3xl">
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              {t("familySkeletonHint")}
            </p>
            <CatalogSubfamilyEmpty />
          </div>
        ) : (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {family.subfamilies.map((sub) => {
              const title = pickLocalized(sub.name, locale);
              const imagePath = resolveProductShowcaseImage(sub.slug, family.slug);
              const browseable = isCatalogSubfamilyBrowseable(sub.slug);
              const soonLabel = t("comingSoon");

              return (
                <li key={sub.slug} className="h-full min-w-0">
                  <MediaLinkCard
                    href={
                      browseable
                        ? `/produits/${family.slug}/${sub.slug}`
                        : undefined
                    }
                    disabled={!browseable}
                    disabledHint={soonLabel}
                    title={title}
                    titleClassName="text-xs leading-snug md:text-sm"
                    footerLinkLabel={browseable ? t("viewProduct") : undefined}
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
        )}
      </div>
    </PageMain>
  );
}
