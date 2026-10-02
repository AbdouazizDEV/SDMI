import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import type { ContactPhoneChannel } from "@/types/contact";
import { cn } from "@/lib/utils";

export type SiteUtilityBarProps = {
  hoursLabel: string;
  locationLabel: string;
  phone: ContactPhoneChannel;
  phoneSrLabel: string;
  className?: string;
};

/** Barre utilitaire Lovable : horaires, lieu, téléphone, langues (SRP). */
export function SiteUtilityBar({
  hoursLabel,
  locationLabel,
  phone,
  phoneSrLabel,
  className,
}: SiteUtilityBarProps) {
  return (
    <div
      className={cn(
        "bg-primary text-primary-foreground border-primary-foreground/10 border-b text-xs lg:text-sm",
        className,
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
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
