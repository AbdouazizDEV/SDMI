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
        isHero ? "aspect-square min-h-[220px] max-w-md" : "aspect-4/3 min-h-[180px]",
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
            isHero ? "p-6 md:p-8" : "p-4 group-hover:scale-105",
          )}
          sizes={
            isHero
              ? "(max-width: 1024px) 90vw, 320px"
              : "(max-width: 640px) 100vw, 33vw"
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
