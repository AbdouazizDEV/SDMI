import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/** Partie gauche du SVG officiel (picto + sigle SDMI), avant le libellé blanc. */
const LOGO_MARK_WIDTH_UNITS = 178;
const LOGO_SVG_WIDTH_UNITS = 405.1;
const LOGO_SVG_HEIGHT_UNITS = 49;

type SiteLogoProps = {
  label: string;
  taglineLine1: string;
  taglineLine2: string;
  className?: string;
  /** `header` : barre claire ; `onPrimary` : barre bleue (texte clair). */
  variant?: "header" | "onPrimary" | "compact";
};

function markDimensions(variant: SiteLogoProps["variant"]) {
  const height = variant === "compact" ? 40 : 56;
  const markWidth = Math.round(
    height * (LOGO_MARK_WIDTH_UNITS / LOGO_SVG_HEIGHT_UNITS),
  );
  const imageWidth = Math.round(
    height * (LOGO_SVG_WIDTH_UNITS / LOGO_SVG_HEIGHT_UNITS),
  );
  return { height, markWidth, imageWidth };
}

export function SiteLogo({
  label,
  taglineLine1,
  taglineLine2,
  className,
  variant = "header",
}: SiteLogoProps) {
  const isCompact = variant === "compact";
  const onPrimary = variant === "onPrimary";
  const { height, markWidth, imageWidth } = markDimensions(variant);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 items-center gap-3 lg:gap-3.5",
        isCompact ? "max-w-[11rem]" : "max-w-[min(100%,26rem)]",
        className,
      )}
      aria-label={label}
    >
      <span
        className="relative block shrink-0 overflow-hidden"
        style={{ width: markWidth, height }}
        aria-hidden
      >
        <Image
          src="/images/sdmi-logo.svg"
          alt=""
          width={Math.round(LOGO_SVG_WIDTH_UNITS)}
          height={Math.round(LOGO_SVG_HEIGHT_UNITS)}
          priority={!isCompact}
          className="max-w-none object-left object-cover"
          style={{
            height,
            width: imageWidth,
          }}
        />
      </span>
      {!isCompact ? (
        <span
          className={cn(
            "hidden min-w-0 flex-col leading-snug sm:flex",
            onPrimary ? "text-primary-foreground" : "text-primary",
          )}
        >
          <span className="text-xs font-semibold tracking-wide md:text-[13px]">
            {taglineLine1}
          </span>
          <span className="text-xs font-semibold tracking-wide md:text-[13px]">
            {taglineLine2}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
