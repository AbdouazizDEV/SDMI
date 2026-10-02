import { catalogNavigationForShell } from "@/lib/catalog/navigation";

import { MobileBottomBar } from "./mobile-bottom-bar";
import { NavigationProgress } from "./navigation-progress";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SiteTopBar } from "./site-top-bar";
import { WhatsAppFloatingButton } from "./whatsapp-floating-button";

type SiteShellProps = {
  children: React.ReactNode;
};

/** Shell synchrone : pas d’appel Supabase avant l’affichage du menu. */
export function SiteShell({ children }: SiteShellProps) {
  const catalog = catalogNavigationForShell;

  return (
    <>
      <NavigationProgress />
      <div className="sticky top-0 z-40 shadow-md ring-1 ring-black/5">
        <SiteTopBar />
        <SiteHeader catalog={catalog} />
      </div>
      <div className="flex flex-1 flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        {children}
      </div>
      <SiteFooter catalog={catalog} />
      <MobileBottomBar />
      <WhatsAppFloatingButton />
    </>
  );
}
