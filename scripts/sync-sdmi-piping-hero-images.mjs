#!/usr/bin/env node
/** Visuels HD pour les 7 gammes « offre SDMI » (tubes + lignes brides). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assignImage,
  loadManifest,
  saveManifest,
} from "./lib/sync-range-manifest.mjs";
import { pickSferacoHighResImageUrl } from "./lib/sferaco-product-image.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");
const itemsPath = path.join(root, "scripts", "piping-sync-items.generated.json");
const outDir = path.join(root, "public", "images", "catalog", "piping", "hero");
fs.mkdirSync(outDir, { recursive: true });

const ITEMS = fs.existsSync(itemsPath)
  ? JSON.parse(fs.readFileSync(itemsPath, "utf8"))
  : [];

function firstPathKey(imageDir, pred = () => true) {
  const hit = ITEMS.find((i) => i.imageDir === imageDir && pred(i));
  return hit?.pathKey ?? null;
}

/** Représentants catalogue + slug SDMI. */
const HERO = [
  {
    productSlug: "tubes-acier-carbone-api5l-a106-a53-a333",
    file: "tube-carbone.jpg",
    pathKey: firstPathKey("raccords-acier-souder"),
  },
  {
    productSlug: "tubes-acier-inoxydable-a312-tp304l-316l",
    file: "tube-inox.jpg",
    pathKey: firstPathKey("raccords-inox", (i) => /inox|304|316/i.test(i.pathKey)),
  },
  {
    productSlug: "tubes-acier-carbone-pre-enrobes-3pe",
    file: "tube-3pe.jpg",
    pathKey: firstPathKey("mamelons-manchons-acier"),
  },
  {
    productSlug: "brides-en1092-acier-carbone-pn10-pn40",
    file: "bride-en1092.jpg",
    pathKey: firstPathKey("brides-plates"),
  },
  {
    productSlug: "brides-asme-b16-5-a105-150-2500",
    file: "bride-asme.jpg",
    pathKey: firstPathKey("brides-petrole", (i) => /class150|2b20|2wn20/i.test(i.pathKey)),
  },
  {
    productSlug: "brides-inox-304l-316l-en1092-asme",
    file: "bride-inox.jpg",
    pathKey: firstPathKey("brides-collerettes", (i) => /inox-304|2col40/i.test(i.pathKey)),
  },
  {
    productSlug: "brides-acier-galvanise-plate-taraudee",
    file: "bride-galvanise.jpg",
    pathKey: firstPathKey("brides-collerettes", (i) => /zingue|galvan/i.test(i.pathKey)),
  },
];

async function fetchHtml(pathKey) {
  const res = await fetch(`https://www.sferaco.com/fr/${pathKey}.html`, {
    headers: { "user-agent": "SDMI-catalog-sync/1.0" },
  });
  if (!res.ok) throw new Error(`${pathKey} -> ${res.status}`);
  return res.text();
}

const manifest = loadManifest(manifestPath);

for (const item of HERO) {
  if (!item.pathKey) {
    console.warn("skip", item.productSlug, "no sample pathKey");
    continue;
  }
  try {
    const html = await fetchHtml(item.pathKey);
    const imageUrl = pickSferacoHighResImageUrl(html);
    if (!imageUrl) {
      console.warn("skip", item.productSlug, "no image url");
      continue;
    }
    const dest = path.join(outDir, item.file);
    const buf = Buffer.from(await (await fetch(imageUrl)).arrayBuffer());
    fs.writeFileSync(dest, buf);
    const publicPath = `/images/catalog/piping/hero/${item.file}`;
    assignImage(manifest, { productSlug: item.productSlug, publicPath });
    console.log("ok", item.productSlug, buf.byteLength);
  } catch (err) {
    console.warn("fail", item.productSlug, err.message);
  }
}

saveManifest(manifestPath, manifest);
