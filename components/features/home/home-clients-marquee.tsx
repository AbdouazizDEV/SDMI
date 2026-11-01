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
          : "sdmi-client-logo-float flex h-32 shrink-0 items-stretch px-2 md:h-40 lg:h-44"
      }
      style={isRef ? undefined : { animationDelay: `${floatDelay}s` }}
    >
      <div
        className={
          isRef
            ? "flex size-full items-center justify-center rounded-2xl bg-white px-8 py-5 shadow-sm ring-1 ring-border/60"
            : "relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.75)] ring-1 ring-white/80 transition duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.55)]"
        }
        style={isRef || !ratio ? undefined : { aspectRatio: ratio }}
      >
        <Image
          src={src}
          alt={name}
          {...(isRef
            ? { width: 320, height: 120 }
            : { fill: true })}
          loading="lazy"
          className={
            isRef
              ? "max-h-14 w-auto max-w-full object-contain md:max-h-20 lg:max-h-24"
              : "object-cover"
          }
          sizes={isRef ? "(max-width: 768px) 42vw, 280px" : "(max-width: 768px) 92vw, 900px"}
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
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {logos.map((logo, index) => (
        <li key={`${logo.src}-${index}`}>
          <LogoSlide {...logo} variant={variant} floatDelay={index * 0.35} />
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

  const style = {
    ["--sdmi-clients-marquee-duration" as string]: `${durationSeconds}s`,
  } satisfies React.CSSProperties;

  return (
    <div
      className={
        fade === "mask"
          ? "sdmi-clients-marquee sdmi-clients-marquee-mask relative overflow-hidden py-2 md:py-3"
          : "sdmi-clients-marquee relative overflow-hidden py-2 md:py-4"
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
        <MarqueeGroup logos={logos} variant={variant} />
        <MarqueeGroup logos={logos} ariaHidden variant={variant} />
      </div>

      <ul className="sr-only">
        {logos.map((logo) => (
          <li key={logo.name}>{logo.name}</li>
        ))}
      </ul>
    </div>
  );
}
