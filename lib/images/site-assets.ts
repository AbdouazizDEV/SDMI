/** Chemins statiques servis depuis /public/images (ancien site sdmi.sn). */
export const siteAssets = {
  hero: "/images/hero-robinetterie-industrielle.jpg",
  heroCarousel: {
    stockDakar: "/images/hero-robinetterie-industrielle.jpg",
    incendie: "/images/hero/secteur-incendie.png",
    agroalimentaire: "/images/hero/secteur-agroalimentaire.png",
    petroleGaz: "/images/hero/secteur-petrole-gaz.png",
    eauTraitement: "/images/hero/secteur-eau-traitement.png",
  },
  mainSlider: {
    circuitEauPetroleGaz: "/images/main-slider/1.jpg",
    robinetterieIndustrielle: "/images/main-slider/2.jpg",
    industrieAgroAlimentaire: "/images/main-slider/3.jpg",
    tuyauterieIncendie: "/images/main-slider/4.jpg",
  },
  sectors: {
    "circuit-eau-petrole-gaz":
      "/images/hero/énergie_et_le_réseau_Eau_Pétrole_Gaz.jpeg",
    "robinetterie-industrielle": "/images/main-slider/2.jpg",
    "industrie-agro-alimentaire":
      "/images/hero/inox_et_process_pour_l'agro-industrie_(Agro-alimentaire).jpeg",
    "tuyauterie-materiels-incendie":
      "/images/hero/Protection_incendie_et_robinetterie_de_sécurité.jpeg",
  },
  families: {
    robinetterie: "/images/famille-robinetterie.jpg",
    "accessoires-tuyauterie": "/images/famille-accessoires-tuyauterie.jpg",
    "filtres-et-clapets": "/images/famille-filtres-clapets.png",
    "mesures-et-comptage": "/images/famille-mesures-comptage.png",
    raccords: "/images/famille-raccords.gif",
  },
} as const;

export function resolveMediaPath(storageOrLocalPath: string | null): string | null {
  if (!storageOrLocalPath) {
    return null;
  }
  if (storageOrLocalPath.startsWith("/")) {
    return storageOrLocalPath;
  }
  return null;
}
