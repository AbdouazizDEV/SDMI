"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig, type SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  className?: string;
  variant?: "default" | "topBar";
};

export function LocaleSwitcher({
  className,
  variant = "default",
}: LocaleSwitcherProps) {
  const t = useTranslations("Layout");
  const locale = useLocale() as SiteLocale;
  const pathname = usePathname();

  if (variant === "topBar") {
    return (
      <div
        className={cn("inline-flex items-center gap-1 font-medium", className)}
        role="group"
        aria-label={t("languageSwitcher")}
      >
        {siteConfig.locales.map((loc, index) => (
          <span key={loc} className="inline-flex items-center gap-1">
            {index > 0 ? (
              <span className="text-primary-foreground/40" aria-hidden>
                |
              </span>
            ) : null}
            <Link
              href={pathname}
              locale={loc}
              title={loc === "fr" ? t("localeFr") : t("localeEn")}
              aria-current={locale === loc ? "page" : undefined}
              className={cn(
                "uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta",
                locale === loc
                  ? "text-cta"
                  : "text-primary-foreground/80 hover:text-primary-foreground",
              )}
            >
              {loc}
            </Link>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-sm border border-border bg-background p-0.5",
        className,
      )}
      role="group"
      aria-label={t("languageSwitcher")}
    >
      {siteConfig.locales.map((loc) => (
        <Link
          key={loc}
          href={pathname}
          locale={loc}
          title={loc === "fr" ? t("localeFr") : t("localeEn")}
          aria-current={locale === loc ? "page" : undefined}
          className={cn(
            "min-w-9 rounded-sm px-2 py-1 text-center text-xs font-semibold uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === loc
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted",
          )}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
