import { getLocale, getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/features/home/section-heading";
import { StorageMedia } from "@/components/features/home/storage-media";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import { HomeSectionViewAllLink } from "@/components/features/home/home-section-view-all-link";
import type { HomeSectorCard } from "@/lib/home/get-home-page-data";
import { HOME_SECTION_VISIBLE_CARDS } from "@/lib/home/home-section-limits";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type HomeSectorsSectionProps = {
  sectors: HomeSectorCard[];
};

export async function HomeSectorsSection({ sectors }: HomeSectorsSectionProps) {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;
  const visibleSectors = sectors.slice(0, HOME_SECTION_VISIBLE_CARDS);
  const hasMore = sectors.length > HOME_SECTION_VISIBLE_CARDS;

  return (
    <SectionShell variant="default" labelledBy="home-sectors-heading">
      <SectionHeading
        id="home-sectors-heading"
        title={t("sectors.title")}
        description={t("sectors.description") || undefined}
        className="mb-10"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleSectors.map((sector) => {
          const title = pickLocalized(sector.name, locale);
          const description = sector.description
            ? pickLocalized(sector.description, locale)
            : null;

          return (
            <li key={sector.slug} className="h-full">
              <MediaLinkCard
                href={`/secteurs/${sector.slug}`}
                title={title}
                description={description}
                footerLinkLabel={t("sectors.explore")}
                media={
                  <StorageMedia
                    storagePath={sector.imageStoragePath}
                    alt={title}
                    className="aspect-[4/3] w-full"
                    imageClassName="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                }
              />
            </li>
          );
        })}
      </ul>
      {hasMore ? (
        <HomeSectionViewAllLink href="/secteurs" label={t("sectors.viewAll")} />
      ) : null}
    </SectionShell>
  );
}
