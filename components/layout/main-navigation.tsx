"use client";

import { ChevronDownIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { NavPendingLink } from "@/components/layout/nav-pending-link";
import { Link, usePathname } from "@/i18n/navigation";
import {
  pickCatalogLabel,
  type CatalogNavigation,
} from "@/lib/catalog/navigation";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type MainNavigationProps = {
  catalog: CatalogNavigation;
  className?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

const staticLinks = [
  { key: "sectors" as const, href: "/secteurs" },
  { key: "documentation" as const, href: "/documentation" },
  { key: "about" as const, href: "/a-propos" },
  { key: "contact" as const, href: "/contact" },
];

export function MainNavigation({
  catalog,
  className,
  orientation = "horizontal",
  onNavigate,
}: MainNavigationProps) {
  const t = useTranslations("Layout");
  const locale = useLocale() as SiteLocale;
  const pathname = usePathname();
  const [activeFamily, setActiveFamily] = useState(
    catalog.families.find((f) => f.subfamilies.length > 0)?.slug ??
      catalog.families[0]?.slug ??
      "",
  );
  const [megaOpen, setMegaOpen] = useState(false);

  const activeFamilyData =
    catalog.families.find((family) => family.slug === activeFamily) ??
    catalog.families[0];

  const isVertical = orientation === "vertical";

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className={cn(className)} aria-label={t("mainNavLabel")}>
      <ul
        className={cn(
          isVertical
            ? "flex flex-col gap-1"
            : "flex flex-wrap items-stretch justify-end gap-0",
        )}
      >
        <li>
          <NavPendingLink
            href="/"
            className={navLinkClass(isVertical, isActive("/"))}
            onClick={onNavigate}
            aria-current={isActive("/") ? "page" : undefined}
          >
            {t("nav.home")}
          </NavPendingLink>
        </li>

        <li
          className={cn(!isVertical && "relative")}
          onMouseEnter={() => !isVertical && setMegaOpen(true)}
          onMouseLeave={() => !isVertical && setMegaOpen(false)}
          onFocus={() => !isVertical && setMegaOpen(true)}
          onBlur={(event) => {
            if (!isVertical && !event.currentTarget.contains(event.relatedTarget as Node)) {
              setMegaOpen(false);
            }
          }}
        >
          <NavPendingLink
            href="/produits"
            className={cn(
              navLinkClass(isVertical, isActive("/produits")),
              "inline-flex items-center gap-1",
            )}
            aria-haspopup={!isVertical ? "true" : undefined}
            aria-expanded={!isVertical ? megaOpen : undefined}
            aria-current={isActive("/produits") ? "page" : undefined}
            onClick={onNavigate}
          >
            {t("nav.products")}
            {!isVertical && <ChevronDownIcon aria-hidden className="size-3.5 opacity-80" />}
          </NavPendingLink>

          {(isVertical || megaOpen) && (
            <div
              className={cn(
                isVertical
                  ? "mt-2 space-y-4 border-l border-primary-foreground/20 pl-3"
                  : "border-border absolute left-0 top-full z-50 w-[min(100vw-2rem,56rem)] rounded-md border bg-popover text-popover-foreground shadow-xl",
              )}
              role="region"
              aria-label={t("productsMegaMenuLabel")}
              tabIndex={-1}
            >
              <div
                className={cn(
                  isVertical ? "space-y-4" : "grid grid-cols-3 gap-0 p-4",
                )}
              >
                <div className={cn(!isVertical && "border-border border-r pr-4")}>
                  <p className="font-heading mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("megaMenuFamilies")}
                  </p>
                  <ul className="space-y-1">
                    {catalog.families.map((family) => (
                      <li key={family.slug}>
                        <button
                          type="button"
                          className={cn(
                            "w-full rounded-sm px-2 py-1.5 text-left text-sm transition-colors hover:bg-muted",
                            activeFamily === family.slug && "bg-muted font-medium",
                          )}
                          onMouseEnter={() => setActiveFamily(family.slug)}
                          onFocus={() => setActiveFamily(family.slug)}
                          onClick={() => setActiveFamily(family.slug)}
                        >
                          {pickCatalogLabel(family.name, locale)}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/produits"
                    className="text-primary mt-3 inline-block text-sm font-medium underline-offset-2 hover:underline"
                    onClick={onNavigate}
                  >
                    {t("megaMenuAllProducts")}
                  </Link>
                </div>

                <div className={cn(!isVertical && "border-border border-r px-4")}>
                  <p className="font-heading mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("megaMenuSubfamilies")}
                  </p>
                  {activeFamilyData?.subfamilies.length ? (
                    <ul className="space-y-1">
                      {activeFamilyData.subfamilies.map((sub) => (
                        <li key={sub.slug}>
                          <Link
                            href={`/produits/${activeFamilyData.slug}/${sub.slug}`}
                            className="hover:bg-muted block rounded-sm px-2 py-1.5 text-sm"
                            onClick={onNavigate}
                          >
                            {pickCatalogLabel(sub.name, locale)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Link
                      href={`/produits/${activeFamilyData?.slug ?? ""}`}
                      className="hover:bg-muted block rounded-sm px-2 py-1.5 text-sm"
                      onClick={onNavigate}
                    >
                      {pickCatalogLabel(activeFamilyData?.name ?? { fr: "", en: "" }, locale)}
                    </Link>
                  )}
                </div>

                <div className={cn(!isVertical && "pl-4")}>
                  <p className="font-heading mb-2 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("megaMenuSectors")}
                  </p>
                  <ul className="space-y-1">
                    {catalog.sectors.map((sector) => (
                      <li key={sector.slug}>
                        <Link
                          href={`/secteurs/${sector.slug}`}
                          className="hover:bg-muted block rounded-sm px-2 py-1.5 text-sm"
                          onClick={onNavigate}
                        >
                          {pickCatalogLabel(sector.name, locale)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>

        {staticLinks.map((item) => (
          <li key={item.key}>
            <NavPendingLink
              href={item.href}
              className={navLinkClass(isVertical, isActive(item.href))}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={onNavigate}
            >
              {t(`nav.${item.key}`)}
            </NavPendingLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function navLinkClass(vertical: boolean, active: boolean) {
  if (vertical) {
    return cn(
      "block rounded-sm px-2 py-2 text-base font-medium text-foreground hover:bg-muted",
      active && "bg-muted font-semibold",
    );
  }

  return cn(
    "font-heading inline-flex h-full items-center px-2.5 py-3 text-[11px] font-bold tracking-wide uppercase transition-colors xl:px-3 xl:text-xs",
    active
      ? "bg-cta text-cta-foreground shadow-sm"
      : "text-primary-foreground hover:bg-primary-foreground/10",
  );
}
