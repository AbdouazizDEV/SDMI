"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";

import { StorageMedia } from "@/components/features/home/storage-media";
import { cn } from "@/lib/utils";

type ProductImageZoomProps = {
  src: string;
  alt: string;
  priority?: boolean;
  zoomLabel: string;
  zoomHint: string;
  className?: string;
};

/** Zoom 0–100 % au survol, ancré sur la position du curseur. */
export function ProductImageZoom({
  src,
  alt,
  priority = false,
  zoomLabel,
  zoomHint,
  className,
}: ProductImageZoomProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [zoom, setZoom] = useState(55);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || reduceMotion) return;
    const onWheel = (event: WheelEvent) => {
      if (!el.matches(":hover")) return;
      event.preventDefault();
      const delta = event.deltaY > 0 ? -4 : 4;
      setZoom((prev) => Math.min(100, Math.max(0, prev + delta)));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [reduceMotion]);

  const updateOrigin = useCallback((clientX: number, clientY: number) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  }, []);

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    updateOrigin(event.clientX, event.clientY);
  }

  const activeZoom = hovering && !reduceMotion ? zoom : 0;
  const scale = 1 + activeZoom / 100;

  return (
    <div className={cn("relative flex size-full min-h-0 flex-col", className)}>
      <div
        ref={stageRef}
        className={cn(
          "group/zoom relative min-h-0 flex-1 overflow-hidden bg-slate-950/5",
          "cursor-crosshair touch-none",
        )}
        onPointerEnter={() => setHovering(true)}
        onPointerLeave={() => setHovering(false)}
        onPointerMove={onPointerMove}
      >
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${origin.x}% ${origin.y}%`,
            transition: hovering
              ? "transform 80ms linear"
              : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <StorageMedia
            storagePath={src}
            alt={alt}
            className="absolute inset-0 size-full"
            imageClassName="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
            quality={100}
            priority={priority}
          />
        </div>

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0 transition-opacity duration-300",
            hovering ? "opacity-100" : "opacity-0",
          )}
          style={{
            background: `radial-gradient(520px circle at ${origin.x}% ${origin.y}%, transparent 0%, transparent 18%, rgba(10, 24, 40, 0.18) 55%, rgba(10, 24, 40, 0.34) 100%)`,
          }}
        />

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 shadow-[0_0_0_1px_rgba(15,40,70,0.2),0_12px_28px_rgba(15,40,70,0.28)] transition-opacity duration-200",
            "bg-white/10 backdrop-blur-[1px]",
            hovering && activeZoom > 0 ? "opacity-100" : "opacity-0",
          )}
          style={{
            left: `${origin.x}%`,
            top: `${origin.y}%`,
          }}
        />

        {!reduceMotion ? (
          <p
            className={cn(
              "pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold tracking-wide text-white uppercase backdrop-blur-sm transition-opacity duration-300",
              hovering ? "opacity-0" : "opacity-100",
            )}
          >
            {zoomHint}
          </p>
        ) : null}
      </div>

      {!reduceMotion ? (
        <div className="border-border/70 flex items-center gap-3 border-t bg-card/90 px-4 py-3 backdrop-blur-sm">
          <label
            htmlFor="product-image-zoom"
            className="text-muted-foreground shrink-0 text-[10px] font-bold tracking-[0.14em] uppercase"
          >
            {zoomLabel}
          </label>
          <input
            id="product-image-zoom"
            type="range"
            min={0}
            max={100}
            step={1}
            value={zoom}
            onChange={(event) => setZoom(Number(event.target.value))}
            className="sdmi-zoom-range h-1.5 w-full cursor-pointer appearance-none rounded-full bg-primary/15 accent-[var(--cta)]"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={zoom}
            aria-label={zoomLabel}
          />
          <span className="font-heading text-primary w-10 text-right text-sm font-bold tabular-nums">
            {zoom}%
          </span>
        </div>
      ) : null}
    </div>
  );
}
