/** Gammes commerciales mises en avant (tiroir flottant). */

export type OfferShowcaseItem = {
  id: string;
  /** Lien catalogue si la famille existe ; sinon `/produits`. */
  href: string;
  /** Clé i18n Layout.offerShowcase.items.{id}.title */
  titleKey: string;
  /** Clé i18n Layout.offerShowcase.items.{id}.hint */
  hintKey: string;
};

export const offerShowcaseItems: OfferShowcaseItem[] = [
  {
    id: "robinetterie",
    href: "/produits/vannes",
    titleKey: "items.robinetterie.title",
    hintKey: "items.robinetterie.hint",
  },
  {
    id: "tuyauterie",
    href: "/produits/tuyauteries",
    titleKey: "items.tuyauterie.title",
    hintKey: "items.tuyauterie.hint",
  },
  {
    id: "visserie",
    href: "/produits",
    titleKey: "items.visserie.title",
    hintKey: "items.visserie.hint",
  },
  {
    id: "quincaillerie",
    href: "/produits/accessoires",
    titleKey: "items.quincaillerie.title",
    hintKey: "items.quincaillerie.hint",
  },
  {
    id: "profiles",
    href: "/produits",
    titleKey: "items.profiles.title",
    hintKey: "items.profiles.hint",
  },
  {
    id: "etancheite",
    href: "/produits/etancheite-statique",
    titleKey: "items.etancheite.title",
    hintKey: "items.etancheite.hint",
  },
  {
    id: "transmission",
    href: "/produits/roulements",
    titleKey: "items.transmission.title",
    hintKey: "items.transmission.hint",
  },
];
