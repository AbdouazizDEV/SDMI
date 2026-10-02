import { createSupabaseServerClient } from "@/lib/supabase/server";

/** Résout les slugs en UUID pour les lignes de devis (sans exposer les UUID côté UI). */
export async function resolveProductIdsBySlugs(
  slugs: string[],
): Promise<Map<string, string>> {
  const unique = [...new Set(slugs.filter(Boolean))];
  const map = new Map<string, string>();
  if (!unique.length) {
    return map;
  }

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return map;
  }

  const { data } = await supabase
    .from("products")
    .select("id, slug")
    .in("slug", unique)
    .eq("is_published", true);

  for (const row of data ?? []) {
    map.set(row.slug, row.id);
  }

  return map;
}
