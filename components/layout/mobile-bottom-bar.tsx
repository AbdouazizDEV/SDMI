"use client";

import { useTranslations } from "next-intl";

import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export function MobileBottomBar() {
  const t = useTranslations("Layout");

  return (
    <div
      className="border-border fixed inset-x-0 bottom-0 z-40 border-t bg-card p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label={t("mobileActionsLabel")}
    >
      <Link
        href="/devis"
        className={buttonVariants({
          className:
            "bg-cta text-cta-foreground hover:bg-cta/90 h-11 w-full rounded-sm font-semibold",
        })}
      >
        {t("quoteCta")}
      </Link>
    </div>
  );
}
