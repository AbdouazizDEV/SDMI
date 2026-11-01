import { getTranslations } from "next-intl/server";

import { ClientsTrustSection } from "@/components/features/company/clients-trust-section";
import type { HomeClientMarqueeLogo } from "@/components/features/home/home-clients-marquee";
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
    width: client.width,
    height: client.height,
  }));

  return (
    <ClientsTrustSection
      logos={logos}
      title={t(titleKey)}
      headingId="clients-marquee-heading"
      showHeading={showHeading}
    />
  );
}
