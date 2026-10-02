import { CareersPageContent } from "@/components/features/careers/careers-page-content";
import { setRequestLocale } from "next-intl/server";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CarrieresPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CareersPageContent />;
}
