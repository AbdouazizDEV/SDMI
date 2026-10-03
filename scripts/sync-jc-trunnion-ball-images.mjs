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
const outDir = path.join(root, "public", "images", "catalog", "jc-trunnion-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "2515AICG",
    "pathKey": "2515aicg-robinet-a-tournant-spherique-arbre-acier-moule-wcb-jc-graphite-class150",
    "productSlug": "serie-2515aicg-robinet-a-tournant-spherique-arbre-acier-moule-wcb-jc-graphite-class150"
  },
  {
    "reference": "2530AICG",
    "pathKey": "2530aicg-robinet-a-tournant-spherique-arbre-acier-wcb-jc-graphite-class300-pn50",
    "productSlug": "serie-2530aicg-robinet-a-tournant-spherique-arbre-acier-wcb-jc-graphite-class300-pn50"
  },
  {
    "reference": "2560AIDV",
    "pathKey": "2560aidv-robinet-a-tournant-spherique-arbre-acier-wcb-jc-devlon-class-600",
    "productSlug": "serie-2560aidv-robinet-a-tournant-spherique-arbre-acier-wcb-jc-devlon-class-600"
  },
  {
    "reference": "6015AICG",
    "pathKey": "6015aicg-robinet-a-tournant-spherique-arbre-acier-jc-graphite-class150-pn20",
    "productSlug": "serie-6015aicg-robinet-a-tournant-spherique-arbre-acier-jc-graphite-class150-pn20"
  },
  {
    "reference": "6030AICG",
    "pathKey": "6030aicg-robinet-a-sphere-arbree-jc-a-brides-acier-class300-pn50",
    "productSlug": "serie-6030aicg-robinet-a-sphere-arbree-jc-a-brides-acier-class300-pn50"
  },
  {
    "reference": "6060AIDV",
    "pathKey": "6060aidv-robinet-a-sphere-arbree-jc-a-brides-acier-class-600-2pouces",
    "productSlug": "serie-6060aidv-robinet-a-sphere-arbree-jc-a-brides-acier-class-600-2pouces"
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
      publicPath: `/images/catalog/jc-trunnion-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
