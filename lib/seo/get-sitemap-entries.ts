import type { MetadataRoute } from "next";

import { catalogProductHref } from "@/lib/catalog/catalog-product";
import { demoCatalogProducts } from "@/lib/catalog/demo-products";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import { staticPublicPaths } from "@/lib/seo/static-paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { siteConfig, type SiteLocale } from "@/lib/site";

function buildLocalizedUrl(locale: SiteLocale, path: string): string {
  const normalized =
    path === "/" || path === ""
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;

  if (!normalized) {
    return new URL(`/${locale}`, siteConfig.url).toString();
  }

  return new URL(`/${locale}${normalized}`, siteConfig.url).toString();
}

type SitemapEntry = MetadataRoute.Sitemap[number];

function entryForPath(
  path: string,
  lastModified: Date,
  priority: number,
): SitemapEntry {
  const languages = Object.fromEntries(
    siteConfig.locales.map((locale) => [
      locale,
      buildLocalizedUrl(locale, path),
    ]),
  );

  languages["x-default"] = buildLocalizedUrl(siteConfig.defaultLocale, path);

  return {
    url: buildLocalizedUrl(siteConfig.defaultLocale, path),
    lastModified,
    changeFrequency: path.includes("/produits/") ? "weekly" : "monthly",
    priority,
    alternates: { languages },
  };
}

function appendLegacyCatalogPaths(entries: SitemapEntry[], lastModified: Date) {
  const seen = new Set(entries.map((entry) => entry.url));

  for (const family of legacyCatalogNavigation.families) {
    const familyPath = `/produits/${family.slug}`;
    if (!seen.has(buildLocalizedUrl(siteConfig.defaultLocale, familyPath))) {
      entries.push(entryForPath(familyPath, lastModified, 0.75));
      seen.add(buildLocalizedUrl(siteConfig.defaultLocale, familyPath));
    }
    for (const sub of family.subfamilies) {
      const subPath = `/produits/${family.slug}/${sub.slug}`;
      if (!seen.has(buildLocalizedUrl(siteConfig.defaultLocale, subPath))) {
        entries.push(entryForPath(subPath, lastModified, 0.72));
        seen.add(buildLocalizedUrl(siteConfig.defaultLocale, subPath));
      }
    }
  }

  for (const product of demoCatalogProducts) {
    const productPath = catalogProductHref({
      familySlug: product.familySlug,
      subfamilySlug: product.subfamilySlug,
      slug: product.slug,
    });
    if (!seen.has(buildLocalizedUrl(siteConfig.defaultLocale, productPath))) {
      entries.push(entryForPath(productPath, lastModified, 0.8));
      seen.add(buildLocalizedUrl(siteConfig.defaultLocale, productPath));
    }
  }
}

export async function getSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of staticPublicPaths) {
    entries.push(
      entryForPath(path === "" ? "/" : path, lastModified, path === "" ? 1 : 0.7),
    );
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    appendLegacyCatalogPaths(entries, lastModified);
    return entries;
  }

  const [{ data: products }, { data: subfamilies }, { data: sectors }] =
    await Promise.all([
      supabase
        .from("products")
        .select(
          `
          slug,
          updated_at,
          product_subfamilies!inner(
            slug,
            product_families!inner(slug)
          )
        `,
        )
        .eq("is_published", true),
      supabase
        .from("product_subfamilies")
        .select(
          `
          slug,
          updated_at,
          product_families!inner(slug)
        `,
        ),
      supabase.from("application_sectors").select("slug, updated_at"),
    ]);

  for (const row of products ?? []) {
    const sub = row.product_subfamilies as {
      slug: string;
      product_families: { slug: string };
    };
    const path = `/produits/${sub.product_families.slug}/${sub.slug}/${row.slug}`;
    entries.push(
      entryForPath(
        path,
        row.updated_at ? new Date(row.updated_at) : lastModified,
        0.8,
      ),
    );
  }

  for (const row of subfamilies ?? []) {
    const family = row.product_families as { slug: string };
    entries.push(
      entryForPath(
        `/produits/${family.slug}/${row.slug}`,
        row.updated_at ? new Date(row.updated_at) : lastModified,
        0.72,
      ),
    );
    entries.push(
      entryForPath(
        `/produits/${family.slug}`,
        row.updated_at ? new Date(row.updated_at) : lastModified,
        0.75,
      ),
    );
  }

  for (const sector of sectors ?? []) {
    entries.push(
      entryForPath(
        `/secteurs/${sector.slug}`,
        sector.updated_at ? new Date(sector.updated_at) : lastModified,
        0.65,
      ),
    );
  }

  appendLegacyCatalogPaths(entries, lastModified);

  const byUrl = new Map<string, SitemapEntry>();
  for (const entry of entries) {
    byUrl.set(entry.url, entry);
  }
  return [...byUrl.values()];
}
