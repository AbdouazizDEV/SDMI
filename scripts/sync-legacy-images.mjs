#!/usr/bin/env node
/**
 * Télécharge les médias publics de https://www.sdmi.sn/ vers public/images/.
 * Usage: node scripts/sync-legacy-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicImages = path.join(root, "public", "images");

const dirs = [
  "main-slider",
  "subfamilies",
  "clients",
  "about",
  "partners",
];

for (const dir of dirs) {
  fs.mkdirSync(path.join(publicImages, dir), { recursive: true });
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("ok", dest);
}

for (let i = 1; i <= 4; i++) {
  await download(
    `https://www.sdmi.sn/images/main-slider/${i}.jpg`,
    path.join(publicImages, "main-slider", `${i}.jpg`),
  );
}

for (let i = 1; i <= 8; i++) {
  await download(
    `https://www.sdmi.sn/images/clients/${i}.png`,
    path.join(publicImages, "clients", `${i}.png`),
  );
}

for (let i = 1; i <= 4; i++) {
  await download(
    `https://www.sdmi.sn/images/partners/${i}.png`,
    path.join(publicImages, "partners", `${i}.png`),
  );
}

await download(
  "https://www.sdmi.sn/images/resource/about-img-1.jpg",
  path.join(publicImages, "about", "about-img-1.jpg"),
);

const html = await (await fetch("https://www.sdmi.sn/")).text();
const srcs = [...html.matchAll(/src="(https:\/\/sdmi\.sn\/storage\/sub-categories\/[^"]+)"/g)].map(
  (m) => m[1],
);

const slugs = [
  "robinets-a-boisseau-spherique",
  "robinets-a-soupape",
  "robinets-a-operucle",
  "vannes-guillotine",
  "electrovannes",
  "vannes-a-pointeau",
  "vannes-commandes-pneumatiques",
  "robinets-a-papillon",
  "compensateurs-dilatation",
  "soupapes-reducteurs-pression",
  "brides-equipements",
  "connexions",
  "filtres-a-tamis",
  "clapet-anti-retour",
  "thermometre",
  "manometre",
  "controleur-circulation",
  "compteurs-eau",
  "controle-debit",
  "indicateur-niveau",
  "raccords",
  "colliers",
];

if (srcs.length !== slugs.length) {
  throw new Error(`Expected ${slugs.length} subcategory images, got ${srcs.length}`);
}

for (const [slug, url] of slugs.map((s, i) => [s, srcs[i]])) {
  const ext = path.extname(new URL(url).pathname) || ".jpg";
  await download(url, path.join(publicImages, "subfamilies", `${slug}${ext}`));
}
