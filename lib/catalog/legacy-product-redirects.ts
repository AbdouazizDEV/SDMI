import { legacyCatalogNavigation } from "../images/legacy-catalog";

/** Anciens slugs sdmi.sn → taxonomie v1. */
const legacyFamilySlugRedirects: Record<string, string> = {
  robinetterie: "robinetterie-petrole-forgee-moulee",
  "accessoires-tuyauterie": "accessoires",
  "tuyauterie-et-accessoires": "accessoires",
  "filtres-et-clapets": "vannes",
  "vannes-operucle-guillotine": "vannes",
  "mesures-et-comptage": "robinets-tournant-spherique-acier-inox",
  raccords: "accessoires",
};

/** Redirections permanentes depuis l’ancien site `/nos-produits/{famille}/{sous-famille}`. */
const movedTubeSubfamilies = [
  "tubes-acier-carbone",
  "tubes-acier-inoxydable",
  "tubes-carbone-pre-enrobes-3pe",
] as const;

const movedFlangeSubfamilies = [
  "brides-en1092-acier-carbone",
  "collets-forges",
] as const;

export function buildLegacyProductRedirects() {
  const rules: { source: string; destination: string; permanent: boolean }[] = [];

  for (const locale of ["fr", "en"] as const) {
    for (const subfamily of movedFlangeSubfamilies) {
      rules.push({
        source: `/${locale}/produits/accessoires/${subfamily}`,
        destination: `/${locale}/produits/brides/${subfamily}`,
        permanent: true,
      });
      rules.push({
        source: `/${locale}/produits/accessoires/${subfamily}/:path*`,
        destination: `/${locale}/produits/brides/${subfamily}/:path*`,
        permanent: true,
      });
    }
    rules.push({
      source: `/${locale}/produits/accessoires/raccords-a-cames`,
      destination: `/${locale}/produits/raccords-et-fittings/raccords-a-cames`,
      permanent: true,
    });
    rules.push({
      source: `/${locale}/produits/accessoires/raccords-a-cames/:path*`,
      destination: `/${locale}/produits/raccords-et-fittings/raccords-a-cames/:path*`,
      permanent: true,
    });
    for (const subfamily of movedTubeSubfamilies) {
      rules.push({
        source: `/${locale}/produits/tuyauterie-et-accessoires/${subfamily}`,
        destination: `/${locale}/produits/tuyauteries/${subfamily}`,
        permanent: true,
      });
      rules.push({
        source: `/${locale}/produits/tuyauterie-et-accessoires/${subfamily}/:path*`,
        destination: `/${locale}/produits/tuyauteries/${subfamily}/:path*`,
        permanent: true,
      });
    }
    rules.push({
      source: `/${locale}/produits/tuyauterie-et-accessoires/:path*`,
      destination: `/${locale}/produits/accessoires/:path*`,
      permanent: true,
    });
    rules.push({
      source: `/${locale}/produits/vannes-operucle-guillotine/:path*`,
      destination: `/${locale}/produits/vannes/:path*`,
      permanent: true,
    });
  }

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
