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
const outDir = path.join(root, "public", "images", "catalog", "split-body-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "316-340iicg",
    "pathKey": "316-340iicg-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-graphite-pn16-40",
    "productSlug": "serie-316-340iicg-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-graphite-pn16-40"
  },
  {
    "reference": "316-340qiit",
    "pathKey": "316-340qiit-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-tfm1600-pn16-40",
    "productSlug": "serie-316-340qiit-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-tfm1600-pn16-40"
  },
  {
    "reference": "316aicg",
    "pathKey": "316aicg-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-graphite-pn16-40",
    "productSlug": "serie-316aicg-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-graphite-pn16-40"
  },
  {
    "reference": "316ait-340ait",
    "pathKey": "316ait-340ait-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-ptfe-pn16-40",
    "productSlug": "serie-316ait-340ait-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-ptfe-pn16-40"
  },
  {
    "reference": "316iit-340iit",
    "pathKey": "316iit-340iit-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-ptfe-pn16-40",
    "productSlug": "serie-316iit-340iit-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-ptfe-pn16-40"
  },
  {
    "reference": "340aigf",
    "pathKey": "340aigf-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-verre-pn16-40",
    "productSlug": "serie-340aigf-robinet-a-tournant-spherique-2-pieces-f1-acier-jc-verre-pn16-40"
  },
  {
    "reference": "340ais-316ais",
    "pathKey": "340ais-316ais-robinet-tournant-spherique-2-pieces-f1-acier-jc-stansit-pn16-40",
    "productSlug": "serie-340ais-316ais-robinet-tournant-spherique-2-pieces-f1-acier-jc-stansit-pn16-40"
  },
  {
    "reference": "340iigf-316iigf",
    "pathKey": "340iigf-316iigf-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-verre-pn16-40",
    "productSlug": "serie-340iigf-316iigf-robinet-a-tournant-spherique-2-pieces-f1-inox-jc-verre-pn16-40"
  },
  {
    "reference": "340iis-316iis",
    "pathKey": "340iis-316iis-robinet-tournant-spherique-2-pieces-f1-inox-jc-stansit-pn16-40",
    "productSlug": "serie-340iis-316iis-robinet-tournant-spherique-2-pieces-f1-inox-jc-stansit-pn16-40"
  },
  {
    "reference": "515aigf",
    "pathKey": "515aigf-robinet-a-tournant-spherique-2-pieces-acier-jc-verre-class150-pn20",
    "productSlug": "serie-515aigf-robinet-a-tournant-spherique-2-pieces-acier-jc-verre-class150-pn20"
  },
  {
    "reference": "515ait",
    "pathKey": "515ait-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-class150-pn20",
    "productSlug": "serie-515ait-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-class150-pn20"
  },
  {
    "reference": "515iigf",
    "pathKey": "515iigf-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-verre-class150-pn20",
    "productSlug": "serie-515iigf-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-verre-class150-pn20"
  },
  {
    "reference": "515iit",
    "pathKey": "515iit-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-class150-pn20",
    "productSlug": "serie-515iit-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-class150-pn20"
  },
  {
    "reference": "515qiit",
    "pathKey": "515qiit-robinet-a-tournant-spherique-2-pieces-inox-class-150-pn20-jc-tfm1600",
    "productSlug": "serie-515qiit-robinet-a-tournant-spherique-2-pieces-inox-class-150-pn20-jc-tfm1600"
  },
  {
    "reference": "516-540qiit",
    "pathKey": "516-540qiit-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-tfm1600-pn16-40",
    "productSlug": "serie-516-540qiit-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-tfm1600-pn16-40"
  },
  {
    "reference": "516aicg-540aicg",
    "pathKey": "516aicg-540aicg-robinet-a-tournant-spherique-2-pcs-f4-acier-jc-graphite-pn40",
    "productSlug": "serie-516aicg-540aicg-robinet-a-tournant-spherique-2-pcs-f4-acier-jc-graphite-pn40"
  },
  {
    "reference": "516aigf-540aigf",
    "pathKey": "516aigf-540aigf-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-ptfeplusverre",
    "productSlug": "serie-516aigf-540aigf-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-ptfeplusverre"
  },
  {
    "reference": "516ais-540ais",
    "pathKey": "516ais-540ais-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-stansit-pn40",
    "productSlug": "serie-516ais-540ais-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-stansit-pn40"
  },
  {
    "reference": "516ait-540ait",
    "pathKey": "516ait-540ait-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-ptfe-pn40",
    "productSlug": "serie-516ait-540ait-robinet-a-tournant-spherique-2-pieces-f4-acier-jc-ptfe-pn40"
  },
  {
    "reference": "516iicg",
    "pathKey": "516iicg-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-graphite",
    "productSlug": "serie-516iicg-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-graphite"
  },
  {
    "reference": "516iigf-540iigf",
    "pathKey": "516iigf-540iigf-robinet-a-tournant-spherique-2-pcs-f4-inox-jc-ptfeplusverre-pn40",
    "productSlug": "serie-516iigf-540iigf-robinet-a-tournant-spherique-2-pcs-f4-inox-jc-ptfeplusverre-pn40"
  },
  {
    "reference": "516iis-540iis",
    "pathKey": "516iis-540iis-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-stansit-pn40",
    "productSlug": "serie-516iis-540iis-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-stansit-pn40"
  },
  {
    "reference": "530aigf",
    "pathKey": "530aigf-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-verre-class300",
    "productSlug": "serie-530aigf-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-verre-class300"
  },
  {
    "reference": "530ait",
    "pathKey": "530ait-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-class300-pn50",
    "productSlug": "serie-530ait-robinet-a-tournant-spherique-2-pieces-acier-jc-ptfe-class300-pn50"
  },
  {
    "reference": "530iigf",
    "pathKey": "530iigf-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-verre-class300-pn50",
    "productSlug": "serie-530iigf-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-verre-class300-pn50"
  },
  {
    "reference": "530iit",
    "pathKey": "530iit-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-class300-pn50",
    "productSlug": "serie-530iit-robinet-a-tournant-spherique-2-pieces-inox-jc-ptfe-class300-pn50"
  },
  {
    "reference": "530qiit",
    "pathKey": "530qiit-robinet-a-tournant-spherique-2-pieces-inox-class-300-pn50-jc-tfm1600",
    "productSlug": "serie-530qiit-robinet-a-tournant-spherique-2-pieces-inox-class-300-pn50-jc-tfm1600"
  },
  {
    "reference": "540iit",
    "pathKey": "540iit-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-ptfe-pn40",
    "productSlug": "serie-540iit-robinet-a-tournant-spherique-2-pieces-f4-inox-jc-ptfe-pn40"
  },
  {
    "reference": "715ait",
    "pathKey": "715ait-robinet-a-tournant-spherique-end-entry-acier-monobloc-jc-class150",
    "productSlug": "serie-715ait-robinet-a-tournant-spherique-end-entry-acier-monobloc-jc-class150"
  },
  {
    "reference": "715iit",
    "pathKey": "715iit-robinet-a-tournant-spherique-end-entry-inox-monobloc-jc-class150",
    "productSlug": "serie-715iit-robinet-a-tournant-spherique-end-entry-inox-monobloc-jc-class150"
  },
  {
    "reference": "730ait",
    "pathKey": "730ait-robinet-a-tournant-spherique-end-entry-acier-monobloc-jc-class300",
    "productSlug": "serie-730ait-robinet-a-tournant-spherique-end-entry-acier-monobloc-jc-class300"
  },
  {
    "reference": "730iit",
    "pathKey": "730iit-robinet-a-tournant-spherique-end-entry-inox-monobloc-jc-class300",
    "productSlug": "serie-730iit-robinet-a-tournant-spherique-end-entry-inox-monobloc-jc-class300"
  },
  {
    "reference": "750",
    "pathKey": "750-robinet-a-tournant-spherique-2-pieces-a-brides-acier-fm2",
    "productSlug": "serie-750-robinet-a-tournant-spherique-2-pieces-a-brides-acier-fm2"
  },
  {
    "reference": "751",
    "pathKey": "751-robinet-a-tournant-spherique-2-pieces-a-brides-inox-fm2",
    "productSlug": "serie-751-robinet-a-tournant-spherique-2-pieces-a-brides-inox-fm2"
  },
  {
    "reference": "752",
    "pathKey": "752-robinet-a-tournant-spherique-acier-2-pieces-a-brides-excellence-pn16-40",
    "productSlug": "serie-752-robinet-a-tournant-spherique-acier-2-pieces-a-brides-excellence-pn16-40"
  },
  {
    "reference": "753",
    "pathKey": "753-robinet-a-tournant-spherique-2-pieces-a-brides-inox-excellence-pn16-pn40",
    "productSlug": "serie-753-robinet-a-tournant-spherique-2-pieces-a-brides-inox-excellence-pn16-pn40"
  },
  {
    "reference": "754",
    "pathKey": "754-robinet-a-tournant-spherique-2-pieces-a-brides-acier-adler",
    "productSlug": "serie-754-robinet-a-tournant-spherique-2-pieces-a-brides-acier-adler"
  },
  {
    "reference": "755",
    "pathKey": "755-robinet-a-tournant-spherique-2-pieces-a-brides-inox-adler-pn16-25",
    "productSlug": "serie-755-robinet-a-tournant-spherique-2-pieces-a-brides-inox-adler-pn16-25"
  },
  {
    "reference": "756",
    "pathKey": "756-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class150-pn20",
    "productSlug": "serie-756-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class150-pn20"
  },
  {
    "reference": "757",
    "pathKey": "757-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class150",
    "productSlug": "serie-757-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class150"
  },
  {
    "reference": "758",
    "pathKey": "758-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class300-adler",
    "productSlug": "serie-758-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class300-adler"
  },
  {
    "reference": "759",
    "pathKey": "759-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class300-adler",
    "productSlug": "serie-759-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class300-adler"
  },
  {
    "reference": "760",
    "pathKey": "760-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class600-adler",
    "productSlug": "serie-760-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class600-adler"
  },
  {
    "reference": "761",
    "pathKey": "761-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class600-adler",
    "productSlug": "serie-761-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class600-adler"
  },
  {
    "reference": "762",
    "pathKey": "762-robinet-a-tournant-spherique-2-pieces-a-brides-acier-performance-pn16-40",
    "productSlug": "serie-762-robinet-a-tournant-spherique-2-pieces-a-brides-acier-performance-pn16-40"
  },
  {
    "reference": "763",
    "pathKey": "763-robinet-a-tournant-spherique-2-pieces-a-brides-inox-performance-pn16-40",
    "productSlug": "serie-763-robinet-a-tournant-spherique-2-pieces-a-brides-inox-performance-pn16-40"
  },
  {
    "reference": "763l",
    "pathKey": "763l-robinet-a-tournant-spherique-2-pieces-split-body-f1-din-long-inox-pn10-40",
    "productSlug": "serie-763l-robinet-a-tournant-spherique-2-pieces-split-body-f1-din-long-inox-pn10-40"
  },
  {
    "reference": "766",
    "pathKey": "766-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class150-fe2",
    "productSlug": "serie-766-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class150-fe2"
  },
  {
    "reference": "767",
    "pathKey": "767-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class150-fe2",
    "productSlug": "serie-767-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class150-fe2"
  },
  {
    "reference": "768",
    "pathKey": "768-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class300",
    "productSlug": "serie-768-robinet-a-tournant-spherique-2-pieces-a-brides-acier-class300"
  },
  {
    "reference": "769",
    "pathKey": "769-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class300",
    "productSlug": "serie-769-robinet-a-tournant-spherique-2-pieces-a-brides-inox-class300"
  },
  {
    "reference": "778",
    "pathKey": "778-robinet-a-tournant-spherique-2-pieces-acier-a-brides-class150",
    "productSlug": "serie-778-robinet-a-tournant-spherique-2-pieces-acier-a-brides-class150"
  },
  {
    "reference": "779",
    "pathKey": "779-robinet-a-tournant-spherique-2-pieces-inox-a-brides-class150",
    "productSlug": "serie-779-robinet-a-tournant-spherique-2-pieces-inox-a-brides-class150"
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
      publicPath: `/images/catalog/split-body-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
