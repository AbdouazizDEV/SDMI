"use client";

import { useState } from "react";
import Image from "next/image";

import { ProductImageZoom } from "@/components/features/catalog/product-image-zoom";
import { getStoragePublicUrl } from "@/lib/storage/public-url";
import { cn } from "@/lib/utils";

type ProductMediaCarouselProps = {
  imageSrcs: string[];
  videoSrc: string | null;
  alt: string;
  labels: {
    photo: string;
    video: string;
    noImage: string;
    zoomLabel: string;
    zoomHint: string;
  };
};

function resolveSrc(path: string): string {
  return path.startsWith("/") || path.startsWith("http")
    ? path
    : (getStoragePublicUrl(path) ?? path);
}

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
  const imageIndex = showingVideo
    ? 0
    : Math.min(active, Math.max(images.length - 1, 0));
  const currentImage = images[imageIndex];

  return (
    <div className="flex h-full min-h-[22rem] flex-col md:min-h-[28rem] lg:min-h-[34rem]">
      <div className="relative min-h-0 flex-1 overflow-hidden bg-[linear-gradient(145deg,rgba(248,250,252,1)_0%,rgba(226,232,240,0.55)_48%,rgba(27,58,87,0.08)_100%)]">
        {currentImage && !showingVideo ? (
          <ProductImageZoom
            key={currentImage}
            src={currentImage}
            alt={images.length > 1 ? `${alt} — ${imageIndex + 1}` : alt}
            priority={imageIndex === 0}
            zoomLabel={labels.zoomLabel}
            zoomHint={labels.zoomHint}
            className="absolute inset-0"
          />
        ) : null}

        {showingVideo && videoSrc ? (
          <video
            key={videoSrc}
            className="absolute inset-0 size-full object-cover"
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
      </div>

      {slideCount > 1 ? (
        <div className="border-border/70 flex gap-2 overflow-x-auto border-t bg-card/95 p-3">
          {images.map((src, photoIndex) => {
            const thumb = resolveSrc(src);
            const selected = !showingVideo && imageIndex === photoIndex;
            return (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(photoIndex)}
                aria-pressed={selected}
                aria-label={`${labels.photo} ${photoIndex + 1}`}
                className={cn(
                  "relative size-16 shrink-0 overflow-hidden rounded-md border transition-[border-color,box-shadow,transform]",
                  selected
                    ? "border-cta ring-cta/30 shadow-md ring-2"
                    : "border-border/80 hover:border-primary/40",
                )}
              >
                <Image
                  src={thumb}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            );
          })}
          {hasVideo ? (
            <button
              type="button"
              onClick={() => setIndex(images.length)}
              aria-pressed={showingVideo}
              className={cn(
                "text-primary flex size-16 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold tracking-wide uppercase",
                showingVideo
                  ? "border-cta bg-cta/10 ring-cta/30 ring-2"
                  : "border-border/80 hover:border-primary/40",
              )}
            >
              {labels.video}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
