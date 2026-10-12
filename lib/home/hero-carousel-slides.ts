/** Diapositives hero — visuels par secteur d’activité */

export type HeroCarouselSlide = {
  id: string;
  imagePath: string;
  /** Clé i18n sous Home.hero.carousel.slides.{labelKey} */
  labelKey: string;
};

export const heroCarouselSlides: HeroCarouselSlide[] = [
  {
    id: "agro-alimentaire",
    imagePath: "/images/hero/377ea9b8-cfae-49a8-afa2-30552cb5b6a0.jpeg",
    labelKey: "agro",
  },
  {
    id: "materiel-incendie",
    imagePath: "/images/hero/Gemini_Generated_Image_acztzeacztzeaczt.jpeg",
    labelKey: "fire",
  },
  {
    id: "eau-petrole-gaz",
    imagePath: "/images/hero/Gemini_Generated_Image_ummzueummzueummz.jpeg",
    labelKey: "oilGas",
  },
];

export const HERO_CAROUSEL_INTERVAL_MS = 8000;
