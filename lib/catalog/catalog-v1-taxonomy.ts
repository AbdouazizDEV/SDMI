import type { LocalizedText } from "../../types/localized";
import type { CatalogNavigation } from "./navigation-types";

function frEn(fr: string, en: string): LocalizedText {
  return { fr, en };
}

/**
 * Taxonomie livraison 1 — squelette catalogue SDMI.
 * Référence structurelle : Sferaco (sans reprise de contenu propriétaire).
 */
export const catalogV1Navigation: CatalogNavigation = {
  families: [
    {
      slug: "robinetterie-petrole-forgee-moulee",
      name: frEn(
        "Robinetterie pétrole forgée – moulée",
        "Forged & cast petroleum valves",
      ),
      subfamilies: [
        {
          slug: "vannes-operucle-petrole-forge-moule",
          name: frEn(
            "Vannes à opercule pétrole forgé – moulé",
            "Forged & cast petroleum gate valves",
          ),
        },
        {
          slug: "robinets-petrole-soufflet-soupapes-forge-moule",
          name: frEn(
            "Robinets pétrole à soufflet et à soupapes forgé – moulé",
            "Forged & cast petroleum bellows & globe valves",
          ),
        },
        {
          slug: "robinets-pointeau-petrole-forge-moule",
          name: frEn(
            "Robinets à pointeau pétrole forgé – moulé",
            "Forged & cast petroleum needle valves",
          ),
        },
        {
          slug: "filtres-petrole-forge-moule",
          name: frEn(
            "Filtres pétrole forgé – moulé",
            "Forged & cast petroleum strainers",
          ),
        },
        {
          slug: "clapets-petrole-forge-moule",
          name: frEn(
            "Clapets pétrole forgé – moulé",
            "Forged & cast petroleum check valves",
          ),
        },
      ],
    },
    {
      slug: "tuyauterie-et-accessoires",
      name: frEn("Tuyauterie et accessoires", "Piping & accessories"),
      subfamilies: [],
    },
    {
      slug: "vannes-operucle-guillotine",
      name: frEn(
        "Vannes à opercule – vannes à guillotine",
        "Gate & knife gate valves",
      ),
      subfamilies: [],
    },
    {
      slug: "robinets-papillon",
      name: frEn("Robinets à papillon", "Butterfly valves"),
      subfamilies: [],
    },
    {
      slug: "robinets-tournant-spherique-acier-inox",
      name: frEn(
        "Robinets à tournant sphérique acier – inox",
        "Steel & stainless ball valves",
      ),
      subfamilies: [],
    },
    {
      slug: "vannes-sphere-laiton-fonte-pvc",
      name: frEn(
        "Vannes à sphère laiton – fonte – PVC",
        "Brass, cast iron & PVC ball valves",
      ),
      subfamilies: [],
    },
  ],
  sectors: [
    {
      slug: "circuit-eau-petrole-gaz",
      name: frEn("Circuit eau Pétrole et gaz", "Water circuits Oil & gas"),
    },
    {
      slug: "robinetterie-industrielle",
      name: frEn("Robinetterie industrielle", "Industrial valves"),
    },
    {
      slug: "industrie-agro-alimentaire",
      name: frEn("Industrie Agro-alimentaire", "Food processing industry"),
    },
    {
      slug: "tuyauterie-materiels-incendie",
      name: frEn("Tuyauterie et matériels incendie", "Piping & fire equipment"),
    },
  ],
};

export const catalogV1FamilySlugs = catalogV1Navigation.families.map(
  (family) => family.slug,
);
