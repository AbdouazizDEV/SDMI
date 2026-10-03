import { serenaCw724rBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/serena-cw724r-ranges";
import { nf4msBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/nf-4ms-ranges";
import { batimentPlus4msBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/batiment-plus-4ms-ranges";
import { compteurEcrouTournantRanges } from "@/lib/catalog/seeds/brass-pvc/compteur-ecrou-tournant-ranges";
import { puisageLaitonInoxRanges } from "@/lib/catalog/seeds/brass-pvc/puisage-laiton-inox-ranges";
import { industrieCadenassableRanges } from "@/lib/catalog/seeds/brass-pvc/industrie-cadenassable-ranges";
import { spheroConiqueBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/sphero-conique-ranges";
import { collecteursTetineBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/collecteurs-tetine-ranges";
import { brassThreeWayBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/laiton-3-voies-ranges";
import { pvcUBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/pvc-u-ranges";
import { flangedBrassCastBallValveRanges } from "@/lib/catalog/seeds/brass-pvc/a-brides-laiton-fonte-ranges";

export const brassPvcAllRanges = [
  ...serenaCw724rBallValveRanges,
  ...nf4msBallValveRanges,
  ...batimentPlus4msBallValveRanges,
  ...compteurEcrouTournantRanges,
  ...puisageLaitonInoxRanges,
  ...industrieCadenassableRanges,
  ...spheroConiqueBallValveRanges,
  ...collecteursTetineBallValveRanges,
  ...brassThreeWayBallValveRanges,
  ...pvcUBallValveRanges,
  ...flangedBrassCastBallValveRanges,
];
