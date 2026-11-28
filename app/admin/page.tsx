import Link from "next/link";
import {
  FolderTreeIcon,
  InboxIcon,
  LayoutDashboardIcon,
  ArrowRightIcon,
} from "lucide-react";

import { getAdminSession } from "@/lib/admin/session";

const nextSteps = [
  {
    href: "/admin/catalogue",
    title: "Catalogue",
    body: "Familles, sous-familles, produits - CRUD et déplacement de références.",
    icon: FolderTreeIcon,
    status: "Prochaine étape",
  },
  {
    href: "/admin/demandes",
    title: "Demandes",
    body: "Inbox devis : statut, filtres, suivi commercial.",
    icon: InboxIcon,
    status: "À venir",
  },
] as const;

export default async function AdminHomePage() {
  const session = await getAdminSession();

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1b3a57_0%,#243f5c_48%,#163049_100%)] p-8 text-white shadow-lg sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 right-0 size-64 rounded-full bg-[radial-gradient(circle,rgba(232,114,12,0.35),transparent_70%)]"
        />
        <div className="relative">
          <p className="font-heading text-[0.7rem] font-bold tracking-[0.22em] text-white/60 uppercase">
            Dashboard
          </p>
          <h1 className="font-heading mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Bienvenue
            {session?.email ? (
              <span className="text-white/70">, {session.email.split("@")[0]}</span>
            ) : null}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Étape 1 terminée : authentification opérationnelle. Les diagrammes
            animés et les modules métier arrivent aux étapes suivantes.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-sm">
            <LayoutDashboardIcon className="size-3.5" />
            Session {session?.role ?? "admin"} active
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {nextSteps.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group border-border/80 rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="bg-primary/8 text-primary rounded-xl p-2.5">
                <item.icon className="size-5" />
              </div>
              <span className="text-muted-foreground rounded-full bg-[#f0f3f6] px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide uppercase">
                {item.status}
              </span>
            </div>
            <h2 className="font-heading text-primary mt-5 text-xl font-bold tracking-tight">
              {item.title}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              {item.body}
            </p>
            <p className="text-cta mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
              Continuer
              <ArrowRightIcon className="size-4 transition group-hover:translate-x-0.5" />
            </p>
          </Link>
        ))}
      </section>
    </div>
  );
}
