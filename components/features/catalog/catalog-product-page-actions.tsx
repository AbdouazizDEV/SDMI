"use client";

import { FileTextIcon } from "lucide-react";

import { AddToQuoteButton } from "@/components/features/quote/add-to-quote-button";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { LocalizedText } from "@/types/localized";

type CatalogProductPageActionsProps = {
  productId: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  addToQuoteLabel: string;
  quoteCtaLabel: string;
  documentationLabel: string;
};

export function CatalogProductPageActions({
  productId,
  slug,
  reference,
  name,
  addToQuoteLabel,
  quoteCtaLabel,
  documentationLabel,
}: CatalogProductPageActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <AddToQuoteButton
        productId={productId}
        slug={slug}
        reference={reference}
        name={name}
        size="default"
        className="border-primary/20 hover:bg-primary hover:text-primary-foreground h-11 flex-1 rounded-full border-2 font-bold sm:flex-none sm:px-6"
      />
      <Link
        href="/devis"
        className={buttonVariants({
          className:
            "bg-cta text-cta-foreground hover:bg-cta/90 h-11 flex-1 rounded-full px-6 text-sm font-bold tracking-wide uppercase shadow-md sm:flex-none",
        })}
      >
        <FileTextIcon aria-hidden className="size-4" />
        {quoteCtaLabel}
      </Link>
      <Link
        href="/documentation"
        className={buttonVariants({
          variant: "outline",
          className:
            "border-border h-11 flex-1 rounded-full border-2 font-semibold sm:flex-none sm:px-6",
        })}
      >
        {documentationLabel}
      </Link>
      <span className="sr-only">{addToQuoteLabel}</span>
    </div>
  );
}
