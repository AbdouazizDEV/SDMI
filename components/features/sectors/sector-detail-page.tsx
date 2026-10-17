import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeftIcon, ArrowUpRightIcon, CheckIcon } from "lucide-react";
import { notFound } from "next/navigation";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { StorageMedia } from "@/components/features/home/storage-media";
import { SectorDetailHeroMedia } from "@/components/features/sectors/sector-detail-hero-media";
import { PageMain } from "@/components/layout/page-main";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getCatalogV1FamilyImage } from "@/lib/catalog/catalog-v1-assets";
import { isCatalogFamilyBrowseable } from "@/lib/catalog/catalog-readiness";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import { pickLocalized } from "@/lib/home/pick-localized";
import { isSectorDetailPageSlug } from "@/lib/sectors/sector-detail-pages";
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

type SectorPageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  standards: string;
  highlightsTitle: string;
  highlights: { label: string; value: string }[];
  challengesTitle: string;
  challenges: string[];
  applicationsTitle: string;
  applications: string[];
  supplyTitle: string;
  supplyItems: string[];
  familySummaries: Record<string, string>;
};

function readSectorPageCopy(
  slug: string,
  t: Awaited<ReturnType<typeof getTranslations<"Sectors">>>,
): SectorPageCopy | null {
  const base = `pages.${slug}`;
  if (!t.has(`${base}.title`)) {
    return null;
  }

  return {
    eyebrow: t(`${base}.eyebrow`),
    title: t(`${base}.title`),
    lead: t(`${base}.lead`),
    standards: t(`${base}.standards`),
    highlightsTitle: t(`${base}.highlightsTitle`),
    highlights: t.raw(`${base}.highlights`) as { label: string; value: string }[],
    challengesTitle: t(`${base}.challengesTitle`),
    challenges: t.raw(`${base}.challenges`) as string[],
    applicationsTitle: t(`${base}.applicationsTitle`),
    applications: t.raw(`${base}.applications`) as string[],
    supplyTitle: t(`${base}.supplyTitle`),
    supplyItems: t.raw(`${base}.supplyItems`) as string[],
    familySummaries: t.raw(`${base}.familySummaries`) as Record<string, string>,
  };
}

function SectorDetailCta({
  t,
}: {
  t: Awaited<ReturnType<typeof getTranslations<"Sectors">>>;
}) {
  return (
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
  );
}

