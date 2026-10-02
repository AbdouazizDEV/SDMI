import { SlidersHorizontalIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { CatalogProductListItem } from "@/lib/catalog/catalog-product";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type CatalogFiltersSidebarProps = {
  locale: SiteLocale;
  basePath: string;
  products: CatalogProductListItem[];
  active: { dn?: number; pn?: string; material?: string };
};

function uniqueSorted(values: (string | number | null | undefined)[]) {
  return [...new Set(values.filter((v) => v !== null && v !== undefined && v !== ""))].sort(
    (a, b) => String(a).localeCompare(String(b), undefined, { numeric: true }),
  );
}

function filterPillClass(active: boolean) {
  return cn(
    "inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-colors",
    active
      ? "bg-primary text-primary-foreground shadow-sm"
      : "border-border/80 text-foreground hover:border-primary/40 border bg-white/80 hover:bg-muted/50",
  );
}

export async function CatalogFiltersSidebar({
  locale,
  basePath,
  products,
  active,
}: CatalogFiltersSidebarProps) {
  const t = await getTranslations("Catalog");

  const dnOptions = uniqueSorted(products.map((p) => p.dn));
  const pnOptions = uniqueSorted(products.map((p) => p.pn));
  const materialOptions = uniqueSorted(
    products.map((p) => (p.material ? pickLocalized(p.material, locale) : null)),
  );

  const hasFilterOptions =
    dnOptions.length > 0 || pnOptions.length > 0 || materialOptions.length > 0;

  function filterHref(next: Partial<typeof active>) {
    const params = new URLSearchParams();
    const merged = { ...active, ...next };
    if (merged.dn) params.set("dn", String(merged.dn));
    if (merged.pn) params.set("pn", merged.pn);
    if (merged.material) params.set("material", merged.material);
    const qs = params.toString();
    return qs ? `${basePath}?${qs}` : basePath;
  }

  return (
    <aside
      className="sdmi-surface-card sdmi-surface-card-accent border-border/80 h-fit bg-card/95 p-5 lg:sticky lg:top-36"
      aria-labelledby="catalog-filters-heading"
    >
      <div className="mb-4 flex items-center gap-2">
        <SlidersHorizontalIcon aria-hidden className="text-cta size-4" />
        <h2
          id="catalog-filters-heading"
          className="font-heading text-primary text-sm font-bold tracking-wide uppercase"
        >
          {t("filtersTitle")}
        </h2>
      </div>

      {hasFilterOptions ? (
        <div className="space-y-5 text-sm">
          {dnOptions.length > 0 ? (
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-bold tracking-wider uppercase">
                {t("filterDn")}
              </p>
              <ul className="flex flex-wrap gap-2">
                {dnOptions.map((dn) => (
                  <li key={String(dn)}>
                    <Link
                      href={filterHref({ dn: Number(dn) })}
                      className={filterPillClass(active.dn === Number(dn))}
                    >
                      DN{dn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {pnOptions.length > 0 ? (
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-bold tracking-wider uppercase">
                {t("filterPn")}
              </p>
              <ul className="flex flex-wrap gap-2">
                {pnOptions.map((pn) => (
                  <li key={String(pn)}>
                    <Link
                      href={filterHref({ pn: String(pn) })}
                      className={filterPillClass(
                        active.pn?.toUpperCase() === String(pn).toUpperCase(),
                      )}
                    >
                      {pn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {materialOptions.length > 0 ? (
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-bold tracking-wider uppercase">
                {t("filterMaterial")}
              </p>
              <ul className="space-y-1.5">
                {materialOptions.map((material) => (
                  <li key={String(material)}>
                    <Link
                      href={filterHref({ material: String(material) })}
                      className={cn(
                        "block rounded-lg px-2 py-1.5 text-sm transition-colors",
                        active.material === material
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-primary",
                      )}
                    >
                      {material}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {active.dn || active.pn || active.material ? (
            <Link
              href={basePath}
              className="text-primary inline-block text-xs font-semibold hover:underline"
            >
              {t("filterReset")}
            </Link>
          ) : null}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm leading-relaxed">{t("filtersPendingHint")}</p>
      )}

      <div className="border-border/70 mt-6 border-t pt-5">
        <p className="text-muted-foreground mb-3 text-xs leading-relaxed">{t("filtersHelpText")}</p>
        <Link
          href="/devis"
          className={buttonVariants({
            className:
              "bg-cta text-cta-foreground hover:bg-cta/90 w-full rounded-full font-bold tracking-wide uppercase",
          })}
        >
          {t("quoteHelpCta")}
        </Link>
      </div>
    </aside>
  );
}
