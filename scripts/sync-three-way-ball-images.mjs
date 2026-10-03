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
const outDir = path.join(root, "public", "images", "catalog", "three-way-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "721",
    "pathKey": "721-robinet-a-tournant-spherique-3-voies-haute-pression-taraude-en-l",
    "productSlug": "serie-721-robinet-a-tournant-spherique-3-voies-haute-pression-taraude-en-l"
  },
  {
    "reference": "722",
    "pathKey": "722-vanne-a-sphere-acier-3-voies-l-adler-pn16",
    "productSlug": "serie-722-vanne-a-sphere-acier-3-voies-l-adler-pn16"
  },
  {
    "reference": "723",
    "pathKey": "723-vanne-a-sphere-inox-3-voies-l-t-adler-pn16",
    "productSlug": "serie-723-vanne-a-sphere-inox-3-voies-l-t-adler-pn16"
  },
  {
    "reference": "780",
    "pathKey": "780-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-l",
    "productSlug": "serie-780-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-l"
  },
  {
    "reference": "781",
    "pathKey": "781-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-t-bsp",
    "productSlug": "serie-781-robinet-a-tournant-spherique-3-voies-taraude-lumiere-en-t-bsp"
  },
  {
    "reference": "783",
    "pathKey": "783-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-l",
    "productSlug": "serie-783-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-l"
  },
  {
    "reference": "784",
    "pathKey": "784-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-t",
    "productSlug": "serie-784-robinet-a-tournant-spherique-3-voies-acier-lumiere-en-t"
  },
  {
    "reference": "785",
    "pathKey": "785-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-l",
    "productSlug": "serie-785-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-l"
  },
  {
    "reference": "786",
    "pathKey": "786-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-t",
    "productSlug": "serie-786-robinet-a-tournant-spherique-3-voies-inox-lumiere-en-t"
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
      publicPath: `/images/catalog/three-way-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
