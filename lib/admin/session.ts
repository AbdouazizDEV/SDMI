import { createSupabaseServerAuthClient } from "@/lib/supabase/server-auth";

export type AdminSession = {
  userId: string;
  email: string | null;
  role: "admin" | "staff";
};

/** Session back-office : Auth Supabase + rôle `profiles`. */
export async function getAdminSession(): Promise<AdminSession | null> {
  const supabase = await createSupabaseServerAuthClient();
  if (!supabase) {
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile || (profile.role !== "admin" && profile.role !== "staff")) {
    return null;
  }

  return {
    userId: user.id,
    email: user.email ?? null,
    role: profile.role,
  };
}

export async function requireAdminSession(): Promise<AdminSession> {
  const session = await getAdminSession();
  if (!session || session.role !== "admin") {
    throw new Error("UNAUTHORIZED_ADMIN");
  }
  return session;
}
