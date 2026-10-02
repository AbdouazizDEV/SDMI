import { getTranslations } from "next-intl/server";

import { ContentPageShell } from "@/components/patterns/content-page-shell";
import { PageMain } from "@/components/layout/page-main";

type SimpleContentPageProps = {
  namespace: string;
};

/** Page statique i18n (documentation, légal, etc.). */
export async function SimpleContentPage({ namespace }: SimpleContentPageProps) {
  const t = await getTranslations(namespace);

  return (
    <PageMain>
      <ContentPageShell
        breadcrumbHome={t("breadcrumbHome")}
        breadcrumbCurrent={t("breadcrumbCurrent")}
        title={t("title")}
        description={t("description")}
      >
        <div className="prose prose-neutral max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">{t("body")}</p>
        </div>
      </ContentPageShell>
    </PageMain>
  );
}
