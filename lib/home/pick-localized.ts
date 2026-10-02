import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

export function pickLocalized(text: LocalizedText, locale: SiteLocale): string {
  return text[locale] || text.fr;
}
