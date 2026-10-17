import { StorageMedia } from "@/components/features/home/storage-media";
import { cn } from "@/lib/utils";

type SectorDetailHeroMediaProps = {
  imagePath: string | null;
  alt: string;
  priority?: boolean;
  className?: string;
};

/** Visuel secteur — photos hero paysage en cover (pas object-contain catalogue). */
export function SectorDetailHeroMedia({
  imagePath,
  alt,
  priority = false,
  className,
}: SectorDetailHeroMediaProps) {
  return (
    <div
      className={cn(
        "sdmi-surface-card sdmi-surface-card-accent relative w-full overflow-hidden",
        className,
      )}
    >
      <StorageMedia
        storagePath={imagePath}
        alt={alt}
        priority={priority}
        className="aspect-[16/10] min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[340px]"
        imageClassName="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="sdmi-media-card-overlay pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
    </div>
  );
}
