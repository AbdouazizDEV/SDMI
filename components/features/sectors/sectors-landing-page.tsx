import { getLocale, getTranslations } from "next-intl/server";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { StorageMedia } from "@/components/features/home/storage-media";
import { SectorDetailHeroMedia } from "@/components/features/sectors/sector-detail-hero-media";
import { SectorEnvironmentBlock } from "@/components/features/sectors/sector-environment-block";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionHeading } from "@/components/features/home/section-heading";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import {
  homeFeaturedSectorSlideKeys,
  type HomeFeaturedSectorSlug,
} from "@/lib/home/home-featured-sectors";
import { pickLocalized } from "@/lib/home/pick-localized";
import {
  getSectorImagePath,
  getSectorBlockKey,
  sectorSlugToBlock,
} from "@/lib/sectors/sector-config";
import {
  sectorsLandingDeepDiveSlugs,
  sectorsLandingPrimarySlugs,
  sectorsLandingSecondarySlugs,
} from "@/lib/sectors/sectors-landing";
import type { SiteLocale } from "@/lib/site";

function isFeaturedSectorSlug(slug: string): slug is HomeFeaturedSectorSlug {
  return slug in homeFeaturedSectorSlideKeys;
}

function sectorGridCardCopy(
  slug: string,
  tSectors: Awaited<ReturnType<typeof getTranslations<"Sectors">>>,
  tHome: Awaited<ReturnType<typeof getTranslations<"Home">>>,
  locale: SiteLocale,
  sector: (typeof legacyCatalogNavigation.sectors)[number],
) {
  const pageTitleKey = `pages.${slug}.title`;
  const pageEyebrowKey = `pages.${slug}.eyebrow`;
  const featuredDescKey = `sectors.featured.${slug}.description`;

  if (tSectors.has(pageTitleKey)) {
    let eyebrow: string | null = null;
    if (tSectors.has(pageEyebrowKey)) {
      eyebrow = tSectors(pageEyebrowKey);
    } else if (isFeaturedSectorSlug(slug)) {
      const slideKey = homeFeaturedSectorSlideKeys[slug];
      eyebrow = tHome(`hero.carousel.slides.${slideKey}.label`);
    }

    const description = tHome.has(featuredDescKey)
      ? tHome(featuredDescKey)
      : tSectors(`pages.${slug}.lead`);

    return {
      title: tSectors(pageTitleKey),
      description,
      eyebrow,
    };
  }

  const blockKey = sectorSlugToBlock[slug];
  return {
    title: pickLocalized(sector.name, locale),
    description: blockKey ? tSectors(`blocks.${blockKey}.body`) : null,
    eyebrow: blockKey ? tSectors(`blocks.${blockKey}.eyebrow`) : null,
  };
}

function sectorDeepDiveCopy(
  slug: string,
  tSectors: Awaited<ReturnType<typeof getTranslations<"Sectors">>>,
) {
  const base = `pages.${slug}`;
  const blockKey = getSectorBlockKey(slug);

  if (tSectors.has(`${base}.title`)) {
    return {
      eyebrow: tSectors(`${base}.eyebrow`),
      title: tSectors(`${base}.title`),
      body: tSectors(`${base}.lead`),
      standards: tSectors(`${base}.standards`),
      blockKey: blockKey ?? "energy",
    };
  }

  if (!blockKey) {
    return null;
  }

  return {
    eyebrow: tSectors(`blocks.${blockKey}.eyebrow`),
    title: tSectors(`blocks.${blockKey}.title`),
    body: tSectors(`blocks.${blockKey}.body`),
    standards: tSectors(`blocks.${blockKey}.standards`),
    blockKey,
  };
}

