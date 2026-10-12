import {
  getCatalogV1FamilyImage,
  getCatalogV1SubfamilyImage,
} from "@/lib/catalog/catalog-v1-assets";
import { getCatalogRangeImage } from "@/lib/catalog/catalog-range-images";
import { findSeedBySlug, listSeedsForSubfamily } from "@/lib/catalog/catalog-seeds";
import { getLegacySubfamilyImage } from "@/lib/images/legacy-subfamily-images";
import { siteAssets } from "@/lib/images/site-assets";

export type ProductShowcaseImageContext = {
  reference?: string;
  productSlug?: string;
};

/** Visuel sous-famille : 1er produit publié de la gamme, puis assets taxonomie / legacy (sans repli famille). */
export function resolveSubfamilyShowcaseImage(
  familySlug: string,
  subfamilySlug: string,
): string | null {
  const seeds = listSeedsForSubfamily(familySlug, subfamilySlug);
  for (const seed of seeds) {
    const rangeImage = getCatalogRangeImage(seed.reference, seed.slug);
    if (rangeImage) {
      return rangeImage;
    }
  }

  const v1Sub = getCatalogV1SubfamilyImage(subfamilySlug);
  if (v1Sub) {
    return v1Sub;
  }

  return getLegacySubfamilyImage(subfamilySlug);
}

/** Image vitrine : série / slug produit, sous-famille v1 / legacy, sinon famille. */
export function resolveProductShowcaseImage(
  subfamilySlug?: string,
  familySlug?: string,
  context?: ProductShowcaseImageContext,
): string | null {
  const reference =
    context?.reference ??
    (context?.productSlug ? findSeedBySlug(context.productSlug)?.reference : undefined);

  if (reference || context?.productSlug) {
    const rangeImage = getCatalogRangeImage(
      reference ?? "",
      context?.productSlug,
    );
    if (rangeImage) {
      return rangeImage;
    }
  }

  if (subfamilySlug && familySlug) {
    const subfamilyImage = resolveSubfamilyShowcaseImage(familySlug, subfamilySlug);
    if (subfamilyImage) {
      return subfamilyImage;
    }
  } else if (subfamilySlug) {
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
