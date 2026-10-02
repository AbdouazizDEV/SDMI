import { CertificationsPageContent } from "@/components/features/certifications/certifications-page-content";
import { setRequestLocale } from "next-intl/server";

type PageProps = { params: Promise<{ locale: string }> };

export default async function CertificationsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CertificationsPageContent />;
}
