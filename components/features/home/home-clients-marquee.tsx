"use client";

import Image from "next/image";

export type HomeClientMarqueeLogo = {
  name: string;
  src: string;
  width?: number;
  height?: number;
};

type HomeClientsMarqueeProps = {
  logos: HomeClientMarqueeLogo[];
  /** Durée d’un cycle complet (deux groupes identiques) */
  durationSeconds?: number;
  variant?: "default" | "references";
  direction?: "forward" | "reverse";
  fade?: "page" | "mask";
};

/** Répète la liste pour qu’un groupe dépasse largement la largeur d’écran. */
function expandLogosForMarquee(
  logos: HomeClientMarqueeLogo[],
  minCount = 18,
): HomeClientMarqueeLogo[] {
  if (logos.length === 0) return logos;
  const out: HomeClientMarqueeLogo[] = [];
  while (out.length < minCount) {
    out.push(...logos);
  }
  return out;
}

function LogoSlide({
  name,
  src,
  width,
  height,
  variant = "default",
  floatDelay = 0,
}: HomeClientMarqueeLogo & {
  variant?: "default" | "references";
  floatDelay?: number;
}) {
  const isRef = variant === "references";
  const ratio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div
      className={
        isRef
          ? "flex h-28 w-[min(260px,44vw)] shrink-0 items-center justify-center px-4 md:h-36 md:w-[min(320px,38vw)] md:px-6"
          : "sdmi-client-logo-float flex h-9 shrink-0 items-stretch md:h-10 lg:h-12"
      }
      style={isRef ? undefined : { animationDelay: `${floatDelay}s` }}
    >
      <div
        className={
          isRef
            ? "flex size-full items-center justify-center rounded-2xl bg-white px-8 py-5 shadow-sm ring-1 ring-border/60"
            : "relative h-full overflow-hidden rounded-lg bg-white shadow-[0_10px_24px_-16px_rgba(0,0,0,0.7)] ring-1 ring-white/80 transition duration-500 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_14px_28px_-14px_rgba(0,0,0,0.5)]"
        }
        style={isRef || !ratio ? undefined : { aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={name}
          {...(isRef ? { width: 320, height: 120 } : { fill: true })}
          loading="lazy"
          className={
            isRef
              ? "max-h-14 w-auto max-w-full object-contain md:max-h-20 lg:max-h-24"
              : "object-cover"
          }
          sizes={
            isRef ? "(max-width: 768px) 42vw, 280px" : "(max-width: 768px) 40vw, 220px"
          }
        />
      </div>
    </div>
  );
}

function MarqueeGroup({
  logos,
  ariaHidden,
  variant,
}: {
  logos: HomeClientMarqueeLogo[];
  ariaHidden?: boolean;
  variant: "default" | "references";
}) {
  return (
    <ul
      className={
        variant === "references"
          ? "flex shrink-0 items-center"
          : "flex shrink-0 items-center gap-5 pr-5 md:gap-7 md:pr-7 lg:gap-8 lg:pr-8"
      }
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo, index) => (
        <li key={`${logo.src}-${index}`} className="shrink-0">
          <LogoSlide {...logo} variant={variant} floatDelay={(index % 8) * 0.35} />
        </li>
      ))}
    </ul>
  );
}

export function HomeClientsMarquee({
  logos,
  durationSeconds = 48,
  variant = "default",
  direction = "forward",
  fade = "page",
}: HomeClientsMarqueeProps) {
  if (logos.length === 0) {
    return null;
  }

  const sequence =
    variant === "default" ? expandLogosForMarquee(logos) : logos;

  const style = {
    ["--sdmi-clients-marquee-duration" as string]: `${durationSeconds}s`,
  } satisfies React.CSSProperties;

  return (
    <div
      className={
        fade === "mask"
          ? "sdmi-clients-marquee sdmi-clients-marquee-mask relative overflow-hidden py-3 md:py-4"
          : "sdmi-clients-marquee relative overflow-hidden py-3 md:py-5"
      }
      style={style}
    >
      {fade === "page" ? (
        <>
          <div
            className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent md:w-24"
            aria-hidden
          />
          <div
            className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent md:w-24"
            aria-hidden
          />
        </>
      ) : null}

      <div
        className={
          direction === "reverse"
            ? "sdmi-clients-marquee-track sdmi-clients-marquee-track-reverse flex w-max"
            : "sdmi-clients-marquee-track flex w-max"
        }
      >
        <MarqueeGroup logos={sequence} variant={variant} />
        <MarqueeGroup logos={sequence} ariaHidden variant={variant} />
      </div>

      <ul className="sr-only">
        {logos.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>
    </div>
  );
}
