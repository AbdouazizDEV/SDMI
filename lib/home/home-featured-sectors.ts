/** Secteurs mis en avant — mêmes quatre pôles et visuels que le hero / `/secteurs`. */

export const HOME_FEATURED_SECTOR_SLUGS = [
  "tuyauterie-materiels-incendie",
  "circuit-eau-petrole-gaz",
  "industrie-agro-alimentaire",
  "industrie-miniere",
] as const;

export type HomeFeaturedSectorSlug = (typeof HOME_FEATURED_SECTOR_SLUGS)[number];

/** Secteurs affichés dans la section chantiers de la page d’accueil. */
export const HOME_SECTION_SECTOR_SLUGS = [
  "circuit-eau-petrole-gaz",
  "industrie-miniere",
] as const satisfies readonly HomeFeaturedSectorSlug[];

/** Clés i18n `Home.hero.carousel.slides.{key}` — libellé court sur les cartes accueil. */
export const homeFeaturedSectorSlideKeys: Record<
  HomeFeaturedSectorSlug,
  "fire" | "oilGas" | "agro" | "mining"
> = {
  "tuyauterie-materiels-incendie": "fire",
  "circuit-eau-petrole-gaz": "oilGas",
  "industrie-agro-alimentaire": "agro",
  "industrie-miniere": "mining",
};

export const homeFeaturedSectorImages: Record<HomeFeaturedSectorSlug, string> = {
  "tuyauterie-materiels-incendie":
    "/images/Protection_incendie.jpeg",
  "circuit-eau-petrole-gaz":
    "/images/Gemini_Generated_Image_lg3auilg3auilg3a.jpeg",
  "industrie-agro-alimentaire":
    "/images/agrioAlimentaire.jpeg",
  "industrie-miniere": "/images/Gemini_Generated_Image_7uyvsj7uyvsj7uyv.jpeg",
};
