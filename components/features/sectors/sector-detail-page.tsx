import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { PageMain } from "@/components/layout/page-main";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import { pickLocalized } from "@/lib/home/pick-localized";
import {
  getSectorBlockKey,
  getSectorImagePath,
  getSectorNavItem,
  sectorSlugToFamilies,
} from "@/lib/sectors/sector-config";
import type { SiteLocale } from "@/lib/site";
import { siteConfig } from "@/lib/site";

type SectorDetailPageProps = {
  slug: string;
};

export async function SectorDetailPage({ slug }: SectorDetailPageProps) {
  const t = await getTranslations("Sectors");
  const locale = (await getLocale()) as SiteLocale;
  const sector = getSectorNavItem(slug);
  const blockKey = getSectorBlockKey(slug);

  if (!sector || !blockKey) {
    notFound();
  }

  const sectorName = pickLocalized(sector.name, locale);
  const imagePath = getSectorImagePath(slug);
  const familySlugs = sectorSlugToFamilies[slug] ?? [];

  const families = legacyCatalogNavigation.families.filter((family) =>
    familySlugs.includes(family.slug),
  );

  return (
    <PageMain>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <nav aria-label={t("breadcrumbLabel")}>
            <ol className="text-muted-foreground flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  {t("breadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/secteurs" className="hover:text-primary font-medium">
                  {t("breadcrumbCurrent")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{sectorName}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="border-border/60 border-b bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-2 lg:items-center lg:px-6 lg:py-12">
          <div className="min-w-0">
            <Link
              href="/secteurs"
              className="text-muted-foreground hover:text-primary mb-4 inline-flex items-center gap-1.5 text-sm font-semibold"
            >
              <ArrowLeftIcon aria-hidden className="size-4" />
              {t("backToSectors")}
            </Link>
            <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
              {t(`blocks.${blockKey}.eyebrow`)}
            </p>
            <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
              {sectorName}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
              {t(`blocks.${blockKey}.body`)}
            </p>
            <p className="text-foreground mt-5 inline-block rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium ring-1 ring-border/60">
              {t(`blocks.${blockKey}.standards`)}
            </p>
          </div>
          <div className="sdmi-surface-card sdmi-surface-card-accent w-full max-w-lg overflow-hidden justify-self-center lg:max-w-none lg:justify-self-end">
            <CatalogTaxonomyMedia
              storagePath={imagePath}
              alt={sectorName}
              priority
              variant="hero"
              className="aspect-video max-w-none min-h-[220px]"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 lg:px-6 lg:py-14">
        {families.length > 0 ? (
          <section aria-labelledby="sector-families-heading">
            <h2
              id="sector-families-heading"
              className="font-heading text-primary sdmi-heading-accent mb-6 text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("familiesTitle")}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {families.map((family) => (
                <li key={family.slug}>
                  <Link
                    href={`/produits/${family.slug}`}
                    className="sdmi-surface-card group flex items-center justify-between gap-3 bg-card px-4 py-4 transition hover:border-primary/30"
                  >
                    <span className="font-heading text-primary text-sm font-bold uppercase">
                      {pickLocalized(family.name, locale)}
                    </span>
                    <ArrowUpRightIcon
                      aria-hidden
                      className="text-cta size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section
          className="sdmi-surface-card sdmi-surface-card-accent bg-card p-6 md:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
          aria-labelledby="sector-cta-heading"
        >
          <div>
            <h2
              id="sector-cta-heading"
              className="font-heading text-primary text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("recommendedTitle")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">{t("detailCtaHint")}</p>
          </div>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="/produits"
              className={buttonVariants({
                variant: "outline",
                className: "h-11 rounded-sm font-semibold",
              })}
            >
              {t("refsCta")}
            </Link>
            <Link
              href="/devis"
              className={buttonVariants({
                className:
                  "bg-cta text-cta-foreground hover:bg-cta/90 h-11 rounded-sm font-semibold",
              })}
            >
              {t("quoteCta")}
            </Link>
            <a
              href={siteConfig.contact.whatsapp.href}
              className={buttonVariants({
                className:
                  "bg-whatsapp text-whatsapp-foreground hover:opacity-90 h-11 rounded-sm font-semibold",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("whatsappCta")}
            </a>
          </div>
        </section>
      </div>

      <CompanyFinalCta />
    </PageMain>
  );
}
