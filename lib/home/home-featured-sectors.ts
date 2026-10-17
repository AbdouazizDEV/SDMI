/** Secteurs mis en avant sur l’accueil (3 cartes + hero carousel). */

export const HOME_FEATURED_SECTOR_SLUGS = [
  "tuyauterie-materiels-incendie",
  "circuit-eau-petrole-gaz",
  "industrie-agro-alimentaire",
] as const;

export type HomeFeaturedSectorSlug = (typeof HOME_FEATURED_SECTOR_SLUGS)[number];

/** Clés i18n `Home.hero.carousel.slides.{key}` — libellé court sur les cartes accueil. */
export const homeFeaturedSectorSlideKeys: Record<
  HomeFeaturedSectorSlug,
  "fire" | "oilGas" | "agro"
> = {
  "tuyauterie-materiels-incendie": "fire",
  "circuit-eau-petrole-gaz": "oilGas",
  "industrie-agro-alimentaire": "agro",
};

export const homeFeaturedSectorImages: Record<HomeFeaturedSectorSlug, string> = {
  "tuyauterie-materiels-incendie":
    "/images/hero/Protection_incendie_et_robinetterie_de_sécurité.jpeg",
  "circuit-eau-petrole-gaz":
    "/images/hero/énergie_et_le_réseau_Eau_Pétrole_Gaz.jpeg",
  "industrie-agro-alimentaire":
    "/images/hero/inox_et_process_pour_l'agro-industrie_(Agro-alimentaire).jpeg",
};
