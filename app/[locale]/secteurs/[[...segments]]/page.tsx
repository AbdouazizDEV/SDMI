import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SectorDetailPage } from "@/components/features/sectors/sector-detail-page";
import { SectorsLandingPage } from "@/components/features/sectors/sectors-landing-page";
import { isSectorSlug } from "@/lib/sectors/sector-config";
import { isSectorDetailPageSlug } from "@/lib/sectors/sector-detail-pages";

type SectorsPageProps = {
  params: Promise<{ locale: string; segments?: string[] }>;
};

export async function generateMetadata({ params }: SectorsPageProps): Promise<Metadata> {
  const { locale, segments } = await params;

  if (segments?.length === 1 && isSectorDetailPageSlug(segments[0])) {
    const t = await getTranslations({ locale, namespace: "Sectors" });
    const slug = segments[0];
    return {
      title: t(`pages.${slug}.metaTitle`),
      description: t(`pages.${slug}.metaDescription`),
    };
  }

  if (!segments?.length) {
    const t = await getTranslations({ locale, namespace: "Sectors" });
    return {
      title: t("title"),
      description: t("description"),
    };
  }

  return {};
}

export default async function SectorsCatchAllPage({ params }: SectorsPageProps) {
  const { locale, segments } = await params;
  setRequestLocale(locale);

  if (!segments?.length) {
    return <SectorsLandingPage />;
  }

  if (segments.length === 1 && isSectorSlug(segments[0])) {
    return <SectorDetailPage slug={segments[0]} />;
  }

  notFound();
}
