import { getLocale, getTranslations } from "next-intl/server";
import { CheckCircle2Icon } from "lucide-react";

import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogFiltersSidebar } from "@/components/features/catalog/catalog-filters-sidebar";
import { CatalogProductGridList } from "@/components/features/catalog/catalog-product-grid-list";
import { CatalogSubfamilyEmpty } from "@/components/features/catalog/catalog-subfamily-empty";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { PageMain } from "@/components/layout/page-main";
import { Link } from "@/i18n/navigation";
import { buildCatalogGridCardLabels } from "@/lib/catalog/catalog-grid-labels";
import {
  enrichProductFacets,
  filterCatalogProducts,
  listProductsForSubfamily,
  toBrowseProductCard,
} from "@/lib/catalog/get-catalog-products";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import type { CatalogNavFamily } from "@/lib/catalog/navigation";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

type CatalogSubfamilyPageProps = {
  family: CatalogNavFamily;
  subfamilySlug: string;
  subfamilyName: LocalizedText;
  searchParams: { dn?: string; pn?: string; material?: string };
};

export async function CatalogSubfamilyPage({
  family,
  subfamilySlug,
  subfamilyName,
  searchParams,
}: CatalogSubfamilyPageProps) {
  const t = await getTranslations("Catalog");
  const locale = (await getLocale()) as SiteLocale;
  const familyName = pickLocalized(family.name, locale);
  const subName = pickLocalized(subfamilyName, locale);
  const basePath = `/produits/${family.slug}/${subfamilySlug}`;
  const imagePath = resolveProductShowcaseImage(subfamilySlug, family.slug);

  const allProducts = await listProductsForSubfamily(family.slug, subfamilySlug);
  const active = {
    dn: searchParams.dn ? Number.parseInt(searchParams.dn, 10) : undefined,
    pn: searchParams.pn,
    material: searchParams.material,
  };
  const products = filterCatalogProducts(allProducts, {
    dn: Number.isNaN(active.dn) ? undefined : active.dn,
    pn: active.pn,
    material: active.material,
  });
  const gridLabels = buildCatalogGridCardLabels(t);
  const productCards = products
    .map(enrichProductFacets)
    .map((product) => toBrowseProductCard(product, locale));

  const hasActiveFilters = Boolean(active.dn || active.pn || active.material);

  return (
    <PageMain>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <CatalogBreadcrumbs
            ariaLabel={t("breadcrumbLabel")}
            homeLabel={t("breadcrumbHome")}
            productsLabel={t("breadcrumbCurrent")}
            items={[
              { label: familyName, href: `/produits/${family.slug}` },
              { label: subName },
            ]}
          />
        </div>
      </div>

      <div className="border-border/60 border-b bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-12">
          <div className="min-w-0">
            <Link
              href={`/produits/${family.slug}`}
              className="text-cta mb-2 inline-block text-xs font-bold tracking-widest uppercase hover:underline"
            >
              {familyName}
            </Link>
            <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
              {subName}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
              {t("subfamilyDescription")}
            </p>
            <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-emerald-600/20">
              <CheckCircle2Icon aria-hidden className="size-4 text-emerald-600" />
              {t("stockBadge")}
            </p>
          </div>

          <div className="sdmi-surface-card sdmi-surface-card-accent w-full max-w-md overflow-hidden justify-self-center lg:max-w-none lg:justify-self-end">
            <CatalogTaxonomyMedia
              storagePath={imagePath}
              alt={subName}
              priority
              variant="hero"
              className="max-w-none"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-10">
          <CatalogFiltersSidebar
            locale={locale}
            basePath={basePath}
            products={allProducts}
            active={{
              dn: Number.isNaN(active.dn) ? undefined : active.dn,
              pn: active.pn,
              material: active.material,
            }}
          />

          <div className="min-w-0">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-muted-foreground text-sm">
                {t("resultsCount", { count: products.length })}
              </p>
              {hasActiveFilters ? (
                <Link
                  href={basePath}
                  className="text-primary text-xs font-semibold hover:text-cta hover:underline"
                >
                  {t("filterReset")}
                </Link>
              ) : null}
            </div>

            {products.length === 0 ? (
              <CatalogSubfamilyEmpty />
            ) : (
              <CatalogProductGridList products={productCards} labels={gridLabels} />
            )}
          </div>
        </div>
      </div>
    </PageMain>
  );
}
