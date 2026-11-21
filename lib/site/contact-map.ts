import { siteConfig } from "@/lib/site";

const { line1, line2, city } = siteConfig.contact.address;

/** Coordonnées dépôt SDMI (fiche Google Maps officielle). */
export const contactMapCoordinates = {
  lat: 14.704505493127385,
  lng: -17.45048528010976,
} as const;

/** Lien court Google Maps fourni pour le dépôt. */
export const contactMapShareUrl = "https://maps.app.goo.gl/Are7orEkJQNKbmdBA";

/** Adresse complète affichée / requête texte. */
export const contactMapSearchQuery = [line1, line2, city]
  .filter(Boolean)
  .join(", ");

/** Ouverture Google Maps / itinéraire vers le dépôt SDMI. */
export const contactMapDirectionsUrl = contactMapShareUrl;

/** Embed sans clé API (output=embed), ancré sur les coordonnées exactes. */
export const contactMapEmbedUrl = `https://www.google.com/maps?q=${contactMapCoordinates.lat},${contactMapCoordinates.lng}(${encodeURIComponent(contactMapSearchQuery)})&hl=fr&z=17&output=embed`;
