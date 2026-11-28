"use client";

import { useState } from "react";
import {
  ArrowRightIcon,
  BoxIcon,
  CogIcon,
  LayersIcon,
  SquareStackIcon,
  XIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";
import { offerShowcaseItems } from "@/lib/catalog/offer-showcase";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  GasketIcon,
  PipeIcon,
  ScrewIcon,
  ValveIcon,
} from "@/components/layout/offer-showcase-icons";

const ICONS = {
  robinetterie: ValveIcon,
  tuyauterie: PipeIcon,
  visserie: ScrewIcon,
  quincaillerie: BoxIcon,
  profiles: SquareStackIcon,
  etancheite: GasketIcon,
  transmission: CogIcon,
} as const;

export function OfferShowcaseDrawer() {
  const t = useTranslations("Layout.offerShowcase");
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(
          "sdmi-offer-fab group fixed z-50 flex items-center justify-center",
          "right-0 top-1/2 -translate-y-1/2",
          "focus-visible:ring-ring outline-none focus-visible:ring-2",
        )}
        aria-label={t("openLabel")}
      >
        <span
          className="sdmi-offer-fab-pulse pointer-events-none absolute inset-y-3 -left-1 w-3 rounded-full bg-cta/45 blur-md"
          aria-hidden
        />
        <span
          className={cn(
            "relative flex flex-col items-center gap-2.5 rounded-l-2xl border border-r-0 border-white/15",
            "bg-primary px-2.5 py-4 text-primary-foreground shadow-[0_18px_40px_-16px_rgba(15,36,56,0.85)]",
            "transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-hover:bg-[color-mix(in_srgb,var(--primary)_92%,black)]",
          )}
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-cta text-cta-foreground shadow-md">
            <LayersIcon aria-hidden className="size-5" />
          </span>
          <span
            className="font-heading text-[0.65rem] font-bold tracking-[0.22em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {t("fabLabel")}
          </span>
        </span>
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        closeLabel={t("closeLabel")}
        overlayClassName="bg-black/50 duration-400 supports-backdrop-filter:backdrop-blur-sm"
        className={cn(
          "sdmi-offer-drawer border-0 p-0 sm:max-w-md",
          "bg-transparent shadow-none",
          "data-[side=right]:w-[min(100vw,26rem)]",
          "data-[side=right]:data-starting-style:translate-x-full",
          "data-[side=right]:data-ending-style:translate-x-full",
          "data-starting-style:opacity-100 data-ending-style:opacity-100",
          "duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
      >
        <div className="relative flex h-full flex-col overflow-hidden bg-[linear-gradient(165deg,#0f2438_0%,#1b3a57_48%,#152a3f_100%)] text-white shadow-[-24px_0_60px_-28px_rgba(0,0,0,0.55)]">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-[radial-gradient(circle,rgba(232,114,12,0.35),transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 size-64 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-3xl"
          />
          <div
            aria-hidden
            className="sdmi-offer-drawer-grid pointer-events-none absolute inset-0 opacity-[0.14]"
          />

          <SheetHeader className="relative z-10 gap-3 border-b border-white/10 p-6 pb-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-heading text-[0.7rem] font-bold tracking-[0.28em] text-white/55 uppercase">
                  {t("eyebrow")}
                </p>
                <SheetTitle className="font-heading mt-2 text-3xl font-bold tracking-tight text-white uppercase">
                  {t("title")}
                </SheetTitle>
                <SheetDescription className="sr-only">
                  {t("title")}
                </SheetDescription>
              </div>
              <SheetClose
                className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
                aria-label={t("closeLabel")}
              >
                <XIcon className="size-4" />
              </SheetClose>
            </div>
          </SheetHeader>

          <nav
            aria-label={t("navLabel")}
            className="relative z-10 flex-1 overflow-y-auto px-4 py-5 sm:px-5"
          >
            <ul key={open ? "open" : "closed"} className="space-y-2.5">
              {offerShowcaseItems.map((item, index) => {
                const Icon = ICONS[item.id as keyof typeof ICONS] ?? BoxIcon;
                return (
                  <li
                    key={item.id}
                    className="sdmi-offer-drawer-item"
                    style={{ animationDelay: `${90 + index * 60}ms` }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5",
                        "backdrop-blur-sm transition-all duration-300",
                        "hover:-translate-y-0.5 hover:border-cta/40 hover:bg-white/[0.1]",
                        "focus-visible:ring-2 focus-visible:ring-cta focus-visible:outline-none",
                      )}
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cta/15 text-cta ring-1 ring-cta/25 transition-colors group-hover:bg-cta group-hover:text-cta-foreground">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="font-heading flex items-center gap-2 text-base font-bold tracking-tight text-white uppercase">
                          {t(item.titleKey)}
                          <ArrowRightIcon
                            aria-hidden
                            className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          />
                        </span>
                        <span className="mt-1 block text-sm leading-snug text-white/65">
                          {t(item.hintKey)}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative z-10 border-t border-white/10 p-5">
            <Link
              href="/produits"
              onClick={() => setOpen(false)}
              className="bg-cta text-cta-foreground hover:bg-cta/90 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold tracking-wide uppercase shadow-[0_14px_32px_-14px_rgba(232,114,12,0.9)] transition-colors"
            >
              {t("catalogCta")}
              <ArrowRightIcon aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
