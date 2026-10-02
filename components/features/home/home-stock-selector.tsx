"use client";

import { ChevronDownIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const familyOptions = [
  "all",
  "vannes-boisseau",
  "vannes-papillon",
  "clapets",
  "filtration",
  "raccords",
] as const;

type HomeStockSelectorPanelProps = {
  variant?: "card" | "heroFooter";
};

export function HomeStockSelectorPanel({
  variant = "card",
}: HomeStockSelectorPanelProps) {
  const t = useTranslations("Home.stockSelector");
  const router = useRouter();
  const [family, setFamily] = useState<string>("all");
  const [dn, setDn] = useState("all");
  const [pressure, setPressure] = useState("all");
  const [material, setMaterial] = useState("all");

  function filterStock() {
    const params = new URLSearchParams();
    if (family !== "all") params.set("famille", family);
    if (dn !== "all") params.set("dn", dn);
    if (pressure !== "all") params.set("pn", pressure);
    if (material !== "all") params.set("matiere", material);
    const query = params.toString();
    router.push(query ? `/produits?${query}` : "/produits");
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
        options={familyOptions.map((value) => ({
          value,
          label: t(`familyOptions.${value}`),
        }))}
      />
      <StockSelect
        id="stock-dn"
        label={t("dnLabel")}
        value={dn}
        onChange={setDn}
        hero={isHero}
        options={["all", "dn15-50", "dn65-150", "dn200-600", "dn600plus"].map(
          (value) => ({ value, label: t(`dnOptions.${value}`) }),
        )}
      />
      <StockSelect
        id="stock-pressure"
        label={t("pressureLabel")}
        value={pressure}
        onChange={setPressure}
        hero={isHero}
        options={["all", "pn10-16", "pn25-40", "pn63plus", "class150"].map(
          (value) => ({ value, label: t(`pressureOptions.${value}`) }),
        )}
      />
      <StockSelect
        id="stock-material"
        label={t("materialLabel")}
        value={material}
        onChange={setMaterial}
        hero={isHero}
        options={["all", "inox316", "inox304", "fonte", "acier", "laiton"].map(
          (value) => ({ value, label: t(`materialOptions.${value}`) }),
        )}
      />
    </>
  );

  if (isHero) {
    return (
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        {fields}
        <button
          type="button"
          className={buttonVariants({
            className:
              "bg-cta text-cta-foreground hover:bg-cta/90 h-11 w-full rounded-sm px-4 text-xs font-bold uppercase tracking-wide lg:h-10 lg:min-w-[12rem]",
          })}
          onClick={filterStock}
        >
          {t("filterCtaDakar")}
        </button>
      </div>
    );
  }

  return (
    <div className="border-border rounded-sm border bg-card p-4 shadow-lg lg:p-6">
      <p className="font-heading text-primary mb-4 text-lg font-bold uppercase">
        {t("title")}
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{fields}</div>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          className={buttonVariants({
            className:
              "bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-sm px-6 font-semibold uppercase",
          })}
          onClick={filterStock}
        >
          {t("filterCta")}
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

/** @deprecated Utiliser le panneau intégré au hero — conservé si réutilisation isolée. */
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

function StockSelect({ id, label, value, onChange, options, hero }: StockSelectProps) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className={cn(
          "mb-1 block text-xs font-semibold uppercase",
          hero ? "text-primary-foreground/75" : "text-muted-foreground",
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
            "h-10 w-full appearance-none rounded-sm border px-3 pr-8 text-sm",
            hero
              ? "border-white/20 bg-white text-foreground"
              : "border-input bg-background",
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
          className="text-muted-foreground pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
