#!/usr/bin/env node
/** Visuels taxonomie — tournant sphérique acier/inox (famille + sous-familles livrées). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "taxonomy");

const ITEMS = [
  {
    fileSlug: "robinets-tournant-spherique-acier-inox",
    productUrl:
      "https://www.sferaco.com/fr/708-robinet-a-tournant-spherique-monobloc-femelle-femelle-bsp-inox.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-monobloc-inox",
    productUrl:
      "https://www.sferaco.com/fr/708-robinet-a-tournant-spherique-monobloc-femelle-femelle-bsp-inox.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-2-pieces",
    productUrl:
      "https://www.sferaco.com/fr/715-robinet-a-tournant-spherique-2-pieces-inox-femelle-femelle-bsp.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-2-pieces-split-body",
    productUrl:
      "https://www.sferaco.com/fr/750-robinet-a-tournant-spherique-2-pieces-a-brides-acier-fm2.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-3-pieces",
    productUrl:
      "https://www.sferaco.com/fr/740-robinet-a-tournant-spherique-3-pieces-inox-platine-iso-bsp-gamme-initiale.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-3-pieces-brides-elsa",
    productUrl:
      "https://www.sferaco.com/fr/elitrf-robinet-a-tournant-spherique-brides-tournantes-elsa-pn40-inox.html",
  },
  {
    fileSlug: "robinets-tournant-spherique-3-pieces-a-brides",
    productUrl:
      "https://www.sferaco.com/fr/731-robinet-a-tournant-spherique-3-pieces-a-brides-inox.html",
  },
];

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

for (const item of ITEMS) {
  try {
    const html = await fetch(item.productUrl, {
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
