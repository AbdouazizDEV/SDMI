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
const outDir = path.join(root, "public", "images", "catalog", "stainless-monobloc-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

/** reference manifeste → segment URL Sferaco (minuscules) */
const ITEMS = [
  { reference: "708", pathKey: "708-robinet-a-tournant-spherique-monobloc-femelle-femelle-bsp-inox" },
  { reference: "708MF", pathKey: "708mf-robinet-a-tournant-spherique-monobloc-inox-male-femelle-bsp" },
  { reference: "732FF", pathKey: "732ff-mini-vanne-a-sphere-inox-monobloc-femelle-femelle-bsp-pn63" },
  { reference: "732MF", pathKey: "732mf-mini-vanne-a-sphere-inox-monobloc-male-femelle-bsp-pn63" },
  { reference: "732MM", pathKey: "732mm-mini-vanne-a-sphere-inox-monobloc-male-male-bsp-pn63" },
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
      publicPath: `/images/catalog/stainless-monobloc-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
