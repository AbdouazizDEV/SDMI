"use server";

import { redirect } from "next/navigation";

import { createSupabaseServerAuthClient } from "@/lib/supabase/server-auth";

export async function adminLogoutAction() {
  const supabase = await createSupabaseServerAuthClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  redirect("/adminLogin");
}
