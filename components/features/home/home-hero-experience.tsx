"use client";

import {
  BookOpenIcon,
  CheckCircle2Icon,
  FileTextIcon,
  MapPinIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

import { HomeHeroCarousel } from "@/components/features/home/home-hero-carousel";
import { HomeStockSelectorPanel } from "@/components/features/home/home-stock-selector";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  HERO_CAROUSEL_INTERVAL_MS,
  heroCarouselSlides,
  type HeroCarouselSlide,
} from "@/lib/home/hero-carousel-slides";

export type HeroSlideContent = {
  label: string;
  title: string;
  description: string;
};

export type HomeHeroExperienceProps = {
  location: string;
  certificationBadge: string;
  catalogCta: string;
  quoteCta: string;
  stockSelectorTitle: string;
  slideContents: HeroSlideContent[];
  slides?: HeroCarouselSlide[];
};

export function HomeHeroExperience({
  location,
  certificationBadge,
  catalogCta,
  quoteCta,
  stockSelectorTitle,
  slideContents,
  slides = heroCarouselSlides,
}: HomeHeroExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const slideLabels = slideContents.map((s) => s.label);
  const activeSlide = slideContents[activeIndex] ?? slideContents[0];

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
    <section aria-labelledby="home-hero-heading" className="relative overflow-hidden">
      <div className="relative flex min-h-[36rem] flex-col bg-primary lg:min-h-[42rem]">
        <HomeHeroCarousel
          slides={slides}
          slideLabels={slideLabels}
          activeIndex={activeIndex}
          onActiveIndexChange={setActiveIndex}
        />
        <div className="sdmi-hero-overlay pointer-events-none absolute inset-0 z-[1]" />
        <div className="sdmi-hero-shine z-[1]" aria-hidden />

        <div className="relative z-[2] mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-14 lg:px-6 lg:py-20">
          <p className="sdmi-hero-enter border-cta/60 text-primary-foreground mb-3 inline-flex w-fit max-w-xl items-center gap-2 rounded-sm border bg-black/35 px-3 py-2 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md sm:text-xs">
            <MapPinIcon aria-hidden className="text-cta size-4 shrink-0" />
            {location}
          </p>
          <p className="sdmi-hero-enter sdmi-hero-enter-delay-1 text-primary-foreground/90 mb-5 inline-flex w-fit max-w-xl items-center gap-2 text-[11px] font-semibold tracking-wide uppercase sm:text-xs">
            <CheckCircle2Icon aria-hidden className="text-cta size-3.5 shrink-0" />
            {certificationBadge}
          </p>

          <div key={activeIndex} className="sdmi-hero-slide-copy">
            <h1
              id="home-hero-heading"
              className="font-heading max-w-4xl text-3xl leading-[1.08] font-bold tracking-tight text-primary-foreground uppercase drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-4xl lg:text-[2.65rem]"
            >
              {activeSlide?.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)] md:text-lg">
              {activeSlide?.description}
            </p>
          </div>

          <div className="sdmi-hero-enter sdmi-hero-enter-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/produits"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 inline-flex h-12 items-center gap-2 rounded-sm border-2 bg-black/25 px-6 text-sm font-bold uppercase tracking-wide backdrop-blur-sm",
              })}
            >
              <BookOpenIcon aria-hidden className="size-4" />
              {catalogCta}
            </Link>
            <Link
              href="/devis"
              className="bg-cta text-cta-foreground hover:bg-cta/90 focus-visible:ring-ring inline-flex h-12 items-center gap-2 rounded-sm px-6 text-sm font-bold uppercase tracking-wide shadow-lg transition-colors focus-visible:ring-2 focus-visible:outline-none"
            >
              <FileTextIcon aria-hidden className="size-4" />
              {quoteCta}
            </Link>
          </div>
        </div>

        <div className="relative z-[2] border-t border-white/10 bg-primary/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-5 lg:px-6 lg:py-6">
            <p className="text-cta mb-4 inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase lg:text-sm">
              <SlidersHorizontalIcon aria-hidden className="size-4" />
              {stockSelectorTitle}
            </p>
            <HomeStockSelectorPanel variant="heroFooter" />
          </div>
        </div>
      </div>
    </section>
  );
}
