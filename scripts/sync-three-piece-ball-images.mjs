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
const outDir = path.join(root, "public", "images", "catalog", "three-piece-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "702",
    "pathKey": "702-robinet-a-tournant-spherique-3-pieces-platine-iso-securite-feu-acier-bsp",
    "productSlug": "serie-702-robinet-a-tournant-spherique-3-pieces-platine-iso-securite-feu-acier-bsp"
  },
  {
    "reference": "702dm",
    "pathKey": "702dm-robinet-a-tournant-spherique-3-pcs-iso5211-montage-direct-acier",
    "productSlug": "serie-702dm-robinet-a-tournant-spherique-3-pcs-iso5211-montage-direct-acier"
  },
  {
    "reference": "702r",
    "pathKey": "702r-robinet-a-tournant-spherique-3-pieces-secu-feu-reduit-acier-bsp-bw-sw-npt",
    "productSlug": "serie-702r-robinet-a-tournant-spherique-3-pieces-secu-feu-reduit-acier-bsp-bw-sw-npt"
  },
  {
    "reference": "703",
    "pathKey": "703-robinet-a-tournant-spherique-3-pieces-platine-iso-securit-feu-inox-bsp",
    "productSlug": "serie-703-robinet-a-tournant-spherique-3-pieces-platine-iso-securit-feu-inox-bsp"
  },
  {
    "reference": "7034",
    "pathKey": "7034-robinet-a-tournant-spherique-3-pieces-a-brides-pn40-inox-securite-feu",
    "productSlug": "serie-7034-robinet-a-tournant-spherique-3-pieces-a-brides-pn40-inox-securite-feu"
  },
  {
    "reference": "703dm",
    "pathKey": "703dm-robinet-a-tournant-spherique-3pieces-iso-5211-montage-direct-inox",
    "productSlug": "serie-703dm-robinet-a-tournant-spherique-3pieces-iso-5211-montage-direct-inox"
  },
  {
    "reference": "703dm4",
    "pathKey": "703dm4-robinet-a-tournant-spherique-3-pieces-iso5211-securite-feu-pn40",
    "productSlug": "serie-703dm4-robinet-a-tournant-spherique-3-pieces-iso5211-securite-feu-pn40"
  },
  {
    "reference": "703r",
    "pathKey": "703r-robinet-a-tournant-spherique-3-pieces-secu-feu-reduit-inox-bsp-bw-sw-npt",
    "productSlug": "serie-703r-robinet-a-tournant-spherique-3-pieces-secu-feu-reduit-inox-bsp-bw-sw-npt"
  },
  {
    "reference": "710",
    "pathKey": "710-robinet-a-tournant-spherique-acier-3-pieces-pn40-avec-platine-iso",
    "productSlug": "serie-710-robinet-a-tournant-spherique-acier-3-pieces-pn40-avec-platine-iso"
  },
  {
    "reference": "711",
    "pathKey": "711-robinet-a-tournant-spherique-inox-3-pieces-a-brides-avec-platine-iso",
    "productSlug": "serie-711-robinet-a-tournant-spherique-inox-3-pieces-a-brides-avec-platine-iso"
  },
  {
    "reference": "712",
    "pathKey": "712-robinet-a-tournant-spherique-3-pieces-acier-adler",
    "productSlug": "serie-712-robinet-a-tournant-spherique-3-pieces-acier-adler"
  },
  {
    "reference": "713",
    "pathKey": "713-robinet-a-tournant-spherique-3-pieces-inox-adler",
    "productSlug": "serie-713-robinet-a-tournant-spherique-3-pieces-inox-adler"
  },
  {
    "reference": "737",
    "pathKey": "737-robinet-a-tournant-spherique-3-pieces-acier-platineiso-femelle-femelle-bsp",
    "productSlug": "serie-737-robinet-a-tournant-spherique-3-pieces-acier-platineiso-femelle-femelle-bsp"
  },
  {
    "reference": "738",
    "pathKey": "738-robinet-a-tournant-spherique-3-pieces-acier-platine-iso-butt-welding-bw",
    "productSlug": "serie-738-robinet-a-tournant-spherique-3-pieces-acier-platine-iso-butt-welding-bw"
  },
  {
    "reference": "739",
    "pathKey": "739-robinet-a-tournant-spherique-3-pcs-acier-platine-iso-socket-welding-sw",
    "productSlug": "serie-739-robinet-a-tournant-spherique-3-pcs-acier-platine-iso-socket-welding-sw"
  },
  {
    "reference": "740",
    "pathKey": "740-robinet-a-tournant-spherique-3-pieces-inox-platine-iso-bsp-gamme-initiale",
    "productSlug": "serie-740-robinet-a-tournant-spherique-3-pieces-inox-platine-iso-bsp-gamme-initiale"
  },
  {
    "reference": "741",
    "pathKey": "741-robinet-tournant-spherique-3-pcs-inox-platine-iso-butt-welding-bw-initiale",
    "productSlug": "serie-741-robinet-tournant-spherique-3-pcs-inox-platine-iso-butt-welding-bw-initiale"
  },
  {
    "reference": "742",
    "pathKey": "742-robinet-a-tournant-spherique-3-pieces-inox-platine-iso-socket-welding-sw",
    "productSlug": "serie-742-robinet-a-tournant-spherique-3-pieces-inox-platine-iso-socket-welding-sw"
  },
  {
    "reference": "743",
    "pathKey": "743-robinet-a-tournant-spherique-3-pieces-platine-iso-npt-initiale",
    "productSlug": "serie-743-robinet-a-tournant-spherique-3-pieces-platine-iso-npt-initiale"
  },
  {
    "reference": "744",
    "pathKey": "744-robinet-a-tournant-spherique-3-pcs-inox-femelle-femelle-npt",
    "productSlug": "serie-744-robinet-a-tournant-spherique-3-pcs-inox-femelle-femelle-npt"
  },
  {
    "reference": "745",
    "pathKey": "745-robinet-a-tournant-spherique-3-pieces-acier-a105n-class800-npt-sw",
    "productSlug": "serie-745-robinet-a-tournant-spherique-3-pieces-acier-a105n-class800-npt-sw"
  },
  {
    "reference": "747",
    "pathKey": "747-robinet-a-tournant-spherique-3-pieces-inox-performance-femelle-femelle-bsp",
    "productSlug": "serie-747-robinet-a-tournant-spherique-3-pieces-inox-performance-femelle-femelle-bsp"
  },
  {
    "reference": "748",
    "pathKey": "748-robinet-a-tournant-spherique-3-pieces-inox-performance-butt-welding-bw",
    "productSlug": "serie-748-robinet-a-tournant-spherique-3-pieces-inox-performance-butt-welding-bw"
  },
  {
    "reference": "749",
    "pathKey": "749-robinet-a-tournant-spherique-3-pcs-inox-performance-socket-welding-sw",
    "productSlug": "serie-749-robinet-a-tournant-spherique-3-pcs-inox-performance-socket-welding-sw"
  },
  {
    "reference": "790",
    "pathKey": "790-robinet-a-tournant-spherique-3-pcs-initiale-inox-femelle-femelle-bsp",
    "productSlug": "serie-790-robinet-a-tournant-spherique-3-pcs-initiale-inox-femelle-femelle-bsp"
  },
  {
    "reference": "791",
    "pathKey": "791-robinet-a-tournant-spherique-3-pieces-initiale-inox-butt-welding-bw",
    "productSlug": "serie-791-robinet-a-tournant-spherique-3-pieces-initiale-inox-butt-welding-bw"
  },
  {
    "reference": "792",
    "pathKey": "792-robinet-a-tournant-spherique-3pieces-initiale-inox-socket-welding-sw",
    "productSlug": "serie-792-robinet-a-tournant-spherique-3pieces-initiale-inox-socket-welding-sw"
  },
  {
    "reference": "796",
    "pathKey": "796-robinet-a-tournant-spherique-3-pcs-initiale-acier-femelle-bsp-npt",
    "productSlug": "serie-796-robinet-a-tournant-spherique-3-pcs-initiale-acier-femelle-bsp-npt"
  },
  {
    "reference": "797",
    "pathKey": "797-robinet-a-tournant-spherique-3-pieces-initiale-acier-butt-welding-bw",
    "productSlug": "serie-797-robinet-a-tournant-spherique-3-pieces-initiale-acier-butt-welding-bw"
  },
  {
    "reference": "798",
    "pathKey": "798-robinet-a-tournant-spherique-3-pieces-initiale-acier-socket-welding-sw",
    "productSlug": "serie-798-robinet-a-tournant-spherique-3-pieces-initiale-acier-socket-welding-sw"
  },
  {
    "reference": "800naicg",
    "pathKey": "800naicg-robinet-a-tournant-spherique-3-pieces-acier-forge-800-lbs-jc",
    "productSlug": "serie-800naicg-robinet-a-tournant-spherique-3-pieces-acier-forge-800-lbs-jc"
  },
  {
    "reference": "800niicg",
    "pathKey": "800niicg-robinet-a-tournant-spherique-3-pieces-inox-forge-800-lbs-jc",
    "productSlug": "serie-800niicg-robinet-a-tournant-spherique-3-pieces-inox-forge-800-lbs-jc"
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
