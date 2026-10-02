import {
  getCatalogV1FamilyImage,
  getCatalogV1SubfamilyImage,
} from "@/lib/catalog/catalog-v1-assets";
import { getCatalogRangeImage } from "@/lib/catalog/catalog-range-images";
import { findSeedBySlug } from "@/lib/catalog/catalog-seeds";
import { getLegacySubfamilyImage } from "@/lib/images/legacy-subfamily-images";
import { siteAssets } from "@/lib/images/site-assets";

export type ProductShowcaseImageContext = {
  reference?: string;
  productSlug?: string;
};

/** Image vitrine : série / slug produit, sous-famille v1 / legacy, sinon famille. */
export function resolveProductShowcaseImage(
  subfamilySlug?: string,
  familySlug?: string,
  context?: ProductShowcaseImageContext,
): string | null {
  const reference =
    context?.reference ??
    (context?.productSlug ? findSeedBySlug(context.productSlug)?.reference : undefined);

  if (reference) {
    const rangeImage = getCatalogRangeImage(reference);
    if (rangeImage) {
      return rangeImage;
    }
  }

  if (subfamilySlug) {
    const v1Sub = getCatalogV1SubfamilyImage(subfamilySlug);
    if (v1Sub) {
      return v1Sub;
    }
    const sub = getLegacySubfamilyImage(subfamilySlug);
    if (sub) {
      return sub;
    }
  }
  if (familySlug) {
    const v1Family = getCatalogV1FamilyImage(familySlug);
    if (v1Family) {
      return v1Family;
    }
    if (familySlug in siteAssets.families) {
      return siteAssets.families[familySlug as keyof typeof siteAssets.families];
    }
  }
  return null;
}
