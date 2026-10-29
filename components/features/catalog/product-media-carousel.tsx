"use client";

import { useState } from "react";

import { StorageMedia } from "@/components/features/home/storage-media";
import { cn } from "@/lib/utils";

type ProductMediaCarouselProps = {
  imageSrcs: string[];
  videoSrc: string | null;
  alt: string;
  labels: {
    photo: string;
    video: string;
    noImage: string;
  };
};

export function ProductMediaCarousel({
  imageSrcs,
  videoSrc,
  alt,
  labels,
}: ProductMediaCarouselProps) {
  const images = imageSrcs.filter(Boolean);
  const hasVideo = Boolean(videoSrc);
  const slideCount = images.length + Number(hasVideo);
  const [index, setIndex] = useState(0);
  const active = Math.min(index, Math.max(slideCount - 1, 0));
  const showingVideo = hasVideo && active === images.length;
  const imageIndex = showingVideo ? 0 : Math.min(active, Math.max(images.length - 1, 0));
  const currentImage = images[imageIndex];

  return (
    <div className="relative aspect-square bg-gradient-to-br from-white via-slate-50 to-primary/5">
      {currentImage && !showingVideo ? (
        <StorageMedia
          storagePath={currentImage}
          alt={images.length > 1 ? `${alt} — ${imageIndex + 1}` : alt}
          className="absolute inset-0 size-full"
          imageClassName="object-contain p-8 lg:p-10"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={100}
          priority={imageIndex === 0}
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

      {slideCount === 0 ? (
        <div className="text-muted-foreground flex size-full items-center justify-center text-sm">
          {labels.noImage}
        </div>
      ) : null}

      {slideCount > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-full bg-background/90 p-1 shadow-sm ring-1 ring-border/70 backdrop-blur-sm">
          {images.map((src, photoIndex) => (
            <button
              key={src}
              type="button"
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
                !showingVideo && imageIndex === photoIndex
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground",
              )}
              aria-pressed={!showingVideo && imageIndex === photoIndex}
              onClick={() => setIndex(photoIndex)}
            >
              {images.length > 1 ? `${labels.photo} ${photoIndex + 1}` : labels.photo}
            </button>
          ))}
          {hasVideo ? (
            <button
              type="button"
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase",
                showingVideo ? "bg-primary text-primary-foreground" : "text-muted-foreground",
              )}
              aria-pressed={showingVideo}
              onClick={() => setIndex(images.length)}
            >
              {labels.video}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
