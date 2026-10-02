import { QuoteRequestPage } from "@/components/features/quote/quote-request-page";
import { setRequestLocale } from "next-intl/server";

type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ref?: string }>;
};

export default async function DevisPage({ params, searchParams }: PageProps) {
  const { locale } = await params;
  const { ref } = await searchParams;
  setRequestLocale(locale);
  return <QuoteRequestPage productReference={ref} />;
}
