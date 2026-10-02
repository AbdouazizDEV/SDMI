import { Suspense } from "react";
import { getLocale, getTranslations } from "next-intl/server";

import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogBrowseWorkspace } from "@/components/features/catalog/catalog-browse-workspace";
import { CatalogSubfamilyEmpty } from "@/components/features/catalog/catalog-subfamily-empty";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { PageMain } from "@/components/layout/page-main";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { PatternSectionHeading } from "@/components/patterns/section-heading";
import { Link } from "@/i18n/navigation";
import { buildCatalogGridCardLabels } from "@/lib/catalog/catalog-grid-labels";
import { listAllDemoOrMergedProducts, toBrowseProductCard } from "@/lib/catalog/get-catalog-products";
import { isCatalogFamilyBrowseable } from "@/lib/catalog/catalog-readiness";
import { getCatalogNavigation } from "@/lib/catalog/navigation";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";
import { siteConfig } from "@/lib/site";

type CatalogBrowsePageProps = {
  searchQuery?: string;
};

export async function CatalogBrowsePage({ searchQuery }: CatalogBrowsePageProps) {
  const t = await getTranslations("Catalog");
  const locale = (await getLocale()) as SiteLocale;
  const navigation = await getCatalogNavigation();
  const products = listAllDemoOrMergedProducts();
  const [mainPhone] = siteConfig.contact.phones;

  const subfamilyLabels: Record<string, string> = {};
  for (const family of navigation.families) {
    for (const sub of family.subfamilies) {
      subfamilyLabels[sub.slug] = pickLocalized(sub.name, locale);
    }
  }

  const productCards = products.map((product) => toBrowseProductCard(product, locale));
  const gridLabels = buildCatalogGridCardLabels(t);

  const labels = {
    filtersTitle: t("filtersTitle"),
    clearAll: t("filterClearAll"),
    filterDeviceFamily: t("filterDeviceFamily"),
    filterMaterial: t("filterMaterial"),
    filterDn: t("filterDn"),
    filterPn: t("filterPn"),
    filterConnection: t("filterConnection"),
    filterStandards: t("filterStandards"),
    filterSector: t("filterSector"),
    filtersHelpTitle: t("filtersHelpTitle"),
    filtersHelpText: t("filtersHelpText"),
    quoteHelpCta: t("quoteHelpCta"),
    activeFilters: t("activeFiltersLabel"),
    resetFilters: t("filterReset"),
    resultsRange: t("resultsRange"),
    sortBy: t("sortBy"),
    sortRelevance: t("sortRelevance"),
    sortDnAsc: t("sortDnAsc"),
    sortDnDesc: t("sortDnDesc"),
    sortRefAsc: t("sortRefAsc"),
    specDn: t("specDn"),
    specPn: t("specPn"),
    specMaterial: t("specMaterial"),
    stockInStock: t("stockInStock"),
    certifiedBadge: t("certifiedBadge"),
    pdfLabel: gridLabels.pdfLabel,
    quoteProductCta: gridLabels.quoteProductCta,
    rangeBadge: gridLabels.rangeBadge,
    dnOnConfiguration: gridLabels.dnOnConfiguration,
    quoteOnConfigurationLabel: gridLabels.quoteOnConfigurationLabel,
    connections: {
      "flanged-rf": t("connections.flangedRf"),
      wafer: t("connections.wafer"),
      threaded: t("connections.threaded"),
      sw: t("connections.sw"),
      npt: t("connections.npt"),
      bsp: t("connections.bsp"),
    },
    standards: {
      en10204: t("standards.en10204"),
      iso5211: t("standards.iso5211"),
      atex: t("standards.atex"),
    },
    sectors: {
      mines: t("sectors.mines"),
      energy: t("sectors.energy"),
      agro: t("sectors.agro"),
      water: t("sectors.water"),
      fire: t("sectors.fire"),
    },
    phone: mainPhone.display,
    phoneHref: mainPhone.href,
  };

  return (
    <PageMain>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <CatalogBreadcrumbs
            ariaLabel={t("breadcrumbLabel")}
            homeLabel={t("breadcrumbHome")}
            productsLabel={t("breadcrumbCurrent")}
            items={[]}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-12">
        <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
          {t("eyebrow")}
        </p>
        <PatternSectionHeading
          id="catalog-heading"
          title={t("title")}
          description={t("description")}
          className="mb-6"
        />
        <p className="text-primary mb-10 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-emerald-600/20">
          {t("stockBadge")}
        </p>

        <section className="mb-12" aria-labelledby="catalog-families-heading">
          <h2
            id="catalog-families-heading"
            className="font-heading text-primary sdmi-heading-accent mb-6 text-lg font-bold uppercase"
          >
            {t("familiesTitle")}
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.families.map((family) => {
              const title = pickLocalized(family.name, locale);
              const imagePath = resolveProductShowcaseImage(undefined, family.slug);
              const browseable = isCatalogFamilyBrowseable(family.slug);
              const soonLabel = t("comingSoon");
              return (
                <li key={family.slug}>
                  <MediaLinkCard
                    href={browseable ? `/produits/${family.slug}` : undefined}
                    disabled={!browseable}
                    disabledHint={soonLabel}
                    title={title}
                    description={t("familyCardHint", {
                      count: family.subfamilies.length,
                    })}
                    footerLinkLabel={browseable ? t("viewProduct") : undefined}
                    media={
                      <CatalogTaxonomyMedia
                        storagePath={imagePath}
                        alt={title}
                        variant="card"
                        className="aspect-video w-full"
                      />
                    }
                  />
                </li>
              );
            })}
          </ul>
        </section>

        {searchQuery ? (
          <p className="text-muted-foreground mb-4 text-sm">
            {t("searchResultsFor", { query: searchQuery })}
          </p>
        ) : null}

        <section aria-labelledby="catalog-references-heading">
          <h2
            id="catalog-references-heading"
            className="font-heading text-primary sdmi-heading-accent mb-4 text-lg font-bold uppercase"
          >
            {t("referencesTitle")}
          </h2>
          {products.length === 0 ? (
            <div className="max-w-3xl">
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {t("skeletonBrowseHint")}
              </p>
              <CatalogSubfamilyEmpty />
            </div>
          ) : (
            <Suspense
              fallback={<p className="text-muted-foreground text-sm">{t("loadingCatalog")}</p>}
            >
              <CatalogBrowseWorkspace
                products={products}
                productCards={productCards}
                locale={locale}
                labels={labels}
                subfamilyLabels={subfamilyLabels}
              />
            </Suspense>
          )}
        </section>

        <p className="text-muted-foreground mt-8 text-center text-xs">
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            {t("catalogSupportLink")}
          </Link>
        </p>
      </div>
    </PageMain>
  );
}
