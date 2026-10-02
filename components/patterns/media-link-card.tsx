import { ArrowUpRightIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type MediaLinkCardProps = {
  href?: string;
  disabled?: boolean;
  disabledHint?: string;
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
  disabled = false,
  disabledHint,
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
  const isInteractive = !disabled && Boolean(href);

  const shellClass = cn(
    "sdmi-surface-card flex h-full flex-col overflow-hidden",
    isModern && "sdmi-surface-card-accent",
    isInteractive && "group focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
    disabled && "cursor-not-allowed opacity-55",
    className,
  );

  const body = (
    <>
      <div className="relative overflow-hidden">
        {media}
        {isModern ? <div className="sdmi-media-card-overlay" aria-hidden /> : null}
        {disabled && disabledHint ? (
          <span className="bg-background/95 text-muted-foreground absolute top-3 right-3 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ring-1 ring-border">
            {disabledHint}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3
          className={cn(
            "font-heading text-primary font-bold uppercase",
            isInteractive && "group-hover:text-cta transition-colors",
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
            {footerLinkLabel && isInteractive ? (
              <span className="text-cta inline-flex shrink-0 items-center gap-0.5 text-xs font-bold tracking-wide uppercase transition-transform duration-300 group-hover:translate-x-0.5">
                {footerLinkLabel}
                <ArrowUpRightIcon aria-hidden className="size-3.5" />
              </span>
            ) : disabled && disabledHint ? (
              <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {disabledHint}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );

  if (isInteractive && href) {
    return (
      <Link href={href} className={shellClass}>
        {body}
      </Link>
    );
  }

  return (
    <article className={shellClass} aria-disabled={disabled || undefined}>
      {body}
    </article>
  );
}
