import { FileTextIcon, MailIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

export async function CatalogSubfamilyEmpty() {
  const t = await getTranslations("Catalog");

  return (
    <div className="sdmi-surface-card sdmi-surface-card-accent border-border/80 bg-gradient-to-br from-card via-white to-muted/40 p-8 text-center md:p-12">
      <div className="bg-primary/5 text-primary mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl ring-1 ring-primary/10">
        <FileTextIcon aria-hidden className="size-7" />
      </div>
      <p className="font-heading text-primary text-lg font-bold uppercase md:text-xl">
        {t("emptySubfamilyTitle")}
      </p>
      <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-sm leading-relaxed md:text-base">
        {t("emptySubfamily")}
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/devis"
          className={buttonVariants({
            className:
              "bg-cta text-cta-foreground hover:bg-cta/90 h-11 rounded-full px-8 text-xs font-bold tracking-widest uppercase",
          })}
        >
          {t("emptySubfamilyQuoteCta")}
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({
            variant: "outline",
            className:
              "border-primary/20 h-11 rounded-full border-2 px-8 text-xs font-bold tracking-wide uppercase",
          })}
        >
          <MailIcon aria-hidden className="size-4" />
          {t("emptySubfamilyContactCta")}
        </Link>
      </div>
      <p className="text-muted-foreground mt-6 text-xs">
        {siteConfig.contact.phones[0]?.display} · {siteConfig.contact.email}
      </p>
    </div>
  );
}
