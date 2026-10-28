import Image from "next/image";

import { getStoragePublicUrl } from "@/lib/storage/public-url";
import { cn } from "@/lib/utils";

function resolveImageSrc(path: string | null): string | null {
  if (!path) {
    return null;
  }
  if (path.startsWith("/") || path.startsWith("https://") || path.startsWith("http://")) {
    return path;
  }
  return getStoragePublicUrl(path);
}

type StorageMediaProps = {
  storagePath: string | null;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
  quality?: number;
};

export function StorageMedia({
  storagePath,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  loading,
  quality,
}: StorageMediaProps) {
  const src = resolveImageSrc(storagePath);

  if (!src) {
    return (
      <div
        className={cn("bg-muted", className)}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority={priority}
        loading={loading ?? (priority ? "eager" : "lazy")}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
        unoptimized={src.endsWith(".gif")}
      />
    </div>
  );
}
