import { getTranslations } from "next-intl/server";
import {
  BriefcaseIcon,
  MailIcon,
  SparklesIcon,
  UsersIcon,
  WrenchIcon,
} from "lucide-react";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const valueKeys = ["team", "expertise", "impact"] as const;
const valueIcons = {
  team: UsersIcon,
  expertise: WrenchIcon,
  impact: SparklesIcon,
} as const;

const profileKeys = ["technical", "commercial", "operations"] as const;

export async function CareersPageContent() {
  const t = await getTranslations("StaticPages.carrieres");
  const applyHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(t("applyEmailSubject"))}`;

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

        <section aria-labelledby="careers-values-heading">
          <h2
            id="careers-values-heading"
            className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl"
          >
            {t("valuesTitle")}
          </h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];
              return (
                <li key={key}>
                  <article className="sdmi-surface-card sdmi-surface-card-accent h-full bg-card p-6">
                    <Icon aria-hidden className="text-cta size-8" />
                    <h3 className="font-heading text-primary mt-4 font-bold tracking-tight uppercase">
                      {t(`values.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {t(`values.${key}.description`)}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="careers-profiles-heading">
          <h2
            id="careers-profiles-heading"
            className="font-heading text-primary sdmi-heading-accent mb-8 text-lg font-bold tracking-tight uppercase md:text-xl"
          >
            {t("profilesTitle")}
          </h2>
          <ul className="grid gap-4 lg:grid-cols-3">
            {profileKeys.map((key) => (
              <li key={key}>
                <div className="border-border/80 flex h-full gap-4 rounded-lg border bg-card p-5">
                  <BriefcaseIcon
                    aria-hidden
                    className="text-primary mt-0.5 size-5 shrink-0"
                  />
                  <div>
                    <h3 className="font-heading text-primary text-sm font-bold tracking-tight uppercase">
                      {t(`profiles.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {t(`profiles.${key}.description`)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="sdmi-surface-card sdmi-surface-card-accent bg-card p-8 text-center md:p-10"
          aria-labelledby="careers-apply-heading"
        >
          <MailIcon aria-hidden className="text-cta mx-auto size-10" />
          <h2
            id="careers-apply-heading"
            className="font-heading text-primary mt-4 text-xl font-bold tracking-tight uppercase md:text-2xl"
          >
            {t("applyTitle")}
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-sm leading-relaxed">
            {t("applyDescription")}
          </p>
          <a
            href={applyHref}
            className={buttonVariants({
              className:
                "bg-cta text-cta-foreground hover:bg-cta/90 mt-6 h-11 rounded-sm px-8 font-semibold",
            })}
          >
            {t("applyCta")}
          </a>
        </section>
      </CompanyPageLayout>

      <CompanyFinalCta />
    </PageMain>
  );
}
