import type { CatalogGridCardLabels } from "@/components/features/catalog/catalog-product-grid-list";

type CatalogGridLabelTranslator = {
  (key: string): string;
};

export function buildCatalogGridCardLabels(t: CatalogGridLabelTranslator): CatalogGridCardLabels {
  return {
    specDn: t("specDn"),
    specPn: t("specPn"),
    specMaterial: t("specMaterial"),
    stockInStock: t("stockInStock"),
    certifiedBadge: t("certifiedBadge"),
    pdfLabel: t("pdfDatasheet"),
    quoteProductCta: t("quoteProductCta"),
    rangeBadge: t("rangeBadge"),
    dnOnConfiguration: t("dnOnConfiguration"),
    quoteOnConfigurationLabel: t("quoteOnConfiguration"),
  };
}
