import generated from "@/lib/catalog/catalog-range-images.generated.json";

const byReference: Record<string, string> = generated;

/** Visuel par code série (ex. 111, 115) — généré par scripts/sync-petroleum-gate-images.mjs */
export function getCatalogRangeImage(reference: string): string | null {
  return byReference[reference] ?? null;
}
