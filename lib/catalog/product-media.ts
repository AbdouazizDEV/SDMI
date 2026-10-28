import { isCloudinaryDeliveryUrl } from "@/lib/cloudinary/config";

export type ProductMediaOverride = {
  /** Photo déjà hébergée sur Cloudinary. Absente : la photo locale reste affichée. */
  imageUrl?: string;
  /** Vidéo de rotation 360° en boucle. Absente : pas de second slide. */
  videoUrl?: string;
};

/**
 * Renseigné produit par produit, par lots de 5, avant chaque mise en production.
 * Clé = slug produit.
 */
export const productMediaOverrides: Record<string, ProductMediaOverride> = {};

export function getProductMedia(slug: string): {
  imageUrl: string | null;
  videoUrl: string | null;
} {
  const entry = productMediaOverrides[slug];
  if (!entry) {
    return { imageUrl: null, videoUrl: null };
  }
  return {
    imageUrl:
      entry.imageUrl && isCloudinaryDeliveryUrl(entry.imageUrl) ? entry.imageUrl : null,
    videoUrl:
      entry.videoUrl && isCloudinaryDeliveryUrl(entry.videoUrl) ? entry.videoUrl : null,
  };
}
