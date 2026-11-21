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
const manifestPath = path.join(
  root,
  "lib",
  "catalog",
  "catalog-range-images.generated.json",
);
const ITEMS = JSON.parse(
  fs.readFileSync(
    path.join(root, "scripts", "protection-reseaux-sync-items.generated.json"),
    "utf8",
  ),
);
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function safeFileName(reference) {
  return reference.replace(/[^a-zA-Z0-9.-]+/g, "-").toLowerCase();
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html" },
  });
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
const usedNames = new Set();

for (const item of ITEMS) {
  const outDir = path.join(
    root,
    "public",
    "images",
    "catalog",
    "protection-reseaux",
    item.imageDir,
  );
  fs.mkdirSync(outDir, { recursive: true });
  try {
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", item.reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    let fileName = `${safeFileName(item.reference)}${ext}`;
    if (usedNames.has(`${item.imageDir}/${fileName}`)) {
      fileName = `${safeFileName(item.productSlug)}${ext}`;
    }
    usedNames.add(`${item.imageDir}/${fileName}`);
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl, { headers: { "user-agent": UA } })).arrayBuffer()),
    );
    assignImage(manifest, {
      reference: item.reference,
      productSlug: item.productSlug,
      publicPath: `/images/catalog/protection-reseaux/${item.imageDir}/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
