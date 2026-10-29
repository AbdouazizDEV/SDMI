import type { CatalogRangeSeed } from "@/lib/catalog/range-product";

const FAMILY = "raccords-et-fittings";
const COUDES = "coudes-filetes";
const TES = "tes-et-croix-filetes";
const MANCHONS = "manchons-et-mamelons-filetes";
const FERMETURES = "bouchons-et-unions-filetes";

function frEn(fr: string, en: string) {
  return { fr, en };
}

function base(
  subfamilySlug: string,
  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,
): CatalogRangeSeed {
  return {
    ...partial,
    listingKind: "range",
    familySlug: FAMILY,
    subfamilySlug,
  };
}

const material = frEn(
  "Fonte malléable EN 10242",
  "EN 10242 malleable iron",
);

const specs = {
  pressureClass: "≤ 34,5 bar",
  connection: "threaded",
  connectionLabel: frEn("Filetage BSPT (NPT sur demande)", "BSPT thread (NPT on request)"),
  documentCount: 2,
} as const;

/** Gammes filetées EN 10242 — fiches SDMI, sans visuel ni texte fournisseur. */
export const threadedFittingRanges: CatalogRangeSeed[] = [
  base(COUDES, {
    reference: "TF-120",
    slug: "coude-45-fig-120-fonte-malleable",
    name: frEn("120 • Coude 45°", "120 • 45° elbow"),
    description: frEn(
      "Coude à 45° avec filetages femelles pour changer la direction du flux de fluide dans les tuyaux à un angle de 45°.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.\nEn option : filetage NPT.\nEn option : noir non revêtu.",
      "45° elbow with female threads to change the direction of flow in a pipe at 45°.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.\nOptional: NPT thread.\nOptional: black, uncoated.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(COUDES, {
    reference: "TF-90",
    slug: "coude-90-fig-90-fonte-malleable",
    name: frEn("90 • Coude 90°", "90 • 90° elbow"),
    description: frEn(
      "Coude à 90° avec filetages femelles pour joindre deux tuyaux à angle droit.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.\nEn option : filetage NPT.\nEn option : noir non revêtu.",
      "90° elbow with female threads to join two pipes at a right angle.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.\nOptional: NPT thread.\nOptional: black, uncoated.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(COUDES, {
    reference: "TF-90R",
    slug: "coude-reduit-90-fig-90r-fonte-malleable",
    name: frEn("90R • Coude réduit 90°", "90R • Reducing 90° elbow"),
    description: frEn(
      "Coude de réduction à 90° pour joindre des tuyaux de diamètre différent à angle droit.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Reducing 90° elbow to join pipes of different diameters at a right angle.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(TES, {
    reference: "TF-130",
    slug: "te-egal-fig-130-fonte-malleable",
    name: frEn("130 • Raccord en T égal", "130 • Equal tee"),
    description: frEn(
      "Raccord en T avec filetages femelles permettant de créer un embranchement à 90° à partir d’un conduit principal.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Tee with female threads to create a 90° branch from a main run.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(TES, {
    reference: "TF-130R",
    slug: "te-reduit-fig-130r-fonte-malleable",
    name: frEn("130R • Raccord en T réduit", "130R • Reducing tee"),
    description: frEn(
      "Raccord en T de réduction avec filetages femelles permettant de créer un embranchement depuis un conduit principal avec un tuyau de diamètre inférieur.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Reducing tee with female threads to branch a smaller pipe from a main run.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(TES, {
    reference: "TF-180",
    slug: "croix-egale-fig-180-fonte-malleable",
    name: frEn("180 • Croix égale", "180 • Equal cross"),
    description: frEn(
      "Croix égale femelle, figure 180 EN 10242, pour deux dérivations opposées au diamètre de la ligne. Filetage BSPT, NPT sur demande. Galvanisé à chaud ou noir. Jusqu’à 34,5 bar selon le service. Listings FM et UL sur les références concernées.",
      "Equal female cross, EN 10242 figure 180, for two opposite branches at the run size. BSPT thread, NPT on request. Hot-dip galvanized or black. Up to 34.5 bar depending on service. FM and UL listings on the relevant references.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(TES, {
    reference: "TF-180R",
    slug: "croix-reduite-fig-180r-fonte-malleable",
    name: frEn("180R • Croix réduite", "180R • Reducing cross"),
    description: frEn(
      "Croix de réduction, figure 180R EN 10242, pour assembler des filetages de diamètres différents en croix. BSPT, NPT sur demande, galvanisé à chaud ou noir. Pression jusqu’à 34,5 bar selon la configuration. Listings FM et UL sur les références qui les portent.",
      "Reducing cross, EN 10242 figure 180R, to join different threaded sizes in a cross. BSPT, NPT on request, hot-dip galvanized or black. Pressure up to 34.5 bar depending on the configuration. FM and UL listings on the references that carry them.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(MANCHONS, {
    reference: "TF-240",
    slug: "manchon-reduit-fig-240-fonte-malleable",
    name: frEn("240 • Manchon réduit", "240 • Reducing socket"),
    description: frEn(
      "Manchon de réduction avec filetages femelles permettant de joindre deux tuyaux de diamètres différents en ligne droite.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Reducing socket with female threads to join two pipes of different diameters in a straight line.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(MANCHONS, {
    reference: "TF-270",
    slug: "manchon-fig-270-fonte-malleable",
    name: frEn("270 • Manchon", "270 • Socket"),
    description: frEn(
      "Manchon (raccord) droit avec filetages femelles permettant de joindre deux tuyaux de même diamètre en ligne droite.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Straight socket with female threads to join two pipes of the same diameter in line.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(MANCHONS, {
    reference: "TF-241",
    slug: "mamelon-reduit-fig-241-fonte-malleable",
    name: frEn("241 • Mamelon réduit", "241 • Reducing bush"),
    description: frEn(
      "Douille hexagonale avec filetages mâle et femelle permettant de réduire la taille d’une ouverture à filetage femelle.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Hexagonal bush with male and female threads to reduce a female opening.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(MANCHONS, {
    reference: "TF-280",
    slug: "mamelon-hexagonal-fig-280-fonte-malleable",
    name: frEn("280 • Mamelon hexagonal", "280 • Hex nipple"),
    description: frEn(
      "Mamelon hexagonal avec filetages mâles permettant de joindre deux raccords ou tuyaux à filetage femelle en ligne droite.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Hexagonal nipple with male threads to join two female fittings or pipes in a straight line.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(FERMETURES, {
    reference: "TF-291",
    slug: "bouchon-male-fig-291-fonte-malleable",
    name: frEn("291 • Bouchon mâle", "291 • Male plug"),
    description: frEn(
      "Bouchon avec filetages mâles pour fermer l’extrémité d’un tuyau ou raccord à filetage femelle.\n\nPression de service : jusqu'à 3,45 MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nApprouvé FM / Homologué UL.",
      "Plug with male threads to close the end of a pipe or a female fitting.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nFM approved / UL listed.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
  base(FERMETURES, {
    reference: "TF-330",
    slug: "union-siege-plat-fig-330-fonte-malleable",
    name: frEn("330 • Raccord à siège plat", "330 • Flat-seat union"),
    description: frEn(
      "Raccord à siège plat en trois pièces avec filetage femelle, permettant de raccorder et de déconnecter facilement deux tuyaux ou joints filetés en ligne droite.\n\nPression de service : jusqu'à 3,45MPa / 34,5 bar / 500 psi, en fonction de l'application.\nFiletage BSPT.\nRevêtement : galvanisé à chaud.\nHomologué UL / Approuvé FM.",
      "Three-piece flat-seat union with a female thread, to connect and disconnect two pipes or threaded joints in a straight line.\n\nWorking pressure: up to 3.45 MPa / 34.5 bar / 500 psi, depending on the application.\nBSPT thread.\nFinish: hot-dip galvanized.\nUL listed / FM approved.",
    ),
    dn: null,
    pn: null,
    material,
    connectionType: "threaded",
    standards: ["en10204"],
    sectorTags: ["water", "fire", "industry"],
    technicalSpecs: specs,
  }),
];
