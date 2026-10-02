import type { Metadata } from "next";

import { siteConfig, type SiteLocale } from "@/lib/site";

type PageMetadataInput = {
  locale: SiteLocale;
  title: string;
  description: string;
  path?: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  path = "",
}: PageMetadataInput): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const localePath =
    normalizedPath === "/" ? `/${locale}` : `/${locale}${normalizedPath}`;
  const canonical = new URL(localePath, siteConfig.url).toString();

  const languages = Object.fromEntries(
    siteConfig.locales.map((loc) => [
      loc,
      new URL(
        loc === siteConfig.defaultLocale && normalizedPath === "/"
          ? `/${loc}`
          : `/${loc}${normalizedPath === "/" ? "" : normalizedPath}`,
        siteConfig.url,
      ).toString(),
    ]),
  );

  languages["x-default"] =
    languages[siteConfig.defaultLocale] ?? canonical;

  const ogImageUrl = new URL("/opengraph-image", siteConfig.url).toString();

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_SN" : "en_US",
      alternateLocale: siteConfig.locales
        .filter((loc) => loc !== locale)
        .map((loc) => (loc === "fr" ? "fr_SN" : "en_US")),
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
