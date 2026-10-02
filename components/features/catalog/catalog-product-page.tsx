import { getLocale, getTranslations } from "next-intl/server";
import { CheckCircle2Icon } from "lucide-react";

import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogProductPageActions } from "@/components/features/catalog/catalog-product-page-actions";
import { StorageMedia } from "@/components/features/home/storage-media";
import { PageMain } from "@/components/layout/page-main";
import { Link } from "@/i18n/navigation";
import type { CatalogProductListItem } from "@/lib/catalog/catalog-product";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type CatalogProductPageProps = {
  product: CatalogProductListItem;
  familyName: string;
  subfamilyName: string;
};

export async function CatalogProductPage({
  product,
  familyName,
  subfamilyName,
}: CatalogProductPageProps) {
  const t = await getTranslations("Catalog");
  const locale = (await getLocale()) as SiteLocale;
  const name = pickLocalized(product.name, locale);
  const description = pickLocalized(product.description, locale);
  const imagePath = resolveProductShowcaseImage(
    product.subfamilySlug,
    product.familySlug,
    { reference: product.reference, productSlug: product.slug },
  );

  const isRange = product.listingKind === "range";
  const tech = product.technicalSpecs;

  const specs = [
    product.dn
      ? { label: t("specDn"), value: `DN${product.dn}` }
      : isRange
        ? { label: t("specDn"), value: t("dnOnConfiguration") }
        : null,
    product.pn ? { label: t("specPn"), value: product.pn } : null,
    tech?.pressureClass
      ? { label: t("specPressureClass"), value: tech.pressureClass }
      : null,
    tech?.trim ? { label: t("specTrim"), value: tech.trim } : null,
    tech?.connectionLabel
      ? {
          label: t("specConnection"),
          value: pickLocalized(tech.connectionLabel, locale),
        }
      : null,
    product.material
      ? {
          label: t("specMaterial"),
          value: pickLocalized(product.material, locale),
        }
      : null,
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <PageMain>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <CatalogBreadcrumbs
            ariaLabel={t("breadcrumbLabel")}
            homeLabel={t("breadcrumbHome")}
            productsLabel={t("breadcrumbCurrent")}
            items={[
              { label: familyName, href: `/produits/${product.familySlug}` },
              {
                label: subfamilyName,
                href: `/produits/${product.familySlug}/${product.subfamilySlug}`,
              },
              { label: name },
            ]}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
          <div className="sdmi-surface-card sdmi-surface-card-accent overflow-hidden lg:sticky lg:top-36">
            <div className="relative aspect-square bg-gradient-to-br from-white via-slate-50 to-primary/5">
              {imagePath ? (
                <StorageMedia
                  storagePath={imagePath}
                  alt={name}
                  className="absolute inset-0 size-full"
                  imageClassName="object-contain p-8 lg:p-10"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="text-muted-foreground flex size-full items-center justify-center text-sm">
                  {t("productDetail.noImage")}
                </div>
              )}
            </div>
            <p className="text-muted-foreground border-border/70 border-t px-4 py-3 text-center text-xs">
              {t("productDetail.imageHint")}
            </p>
          </div>

          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {isRange ? (
                <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase ring-1 ring-primary/15">
                  {t("rangeBadge")}
                </span>
              ) : null}
              <span className="bg-primary/5 text-primary rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase ring-1 ring-primary/10">
                {t("seriesReference", { ref: product.reference })}
              </span>
              <Link
                href={`/produits/${product.familySlug}/${product.subfamilySlug}`}
                className="text-muted-foreground hover:text-cta text-xs font-semibold tracking-wide uppercase transition-colors"
              >
                {subfamilyName}
              </Link>
            </div>

            <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
              {name}
            </h1>
            {description ? (
              <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
                {description}
              </p>
            ) : null}

            {isRange ? (
              <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1.5 text-sm font-semibold ring-1 ring-primary/15">
                <CheckCircle2Icon aria-hidden className="text-primary size-4" />
                {t("quoteOnConfiguration")}
              </p>
            ) : (
              <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-emerald-600/20">
                <CheckCircle2Icon aria-hidden className="size-4 text-emerald-600" />
                {t("stockBadge")}
              </p>
            )}

            {specs.length > 0 ? (
              <section className="mt-8" aria-labelledby="product-specs-heading">
                <h2
                  id="product-specs-heading"
                  className="font-heading text-primary mb-4 text-sm font-bold tracking-widest uppercase"
                >
                  {t("productDetail.specsTitle")}
                </h2>
                <dl className="grid gap-3 sm:grid-cols-2">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="border-border/80 bg-card rounded-xl border p-4 shadow-[0_4px_20px_-12px_rgba(27,58,87,0.2)]"
                    >
                      <dt className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                        {spec.label}
                      </dt>
                      <dd className="font-heading text-primary mt-1 text-lg font-bold">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <div className="sdmi-surface-card mt-8 p-5 md:p-6">
              <p className="font-heading text-primary mb-4 text-sm font-bold tracking-wide uppercase">
                {t("productDetail.ctaTitle")}
              </p>
              <CatalogProductPageActions
                productId={product.id}
                slug={product.slug}
                reference={product.reference}
                name={product.name}
                addToQuoteLabel={t("quoteProductCta")}
                quoteCtaLabel={t("quoteProductCta")}
                documentationLabel={t("documentationCta")}
              />
              <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
                {isRange
                  ? t("productDetail.rangeCtaHint")
                  : t("productDetail.ctaHint")}
              </p>
            </div>

            <p className="text-muted-foreground mt-6 text-sm">
              <Link
                href={`/produits/${product.familySlug}/${product.subfamilySlug}`}
                className="text-primary font-semibold hover:text-cta hover:underline"
              >
                {t("productDetail.backToSubfamily", { name: subfamilyName })}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageMain>
  );
}
