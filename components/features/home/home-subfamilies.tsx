import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRightIcon } from "lucide-react";

import { SectionHeading } from "@/components/features/home/section-heading";
import { MediaLinkCard } from "@/components/patterns/media-link-card";
import { SectionShell } from "@/components/patterns/section-shell";
import { Link } from "@/i18n/navigation";
import {
  isCatalogFamilyBrowseable,
  isCatalogSubfamilyBrowseable,
} from "@/lib/catalog/catalog-readiness";
import {
  catalogNavigationForShell,
  pickCatalogLabel,
} from "@/lib/catalog/navigation";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import type { SiteLocale } from "@/lib/site";

export async function HomeSubfamiliesSection() {
  const t = await getTranslations("Home");
  const locale = (await getLocale()) as SiteLocale;
  const catalog = catalogNavigationForShell;

  return (
    <SectionShell variant="muted" labelledBy="home-subfamilies-heading">
      <SectionHeading
        id="home-subfamilies-heading"
        title={t("subfamilies.title")}
        description={t("subfamilies.description") || undefined}
        className="mb-10"
      />
      <div className="space-y-14 lg:space-y-16">
        {catalog.families
          .filter((family) => family.subfamilies.length > 0)
          .map((family, index) => {
          const familyName = pickCatalogLabel(family.name, locale);
          const familyBrowseable = isCatalogFamilyBrowseable(family.slug);
          const soonLabel = t("subfamilies.comingSoon");

          return (
            <section
              key={family.slug}
              aria-labelledby={`home-subfamilies-${family.slug}`}
              className={
                index % 2 === 1
                  ? "border-border/60 bg-card/60 rounded-2xl border p-5 shadow-[0_8px_30px_-16px_rgba(27,58,87,0.12)] md:p-8"
                  : undefined
              }
            >
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-cta mb-1 text-[11px] font-bold tracking-widest uppercase">
                    {t("subfamilies.familyLabel", { index: index + 1 })}
                  </p>
                  <h3
                    id={`home-subfamilies-${family.slug}`}
                    className="font-heading text-primary text-xl font-bold tracking-tight uppercase md:text-2xl"
                  >
                    {familyBrowseable ? (
                      <Link
                        href={`/produits/${family.slug}`}
                        className="hover:text-cta inline-flex items-center gap-2 transition-colors"
                      >
                        {familyName}
                        <ArrowUpRightIcon aria-hidden className="text-cta size-5" />
                      </Link>
                    ) : (
                      <span>{familyName}</span>
                    )}
                  </h3>
                </div>
                {familyBrowseable ? (
                  <Link
                    href={`/produits/${family.slug}`}
                    className="text-primary hover:text-cta text-sm font-semibold tracking-wide uppercase transition-colors"
                  >
                    {t("subfamilies.viewFamily")}
                  </Link>
                ) : (
                  <span className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                    {soonLabel}
                  </span>
                )}
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {family.subfamilies.map((sub) => {
                  const imagePath = resolveProductShowcaseImage(sub.slug, family.slug);
                  const title = pickCatalogLabel(sub.name, locale);
                  const subBrowseable = isCatalogSubfamilyBrowseable(sub.slug);

                  return (
                    <li key={sub.slug} className="h-full">
                      <MediaLinkCard
                        href={
                          subBrowseable
                            ? `/produits/${family.slug}/${sub.slug}`
                            : undefined
                        }
                        disabled={!subBrowseable}
                        disabledHint={soonLabel}
                        title={title}
                        titleClassName="text-xs leading-snug md:text-sm"
                        footerLinkLabel={
                          subBrowseable ? t("subfamilies.readMore") : undefined
                        }
                        media={
                          <div className="relative aspect-4/3 bg-gradient-to-br from-white via-slate-50/80 to-primary/5">
                            {imagePath ? (
                              <Image
                                src={imagePath}
                                alt=""
                                fill
                                className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, 25vw"
                              />
                            ) : (
                              <div className="bg-muted/50 size-full" aria-hidden />
                            )}
                          </div>
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}
