import type { CatalogBrowseFilters } from "@/lib/catalog/catalog-facets";

type SearchParamRecord = Record<string, string | string[] | undefined>;

function readMulti(value: string | string[] | undefined): string[] | undefined {
  if (!value) {
    return undefined;
  }
  const list = Array.isArray(value) ? value : [value];
  const trimmed = list.map((v) => v.trim()).filter(Boolean);
  return trimmed.length ? trimmed : undefined;
}

function readNumber(value: string | undefined): number | undefined {
  if (!value) {
    return undefined;
  }
  const n = Number.parseInt(value, 10);
  return Number.isNaN(n) ? undefined : n;
}

export function parseBrowseFiltersFromRecord(
  params: SearchParamRecord,
): CatalogBrowseFilters {
  const sort = params.sort;
  const sortValue =
    sort === "dn-asc" || sort === "dn-desc" || sort === "ref-asc" || sort === "relevance"
      ? sort
      : undefined;

  return {
    q: typeof params.q === "string" ? params.q : undefined,
    subfamilies: readMulti(params.sf),
    materials: readMulti(params.mat),
    pn: readMulti(params.pn),
    connections: readMulti(params.conn),
    standards: readMulti(params.std),
    sectors: readMulti(params.sector),
    dnMin: readNumber(typeof params.dnMin === "string" ? params.dnMin : undefined),
    dnMax: readNumber(typeof params.dnMax === "string" ? params.dnMax : undefined),
    sort: sortValue,
  };
}

export function buildBrowseQueryString(filters: CatalogBrowseFilters): string {
  const params = new URLSearchParams();
  if (filters.q) {
    params.set("q", filters.q);
  }
  filters.subfamilies?.forEach((v) => params.append("sf", v));
  filters.materials?.forEach((v) => params.append("mat", v));
  filters.pn?.forEach((v) => params.append("pn", v));
  filters.connections?.forEach((v) => params.append("conn", v));
  filters.standards?.forEach((v) => params.append("std", v));
  filters.sectors?.forEach((v) => params.append("sector", v));
  if (filters.dnMin !== undefined) {
    params.set("dnMin", String(filters.dnMin));
  }
  if (filters.dnMax !== undefined) {
    params.set("dnMax", String(filters.dnMax));
  }
  if (filters.sort && filters.sort !== "relevance") {
    params.set("sort", filters.sort);
  }
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
