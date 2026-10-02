import { getLocale, getTranslations } from "next-intl/server";

import { ProductShowcaseCard } from "@/components/patterns/product-showcase-card";
import { catalogProductHref, type CatalogProductListItem } from "@/lib/catalog/catalog-product";
import type { SiteLocale } from "@/lib/site";

type CatalogProductCardProps = {
  product: CatalogProductListItem;
};

export async function CatalogProductCard({ product }: CatalogProductCardProps) {
  const t = await getTranslations("Catalog");
  const locale = (await getLocale()) as SiteLocale;

  return (
    <li className="h-full list-none">
      <ProductShowcaseCard
        product={{
          id: product.id,
          slug: product.slug,
          reference: product.reference,
          name: product.name,
          description: product.description,
          dn: product.dn,
          pn: product.pn,
          material: product.material,
          href: catalogProductHref(product),
          familySlug: product.familySlug,
          subfamilySlug: product.subfamilySlug,
        }}
        locale={locale}
        pdfLabel="PDF"
        viewLabel={t("viewProduct")}
      />
    </li>
  );
}
