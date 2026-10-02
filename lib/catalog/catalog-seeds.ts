import type { CatalogProductFacets } from "@/lib/catalog/catalog-facets";
import type { CatalogProductListItem } from "@/lib/catalog/catalog-product";
import type { CatalogRangeSeed } from "@/lib/catalog/range-product";
import { petroleumGateValveRanges } from "@/lib/catalog/seeds/petroleum-gate-valve-ranges";
import { petroleumGlobeBellowsRanges } from "@/lib/catalog/seeds/petroleum-globe-bellows-ranges";

const ALL_SEEDS: CatalogRangeSeed[] = [
  ...petroleumGateValveRanges,
  ...petroleumGlobeBellowsRanges,
];

export function seedToListItem(seed: CatalogRangeSeed): CatalogProductListItem {
  return {
    id: null,
    slug: seed.slug,
    reference: seed.reference,
    name: seed.name,
    description: seed.description,
    dn: seed.dn,
    pn: seed.pn,
    material: seed.material,
    familySlug: seed.familySlug,
    subfamilySlug: seed.subfamilySlug,
    listingKind: seed.listingKind,
    quoteOnConfiguration: seed.listingKind === "range",
    technicalSpecs: seed.technicalSpecs,
  };
}

export function seedToFacets(seed: CatalogRangeSeed): CatalogProductFacets {
  return {
    ...seedToListItem(seed),
    connectionType: seed.connectionType ?? null,
    standards: seed.standards ?? [],
    sectorTags: seed.sectorTags ?? [],
    stockUnits: seed.stockUnits ?? 0,
    certified31: seed.certified31 ?? false,
  };
}

export function listCatalogSeeds(): CatalogRangeSeed[] {
  return ALL_SEEDS;
}

export function listSeedsForSubfamily(
  familySlug: string,
  subfamilySlug: string,
): CatalogRangeSeed[] {
  return ALL_SEEDS.filter(
    (seed) =>
      seed.familySlug === familySlug && seed.subfamilySlug === subfamilySlug,
  );
}

export function findSeedBySlug(slug: string): CatalogRangeSeed | undefined {
  return ALL_SEEDS.find((seed) => seed.slug === slug);
}

export function listAllSeedFacets(): CatalogProductFacets[] {
  return ALL_SEEDS.map(seedToFacets);
}
