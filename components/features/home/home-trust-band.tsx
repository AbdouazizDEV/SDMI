import { getTranslations } from "next-intl/server";

import { HomeIcon } from "@/components/features/home/home-icon";
import type { HomeTrustIndicator } from "@/lib/home/get-home-page-data";

type HomeTrustBandProps = {
  indicators: HomeTrustIndicator[];
};

export async function HomeTrustBand({ indicators }: HomeTrustBandProps) {
  const t = await getTranslations("Home.trust");

  if (indicators.length === 0) {
    return null;
  }

  return (
    <div className="border-border/80 border-b bg-gradient-to-b from-muted/40 to-background">
      <ul className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-3 lg:px-6 lg:py-10">
        {indicators.map((item) => (
          <li key={item.translationKey}>
            <div className="sdmi-trust-tile h-full">
              <div className="bg-cta/10 text-cta flex size-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-cta/20">
                <HomeIcon slug={item.iconSlug} className="size-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading text-primary text-sm font-bold tracking-wide uppercase">
                  {t(`${item.translationKey}.title`)}
                </h3>
                <p className="font-heading text-cta mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                  {item.value}
                </p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {t(`${item.translationKey}.description`)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
