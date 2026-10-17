import { siteConfig } from "@/lib/site";

const { line1, city } = siteConfig.contact.address;

/** Requête géocodage / itinéraire Google Maps (dépôt SDMI Bopp). */
export const contactMapSearchQuery = `${line1}, ${city}`;

export const contactMapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactMapSearchQuery)}`;

/** Embed sans clé API (output=embed). */
export const contactMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactMapSearchQuery)}&hl=fr&z=16&output=embed`;
