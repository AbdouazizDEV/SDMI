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
const outDir = path.join(root, "public", "images", "catalog", "knife-gate-accessories");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

/** URL produit → clé manifeste (référence ou slug produit). */
const ITEMS = [
  {
    productSlug: "kit-98020-plaques-support-inox-guillotine",
    reference: "98020",
    pageUrl:
      "https://www.sferaco.com/fr/98020-kit-plaques-support-inox-avec-visserie-pour-vanne-guillotine.html",
    fileBase: "98020",
  },
  {
    productSlug: "kit-joints-etancheite-guillotine-unidirectionnelle",
    reference: "KIT-GU-UNI",
    pageUrl:
      "https://www.sferaco.com/fr/kit-de-joints-etancheite-pour-vanne-a-guillotine-unidirectionnelle.html",
    fileBase: "kit-gu-uni",
  },
  {
    productSlug: "kit-joints-etancheite-guillotine-bidirectionnelle",
    reference: "KIT-GU-BI",
    pageUrl:
      "https://www.sferaco.com/fr/kit-de-joints-etancheite-pour-vanne-guillotine-bidirectionnelle.html",
    fileBase: "kit-gu-bi",
  },
  {
    productSlug: "kit-joints-nbr-guillotine-pelle-traversante",
    reference: "KIT-GU-PT",
    pageUrl:
      "https://www.sferaco.com/fr/kit-de-joints-etancheite-nbr-pour-vanne-guillotine-a-pelle-traversante.html",
    fileBase: "kit-gu-pt",
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

const manifest = loadManifest(manifestPath);

for (const item of ITEMS) {
  try {
    const html = await fetch(item.pageUrl, {
      headers: { "user-agent": "SDMI-catalog-sync/1.0" },
    }).then((r) => r.text());
    const imageUrl = pickImageUrl(html);
    if (!imageUrl) {
      console.warn("skip", item.reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${item.fileBase}${ext}`;
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
    );
    const publicPath = `/images/catalog/knife-gate-accessories/${fileName}`;
    assignImage(manifest, {
      reference: item.reference,
      productSlug: item.productSlug,
      publicPath,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
