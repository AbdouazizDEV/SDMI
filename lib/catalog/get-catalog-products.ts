import {
  catalogProductHref,
  formatPn,
  type CatalogProductListItem,
} from "@/lib/catalog/catalog-product";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import type { CatalogProductFacets } from "@/lib/catalog/catalog-facets";
import {
  findSeedBySlug,
  listAllSeedFacets,
  listSeedsForSubfamily,
  seedToFacets,
  seedToListItem,
} from "@/lib/catalog/catalog-seeds";
import { allDemoCatalogProducts } from "@/lib/catalog/demo-products";
import { pickLocalized } from "@/lib/home/pick-localized";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

function parseLocalized(value: unknown): LocalizedText {
  if (
    typeof value === "object" &&
    value !== null &&
    "fr" in value &&
    "en" in value &&
    typeof (value as LocalizedText).fr === "string" &&
    typeof (value as LocalizedText).en === "string"
  ) {
    return value as LocalizedText;
  }
  return { fr: "", en: "" };
}

function demoToListItem(product: (typeof allDemoCatalogProducts)[number]): CatalogProductListItem {
  return {
    id: null,
    slug: product.slug,
    reference: product.reference,
    name: product.name,
    description: product.description,
    dn: product.dn,
    pn: product.pn,
    material: product.material,
    familySlug: product.familySlug,
    subfamilySlug: product.subfamilySlug,
    listingKind: "sku",
  };
}

function seedProductsForSubfamily(
  familySlug: string,
  subfamilySlug: string,
): CatalogProductListItem[] {
  return listSeedsForSubfamily(familySlug, subfamilySlug).map(seedToListItem);
}

function mergeWithSeeds(
  familySlug: string,
  subfamilySlug: string,
  fromDb: CatalogProductListItem[],
): CatalogProductListItem[] {
  const seeds = seedProductsForSubfamily(familySlug, subfamilySlug);
  if (!seeds.length) {
    return fromDb;
  }
  const slugs = new Set(fromDb.map((product) => product.slug));
  const extra = seeds.filter((seed) => !slugs.has(seed.slug));
  return [...fromDb, ...extra];
}

function demoProductsForSubfamily(
  familySlug: string,
  subfamilySlug: string,
): CatalogProductListItem[] {
  const demo = allDemoCatalogProducts
    .filter(
      (product) =>
        product.familySlug === familySlug && product.subfamilySlug === subfamilySlug,
    )
    .map(demoToListItem);
  return mergeWithSeeds(familySlug, subfamilySlug, demo);
}

export async function listProductsForSubfamily(
  familySlug: string,
  subfamilySlug: string,
): Promise<CatalogProductListItem[]> {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return demoProductsForSubfamily(familySlug, subfamilySlug);
  }

  const { data: subfamilyRow, error: subError } = await supabase
    .from("product_subfamilies")
    .select("id, slug, product_families!inner(slug)")
    .eq("slug", subfamilySlug)
    .eq("product_families.slug", familySlug)
    .maybeSingle();

  if (subError || !subfamilyRow) {
    return demoProductsForSubfamily(familySlug, subfamilySlug);
  }

  const { data: rows, error } = await supabase
    .from("products")
    .select(
      "id, slug, reference, name, short_description, dn, pn, body_material:materials!products_body_material_id_fkey(name)",
    )
    .eq("subfamily_id", subfamilyRow.id)
    .eq("is_published", true)
    .order("sort_order");

  if (error || !rows?.length) {
    return demoProductsForSubfamily(familySlug, subfamilySlug);
  }

  const fromDb = rows.map((row) => {
    const bodyMaterial = row.body_material as { name: unknown } | null;
    const materialName = bodyMaterial ? parseLocalized(bodyMaterial.name) : null;

    return {
      id: row.id,
      slug: row.slug,
      reference: row.reference,
      name: parseLocalized(row.name),
      description: parseLocalized(row.short_description),
      dn: row.dn,
      pn: formatPn(row.pn),
      material: materialName?.fr || materialName?.en ? materialName : null,
      familySlug,
      subfamilySlug,
      listingKind: "sku" as const,
    };
  });

  return mergeWithSeeds(familySlug, subfamilySlug, fromDb);
}

