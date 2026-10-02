import { getTranslations } from "next-intl/server";

import { QuoteRequestForm } from "@/components/features/quote/quote-request-form";
import { PageMain } from "@/components/layout/page-main";
import { PatternSectionHeading } from "@/components/patterns/section-heading";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type QuoteRequestPageProps = {
  productReference?: string;
};

export async function QuoteRequestPage({ productReference }: QuoteRequestPageProps) {
  const t = await getTranslations("Quote");
  const [mainPhone] = siteConfig.contact.phones;

  return (
    <PageMain>
      <div className="border-border border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <nav aria-label={t("breadcrumbLabel")}>
            <ol className="text-muted-foreground flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  {t("breadcrumbHome")}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{t("breadcrumbCurrent")}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1fr_20rem] lg:px-6 lg:py-16">
        <div>
          <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">{t("eyebrow")}</p>
          <PatternSectionHeading title={t("title")} description={t("description")} />
          <div className="mt-8">
            <QuoteRequestForm initialProductReference={productReference} />
          </div>
        </div>
        <aside className="border-border h-fit rounded-sm border bg-card p-5 text-sm">
          <h2 className="font-heading text-primary mb-3 font-bold uppercase">{t("asideTitle")}</h2>
          <ul className="text-muted-foreground space-y-2">
            <li>
              <a href={mainPhone.href} className="hover:text-cta font-medium">
                {mainPhone.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cta font-medium">
                {siteConfig.contact.email}
              </a>
            </li>
            <li>{t("responseTime")}</li>
          </ul>
        </aside>
      </div>
    </PageMain>
  );
}
