import { AboutPageContent } from "@/components/features/about/about-page-content";
import { setRequestLocale } from "next-intl/server";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutPageContent />;
}
