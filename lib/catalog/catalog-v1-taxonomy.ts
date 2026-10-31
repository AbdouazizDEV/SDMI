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
      slug: "tuyauteries",
      name: frEn("Tuyauteries", "Piping"),
      subfamilies: [
        {
          slug: "tubes-acier-carbone",
          name: frEn("Acier carbone", "Carbon steel"),
        },
        {
          slug: "tubes-acier-soudes",
          name: frEn("Tubes acier soudés", "Welded steel tubes"),
        },
        {
          slug: "tubes-acier-sans-soudure",
          name: frEn("Tubes acier sans soudure", "Seamless steel tubes"),
        },
        {
          slug: "tubes-acier-inoxydable",
          name: frEn("Acier inoxydable", "Stainless steel"),
        },
        {
          slug: "tubes-carbone-pre-enrobes-3pe",
          name: frEn(
            "Tube acier SCH40 pré-enrobé 3PE",
            "SCH40 3PE coated steel tube",
          ),
        },
      ],
    },
    {
      slug: "accessoires",
      name: frEn("Accessoires", "Accessories"),
      subfamilies: [
        {
          slug: "brides-asme-b16-5-a105",
          name: frEn(
            "Brides ASME B16.5 A105",
            "ASME B16.5 A105 flanges",
          ),
        },
        {
          slug: "brides-inox-en1092-asme",
          name: frEn(
            "Brides inox EN 1092 / ASME",
            "Stainless EN 1092 / ASME flanges",
          ),
        },
        {
          slug: "brides-acier-galvanise",
          name: frEn(
            "Brides acier galvanisé",
            "Galvanized steel flanges",
          ),
        },
        {
          slug: "brides-a-collerettes",
          name: frEn("Brides à collerettes", "Weld neck flanges"),
        },
        {
          slug: "brides-plates",
          name: frEn("Brides plates", "Plate flanges"),
        },
        {
          slug: "brides-pleines",
          name: frEn("Brides pleines", "Blank flanges"),
        },
        {
          slug: "brides-taraudees",
          name: frEn("Brides taraudées", "Threaded flanges"),
        },
        {
          slug: "brides-tournantes",
          name: frEn("Brides tournantes", "Loose / rotating flanges"),
        },
        {
          slug: "brides-petrole-asme",
          name: frEn("Brides pétrole ASME", "ASME oil & gas flanges"),
        },
        {
          slug: "kit-boulonnerie-equipements-brides",
          name: frEn(
            "Kit boulonnerie et équipements brides",
            "Flange bolting kits & accessories",
          ),
        },
        {
          slug: "raccords-deca",
          name: frEn("Raccords DECA", "DECA couplings"),
        },
        {
          slug: "raccords-polypropylene",
          name: frEn("Raccords polypropylène", "Polypropylene fittings"),
        },
        {
          slug: "raccords-fonte-malleable",
          name: frEn("Raccords fonte malléable", "Malleable iron fittings"),
        },
        {
          slug: "mamelons-et-manchons-acier",
          name: frEn(
            "Mamelons et manchons acier",
            "Steel nipples & couplings",
          ),
        },
        {
          slug: "raccords-inox",
          name: frEn("Raccords inox", "Stainless steel fittings"),
        },
        {
          slug: "raccords-laiton-a-visser",
          name: frEn("Raccords laiton à visser", "Threaded brass fittings"),
        },
        {
          slug: "raccords-express",
          name: frEn("Raccords express", "Express couplings"),
        },
        {
          slug: "raccords-symetriques",
          name: frEn("Raccords symétriques", "Symmetric couplings"),
        },
        {
          slug: "raccords-acier-a-souder",
          name: frEn("Raccords acier à souder", "Welded steel fittings"),
        },
        {
          slug: "colliers-de-prise-en-charge",
          name: frEn(
            "Colliers de prise en charge",
            "Tap saddles & repair clamps",
          ),
        },
        {
          slug: "adaptateurs-de-brides-eau",
          name: frEn(
            "Adaptateurs de brides eau",
            "Water network flange adapters",
          ),
        },
        {
          slug: "brides-reseau-eau",
          name: frEn("Brides réseau eau", "Water network flanges"),
        },
        {
          slug: "manchons-reseau-eau",
          name: frEn("Manchons réseau eau", "Water network couplings"),
        },
        {
          slug: "manchons-compensateurs-elastomere",
          name: frEn(
            "Manchons compensateurs élastomère",
            "Rubber expansion joints",
          ),
        },
        {
          slug: "manchons-compensateurs-teguflex",
          name: frEn(
            "Manchons compensateurs TEGUFLEX",
            "TEGUFLEX expansion joints",
          ),
        },
        {
          slug: "manchons-compensateurs-metalliques",
          name: frEn(
            "Manchons compensateurs métalliques",
            "Metal bellows expansion joints",
          ),
        },
        {
          slug: "manchons-compensateurs-antibruit",
          name: frEn(
            "Manchons compensateurs antibruit",
            "Noise-reducing expansion joints",
          ),
        },
      ],
    },
    {
      slug: "brides",
      name: frEn("Brides", "Flanges"),
      subfamilies: [
        {
          slug: "brides-en1092-acier-carbone",
          name: frEn(
            "Brides EN 1092 acier carbone",
            "EN 1092 carbon steel flanges",
          ),
        },
        {
          slug: "collets-forges",
          name: frEn("Collets forgés", "Forged fittings / hubs"),
        },
      ],
    },
    {
      slug: "raccords-et-fittings",
      name: frEn("Raccords et fittings", "Fittings"),
      subfamilies: [
        {
          slug: "coudes-filetes",
          name: frEn("Coudes filetés", "Threaded elbows"),
        },
        {
          slug: "tes-et-croix-filetes",
          name: frEn("Tés et croix filetés", "Threaded tees & crosses"),
        },
        {
          slug: "manchons-et-mamelons-filetes",
          name: frEn(
            "Manchons et mamelons filetés",
            "Threaded sockets & nipples",
          ),
        },
        {
          slug: "bouchons-et-unions-filetes",
          name: frEn(
            "Bouchons et unions filetés",
            "Threaded plugs & unions",
          ),
        },
        {
          slug: "raccords-a-cames",
          name: frEn("Raccords à cames", "Camlock couplings"),
        },
      ],
    },
    {
      slug: "vannes",
      name: frEn("Vannes", "Valves"),
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
    {
      slug: "industrie-miniere",
      name: frEn("Industrie minière", "Mining industry"),
    },
  ],
};

export const catalogV1FamilySlugs = catalogV1Navigation.families.map(
  (family) => family.slug,
);
