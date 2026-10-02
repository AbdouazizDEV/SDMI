import { ArrowUpRightIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type MediaLinkCardProps = {
  href: string;
  title: string;
  description?: string | null;
  media: React.ReactNode;
  footer?: React.ReactNode;
  footerLinkLabel?: string;
  titleClassName?: string;
  className?: string;
  variant?: "default" | "modern";
};

/** Carte catalogue / secteur — présentation uniquement ; le parent fournit les médias (SRP + DIP). */
export function MediaLinkCard({
  href,
  title,
  description,
  media,
  footer,
  footerLinkLabel,
  titleClassName,
  className,
  variant = "modern",
}: MediaLinkCardProps) {
  const isModern = variant === "modern";

  return (
    <Link
      href={href}
      className={cn(
        "sdmi-surface-card group flex h-full flex-col overflow-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        isModern && "sdmi-surface-card-accent",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        {media}
        {isModern ? <div className="sdmi-media-card-overlay" aria-hidden /> : null}
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3
          className={cn(
            "font-heading text-primary group-hover:text-cta font-bold uppercase transition-colors",
            isModern ? "text-sm leading-snug tracking-tight md:text-base" : "text-lg",
            titleClassName,
          )}
        >
          {title}
        </h3>
        {description ? (
          <p className="text-muted-foreground mt-1.5 line-clamp-2 text-sm leading-relaxed">
            {description}
          </p>
        ) : null}
        {footer || footerLinkLabel ? (
          <div
            className={cn(
              "mt-auto flex items-end gap-2 pt-4",
              footer ? "justify-between" : "justify-end",
            )}
          >
            {footer ? (
              <div className="text-muted-foreground min-w-0 text-sm">{footer}</div>
            ) : null}
            {footerLinkLabel ? (
              <span className="text-cta inline-flex shrink-0 items-center gap-0.5 text-xs font-bold tracking-wide uppercase transition-transform duration-300 group-hover:translate-x-0.5">
                {footerLinkLabel}
                <ArrowUpRightIcon aria-hidden className="size-3.5" />
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </Link>
  );
}
