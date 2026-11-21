import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import type { ContactPhoneChannel } from "@/types/contact";
import { cn } from "@/lib/utils";

export type SiteUtilityBarProps = {
  hoursLabel: string;
  locationLabel: string;
  /** Libellé lieu court pour le mobile (optionnel). */
  locationShortLabel?: string;
  phone: ContactPhoneChannel;
  phoneSrLabel: string;
  className?: string;
};

/** Barre utilitaire : horaires, lieu, téléphone, langues. */
export function SiteUtilityBar({
  hoursLabel,
  locationLabel,
  locationShortLabel,
  phone,
  phoneSrLabel,
  className,
}: SiteUtilityBarProps) {
  const shortLocation = locationShortLabel ?? locationLabel;

  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground relative border-b border-primary-foreground/10",
        className,
      )}
    >
      <div
        className="from-cta via-cta/85 to-cta/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r"
        aria-hidden
      />

      {/* Mobile — une seule rangée compacte */}
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-3 py-1.5 sm:hidden">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto text-[10px] leading-none tracking-wide whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <span className="inline-flex items-center gap-1">
            <ClockIcon aria-hidden className="text-cta size-3 shrink-0" />
            <span className="font-medium">{hoursLabel}</span>
          </span>
          <span className="text-primary-foreground/30" aria-hidden>
            ·
          </span>
          <span className="inline-flex max-w-[9.5rem] items-center gap-1">
            <MapPinIcon aria-hidden className="text-cta size-3 shrink-0" />
            <span className="truncate">{shortLocation}</span>
          </span>
          <span className="text-primary-foreground/30" aria-hidden>
            ·
          </span>
          <a
            href={phone.href}
            className="hover:text-cta inline-flex items-center gap-1 font-semibold transition-colors"
          >
            <PhoneIcon aria-hidden className="text-cta size-3 shrink-0" />
            <span>
              <span className="sr-only">{phoneSrLabel}: </span>
              {phone.display}
            </span>
          </a>
        </div>
        <LocaleSwitcher
          variant="topBar"
          className="shrink-0 text-[10px] leading-none"
        />
      </div>

      {/* Tablet / desktop */}
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:flex lg:px-6 lg:text-sm">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon aria-hidden className="text-cta size-3.5 shrink-0" />
            {hoursLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPinIcon aria-hidden className="text-cta size-3.5 shrink-0" />
            {locationLabel}
          </span>
          <a
            href={phone.href}
            className="hover:text-cta inline-flex items-center gap-1.5 font-medium transition-colors"
          >
            <PhoneIcon aria-hidden className="text-cta size-3.5 shrink-0" />
            <span>
              <span className="sr-only">{phoneSrLabel}: </span>
              {phone.display}
            </span>
          </a>
        </div>
        <LocaleSwitcher variant="topBar" />
      </div>
    </div>
  );
}
