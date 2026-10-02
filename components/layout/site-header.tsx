"use client";

import { MenuIcon, PhoneIcon, SearchIcon, UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { CatalogSearchBar } from "@/components/patterns/catalog-search-bar";
import { MainNavigation } from "@/components/layout/main-navigation";
import { QuoteHeaderCtaClient } from "@/components/layout/quote-header-cta-client";
import { SiteLogo } from "@/components/layout/site-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import type { CatalogNavigation } from "@/lib/catalog/navigation";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  catalog: CatalogNavigation;
};

export function SiteHeader({ catalog }: SiteHeaderProps) {
  const t = useTranslations("Layout");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const primaryPhone = siteConfig.contact.phones[0];

  return (
    <header className="bg-card">
      {/* Desktop — logo, recherche, contact rapide */}
      <div className="hidden border-b border-border lg:block">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:gap-6 lg:px-6">
          <SiteLogo
            label={t("logoLabel")}
            taglineLine1={t("logoTaglineLine1")}
            taglineLine2={t("logoTaglineLine2")}
            className="shrink-0"
          />
          <CatalogSearchBar className="mx-auto flex-1" />
          <div className="flex shrink-0 items-center gap-2 xl:gap-3">
            <a
              href={primaryPhone.href}
              className="text-foreground hidden items-center gap-1.5 text-sm font-medium whitespace-nowrap xl:flex"
            >
              <PhoneIcon aria-hidden className="size-4 text-primary" />
              <span>{primaryPhone.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="grid grid-cols-3 items-center gap-2 border-b border-border px-3 py-2 lg:hidden">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 justify-self-start"
          aria-label={t("openMenu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <MenuIcon aria-hidden className="size-5" />
        </Button>
        <SiteLogo
          label={t("logoLabel")}
          taglineLine1={t("logoTaglineLine1")}
          taglineLine2={t("logoTaglineLine2")}
          variant="compact"
          className="justify-self-center"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="shrink-0 justify-self-end"
          aria-label={t("openSearch")}
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen(true)}
        >
          <SearchIcon aria-hidden className="size-5" />
        </Button>
      </div>

      {/* Navigation — mega-menu + nouvelles entrées + devis */}
      <div className="bg-primary hidden lg:block">
        <div className="mx-auto flex max-w-7xl items-stretch gap-3 px-4 lg:px-6">
          <div className="flex shrink-0 items-center gap-2 py-2">
            <QuoteHeaderCtaClient />
            <Link
              href="/contact"
              className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 inline-flex size-10 items-center justify-center rounded-sm border"
              aria-label={t("nav.accountLabel")}
            >
              <UserIcon aria-hidden className="size-5" />
            </Link>
          </div>
          <MainNavigation catalog={catalog} className="min-w-0 flex-1" />
        </div>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="left"
          className="w-[min(100vw-2rem,24rem)] overflow-y-auto"
          closeLabel={t("closeMenu")}
        >
          <SheetHeader>
            <SheetTitle>{t("mainNavLabel")}</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-6 px-4 pb-6">
            <MainNavigation
              catalog={catalog}
              orientation="vertical"
              onNavigate={() => setMenuOpen(false)}
            />
            <div className="space-y-3 border-t border-border pt-4">
              <a
                href={primaryPhone.href}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <PhoneIcon aria-hidden className="size-4 text-primary" />
                {primaryPhone.display}
              </a>
              <Link
                href="/devis"
                className={buttonVariants({
                  className:
                    "bg-cta text-cta-foreground hover:bg-cta/90 h-10 w-full rounded-sm font-semibold",
                })}
                onClick={() => setMenuOpen(false)}
              >
                {t("quoteCta")}
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={searchOpen} onOpenChange={setSearchOpen}>
        <SheetContent
          side="top"
          className="max-h-[85vh] overflow-y-auto"
          closeLabel={t("closeMenu")}
        >
          <SheetHeader>
            <SheetTitle>{t("searchLabel")}</SheetTitle>
          </SheetHeader>
          <div className="px-4 pb-6">
            <CatalogSearchBar inputId="mobile-catalog-search" />
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
