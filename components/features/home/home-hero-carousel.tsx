"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { type HeroCarouselSlide } from "@/lib/home/hero-carousel-slides";
import { cn } from "@/lib/utils";

type HomeHeroCarouselProps = {
  slides: HeroCarouselSlide[];
  /** Labels accessibles indexés comme slides */
  slideLabels: string[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  className?: string;
};

export function HomeHeroCarousel({
  slides,
  slideLabels,
  activeIndex,
  onActiveIndexChange,
  className,
}: HomeHeroCarouselProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden>
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-[1.8s] ease-in-out",
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
                "object-cover object-center",
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
                "size-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "bg-cta w-7 shadow-md"
                  : "bg-primary-foreground/45 hover:bg-primary-foreground/75",
              )}
              aria-label={slideLabels[index]}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => onActiveIndexChange(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
