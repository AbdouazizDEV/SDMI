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
const outDir = path.join(root, "public", "images", "catalog", "three-piece-flanged-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "7034",
    "pathKey": "7034-robinet-a-tournant-spherique-3-pieces-a-brides-pn40-inox-securite-feu",
    "productSlug": "serie-7034-robinet-a-tournant-spherique-3-pieces-a-brides-pn40-inox-securite-feu-liste-a-brides"
  },
  {
    "reference": "703dm4",
    "pathKey": "703dm4-robinet-a-tournant-spherique-3-pieces-iso5211-securite-feu-pn40",
    "productSlug": "serie-703dm4-robinet-a-tournant-spherique-3-pieces-iso5211-securite-feu-pn40-liste-a-brides"
  },
  {
    "reference": "710",
    "pathKey": "710-robinet-a-tournant-spherique-acier-3-pieces-pn40-avec-platine-iso",
    "productSlug": "serie-710-robinet-a-tournant-spherique-acier-3-pieces-pn40-avec-platine-iso-liste-a-brides"
  },
  {
    "reference": "711",
    "pathKey": "711-robinet-a-tournant-spherique-inox-3-pieces-a-brides-avec-platine-iso",
    "productSlug": "serie-711-robinet-a-tournant-spherique-inox-3-pieces-a-brides-avec-platine-iso-liste-a-brides"
  },
  {
    "reference": "730",
    "pathKey": "730-robinet-a-tournant-spherique-3-pieces-a-brides-acier",
    "productSlug": "serie-730-robinet-a-tournant-spherique-3-pieces-a-brides-acier"
  },
  {
    "reference": "731",
    "pathKey": "731-robinet-a-tournant-spherique-3-pieces-a-brides-inox",
    "productSlug": "serie-731-robinet-a-tournant-spherique-3-pieces-a-brides-inox"
  },
  {
    "reference": "981061",
    "pathKey": "981061-rehausse-inox-304-pour-vanne-3-pieces-790-796",
    "productSlug": "serie-981061-rehausse-inox-304-pour-vanne-3-pieces-790-796"
  },
  {
    "reference": "981074",
    "pathKey": "981074-poignee-homme-mort-pour-robinet-avec-platine-iso-5211",
    "productSlug": "serie-981074-poignee-homme-mort-pour-robinet-avec-platine-iso-5211"
  },
  {
    "reference": "983047",
    "pathKey": "983047-rehausse-inox-iso-5211-pour-vannes-702dm-703dm",
    "productSlug": "serie-983047-rehausse-inox-iso-5211-pour-vannes-702dm-703dm"
  },
  {
    "reference": "983048",
    "pathKey": "983048-volant-ovale-cadenassable-inox-304-pour-vannes-702dm-703dm",
    "productSlug": "serie-983048-volant-ovale-cadenassable-inox-304-pour-vannes-702dm-703dm"
  },
  {
    "reference": "983058",
    "pathKey": "983058-gaine-bleue-pour-poignee-de-vannes-ref-790-796",
    "productSlug": "serie-983058-gaine-bleue-pour-poignee-de-vannes-ref-790-796"
  },
  {
    "reference": "M020",
    "pathKey": "m020-montage-rehausse-volant-ou-systeme-de-cadenassage",
    "productSlug": "serie-m020-montage-rehausse-volant-ou-systeme-de-cadenassage"
  }
];

function safeFileName(reference) {
  return reference.replace(/[^a-zA-Z0-9.-]+/g, "-").toLowerCase();
}

fs.mkdirSync(outDir, { recursive: true });

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "SDMI-catalog-sync/1.0" } });
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

for (const item of ITEMS) {
  try {
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const productHtml = await fetchText(productUrl);
    const imageUrl = pickImageUrl(productHtml);
    if (!imageUrl) {
      console.warn("skip", item.reference, "no image");
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const fileName = `${safeFileName(item.reference)}${ext}`;
    fs.writeFileSync(
      path.join(outDir, fileName),
      Buffer.from(await (await fetch(imageUrl)).arrayBuffer()),
    );
    assignImage(manifest, {
      reference: item.reference,
      productSlug: item.productSlug,
      publicPath: `/images/catalog/three-piece-flanged-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
