import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { SectorDetailPage } from "@/components/features/sectors/sector-detail-page";
import { SectorsLandingPage } from "@/components/features/sectors/sectors-landing-page";
import { isSectorSlug } from "@/lib/sectors/sector-config";

type SectorsPageProps = {
  params: Promise<{ locale: string; segments?: string[] }>;
};

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
