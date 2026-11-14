/** Diapositives hero — visuels par secteur d’activité */

export type HeroCarouselSlide = {
  id: string;
  imagePath: string;
  /** Clé i18n sous Home.hero.carousel.slides.{labelKey} */
  labelKey: string;
};

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    id: "materiel-incendie",
    imagePath:
      "/images/Protection_incendie.jpeg",
    labelKey: "fire",
  },
  {
    id: "eau-petrole-gaz",
    imagePath: "/images/Gemini_Generated_Image_lg3auilg3auilg3a.jpeg",
    labelKey: "oilGas",
  },
  {
    id: "agro-alimentaire",
    imagePath:
      "/images/agrioAlimentaire.jpeg",
    labelKey: "agro",
  },
  {
    id: "industrie-miniere",
    imagePath: "/images/Gemini_Generated_Image_7uyvsj7uyvsj7uyv.jpeg",
    labelKey: "mining",
  },
];

export const HERO_CAROUSEL_INTERVAL_MS = 8000;
