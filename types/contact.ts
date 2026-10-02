/** Contrats de présentation contact — séparés de la config site (ISP). */

export type ContactPhoneChannel = {
  kind: "phone";
  href: string;
  display: string;
};

export type ContactEmailChannel = {
  kind: "email";
  href: string;
  display: string;
};

export type ContactAddressView = {
  /** Ligne unique prête à l’affichage (barre haute, encarts compacts). */
  singleLine: string;
};

export type ContactChannelLabels = {
  address: string;
  phone: string;
  email: string;
};
