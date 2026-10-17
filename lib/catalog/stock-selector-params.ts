import type { CatalogBrowseFilters } from "@/lib/catalog/catalog-facets";

const familyToSubfamilies: Record<string, string[]> = {
  "vannes-boisseau": [
    "robinets-tournant-spherique-monobloc-inox",
    "robinets-tournant-spherique-2-pieces",
    "robinets-tournant-spherique-3-pieces",
    "robinets-tournant-spherique-3-pieces-a-brides",
    "vannes-sphere-laiton-fonte-pvc",
  ],
  "vannes-papillon": ["vannes-papillon"],
  clapets: ["clapets-petrole-forge-moule", "clapets"],
  filtration: ["filtres", "filtres-y"],
  raccords: [
    "raccords-inox",
    "raccords-deca",
    "raccords-acier-a-souder",
    "raccords-fonte-malleable",
    "brides-a-collerettes",
  ],
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
  pn63plus: ["PN63", "PN100"],
  class150: ["CLASS 150", "CL150", "150"],
};

const materialMap: Record<string, string[]> = {
  inox316: ["316", "316L", "AISI 316"],
  inox304: ["304", "304L", "AISI 304"],
  fonte: ["fonte", "cast iron", "ductile"],
  acier: ["acier", "A105", "WCB", "steel"],
  laiton: ["laiton", "brass", "CW617"],
};

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

export function buildStockSelectorQueryString(input: {
  family: string;
  dn: string;
  pressure: string;
  material: string;
}): string {
  const params = new URLSearchParams();
  if (input.family !== "all") params.set("famille", input.family);
  if (input.dn !== "all") params.set("dn", input.dn);
  if (input.pressure !== "all") params.set("pn", input.pressure);
  if (input.material !== "all") params.set("matiere", input.material);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
