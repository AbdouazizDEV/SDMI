"use client";

import { PlusIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { useQuoteCart } from "@/components/providers/quote-cart-provider";
import { Button } from "@/components/ui/button";
import type { LocalizedText } from "@/types/localized";

type AddToQuoteButtonProps = {
  productId: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  className?: string;
  size?: "sm" | "default";
  label?: string;
};

export function AddToQuoteButton({
  productId,
  slug,
  reference,
  name,
  className,
  size = "sm",
  label,
}: AddToQuoteButtonProps) {
  const t = useTranslations("Quote");
  const { addItem } = useQuoteCart();
  const text = label ?? t("addToQuote");

  return (
    <Button
      type="button"
      size={size}
      variant="outline"
      className={className}
      onClick={() => addItem({ productId, slug, reference, name })}
    >
      <PlusIcon aria-hidden className="size-3.5" />
      {text}
    </Button>
  );
}
