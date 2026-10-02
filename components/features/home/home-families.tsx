import { getLocale, getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/features/home/section-heading";
import { StorageMedia } from "@/components/features/home/storage-media";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import type { HomeFamilyCard } from "@/lib/home/get-home-page-data";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type HomeFamiliesSectionProps = {
  families: HomeFamilyCard[];
};

export async function HomeFamiliesSection({ families }: HomeFamiliesSectionProps) {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;

  return (
    <SectionShell variant="default" labelledBy="home-families-heading">
      <SectionHeading
        id="home-families-heading"
        title={t("families.title")}
        description={t("families.description") || undefined}
        className="mb-10"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {families.map((family) => {
          const title = pickLocalized(family.name, locale);
          const countLabel = t("families.referenceCount", {
            count: family.productCount,
          });

          return (
            <li key={family.slug} className="h-full">
              <MediaLinkCard
                href={`/produits/${family.slug}`}
                title={title}
                footerLinkLabel={t("families.explore")}
                media={
                  <StorageMedia
                    storagePath={family.imageStoragePath}
                    alt={title}
                    className="aspect-5/3 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1280px) 33vw, 20vw"
                  />
                }
                footer={<span className="font-medium">{countLabel}</span>}
              />
            </li>
          );
        })}
      </ul>
    </SectionShell>
  );
}
