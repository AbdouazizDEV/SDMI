import { ArrowUpRightIcon } from "lucide-react";

import { CatalogTaxonomyMedia } from "@/components/features/catalog/catalog-taxonomy-media";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { SectorBlockKey } from "@/lib/sectors/sector-config";
import { sectorBlockImages } from "@/lib/sectors/sector-config";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type SectorEnvironmentBlockProps = {
  blockKey: SectorBlockKey;
  eyebrow: string;
  title: string;
  body: string;
  standards: string;
  recommendedTitle: string;
  refsCta: string;
  quoteCta: string;
  whatsappCta: string;
  reverse?: boolean;
  id?: string;
};

export function SectorEnvironmentBlock({
  blockKey,
  eyebrow,
  title,
  body,
  standards,
  recommendedTitle,
  refsCta,
  quoteCta,
  whatsappCta,
  reverse = false,
  id,
}: SectorEnvironmentBlockProps) {
  return (
    <article
      id={id}
      className={cn(
        "sdmi-surface-card sdmi-surface-card-accent grid overflow-hidden bg-card lg:grid-cols-2",
        reverse && "lg:[&>*:first-child]:order-2",
      )}
    >
      <div className="relative min-h-[220px] lg:min-h-full">
        <CatalogTaxonomyMedia
          storagePath={sectorBlockImages[blockKey]}
          alt={title}
          variant="card"
          className="aspect-auto size-full min-h-[220px] max-w-none rounded-none lg:min-h-[320px]"
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
        <p className="text-cta text-xs font-bold tracking-widest uppercase">{eyebrow}</p>
        <h2 className="font-heading text-primary mt-2 text-xl font-bold tracking-tight uppercase md:text-2xl">
          {title}
        </h2>
        <p className="text-muted-foreground mt-4 text-sm leading-relaxed md:text-base">{body}</p>
        <p className="text-foreground mt-4 rounded-lg bg-muted/50 px-3 py-2 text-sm font-medium ring-1 ring-border/60">
          {standards}
        </p>
        <div className="mt-6 border-t border-border/60 pt-6">
          <p className="font-heading text-primary text-xs font-bold tracking-wide uppercase">
            {recommendedTitle}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/produits"
              className={buttonVariants({
                variant: "outline",
                className: "inline-flex h-10 items-center rounded-sm font-semibold",
              })}
            >
              {refsCta}
              <ArrowUpRightIcon aria-hidden className="ml-1.5 size-4" />
            </Link>
            <Link
              href="/devis"
              className={buttonVariants({
                className:
                  "bg-cta text-cta-foreground hover:bg-cta/90 h-10 rounded-sm font-semibold",
              })}
            >
              {quoteCta}
            </Link>
            <a
              href={siteConfig.contact.whatsapp.href}
              className={buttonVariants({
                className:
                  "bg-whatsapp text-whatsapp-foreground hover:opacity-90 h-10 rounded-sm font-semibold",
              })}
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
