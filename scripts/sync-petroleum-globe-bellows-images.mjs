#!/usr/bin/env node
/**
 * Visuels gammes — robinets soupape / soufflet pétrole forgé–moulé.
 * Fusionne le manifeste existant (opercule). Usage: node scripts/sync-petroleum-globe-bellows-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "petroleum-globe-bellows");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const REFERENCES = [
  "402", "403", "404",
  "405", "406", "412", "413", "414", "416", "417", "418", "419", "420", "421", "422", "423",
  "440", "441", "452", "453",
  "443", "444", "471",
];

fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": "SDMI-catalog-sync/1.0" },
  });
  if (!res.ok) {
    throw new Error(`${url} -> ${res.status}`);
  }
  return res.text();
}

function pickProductUrl(html, reference) {
  const all = [
    ...html.matchAll(
      new RegExp(
        `href="(https://www\\.sferaco\\.com/fr/${reference}-robinet-a-soupape[^"]*\\.html)"`,
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
  if (!matches.length) {
    return null;
  }
  const jpg = matches.filter((u) => /\.jpe?g$/i.test(u));
  const pool = jpg.length ? jpg : matches;
  return pool.sort((a, b) => b.length - a.length)[0];
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`download ${url} -> ${res.status}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return buf.length;
}

const prior = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  : {};
const manifest = { ...prior };

for (const reference of REFERENCES) {
  try {
    const searchUrl = `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(`${reference} robinet soupape`)}`;
    const searchHtml = await fetchText(searchUrl);
    const productUrl = pickProductUrl(searchHtml, reference);
    if (!productUrl) {
      console.warn("skip", reference, "no product URL");
      continue;
    }
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${reference}${ext}`;
    const dest = path.join(outDir, fileName);
    const bytes = await download(imageUrl, dest);
    manifest[reference] = `/images/catalog/petroleum-globe-bellows/${fileName}`;
    console.log("ok", reference, bytes, "bytes", fileName);
  } catch (err) {
    console.warn("fail", reference, err.message);
  }
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log("manifest", manifestPath, Object.keys(manifest).length, "entries total");
