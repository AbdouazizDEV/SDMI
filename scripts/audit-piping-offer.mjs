#!/usr/bin/env node
/** Vérifie couverture cahier des charges tuyauterie + qualité images. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const itemsPath = path.join(root, "scripts", "piping-sync-items.generated.json");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "lib", "catalog", "catalog-range-images.generated.json"), "utf8"),
);
const slugs = manifest.slugs ?? {};

const SDMI_SLUGS = [
  "tubes-acier-carbone-api5l-a106-a53-a333",
  "tubes-acier-inoxydable-a312-tp304l-316l",
  "tubes-acier-carbone-pre-enrobes-3pe",
  "brides-en1092-acier-carbone-pn10-pn40",
  "brides-asme-b16-5-a105-150-2500",
  "brides-inox-304l-316l-en1092-asme",
  "brides-acier-galvanise-plate-taraudee",
];

const CHECKS = [
  { label: "Bride plate EN1092", re: /bride plate|type-01|type 01/i },
  { label: "Bride pleine", re: /bride pleine|type-05|blind/i },
  { label: "Bride WN (collerette)", re: /collerette|weld neck|type-11|type 11/i },
  { label: "Bride slip-on / emmancher", re: /emmancher|slip.?on|type-12|type 12/i },
  { label: "Bride taraudée", re: /taraudee|taraude|type-13|type 13/i },
  { label: "ASME / Class 150–300", re: /class150|class300|150#|300#|b16\.5/i },
  { label: "Inox 304L / 316L", re: /304l|316l|inox/i },
  { label: "Galvanisé / zingué", re: /galvan|zingue/i },
];

function readAllSeedText() {
  const dir = path.join(root, "lib", "catalog", "seeds", "piping");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => fs.readFileSync(path.join(dir, f), "utf8"))
    .join("\n");
}

const corpus = readAllSeedText();
console.log("=== Couverture textuelle (seeds) ===");
for (const c of CHECKS) {
  console.log(c.label + ":", c.re.test(corpus) ? "OK" : "MANQUANT");
}

console.log("\n=== Gammes offre SDMI (images) ===");
for (const slug of SDMI_SLUGS) {
  const p = slugs[slug];
  const ok = p && fs.existsSync(path.join(root, "public", p.replace(/^\//, "")));
  console.log(slug, ok ? p : "SANS IMAGE");
}

if (!fs.existsSync(itemsPath)) {
  console.error("\nGénérer d’abord: npm run generate:piping-catalog");
  process.exit(1);
}

const items = JSON.parse(fs.readFileSync(itemsPath, "utf8"));
let missing = 0;
let lowRes = 0;
const MIN = 40_000;

for (const item of items) {
  const p = slugs[item.productSlug];
  if (!p) {
    missing++;
    continue;
  }
  const fp = path.join(root, "public", p.replace(/^\//, ""));
  if (!fs.existsSync(fp)) {
    missing++;
    continue;
  }
  if (fs.statSync(fp).size < MIN) lowRes++;
}

console.log("\n=== Références Sferaco (570 gammes) ===");
console.log("Total items sync:", items.length);
console.log("Sans image manifeste/fichier:", missing);
console.log(`Fichiers < ${MIN / 1000} Ko (à resynchroniser HD):`, lowRes);

process.exit(missing > 0 ? 1 : 0);
