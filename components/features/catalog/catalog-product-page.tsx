import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeftIcon, CheckCircle2Icon, SparklesIcon } from "lucide-react";

import { CatalogBreadcrumbs } from "@/components/features/catalog/catalog-breadcrumbs";
import { CatalogProductPageActions } from "@/components/features/catalog/catalog-product-page-actions";
import { ProductMediaCarousel } from "@/components/features/catalog/product-media-carousel";
import { PageMain } from "@/components/layout/page-main";
import { Link } from "@/i18n/navigation";
import type { CatalogProductListItem } from "@/lib/catalog/catalog-product";
import { getProductImageGallery } from "@/lib/catalog/product-image-gallery";
import { getProductMedia } from "@/lib/catalog/product-media";
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
  const cloudinaryMedia = getProductMedia(product.slug);
  const gallery = getProductImageGallery(product.slug);
  const imagePath =
    cloudinaryMedia.imageUrl ??
    gallery[0] ??
    resolveProductShowcaseImage(product.subfamilySlug, product.familySlug, {
      reference: product.reference,
      productSlug: product.slug,
    });
  const imageSrcs = cloudinaryMedia.imageUrl
    ? [cloudinaryMedia.imageUrl]
    : gallery.length > 0
      ? gallery
      : imagePath
        ? [imagePath]
        : [];

  const isRange = product.listingKind === "range";
  const isBearing = product.familySlug === "roulements";
  const tech = product.technicalSpecs;

  const specs = isBearing
    ? []
    : ([
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
      ].filter(Boolean) as { label: string; value: string }[]);

  return (
    <PageMain>
      <div className="border-border/70 relative overflow-hidden border-b bg-[linear-gradient(120deg,color-mix(in_srgb,var(--primary)_8%,white)_0%,color-mix(in_srgb,var(--muted)_70%,white)_52%,white_100%)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_20%,color-mix(in_srgb,var(--cta)_16%,transparent),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-3.5 text-sm lg:px-6">
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

      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start lg:gap-10 xl:gap-12">
          <div className="border-border/80 overflow-hidden rounded-2xl border bg-card shadow-[0_22px_60px_-28px_rgba(27,58,87,0.45)] lg:sticky lg:top-28">
            <div className="from-cta via-amber-500 to-primary h-1 bg-gradient-to-r" />
            <ProductMediaCarousel
              imageSrcs={imageSrcs}
              videoSrc={cloudinaryMedia.videoUrl}
              alt={name}
              labels={{
                photo: t("productDetail.photo"),
                video: t("productDetail.video360"),
                noImage: t("productDetail.noImage"),
                zoomLabel: t("productDetail.zoomLabel"),
                zoomHint: t("productDetail.zoomHint"),
              }}
            />
            <p className="text-muted-foreground border-border/70 border-t bg-muted/20 px-4 py-3 text-center text-xs">
              {t("productDetail.imageHint")}
            </p>
          </div>

          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              {!isBearing && isRange ? (
                <span className="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase ring-1 ring-primary/15">
                  <SparklesIcon aria-hidden className="size-3.5" />
                  {t("rangeBadge")}
                </span>
              ) : null}
              <span className="bg-card text-primary rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase shadow-sm ring-1 ring-primary/10">
                {t("seriesReference", { ref: product.reference })}
              </span>
              <Link
                href={`/produits/${product.familySlug}/${product.subfamilySlug}`}
                className="text-muted-foreground hover:text-cta text-xs font-semibold tracking-wide uppercase transition-colors"
              >
                {subfamilyName}
              </Link>
            </div>

            <h1 className="font-heading text-primary text-3xl leading-[1.05] font-bold tracking-tight uppercase md:text-4xl lg:text-[2.65rem]">
              {name}
            </h1>

            {!isBearing && isRange ? (
              <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-primary/5 px-3.5 py-1.5 text-sm font-semibold ring-1 ring-primary/15">
                <CheckCircle2Icon aria-hidden className="text-primary size-4" />
                {t("quoteOnConfiguration")}
              </p>
            ) : !isBearing ? (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1.5 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-600/20">
                <CheckCircle2Icon aria-hidden className="size-4 text-emerald-600" />
                {t("stockBadge")}
              </p>
            ) : null}

            {description ? (
              <section className="border-border/70 mt-7 rounded-2xl border bg-gradient-to-br from-card via-card to-muted/25 p-5 shadow-[0_10px_36px_-22px_rgba(27,58,87,0.35)] md:p-6">
                <h2 className="font-heading text-primary mb-3 text-xs font-bold tracking-[0.16em] uppercase">
                  {t("productDetail.descriptionTitle")}
                </h2>
                <div className="text-muted-foreground max-w-none text-[15px] leading-relaxed whitespace-pre-line md:text-base">
                  {description}
                </div>
              </section>
            ) : null}

            {specs.length > 0 ? (
              <section className="mt-8" aria-labelledby="product-specs-heading">
                <div className="mb-4 flex items-end justify-between gap-3">
                  <h2
                    id="product-specs-heading"
                    className="font-heading text-primary text-sm font-bold tracking-widest uppercase"
                  >
                    {t("productDetail.specsTitle")}
                  </h2>
                  <span className="from-cta/80 to-primary/40 hidden h-px flex-1 bg-gradient-to-r sm:block" />
                </div>
                <dl className="grid gap-3 sm:grid-cols-2">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="group border-border/80 relative overflow-hidden rounded-xl border bg-card p-4 shadow-[0_8px_28px_-18px_rgba(27,58,87,0.35)] transition-[transform,border-color] hover:-translate-y-0.5 hover:border-primary/25"
                    >
                      <div
                        aria-hidden
                        className="from-cta absolute inset-y-0 left-0 w-1 bg-gradient-to-b to-primary opacity-80"
                      />
                      <dt className="text-muted-foreground pl-2 text-xs font-semibold tracking-wide uppercase">
                        {spec.label}
                      </dt>
                      <dd className="font-heading text-primary mt-1 pl-2 text-lg font-bold">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            <div className="border-border/80 relative mt-8 overflow-hidden rounded-2xl border bg-[linear-gradient(145deg,color-mix(in_srgb,var(--primary)_6%,white),white_42%,color-mix(in_srgb,var(--cta)_7%,white))] p-5 shadow-[0_18px_48px_-26px_rgba(27,58,87,0.4)] md:p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -right-8 size-36 rounded-full bg-cta/15 blur-2xl"
              />
              <p className="font-heading text-primary relative mb-4 text-sm font-bold tracking-wide uppercase">
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
              <p className="text-muted-foreground relative mt-4 text-xs leading-relaxed">
                {isRange
                  ? t("productDetail.rangeCtaHint")
                  : t("productDetail.ctaHint")}
              </p>
            </div>

            <p className="mt-7">
              <Link
                href={`/produits/${product.familySlug}/${product.subfamilySlug}`}
                className="text-primary hover:text-cta inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
              >
                <ArrowLeftIcon aria-hidden className="size-4" />
                {t("productDetail.backToSubfamily", { name: subfamilyName })}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageMain>
  );
}
