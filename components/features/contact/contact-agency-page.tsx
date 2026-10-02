import { getTranslations } from "next-intl/server";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  NavigationIcon,
  PhoneIcon,
  FileTextIcon,
} from "lucide-react";

import { CompanyFinalCta } from "@/components/features/company/company-final-cta";
import { PageMain } from "@/components/layout/page-main";
import { CompanyPageLayout } from "@/components/patterns/company-page-layout";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

const MAP_QUERY = encodeURIComponent(
  "Bopp rue 2 x Casamance, Dakar, Sénégal",
);
const MAP_DIRECTIONS_HREF = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export async function ContactAgencyPage() {
  const t = await getTranslations("Contact");
  const { address, phones, email, hours } = siteConfig.contact;
  const [mainPhone] = phones;

  return (
    <PageMain>
      <CompanyPageLayout
        breadcrumbHome={t("breadcrumbHome")}
        breadcrumbCurrent={t("breadcrumbCurrent")}
        breadcrumbLabel={t("breadcrumbLabel")}
        eyebrow={t("eyebrow")}
        title={t("title")}
        description={t("description")}
        className="space-y-10"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="sdmi-surface-card sdmi-surface-card-accent bg-card p-6">
            <MapPinIcon aria-hidden className="text-cta size-6" />
            <h2 className="font-heading text-primary mt-4 text-sm font-bold tracking-tight uppercase">
              {t("depotTitle")}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {address.line1}
              <br />
              {address.line2}
              <br />
              {address.city}
            </p>
            <a
              href={MAP_DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:text-cta"
            >
              <NavigationIcon aria-hidden className="size-4" />
              {t("directionsCta")}
            </a>
          </article>

          <article className="sdmi-surface-card bg-card p-6">
            <PhoneIcon aria-hidden className="text-cta size-6" />
            <h2 className="font-heading text-primary mt-4 text-sm font-bold tracking-tight uppercase">
              {t("phoneTitle")}
            </h2>
            <a
              href={mainPhone.href}
              className="text-foreground mt-3 block text-lg font-semibold hover:text-cta"
            >
              {mainPhone.display}
            </a>
            <p className="text-muted-foreground mt-4 flex gap-2 text-sm">
              <MailIcon aria-hidden className="size-4 shrink-0" />
              <a href={`mailto:${email}`} className="font-medium hover:text-cta">
                {email}
              </a>
            </p>
          </article>

          <article className="sdmi-surface-card bg-card p-6">
            <ClockIcon aria-hidden className="text-cta size-6" />
            <h2 className="font-heading text-primary mt-4 text-sm font-bold tracking-tight uppercase">
              {t("hoursTitle")}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {hours.weekdays}
              <br />
              {hours.saturday}
            </p>
          </article>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <section
            className="sdmi-surface-card relative min-h-[240px] overflow-hidden bg-muted/40 p-6 md:min-h-[280px]"
            aria-labelledby="contact-map-heading"
          >
            <div
              className="from-primary/10 absolute inset-0 bg-gradient-to-br via-muted/20 to-cta/10"
              aria-hidden
            />
            <div className="relative">
              <h2
                id="contact-map-heading"
                className="font-heading text-primary text-lg font-bold tracking-tight uppercase"
              >
                {t("mapTitle")}
              </h2>
              <p className="text-muted-foreground mt-2 max-w-md text-sm">
                {t("mapDescription")}
              </p>
              <a
                href={MAP_DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "outline",
                  className: "mt-6 h-10 rounded-sm font-semibold",
                })}
              >
                {t("directionsCta")}
              </a>
            </div>
          </section>

          <section
            className="sdmi-surface-card sdmi-surface-card-accent bg-card p-6 lg:p-8"
            aria-labelledby="contact-commercial-heading"
          >
            <FileTextIcon aria-hidden className="text-cta size-7" />
            <h2
              id="contact-commercial-heading"
              className="font-heading text-primary mt-4 text-xl font-bold uppercase"
            >
              {t("formTitle")}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {t("formHint")}
            </p>
            <p className="text-muted-foreground mt-4 text-sm">{t("commercialNote")}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/devis"
                className={buttonVariants({
                  className:
                    "bg-primary text-primary-foreground hover:bg-primary/90 h-11 flex-1 rounded-sm font-semibold",
                })}
              >
                {t("quoteCta")}
              </Link>
              <a
                href={siteConfig.contact.whatsapp.href}
                className={buttonVariants({
                  className:
                    "bg-whatsapp text-whatsapp-foreground hover:opacity-90 h-11 flex-1 rounded-sm font-semibold",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("whatsappCta")}
              </a>
            </div>
          </section>
        </div>
      </CompanyPageLayout>

      <CompanyFinalCta />
    </PageMain>
  );
}
