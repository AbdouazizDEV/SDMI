import {
  getCatalogV1FamilyImage,
  getCatalogV1SubfamilyImage,
} from "@/lib/catalog/catalog-v1-assets";
import { getLegacySubfamilyImage } from "@/lib/images/legacy-subfamily-images";
import { siteAssets } from "@/lib/images/site-assets";

/** Image vitrine : sous-famille v1 / legacy, sinon famille. */
export function resolveProductShowcaseImage(
  subfamilySlug?: string,
  familySlug?: string,
): string | null {
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
