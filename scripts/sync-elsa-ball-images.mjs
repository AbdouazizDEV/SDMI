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
const outDir = path.join(root, "public", "images", "catalog", "elsa-ball");
const manifestPath = path.join(root, "lib", "catalog", "catalog-range-images.generated.json");

const ITEMS = [
  {
    "reference": "ELBTO2",
    "pathKey": "elbto2-corps-seul-degraisse-oxygene-pour-vanne-a-sphere-elsa",
    "productSlug": "serie-elbto2-corps-seul-degraisse-oxygene-pour-vanne-a-sphere-elsa"
  },
  {
    "reference": "ELBTO2BSP",
    "pathKey": "elbto2bsp-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene",
    "productSlug": "serie-elbto2bsp-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene"
  },
  {
    "reference": "ELBTO2BW",
    "pathKey": "elbto2bw-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene",
    "productSlug": "serie-elbto2bw-robinet-a-tournant-spherique-brides-tournantes-elsa-degraisse-oxygene"
  },
  {
    "reference": "ELBTOBPE",
    "pathKey": "elbtobpe-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-bpe",
    "productSlug": "serie-elbtobpe-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-bpe"
  },
  {
    "reference": "ELBTODIN",
    "pathKey": "elbtodin-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-din",
    "productSlug": "serie-elbtodin-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-din"
  },
  {
    "reference": "ELBTOISO",
    "pathKey": "elbtoiso-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital",
    "productSlug": "serie-elbtoiso-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital"
  },
  {
    "reference": "ELCF",
    "pathKey": "elcf-coquilles-de-remplissage-tfm1600-elsa",
    "productSlug": "serie-elcf-coquilles-de-remplissage-tfm1600-elsa"
  },
  {
    "reference": "ELIT",
    "pathKey": "elit-robinet-a-tournant-spherique-elsa-corps-seul-inox-1-4409",
    "productSlug": "serie-elit-robinet-a-tournant-spherique-elsa-corps-seul-inox-1-4409"
  },
  {
    "reference": "ELITBSP",
    "pathKey": "elitbsp-robinet-a-tournant-spherique-brides-tournantes-elsa-bsp-inox-1-4409",
    "productSlug": "serie-elitbsp-robinet-a-tournant-spherique-brides-tournantes-elsa-bsp-inox-1-4409"
  },
  {
    "reference": "ELITBW",
    "pathKey": "elitbw-robinet-a-tournant-spherique-brides-tournantes-elsa-bw-inox-bw-inox",
    "productSlug": "serie-elitbw-robinet-a-tournant-spherique-brides-tournantes-elsa-bw-inox-bw-inox"
  },
  {
    "reference": "ELITBWDBB",
    "pathKey": "elitbwdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-bw-dn15",
    "productSlug": "serie-elitbwdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-bw-dn15"
  },
  {
    "reference": "ELITBWFC",
    "pathKey": "elitbwfc-robinet-a-tournant-spherique-inox-fond-de-cuve-elsa-bw",
    "productSlug": "serie-elitbwfc-robinet-a-tournant-spherique-inox-fond-de-cuve-elsa-bw"
  },
  {
    "reference": "ELITBWR",
    "pathKey": "elitbwr-robinet-a-tournant-spherique-3pieces-brides-tournantes-passage-reduit",
    "productSlug": "serie-elitbwr-robinet-a-tournant-spherique-3pieces-brides-tournantes-passage-reduit"
  },
  {
    "reference": "ELITOSMS",
    "pathKey": "elitosms-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-sms",
    "productSlug": "serie-elitosms-robinet-a-tournant-spherique-brides-tournantes-elsa-orbital-sms"
  },
  {
    "reference": "ELITRF",
    "pathKey": "elitrf-robinet-a-tournant-spherique-brides-tournantes-elsa-pn40-inox",
    "productSlug": "serie-elitrf-robinet-a-tournant-spherique-brides-tournantes-elsa-pn40-inox"
  },
  {
    "reference": "ELITRFDBB",
    "pathKey": "elitrfdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-dn15-pn40",
    "productSlug": "serie-elitrfdbb-robinet-a-tournant-spherique-elsa-double-block-and-bleed-dn15-pn40"
  },
  {
    "reference": "ELITSW",
    "pathKey": "elitsw-robinet-a-tournant-spherique-brides-tournantes-elsa-sw-inox-1-4409-dn15",
    "productSlug": "serie-elitsw-robinet-a-tournant-spherique-brides-tournantes-elsa-sw-inox-1-4409-dn15"
  },
  {
    "reference": "ELIU",
    "pathKey": "eliu-corps-seul-vanne-elsa-sieges-uhmwpe",
    "productSlug": "serie-eliu-corps-seul-vanne-elsa-sieges-uhmwpe"
  },
  {
    "reference": "ELIUBSP",
    "pathKey": "eliubsp-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe",
    "productSlug": "serie-eliubsp-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe"
  },
  {
    "reference": "ELIUBW",
    "pathKey": "eliubw-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe",
    "productSlug": "serie-eliubw-robinet-a-tournant-spherique-brides-tournantes-elsa-sieges-uhmwpe"
  },
  {
    "reference": "ELIV",
    "pathKey": "eliv-sphere-v-port-60degres-elsa",
    "productSlug": "serie-eliv-sphere-v-port-60degres-elsa"
  },
  {
    "reference": "ELPR",
    "pathKey": "elpr-poignee-cadenassable-gachette-a-ressort-elsa",
    "productSlug": "serie-elpr-poignee-cadenassable-gachette-a-ressort-elsa"
  },
  {
    "reference": "ELRISO",
    "pathKey": "elriso-rehausse-inox-avec-platine-iso-et-visserie",
    "productSlug": "serie-elriso-rehausse-inox-avec-platine-iso-et-visserie"
  },
  {
    "reference": "ELVO",
    "pathKey": "elvo-volant-ovale-inox-avec-systeme-de-cadenassage",
    "productSlug": "serie-elvo-volant-ovale-inox-avec-systeme-de-cadenassage"
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
      publicPath: `/images/catalog/elsa-ball/${fileName}`,
    });
    console.log("ok", item.reference);
  } catch (err) {
    console.warn("fail", item.reference, err.message);
  }
}

saveManifest(manifestPath, manifest);
