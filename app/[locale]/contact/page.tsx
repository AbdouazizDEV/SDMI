import { ContactAgencyPage } from "@/components/features/contact/contact-agency-page";
import { setRequestLocale } from "next-intl/server";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactAgencyPage />;
}
