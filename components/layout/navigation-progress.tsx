"use client";

import { usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";

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
      if (nextPath === pathname || nextPath === `${pathname}/`) {
        return;
      }
      setActive(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  if (!active) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-primary-foreground/10"
      role="progressbar"
      aria-label="Chargement"
    >
      <div className="bg-cta sdmi-nav-progress h-full w-1/3" />
    </div>
  );
}
