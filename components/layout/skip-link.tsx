import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("Layout");

  return (
    <a
      href="#main-content"
      className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:px-4 focus:py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      {t("skipToContent")}
    </a>
  );
}
