import type { LocalizedText } from "@/types/localized";
import type { QuoteLineUnit } from "@/lib/supabase/types";

export const QUOTE_CART_STORAGE_KEY = "sdmi-quote-cart-v1";

export type QuoteCartItem = {
  /** Identifiant interne (UUID Supabase ou slug démo) — jamais affiché tel quel. */
  productKey: string;
  productId: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  quantity: number;
  unit: QuoteLineUnit;
};

export type QuoteCartState = {
  items: QuoteCartItem[];
};

export function emptyQuoteCart(): QuoteCartState {
  return { items: [] };
}

export function readQuoteCartFromStorage(): QuoteCartState {
  if (typeof window === "undefined") {
    return emptyQuoteCart();
  }
  try {
    const raw = window.localStorage.getItem(QUOTE_CART_STORAGE_KEY);
    if (!raw) {
      return emptyQuoteCart();
    }
    const parsed = JSON.parse(raw) as QuoteCartState;
    if (!Array.isArray(parsed.items)) {
      return emptyQuoteCart();
    }
    return parsed;
  } catch {
    return emptyQuoteCart();
  }
}

export function writeQuoteCartToStorage(state: QuoteCartState) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(QUOTE_CART_STORAGE_KEY, JSON.stringify(state));
}

export function cartReferenceCount(items: QuoteCartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
