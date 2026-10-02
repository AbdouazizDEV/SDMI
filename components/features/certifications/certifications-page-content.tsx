import { getTranslations } from "next-intl/server";
import {
  AwardIcon,
  BadgeCheckIcon,
  FileCheckIcon,
  ShieldIcon,
} from "lucide-react";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { QualityPillarsSection } from "@/components/features/company/quality-pillars-section";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { Link } from "@/i18n/navigation";

const standardKeys = ["iso", "ce", "en10204", "ped"] as const;

const standardIcons = {
  iso: AwardIcon,
  ce: BadgeCheckIcon,
  en10204: FileCheckIcon,
  ped: ShieldIcon,
} as const;

export async function CertificationsPageContent() {
  const t = await getTranslations("StaticPages.certifications");

  return (
    <PageMain>
      <CompanyPageLayout
        breadcrumbHome={t("breadcrumbHome")}
        breadcrumbCurrent={t("breadcrumbCurrent")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="space-y-14"
      >
        <p className="text-muted-foreground max-w-3xl text-base leading-relaxed">
          {t("body")}
        </p>

        <section aria-labelledby="cert-standards-heading">
          <h2
            id="cert-standards-heading"
            className="font-heading text-primary sdmi-heading-accent mb-2 text-lg font-bold tracking-tight uppercase md:text-xl"
          >
            {t("standardsTitle")}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl text-sm">
            {t("standardsDescription")}
          </p>
          <ul className="grid gap-5 sm:grid-cols-2">
            {standardKeys.map((key) => {
              const Icon = standardIcons[key];
              return (
                <li key={key}>
                  <article className="sdmi-surface-card sdmi-surface-card-accent h-full bg-card p-6">
                    <div className="bg-primary/10 text-primary mb-4 flex size-11 items-center justify-center rounded-lg">
                      <Icon aria-hidden className="size-5" />
                    </div>
                    <h3 className="font-heading text-primary font-bold tracking-tight uppercase">
                      {t(`standards.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {t(`standards.${key}.description`)}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          className="sdmi-surface-card bg-muted/30 p-6 md:p-8"
          aria-labelledby="cert-documents-heading"
        >
          <h2
            id="cert-documents-heading"
            className="font-heading text-primary text-lg font-bold tracking-tight uppercase"
          >
            {t("documentsTitle")}
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">{t("documentsHint")}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map((index) => (
              <li key={index} className="flex gap-2.5 text-sm">
                <FileCheckIcon
                  aria-hidden
                  className="text-cta mt-0.5 size-4 shrink-0"
                />
                <span>{t(`documentsItems.${index}`)}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link
              href="/documentation"
              className="text-primary text-sm font-semibold hover:text-cta hover:underline"
            >
              {t("documentationLink")}
            </Link>
          </p>
        </section>

        <QualityPillarsSection variant="embedded" />
      </CompanyPageLayout>

      <CompanyFinalCta />
    </PageMain>
  );
}
