import { createServerClient } from "@supabase/ssr";
import createIntlMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { routing } from "@/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

function isAdminPath(pathname: string) {
  return (
    pathname === "/adminLogin" ||
    pathname.startsWith("/adminLogin/") ||
    pathname === "/admin" ||
    pathname.startsWith("/admin/")
  );
}

async function updateSupabaseSession(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    return { response, user: null as null };
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        for (const { name, value } of cookiesToSet) {
          request.cookies.set(name, value);
        }
        response = NextResponse.next({
          request: { headers: request.headers },
        });
        for (const { name, value, options } of cookiesToSet) {
          response.cookies.set(name, value, options);
        }
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user, supabase };
}

function stripLocalePrefix(pathname: string) {
  for (const locale of routing.locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1) || "/";
    }
  }
  return pathname;
}

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathWithoutLocale = stripLocalePrefix(pathname);

  // /fr/adminLogin → /adminLogin (hors préfixe i18n)
  if (pathWithoutLocale !== pathname && isAdminPath(pathWithoutLocale)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = pathWithoutLocale;
    return NextResponse.redirect(redirectUrl);
  }

  if (isAdminPath(pathname)) {
    const { response, user, supabase } = await updateSupabaseSession(request);

    const isLogin = pathname === "/adminLogin" || pathname.startsWith("/adminLogin/");
    const isProtectedAdmin = pathname === "/admin" || pathname.startsWith("/admin/");

    if (isProtectedAdmin && !user) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/adminLogin";
      loginUrl.searchParams.set("next", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (isLogin && user && supabase) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      if (profile?.role === "admin" || profile?.role === "staff") {
        const adminUrl = request.nextUrl.clone();
        adminUrl.pathname = "/admin";
        adminUrl.search = "";
        return NextResponse.redirect(adminUrl);
      }
    }

    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
