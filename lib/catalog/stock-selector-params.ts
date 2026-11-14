import {
  isCatalogFamilyBrowseable,
  isCatalogSubfamilyBrowseable,
} from "@/lib/catalog/catalog-readiness";
import { catalogV1Navigation } from "@/lib/catalog/catalog-v1-taxonomy";
import type { CatalogBrowseFilters } from "@/lib/catalog/catalog-facets";
import { pickCatalogLabel } from "@/lib/catalog/navigation";
import type { SiteLocale } from "@/lib/site";

/** Groupes legacy du sélecteur (anciennes URLs `?famille=`). */
const legacyFamilyToSubfamilies: Record<string, string[]> = {
  "vannes-boisseau": [
    "robinets-tournant-spherique-monobloc-inox",
    "robinets-tournant-spherique-2-pieces",
    "robinets-tournant-spherique-3-pieces",
    "robinets-tournant-spherique-3-pieces-a-brides",
    "vannes-sphere-laiton-fonte-pvc",
  ],
  "vannes-papillon": ["vannes-papillon"],
  clapets: ["clapets-petrole-forge-moule", "clapets"],
  filtration: ["filtres", "filtres-y", "filtres-petrole-forge-moule"],
  raccords: [
    "raccords-inox",
    "raccords-deca",
    "raccords-acier-a-souder",
    "raccords-fonte-malleable",
    "brides-a-collerettes",
  ],
};

function buildBrowseableFamilyMap(): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  for (const family of catalogV1Navigation.families) {
    if (!isCatalogFamilyBrowseable(family.slug)) {
      continue;
    }
    const subs = family.subfamilies
      .filter((sf) => isCatalogSubfamilyBrowseable(sf.slug))
      .map((sf) => sf.slug);
    if (subs.length > 0) {
      map[family.slug] = subs;
    }
  }
  return map;
}

const browseableFamilyMap = buildBrowseableFamilyMap();

const familyToSubfamilies: Record<string, string[]> = {
  ...legacyFamilyToSubfamilies,
  ...browseableFamilyMap,
};

const dnRangeMap: Record<string, { dnMin: number; dnMax: number }> = {
  "dn15-50": { dnMin: 15, dnMax: 50 },
  "dn65-150": { dnMin: 65, dnMax: 150 },
  "dn200-600": { dnMin: 200, dnMax: 600 },
  dn600plus: { dnMin: 600, dnMax: 2000 },
};

export const stockSelectorPressureKeys = new Set([
  "pn10-16",
  "pn25-40",
  "pn63plus",
  "class150",
]);

const pressureMap: Record<string, string[]> = {
  "pn10-16": ["PN10", "PN16"],
  "pn25-40": ["PN25", "PN40"],
  pn63plus: ["PN63", "PN100", "PN160"],
  class150: ["CLASS 150", "CL150", "150", "CLASS 300", "CL300", "300"],
};

const materialMap: Record<string, string[]> = {
  inox316: ["316", "316L", "AISI 316"],
  inox304: ["304", "304L", "AISI 304"],
  fonte: ["fonte", "cast iron", "ductile"],
  acier: ["acier", "A105", "WCB", "steel", "carbone"],
  laiton: ["laiton", "brass", "CW617"],
  ptfe: ["PTFE", "ePTFE", "Téflon", "Teflon"],
  elastomere: ["EPDM", "NBR", "FKM", "Viton", "silicone", "élastomère", "elastomer"],
  graphite: ["Graphite", "graphite"],
};

export const stockSelectorDnKeys = [
  "all",
  "dn15-50",
  "dn65-150",
  "dn200-600",
  "dn600plus",
] as const;

export const stockSelectorPressureOptionKeys = [
  "all",
  "pn10-16",
  "pn25-40",
  "pn63plus",
  "class150",
] as const;

export const stockSelectorMaterialKeys = [
  "all",
  "inox316",
  "inox304",
  "fonte",
  "acier",
  "laiton",
  "ptfe",
  "elastomere",
  "graphite",
] as const;

export type StockSelectorFamilyOption = {
  slug: string;
  label: string;
  subfamilyCount: number;
};

/** Familles catalogue réellement publiées sur `/produits`. */
export function getStockSelectorFamilyOptions(
  locale: SiteLocale,
): StockSelectorFamilyOption[] {
  return catalogV1Navigation.families
    .filter((family) => browseableFamilyMap[family.slug]?.length)
    .map((family) => ({
      slug: family.slug,
      label: pickCatalogLabel(family.name, locale),
      subfamilyCount: browseableFamilyMap[family.slug]?.length ?? 0,
    }));
}

export function getSubfamiliesForStockFamily(familySlug: string): string[] {
  return familyToSubfamilies[familySlug] ?? [];
}

/** Paramètres du sélecteur hero accueil → filtres catalogue `/produits`. */
export function browseFiltersFromStockSelector(
  params: Record<string, string | undefined>,
): Partial<CatalogBrowseFilters> {
  const partial: Partial<CatalogBrowseFilters> = {};

  const famille = params.famille;
  if (famille && famille !== "all" && familyToSubfamilies[famille]) {
    partial.subfamilies = familyToSubfamilies[famille];
  }

  const dn = params.dn;
  if (dn && dn !== "all" && dnRangeMap[dn]) {
    partial.dnMin = dnRangeMap[dn].dnMin;
    partial.dnMax = dnRangeMap[dn].dnMax;
  }

  const pn = params.pn ?? params.pressure;
  if (pn && pn !== "all" && pressureMap[pn]) {
    partial.pn = pressureMap[pn];
  }

  const matiere = params.matiere ?? params.material;
  if (matiere && matiere !== "all" && materialMap[matiere]) {
    partial.materials = materialMap[matiere];
  }

  return partial;
}

/**
 * Construit une query `/produits` au format natif du catalogue
 * (`sf`, `dnMin`, `dnMax`, `pn`, `mat`) pour un filtrage immédiat.
 */
export function buildStockSelectorQueryString(input: {
  family: string;
  dn: string;
  pressure: string;
  material: string;
}): string {
  const params = new URLSearchParams();

  if (input.family !== "all") {
    const subs = getSubfamiliesForStockFamily(input.family);
    if (subs.length > 0) {
      for (const sf of subs) {
        params.append("sf", sf);
      }
    } else {
      params.set("famille", input.family);
    }
  }

  if (input.dn !== "all" && dnRangeMap[input.dn]) {
    params.set("dnMin", String(dnRangeMap[input.dn].dnMin));
    params.set("dnMax", String(dnRangeMap[input.dn].dnMax));
  }

  if (input.pressure !== "all" && pressureMap[input.pressure]) {
    for (const pn of pressureMap[input.pressure]) {
      params.append("pn", pn);
    }
  }

  if (input.material !== "all" && materialMap[input.material]) {
    for (const mat of materialMap[input.material]) {
      params.append("mat", mat);
    }
  }

  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
