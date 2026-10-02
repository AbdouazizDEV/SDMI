/** Diapositives hero — images officielles https://www.sdmi.sn/ */

export type HeroCarouselSlide = {
  id: string;
  imagePath: string;
  labelKey: string;
};

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    id: "stock-dakar",
    imagePath: "/images/hero-robinetterie-industrielle.jpg",
    labelKey: "stockDakar",
  },
  {
    id: "circuit-eau-petrole-gaz",
    imagePath: "/images/main-slider/1.jpg",
    labelKey: "oilGas",
  },
  {
    id: "robinetterie-industrielle",
    imagePath: "/images/main-slider/2.jpg",
    labelKey: "industrialValves",
  },
  {
    id: "agroalimentaire",
    imagePath: "/images/main-slider/3.jpg",
    labelKey: "foodIndustry",
  },
  {
    id: "incendie",
    imagePath: "/images/main-slider/4.jpg",
    labelKey: "fireSafety",
  },
];

export const HERO_CAROUSEL_INTERVAL_MS = 7000;
