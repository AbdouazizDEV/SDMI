"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/lib/site";

const WHATSAPP_ICON = "/images/whatsapp-icon-isolated-no-background-free-png.webp";

export function WhatsAppFloatingButton() {
  const t = useTranslations("Layout");

  return (
    <a
      href={siteConfig.contact.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsappLabel")}
      className="bg-whatsapp fixed right-4 z-50 flex size-14 items-center justify-center rounded-full shadow-lg ring-2 ring-white/90 transition-transform hover:scale-105 hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none bottom-[calc(5.25rem+env(safe-area-inset-bottom))] lg:bottom-6"
    >
      <Image
        src={WHATSAPP_ICON}
        alt=""
        width={36}
        height={36}
        className="size-9 object-contain"
      />
    </a>
  );
}
