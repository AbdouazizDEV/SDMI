#!/usr/bin/env node
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
if (!fs.existsSync(itemsPath)) {
  console.error("Run: npm run generate:piping-catalog");
  process.exit(1);
}
const ITEMS = JSON.parse(fs.readFileSync(itemsPath, "utf8"));

function safeFileName(reference) {
  return reference.replace(/[^a-zA-Z0-9.-]+/g, "-").toLowerCase();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "SDMI-catalog-sync/1.0" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

const MIN_BYTES = 40_000;

const manifest = loadManifest(manifestPath);

for (const item of ITEMS) {
  const outDir = path.join(root, "public", "images", "catalog", "piping", item.imageDir);
  fs.mkdirSync(outDir, { recursive: true });
  try {
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickSferacoHighResImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", item.reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${safeFileName(item.reference)}${ext}`;
    const buf = Buffer.from(await (await fetch(imageUrl)).arrayBuffer());
    if (buf.byteLength < MIN_BYTES) {
      console.warn("low-res", item.reference, buf.byteLength);
    }
    fs.writeFileSync(path.join(outDir, fileName), buf);
    assignImage(manifest, {
      reference: item.reference,
      productSlug: item.productSlug,
      publicPath: `/images/catalog/piping/${item.imageDir}/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
console.log("manifest saved");
