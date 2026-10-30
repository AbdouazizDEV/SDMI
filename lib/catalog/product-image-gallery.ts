/** Photos supplémentaires d'une fiche. La première sert aussi de vignette catalogue. */
export const productImageGalleries: Record<string, string[]> = {
  "coude-45-fig-120-fonte-malleable": [
    "/images/catalog/fittings/coude-45-a.png",
    "/images/catalog/fittings/coude-45-b.png",
  ],
  "coude-90-fig-90-fonte-malleable": [
    "/images/catalog/fittings/coude-90-a.png",
    "/images/catalog/fittings/coude-90-b.png",
  ],
  "coude-reduit-90-fig-90r-fonte-malleable": [
    "/images/catalog/fittings/coude-90r.png",
  ],
  "te-egal-fig-130-fonte-malleable": ["/images/catalog/fittings/te-130.png"],
  "te-reduit-fig-130r-fonte-malleable": [
    "/images/catalog/fittings/te-130r.png",
  ],
  "croix-egale-fig-180-fonte-malleable": [
    "/images/catalog/fittings/croix-180.png",
  ],
  "croix-reduite-fig-180r-fonte-malleable": [
    "/images/catalog/fittings/croix-180r.png",
  ],
  "manchon-reduit-fig-240-fonte-malleable": [
    "/images/catalog/fittings/manchon-240-a.png",
    "/images/catalog/fittings/manchon-240-b.jpg",
    "/images/catalog/fittings/manchon-240-c.jpg",
  ],
  "manchon-fig-270-fonte-malleable": [
    "/images/catalog/fittings/manchon-270-a.png",
    "/images/catalog/fittings/manchon-270-b.png",
  ],
  "mamelon-reduit-fig-241-fonte-malleable": [
    "/images/catalog/fittings/mamelon-241-a.png",
    "/images/catalog/fittings/mamelon-241-b.png",
  ],
  "mamelon-hexagonal-fig-280-fonte-malleable": [
    "/images/catalog/fittings/mamelon-280-a.jpg",
    "/images/catalog/fittings/mamelon-280-b.png",
  ],
  "bouchon-male-fig-291-fonte-malleable": [
    "/images/catalog/fittings/bouchon-291-a.png",
    "/images/catalog/fittings/bouchon-291-b.png",
  ],
  "union-siege-plat-fig-330-fonte-malleable": [
    "/images/catalog/fittings/union-330-a.png",
    "/images/catalog/fittings/union-330-b.png",
  ],
  "tubes-carbone-ronds-a53-a106-grb": [
    "/images/catalog/piping/carbon/tube-a53-a.png",
    "/images/catalog/piping/carbon/tube-a53-b.png",
  ],
  "tubes-carbone-galvanises-profils-creux": [
    "/images/catalog/piping/carbon/tube-galva-a.png",
    "/images/catalog/piping/carbon/tube-galva-b.png",
  ],
  "tubes-carbone-etires-froid-din2391": [
    "/images/catalog/piping/carbon/tube-din2391-a.png",
    "/images/catalog/piping/carbon/tube-din2391-b.png",
  ],
  "tubes-carbone-ligne-api5l-a53-a106": [
    "/images/catalog/piping/carbon/tube-ligne-api5l.png",
  ],
};

export function getProductImageGallery(slug: string): string[] {
  return productImageGalleries[slug] ?? [];
}
