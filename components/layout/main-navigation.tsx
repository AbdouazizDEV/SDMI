"use client";

import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { NavPendingLink } from "@/components/layout/nav-pending-link";
import { getCatalogV1FamilyImage } from "@/lib/catalog/catalog-v1-assets";
import {
  isCatalogFamilyBrowseable,
  isCatalogSubfamilyBrowseable,
} from "@/lib/catalog/catalog-readiness";
import { resolveFamilySubfamilyNavItems } from "@/lib/catalog/catalog-family-subfamily-nav";
import { resolveSubfamilyShowcaseImage } from "@/lib/catalog/product-showcase-image";
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
    resolveSubfamilyShowcaseImage(familySlug, subSlug) ??
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

function readStickyHeaderBottom() {
  if (typeof document === "undefined") return 0;
  const header = document.querySelector("[data-sdmi-sticky-header]");
  if (!header) return 0;
  return header.getBoundingClientRect().bottom;
}

function useFinePointerHover() {
  const [canHover, setCanHover] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setCanHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return canHover;
}

/** Position verticale du panneau — pré-calculée pour ouverture immédiate au survol. */
function useMegaMenuTop(active: boolean) {
  const [topPx, setTopPx] = useState(0);

  const measure = useCallback(() => {
    setTopPx(readStickyHeaderBottom());
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [measure]);

  useLayoutEffect(() => {
    if (active) measure();
  }, [active, measure]);

  return { topPx, measure };
}

function useMediaQueryMaxWidth(maxWidthPx: number) {
  const query = `(max-width: ${maxWidthPx}px)`;
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches,
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia(query);
    const sync = () => setMatches(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

type FamilySubfamilyLinksProps = {
  family: CatalogNavigation["families"][number];
  locale: SiteLocale;
  onNavigate?: () => void;
  comingSoonLabel: string;
};

function FamilySubfamilyLinks({
  family,
  locale,
  onNavigate,
  comingSoonLabel,
}: FamilySubfamilyLinksProps) {
  const familyLabel = pickCatalogLabel(family.name, locale);
  const browseableFamily = isCatalogFamilyBrowseable(family.slug);
  const navItems = resolveFamilySubfamilyNavItems(family, locale);

  if (!navItems.length) {
    return browseableFamily ? (
      <Link
        href={`/produits/${family.slug}`}
        className="hover:bg-muted block rounded-md px-2 py-2.5 text-sm font-medium"
        onClick={onNavigate}
      >
        {familyLabel}
      </Link>
    ) : (
      <p className="text-muted-foreground px-2 py-2 text-sm">{comingSoonLabel}</p>
    );
  }

  return (
    <ul className="max-h-56 space-y-0.5 overflow-y-auto overscroll-contain scroll-smooth pr-0.5 [-webkit-overflow-scrolling:touch] touch-pan-y">
      {navItems.map((item) => {
        const img =
          item.showcaseSubfamilySlug != null
            ? subfamilyImage(item.showcaseSubfamilySlug, family.slug)
            : DEFAULT_CATALOG_IMAGE;
        const content = (
          <>
            <CatalogThumb src={img} alt="" size="sm" />
            <span className="flex-1 leading-snug">{item.label}</span>
            {!item.browseable ? (
              <span className="text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
                ({comingSoonLabel})
              </span>
            ) : null}
          </>
        );
        return (
          <li key={item.key}>
            {item.browseable && item.href ? (
              <Link
                href={item.href}
                className="hover:bg-background flex items-center gap-2 rounded-md px-2 py-2.5 text-sm active:bg-muted"
                onClick={onNavigate}
              >
                {content}
              </Link>
            ) : (
              <span
                className="text-muted-foreground flex items-center gap-2 rounded-md px-2 py-2.5 text-sm"
                aria-disabled="true"
              >
                {content}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

type StackedFamilyDropdownCatalogProps = {
  catalog: CatalogNavigation;
  locale: SiteLocale;
  onNavigate?: () => void;
  comingSoonLabel: string;
  allProductsLabel: string;
  subfamiliesLabel: string;
  className?: string;
};

/** Mobile / tablette : une famille ouvre un panneau sous-familles juste en dessous, scrollable. */
function StackedFamilyDropdownCatalog({
  catalog,
  locale,
  onNavigate,
  comingSoonLabel,
  allProductsLabel,
  subfamiliesLabel,
  className,
}: StackedFamilyDropdownCatalogProps) {
  const [expandedFamily, setExpandedFamily] = useState<string | null>(null);

  function toggleFamily(slug: string) {
    setExpandedFamily((current) => (current === slug ? null : slug));
  }

  return (
    <div className={cn("space-y-2", className)}>
      <Link
        href="/produits"
        className="text-primary block rounded-sm px-2 py-1.5 text-sm font-semibold underline-offset-2 hover:underline"
        onClick={onNavigate}
      >
        {allProductsLabel}
      </Link>
      <div className="max-h-[min(65vh,26rem)] space-y-2 overflow-y-auto overscroll-contain scroll-smooth pr-0.5 [-webkit-overflow-scrolling:touch] touch-pan-y">
        {catalog.families.map((family) => {
          const familyLabel = pickCatalogLabel(family.name, locale);
          const isOpen = expandedFamily === family.slug;
          const hasSubfamilies = family.subfamilies.length > 0;
          const panelId = `catalog-family-panel-${family.slug}`;

          if (!hasSubfamilies) {
            const browseable = isCatalogFamilyBrowseable(family.slug);
            if (!browseable) return null;
            return (
              <Link
                key={family.slug}
                href={`/produits/${family.slug}`}
                className="border-border hover:bg-muted flex items-center gap-2 rounded-md border bg-background px-2 py-2.5 text-sm active:bg-muted/80"
                onClick={onNavigate}
              >
                <CatalogThumb src={familyImage(family.slug)} alt="" size="md" />
                <span className="leading-snug font-medium">{familyLabel}</span>
              </Link>
            );
          }

          return (
            <div
              key={family.slug}
              className={cn(
                "border-border overflow-hidden rounded-md border bg-background",
                isOpen && "ring-primary/15 shadow-sm ring-1",
              )}
            >
              <button
                type="button"
                id={`catalog-family-trigger-${family.slug}`}
                className="hover:bg-muted flex w-full items-center gap-2 px-2 py-2.5 text-left active:bg-muted/80"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleFamily(family.slug)}
              >
                <CatalogThumb src={familyImage(family.slug)} alt="" size="md" />
                <span className="flex-1 text-sm leading-snug font-medium">{familyLabel}</span>
                <ChevronDownIcon
                  aria-hidden
                  className={cn(
                    "text-muted-foreground size-4 shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`catalog-family-trigger-${family.slug}`}
                  className="border-border bg-muted/25 border-t px-1.5 py-2"
                >
                  <p className="text-muted-foreground mb-1.5 px-1.5 text-[10px] font-bold tracking-wide uppercase">
                    {subfamiliesLabel}
                  </p>
                  <FamilySubfamilyLinks
                    family={family}
                    locale={locale}
                    onNavigate={onNavigate}
                    comingSoonLabel={comingSoonLabel}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

type ProductsMegaMenuGridProps = {
  catalog: CatalogNavigation;
  locale: SiteLocale;
  activeFamily: string;
  setActiveFamily: (slug: string) => void;
  onNavigate?: () => void;
  comingSoonLabel: string;
  familiesLabel: string;
  subfamiliesLabel: string;
  allProductsLabel: string;
  twoColumns: boolean;
};

function ProductsMegaMenuGrid({
  catalog,
  locale,
  activeFamily,
  setActiveFamily,
  onNavigate,
  comingSoonLabel,
  familiesLabel,
  subfamiliesLabel,
  allProductsLabel,
  twoColumns,
}: ProductsMegaMenuGridProps) {
  const activeFamilyData =
    catalog.families.find((family) => family.slug === activeFamily) ??
    catalog.families[0];
  const activeSubfamilyNavItems = activeFamilyData
    ? resolveFamilySubfamilyNavItems(activeFamilyData, locale)
    : [];

  return (
    <div
      className={cn(
        "grid min-w-0 gap-4",
        twoColumns ? "xl:grid-cols-2" : "grid-cols-1",
      )}
    >
      <div className="border-border flex max-h-[min(70vh,28rem)] min-w-0 flex-col xl:max-h-[min(70vh,32rem)] xl:border-r xl:pr-4">
        <p className="font-heading mb-2 shrink-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {familiesLabel}
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
                    activeFamily === family.slug &&
                      "bg-muted font-medium ring-1 ring-primary/20",
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
          {allProductsLabel}
        </Link>
      </div>

      <div className="flex max-h-[min(70vh,28rem)] min-w-0 flex-col xl:max-h-[min(70vh,32rem)]">
        <p className="font-heading mb-2 shrink-0 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          {subfamiliesLabel}
        </p>
        {activeFamilyData ? (
          <div className="relative mb-2 h-24 w-full shrink-0 overflow-hidden rounded-lg border bg-muted/30 sm:h-28">
            <Image
              src={familyImage(activeFamilyData.slug)}
              alt={pickCatalogLabel(activeFamilyData.name, locale)}
              fill
              className="object-contain p-2"
              sizes="320px"
            />
          </div>
        ) : null}
        {activeSubfamilyNavItems.length > 0 ? (
          <ul className="min-h-0 flex-1 space-y-1 overflow-y-auto overscroll-contain pr-1">
            {activeSubfamilyNavItems.map((item) => {
              const img =
                item.showcaseSubfamilySlug != null
                  ? subfamilyImage(item.showcaseSubfamilySlug, activeFamilyData.slug)
                  : DEFAULT_CATALOG_IMAGE;
              const content = (
                <>
                  <CatalogThumb src={img} alt="" size="sm" />
                  <span className="flex-1 leading-snug">{item.label}</span>
                  {!item.browseable ? (
                    <span className="text-[10px] font-bold tracking-wide text-muted-foreground uppercase">
                      ({comingSoonLabel})
                    </span>
                  ) : null}
                </>
              );
              return (
                <li key={item.key}>
                  {item.browseable && item.href ? (
                    <Link
                      href={item.href}
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
  const [mobileCatalogOpen, setMobileCatalogOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isVertical = orientation === "vertical";
  const canHover = useFinePointerHover();
  const isNarrowViewport = useMediaQueryMaxWidth(1279);
  const useStackedFamilyMenu = isVertical || !canHover || isNarrowViewport;
  const { topPx: menuTop, measure: measureMenuTop } = useMegaMenuTop(
    megaOpen && orientation === "horizontal",
  );
  const megaCloseTimer = useRef<number | null>(null);
  const MEGA_HOVER_BRIDGE_PX = 10;
  const comingSoonLabel = t("navComingSoon");

  useLayoutEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  useEffect(() => {
    setMegaOpen(false);
    setMobileCatalogOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function cancelMegaClose() {
    if (megaCloseTimer.current !== null) {
      window.clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  }

  function openMegaMenu() {
    if (isVertical) return;
    cancelMegaClose();
    measureMenuTop();
    setMegaOpen(true);
  }

  function closeMegaMenu() {
    cancelMegaClose();
    setMegaOpen(false);
  }

  function scheduleMegaClose() {
    if (!canHover || isVertical) return;
    cancelMegaClose();
    megaCloseTimer.current = window.setTimeout(() => {
      setMegaOpen(false);
      megaCloseTimer.current = null;
    }, 100);
  }

  function toggleMegaMenu() {
    if (!isVertical) setMegaOpen((open) => !open);
  }

  useEffect(() => () => cancelMegaClose(), []);

  const megaMenuPortal =
    mounted &&
    megaOpen &&
    !isVertical &&
    createPortal(
      <>
        {!canHover ? (
          <button
            type="button"
            className="fixed inset-0 z-[45] bg-black/30 backdrop-blur-[1px]"
            aria-label={t("closeMegaMenu")}
            onClick={closeMegaMenu}
          />
        ) : null}
        <div
          className="border-border fixed inset-x-0 z-[50] max-h-[min(85vh,40rem)] overflow-y-auto overscroll-contain border-b bg-popover text-popover-foreground shadow-2xl"
          style={{
            top: Math.max(0, menuTop - MEGA_HOVER_BRIDGE_PX),
            paddingTop: MEGA_HOVER_BRIDGE_PX,
          }}
          role="region"
          aria-label={t("productsMegaMenuLabel")}
          onMouseEnter={canHover ? openMegaMenu : undefined}
          onMouseLeave={canHover ? scheduleMegaClose : undefined}
        >
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
            {useStackedFamilyMenu ? (
              <StackedFamilyDropdownCatalog
                catalog={catalog}
                locale={locale}
                onNavigate={() => {
                  closeMegaMenu();
                  onNavigate?.();
                }}
                comingSoonLabel={comingSoonLabel}
                allProductsLabel={t("megaMenuAllProducts")}
                subfamiliesLabel={t("megaMenuSubfamilies")}
              />
            ) : (
              <ProductsMegaMenuGrid
                catalog={catalog}
                locale={locale}
                activeFamily={activeFamily}
                setActiveFamily={setActiveFamily}
                onNavigate={() => {
                  closeMegaMenu();
                  onNavigate?.();
                }}
                comingSoonLabel={comingSoonLabel}
                familiesLabel={t("megaMenuFamilies")}
                subfamiliesLabel={t("megaMenuSubfamilies")}
                allProductsLabel={t("megaMenuAllProducts")}
                twoColumns
              />
            )}
          </div>
        </div>
      </>,
      document.body,
    );

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
          onMouseEnter={canHover && !isVertical ? openMegaMenu : undefined}
          onMouseLeave={canHover && !isVertical ? scheduleMegaClose : undefined}
        >
          {isVertical ? (
            <>
              <button
                type="button"
                className={cn(
                  navLinkClass(true, isActive("/produits")),
                  "flex w-full items-center justify-between gap-2 text-left",
                )}
                aria-expanded={mobileCatalogOpen}
                aria-controls="mobile-products-catalog"
                onClick={() => setMobileCatalogOpen((open) => !open)}
              >
                {t("nav.products")}
                <ChevronDownIcon
                  aria-hidden
                  className={cn(
                    "size-4 shrink-0 transition-transform",
                    mobileCatalogOpen && "rotate-180",
                  )}
                />
              </button>
              {mobileCatalogOpen ? (
                <div
                  id="mobile-products-catalog"
                  className="mt-2 rounded-md border border-border bg-muted/20 p-2"
                >
                  <StackedFamilyDropdownCatalog
                    catalog={catalog}
                    locale={locale}
                    onNavigate={onNavigate}
                    comingSoonLabel={comingSoonLabel}
                    allProductsLabel={t("megaMenuAllProducts")}
                    subfamiliesLabel={t("megaMenuSubfamilies")}
                  />
                </div>
              ) : null}
            </>
          ) : (
            <>
              <NavPendingLink
                href="/produits"
                className={cn(
                  navLinkClass(false, isActive("/produits")),
                  "inline-flex items-center gap-1",
                )}
                aria-haspopup="true"
                aria-expanded={megaOpen}
                aria-current={isActive("/produits") ? "page" : undefined}
                onClick={(event) => {
                  if (!canHover) {
                    event.preventDefault();
                    toggleMegaMenu();
                    return;
                  }
                  onNavigate?.();
                }}
              >
                {t("nav.products")}
                <ChevronDownIcon
                  aria-hidden
                  className={cn(
                    "size-3.5 opacity-80 transition-transform",
                    megaOpen && "rotate-180",
                  )}
                />
              </NavPendingLink>
            </>
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
      {megaMenuPortal}
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
