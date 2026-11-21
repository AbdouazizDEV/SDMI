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
        className={cn(
          "inline-flex items-center rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 p-0.5 font-semibold",
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
              "rounded-[3px] px-1.5 py-0.5 uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta",
              locale === loc
                ? "bg-cta text-cta-foreground"
                : "text-primary-foreground/70 hover:text-primary-foreground",
            )}
          >
            {loc}
          </Link>
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
