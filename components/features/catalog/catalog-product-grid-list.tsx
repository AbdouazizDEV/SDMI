"use client";

import {
  CatalogProductGridCard,
  type CatalogBrowseProductDto,
} from "@/components/features/catalog/catalog-product-grid-card";

export type CatalogGridCardLabels = {
  specDn: string;
  specPn: string;
  specMaterial: string;
  stockInStock: string;
  certifiedBadge: string;
  pdfLabel: string;
  quoteProductCta: string;
  rangeBadge: string;
  dnOnConfiguration: string;
  quoteOnConfigurationLabel: string;
};

type CatalogProductGridListProps = {
  products: CatalogBrowseProductDto[];
  labels: CatalogGridCardLabels;
  className?: string;
};

export function CatalogProductGridList({
  products,
  labels,
  className,
}: CatalogProductGridListProps) {
  return (
    <ul className={className ?? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3"}>
      {products.map((product) => (
        <li key={product.slug}>
          <CatalogProductGridCard
            product={product}
            specDnLabel={labels.specDn}
            specPnLabel={labels.specPn}
            specMaterialLabel={labels.specMaterial}
            stockInStockLabel={labels.stockInStock}
            certifiedBadge={labels.certifiedBadge}
            pdfLabel={labels.pdfLabel}
            quoteCta={labels.quoteProductCta}
            rangeBadge={labels.rangeBadge}
            dnOnConfiguration={labels.dnOnConfiguration}
            quoteOnConfigurationLabel={labels.quoteOnConfigurationLabel}
          />
        </li>
      ))}
    </ul>
  );
}
