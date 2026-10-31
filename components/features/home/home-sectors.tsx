import { getLocale, getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/features/home/section-heading";
import { StorageMedia } from "@/components/features/home/storage-media";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import { HomeSectionViewAllLink } from "@/components/features/home/home-section-view-all-link";
import type { HomeSectorCard } from "@/lib/home/get-home-page-data";
import {
  homeFeaturedSectorSlideKeys,
  type HomeFeaturedSectorSlug,
} from "@/lib/home/home-featured-sectors";
import { HOME_SECTION_VISIBLE_CARDS } from "@/lib/home/home-section-limits";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type HomeSectorsSectionProps = {
  sectors: HomeSectorCard[];
};

function isFeaturedSectorSlug(slug: string): slug is HomeFeaturedSectorSlug {
  return slug in homeFeaturedSectorSlideKeys;
}

function sectorCardCopy(
  slug: string,
  t: Awaited<ReturnType<typeof getTranslations<"Home">>>,
  locale: SiteLocale,
  sector: HomeSectorCard,
) {
  const titleKey = `sectors.featured.${slug}.title` as const;
  const descriptionKey = `sectors.featured.${slug}.description` as const;
  const title = t.has(titleKey) ? t(titleKey) : pickLocalized(sector.name, locale);
  const description = t.has(descriptionKey) ? t(descriptionKey) : null;

  let eyebrow: string | null = null;
  if (isFeaturedSectorSlug(slug)) {
    const slideKey = homeFeaturedSectorSlideKeys[slug];
    eyebrow = t(`hero.carousel.slides.${slideKey}.label`);
  }

  return { title, description, eyebrow };
}

export async function HomeSectorsSection({ sectors }: HomeSectorsSectionProps) {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;
  const visibleSectors = sectors.slice(0, HOME_SECTION_VISIBLE_CARDS);

  return (
    <SectionShell variant="default" labelledBy="home-sectors-heading">
      <SectionHeading
        id="home-sectors-heading"
        title={t("sectors.title")}
        description={t("sectors.description") || undefined}
        className="mb-10"
      />
      <ul className="grid gap-6 sm:grid-cols-2">
        {visibleSectors.map((sector) => {
          const { title, description, eyebrow } = sectorCardCopy(
            sector.slug,
            t,
            locale,
            sector,
          );

          return (
            <li key={sector.slug} className="h-full">
              <MediaLinkCard
                href={`/secteurs/${sector.slug}`}
                title={title}
                description={description}
                eyebrow={eyebrow}
                footerLinkLabel={t("sectors.explore")}
                titleClassName="normal-case tracking-tight md:text-[1.05rem]"
                descriptionClassName="line-clamp-3"
                media={
                  <StorageMedia
                    storagePath={sector.imageStoragePath}
                    alt={title}
                    className="aspect-[16/10] min-h-[220px] w-full rounded-t-xl sm:min-h-[260px] lg:min-h-[300px]"
                    imageClassName="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                }
              />
            </li>
          );
        })}
      </ul>
      <HomeSectionViewAllLink href="/secteurs" label={t("sectors.viewAll")} />
    </SectionShell>
  );
}
