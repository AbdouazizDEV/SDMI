import { ballstopRanges } from "@/lib/catalog/seeds/protection-reseaux/ballstop-ranges";
import { ventousesRegulationRanges } from "@/lib/catalog/seeds/protection-reseaux/ventouses-regulation-ranges";
import { scudoDisconnecteurRanges } from "@/lib/catalog/seeds/protection-reseaux/scudo-disconnecteur-ranges";
import { clapetsRetenueAntipollutionRanges } from "@/lib/catalog/seeds/protection-reseaux/clapets-retenue-antipollution-ranges";

export const protectionReseauxAllRanges = [
  ...ballstopRanges,
  ...ventousesRegulationRanges,
  ...scudoDisconnecteurRanges,
  ...clapetsRetenueAntipollutionRanges,
];
