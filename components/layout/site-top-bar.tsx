import { getTranslations } from "next-intl/server";

import { SiteUtilityBar } from "@/components/patterns/site-utility-bar";
import { siteConfig } from "@/lib/site";
import { getPrimaryPhoneChannel } from "@/lib/site/contact-view";

export async function SiteTopBar() {
  const t = await getTranslations("Layout.topBar");
  const phone = getPrimaryPhoneChannel();
  const { hours, depotShort, address } = siteConfig.contact;

  return (
    <SiteUtilityBar
      hoursLabel={hours.weekdays}
      locationLabel={`${depotShort} — ${address.line1}`}
      phone={phone}
      phoneSrLabel={t("phoneLabel")}
    />
  );
}
