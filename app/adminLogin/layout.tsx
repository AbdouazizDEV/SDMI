import type { Metadata } from "next";

import { fontBody, fontHeading } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Admin Login | ${siteConfig.name}`,
  description: "Connexion sécurisée au back-office SDMI.",
  robots: { index: false, follow: false },
};

type AdminLoginLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLoginLayout({ children }: AdminLoginLayoutProps) {
  return (
    <html lang="fr" className={`${fontBody.variable} ${fontHeading.variable}`}>
      <body className="min-h-screen bg-background text-base text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
