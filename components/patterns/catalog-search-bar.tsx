"use client";

import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { HeaderSearch } from "@/components/layout/header-search";
import { cn } from "@/lib/utils";

type CatalogSearchBarProps = {
  className?: string;
  inputId?: string;
};

export function CatalogSearchBar({ className, inputId }: CatalogSearchBarProps) {
  const t = useTranslations("Layout");
  const [focused, setFocused] = useState(false);
  const searchInputId = inputId ?? "catalog-header-search";

  function triggerSearch() {
    const input = document.getElementById(searchInputId) as HTMLInputElement | null;
    if (input) {
      input.dispatchEvent(
        new KeyboardEvent("keydown", { key: "Enter", bubbles: true }),
      );
    }
  }

  return (
    <div
      className={cn(
        "sdmi-catalog-search group w-full max-w-3xl",
        focused && "sdmi-catalog-search-focus",
        className,
      )}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setFocused(false);
        }
      }}
    >
      <div className="relative flex min-h-11 items-stretch">
        <div className="relative min-w-0 flex-1">
          <HeaderSearch
            inputId={searchInputId}
            className="max-w-none"
            variant="embedded"
            onSubmitSearch={() => setFocused(false)}
          />
        </div>

        <button
          type="button"
          onClick={triggerSearch}
          className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-r-sm px-5 text-xs font-bold tracking-wider uppercase transition-colors"
        >
          <SearchIcon aria-hidden className="size-4" />
          <span className="hidden sm:inline">{t("searchSubmitButton")}</span>
        </button>
      </div>
    </div>
  );
}
