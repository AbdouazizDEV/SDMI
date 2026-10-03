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
const outDir = path.join(root, "public", "images", "catalog", "industrial-gate");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const REFERENCES = [
  "141", "143", "144", "145", "147", "148", "149", "150", "156", "158", "159",
  "180", "181", "182", "184", "185", "186", "187", "188", "189", "191",
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
        `href="(https://www\\.sferaco\\.com/fr/${reference}-vanne-a-opercule[^"]*\\.html)"`,
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
      `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(`${reference} vanne opercule`)}`,
    );
    const productUrl = pickProductUrl(searchHtml, reference);
    if (!productUrl) continue;
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) continue;
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${reference}${ext}`;
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
    );
    assignImage(manifest, {
      reference,
      publicPath: `/images/catalog/industrial-gate/${fileName}`,
    });
    console.log("ok", reference);
  } catch (err) {
    console.warn("fail", reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