export async function SectorDetailPage({ slug }: SectorDetailPageProps) {
  const t = await getTranslations("Sectors");
  const locale = (await getLocale()) as SiteLocale;
  const sector = getSectorNavItem(slug);
  const blockKey = getSectorBlockKey(slug);

  if (!sector || !blockKey) {
    notFound();
  }

  const imagePath = getSectorImagePath(slug);
  const familySlugs = sectorSlugToFamilies[slug] ?? [];
  const families = legacyCatalogNavigation.families.filter((family) =>
    familySlugs.includes(family.slug),
  );

  const pageCopy =
    isSectorDetailPageSlug(slug) ? readSectorPageCopy(slug, t) : null;

  const sectorName = pageCopy?.title ?? pickLocalized(sector.name, locale);
  const breadcrumbName = pickLocalized(sector.name, locale);

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
              <li className="text-foreground font-medium">{breadcrumbName}</li>
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
              {pageCopy?.eyebrow ?? t(`blocks.${blockKey}.eyebrow`)}
            </p>
            <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight md:text-3xl lg:text-4xl">
              {sectorName}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
              {pageCopy?.lead ?? t(`blocks.${blockKey}.body`)}
            </p>
            <p className="text-foreground mt-5 inline-block rounded-lg bg-muted/60 px-3 py-2 text-sm font-medium ring-1 ring-border/60">
              {pageCopy?.standards ?? t(`blocks.${blockKey}.standards`)}
            </p>
          </div>
          <SectorDetailHeroMedia
            imagePath={imagePath}
            alt={sectorName}
            priority
            className="max-w-lg justify-self-center lg:max-w-none lg:justify-self-end"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 lg:px-6 lg:py-14">
        {pageCopy ? (
          <>
            <section aria-labelledby="sector-highlights-heading">
              <h2
                id="sector-highlights-heading"
                className="font-heading text-primary sdmi-heading-accent mb-6 text-lg font-bold tracking-tight uppercase md:text-xl"
              >
                {pageCopy.highlightsTitle}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {pageCopy.highlights.map((item) => (
                  <li key={item.label}>
                    <div className="sdmi-trust-tile h-full p-5">
                      <p className="font-heading text-cta text-lg font-bold md:text-xl">
                        {item.value}
                      </p>
                      <p className="text-muted-foreground mt-1 text-xs font-medium tracking-wide uppercase">
                        {item.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid gap-8 lg:grid-cols-2">
              <section aria-labelledby="sector-challenges-heading">
                <h2
                  id="sector-challenges-heading"
                  className="font-heading text-primary sdmi-heading-accent mb-4 text-lg font-bold tracking-tight uppercase md:text-xl"
                >
                  {pageCopy.challengesTitle}
                </h2>
                <ul className="space-y-3">
                  {pageCopy.challenges.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-sm leading-relaxed md:text-base"
                    >
                      <CheckIcon
                        aria-hidden
                        className="text-cta mt-0.5 size-4 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="sector-applications-heading">
                <h2
                  id="sector-applications-heading"
                  className="font-heading text-primary sdmi-heading-accent mb-4 text-lg font-bold tracking-tight uppercase md:text-xl"
                >
                  {pageCopy.applicationsTitle}
                </h2>
                <ul className="space-y-3">
                  {pageCopy.applications.map((item) => (
                    <li
                      key={item}
                      className="text-muted-foreground flex gap-3 text-sm leading-relaxed md:text-base"
                    >
                      <CheckIcon
                        aria-hidden
                        className="text-cta mt-0.5 size-4 shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section
              className="sdmi-surface-card bg-muted/30 p-6 md:p-8"
              aria-labelledby="sector-supply-heading"
            >
              <h2
                id="sector-supply-heading"
                className="font-heading text-primary text-lg font-bold tracking-tight uppercase md:text-xl"
              >
                {pageCopy.supplyTitle}
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {pageCopy.supplyItems.map((item) => (
                  <li
                    key={item}
                    className="text-foreground flex gap-2 text-sm leading-relaxed md:text-base"
                  >
                    <CheckIcon aria-hidden className="text-cta mt-0.5 size-4 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : null}

        {families.length > 0 ? (
          <section aria-labelledby="sector-families-heading">
            <h2
              id="sector-families-heading"
              className="font-heading text-primary sdmi-heading-accent mb-6 text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("familiesTitle")}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {families.map((family) => {
                const title = pickLocalized(family.name, locale);
                const description =
                  pageCopy?.familySummaries[family.slug] ?? null;
                const browseable = isCatalogFamilyBrowseable(family.slug);
                const imagePath = getCatalogV1FamilyImage(family.slug);

                return (
                  <li key={family.slug} className="h-full">
                    {pageCopy ? (
                      <MediaLinkCard
                        href={browseable ? `/produits/${family.slug}` : undefined}
                        disabled={!browseable}
                        disabledHint={t("comingSoonFamily")}
                        title={title}
                        description={description}
                        titleClassName="normal-case tracking-tight"
                        footerLinkLabel={browseable ? t("exploreFamily") : undefined}
                        media={
                          <StorageMedia
                            storagePath={imagePath}
                            alt={title}
                            className="aspect-[4/3] min-h-[200px] w-full rounded-t-xl"
                            imageClassName="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                        }
                      />
                    ) : (
                      <Link
                        href={`/produits/${family.slug}`}
                        className="sdmi-surface-card group flex items-center justify-between gap-3 bg-card px-4 py-4 transition hover:border-primary/30"
                      >
                        <span className="font-heading text-primary text-sm font-bold uppercase">
                          {title}
                        </span>
                        <ArrowUpRightIcon
                          aria-hidden
                          className="text-cta size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                        />
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        <SectorDetailCta t={t} />
      </div>

      <CompanyFinalCta />
    </PageMain>
  );
}
