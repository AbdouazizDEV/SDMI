/** Liens de navigation principale — contrat stable pour le layout (ISP). */

export type SiteNavLinkKey =
  | "home"
  | "products"
  | "sectors"
  | "documentation"
  | "contact";

export type SiteNavLink = {
  href: `/${string}` | "/";
  key: SiteNavLinkKey;
};
