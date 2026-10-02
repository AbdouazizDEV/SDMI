"use client";

import { useLinkStatus } from "next/link";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type NavPendingLinkProps = React.ComponentProps<typeof Link> & {
  className?: string;
  children: React.ReactNode;
};

function PendingHint() {
  const { pending } = useLinkStatus();
  if (!pending) {
    return null;
  }
  return (
    <span
      className="bg-cta/30 absolute inset-0 animate-pulse rounded-sm"
      aria-hidden
    />
  );
}

/** Lien menu avec retour visuel immédiat pendant la transition Next.js. */
export function NavPendingLink({
  className,
  children,
  prefetch = true,
  ...props
}: NavPendingLinkProps) {
  return (
    <Link
      prefetch={prefetch}
      className={cn("relative", className, "data-[pending]:opacity-80")}
      {...props}
    >
      <PendingHint />
      <span className="relative z-[1]">{children}</span>
    </Link>
  );
}
