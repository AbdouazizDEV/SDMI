import type { SiteLocale } from "@/lib/site";

/** Correspond au domaine Postgres `localized_text` (clés fr + en obligatoires). */
export type LocalizedText = Record<SiteLocale, string>;

export function pickLocalized(
  value: LocalizedText,
  locale: SiteLocale,
): string {
  return value[locale];
}
