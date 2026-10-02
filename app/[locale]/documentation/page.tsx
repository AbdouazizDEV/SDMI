import { SimpleContentPage } from "@/components/features/content/simple-content-page";
import { setRequestLocale } from "next-intl/server";

type PageProps = { params: Promise<{ locale: string }> };

export default async function DocumentationPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SimpleContentPage namespace="StaticPages.documentation" />;
}