export async function getProductBySlug(slug: string): Promise<CatalogProductListItem | null> {
  const seed = findSeedBySlug(slug);
  if (seed) {
    return seedToListItem(seed);
  }

  const fromDemo = allDemoCatalogProducts.find((product) => product.slug === slug);
  if (fromDemo) {
    return demoToListItem(fromDemo);
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return null;
  }

  const { data: row, error } = await supabase
    .from("products")
    .select(
      `
      id,
      slug,
      reference,
      name,
      short_description,
      dn,
      pn,
      body_material:materials!products_body_material_id_fkey(name),
      product_subfamilies!inner(
        slug,
        product_families!inner(slug)
      )
    `,
    )
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  if (error || !row) {
    return null;
  }

  const subfamily = row.product_subfamilies as {
    slug: string;
    product_families: { slug: string };
  };
  const bodyMaterial = row.body_material as { name: unknown } | null;
  const materialName = bodyMaterial ? parseLocalized(bodyMaterial.name) : null;

  return {
    id: row.id,
    slug: row.slug,
    reference: row.reference,
    name: parseLocalized(row.name),
    description: parseLocalized(row.short_description),
    dn: row.dn,
    pn: formatPn(row.pn),
    material: materialName?.fr || materialName?.en ? materialName : null,
    familySlug: subfamily.product_families.slug,
    subfamilySlug: subfamily.slug,
    listingKind: "sku",
  };
}

export function filterCatalogProducts(
  products: CatalogProductListItem[],
  filters: { dn?: number; pn?: string; material?: string },
): CatalogProductListItem[] {
  return products.filter((product) => {
    if (filters.dn !== undefined && product.dn !== filters.dn) {
      return false;
    }
    if (filters.pn && product.pn?.toUpperCase() !== filters.pn.toUpperCase()) {
      return false;
    }
    if (filters.material) {
      const needle = filters.material.toLowerCase();
      const hay =
        `${product.material?.fr ?? ""} ${product.material?.en ?? ""}`.toLowerCase();
      if (!hay.includes(needle)) {
        return false;
      }
    }
    return true;
  });
}

function demoFacetsForSlug(slug: string): Omit<
  CatalogProductFacets,
  keyof CatalogProductListItem
> {
  const demo = allDemoCatalogProducts.find((product) => product.slug === slug);
  return {
    connectionType: demo?.connectionType ?? null,
    standards: demo?.standards ?? [],
    sectorTags: demo?.sectorTags ?? [],
    stockUnits: demo?.stockUnits ?? 0,
    certified31: demo?.certified31 ?? false,
  };
}

export function enrichProductFacets(product: CatalogProductListItem): CatalogProductFacets {
  const seed = findSeedBySlug(product.slug);
  if (seed) {
    return seedToFacets(seed);
  }
  return {
    ...product,
    ...demoFacetsForSlug(product.slug),
  };
}

export function listAllDemoOrMergedProducts(): CatalogProductFacets[] {
  const seedFacets = listAllSeedFacets();
  const seedSlugs = new Set(seedFacets.map((product) => product.slug));
  const demoFacets = allDemoCatalogProducts
    .filter((product) => !seedSlugs.has(product.slug))
    .map((product) => ({
      ...demoToListItem(product),
      connectionType: product.connectionType ?? null,
      standards: product.standards ?? [],
      sectorTags: product.sectorTags ?? [],
      stockUnits: product.stockUnits ?? 0,
      certified31: product.certified31 ?? false,
    }));
  return [...seedFacets, ...demoFacets];
}

export function toBrowseProductCard(
  product: CatalogProductFacets,
  locale: SiteLocale,
) {
  const listingKind = product.listingKind ?? "sku";
  const quoteOnConfiguration =
    product.quoteOnConfiguration ?? listingKind === "range";
  const connectionLabel =
    product.technicalSpecs?.connectionLabel != null
      ? pickLocalized(product.technicalSpecs.connectionLabel, locale)
      : null;

  return {
    id: product.id,
    slug: product.slug,
    reference: product.reference,
    name: product.name,
    description: product.description,
    title: pickLocalized(product.name, locale),
    descriptionText: pickLocalized(product.description, locale),
    dn: product.dn,
    pn: product.pn,
    materialLabel: product.material ? pickLocalized(product.material, locale) : null,
    href: catalogProductHref(product),
    familySlug: product.familySlug,
    subfamilySlug: product.subfamilySlug,
    stockUnits: product.stockUnits,
    certified31: product.certified31,
    listingKind,
    quoteOnConfiguration,
    pressureClass: product.technicalSpecs?.pressureClass ?? null,
    trim: product.technicalSpecs?.trim ?? null,
    connectionLabel,
    documentCount: product.technicalSpecs?.documentCount ?? 0,
    imagePath: resolveProductShowcaseImage(product.subfamilySlug, product.familySlug, {
      reference: product.reference,
      productSlug: product.slug,
    }),
  };
}

export { catalogProductHref };
