"use client";

import { useMemo, useState, useTransition } from "react";
import {
  ChevronDownIcon,
  LayoutGridIcon,
  ListIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react";
import { useSearchParams } from "next/navigation";

import {
  CatalogProductGridCard,
  type CatalogBrowseProductDto,
} from "@/components/features/catalog/catalog-product-grid-card";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  countBy,
  filterCatalogProductsAdvanced,
  materialKey,
  type CatalogBrowseFilters,
  type CatalogProductFacets,
} from "@/lib/catalog/catalog-facets";
import {
  buildBrowseQueryString,
  parseBrowseFiltersFromRecord,
} from "@/lib/catalog/parse-browse-filters";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

export type CatalogBrowseLabels = {
  filtersTitle: string;
  clearAll: string;
  filterDeviceFamily: string;
  filterMaterial: string;
  filterDn: string;
  filterPn: string;
  filterConnection: string;
  filterStandards: string;
  filterSector: string;
  filtersHelpTitle: string;
  filtersHelpText: string;
  quoteHelpCta: string;
  activeFilters: string;
  resetFilters: string;
  resultsRange: string;
  sortBy: string;
  sortRelevance: string;
  sortDnAsc: string;
  sortDnDesc: string;
  sortRefAsc: string;
  specDn: string;
  specPn: string;
  specMaterial: string;
  stockInStock: string;
  certifiedBadge: string;
  pdfLabel: string;
  quoteProductCta: string;
  rangeBadge: string;
  dnOnConfiguration: string;
  quoteOnConfigurationLabel: string;
  connections: Record<string, string>;
  standards: Record<string, string>;
  sectors: Record<string, string>;
  phone: string;
  phoneHref: string;
};

type CatalogBrowseWorkspaceProps = {
  products: CatalogProductFacets[];
  productCards: CatalogBrowseProductDto[];
  locale: SiteLocale;
  labels: CatalogBrowseLabels;
  subfamilyLabels: Record<string, string>;
};

function toggleValue(list: string[] | undefined, value: string): string[] {
  const set = new Set(list ?? []);
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
  return [...set];
}

function FilterSection({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details open={defaultOpen} className="group border-border/60 border-b pb-4">
      <summary className="text-muted-foreground flex cursor-pointer list-none items-center justify-between py-2 text-xs font-bold tracking-wider uppercase [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDownIcon
          aria-hidden
          className="size-4 transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="pt-2">{children}</div>
    </details>
  );
}

function CheckboxRow({
  id,
  label,
  count,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  count: number;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label
      htmlFor={id}
      className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 rounded-md px-1 py-1.5 text-sm"
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="border-border text-primary size-4 rounded"
      />
      <span className="flex-1 leading-snug">{label}</span>
      <span className="text-muted-foreground text-xs tabular-nums">({count})</span>
    </label>
  );
}

