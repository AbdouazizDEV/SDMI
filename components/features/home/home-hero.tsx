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

  const slideContents = heroCarouselSlides.map((slide) => ({
    label: tCarousel(`slides.${slide.labelKey}.label`),
    title: tCarousel(`slides.${slide.labelKey}.title`),
    description: tCarousel(`slides.${slide.labelKey}.description`),
  }));

  return (
    <>
      <HomeHeroExperience
        location={t("hero.location")}
        certificationBadge={t("hero.certificationBadge")}
        catalogCta={t("hero.catalogCta")}
        quoteCta={t("hero.quoteCta")}
        stockSelectorTitle={t("stockSelector.title")}
        slideContents={slideContents}
      />
      <HomeTrustBand indicators={trustIndicators} />
    </>
  );
}
