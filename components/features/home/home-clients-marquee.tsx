"use client";

import Image from "next/image";

export type HomeClientMarqueeLogo = {
  name: string;
  src: string;
};

type HomeClientsMarqueeProps = {
  logos: HomeClientMarqueeLogo[];
  /** Durée d’un cycle complet (deux groupes identiques) */
  durationSeconds?: number;
  variant?: "default" | "references";
};

function LogoSlide({
  name,
  src,
  variant = "default",
}: HomeClientMarqueeLogo & { variant?: "default" | "references" }) {
  const isRef = variant === "references";

  return (
    <div
      className={
        isRef
          ? "flex h-28 w-[min(260px,44vw)] shrink-0 items-center justify-center px-4 md:h-36 md:w-[min(320px,38vw)] md:px-6"
          : "flex h-24 w-[min(220px,42vw)] shrink-0 items-center justify-center px-6 md:h-32 md:w-[min(280px,36vw)] md:px-8 lg:h-36 lg:w-[min(320px,28vw)]"
      }
    >
      <div
        className={
          isRef
            ? "flex size-full items-center justify-center rounded-2xl bg-white px-8 py-5 shadow-sm ring-1 ring-border/60"
            : "flex size-full items-center justify-center"
        }
      >
        <Image
          src={src}
          alt={name}
          width={320}
          height={120}
          loading="lazy"
          className={
            isRef
              ? "max-h-14 w-auto max-w-full object-contain md:max-h-20 lg:max-h-24"
              : "max-h-16 w-auto max-w-full object-contain opacity-90 transition duration-300 hover:opacity-100 md:max-h-24 lg:max-h-28"
          }
          sizes="(max-width: 768px) 42vw, 280px"
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
          <LogoSlide {...logo} variant={variant} />
        </li>
      ))}
    </ul>
  );
}

export function HomeClientsMarquee({
  logos,
  durationSeconds = 48,
  variant = "default",
}: HomeClientsMarqueeProps) {
  if (logos.length === 0) {
    return null;
  }

  const style = {
    ["--sdmi-clients-marquee-duration" as string]: `${durationSeconds}s`,
  } satisfies React.CSSProperties;

  return (
    <div
      className="sdmi-clients-marquee relative overflow-hidden py-2 md:py-4"
      style={style}
    >
      <div
        className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent md:w-24"
        aria-hidden
      />

      <div className="sdmi-clients-marquee-track flex w-max">
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
