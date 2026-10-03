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
const outDir = path.join(root, "public", "images", "catalog", "two-piece-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  { reference: "7155", pathKey: "7155-robinet-a-tournant-spherique-2-pieces-initiale-acs-femelle-femelle-bsp" },
  { reference: "7151", pathKey: "7151-robinet-a-tournant-spherique-2-pieces-initiale-femelle-femelle-bsp" },
  { reference: "715", pathKey: "715-robinet-a-tournant-spherique-2-pieces-inox-femelle-femelle-bsp" },
  { reference: "7152", pathKey: "7152-robinet-a-tournant-spherique-2-pieces-femelle-bsp-a-decompression" },
  { reference: "705", pathKey: "705-robinet-a-tournant-spherique-2-pieces-acier-femelle-femelle-bsp-din-m3" },
  { reference: "7065", pathKey: "7065-robinet-a-tournant-spherique-2-pieces-inox-femelle-femelle-bsp-acs-din-m3" },
  { reference: "706", pathKey: "706-robinet-a-tournant-spherique-2-pieces-inox-femelle-femelle-bsp-din-3202-m3" },
  { reference: "7062", pathKey: "7062-robinet-a-tournant-spherique-2-pieces-inox-homme-mort-din-m3" },
  { reference: "704", pathKey: "704-robinet-a-tournant-spherique-inox-femelle-femelle-npt-din3202-m3" },
  { reference: "714", pathKey: "714-robinet-a-tournant-spherique-2-pieces-haute-temperature-femelle-bsp" },
  { reference: "7143", pathKey: "7143-robinet-a-tournant-spherique-2-pieces-femelle-bsp-degraisse-oxygene" },
  { reference: "733", pathKey: "733-robinet-a-tournant-spherique-2-pieces-iso-acs" },
  { reference: "7895", pathKey: "7895-robinet-a-tournant-spherique-2-pieces-inox-acs-male-femelle-bsp" },
  { reference: "789", pathKey: "789-robinet-a-tournant-spherique-2-pieces-male-femelle-integral" },
  { reference: "7095", pathKey: "7095-robinet-a-tournant-spherique-2-pieces-inox-acs-male-male-bsp" },
  { reference: "709", pathKey: "709-robinet-a-tournant-spherique-2-pieces-male-male-bsp-passage-reduit" },
  { reference: "799", pathKey: "799-robinet-a-tournant-spherique-acier-haute-pression" },
  { reference: "717", pathKey: "717-robinet-a-tournant-spherique-2-pieces-acier-class800-femelle-bsp" },
  { reference: "716", pathKey: "716-robinet-a-tournant-spherique-2-pieces-inox-femelle-bsp-class800" },
  { reference: "718", pathKey: "718-robinet-a-tournant-spherique-2-pieces-acier-embouts-l100mm-schedule-80-bw" },
];

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
    const fileName = `${item.reference}${ext}`;
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
    );
    assignImage(manifest, {
      reference: item.reference,
      publicPath: `/images/catalog/two-piece-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
