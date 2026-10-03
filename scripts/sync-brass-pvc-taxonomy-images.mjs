#!/usr/bin/env node
/** Visuels taxonomie — vannes à sphère laiton / fonte / PVC. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "taxonomy");

const ITEMS = [
  {
    fileSlug: "vannes-sphere-laiton-fonte-pvc",
    pathKey: "509s-vanne-a-sphere-laiton-cw724r-serena-femelle-femelle-levier-noir",
  },
  {
    fileSlug: "vannes-sphere-laiton-serena-cw724r-pn40",
    pathKey: "509s-vanne-a-sphere-laiton-cw724r-serena-femelle-femelle-levier-noir",
  },
  { fileSlug: "vannes-sphere-laiton-nf-4ms", pathKey: "506-vanne-a-sphere-laiton-titre-4ms-nf-femelle-femelle-a-purge-poignee-verte" },
  { fileSlug: "vannes-sphere-laiton-batiment-plus-4ms", pathKey: "508-vanne-a-sphere-laiton-titre-femelle-femelle-poignee-plate-bleue" },
  { fileSlug: "robinets-compteur-laiton-ecrou-tournant", pathKey: "555-vanne-a-sphere-equerre-avant-compteur-laiton-4ms-male-femelle-bsp-manette" },
  { fileSlug: "vannes-puisage-laiton-inox", pathKey: "1345-robinet-de-puisage-laiton-a-potence-pn10-avec-manette-papillon" },
  { fileSlug: "vannes-sphere-laiton-industrie-cadenassable-demultiplicateur", pathKey: "1385-vanne-equerre-fix-in-acs-avec-fixation-integree" },
  { fileSlug: "vannes-sphere-laiton-sphero-conique", pathKey: "524-vanne-a-sphere-laiton-4ms-avec-raccord-demontable-male-femelle-bsp" },
  { fileSlug: "vannes-sphere-laiton-collecteurs-tetine", pathKey: "553-vanne-a-sphere-laiton-femelle-avec-tetine-1-2pouces" },
  { fileSlug: "vannes-sphere-laiton-3-voies", pathKey: "513-vanne-a-sphere-laiton-3-voies-en-l-femelle-bsp" },
  { fileSlug: "vannes-sphere-pvc-u", pathKey: "583-vanne-a-sphere-pvc-u-serie-batiment-a-coller" },
  { fileSlug: "vannes-sphere-a-brides-laiton-fonte", pathKey: "500-vanne-a-sphere-fonte-gs-nf29323-avec-platine-iso-5211" },
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
