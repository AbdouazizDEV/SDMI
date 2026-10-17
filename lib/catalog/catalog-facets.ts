import type { CatalogProductListItem } from "@/lib/catalog/catalog-product";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

export type CatalogBrowseFilters = {
  q?: string;
  subfamilies?: string[];
  materials?: string[];
  pn?: string[];
  connections?: string[];
  standards?: string[];
  sectors?: string[];
  dnMin?: number;
  dnMax?: number;
  sort?: "relevance" | "dn-asc" | "dn-desc" | "ref-asc";
};

export type CatalogProductFacets = CatalogProductListItem & {
  connectionType: string | null;
  standards: string[];
  sectorTags: string[];
  stockUnits: number;
  certified31: boolean;
};

export function materialKey(product: CatalogProductListItem, locale: SiteLocale): string {
  if (!product.material) {
    return "";
  }
  return pickLocalized(product.material, locale);
}

export function filterCatalogProductsAdvanced(
  products: CatalogProductFacets[],
  filters: CatalogBrowseFilters,
  locale: SiteLocale,
): CatalogProductFacets[] {
  let result = products;

  const q = filters.q?.trim().toLowerCase();
  if (q) {
    result = result.filter((product) => {
      const name = pickLocalized(product.name, locale).toLowerCase();
      const material = materialKey(product, locale).toLowerCase();
      const hay = `${name} ${product.reference.toLowerCase()} ${product.slug} ${product.pn?.toLowerCase() ?? ""} ${material} ${product.dn ?? ""}`;
      const dnQuery = q.match(/^dn\s*(\d+)$/)?.[1] ?? (/^\d+$/.test(q) ? q : null);
      if (dnQuery && product.dn === Number.parseInt(dnQuery, 10)) {
        return true;
      }
      return hay.includes(q);
    });
  }

  if (filters.subfamilies?.length) {
    const set = new Set(filters.subfamilies);
    result = result.filter((p) => set.has(p.subfamilySlug));
  }

  if (filters.materials?.length) {
    const needles = filters.materials.map((m) => m.toLowerCase());
    result = result.filter((p) => {
      const mat = materialKey(p, locale).toLowerCase();
      return needles.some((needle) => mat.includes(needle));
    });
  }

  if (filters.pn?.length) {
    const needles = filters.pn.map((v) => v.toUpperCase());
    result = result.filter(
      (p) => p.pn && needles.some((needle) => p.pn!.toUpperCase().includes(needle)),
    );
  }

  if (filters.connections?.length) {
    const set = new Set(filters.connections);
    result = result.filter((p) => p.connectionType && set.has(p.connectionType));
  }

  if (filters.standards?.length) {
    const set = new Set(filters.standards);
    result = result.filter((p) => p.standards.some((s) => set.has(s)));
  }

  if (filters.sectors?.length) {
    const set = new Set(filters.sectors);
    result = result.filter((p) => p.sectorTags.some((s) => set.has(s)));
  }

  if (filters.dnMin !== undefined) {
    result = result.filter((p) => p.dn !== null && p.dn >= filters.dnMin!);
  }
  if (filters.dnMax !== undefined) {
    result = result.filter((p) => p.dn !== null && p.dn <= filters.dnMax!);
  }

  switch (filters.sort) {
    case "dn-asc":
      return [...result].sort((a, b) => (a.dn ?? 0) - (b.dn ?? 0));
    case "dn-desc":
      return [...result].sort((a, b) => (b.dn ?? 0) - (a.dn ?? 0));
    case "ref-asc":
      return [...result].sort((a, b) => a.reference.localeCompare(b.reference));
    default:
      return result;
  }
}

export function countBy<T extends string>(
  items: T[],
): Record<string, number> {
  return items.reduce<Record<string, number>>((acc, key) => {
    if (!key) {
      return acc;
    }
    acc[key] = (acc[key] ?? 0) + 1;
    return acc;
  }, {});
}
