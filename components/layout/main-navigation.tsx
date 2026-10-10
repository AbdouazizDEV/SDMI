"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { NavPendingLink } from "@/components/layout/nav-pending-link";
import {
  getCatalogV1FamilyImage,
  getCatalogV1SubfamilyImage,
} from "@/lib/catalog/catalog-v1-assets";
import {
  isCatalogFamilyBrowseable,
  isCatalogSubfamilyBrowseable,
} from "@/lib/catalog/catalog-readiness";
import {
  pickCatalogLabel,
  type CatalogNavigation,
} from "@/lib/catalog/navigation";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/i18n/navigation";

type MainNavigationProps = {
  catalog: CatalogNavigation;
  className?: string;
  orientation?: "horizontal" | "vertical";
  onNavigate?: () => void;
};

const DEFAULT_CATALOG_IMAGE = "/images/catalog/taxonomy/tuyauterie-et-accessoires.jpg";

const staticLinks = [
  { key: "sectors" as const, href: "/secteurs" },
  { key: "documentation" as const, href: "/documentation" },
  { key: "about" as const, href: "/a-propos" },
  { key: "contact" as const, href: "/contact" },
];

function familyImage(slug: string) {
  return getCatalogV1FamilyImage(slug) ?? DEFAULT_CATALOG_IMAGE;
}

function subfamilyImage(subSlug: string, familySlug: string) {
  return (
    getCatalogV1SubfamilyImage(subSlug) ??
    getCatalogV1FamilyImage(familySlug) ??
    DEFAULT_CATALOG_IMAGE
  );
}

function CatalogThumb({
  src,
  alt,
  size = "sm",
}: {
  src: string;
  alt: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "border-border/60 relative shrink-0 overflow-hidden rounded-md border bg-white shadow-sm",
        size === "md" ? "size-14" : "size-10",
      )}
    >
      <Image src={src} alt={alt} fill className="object-contain p-1" sizes="56px" />
    </span>
  );
}

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
  const comingSoonLabel = t("navComingSoon");

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
                  : "border-border absolute left-0 top-full z-50 w-[min(100vw-2rem,52rem)] rounded-md border bg-popover text-popover-foreground shadow-xl",
              )}
              role="region"
              aria-label={t("productsMegaMenuLabel")}
              tabIndex={-1}
            >
              <div
                className={cn(
                  isVertical ? "space-y-4" : "grid grid-cols-2 gap-0 p-4",
                )}
              >
                <div
                  className={cn(
                    !isVertical && "border-border flex max-h-[min(70vh,32rem)] flex-col border-r pr-3",
                  )}
                >
                  <p className="font-heading mb-2 shrink-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("megaMenuFamilies")}
                  </p>
                  <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
                    {catalog.families.map((family) => {
                      const label = pickCatalogLabel(family.name, locale);
                      const img = familyImage(family.slug);
                      return (
                        <li key={family.slug}>
                          <button
                            type="button"
                            className={cn(
                              "flex w-full items-center gap-2.5 rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-muted",
                              activeFamily === family.slug && "bg-muted font-medium ring-1 ring-primary/20",
                            )}
                            onMouseEnter={() => setActiveFamily(family.slug)}
                            onFocus={() => setActiveFamily(family.slug)}
                            onClick={() => setActiveFamily(family.slug)}
                          >
                            <CatalogThumb src={img} alt="" size="md" />
                            <span className="leading-snug">{label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <Link
                    href="/produits"
                    className="text-primary mt-3 inline-block shrink-0 text-sm font-medium underline-offset-2 hover:underline"
                    onClick={onNavigate}
                  >
                    {t("megaMenuAllProducts")}
                  </Link>
                </div>

                <div
                  className={cn(
                    !isVertical && "flex max-h-[min(70vh,32rem)] flex-col pl-3",
                  )}
                >
                  <p className="font-heading mb-2 shrink-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {t("megaMenuSubfamilies")}
                  </p>
                  {activeFamilyData ? (
                    <div className="relative mb-2 h-28 w-full shrink-0 overflow-hidden rounded-lg border bg-muted/30">
                      <Image
                        src={familyImage(activeFamilyData.slug)}
                        alt={pickCatalogLabel(activeFamilyData.name, locale)}
                        fill
                        className="object-contain p-2"
                        sizes="320px"
                      />
                    </div>
                  ) : null}
                  {activeFamilyData?.subfamilies.length ? (
                    <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
                      {activeFamilyData.subfamilies.map((sub) => {
                        const open = isCatalogSubfamilyBrowseable(sub.slug);
                        const label = pickCatalogLabel(sub.name, locale);
                        const img = subfamilyImage(sub.slug, activeFamilyData.slug);
                        const content = (
                          <>
                            <CatalogThumb src={img} alt="" size="sm" />
                            <span className="flex-1 leading-snug">{label}</span>
                            {!open ? (
                              <span className="text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
                                ({comingSoonLabel})
                              </span>
                            ) : null}
                          </>
                        );
                        return (
                          <li key={sub.slug}>
                            {open ? (
                              <Link
                                href={`/produits/${activeFamilyData.slug}/${sub.slug}`}
                                className="hover:bg-muted flex items-center gap-2 rounded-md px-2 py-2 text-sm"
                                onClick={onNavigate}
                              >
                                {content}
                              </Link>
                            ) : (
                              <span
                                className="text-muted-foreground flex cursor-not-allowed items-center gap-2 rounded-md px-2 py-2 text-sm"
                                aria-disabled="true"
                                title={comingSoonLabel}
                              >
                                {content}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : isCatalogFamilyBrowseable(activeFamilyData?.slug ?? "") ? (
                    <Link
                      href={`/produits/${activeFamilyData?.slug ?? ""}`}
                      className="hover:bg-muted block rounded-sm px-2 py-1.5 text-sm"
                      onClick={onNavigate}
                    >
                      {pickCatalogLabel(activeFamilyData?.name ?? { fr: "", en: "" }, locale)}
                    </Link>
                  ) : (
                    <p className="text-muted-foreground px-2 py-1.5 text-sm">{comingSoonLabel}</p>
                  )}
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
