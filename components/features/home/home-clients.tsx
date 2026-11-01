import { getTranslations } from "next-intl/server";

import { ClientsTrustSection } from "@/components/features/company/clients-trust-section";
import type { HomeClientMarqueeLogo } from "@/components/features/home/home-clients-marquee";
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
    return src
      ? [{ name: client.name, src, width: client.width, height: client.height }]
      : [];
  });

  if (logos.length === 0) {
    return null;
  }

  return (
    <ClientsTrustSection
      logos={logos}
      title={t("clients.title")}
      headingId="home-clients-heading"
    />
  );
}
