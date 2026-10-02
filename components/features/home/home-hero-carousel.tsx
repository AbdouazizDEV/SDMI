"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import {
  HERO_CAROUSEL_INTERVAL_MS,
  type HeroCarouselSlide,
} from "@/lib/home/hero-carousel-slides";
import { cn } from "@/lib/utils";

type HomeHeroCarouselProps = {
  slides: HeroCarouselSlide[];
  /** Labels accessibles indexés comme slides */
  slideLabels: string[];
  className?: string;
};

export function HomeHeroCarousel({
  slides,
  slideLabels,
  className,
}: HomeHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, HERO_CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, slides.length]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1.4s] ease-in-out",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={slide.imagePath}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className={cn(
                "object-cover object-center opacity-90",
                isActive && !reduceMotion && "sdmi-hero-media",
              )}
            />
          </div>
        );
      })}
      <ul className="absolute top-24 right-4 z-10 flex gap-1.5 sm:top-28 lg:right-6">
        {slides.map((slide, index) => (
          <li key={slide.id}>
            <button
              type="button"
              className={cn(
                "size-2 rounded-full transition-all",
                index === activeIndex
                  ? "bg-cta w-6"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/70",
              )}
              aria-label={slideLabels[index]}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
