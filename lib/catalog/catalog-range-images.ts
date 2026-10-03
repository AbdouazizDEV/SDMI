import generated from "@/lib/catalog/catalog-range-images.generated.json";

type RangeImageManifest =
  | Record<string, string>
  | {
      references?: Record<string, string>;
      slugs?: Record<string, string>;
    };

function loadManifest(): {
  references: Record<string, string>;
  slugs: Record<string, string>;
} {
  const raw = generated as RangeImageManifest;
  if (
    raw &&
    typeof raw === "object" &&
    "references" in raw &&
    typeof (raw as { references: unknown }).references === "object" &&
    (raw as { references: unknown }).references !== null
  ) {
    const structured = raw as {
      references: Record<string, string>;
      slugs?: Record<string, string>;
    };
    return {
      references: structured.references,
      slugs: structured.slugs ?? {},
    };
  }
  return {
    references: raw as Record<string, string>,
    slugs: {},
  };
}

const { references: byReference, slugs: bySlug } = loadManifest();

/** Visuel par code série ou slug produit (évite les collisions inter-familles). */
export function getCatalogRangeImage(
  reference: string,
  productSlug?: string,
): string | null {
  if (productSlug && bySlug[productSlug]) {
    return bySlug[productSlug];
  }
  return byReference[reference] ?? null;
}
