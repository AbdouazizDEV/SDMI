import type { CatalogGridCardLabels } from "@/components/features/catalog/catalog-product-grid-list";

type CatalogGridLabelTranslator = {
  (key: string): string;
};

export function buildCatalogGridCardLabels(t: CatalogGridLabelTranslator): CatalogGridCardLabels {
  return {
    specDn: t("cardSpecDn"),
    specPn: t("cardSpecPn"),
    specMaterial: t("cardSpecMaterial"),
    stockInStock: t("stockInStock"),
    certifiedBadge: t("certifiedBadge"),
    quoteProductCta: t("quoteProductCta"),
    rangeBadge: t("rangeBadge"),
    dnOnConfiguration: t("dnOnConfiguration"),
    quoteOnConfigurationLabel: t("cardQuoteHint"),
  };
}
