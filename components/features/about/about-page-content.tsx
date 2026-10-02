import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Building2Icon, PackageIcon, TimerIcon } from "lucide-react";

import { ReferencesMarqueeBand } from "@/components/features/company/references-marquee-band";
import { ClientsMarqueeBand } from "@/components/features/company/clients-marquee-band";
import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { QualityPillarsSection } from "@/components/features/company/quality-pillars-section";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
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
              alt=""
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 90vw, 480px"
              priority
            />
          </div>
        }
        className="space-y-14 lg:space-y-16"
      >
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

      </CompanyPageLayout>

      <ReferencesMarqueeBand />
      <ClientsMarqueeBand titleNamespace="About" titleKey="partnersTitle" />
      <QualityPillarsSection />
      <CompanyFinalCta />
    </PageMain>
  );
}
