import Image from "next/image";
import { Suspense } from "react";

import { AdminLoginForm } from "@/components/features/admin/admin-login-form";
import { siteConfig } from "@/lib/site";

export default function AdminLoginPage() {
  return (
    <main className="relative flex min-h-screen overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 12% -10%, rgba(232,114,12,0.22), transparent 55%), radial-gradient(900px 500px at 90% 10%, rgba(27,58,87,0.55), transparent 50%), linear-gradient(145deg, #0f2438 0%, #1b3a57 42%, #102536 100%)",
        }}
      />
      <div
        aria-hidden
        className="admin-login-grid pointer-events-none absolute inset-0 opacity-[0.18]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-16 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(232,114,12,0.35),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center gap-10 px-5 py-12 md:flex-row md:items-center md:gap-16 md:px-8 lg:px-10">
        <section className="admin-login-brand max-w-xl text-white md:flex-1">
          <p className="font-heading text-[0.7rem] font-bold tracking-[0.28em] text-white/70 uppercase">
            Back-office
          </p>
          <h1 className="font-heading mt-4 text-5xl leading-[0.92] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            Accès réservé à l’administration catalogue, demandes de devis et
            pilotage du dépôt.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <span className="bg-cta inline-block size-1.5 rounded-full" />
              Session sécurisée Supabase Auth
            </li>
            <li className="flex items-center gap-2">
              <span className="bg-cta inline-block size-1.5 rounded-full" />
              Rôle admin / staff requis
            </li>
          </ul>
        </section>

        <section className="admin-login-card w-full max-w-md md:flex-none">
          <div className="rounded-3xl border border-white/20 bg-white/92 p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="bg-primary relative size-11 overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={siteConfig.logoPath}
                  alt=""
                  fill
                  className="object-contain p-1.5"
                  sizes="44px"
                  priority
                />
              </div>
              <div>
                <p className="font-heading text-primary text-lg font-bold tracking-tight">
                  Connexion admin
                </p>
                <p className="text-muted-foreground text-sm">
                  E-mail et mot de passe
                </p>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="bg-muted/60 h-48 animate-pulse rounded-2xl" />
              }
            >
              <AdminLoginForm />
            </Suspense>
          </div>
          <p className="mt-4 text-center text-xs text-white/45">
            Accès confidentiel - {siteConfig.legalName}
          </p>
        </section>
      </div>
    </main>
  );
}
