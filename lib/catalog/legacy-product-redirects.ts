import { legacyCatalogNavigation } from "../images/legacy-catalog";

/** Anciens slugs sdmi.sn → taxonomie v1. */
const legacyFamilySlugRedirects: Record<string, string> = {
  robinetterie: "robinetterie-petrole-forgee-moulee",
  "accessoires-tuyauterie": "tuyauterie-et-accessoires",
  "filtres-et-clapets": "vannes-operucle-guillotine",
  "mesures-et-comptage": "robinets-tournant-spherique-acier-inox",
  raccords: "tuyauterie-et-accessoires",
};

/** Redirections permanentes depuis l’ancien site `/nos-produits/{famille}/{sous-famille}`. */
export function buildLegacyProductRedirects() {
  const rules: { source: string; destination: string; permanent: boolean }[] = [];

  for (const [from, to] of Object.entries(legacyFamilySlugRedirects)) {
    rules.push({
      source: `/fr/produits/${from}`,
      destination: `/fr/produits/${to}`,
      permanent: true,
    });
    rules.push({
      source: `/en/produits/${from}`,
      destination: `/en/produits/${to}`,
      permanent: true,
    });
    rules.push({
      source: `/produits/${from}`,
      destination: `/fr/produits/${to}`,
      permanent: true,
    });
  }

  legacyCatalogNavigation.families.forEach((family, familyIndex) => {
    const familyNum = familyIndex + 1;
    rules.push({
      source: `/nos-produits/${familyNum}`,
      destination: `/fr/produits/${family.slug}`,
      permanent: true,
    });

    family.subfamilies.forEach((subfamily, subIndex) => {
      const subNum = subIndex + 1;
      rules.push({
        source: `/nos-produits/${familyNum}/${subNum}`,
        destination: `/fr/produits/${family.slug}/${subfamily.slug}`,
        permanent: true,
      });
    });
  });

  return rules;
}
