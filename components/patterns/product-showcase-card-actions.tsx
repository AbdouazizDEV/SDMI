"use client";

import { AddToQuoteButton } from "@/components/features/quote/add-to-quote-button";
import { Link } from "@/i18n/navigation";
import type { LocalizedText } from "@/types/localized";

type ProductShowcaseCardActionsProps = {
  productId: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  pdfLabel: string;
};

export function ProductShowcaseCardActions({
  productId,
  slug,
  reference,
  name,
  pdfLabel,
}: ProductShowcaseCardActionsProps) {
  return (
    <div className="border-border/70 mt-auto flex flex-wrap items-center gap-2 border-t pt-4">
      <Link
        href="/documentation"
        className="text-primary hover:text-cta text-xs font-semibold tracking-wide uppercase underline-offset-4 transition-colors hover:underline"
      >
        {pdfLabel}
      </Link>
      <AddToQuoteButton
        productId={productId}
        slug={slug}
        reference={reference}
        name={name}
        className="border-primary/15 hover:bg-primary hover:text-primary-foreground hover:border-primary ml-auto rounded-full text-xs font-semibold transition-colors"
      />
    </div>
  );
}
