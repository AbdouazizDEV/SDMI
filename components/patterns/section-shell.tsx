import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: React.ReactNode;
  /** Identifiant pour aria-labelledby sur la section */
  labelledBy?: string;
  ariaLabel?: string;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "muted" | "band";
};

const variantClass: Record<NonNullable<SectionShellProps["variant"]>, string> = {
  default: "py-14 lg:py-20",
  muted: "border-border/80 border-y bg-gradient-to-b from-muted/50 via-muted/30 to-background py-14 lg:py-20",
  band: "bg-muted border-border border-t py-12 lg:py-16",
};

/** Enveloppe de section réutilisable — extension par variant sans modifier les sections (OCP). */
export function SectionShell({
  children,
  labelledBy,
  ariaLabel,
  className,
  innerClassName,
  variant = "default",
}: SectionShellProps) {
  return (
    <section
      className={cn(variantClass[variant], className)}
      aria-labelledby={labelledBy}
      aria-label={ariaLabel}
    >
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-6", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
