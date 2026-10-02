import { getTranslations } from "next-intl/server";

import {
  HomeClientsMarquee,
  type HomeClientMarqueeLogo,
} from "@/components/features/home/home-clients-marquee";
import { SectionHeading } from "@/components/features/home/section-heading";
import { SectionShell } from "@/components/patterns/section-shell";
import type { HomeClientLogo } from "@/lib/home/get-home-page-data";
import { getStoragePublicUrl } from "@/lib/storage/public-url";

type HomeClientsSectionProps = {
  clientLogos: HomeClientLogo[];
};

function resolveLogoSrc(logoStoragePath: string): string | null {
  if (logoStoragePath.startsWith("/")) {
    return logoStoragePath;
  }
  return getStoragePublicUrl(logoStoragePath);
}

export async function HomeClientsSection({
  clientLogos,
}: HomeClientsSectionProps) {
  const t = await getTranslations("Home");

  const logos: HomeClientMarqueeLogo[] = clientLogos.flatMap((client) => {
    const src = resolveLogoSrc(client.logoStoragePath);
    return src ? [{ name: client.name, src }] : [];
  });

  if (logos.length === 0) {
    return null;
  }

  return (
    <SectionShell
      variant="muted"
      labelledBy="home-clients-heading"
      innerClassName="max-w-none px-0 lg:px-0"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading
          id="home-clients-heading"
          title={t("clients.title")}
          description={t("clients.description") || undefined}
          className="mb-6 md:mb-8"
        />
      </div>

      <HomeClientsMarquee logos={logos} durationSeconds={52} />
    </SectionShell>
  );
}
