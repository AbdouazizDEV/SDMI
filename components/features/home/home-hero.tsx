import { getTranslations } from "next-intl/server";

import { HomeHeroExperience } from "@/components/features/home/home-hero-experience";
import { HomeTrustBand } from "@/components/features/home/home-trust-band";
import { heroCarouselSlides } from "@/lib/home/hero-carousel-slides";
import type { HomeTrustIndicator } from "@/lib/home/get-home-page-data";

type HomeHeroSectionProps = {
  trustIndicators: HomeTrustIndicator[];
};

export async function HomeHeroSection({ trustIndicators }: HomeHeroSectionProps) {
  const t = await getTranslations("Home");
  const tCarousel = await getTranslations("Home.hero.carousel");

  const slideLabels = heroCarouselSlides.map((slide) =>
    tCarousel(`slides.${slide.labelKey}`),
  );

  return (
    <>
      <HomeHeroExperience
        badge={t("hero.badge")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        catalogCta={t("hero.catalogCta")}
        quoteCta={t("hero.quoteCta")}
        stockSelectorTitle={t("stockSelector.title")}
        slideLabels={slideLabels}
      />
      <HomeTrustBand indicators={trustIndicators} />
    </>
  );
}
