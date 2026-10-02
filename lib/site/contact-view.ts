import { siteConfig } from "@/lib/site";
import type {
  ContactAddressView,
  ContactEmailChannel,
  ContactPhoneChannel,
} from "@/types/contact";

/** Adaptateur config → vue UI (DIP : les composants dépendent de ces types, pas de siteConfig). */

export function getPrimaryPhoneChannel(): ContactPhoneChannel {
  const phone = siteConfig.contact.phones[0];
  return {
    kind: "phone",
    href: phone.href,
    display: phone.display,
  };
}

export function getEmailChannel(): ContactEmailChannel {
  const { email } = siteConfig.contact;
  return {
    kind: "email",
    href: `mailto:${email}`,
    display: email,
  };
}

export function getAddressSingleLine(): ContactAddressView {
  const { line1, city, line2 } = siteConfig.contact.address;
  return {
    singleLine: `${line1}, ${city}, ${line2}`,
  };
}

export type TopBarContactView = {
  address: ContactAddressView;
  phone: ContactPhoneChannel;
  email: ContactEmailChannel;
};

export function getTopBarContactView(): TopBarContactView {
  return {
    address: getAddressSingleLine(),
    phone: getPrimaryPhoneChannel(),
    email: getEmailChannel(),
  };
}
