"use client";

import { createBrowserClient } from "@supabase/ssr";

import type { Database } from "@/lib/supabase/database.types";
import { getSupabasePublicEnv } from "@/lib/supabase/env";

export function createSupabaseBrowserClient() {
  const env = getSupabasePublicEnv();
  if (!env) {
    throw new Error("Supabase public env manquant (URL / anon key).");
  }

  return createBrowserClient<Database>(env.url, env.anonKey);
}
