#!/usr/bin/env node
/** Visuels taxonomie - Protection régulation des réseaux. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "images", "catalog", "taxonomy");
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const ITEMS = [
  {
    fileSlug: "protection-regulation-des-reseaux",
    pathKey: "324-vanne-a-sphere-avec-clapet-antipollution-scudoball-acs",
  },
  {
    fileSlug: "vannes-a-sphere-avec-clapet-anti-retour-ballstop",
    pathKey: "324-vanne-a-sphere-avec-clapet-antipollution-scudoball-acs",
  },
  {
    fileSlug: "ventouses-et-regulation",
    pathKey: "3131-ventouse-csa-triple-fonction-fonte-fox-rfp-eau-potable-anti-belier",
  },
  {
    fileSlug: "disconnecteur-antipollution-scudo",
    pathKey: "940-disconnecteur-scudo-antipollution-non-controlable-ca573-horizontal-4ms",
  },
  {
    fileSlug: "clapets-de-retenue-antipollution",
    pathKey: "340-clapet-antipollution-ea3046-nf-acs-femelle-male-purges-polyamide",
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
    const productUrl = `https://www.sferaco.com/fr/${item.pathKey}.html`;
    const html = await fetch(productUrl, {
      headers: { "user-agent": UA, accept: "text/html" },
    }).then((r) => {
      if (!r.ok) throw new Error(`${r.status}`);
      return r.text();
    });
    const imageUrl = pickImageUrl(html);
    if (!imageUrl) {
      console.warn("skip", item.fileSlug);
      continue;
    }
    const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
    const dest = path.join(outDir, `${item.fileSlug}${ext}`);
    fs.writeFileSync(
      dest,
      Buffer.from(
        await (
          await fetch(imageUrl, { headers: { "user-agent": UA } })
        ).arrayBuffer(),
      ),
    );
    console.log("ok", item.fileSlug, ext);
  } catch (err) {
    console.warn("fail", item.fileSlug, err.message);
  }
}
