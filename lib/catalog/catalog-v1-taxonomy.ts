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
      subfamilies: [
        {
          slug: "vannes-opercule-monobloc-fermeture-rapide",
          name: frEn(
            "Vannes à opercule monobloc – vannes à fermeture rapide",
            "Monobloc gate valves — quick closing",
          ),
        },
        {
          slug: "vannes-opercule-fonte-brides",
          name: frEn(
            "Vannes à opercule fonte à brides",
            "Cast iron flanged gate valves",
          ),
        },
        {
          slug: "vannes-opercule-acier-inox-moule",
          name: frEn(
            "Vannes à opercule acier moulé – inox moulé",
            "Cast steel & cast stainless gate valves",
          ),
        },
        {
          slug: "vannes-opercule-forge",
          name: frEn(
            "Vannes à opercule forgé",
            "Forged gate valves",
          ),
        },
        {
          slug: "vannes-opercule-caoutchouc-o-gate",
          name: frEn(
            "Vannes à opercule caoutchouc O-GATE",
            "Rubber seated O-GATE gate valves",
          ),
        },
        {
          slug: "vannes-guillotine-s-gate-unidirectionnelles",
          name: frEn(
            "Vannes à guillotine S-GATE unidirectionnelles",
            "S-GATE unidirectional knife gate valves",
          ),
        },
        {
          slug: "vannes-guillotine-s-gate-bidirectionnelles",
          name: frEn(
            "Vannes à guillotine S-GATE bidirectionnelles",
            "S-GATE bidirectional knife gate valves",
          ),
        },
        {
          slug: "vannes-guillotine-s-gate-pelle-traversante",
          name: frEn(
            "Vannes à guillotine S-GATE à pelle traversante",
            "S-GATE through-blade knife gate valves",
          ),
        },
        {
          slug: "accessoires-vannes-guillotine",
          name: frEn(
            "Accessoires vannes guillotine",
            "Knife gate valve accessories",
          ),
        },
      ],
    },
    {
      slug: "robinets-soupape-pointeau",
      name: frEn(
        "Robinets à soupape – robinets à pointeau",
        "Globe & needle valves",
      ),
      subfamilies: [
        {
          slug: "robinets-a-soupape",
          name: frEn("Robinets à soupape", "Globe valves"),
        },
        {
          slug: "robinets-a-pointeau",
          name: frEn("Robinets à pointeau", "Needle valves"),
        },
        {
          slug: "robinets-incendie-colonne-seche-prise-simple-ou-double",
          name: frEn(
            "Robinets incendie colonne sèche prise simple ou double",
            "Dry riser fire valves — single or double outlet",
          ),
        },
        {
          slug: "robinets-pied-de-colonne-perfection-a-flotteur",
          name: frEn(
            "Robinets pied de colonne – Perfection – à flotteur",
            "Column foot, perfection & float valves",
          ),
        },
      ],
    },
    {
      slug: "robinets-tournant-spherique-acier-inox",
      name: frEn(
        "Robinets à tournant sphérique acier – inox",
        "Steel & stainless ball valves",
      ),
      subfamilies: [
        {
          slug: "robinets-tournant-spherique-monobloc-inox",
          name: frEn(
            "Robinets à tournant sphérique monobloc inox",
            "Stainless monobloc ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-2-pieces",
          name: frEn(
            "Robinets à tournant sphérique 2 pièces",
            "Two-piece ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-2-pieces-split-body",
          name: frEn(
            "Robinets à tournant sphérique 2 pièces à brides Split Body",
            "Two-piece split body flanged ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-3-pieces",
          name: frEn(
            "Robinets à tournant sphérique 3 pièces",
            "Three-piece ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-3-pieces-brides-elsa",
          name: frEn(
            "Robinets à tournant sphérique 3 pièces à brides tournantes ELSA®",
            "ELSA® three-piece flanged ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-3-pieces-a-brides",
          name: frEn(
            "Robinets à tournant sphérique 3 pièces à brides",
            "Three-piece flanged ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-3-voies",
          name: frEn(
            "Robinets à tournant sphérique 3 voies",
            "Three-way ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-4-voies",
          name: frEn(
            "Robinets à tournant sphérique 4 voies",
            "Four-way ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-wafer-brides-etroit",
          name: frEn(
            "Robinets à tournant sphérique Wafer entre brides étroit",
            "Narrow wafer ball valves",
          ),
        },
        {
          slug: "robinets-tournant-spherique-sphere-arbree-jc",
          name: frEn(
            "Robinets à tournant sphérique sphère arbrée JC",
            "JC trunnion-mounted ball valves",
          ),
        },
      ],
    },
    {
      slug: "vannes-sphere-laiton-fonte-pvc",
      name: frEn(
        "Vannes à sphère laiton – fonte – PVC",
        "Brass, cast iron & PVC ball valves",
      ),
      subfamilies: [
        {
          slug: "vannes-sphere-laiton-serena-cw724r-pn40",
          name: frEn(
            "Vannes à sphère Laiton Serena CW724R PN40",
            "Serena CW724R PN40 brass ball valves",
          ),
        },
        {
          slug: "vannes-sphere-laiton-nf-4ms",
          name: frEn(
            "Vannes à sphère Laiton NF 4MS",
            "NF 4MS brass ball valves",
          ),
        },
        {
          slug: "vannes-sphere-laiton-batiment-plus-4ms",
          name: frEn(
            "Vannes à sphère Laiton Bâtiment+ 4MS",
            "Bâtiment+ 4MS brass ball valves",
          ),
        },
        {
          slug: "robinets-compteur-laiton-ecrou-tournant",
          name: frEn(
            "Robinets de compteur Laiton à écrou tournant",
            "Brass meter ball valves with swivel nut",
          ),
        },
        {
          slug: "vannes-puisage-laiton-inox",
          name: frEn(
            "Vannes de puisage Laiton – Inox",
            "Brass & stainless draw-off valves",
          ),
        },
        {
          slug: "vannes-sphere-laiton-industrie-cadenassable-demultiplicateur",
          name: frEn(
            "Vannes sphère Laiton industrie – Cadenassable – Démultiplicateur",
            "Industrial brass ball valves — lockable, gear operator",
          ),
        },
        {
          slug: "vannes-sphere-laiton-sphero-conique",
          name: frEn(
            "Vannes à sphère Laiton sphéro-conique",
            "Brass conical ball valves",
          ),
        },
        {
          slug: "vannes-sphere-laiton-collecteurs-tetine",
          name: frEn(
            "Vannes à sphère Laiton – Pour collecteurs – Avec tétine",
            "Brass ball valves for manifolds with drain cock",
          ),
        },
        {
          slug: "vannes-sphere-laiton-3-voies",
          name: frEn(
            "Vannes à sphère Laiton 3 voies",
            "Brass three-way ball valves",
          ),
        },
        {
          slug: "vannes-sphere-pvc-u",
          name: frEn("Vannes à sphère PVC-U", "PVC-U ball valves"),
        },
        {
          slug: "vannes-sphere-a-brides-laiton-fonte",
          name: frEn(
            "Vannes à sphère à brides Laiton – Fonte",
            "Flanged brass & cast iron ball valves",
          ),
        },
      ],
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
