import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { SiteLogo } from "@/components/layout/site-logo";
import { Link } from "@/i18n/navigation";
import {
  pickCatalogLabel,
  type CatalogNavigation,
} from "@/lib/catalog/navigation";
import { siteConfig, type SiteLocale } from "@/lib/site";

type SiteFooterProps = {
  catalog: CatalogNavigation;
};

export async function SiteFooter({ catalog }: SiteFooterProps) {
  const t = await getTranslations("Layout.footer");
  const tLayout = await getTranslations("Layout");
  const locale = (await getLocale()) as SiteLocale;

  const [mainPhone] = siteConfig.contact.phones;

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground mt-auto">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <section aria-labelledby="footer-families-heading">
          <h2
            id="footer-families-heading"
            className="font-heading mb-4 text-sm font-bold tracking-wide uppercase"
          >
            {t("productFamiliesTitle")}
          </h2>
          <ul className="space-y-2 text-sm">
            {catalog.families.map((family) => (
              <li key={family.slug}>
                <Link
                  href={`/produits/${family.slug}`}
                  className="hover:text-cta underline-offset-2 hover:underline"
                >
                  {pickCatalogLabel(family.name, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="footer-company-heading">
          <h2
            id="footer-company-heading"
            className="font-heading mb-4 text-sm font-bold tracking-wide uppercase"
          >
            {t("companyTitle")}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/a-propos" className="hover:text-cta underline-offset-2 hover:underline">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link
                href="/certifications"
                className="hover:text-cta underline-offset-2 hover:underline"
              >
                {t("certifications")}
              </Link>
            </li>
            <li>
              <Link href="/carrieres" className="hover:text-cta underline-offset-2 hover:underline">
                {t("careers")}
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-legal-heading">
          <h2
            id="footer-legal-heading"
            className="font-heading mb-4 text-sm font-bold tracking-wide uppercase"
          >
            {t("legalTitle")}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/mentions-legales"
                className="hover:text-cta underline-offset-2 hover:underline"
              >
                {t("legalNotice")}
              </Link>
            </li>
            <li>
              <Link
                href="/politique-confidentialite"
                className="hover:text-cta underline-offset-2 hover:underline"
              >
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="hover:text-cta underline-offset-2 hover:underline">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-contact-heading">
          <h2
            id="footer-contact-heading"
            className="font-heading mb-4 text-sm font-bold tracking-wide uppercase"
          >
            {t("contactTitle")}
          </h2>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex gap-2">
              <MapPinIcon aria-hidden className="mt-0.5 size-4 shrink-0" />
              <span>
                {t("addressLine1")}
                <br />
                {t("addressLine2")}
                <br />
                {t("addressCity")}
              </span>
            </p>
            <p>
              <a
                href={mainPhone.href}
                className="inline-flex items-center gap-2 hover:text-cta"
              >
                <PhoneIcon aria-hidden className="size-4" />
                <span>
                  <span className="sr-only">{tLayout("phoneLabel")}: </span>
                  {mainPhone.display}
                </span>
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-cta"
              >
                <MailIcon aria-hidden className="size-4" />
                <span>
                  <span className="sr-only">{t("emailLabel")}: </span>
                  {siteConfig.contact.email}
                </span>
              </a>
            </p>
          </address>
        </section>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-6">
          <SiteLogo
            label={tLayout("logoLabel")}
            taglineLine1={tLayout("logoTaglineLine1")}
            taglineLine2={tLayout("logoTaglineLine2")}
            variant="onPrimary"
            className="[&_span]:text-primary-foreground"
          />
          <p className="text-primary-foreground/80 text-xs">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
