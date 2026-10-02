import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Viewport } from "next";
import { hasLocale } from "next-intl";

import { QuoteCartProvider } from "@/components/providers/quote-cart-provider";
import { SiteShell } from "@/components/layout/site-shell";
import { SkipLink } from "@/components/layout/skip-link";
import { fontBody, fontHeading } from "@/lib/fonts";
import { buildPageMetadata } from "@/lib/metadata";
import { routing } from "@/i18n/routing";
type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildPageMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className="min-h-screen bg-background text-base text-foreground antialiased">
        <NextIntlClientProvider messages={messages}>
          <QuoteCartProvider>
            <SkipLink />
            <div className="flex min-h-screen flex-col">
              <SiteShell>{children}</SiteShell>
            </div>
          </QuoteCartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
