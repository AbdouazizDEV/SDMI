import { getTranslations } from "next-intl/server";

import {
  HomeClientsMarquee,
  type HomeClientMarqueeLogo,
} from "@/components/features/home/home-clients-marquee";
import { SectionHeading } from "@/components/features/home/section-heading";
import { legacyClientLogos } from "@/lib/images/legacy-client-logos";

type ClientsMarqueeBandProps = {
  titleNamespace?: string;
  titleKey?: string;
  showHeading?: boolean;
};

export async function ClientsMarqueeBand({
  titleNamespace = "Home",
  titleKey = "clients.title",
  showHeading = true,
}: ClientsMarqueeBandProps) {
  const t = await getTranslations(titleNamespace);

  const logos: HomeClientMarqueeLogo[] = legacyClientLogos.map((client) => ({
    name: client.name,
    src: client.path,
  }));

  return (
    <section
      className="border-border/80 -mx-4 border-y bg-gradient-to-b from-muted/50 via-muted/30 to-background py-10 lg:-mx-6 lg:py-12"
      aria-labelledby={showHeading ? "clients-marquee-heading" : undefined}
    >
      {showHeading ? (
        <div className="mx-auto mb-6 max-w-7xl px-4 lg:mb-8 lg:px-6">
          <SectionHeading
            id="clients-marquee-heading"
            title={t(titleKey)}
            className="mb-0"
          />
        </div>
      ) : null}
      <HomeClientsMarquee logos={logos} durationSeconds={52} />
    </section>
  );
}
