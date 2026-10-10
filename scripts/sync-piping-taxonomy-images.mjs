#!/usr/bin/env node
/** Visuels taxonomie — tuyauterie et accessoires. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "taxonomy");
const itemsPath = path.join(root, "scripts", "piping-sync-items.generated.json");

const SUBFAMILY_REP = {
  "tuyauterie-et-accessoires": "brides-collerettes",
  "tubes-acier-carbone": "mamelons-manchons-acier",
  "brides-plates": "brides-plates",
  "raccords-inox": "raccords-inox",
  "manchons-compensateurs-elastomere": "compensateurs-elastomere",
};

fs.mkdirSync(outDir, { recursive: true });

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

const byDir = new Map();
if (fs.existsSync(itemsPath)) {
  for (const item of JSON.parse(fs.readFileSync(itemsPath, "utf8"))) {
    if (!byDir.has(item.imageDir)) byDir.set(item.imageDir, item.pathKey);
  }
}

const tasks = Object.entries(SUBFAMILY_REP).map(([fileSlug, imageDir]) => ({
  fileSlug,
  pathKey: byDir.get(imageDir),
}));

for (const item of tasks) {
  if (!item.pathKey) {
    console.warn("skip", item.fileSlug, "no sample product");
    continue;
  }
  try {
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const html = await fetch(productUrl, {
      headers: { "user-agent": "SDMI-catalog-sync/1.0" },
    }).then((r) => r.text());
    const imageUrl = pickImageUrl(html);
    if (!imageUrl) {
      console.warn("skip", item.fileSlug);
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const dest = path.join(outDir, `${item.fileSlug}${ext}`);
    fs.writeFileSync(dest, Buffer.from(await (await fetch(imageUrl)).arrayBuffer()));
    console.log("ok", item.fileSlug);
  } catch (err) {
    console.warn("fail", item.fileSlug, err.message);
  }
}
