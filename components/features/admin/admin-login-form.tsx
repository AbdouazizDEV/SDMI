"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { EyeIcon, EyeOffIcon, Loader2Icon, LockIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { cn } from "cn";

type AdminLoginFormProps = {
  className?: string;
};

export function AdminLoginForm({ className }: AdminLoginFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    startTransition(async () => {
      try {
        const supabase = createSupabaseBrowserClient();
        const { data, error: signInError } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (signInError || !data.user) {
          setError("E-mail ou mot de passe incorrect.");
          return;
        }

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .maybeSingle();

        if (profileError || !profile) {
          await supabase.auth.signOut();
          setError("Profil administrateur introuvable.");
          return;
        }

        if (profile.role !== "admin" && profile.role !== "staff") {
          await supabase.auth.signOut();
          setError("Ce compte n’a pas accès au back-office.");
          return;
        }

        router.replace(nextPath.startsWith("/admin") ? nextPath : "/admin");
        router.refresh();
      } catch {
        setError("Connexion impossible. Vérifiez la configuration Supabase.");
      }
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("space-y-5", className)}
      noValidate
    >
      <div className="space-y-2">
        <label
          htmlFor="admin-email"
          className="font-heading text-primary text-xs font-bold tracking-[0.14em] uppercase"
        >
          E-mail
        </label>
        <div className="relative">
          <MailIcon
            aria-hidden
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          />
          <Input
            id="admin-email"
            name="email"
            type="email"
            autoComplete="username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@sdmi.sn"
            className="h-12 rounded-xl border-white/15 bg-white/80 pr-3 pl-10 text-base shadow-sm backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="admin-password"
          className="font-heading text-primary text-xs font-bold tracking-[0.14em] uppercase"
        >
          Mot de passe
        </label>
        <div className="relative">
          <LockIcon
            aria-hidden
            className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
          />
          <Input
            id="admin-password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="h-12 rounded-xl border-white/15 bg-white/80 pr-11 pl-10 text-base shadow-sm backdrop-blur-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="text-muted-foreground hover:text-foreground absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1.5 transition-colors"
            aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          >
            {showPassword ? (
              <EyeOffIcon className="size-4" />
            ) : (
              <EyeIcon className="size-4" />
            )}
          </button>
        </div>
      </div>

      {error ? (
        <p
          role="alert"
          className="rounded-xl border border-destructive/25 bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        size="lg"
        className="bg-cta text-cta-foreground hover:bg-cta/90 h-12 w-full rounded-xl text-base font-semibold shadow-[0_12px_28px_-12px_rgba(232,114,12,0.85)]"
      >
        {pending ? (
          <>
            <Loader2Icon className="size-4 animate-spin" />
            Connexion…
          </>
        ) : (
          "Se connecter"
        )}
      </Button>
    </form>
  );
}
