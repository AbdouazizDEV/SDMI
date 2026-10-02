"use client";

import { SearchIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type SearchResult = {
  reference: string;
  slug: string;
  name: string;
  dn: number | null;
  href: string;
};

type HeaderSearchProps = {
  className?: string;
  inputId?: string;
  autoFocus?: boolean;
  /** Intégré dans la barre catalogue (sans bordure externe). */
  variant?: "default" | "embedded";
  onSubmitSearch?: () => void;
};

export function HeaderSearch({
  className,
  inputId: inputIdProp,
  autoFocus = false,
  variant = "default",
  onSubmitSearch,
}: HeaderSearchProps) {
  const t = useTranslations("Layout");
  const locale = useLocale() as SiteLocale;
  const router = useRouter();
  const generatedId = useId();
  const inputId = inputIdProp ?? generatedId;
  const listboxId = `${inputId}-listbox`;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const fetchResults = useCallback(
    async (value: string) => {
      if (value.trim().length < 2) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          q: value.trim(),
          locale,
        });
        const response = await fetch(`/api/catalog/search?${params.toString()}`);
        const data = (await response.json()) as { results: SearchResult[] };
        setResults(data.results);
        setIsOpen(true);
        setActiveIndex(data.results.length > 0 ? 0 : -1);
      } finally {
        setIsLoading(false);
      }
    },
    [locale],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchResults(query);
    }, 280);
    return () => window.clearTimeout(timer);
  }, [query, fetchResults]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function goToSearchPage() {
    const q = query.trim();
    if (q.length >= 2) {
      router.push(`/produits?q=${encodeURIComponent(q)}`);
      setIsOpen(false);
      onSubmitSearch?.();
    }
  }

  function selectResult(result: SearchResult) {
    router.push(`/produits/${result.slug}`);
    setIsOpen(false);
    setQuery("");
  }

  return (
    <div ref={containerRef} className={cn("relative w-full max-w-xl", className)}>
      <label htmlFor={inputId} className="sr-only">
        {t("searchLabel")}
      </label>
      <div className="relative">
        <SearchIcon
          aria-hidden
          className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
        />
        <Input
          id={inputId}
          name="catalog-search"
          type="search"
          autoComplete="off"
          autoFocus={autoFocus}
          value={query}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `${inputId}-option-${activeIndex}` : undefined
          }
          placeholder={t("searchPlaceholder")}
          className={cn(
            "h-11 pr-3 pl-9 text-base",
            variant === "embedded"
              ? "rounded-none rounded-l-sm border-0 bg-transparent shadow-none focus-visible:ring-0"
              : "rounded-sm border-border bg-background",
          )}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((prev) =>
                prev < results.length - 1 ? prev + 1 : prev,
              );
              setIsOpen(true);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
            } else if (event.key === "Enter") {
              event.preventDefault();
              if (activeIndex >= 0 && results[activeIndex]) {
                selectResult(results[activeIndex]);
              } else {
                goToSearchPage();
              }
            } else if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
        />
      </div>

      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t("searchLabel")}
          className="border-border absolute z-50 mt-1 max-h-72 w-full overflow-y-auto rounded-sm border bg-popover py-1 shadow-sm"
        >
          {isLoading && (
            <li className="text-muted-foreground px-3 py-2 text-sm" role="status">
              {t("searchLoading")}
            </li>
          )}
          {!isLoading && results.length === 0 && query.trim().length >= 2 && (
            <li className="text-muted-foreground px-3 py-2 text-sm">
              {t("searchNoResults")}
            </li>
          )}
          {!isLoading &&
            results.map((result, index) => (
              <li key={result.slug} role="option" aria-selected={activeIndex === index}>
                <button
                  id={`${inputId}-option-${index}`}
                  type="button"
                  className={cn(
                    "hover:bg-muted flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left text-sm",
                    activeIndex === index && "bg-muted",
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectResult(result)}
                >
                  <span className="font-medium text-foreground">{result.reference}</span>
                  <span className="text-muted-foreground line-clamp-1">{result.name}</span>
                  {result.dn != null && (
                    <span className="text-muted-foreground text-xs">
                      {t("dnLabel", { value: result.dn })}
                    </span>
                  )}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
