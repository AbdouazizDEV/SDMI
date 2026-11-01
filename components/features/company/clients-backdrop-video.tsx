"use client";

import { useEffect, useRef } from "react";

import { clientsTrustBackdropVideo } from "@/lib/images/legacy-client-logos";

export function ClientsBackdropVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      className="sdmi-clients-backdrop-video pointer-events-none absolute inset-0 size-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden
    >
      <source src={clientsTrustBackdropVideo} type="video/mp4" />
    </video>
  );
}
