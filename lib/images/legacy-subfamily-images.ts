/** Images sous-familles récupérées depuis https://www.sdmi.sn/ (ordre catalogue legacy). */

export const legacySubfamilyImageBySlug: Record<string, string> = {
  "robinets-a-boisseau-spherique": "/images/subfamilies/robinets-a-boisseau-spherique.jpg",
  "robinets-a-soupape": "/images/subfamilies/robinets-a-soupape.jpg",
  "robinets-a-operucle": "/images/subfamilies/robinets-a-operucle.jpg",
  "vannes-guillotine": "/images/subfamilies/vannes-guillotine.jpg",
  electrovannes: "/images/subfamilies/electrovannes.jpg",
  "vannes-a-pointeau": "/images/subfamilies/vannes-a-pointeau.jpg",
  "vannes-commandes-pneumatiques":
    "/images/subfamilies/vannes-commandes-pneumatiques.jpg",
  "robinets-a-papillon": "/images/subfamilies/robinets-a-papillon.jpg",
  "compensateurs-dilatation": "/images/subfamilies/compensateurs-dilatation.gif",
  "soupapes-reducteurs-pression":
    "/images/subfamilies/soupapes-reducteurs-pression.png",
  "brides-equipements": "/images/subfamilies/brides-equipements.jpg",
  connexions: "/images/subfamilies/connexions.png",
  "filtres-a-tamis": "/images/subfamilies/filtres-a-tamis.jpg",
  "clapet-anti-retour": "/images/subfamilies/clapet-anti-retour.jpg",
  thermometre: "/images/subfamilies/thermometre.gif",
  manometre: "/images/subfamilies/manometre.gif",
  "controleur-circulation": "/images/subfamilies/controleur-circulation.png",
  "compteurs-eau": "/images/subfamilies/compteurs-eau.jpg",
  "controle-debit": "/images/subfamilies/controle-debit.jpg",
  "indicateur-niveau": "/images/subfamilies/indicateur-niveau.png",
  raccords: "/images/subfamilies/raccords.gif",
  colliers: "/images/subfamilies/colliers.gif",
};

export function getLegacySubfamilyImage(slug: string): string | null {
  return legacySubfamilyImageBySlug[slug] ?? null;
}
