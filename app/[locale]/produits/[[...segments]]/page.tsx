import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { CatalogBrowsePage } from "@/components/features/catalog/catalog-browse-page";
import { CatalogFamilyPage } from "@/components/features/catalog/catalog-family-page";
import { CatalogProductPage } from "@/components/features/catalog/catalog-product-page";
import { CatalogSubfamilyPage } from "@/components/features/catalog/catalog-subfamily-page";
import { getProductBySlug } from "@/lib/catalog/get-catalog-products";
import { getCatalogNavigation } from "@/lib/catalog/navigation";
import {
  isCatalogFamilyBrowseable,
  isCatalogSubfamilyBrowseable,
} from "@/lib/catalog/catalog-readiness";
import { resolveCatalogPath } from "@/lib/catalog/resolve-catalog-path";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

type ProductsPageProps = {
  params: Promise<{ locale: string; segments?: string[] }>;
  searchParams: Promise<{ dn?: string; pn?: string; material?: string; q?: string }>;
};

export default async function ProductsCatchAllPage({ params, searchParams }: ProductsPageProps) {
  const { locale, segments = [] } = await params;
  const filters = await searchParams;
  setRequestLocale(locale);
  const siteLocale = locale as SiteLocale;

  if (segments.length === 0) {
    return <CatalogBrowsePage searchQuery={filters.q} />;
  }

  if (segments.length === 3) {
    const [familySlug, subfamilySlug, productSlug] = segments;
    const resolved = await resolveCatalogPath([familySlug, subfamilySlug]);
    if (!resolved || resolved.kind !== "subfamily") {
      notFound();
    }
    if (!isCatalogSubfamilyBrowseable(resolved.subfamilySlug)) {
      notFound();
    }
    const product = await getProductBySlug(productSlug);
    if (
      !product ||
      product.familySlug !== familySlug ||
      product.subfamilySlug !== subfamilySlug
    ) {
      notFound();
    }
    return (
      <CatalogProductPage
        product={product}
        familyName={pickLocalized(resolved.family.name, siteLocale)}
        subfamilyName={pickLocalized(resolved.subfamilyName, siteLocale)}
      />
    );
  }

  if (segments.length === 1) {
    const resolved = await resolveCatalogPath(segments);
    if (resolved?.kind === "family") {
      if (!isCatalogFamilyBrowseable(resolved.family.slug)) {
        notFound();
      }
      return <CatalogFamilyPage family={resolved.family} />;
    }

    const product = await getProductBySlug(segments[0]!);
    if (product) {
      const navigation = await getCatalogNavigation();
      const family = navigation.families.find((f) => f.slug === product.familySlug);
      const sub = family?.subfamilies.find((s) => s.slug === product.subfamilySlug);
      if (!family || !sub) {
        notFound();
      }
      return (
        <CatalogProductPage
          product={product}
          familyName={pickLocalized(family.name, siteLocale)}
          subfamilyName={pickLocalized(sub.name, siteLocale)}
        />
      );
    }

    notFound();
  }

  if (segments.length === 2) {
    const resolved = await resolveCatalogPath(segments);
    if (!resolved || resolved.kind !== "subfamily") {
      notFound();
    }
    if (!isCatalogSubfamilyBrowseable(resolved.subfamilySlug)) {
      notFound();
    }
    return (
      <CatalogSubfamilyPage
        family={resolved.family}
        subfamilySlug={resolved.subfamilySlug}
        subfamilyName={resolved.subfamilyName}
        searchParams={filters}
      />
    );
  }

  notFound();
}
