"use client";

import { SearchIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { popularSearchTerms } from "@/lib/catalog/popular-search-terms";
import {
  filterHistory,
  pushSearchHistory,
  readSearchHistory,
} from "@/lib/catalog/search-history";
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
  variant?: "default" | "embedded";
  onSubmitSearch?: () => void;
};

function isCatalogIndexPath(pathname: string): boolean {
  return pathname === "/produits" || pathname.endsWith("/produits");
}

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const generatedId = useId();
  const inputId = inputIdProp ?? generatedId;
  const listboxId = `${inputId}-listbox`;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [historyTerms, setHistoryTerms] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasUserEditedRef = useRef(false);
  const syncingFromUrlRef = useRef(false);
  const onCatalog = isCatalogIndexPath(pathname);

  const refreshHistory = useCallback(() => {
    setHistoryTerms(readSearchHistory());
  }, []);

  useEffect(() => {
    refreshHistory();
  }, [refreshHistory]);

  useEffect(() => {
    if (!onCatalog) return;
    const urlQ = searchParams.get("q") ?? "";
    syncingFromUrlRef.current = true;
    setQuery((prev) => (prev === urlQ ? prev : urlQ));
  }, [searchParams, onCatalog]);

  const syncCatalogUrl = useCallback(
    (value: string) => {
      const q = value.trim();
      if (!onCatalog) return;
      const params = new URLSearchParams(window.location.search);
      if (q.length >= 1) {
        params.set("q", q);
      } else {
        params.delete("q");
      }
      const qs = params.toString();
      router.replace(qs ? `/produits?${qs}` : "/produits", { scroll: false });
    },
    [onCatalog, router],
  );

  const fetchResults = useCallback(
    async (value: string) => {
      const trimmed = value.trim();
      if (trimmed.length < 1) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setIsLoading(true);
      try {
        const params = new URLSearchParams({
          q: trimmed,
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
    if (syncingFromUrlRef.current) {
      syncingFromUrlRef.current = false;
      return;
    }
    if (!hasUserEditedRef.current) {
      return;
    }

    const timer = window.setTimeout(() => {
      const trimmed = query.trim();
      if (trimmed.length >= 1) {
        void fetchResults(query);
        syncCatalogUrl(query);
      } else {
        setResults([]);
        setIsOpen(false);
        syncCatalogUrl(query);
      }
    }, 200);
    return () => window.clearTimeout(timer);
  }, [query, fetchResults, syncCatalogUrl]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  function goToSearchPage(term?: string) {
    const q = (term ?? query).trim();
    if (q.length >= 1) {
      pushSearchHistory(q);
      refreshHistory();
      router.push(`/produits?q=${encodeURIComponent(q)}`);
      setIsOpen(false);
      onSubmitSearch?.();
    }
  }

  function selectResult(result: SearchResult) {
    pushSearchHistory(query.trim());
    refreshHistory();
    router.push(result.href);
    setIsOpen(false);
    setQuery("");
  }

  function applySuggestion(term: string) {
    setQuery(term);
    goToSearchPage(term);
  }

  const q = query.trim().toLowerCase();
  const popular = popularSearchTerms[locale]
    .filter((term) => !q || term.toLowerCase().includes(q))
    .slice(0, 6);
  const history = filterHistory(query, 5);
  const hasQuery = q.length >= 1;
  const showSuggestions =
    hasQuery && q.length < 2 && (history.length > 0 || popular.length > 0);

  type FlatOption =
    | { type: "result"; result: SearchResult }
    | { type: "suggest"; term: string };

  const flatOptions: FlatOption[] = showSuggestions
    ? [
        ...history.map((term) => ({ type: "suggest" as const, term })),
        ...popular
          .filter((term) => !history.includes(term))
          .map((term) => ({ type: "suggest" as const, term })),
      ]
    : results.map((result) => ({ type: "result" as const, result }));

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
          onChange={(event) => {
            hasUserEditedRef.current = true;
            setQuery(event.target.value);
          }}
          onFocus={() => {
            refreshHistory();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              if (!hasQuery) return;
              event.preventDefault();
              setActiveIndex((prev) =>
                prev < flatOptions.length - 1 ? prev + 1 : prev,
              );
              setIsOpen(true);
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
            } else if (event.key === "Enter") {
              event.preventDefault();
              if (activeIndex >= 0 && flatOptions[activeIndex]) {
                const opt = flatOptions[activeIndex];
                if (opt.type === "result") {
                  selectResult(opt.result);
                } else {
                  applySuggestion(opt.term);
                }
              } else {
                goToSearchPage();
              }
            } else if (event.key === "Escape") {
              setIsOpen(false);
            }
          }}
        />
      </div>

      {isOpen && hasQuery && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label={t("searchLabel")}
          className="border-border absolute z-50 mt-1 max-h-80 w-full overflow-y-auto rounded-sm border bg-popover py-1 shadow-md"
        >
          {isLoading && (
            <li className="text-muted-foreground px-3 py-2 text-sm" role="status">
              {t("searchLoading")}
            </li>
          )}

          {!isLoading && showSuggestions && history.length > 0 ? (
            <li className="text-muted-foreground px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
              {t("searchRecent")}
            </li>
          ) : null}

          {!isLoading &&
            showSuggestions &&
            flatOptions.map((opt, index) => {
              if (opt.type !== "suggest" || !history.includes(opt.term)) return null;
              return (
                <li key={`h-${opt.term}`} role="option" aria-selected={activeIndex === index}>
                  <button
                    id={`${inputId}-option-${index}`}
                    type="button"
                    className={cn(
                      "hover:bg-muted flex w-full px-3 py-2 text-left text-sm",
                      activeIndex === index && "bg-muted",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => applySuggestion(opt.term)}
                  >
                    {opt.term}
                  </button>
                </li>
              );
            })}

          {!isLoading && showSuggestions && popular.length > 0 ? (
            <li className="text-muted-foreground px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase">
              {t("searchPopular")}
            </li>
          ) : null}

          {!isLoading &&
            showSuggestions &&
            flatOptions.map((opt, index) => {
              if (opt.type !== "suggest" || history.includes(opt.term)) return null;
              return (
                <li key={`p-${opt.term}`} role="option" aria-selected={activeIndex === index}>
                  <button
                    type="button"
                    className={cn(
                      "hover:bg-muted flex w-full px-3 py-2 text-left text-sm",
                      activeIndex === index && "bg-muted",
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => applySuggestion(opt.term)}
                  >
                    {opt.term}
                  </button>
                </li>
              );
            })}

          {!isLoading && !showSuggestions && results.length === 0 && q.length >= 1 && (
            <li className="text-muted-foreground px-3 py-2 text-sm">
              {t("searchNoResults")}
            </li>
          )}

          {!isLoading &&
            !showSuggestions &&
            flatOptions.map((opt, index) =>
              opt.type !== "result" ? null : (
              <li key={opt.result.slug} role="option" aria-selected={activeIndex === index}>
                <button
                  id={`${inputId}-option-${index}`}
                  type="button"
                  className={cn(
                    "hover:bg-muted flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left text-sm",
                    activeIndex === index && "bg-muted",
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectResult(opt.result)}
                >
                  <span className="font-medium text-foreground">{opt.result.reference}</span>
                  <span className="text-muted-foreground line-clamp-1">{opt.result.name}</span>
                  {opt.result.dn != null && (
                    <span className="text-muted-foreground text-xs">
                      {t("dnLabel", { value: opt.result.dn })}
                    </span>
                  )}
                </button>
              </li>
            ))}

          {!isLoading && q.length >= 1 && (
            <li className="border-border border-t">
              <button
                type="button"
                className="text-primary hover:bg-muted w-full px-3 py-2.5 text-left text-sm font-semibold"
                onClick={() => goToSearchPage()}
              >
                {t("searchViewAllOnCatalog", { query: query.trim() })}
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
