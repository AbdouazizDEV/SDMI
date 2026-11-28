import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };
}

/** Vanne / robinet à tournant. */
export function ValveIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 12h4.5" />
      <path d="M15.5 12H20" />
      <rect x="8.5" y="8.5" width="7" height="7" rx="1.2" />
      <path d="M12 8.5V5.5" />
      <circle cx="12" cy="4.2" r="1.4" />
      <path d="M10.2 12h3.6" />
    </svg>
  );
}

/** Tronçon de tuyau à brides. */
export function PipeIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 9.5v5" />
      <path d="M5 8v8" />
      <rect x="5" y="9" width="14" height="6" rx="1" />
      <path d="M19 8v8" />
      <path d="M21 9.5v5" />
      <path d="M8 11v2" />
      <path d="M12 11v2" />
      <path d="M16 11v2" />
    </svg>
  );
}

/** Vis / boulon. */
export function ScrewIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9.2 3.8 12 2.5l2.8 1.3v3.2L12 8.3 9.2 7V3.8Z" />
      <path d="M12 8.3v11.2" />
      <path d="M10.2 11.2h3.6" />
      <path d="M10.2 13.6h3.6" />
      <path d="M10.2 16h3.6" />
      <path d="M10.4 19.5 12 21l1.6-1.5" />
    </svg>
  );
}

/** Joint torique / bague d’étanchéité circulaire. */
export function GasketIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="4.4" />
      <path d="M12 3.8v2.2" />
      <path d="M12 18v2.2" />
      <path d="M3.8 12h2.2" />
      <path d="M18 12h2.2" />
    </svg>
  );
}
