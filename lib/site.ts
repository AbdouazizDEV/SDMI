export const siteConfig = {
  name: "SDMI",
  legalName: "Sénégalaise de distribution de matériels industriels",
  logoPath: "/images/sdmi-logo.svg",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.sdmi.sn",
  locales: ["fr", "en"] as const,
  defaultLocale: "fr" as const,
  contact: {
    hours: {
      weekdays: "Lun–Ven 08h–18h",
      saturday: "Sam 08h30–13h",
    },
    depotShort: "Dakar, Sénégal",
    phones: [
      {
        id: "main",
        href: "tel:+221338248373",
        display: "+221 33 824 83 73",
      },
    ],
    email: "smdi@sdmi.sn",
    whatsapp: {
      href: "https://wa.me/221338248373",
      display: "+221 33 824 83 73",
    },
    address: {
      line1: "Bopp rue 2 x Casamance",
      line2: "BP 3134 RP",
      city: "Dakar, Sénégal",
    },
  },
} as const;

export type SiteLocale = (typeof siteConfig.locales)[number];
