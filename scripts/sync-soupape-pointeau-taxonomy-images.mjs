#!/usr/bin/env node
/**
 * Visuels taxonomie — famille et sous-familles soupape / pointeau.
 * Reprise d’un produit emblématique par sous-famille (cache Sferaco).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "taxonomy");

/** slug fichier (sans .jpg) → série produit vitrine */
const ITEMS = [
  { fileSlug: "robinets-soupape-pointeau", reference: "475" },
  { fileSlug: "robinets-a-soupape", reference: "470" },
  { fileSlug: "robinets-a-pointeau", reference: "481" },
  {
    fileSlug: "robinets-incendie-colonne-seche-prise-simple-ou-double",
    reference: "455",
  },
  {
    fileSlug: "robinets-pied-de-colonne-perfection-a-flotteur",
    reference: "490",
  },
];

fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "SDMI-catalog-sync/1.0" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function pickProductUrl(html, reference) {
  const m = html.match(
    new RegExp(`https://www\\.sferaco\\.com/fr/${reference}-[^"'\\s]+\\.html`, "i"),
  );
  return m?.[0] ?? null;
}

function pickImageUrl(html) {
  const matches = [
    ...html.matchAll(
      /https:\/\/www\.sferaco\.com\/media\/catalog\/product\/cache\/[^"'\s]+\.(jpg|jpeg|webp)/gi,
    ),
  ].map((x) => x[0]);
  if (!matches.length) return null;
  const jpg = matches.filter((u) => /\.jpe?g$/i.test(u));
  return (jpg.length ? jpg : matches).sort((a, b) => b.length - a.length)[0];
}

for (const item of ITEMS) {
  try {
    const searchHtml = await fetchText(
      `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(item.reference)}`,
    );
    const productUrl = pickProductUrl(searchHtml, item.reference);
    if (!productUrl) {
      console.warn("skip", item.fileSlug, "no product");
      continue;
    }
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", item.fileSlug, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const dest = path.join(outDir, `${item.fileSlug}${ext}`);
    fs.writeFileSync(dest, Buffer.from(await (await fetch(imageUrl)).arrayBuffer()));
    console.log("ok", item.fileSlug, dest);
  } catch (err) {
    console.warn("fail", item.fileSlug, err.message);
  }
}
