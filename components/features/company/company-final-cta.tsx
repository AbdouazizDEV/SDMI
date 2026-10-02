import { getTranslations } from "next-intl/server";
import { ArrowUpRightIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

type CompanyFinalCtaProps = {
  namespace?: string;
};

export async function CompanyFinalCta({
  namespace = "Home",
}: CompanyFinalCtaProps) {
  const t = await getTranslations(namespace);

  return (
    <section
      className="border-border border-t bg-gradient-to-b from-muted/40 to-background py-12 lg:py-16"
      aria-labelledby="company-final-cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="sdmi-surface-card sdmi-surface-card-accent relative overflow-hidden bg-card p-8 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div
            className="from-cta/8 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-primary/5"
            aria-hidden
          />
          <div className="relative min-w-0">
            <h2
              id="company-final-cta-heading"
              className="font-heading text-primary text-xl font-bold tracking-tight uppercase md:text-2xl lg:text-3xl"
            >
              {t("finalCta.title")}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-base leading-relaxed">
              {t("finalCta.description")}
            </p>
          </div>
          <div className="relative mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:mt-0 lg:shrink-0">
            <Link
              href="/devis"
              className={buttonVariants({
                className:
                  "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-12 items-center rounded-sm px-6 font-semibold shadow-sm",
              })}
            >
              {t("finalCta.quoteCta")}
              <ArrowUpRightIcon aria-hidden className="ml-1.5 size-4" />
            </Link>
            <a
              href={siteConfig.contact.whatsapp.href}
              className={buttonVariants({
                className:
                  "bg-whatsapp text-whatsapp-foreground hover:opacity-90 h-12 rounded-sm px-6 font-semibold shadow-sm",
              })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("finalCta.whatsappLabel")}
            >
              {t("finalCta.whatsappCta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
