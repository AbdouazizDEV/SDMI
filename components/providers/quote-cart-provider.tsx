"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  cartReferenceCount,
  emptyQuoteCart,
  readQuoteCartFromStorage,
  writeQuoteCartToStorage,
  type QuoteCartItem,
} from "@/lib/quote/quote-cart-storage";
import type { QuoteLineUnit } from "@/lib/supabase/types";
import type { LocalizedText } from "@/types/localized";

type AddItemInput = {
  productId: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  quantity?: number;
  unit?: QuoteLineUnit;
};

type QuoteCartContextValue = {
  items: QuoteCartItem[];
  referenceCount: number;
  addItem: (input: AddItemInput) => void;
  removeItem: (productKey: string) => void;
  setQuantity: (productKey: string, quantity: number) => void;
  clearCart: () => void;
};

const QuoteCartContext = createContext<QuoteCartContextValue | null>(null);

function productKeyFor(input: Pick<AddItemInput, "productId" | "slug">) {
  return input.productId ?? `slug:${input.slug}`;
}

export function QuoteCartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readQuoteCartFromStorage().items);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) {
      return;
    }
    writeQuoteCartToStorage({ items });
  }, [items, hydrated]);

  const addItem = useCallback((input: AddItemInput) => {
    const key = productKeyFor(input);
    setItems((prev) => {
      const existing = prev.find((item) => item.productKey === key);
      if (existing) {
        return prev.map((item) =>
          item.productKey === key
            ? {
                ...item,
                quantity: Math.min(
                  1_000_000,
                  item.quantity + (input.quantity ?? 1),
                ),
              }
            : item,
        );
      }
      return [
        ...prev,
        {
          productKey: key,
          productId: input.productId,
          slug: input.slug,
          reference: input.reference,
          name: input.name,
          quantity: input.quantity ?? 1,
          unit: input.unit ?? "piece",
        },
      ];
    });
  }, []);

  const removeItem = useCallback((productKey: string) => {
    setItems((prev) => prev.filter((item) => item.productKey !== productKey));
  }, []);

  const setQuantity = useCallback((productKey: string, quantity: number) => {
    const safe = Math.min(1_000_000, Math.max(1, quantity));
    setItems((prev) =>
      prev.map((item) =>
        item.productKey === productKey ? { ...item, quantity: safe } : item,
      ),
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(
    () => ({
      items,
      referenceCount: cartReferenceCount(items),
      addItem,
      removeItem,
      setQuantity,
      clearCart,
    }),
    [items, addItem, removeItem, setQuantity, clearCart],
  );

  return (
    <QuoteCartContext.Provider value={value}>{children}</QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const ctx = useContext(QuoteCartContext);
  if (!ctx) {
    throw new Error("useQuoteCart must be used within QuoteCartProvider");
  }
  return ctx;
}

export function useQuoteCartOptional() {
  return useContext(QuoteCartContext);
}
