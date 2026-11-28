import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { adminLogoutAction } from "@/app/admin/actions";
import { getAdminSession } from "@/lib/admin/session";
import { fontBody, fontHeading } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `Admin | ${siteConfig.name}`,
    template: `%s | Admin ${siteConfig.name}`,
  },
  robots: { index: false, follow: false },
};

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await getAdminSession();

  if (!session) {
    redirect("/adminLogin");
  }

  return (
    <html lang="fr" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className="min-h-screen bg-[#edf1f5] text-base text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <header className="border-border/70 sticky top-0 z-40 border-b bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
              <div className="min-w-0">
                <p className="font-heading text-primary truncate text-lg font-bold tracking-tight">
                  {siteConfig.name} Admin
                </p>
                <p className="text-muted-foreground truncate text-xs">
                  {session.email} · {session.role}
                </p>
              </div>
              <nav className="hidden items-center gap-1 sm:flex">
                <a
                  href="/admin"
                  className="hover:bg-muted rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="/admin/catalogue"
                  className="hover:bg-muted rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  Catalogue
                </a>
                <a
                  href="/admin/demandes"
                  className="hover:bg-muted rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  Demandes
                </a>
              </nav>
              <form action={adminLogoutAction}>
                <button
                  type="submit"
                  className="border-border hover:bg-muted rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors"
                >
                  Déconnexion
                </button>
              </form>
            </div>
          </header>
          <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
