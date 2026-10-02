import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import type {
  ContactAddressView,
  ContactChannelLabels,
  ContactEmailChannel,
  ContactPhoneChannel,
} from "@/types/contact";
import { cn } from "@/lib/utils";

export type ContactTopBarProps = {
  address: ContactAddressView;
  phone: ContactPhoneChannel;
  email: ContactEmailChannel;
  labels: ContactChannelLabels;
  className?: string;
};

/** Barre contact haute — une seule responsabilité : afficher adresse + canaux (SRP). */
export function ContactTopBar({
  address,
  phone,
  email,
  labels,
  className,
}: ContactTopBarProps) {
  return (
    <div
      className={cn(
        "relative border-b border-white/10 bg-[#2b2d2f] text-white",
        className,
      )}
    >
      <div
        className="from-cta via-cta/90 to-cta/60 absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r"
        aria-hidden
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 text-xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-1 lg:px-6 lg:text-sm">
        <p className="inline-flex items-start gap-2 sm:max-w-[55%]">
          <MapPinIcon
            aria-hidden
            className="text-cta mt-0.5 size-3.5 shrink-0 sm:size-4"
          />
          <span>
            <span className="sr-only">{labels.address}: </span>
            {address.singleLine}
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end">
          <ContactChannelLink
            channel={phone}
            label={labels.phone}
            icon={PhoneIcon}
          />
          <span
            className="hidden h-3.5 w-px bg-white/25 sm:inline"
            aria-hidden
          />
          <ContactChannelLink
            channel={email}
            label={labels.email}
            icon={MailIcon}
          />
        </div>
      </div>
    </div>
  );
}

type ContactChannelLinkProps = {
  channel: ContactPhoneChannel | ContactEmailChannel;
  label: string;
  icon: typeof PhoneIcon;
};

function ContactChannelLink({
  channel,
  label,
  icon: Icon,
}: ContactChannelLinkProps) {
  return (
    <a
      href={channel.href}
      className="hover:text-cta inline-flex items-center gap-1.5 font-medium transition-colors"
    >
      <Icon aria-hidden className="text-cta size-3.5 sm:size-4" />
      <span>
        <span className="sr-only">{label}: </span>
        {channel.display}
      </span>
    </a>
  );
}
