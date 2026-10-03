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
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

/** Références à télécharger (hors manifeste pétrole déjà présent). */
const BATCHES = [
  {
    dir: "industrial-globe",
    references: ["451", "454", "460", "462", "470", "472", "475", "4753", "476", "479", "485"],
    query: (ref) => `${ref} robinet soupape`,
  },
  {
    dir: "industrial-needle",
    references: ["482"],
    query: (ref) => `${ref} robinet pointeau`,
  },
  {
    dir: "fire-dry-column",
    references: ["455", "456", "2449", "9825701"],
    query: (ref) => ref,
  },
  {
    dir: "column-foot-float",
    references: ["430", "490", "491", "492", "494", "980620", "980630", "980632"],
    query: (ref) => ref,
  },
];

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
  ].map((m) => m[0]);
  if (!matches.length) return null;
  const jpg = matches.filter((u) => /\.jpe?g$/i.test(u));
  return (jpg.length ? jpg : matches).sort((a, b) => b.length - a.length)[0];
}

const manifest = loadManifest(manifestPath);

for (const batch of BATCHES) {
  const outDir = path.join(root, "public", "images", "catalog", batch.dir);
  fs.mkdirSync(outDir, { recursive: true });

  for (const reference of batch.references) {
    try {
      const searchHtml = await fetchText(
        `https://www.sferaco.com/fr/catalogsearch/result/?q=${encodeURIComponent(batch.query(reference))}`,
      );
      const productUrl = pickProductUrl(searchHtml, reference);
      if (!productUrl) {
        console.warn("skip", reference, "no url");
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
      fs.writeFileSync(
        path.join(outDir, fileName),
        Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
      );
      assignImage(manifest, {
        reference,
        publicPath: `/images/catalog/${batch.dir}/${fileName}`,
      });
      console.log("ok", reference, batch.dir);
    } catch (err) {
      console.warn("fail", reference, err.message);
    }
  }
}

saveManifest(manifestPath, manifest);
