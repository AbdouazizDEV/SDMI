import { getTranslations } from "next-intl/server";

import { PageMain } from "@/components/layout/page-main";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default async function LocaleNotFoundPage() {
  const t = await getTranslations("NotFound");

  return (
    <PageMain className="items-center justify-center px-4 py-20 text-center">
      <p className="font-heading text-primary text-6xl font-bold">404</p>
      <h1 className="font-heading text-primary mt-4 text-2xl font-bold uppercase md:text-3xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground mt-3 max-w-lg text-base">{t("description")}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className={buttonVariants({
            className:
              "bg-cta text-cta-foreground hover:bg-cta/90 h-11 rounded-sm px-6 font-semibold",
          })}
        >
          {t("homeCta")}
        </Link>
        <Link
          href="/produits"
          className={buttonVariants({
            variant: "outline",
            className: "h-11 rounded-sm px-6 font-semibold",
          })}
        >
          {t("catalogCta")}
        </Link>
      </div>
    </PageMain>
  );
}
