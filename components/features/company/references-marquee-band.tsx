import { getTranslations } from "next-intl/server";

import {
  HomeClientsMarquee,
  type HomeClientMarqueeLogo,
} from "@/components/features/home/home-clients-marquee";
import { SectionHeading } from "@/components/features/home/section-heading";
import { legacyPartnerLogos } from "@/lib/images/legacy-partner-logos";

type ReferencesMarqueeBandProps = {
  titleNamespace?: string;
  titleKey?: string;
};

export async function ReferencesMarqueeBand({
  titleNamespace = "About",
  titleKey = "referencesTitle",
}: ReferencesMarqueeBandProps) {
  const t = await getTranslations(titleNamespace);

  const logos: HomeClientMarqueeLogo[] = legacyPartnerLogos.map((logo) => ({
    name: logo.name,
    src: logo.path,
  }));

  return (
    <section
      className="border-border/80 -mx-4 border-y bg-gradient-to-b from-background via-muted/20 to-background py-10 lg:-mx-6 lg:py-12"
      aria-labelledby="references-marquee-heading"
    >
      <div className="mx-auto mb-6 max-w-7xl px-4 lg:mb-8 lg:px-6">
        <SectionHeading id="references-marquee-heading" title={t(titleKey)} className="mb-0" />
      </div>
      <HomeClientsMarquee logos={logos} durationSeconds={46} variant="references" />
    </section>
  );
}
