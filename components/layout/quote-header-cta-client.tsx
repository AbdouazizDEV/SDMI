"use client";

import { FileTextIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { useQuoteCartOptional } from "@/components/providers/quote-cart-provider";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function QuoteHeaderCtaClient() {
  const t = useTranslations("Layout");
  const cart = useQuoteCartOptional();
  const referenceCount = cart?.referenceCount ?? 0;

  return (
    <Link
      href="/devis"
      className={buttonVariants({
        className:
          "bg-cta text-cta-foreground hover:bg-cta/90 inline-flex h-10 items-center gap-2 rounded-sm px-3 text-xs font-bold uppercase tracking-wide sm:px-4 sm:text-sm",
      })}
    >
      <FileTextIcon aria-hidden className="size-4 shrink-0" />
      <span className="hidden sm:inline">{t("quoteCta")}</span>
      <span className="sm:hidden">{t("quoteCtaShort")}</span>
      <span className="bg-primary-foreground/20 rounded-sm px-1.5 py-0.5 text-[10px] font-bold sm:text-xs">
        {t("quoteReferenceBadge", { count: referenceCount })}
      </span>
    </Link>
  );
}
