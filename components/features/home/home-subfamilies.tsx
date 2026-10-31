import { getLocale, getTranslations } from "next-intl/server";

import { HomeSectionViewAllLink } from "@/components/features/home/home-section-view-all-link";
import { SectionHeading } from "@/components/features/home/section-heading";
import { StorageMedia } from "@/components/features/home/storage-media";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import { isCatalogSubfamilyBrowseable } from "@/lib/catalog/catalog-readiness";
import {
  catalogNavigationForShell,
  pickCatalogLabel,
} from "@/lib/catalog/navigation";
import { resolveSubfamilyShowcaseImage } from "@/lib/catalog/product-showcase-image";

import type { SiteLocale } from "@/lib/site";

const STATIC_SEALING_FAMILY_SLUG = "etancheite-statique";

/** Quatre sous-familles mises en avant dans « Nos gammes ». */
const HOME_GAMME_SLUGS = [
  "joints-en-fibres-elastomeres",
  "joints-en-graphite",
  "joints-metalliques",
  "tresses-rubans-etancheite",
] as const;

export async function HomeSubfamiliesSection() {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;
  const family = catalogNavigationForShell.families.find(
    (item) => item.slug === STATIC_SEALING_FAMILY_SLUG,
  );

  if (!family) {
    return null;
  }

  const cards = HOME_GAMME_SLUGS.flatMap((slug) => {
    const subfamily = family.subfamilies.find((item) => item.slug === slug);
    if (!subfamily) {
      return [];
    }
    return [subfamily];
  });

  return (
    <SectionShell variant="muted" labelledBy="home-subfamilies-heading">
      <SectionHeading
        id="home-subfamilies-heading"
        title={t("subfamilies.title")}
        className="mb-10"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((subfamily) => {
          const title = pickCatalogLabel(subfamily.name, locale);
          const browseable = isCatalogSubfamilyBrowseable(subfamily.slug);
          const imagePath = resolveSubfamilyShowcaseImage(
            family.slug,
            subfamily.slug,
          );

          return (
            <li key={subfamily.slug} className="h-full">
              <MediaLinkCard
                href={
                  browseable
                    ? `/produits/${family.slug}/${subfamily.slug}`
                    : undefined
                }
                title={title}
                titleClassName="text-xs leading-snug md:text-sm"
                footerLinkLabel={
                  browseable ? t("subfamilies.readMore") : undefined
                }
                media={
                  <StorageMedia
                    storagePath={imagePath}
                    alt={title}
                    className="aspect-[4/3] w-full bg-white"
                    imageClassName="object-contain p-3"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                }
              />
            </li>
          );
        })}
      </ul>
      <HomeSectionViewAllLink
        href={`/produits/${family.slug}`}
        label={t("subfamilies.viewFamily")}
      />
    </SectionShell>
  );
}
