import { CheckCircle2Icon, ChevronRightIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import {
  FAMILY_SUBFAMILY_NAV_TWO_COLUMN_MIN,
  resolveFamilySubfamilyNavItems,
} from "@/lib/catalog/catalog-family-subfamily-nav";
import { getFamilyOverviewText } from "@/lib/catalog/get-family-overview-text";
import type { CatalogNavFamily } from "@/lib/catalog/navigation";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

type CatalogFamilyHeroAsideProps = {
  family: CatalogNavFamily;
  familyName: string;
  locale: SiteLocale;
};

export async function CatalogFamilyHeroAside({
  family,
  familyName,
  locale,
}: CatalogFamilyHeroAsideProps) {
  const t = await getTranslations("Catalog");
  const overview = getFamilyOverviewText(family.slug, t);
  const navItems = resolveFamilySubfamilyNavItems(family, locale);
  const twoColumns = navItems.length >= FAMILY_SUBFAMILY_NAV_TWO_COLUMN_MIN;

  return (
    <div className="flex min-h-0 flex-col lg:min-h-[606px]">
      <div className="min-w-0">
        <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
          {t("eyebrow")}
        </p>
        <h1 className="font-heading text-primary text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
          {familyName}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed">
          {overview}
        </p>
        <p className="text-primary mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-emerald-600/20">
          <CheckCircle2Icon aria-hidden className="size-4 text-emerald-600" />
          {t("stockBadge")}
        </p>
      </div>

      {navItems.length > 0 ? (
        <nav
          aria-labelledby="family-subfamilies-nav-title"
          className="border-border/70 mt-8 flex min-h-0 flex-1 flex-col border-t pt-6 lg:mt-6 lg:pt-8"
        >
          <h2
            id="family-subfamilies-nav-title"
            className="font-heading text-primary text-sm font-bold tracking-wide uppercase"
          >
            {t("familySubfamiliesNavTitle")}
          </h2>
          <ul
            className={cn(
              "mt-3 min-h-0 flex-1 gap-x-4 gap-y-1 overflow-y-auto overscroll-contain pr-1 [-webkit-overflow-scrolling:touch]",
              twoColumns ? "grid sm:grid-cols-2" : "space-y-1",
            )}
          >
            {navItems.map((item) => (
              <li key={item.key}>
                {item.browseable && item.href ? (
                  <Link
                    href={item.href}
                    className="hover:bg-muted/80 flex items-start gap-2 rounded-lg px-2 py-2 text-sm transition-colors"
                  >
                    <ChevronRightIcon
                      aria-hidden
                      className="text-cta mt-0.5 size-4 shrink-0"
                    />
                    <span className="leading-snug">{item.label}</span>
                  </Link>
                ) : (
                  <span
                    className="text-muted-foreground flex items-start gap-2 rounded-lg px-2 py-2 text-sm"
                    aria-disabled="true"
                  >
                    <ChevronRightIcon
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 opacity-40"
                    />
                    <span className="leading-snug">
                      {item.label}
                      <span className="ml-1 text-[10px] font-bold tracking-wide uppercase">
                        ({t("comingSoon")})
                      </span>
                    </span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
            {t("familyDescription")}
          </p>
        </nav>
      ) : (
        <p className="text-muted-foreground mt-8 text-sm leading-relaxed lg:mt-auto">
          {t("familySkeletonHint")}
        </p>
      )}
    </div>
  );
}
