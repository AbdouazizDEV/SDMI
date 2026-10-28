"use client";

import { useState } from "react";

import { StorageMedia } from "@/components/features/home/storage-media";
import { cn } from "@/lib/utils";

type ProductMediaCarouselProps = {
  imageSrc: string | null;
  videoSrc: string | null;
  alt: string;
  labels: {
    photo: string;
    video: string;
    noImage: string;
  };
};

export function ProductMediaCarousel({
  imageSrc,
  videoSrc,
  alt,
  labels,
}: ProductMediaCarouselProps) {
  const hasImage = Boolean(imageSrc);
  const hasVideo = Boolean(videoSrc);
  const slideCount = Number(hasImage) + Number(hasVideo);
  const [index, setIndex] = useState(0);
  const active = Math.min(index, Math.max(slideCount - 1, 0));
  const showingVideo = hasVideo && (!hasImage || active === 1);

  return (
    <div className="relative aspect-square bg-gradient-to-br from-white via-slate-50 to-primary/5">
      {hasImage && imageSrc && !showingVideo ? (
        <StorageMedia
          storagePath={imageSrc}
          alt={alt}
          className="absolute inset-0 size-full"
          imageClassName="object-contain p-8 lg:p-10"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={100}
          priority
        />
      ) : null}

      {showingVideo && videoSrc ? (
        <video
          key={videoSrc}
          className="absolute inset-0 size-full object-contain p-8 lg:p-10"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={labels.video}
        />
      ) : null}

      {!hasImage && !hasVideo ? (
        <div className="text-muted-foreground flex size-full items-center justify-center text-sm">
          {labels.noImage}
        </div>
      ) : null}

      {slideCount > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-background/90 p-1 shadow-sm ring-1 ring-border/70 backdrop-blur-sm">
          {hasImage ? (
            <button
              type="button"
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
                !showingVideo ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
              aria-pressed={!showingVideo}
              onClick={() => setIndex(0)}
            >
              {labels.photo}
            </button>
          ) : null}
          {hasVideo ? (
            <button
              type="button"
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
                showingVideo ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
              aria-pressed={showingVideo}
              onClick={() => setIndex(1)}
            >
              {labels.video}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
