import { getCatalogNavigation, type CatalogNavFamily } from "@/lib/catalog/navigation";

export type ResolvedCatalogFamily = {
  kind: "family";
  family: CatalogNavFamily;
};

export type ResolvedCatalogSubfamily = {
  kind: "subfamily";
  family: CatalogNavFamily;
  subfamilySlug: string;
  subfamilyName: CatalogNavFamily["subfamilies"][number]["name"];
};

export type ResolvedCatalogPath = ResolvedCatalogFamily | ResolvedCatalogSubfamily;

export async function resolveCatalogPath(
  segments: string[],
): Promise<ResolvedCatalogPath | null> {
  if (segments.length === 0 || segments.length > 2) {
    return null;
  }

  const navigation = await getCatalogNavigation();
  const [familySlug, subfamilySlug] = segments;
  const family = navigation.families.find((item) => item.slug === familySlug);

  if (!family) {
    return null;
  }

  if (!subfamilySlug) {
    return { kind: "family", family };
  }

  const subfamily = family.subfamilies.find((item) => item.slug === subfamilySlug);
  if (!subfamily) {
    return null;
  }

  return {
    kind: "subfamily",
    family,
    subfamilySlug: subfamily.slug,
    subfamilyName: subfamily.name,
  };
}
