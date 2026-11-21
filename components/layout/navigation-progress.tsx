"use client";

import { usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function isInternalAppLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#") || anchor.target === "_blank") {
    return false;
  }
  if (href.startsWith("http") && !href.startsWith(window.location.origin)) {
    return false;
  }
  return href.startsWith("/") || href.startsWith(window.location.origin);
}

/** Barre fine dès le clic — feedback avant la fin du chargement RSC. */
export function NavigationProgress() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const anchor = target.closest("a");
      if (!anchor || !isInternalAppLink(anchor)) {
        return;
      }
      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }
      const nextPath = href.replace(window.location.origin, "");
      const pathOnly = nextPath.split("?")[0]?.split("#")[0] ?? nextPath;
      if (pathOnly === pathname || pathOnly === `${pathname}/`) {
        return;
      }
      setActive(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-primary/15",
        "transition-opacity duration-300",
        active ? "opacity-100" : "opacity-0",
      )}
      role="progressbar"
      aria-label="Chargement"
      aria-hidden={!active}
    >
      <div className="from-cta/25 via-cta to-cta/25 sdmi-nav-progress absolute inset-y-0 w-1/3 bg-gradient-to-r" />
    </div>
  );
}
