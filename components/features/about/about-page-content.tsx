import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import {
  Building2Icon,
  CheckIcon,
  PackageIcon,
  TimerIcon,
  ArrowUpRightIcon,
} from "lucide-react";

import { ReferencesMarqueeBand } from "@/components/features/company/references-marquee-band";
import { ClientsMarqueeBand } from "@/components/features/company/clients-marquee-band";
import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { QualityPillarsSection } from "@/components/features/company/quality-pillars-section";
import { SectionHeading } from "@/components/features/home/section-heading";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  legacyAboutImagePath,
  legacyAboutIntro,
} from "@/lib/content/legacy-about";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

const figureIcons = {
  years: TimerIcon,
  families: PackageIcon,
  stock: Building2Icon,
} as const;

const figureKeys = ["years", "families", "stock"] as const;

export async function AboutPageContent() {
  const t = await getTranslations("About");
  const locale = (await getLocale()) as SiteLocale;
  const expertise = t.raw("expertise") as { title: string; body: string }[];
  const scopeItems = t.raw("scopeItems") as string[];
  const commitments = t.raw("commitments") as string[];
  const stats = t.raw("stats") as { label: string; value: string }[];

  return (
    <PageMain>
      <CompanyPageLayout
        breadcrumbHome={t("breadcrumbHome")}
        breadcrumbCurrent={t("breadcrumbCurrent")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        heroAside={
          <div className="sdmi-surface-card sdmi-surface-card-accent relative aspect-4/3 w-full max-w-lg overflow-hidden justify-self-center lg:justify-self-end">
            <Image
              src={legacyAboutImagePath}
              alt={t("heroImageAlt")}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 90vw, 480px"
              priority
            />
          </div>
        }
        className="space-y-14 lg:space-y-16"
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label}>
              <div className="sdmi-trust-tile h-full p-5 text-center">
                <p className="font-heading text-cta text-xl font-bold md:text-2xl">
                  {stat.value}
                </p>
                <p className="text-muted-foreground mt-1 text-xs font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="grid gap-4 sm:grid-cols-3">
          {figureKeys.map((key) => {
            const Icon = figureIcons[key];
            return (
              <li key={key}>
                <div className="sdmi-trust-tile h-full p-5 text-center md:p-6">
                  <Icon aria-hidden className="text-cta mx-auto size-8" />
                  <p className="font-heading text-primary mt-3 text-2xl font-bold tracking-tight">
                    {t(`figures.${key}.value`)}
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm font-medium">
                    {t(`figures.${key}.label`)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-heading text-primary sdmi-heading-accent text-lg font-bold tracking-tight uppercase md:text-xl">
              {t("missionTitle")}
            </h2>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {pickLocalized(legacyAboutIntro, locale)}
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {t("body")}
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {t("bodySecondary")}
            </p>
          </div>
          <div className="sdmi-surface-card bg-card p-6 md:p-8">
            <h2 className="font-heading text-primary text-lg font-bold tracking-tight uppercase">
              {t("suppliersTitle")}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {t("suppliersDescription")}
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[0, 1, 2].map((index) => (
                <li key={index} className="flex gap-2.5">
                  <span
                    className="bg-cta mt-2 size-1.5 shrink-0 rounded-full"
                    aria-hidden
                  />
                  <span>{t(`suppliersItems.${index}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section aria-labelledby="about-expertise-heading">
          <SectionHeading
            id="about-expertise-heading"
            title={t("expertiseTitle")}
            description={t("expertiseDescription") || undefined}
            className="mb-8"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item) => (
              <li key={item.title}>
                <article className="sdmi-surface-card sdmi-surface-card-accent h-full bg-card p-6">
                  <h3 className="font-heading text-primary text-base font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {item.body}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <section aria-labelledby="about-scope-heading">
            <h2
              id="about-scope-heading"
              className="font-heading text-primary sdmi-heading-accent text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("scopeTitle")}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed md:text-base">
              {t("scopeDescription")}
            </p>
            <ul className="mt-5 space-y-3">
              {scopeItems.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex gap-3 text-sm leading-relaxed md:text-base"
                >
                  <CheckIcon aria-hidden className="text-cta mt-0.5 size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/secteurs"
              className="text-primary hover:text-cta mt-6 inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide uppercase"
            >
              {t("scopeCta")}
              <ArrowUpRightIcon aria-hidden className="size-4" />
            </Link>
          </section>

          <section
            className="sdmi-surface-card bg-muted/30 p-6 md:p-8"
            aria-labelledby="about-commitments-heading"
          >
            <h2
              id="about-commitments-heading"
              className="font-heading text-primary text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("commitmentsTitle")}
            </h2>
            <ul className="mt-5 space-y-3">
              {commitments.map((item) => (
                <li
                  key={item}
                  className="text-foreground flex gap-3 text-sm leading-relaxed md:text-base"
                >
                  <CheckIcon aria-hidden className="text-cta mt-0.5 size-4 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section
          className="sdmi-surface-card sdmi-surface-card-accent flex flex-col gap-4 bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8"
          aria-labelledby="about-cta-heading"
        >
          <div>
            <h2
              id="about-cta-heading"
              className="font-heading text-primary text-lg font-bold tracking-tight uppercase md:text-xl"
            >
              {t("ctaTitle")}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl text-sm">{t("ctaDescription")}</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row md:shrink-0">
            <Link
              href="/contact"
              className={buttonVariants({
                className:
                  "bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-sm font-semibold",
              })}
            >
              {t("ctaContact")}
            </Link>
            <Link
              href="/produits"
              className={buttonVariants({
                variant: "outline",
                className: "h-11 rounded-sm font-semibold",
              })}
            >
              {t("ctaCatalog")}
            </Link>
          </div>
        </section>
      </CompanyPageLayout>

      <ReferencesMarqueeBand />
      <ClientsMarqueeBand titleNamespace="About" titleKey="partnersTitle" />
      <QualityPillarsSection />
      <CompanyFinalCta />
    </PageMain>
  );
}
