#!/usr/bin/env node
/** Visuels — clapets pétrole forgé / moulé. Fusionne le manifeste. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assignImage,
  loadManifest,
  saveManifest,
} from "./lib/sync-range-manifest.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "petroleum-check-valve");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const REFERENCES = [
  "312", "313", "314", "318", "319", "358", "359", "373", "374",
];

fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "SDMI-catalog-sync/1.0" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function pickProductUrl(html, reference) {
  const all = [
    ...html.matchAll(
      new RegExp(
        `href="(https://www\\.sferaco\\.com/fr/${reference}-clapet[^"]*\\.html)"`,
        "gi",
      ),
    ),
  ].map((m) => m[1]);
  return all[0] ?? null;
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

for (const reference of REFERENCES) {
  try {
    const searchHtml = await fetchText(
      `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(`${reference} clapet`)}`,
    );
    const productUrl = pickProductUrl(searchHtml, reference);
    if (!productUrl) {
      console.warn("skip", reference);
      continue;
    }
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip image", reference);
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const dest = path.join(outDir, `${reference}${ext}`);
    fs.writeFileSync(dest, Buffer.from(await (await fetch(imageUrl)).arrayBuffer()));
    assignImage(manifest, {
      reference,
      publicPath: `/images/catalog/petroleum-check-valve/${reference}${ext}`,
    });
    console.log("ok", reference);
  } catch (err) {
    console.warn("fail", reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
console.log("total", Object.keys(manifest.references).length);
