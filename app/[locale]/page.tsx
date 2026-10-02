import { PageMain } from "@/components/layout/page-main";
import { HomeClientsSection } from "@/components/features/home/home-clients";
import { HomeFamiliesSection } from "@/components/features/home/home-families";
import { HomeSubfamiliesSection } from "@/components/features/home/home-subfamilies";
import { HomeFeaturedProductsSection } from "@/components/features/home/home-featured-products";
import { HomeFinalCtaSection } from "@/components/features/home/home-final-cta";
import { HomeHeroSection } from "@/components/features/home/home-hero";
import { HomeQualityPillarsSection } from "@/components/features/home/home-quality-pillars";
import { HomeSectorsSection } from "@/components/features/home/home-sectors";
import { getHomePageData } from "@/lib/home/get-home-page-data";
import { setRequestLocale } from "next-intl/server";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const data = await getHomePageData();

  return (
    <PageMain>
      <HomeHeroSection trustIndicators={data.trustIndicators} />
      <HomeFamiliesSection families={data.families} />
      <HomeFeaturedProductsSection />
      <HomeSectorsSection sectors={data.sectors} />
      <HomeSubfamiliesSection />
      <HomeClientsSection clientLogos={data.clientLogos} />
      <HomeQualityPillarsSection />
      <HomeFinalCtaSection />
    </PageMain>
  );
}
