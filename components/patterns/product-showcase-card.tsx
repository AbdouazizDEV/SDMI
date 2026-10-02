import { StorageMedia } from "@/components/features/home/storage-media";
import { ProductShowcaseCardActions } from "@/components/patterns/product-showcase-card-actions";
import { Link } from "@/i18n/navigation";
import { resolveProductShowcaseImage } from "@/lib/catalog/product-showcase-image";
import { pickLocalized } from "@/lib/home/pick-localized";
import type { SiteLocale } from "@/lib/site";
import type { LocalizedText } from "@/types/localized";

export type ProductShowcaseCardData = {
  id: string | null;
  slug: string;
  reference: string;
  name: LocalizedText;
  description: LocalizedText;
  dn: number | null;
  pn: string | null;
  material: LocalizedText | null;
  href: string;
  familySlug?: string;
  subfamilySlug?: string;
  imageStoragePath?: string | null;
};

type ProductShowcaseCardProps = {
  product: ProductShowcaseCardData;
  locale: SiteLocale;
  pdfLabel: string;
  viewLabel: string;
};

export function ProductShowcaseCard({
  product,
  locale,
  pdfLabel,
  viewLabel,
}: ProductShowcaseCardProps) {
  const title = pickLocalized(product.name, locale);
  const description = pickLocalized(product.description, locale);
  const imagePath =
    product.imageStoragePath ??
    resolveProductShowcaseImage(product.subfamilySlug, product.familySlug);

  return (
    <article className="sdmi-surface-card sdmi-surface-card-accent group flex h-full flex-col">
      <Link
        href={product.href}
        className="relative block aspect-4/3 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {imagePath ? (
          <StorageMedia
            storagePath={imagePath}
            alt={title}
            className="absolute inset-0 size-full bg-white/90"
            imageClassName="object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        ) : (
          <>
            <div
              className="text-primary absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            <div className="from-primary/10 absolute inset-0 bg-gradient-to-tr via-transparent to-cta/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
          </>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60" />
        <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold tracking-widest text-primary uppercase shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
          {product.reference}
        </span>
        <span className="bg-cta/90 text-cta-foreground absolute right-4 bottom-4 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {viewLabel}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link
          href={product.href}
          className="font-heading text-primary group-hover:text-cta line-clamp-2 text-base leading-snug font-bold tracking-tight uppercase transition-colors md:text-lg"
        >
          {title}
        </Link>
        <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.dn ? <span className="sdmi-spec-pill">DN{product.dn}</span> : null}
          {product.pn ? <span className="sdmi-spec-pill">{product.pn}</span> : null}
          {product.material ? (
            <span className="sdmi-spec-pill max-w-full truncate">
              {pickLocalized(product.material, locale)}
            </span>
          ) : null}
        </div>

        <ProductShowcaseCardActions
          productId={product.id}
          slug={product.slug}
          reference={product.reference}
          name={product.name}
          pdfLabel={pdfLabel}
        />
      </div>
    </article>
  );
}