export function CatalogBrowseWorkspace({
  products,
  productCards,
  locale,
  labels,
  subfamilyLabels,
}: CatalogBrowseWorkspaceProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();
  const [view, setView] = useState<"grid" | "list">("grid");

  const filters = useMemo(() => {
    const record: Record<string, string | string[] | undefined> = {};
    searchParams.forEach((value, key) => {
      const existing = record[key];
      if (existing === undefined) {
        record[key] = value;
      } else if (Array.isArray(existing)) {
        record[key] = [...existing, value];
      } else {
        record[key] = [existing, value];
      }
    });
    return parseBrowseFiltersFromRecord(record);
  }, [searchParams]);

  const filtered = useMemo(
    () => filterCatalogProductsAdvanced(products, filters, locale),
    [products, filters, locale],
  );

  const filteredSlugs = new Set(filtered.map((p) => p.slug));
  const visibleCards = productCards.filter((p) => filteredSlugs.has(p.slug));

  const dnValues = products.map((p) => p.dn).filter((v): v is number => v !== null);
  const dnMinBound = Math.min(...dnValues, 15);
  const dnMaxBound = Math.max(...dnValues, 500);

  const subfamilyCounts = countBy(products.map((p) => p.subfamilySlug));
  const materialCounts = countBy(products.map((p) => materialKey(p, locale)));
  const pnCounts = countBy(products.map((p) => p.pn ?? ""));
  const connectionCounts = countBy(
    products.map((p) => p.connectionType ?? ""),
  );

  function pushFilters(next: CatalogBrowseFilters) {
    const qs = buildBrowseQueryString(next);
    startTransition(() => {
      router.push(`${pathname}${qs}`, { scroll: false });
    });
  }

  function update(partial: Partial<CatalogBrowseFilters>) {
    pushFilters({ ...filters, ...partial });
  }

  const activeTags: { key: string; label: string; onRemove: () => void }[] = [];

  filters.subfamilies?.forEach((sf) => {
    activeTags.push({
      key: `sf-${sf}`,
      label: subfamilyLabels[sf] ?? sf,
      onRemove: () =>
        update({
          subfamilies: filters.subfamilies?.filter((v) => v !== sf),
        }),
    });
  });
  filters.materials?.forEach((mat) => {
    activeTags.push({
      key: `mat-${mat}`,
      label: mat,
      onRemove: () =>
        update({ materials: filters.materials?.filter((v) => v !== mat) }),
    });
  });
  filters.pn?.forEach((pn) => {
    activeTags.push({
      key: `pn-${pn}`,
      label: pn,
      onRemove: () => update({ pn: filters.pn?.filter((v) => v !== pn) }),
    });
  });
  if (filters.dnMin !== undefined || filters.dnMax !== undefined) {
    activeTags.push({
      key: "dn-range",
      label: `DN ${filters.dnMin ?? dnMinBound}–${filters.dnMax ?? dnMaxBound}`,
      onRemove: () => update({ dnMin: undefined, dnMax: undefined }),
    });
  }

  const sortValue = filters.sort ?? "relevance";

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(260px,300px)_1fr] lg:gap-10">
      <aside
        className="sdmi-surface-card sdmi-surface-card-accent border-border/80 h-fit bg-card/95 p-5 lg:sticky lg:top-36"
        aria-labelledby="catalog-advanced-filters"
      >
        <div className="mb-4 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <SlidersHorizontalIcon aria-hidden className="text-cta size-4" />
            <h2
              id="catalog-advanced-filters"
              className="font-heading text-primary text-sm font-bold tracking-wide uppercase"
            >
              {labels.filtersTitle}
            </h2>
          </div>
          {activeTags.length > 0 ? (
            <button
              type="button"
              onClick={() => pushFilters({ sort: filters.sort })}
              className="text-cta text-[11px] font-bold tracking-wide uppercase hover:underline"
            >
              {labels.clearAll}
            </button>
          ) : null}
        </div>

        <div className="max-h-[70vh] space-y-1 overflow-y-auto pr-1">
          <FilterSection title={labels.filterDeviceFamily}>
            <ul className="space-y-0.5">
              {Object.entries(subfamilyCounts)
                .sort((a, b) => b[1] - a[1])
                .map(([slug, count]) => (
                  <li key={slug}>
                    <CheckboxRow
                      id={`sf-${slug}`}
                      label={subfamilyLabels[slug] ?? slug}
                      count={count}
                      checked={filters.subfamilies?.includes(slug) ?? false}
                      onChange={() =>
                        update({
                          subfamilies: toggleValue(filters.subfamilies, slug),
                        })
                      }
                    />
                  </li>
                ))}
            </ul>
          </FilterSection>

          <FilterSection title={labels.filterMaterial}>
            <ul className="space-y-0.5">
              {Object.entries(materialCounts)
                .filter(([key]) => key)
                .sort((a, b) => b[1] - a[1])
                .map(([material, count]) => (
                  <li key={material}>
                    <CheckboxRow
                      id={`mat-${material}`}
                      label={material}
                      count={count}
                      checked={filters.materials?.includes(material) ?? false}
                      onChange={() =>
                        update({
                          materials: toggleValue(filters.materials, material),
                        })
                      }
                    />
                  </li>
                ))}
            </ul>
          </FilterSection>

          <FilterSection title={labels.filterDn}>
            <div className="space-y-3 px-1">
              <div className="flex gap-2">
                <label className="flex-1 text-xs">
                  <span className="text-muted-foreground">Min</span>
                  <input
                    type="number"
                    min={dnMinBound}
                    max={dnMaxBound}
                    value={filters.dnMin ?? dnMinBound}
                    onChange={(e) =>
                      update({ dnMin: Number.parseInt(e.target.value, 10) })
                    }
                    className="border-border mt-1 w-full rounded-md border px-2 py-1.5 text-sm"
                  />
                </label>
                <label className="flex-1 text-xs">
                  <span className="text-muted-foreground">Max</span>
                  <input
                    type="number"
                    min={dnMinBound}
                    max={dnMaxBound}
                    value={filters.dnMax ?? dnMaxBound}
                    onChange={(e) =>
                      update({ dnMax: Number.parseInt(e.target.value, 10) })
                    }
                    className="border-border mt-1 w-full rounded-md border px-2 py-1.5 text-sm"
                  />
                </label>
              </div>
              <input
                type="range"
                min={dnMinBound}
                max={dnMaxBound}
                value={filters.dnMax ?? dnMaxBound}
                onChange={(e) =>
                  update({ dnMax: Number.parseInt(e.target.value, 10) })
                }
                className="accent-primary w-full"
              />
            </div>
          </FilterSection>

          <FilterSection title={labels.filterPn}>
            <ul className="flex flex-wrap gap-2">
              {Object.entries(pnCounts)
                .filter(([key]) => key)
                .map(([pn, count]) => {
                  const active = filters.pn?.includes(pn) ?? false;
                  return (
                    <li key={pn}>
                      <button
                        type="button"
                        onClick={() =>
                          update({ pn: toggleValue(filters.pn, pn) })
                        }
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                          active
                            ? "bg-primary text-primary-foreground"
                            : "border-border border bg-white hover:bg-muted/50",
                        )}
                      >
                        {pn}{" "}
                        <span className="opacity-70">({count})</span>
                      </button>
                    </li>
                  );
                })}
            </ul>
          </FilterSection>

          <FilterSection title={labels.filterConnection} defaultOpen={false}>
            <ul className="space-y-0.5">
              {Object.entries(connectionCounts)
                .filter(([key]) => key)
                .map(([conn, count]) => (
                  <li key={conn}>
                    <CheckboxRow
                      id={`conn-${conn}`}
                      label={labels.connections[conn] ?? conn}
                      count={count}
                      checked={filters.connections?.includes(conn) ?? false}
                      onChange={() =>
                        update({
                          connections: toggleValue(filters.connections, conn),
                        })
                      }
                    />
                  </li>
                ))}
            </ul>
          </FilterSection>

          <FilterSection title={labels.filterStandards} defaultOpen={false}>
            <ul className="flex flex-wrap gap-2">
              {(["en10204", "iso5211", "atex"] as const).map((std) => (
                <li key={std}>
                  <button
                    type="button"
                    onClick={() =>
                      update({ standards: toggleValue(filters.standards, std) })
                    }
                    className={cn(
                      "rounded-md px-2.5 py-1 text-[11px] font-semibold",
                      filters.standards?.includes(std)
                        ? "bg-primary text-primary-foreground"
                        : "border-border border",
                    )}
                  >
                    {labels.standards[std]}
                  </button>
                </li>
              ))}
            </ul>
          </FilterSection>

          <FilterSection title={labels.filterSector} defaultOpen={false}>
            <ul className="space-y-0.5">
              {(["mines", "energy", "agro", "water", "fire"] as const).map((sector) => (
                <li key={sector}>
                  <CheckboxRow
                    id={`sector-${sector}`}
                    label={labels.sectors[sector]}
                    count={products.filter((p) => p.sectorTags.includes(sector)).length}
                    checked={filters.sectors?.includes(sector) ?? false}
                    onChange={() =>
                      update({ sectors: toggleValue(filters.sectors, sector) })
                    }
                  />
                </li>
              ))}
            </ul>
          </FilterSection>
        </div>

        <div className="border-border/70 mt-5 border-t pt-4">
          <p className="font-heading text-primary text-xs font-bold uppercase">
            {labels.filtersHelpTitle}
          </p>
          <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
            {labels.filtersHelpText}
          </p>
          <a href={labels.phoneHref} className="text-primary mt-2 block text-sm font-semibold">
            {labels.phone}
          </a>
          <Link
            href="/devis"
            className="bg-primary text-primary-foreground hover:bg-primary/90 mt-3 flex h-10 w-full items-center justify-center rounded-sm text-xs font-bold tracking-wide uppercase"
          >
            {labels.quoteHelpCta}
          </Link>
        </div>
      </aside>

      <div className="min-w-0">
        {activeTags.length > 0 ? (
          <div className="border-border/60 mb-4 flex flex-wrap items-center gap-2 rounded-lg border bg-card/80 px-3 py-2">
            <span className="text-muted-foreground text-xs font-bold uppercase">
              {labels.activeFilters}
            </span>
            {activeTags.map((tag) => (
              <button
                key={tag.key}
                type="button"
                onClick={tag.onRemove}
                className="bg-muted inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium"
              >
                {tag.label}
                <XIcon aria-hidden className="size-3" />
              </button>
            ))}
            <button
              type="button"
              onClick={() => pushFilters({ sort: filters.sort })}
              className="text-primary ml-auto text-xs font-semibold hover:underline"
            >
              {labels.resetFilters}
            </button>
          </div>
        ) : null}

        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            {labels.resultsRange
              .replace("{from}", visibleCards.length ? "1" : "0")
              .replace("{to}", String(visibleCards.length))
              .replace("{total}", String(products.length))}
          </p>
          <div className="flex items-center gap-2">
            <label className="text-muted-foreground flex items-center gap-2 text-xs">
              {labels.sortBy}
              <select
                value={sortValue}
                onChange={(e) =>
                  update({
                    sort: e.target.value as CatalogBrowseFilters["sort"],
                  })
                }
                className="border-border rounded-md border bg-background px-2 py-1.5 text-xs font-medium"
              >
                <option value="relevance">{labels.sortRelevance}</option>
                <option value="dn-asc">{labels.sortDnAsc}</option>
                <option value="dn-desc">{labels.sortDnDesc}</option>
                <option value="ref-asc">{labels.sortRefAsc}</option>
              </select>
            </label>
            <div className="border-border flex rounded-md border p-0.5">
              <button
                type="button"
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
                className={cn(
                  "rounded p-1.5",
                  view === "grid" ? "bg-primary text-primary-foreground" : "",
                )}
              >
                <LayoutGridIcon aria-hidden className="size-4" />
              </button>
              <button
                type="button"
                aria-pressed={view === "list"}
                onClick={() => setView("list")}
                className={cn(
                  "rounded p-1.5",
                  view === "list" ? "bg-primary text-primary-foreground" : "",
                )}
              >
                <ListIcon aria-hidden className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <ul
          className={cn(
            "grid gap-5",
            view === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1",
          )}
        >
          {visibleCards.map((product) => (
            <li key={product.slug}>
              <CatalogProductGridCard
                product={product}
                specDnLabel={labels.specDn}
                specPnLabel={labels.specPn}
                specMaterialLabel={labels.specMaterial}
                stockInStockLabel={labels.stockInStock}
                certifiedBadge={labels.certifiedBadge}
                pdfLabel={labels.pdfLabel}
                quoteCta={labels.quoteProductCta}
                rangeBadge={labels.rangeBadge}
                dnOnConfiguration={labels.dnOnConfiguration}
                quoteOnConfigurationLabel={labels.quoteOnConfigurationLabel}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
