"use client";

import { Trash2Icon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { useQuoteCart } from "@/components/providers/quote-cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";

export function QuoteCartPanel() {
  const t = useTranslations("Quote");
  const locale = useLocale() as SiteLocale;
  const { items, removeItem, setQuantity, clearCart } = useQuoteCart();

  if (items.length === 0) {
    return (
      <p className="text-muted-foreground border-border mb-6 rounded-sm border bg-muted/30 p-4 text-sm">
        {t("cartEmpty")}
      </p>
    );
  }

  return (
    <section
      className="border-border mb-6 rounded-sm border bg-card p-4"
      aria-labelledby="quote-cart-heading"
    >
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h2 id="quote-cart-heading" className="font-heading text-primary text-sm font-bold uppercase">
          {t("cartTitle")}
        </h2>
        <Button type="button" variant="ghost" size="sm" onClick={clearCart}>
          {t("cartClear")}
        </Button>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.productKey}
            className="border-border flex flex-wrap items-start justify-between gap-3 border-b pb-3 last:border-0 last:pb-0"
          >
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground text-xs font-semibold">{item.reference}</p>
              <p className="font-medium">{pickLocalized(item.name, locale)}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor={`qty-${item.productKey}`}>
                {t("quantity")}
              </label>
              <Input
                id={`qty-${item.productKey}`}
                type="number"
                min={1}
                className="w-20"
                value={item.quantity}
                onChange={(event) =>
                  setQuantity(item.productKey, Number.parseInt(event.target.value, 10) || 1)
                }
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={t("removeLine")}
                onClick={() => removeItem(item.productKey)}
              >
                <Trash2Icon aria-hidden className="size-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
