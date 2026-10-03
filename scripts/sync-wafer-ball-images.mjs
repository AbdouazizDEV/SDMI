#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assignImage,
  loadManifest,
  saveManifest,
} from "./lib/sync-range-manifest.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "wafer-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "720",
    "pathKey": "720-robinet-a-tournant-spherique-2-pieces-etroit-acier-pn40-adler",
    "productSlug": "serie-720-robinet-a-tournant-spherique-2-pieces-etroit-acier-pn40-adler"
  },
  {
    "reference": "770",
    "pathKey": "770-robinet-a-tournant-spherique-2-pieces-etroit-inox-pn16-40-adler",
    "productSlug": "serie-770-robinet-a-tournant-spherique-2-pieces-etroit-inox-pn16-40-adler"
  },
  {
    "reference": "771",
    "pathKey": "771-robinet-a-tournant-spherique-modele-etroit-a-brides-inox-pn16",
    "productSlug": "serie-771-robinet-a-tournant-spherique-modele-etroit-a-brides-inox-pn16"
  },
  {
    "reference": "772",
    "pathKey": "772-robinet-a-tournant-spherique-etroit-acier-a-brides-class150",
    "productSlug": "serie-772-robinet-a-tournant-spherique-etroit-acier-a-brides-class150"
  },
  {
    "reference": "773",
    "pathKey": "773-robinet-a-tournant-spherique-2-pieces-a-brides-inox-wafer",
    "productSlug": "serie-773-robinet-a-tournant-spherique-2-pieces-a-brides-inox-wafer"
  },
  {
    "reference": "774",
    "pathKey": "774-robinet-a-tournant-spherique-etroit-acier-a-brides-class300",
    "productSlug": "serie-774-robinet-a-tournant-spherique-etroit-acier-a-brides-class300"
  },
  {
    "reference": "775",
    "pathKey": "775-robinet-a-tournant-spherique-etroit-inox-entre-brides-class300",
    "productSlug": "serie-775-robinet-a-tournant-spherique-etroit-inox-entre-brides-class300"
  },
  {
    "reference": "776",
    "pathKey": "776-robinet-a-tournant-spherique-2-pieces-etroit-acier-a-brides-class600",
    "productSlug": "serie-776-robinet-a-tournant-spherique-2-pieces-etroit-acier-a-brides-class600"
  },
  {
    "reference": "777",
    "pathKey": "777-robinet-a-tournant-spherique-2-pieces-etroit-inox-a-brides-class600",
    "productSlug": "serie-777-robinet-a-tournant-spherique-2-pieces-etroit-inox-a-brides-class600"
  }
];

function safeFileName(reference) {
  return reference.replace(/[^a-zA-Z0-9.-]+/g, "-").toLowerCase();
}

fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "SDMI-catalog-sync/1.0" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function pickImageUrl(html) {
  const matches = [
    ...html.matchAll(
      /https:\/\/www\.sferaco\.com\/media\/catalog\/product\/cache\/[^"'\s]+\.(jpg|jpeg|webp)/gi,
    ),
  ].map((m) => m[0]);
  if (!matches.length) return null;
  const jpg = matches.filter((u) => /\.jpe?g$/i.test(u));
  return (jpg.length ? jpg : matches).sort((a, b) => b.length - a.length)[0];
}

const manifest = loadManifest(manifestPath);

for (const item of ITEMS) {
  try {
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", item.reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${safeFileName(item.reference)}${ext}`;
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
    );
    assignImage(manifest, {
      reference: item.reference,
      productSlug: item.productSlug,
      publicPath: `/images/catalog/wafer-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
