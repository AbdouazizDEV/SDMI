import { StorageMedia } from "@/components/features/home/storage-media";
import { cn } from "@/lib/utils";

type CatalogTaxonomyMediaProps = {
  storagePath: string | null;
  alt: string;
  priority?: boolean;
  variant?: "hero" | "card";
  className?: string;
};

/** Visuel famille / sous-famille — conteneur dimensionné pour éviter les images invisibles (fill). */
export function CatalogTaxonomyMedia({
  storagePath,
  alt,
  priority = false,
  variant = "hero",
  className,
}: CatalogTaxonomyMediaProps) {
  const isHero = variant === "hero";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-gradient-to-br from-white via-slate-50 to-primary/5",
        isHero
          ? "aspect-[16/10] min-h-[280px] w-full rounded-2xl sm:min-h-[340px] lg:aspect-auto lg:min-h-[606px]"
          : "aspect-[4/3] min-h-[200px] rounded-xl sm:min-h-[220px]",
        className,
      )}
    >
      {storagePath ? (
        <StorageMedia
          storagePath={storagePath}
          alt={alt}
          priority={priority}
          className="absolute inset-0 size-full"
          imageClassName={cn(
            "object-contain transition-transform duration-500",
            isHero
              ? "rounded-xl p-2 sm:p-3 lg:p-4"
              : "rounded-lg p-3 sm:p-4 group-hover:scale-[1.02]",
          )}
          sizes={
            isHero
              ? "(max-width: 1024px) 100vw, 640px"
              : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
          }
        />
      ) : (
        <div
          className="text-muted-foreground flex size-full items-center justify-center text-xs font-medium"
          role="img"
          aria-label={alt}
        >
          SDMI
        </div>
      )}
    </div>
  );
}
