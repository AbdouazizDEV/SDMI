import type { CatalogRangeSeed } from "@/lib/catalog/range-product";
import { petroleumGateValveRanges } from "@/lib/catalog/seeds/petroleum-gate-valve-ranges";

const FAMILY = "vannes-operucle-guillotine";
const SUB = "vannes-opercule-forge";

/** Séries présentes sur la sous-famille « opercule forgé » (hors pétrole). */
const FORGED_SERIES = new Set([
  "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
  "121", "122", "123", "130", "131", "152", "153",
]);

function toIndustrialForged(seed: CatalogRangeSeed): CatalogRangeSeed {
  const suffix = seed.slug.replace(/^serie-\d+-vanne-opercule-/, "");
  return {
    ...seed,
    familySlug: FAMILY,
    subfamilySlug: SUB,
    slug: `serie-${seed.reference}-gamme-forge-${suffix}`,
    certified31: seed.certified31 ?? false,
  };
}

/** Gammes opercule forgé — même séries que le rayon industriel Sferaco, fiches SDMI dédiées. */
export const industrialForgedGateValveRanges: CatalogRangeSeed[] =
  petroleumGateValveRanges
    .filter((seed) => FORGED_SERIES.has(seed.reference))
    .map(toIndustrialForged);
