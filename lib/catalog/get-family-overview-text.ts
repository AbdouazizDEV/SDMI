type CatalogTranslate = {
  has: (key: string) => boolean;
  (key: string): string;
};

/** Texte d’intro famille (i18n `Catalog.familyOverviews.{slug}.body`). */
export function getFamilyOverviewText(
  familySlug: string,
  t: CatalogTranslate,
): string {
  const key = `familyOverviews.${familySlug}.body`;
  if (t.has(key)) {
    return t(key);
  }
  return t("familyOverviewFallback");
}
