#!/usr/bin/env node
/** Visuels — robinets à pointeau pétrole forgé / inox. Fusionne le manifeste existant. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "petroleum-needle-valve");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const REFERENCES = ["481", "483", "484", "486", "487", "488", "489"];

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
        `href="(https://www\\.sferaco\\.com/fr/${reference}-robinet-a-pointeau[^"]*\\.html)"`,
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

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download ${url} -> ${res.status}`);
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
}

const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
  : {};

for (const reference of REFERENCES) {
  try {
    const searchHtml = await fetchText(
      `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(`${reference} robinet pointeau`)}`,
    );
    const productUrl = pickProductUrl(searchHtml, reference);
    if (!productUrl) {
      console.warn("skip", reference, "no URL");
      continue;
    }
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const dest = path.join(outDir, `${reference}${ext}`);
    await download(imageUrl, dest);
    manifest[reference] = `/images/catalog/petroleum-needle-valve/${reference}${ext}`;
    console.log("ok", reference);
  } catch (err) {
    console.warn("fail", reference, err.message);
  }
}

fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log("total entries", Object.keys(manifest).length);
