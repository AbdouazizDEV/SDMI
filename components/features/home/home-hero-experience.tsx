"use client";

import {
  BookOpenIcon,
  CheckCircle2Icon,
  FileTextIcon,
  SlidersHorizontalIcon,
} from "lucide-react";

import { HomeHeroCarousel } from "@/components/features/home/home-hero-carousel";
import { HomeStockSelectorPanel } from "@/components/features/home/home-stock-selector";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  heroCarouselSlides,
  type HeroCarouselSlide,
} from "@/lib/home/hero-carousel-slides";
export type HomeHeroExperienceProps = {
  badge: string;
  title: string;
  subtitle: string;
  catalogCta: string;
  quoteCta: string;
  stockSelectorTitle: string;
  slideLabels: string[];
  slides?: HeroCarouselSlide[];
};

export function HomeHeroExperience({
  badge,
  title,
  subtitle,
  catalogCta,
  quoteCta,
  stockSelectorTitle,
  slideLabels,
  slides = heroCarouselSlides,
}: HomeHeroExperienceProps) {
  return (
    <section aria-labelledby="home-hero-heading" className="relative overflow-hidden">
      <div className="relative flex min-h-[36rem] flex-col bg-primary lg:min-h-[42rem]">
        <HomeHeroCarousel slides={slides} slideLabels={slideLabels} />
        <div className="sdmi-hero-overlay absolute inset-0" />
        <div className="sdmi-hero-shine" aria-hidden />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 py-14 lg:px-6 lg:py-20">
          <p className="sdmi-hero-enter border-cta/70 text-primary-foreground mb-5 inline-flex w-fit max-w-xl items-center gap-2 rounded-sm border-2 bg-black/25 px-3 py-2 text-[11px] font-bold uppercase tracking-wide backdrop-blur-md sm:text-xs">
            <CheckCircle2Icon aria-hidden className="text-cta size-4 shrink-0" />
            {badge}
          </p>
          <h1
            id="home-hero-heading"
            className="sdmi-hero-enter sdmi-hero-enter-delay-1 font-heading max-w-4xl text-3xl leading-[1.08] font-bold tracking-tight text-primary-foreground uppercase md:text-4xl lg:text-[2.65rem]"
          >
            {title}
          </h1>
          <p className="sdmi-hero-enter sdmi-hero-enter-delay-2 mt-5 max-w-3xl text-base leading-relaxed text-primary-foreground/95 md:text-lg">
            {subtitle}
          </p>
          <div className="sdmi-hero-enter sdmi-hero-enter-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/produits"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10 inline-flex h-12 items-center gap-2 rounded-sm border-2 bg-transparent px-6 text-sm font-bold uppercase tracking-wide backdrop-blur-sm",
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

        <div className="relative border-t border-white/10 bg-primary/95 backdrop-blur-sm">
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
