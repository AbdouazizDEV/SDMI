"use client";

import {
  ArrowRightIcon,
  ChevronDownIcon,
  PackageSearchIcon,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Link, useRouter } from "@/i18n/navigation";
import {
  buildStockSelectorQueryString,
  getStockSelectorFamilyOptions,
  stockSelectorDnKeys,
  stockSelectorMaterialKeys,
  stockSelectorPressureOptionKeys,
} from "@/lib/catalog/stock-selector-params";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type HomeStockSelectorPanelProps = {
  variant?: "card" | "heroFooter";
};

export function HomeStockSelectorPanel({
  variant = "card",
}: HomeStockSelectorPanelProps) {
  const t = useTranslations("Home.stockSelector");
  const locale = useLocale() as SiteLocale;
  const router = useRouter();
  const [family, setFamily] = useState<string>("all");
  const [dn, setDn] = useState("all");
  const [pressure, setPressure] = useState("all");
  const [material, setMaterial] = useState("all");

  const familyOptions = useMemo(
    () => getStockSelectorFamilyOptions(locale),
    [locale],
  );

  const hasActiveFilters =
    family !== "all" || dn !== "all" || pressure !== "all" || material !== "all";

  function filterStock() {
    const query = buildStockSelectorQueryString({
      family,
      dn,
      pressure,
      material,
    });
    router.push(`/produits${query}#catalog-live-results`);
  }

  const isHero = variant === "heroFooter";

  const fields = (
    <>
      <StockSelect
        id="stock-family"
        label={t("familyLabel")}
        value={family}
        onChange={setFamily}
        hero={isHero}
        options={[
          { value: "all", label: t("familyOptions.all") },
          ...familyOptions.map((option) => ({
            value: option.slug,
            label: option.label,
          })),
        ]}
      />
      <StockSelect
        id="stock-dn"
        label={t("dnLabel")}
        value={dn}
        onChange={setDn}
        hero={isHero}
        options={stockSelectorDnKeys.map((value) => ({
          value,
          label: t(`dnOptions.${value}`),
        }))}
      />
      <StockSelect
        id="stock-pressure"
        label={t("pressureLabel")}
        value={pressure}
        onChange={setPressure}
        hero={isHero}
        options={stockSelectorPressureOptionKeys.map((value) => ({
          value,
          label: t(`pressureOptions.${value}`),
        }))}
      />
      <StockSelect
        id="stock-material"
        label={t("materialLabel")}
        value={material}
        onChange={setMaterial}
        hero={isHero}
        options={stockSelectorMaterialKeys.map((value) => ({
          value,
          label: t(`materialOptions.${value}`),
        }))}
      />
    </>
  );

  if (isHero) {
    return (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))_auto] xl:items-end xl:gap-4">
          {fields}
          <button
            type="button"
            onClick={filterStock}
            className={cn(
              buttonVariants({
                className:
                  "bg-cta text-cta-foreground hover:bg-cta/90 group h-11 w-full rounded-sm px-5 text-xs font-bold tracking-wide uppercase shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-[transform,box-shadow,background-color] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)] xl:min-w-[13.5rem]",
              }),
            )}
          >
            <span className="inline-flex items-center gap-2">
              <PackageSearchIcon aria-hidden className="size-4 shrink-0" />
              {t("filterCtaDakar")}
              <ArrowRightIcon
                aria-hidden
                className="size-3.5 shrink-0 transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </button>
        </div>
        <p className="text-primary-foreground/65 text-[11px] leading-relaxed tracking-wide sm:text-xs">
          {hasActiveFilters ? t("activeHint") : t("idleHint")}
        </p>
      </div>
    );
  }

  return (
    <div className="border-border/80 from-card via-card to-muted/30 rounded-sm border bg-gradient-to-br p-5 shadow-lg lg:p-6">
      <p className="font-heading text-primary mb-1 text-lg font-bold tracking-wide uppercase">
        {t("title")}
      </p>
      <p className="text-muted-foreground mb-5 text-sm">{t("idleHint")}</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{fields}</div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          className={buttonVariants({
            className:
              "bg-cta text-cta-foreground hover:bg-cta/90 group h-11 rounded-sm px-6 font-semibold tracking-wide uppercase",
          })}
          onClick={filterStock}
        >
          <span className="inline-flex items-center gap-2">
            {t("filterCta")}
            <ArrowRightIcon
              aria-hidden
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </button>
        <Link
          href="/documentation"
          className={buttonVariants({
            variant: "outline",
            className: "h-11 rounded-sm px-6 font-semibold",
          })}
        >
          {t("catalogPdfCta")}
        </Link>
      </div>
    </div>
  );
}

/** @deprecated Utiliser le panneau intégré au hero - conservé si réutilisation isolée. */
export function HomeStockSelectorSection() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
      <div className="-mt-10 lg:-mt-12">
        <HomeStockSelectorPanel variant="card" />
      </div>
    </div>
  );
}

type StockSelectProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  hero?: boolean;
};

function StockSelect({
  id,
  label,
  value,
  onChange,
  options,
  hero,
}: StockSelectProps) {
  const isActive = value !== "all";

  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className={cn(
          "mb-1.5 block text-[10px] font-bold tracking-[0.14em] uppercase sm:text-[11px]",
          hero ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(
            "h-11 w-full appearance-none rounded-sm border px-3 pr-9 text-sm outline-none transition-[border-color,box-shadow,background-color]",
            "focus-visible:ring-cta/50 focus-visible:ring-2",
            hero
              ? cn(
                  "border-white/15 bg-white/95 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-sm",
                  "hover:border-white/30 hover:bg-white",
                  isActive && "border-cta/70 ring-cta/30 ring-1",
                )
              : cn(
                  "border-input bg-background",
                  isActive && "border-cta/50 ring-cta/20 ring-1",
                ),
          )}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2",
            hero ? "text-primary/55" : "text-muted-foreground",
          )}
        />
      </div>
    </div>
  );
}
