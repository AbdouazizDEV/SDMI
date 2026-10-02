"use client";

import { FileTextIcon } from "lucide-react";

import { AddToQuoteButton } from "@/components/features/quote/add-to-quote-button";
import { StorageMedia } from "@/components/features/home/storage-media";
import { Link } from "@/i18n/navigation";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import type { LocalizedText } from "@/types/localized";

export type CatalogBrowseProductDto = {
  id: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  description: LocalizedText;
  title: string;
  descriptionText: string;
  dn: number | null;
  pn: string | null;
  materialLabel: string | null;
  href: string;
  familySlug: string;
  subfamilySlug: string;
  stockUnits: number;
  certified31: boolean;
  listingKind: "range" | "sku";
  quoteOnConfiguration: boolean;
  pressureClass: string | null;
  trim: string | null;
  connectionLabel: string | null;
  documentCount: number;
};

type CatalogProductGridCardProps = {
  product: CatalogBrowseProductDto;
  specDnLabel: string;
  specPnLabel: string;
  specMaterialLabel: string;
  stockInStockLabel: string;
  certifiedBadge: string;
  pdfLabel: string;
  quoteCta: string;
  rangeBadge: string;
  dnOnConfiguration: string;
  quoteOnConfigurationLabel: string;
};

export function CatalogProductGridCard({
  product,
  specDnLabel,
  specPnLabel,
  specMaterialLabel,
  stockInStockLabel,
  certifiedBadge,
  pdfLabel,
  quoteCta,
  rangeBadge,
  dnOnConfiguration,
  quoteOnConfigurationLabel,
}: CatalogProductGridCardProps) {
  const isRange = product.listingKind === "range";
  const imagePath = resolveProductShowcaseImage(
    product.subfamilySlug,
    product.familySlug,
  );

  return (
    <article className="sdmi-surface-card sdmi-surface-card-accent flex h-full flex-col overflow-hidden bg-card">
      <div className="border-border/60 flex items-start justify-between gap-2 border-b px-4 py-3">
        <span className="text-muted-foreground font-mono text-[11px] font-semibold tracking-wide uppercase">
          {product.reference}
        </span>
        {isRange ? (
          <span className="bg-primary/10 text-primary rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase ring-1 ring-primary/15">
            {rangeBadge}
          </span>
        ) : product.certified31 ? (
          <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-emerald-800 uppercase ring-1 ring-emerald-600/25">
            {certifiedBadge}
          </span>
        ) : (
          <span className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide uppercase">
            Stock
          </span>
        )}
      </div>

      <Link
        href={product.href}
        className="relative block aspect-4/3 bg-gradient-to-br from-slate-50 via-white to-primary/5"
      >
        {imagePath ? (
          <StorageMedia
            storagePath={imagePath}
            alt={product.title}
            className="absolute inset-0 size-full"
            imageClassName="object-contain p-6"
            sizes="(max-width: 640px) 100vw, 25vw"
          />
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <Link
          href={product.href}
          className="font-heading text-primary hover:text-cta line-clamp-2 text-sm leading-snug font-bold tracking-tight uppercase transition-colors md:text-base"
        >
          {product.title}
        </Link>
        <p className="text-muted-foreground mt-2 line-clamp-2 text-xs leading-relaxed md:text-sm">
          {product.descriptionText}
        </p>

        <dl className="mt-4 grid grid-cols-3 gap-2 rounded-lg bg-muted/40 p-2.5 text-center text-[10px] md:text-xs">
          <div>
            <dt className="text-muted-foreground font-bold uppercase">{specDnLabel}</dt>
            <dd className="text-foreground mt-0.5 font-semibold">
              {product.dn
                ? `DN${product.dn}`
                : isRange
                  ? dnOnConfiguration
                  : "—"}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground font-bold uppercase">{specPnLabel}</dt>
            <dd className="text-foreground mt-0.5 font-semibold">{product.pn ?? "—"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground font-bold uppercase">{specMaterialLabel}</dt>
            <dd className="text-foreground mt-0.5 truncate font-semibold">
              {product.materialLabel ?? "—"}
            </dd>
          </div>
        </dl>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          {isRange || product.quoteOnConfiguration ? (
            <p className="text-primary font-medium">{quoteOnConfigurationLabel}</p>
          ) : (
            <p className="text-foreground inline-flex items-center gap-1.5 font-medium">
              <span
                className="size-2 rounded-full bg-emerald-500 shadow-[0_0_0_2px] shadow-emerald-500/25"
                aria-hidden
              />
              {stockInStockLabel.replace("{count}", String(product.stockUnits))}
            </p>
          )}
          {product.documentCount > 0 ? (
            <Link
              href="/documentation"
              className="text-primary hover:text-cta inline-flex items-center gap-1 font-semibold"
            >
              <FileTextIcon aria-hidden className="size-3.5" />
              {pdfLabel}
            </Link>
          ) : null}
        </div>

        <AddToQuoteButton
          productId={product.id}
          slug={product.slug}
          reference={product.reference}
          name={product.name}
          size="default"
          label={quoteCta}
          className="bg-cta text-cta-foreground hover:bg-cta/90 border-cta mt-4 h-11 w-full rounded-sm font-bold tracking-wide uppercase"
        />
      </div>
    </article>
  );
}