export async function SectorsLandingPage() {
  const t = await getTranslations("Sectors");
  const tHome = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;

  const heroImage = getSectorImagePath("circuit-eau-petrole-gaz");

  const primarySectors = sectorsLandingPrimarySlugs.flatMap((slug) => {
    const sector = legacyCatalogNavigation.sectors.find((item) => item.slug === slug);
    return sector ? [{ sector, slug }] : [];
  });

  const secondarySectors = sectorsLandingSecondarySlugs.flatMap((slug) => {
    const sector = legacyCatalogNavigation.sectors.find((item) => item.slug === slug);
    return sector ? [{ sector, slug }] : [];
  });

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
          <SectorDetailHeroMedia
            imagePath={heroImage}
            alt={t("landingHeroAlt")}
            priority
            className="max-w-lg justify-self-center lg:max-w-none lg:justify-self-end"
          />
        }
        className="space-y-14 lg:space-y-16"
      >
        <section aria-labelledby="sectors-grid-heading">
          <SectionHeading
            id="sectors-grid-heading"
            title={t("gridTitle")}
            description={t("gridDescription") || undefined}
            className="mb-8"
          />
          <ul className="grid gap-6 sm:grid-cols-2">
            {primarySectors.map(({ sector, slug }) => {
              const { title, description, eyebrow } = sectorGridCardCopy(
                slug,
                t,
                tHome,
                locale,
                sector,
              );
              const imagePath = getSectorImagePath(slug);

              return (
                <li key={slug} className="h-full min-w-0">
                  <MediaLinkCard
                    href={`/secteurs/${slug}`}
                    title={title}
                    description={description}
                    eyebrow={eyebrow}
                    footerLinkLabel={t("exploreSector")}
                    titleClassName="normal-case tracking-tight md:text-[1.05rem]"
                    descriptionClassName="line-clamp-3"
                    media={
                      <StorageMedia
                        storagePath={imagePath}
                        alt={title}
                        className="aspect-[16/10] min-h-[200px] w-full rounded-t-xl sm:min-h-[240px]"
                        imageClassName="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    }
                  />
                </li>
              );
            })}
          </ul>
        </section>

        {secondarySectors.length > 0 ? (
          <section aria-labelledby="sectors-secondary-heading">
            <SectionHeading
              id="sectors-secondary-heading"
              title={t("secondaryTitle")}
              description={t("secondaryDescription") || undefined}
              className="mb-6"
            />
            <ul className="grid gap-5 sm:grid-cols-2">
              {secondarySectors.map(({ sector, slug }) => {
                const { title, description, eyebrow } = sectorGridCardCopy(
                  slug,
                  t,
                  tHome,
                  locale,
                  sector,
                );
                const imagePath = getSectorImagePath(slug);

                return (
                  <li key={slug} className="h-full">
                    <MediaLinkCard
                      href={`/secteurs/${slug}`}
                      title={title}
                      description={description}
                      eyebrow={eyebrow}
                      footerLinkLabel={t("exploreSector")}
                      titleClassName="normal-case tracking-tight"
                      media={
                        <StorageMedia
                          storagePath={imagePath}
                          alt={title}
                          className="aspect-[16/10] min-h-[200px] w-full rounded-t-xl"
                          imageClassName="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}

        <section aria-labelledby="sectors-environments-heading">
          <SectionHeading
            id="sectors-environments-heading"
            title={t("environmentsTitle")}
            description={t("environmentsDescription") || undefined}
            className="mb-8"
          />
          <div className="space-y-8 lg:space-y-10">
            {sectorsLandingDeepDiveSlugs.map((slug, index) => {
              const copy = sectorDeepDiveCopy(slug, t);
              if (!copy) {
                return null;
              }

              return (
                <SectorEnvironmentBlock
                  key={slug}
                  id={`secteur-${slug}`}
                  blockKey={copy.blockKey}
                  reverse={index % 2 === 1}
                  eyebrow={copy.eyebrow}
                  title={copy.title}
                  body={copy.body}
                  standards={copy.standards}
                  imagePath={getSectorImagePath(slug)}
                  detailHref={`/secteurs/${slug}`}
                  sectorDetailCta={t("sectorDetailCta")}
                  recommendedTitle={t("recommendedTitle")}
                  refsCta={t("refsCta")}
                  quoteCta={t("quoteCta")}
                  whatsappCta={t("whatsappCta")}
                />
              );
            })}
          </div>
        </section>
      </CompanyPageLayout>

      <CompanyFinalCta />
    </PageMain>
  );
}
