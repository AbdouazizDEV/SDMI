const CLOUDINARY_DELIVERY_HOST = "res.cloudinary.com";

/** Nom de cloud pour les URLs publiques. Le secret reste côté serveur. */
export function getCloudinaryCloudName(): string | null {
  const raw = process.env.CLOUDINARY_URL;
  if (!raw) {
    return null;
  }
  try {
    return new URL(raw).hostname || null;
  } catch {
    return null;
  }
}

/** N'accepte que les médias déjà publiés sur le compte Cloudinary du site. */
export function isCloudinaryDeliveryUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === CLOUDINARY_DELIVERY_HOST;
  } catch {
    return false;
  }
}
