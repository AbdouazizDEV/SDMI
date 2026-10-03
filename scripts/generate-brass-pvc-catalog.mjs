#!/usr/bin/env node
/** Génère seeds TS + liste sync pour la famille vannes-sphere-laiton-fonte-pvc (Sferaco). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedsDir = path.join(root, "lib", "catalog", "seeds", "brass-pvc");
fs.mkdirSync(seedsDir, { recursive: true });
const FAMILY = "vannes-sphere-laiton-fonte-pvc";
const SF_BASE = "https://www.sferaco.com/fr/vannes-a-sphere-laiton-fonte-pvc";

const LOTS = [
  {
    slug: "vannes-sphere-laiton-serena-cw724r-pn40",
    sferacoPath: "vannes-a-sphere-laiton-serena-cw724r-pn40",
    exportName: "serenaCw724rBallValveRanges",
    fileName: "serena-cw724r-ranges.ts",
    imageDir: "serena-cw724r",
  },
  {
    slug: "vannes-sphere-laiton-nf-4ms",
    sferacoPath: "vannes-a-sphere-laiton-nf-4ms",
    exportName: "nf4msBallValveRanges",
    fileName: "nf-4ms-ranges.ts",
    imageDir: "nf-4ms",
  },
  {
    slug: "vannes-sphere-laiton-batiment-plus-4ms",
    sferacoPath: "vannes-a-sphere-laiton-batiment-4ms",
    exportName: "batimentPlus4msBallValveRanges",
    fileName: "batiment-plus-4ms-ranges.ts",
    imageDir: "batiment-plus-4ms",
  },
  {
    slug: "robinets-compteur-laiton-ecrou-tournant",
    sferacoPath: "robinets-de-compteur-laiton-a-ecrou-tournant",
    exportName: "compteurEcrouTournantRanges",
    fileName: "compteur-ecrou-tournant-ranges.ts",
    imageDir: "compteur-ecrou",
  },
  {
    slug: "vannes-puisage-laiton-inox",
    sferacoPath: "vannes-de-puisage-laiton-inox",
    exportName: "puisageLaitonInoxRanges",
    fileName: "puisage-laiton-inox-ranges.ts",
    imageDir: "puisage-laiton-inox",
  },
  {
    slug: "vannes-sphere-laiton-industrie-cadenassable-demultiplicateur",
    sferacoPath: "vannes-sphere-laiton-industrie-cadenassable-demultiplicateur",
    exportName: "industrieCadenassableRanges",
    fileName: "industrie-cadenassable-ranges.ts",
    imageDir: "industrie-cadenassable",
  },
  {
    slug: "vannes-sphere-laiton-sphero-conique",
    sferacoPath: "vannes-a-sphere-laiton-sphero-conique",
    exportName: "spheroConiqueBallValveRanges",
    fileName: "sphero-conique-ranges.ts",
    imageDir: "sphero-conique",
  },
  {
    slug: "vannes-sphere-laiton-collecteurs-tetine",
    sferacoPath: "vannes-a-sphere-laiton-pour-collecteurs-avec-tetine",
    exportName: "collecteursTetineBallValveRanges",
    fileName: "collecteurs-tetine-ranges.ts",
    imageDir: "collecteurs-tetine",
  },
  {
    slug: "vannes-sphere-laiton-3-voies",
    sferacoPath: "vannes-a-sphere-laiton-3-voies",
    exportName: "brassThreeWayBallValveRanges",
    fileName: "laiton-3-voies-ranges.ts",
    imageDir: "laiton-3-voies",
  },
  {
    slug: "vannes-sphere-pvc-u",
    sferacoPath: "vannes-a-sphere-pvc-u",
    exportName: "pvcUBallValveRanges",
    fileName: "pvc-u-ranges.ts",
    imageDir: "pvc-u",
  },
  {
    slug: "vannes-sphere-a-brides-laiton-fonte",
    sferacoPath: "vannes-a-sphere-a-brides-laiton-fonte",
    exportName: "flangedBrassCastBallValveRanges",
    fileName: "a-brides-laiton-fonte-ranges.ts",
    imageDir: "a-brides-laiton-fonte",
  },
];

async function scrapeCategory(sferacoPath) {
  const urls = new Set();
  for (let p = 1; p <= 15; p++) {
    const pageUrl =
      p === 1 ? `${SF_BASE}/${sferacoPath}.html` : `${SF_BASE}/${sferacoPath}.html?p=${p}`;
    const html = await fetch(pageUrl, {
      headers: { "user-agent": "SDMI-catalog-sync/1.0" },
    }).then((r) => r.text());
    const count = (html.match(/product-item-info_/g) || []).length;
    const re = /class="product-item-link"[^>]*href="([^"]+)"/g;
    let m;
    let added = 0;
    while ((m = re.exec(html))) {
      let u = m[1];
      if (!u.startsWith("http")) u = `https://www.sferaco.com${u}`;
      if (!urls.has(u)) {
        urls.add(u);
        added++;
      }
    }
    if (count === 0 || added === 0) break;
  }
  return [...urls].sort();
}

function refFromPathKey(pathKey) {
  const idx = pathKey.search(/-vanne|-robinet|-vanne/i);
  if (/^[0-9]+/.test(pathKey)) return pathKey.match(/^[0-9]+[a-z]*/i)?.[0] ?? pathKey.split("-")[0];
  if (idx > 0) return pathKey.slice(0, idx);
  return pathKey.split("-")[0];
}

function parseTitle(html) {
  const m = html.match(/class="base"[^>]*>\s*([^<]+)/);
  if (m) return m[1].trim();
  const t = html.match(/<title>([^|<]+)/);
  return t?.[1]?.trim() ?? null;
}

function inferMaterial(pathKey, title) {
  const t = (title + pathKey).toLowerCase();
  if (/pvc/i.test(t)) return { fr: "PVC-U", en: "PVC-U" };
  if (/fonte/i.test(t)) return { fr: "Fonte", en: "Cast iron" };
  if (/inox/i.test(t)) return { fr: "Laiton / inox", en: "Brass / stainless" };
  return { fr: "Laiton", en: "Brass" };
}

function inferConnection(pathKey) {
  const k = pathKey.toLowerCase();
  if (/a-brides|brides/.test(k)) return "flanged-rf";
  if (/pvc|colle|solvent/i.test(k)) return "solvent-weld";
  return "threaded";
}

function inferPn(pathKey, title) {
  const t = `${title}${pathKey}`;
  if (/pn40/i.test(t)) return "PN40";
  if (/pn16/i.test(t)) return "PN16";
  if (/pn25/i.test(t)) return "PN25";
  return "PN40";
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function toEn(title) {
  return title
    .replace(/Vanne à sphère/gi, "Ball valve")
    .replace(/Robinet/gi, "Valve")
    .replace(/laiton/gi, "brass")
    .replace(/fonte/gi, "cast iron")
    .replace(/inox/gi, "stainless")
    .replace(/PVC-U/gi, "PVC-U");
}

function emitSeedFile(lot, items) {
  const lines = [];
  lines.push(`import type { CatalogRangeSeed } from "@/lib/catalog/range-product";`);
  lines.push("");
  lines.push(`const FAMILY = "${FAMILY}";`);
  lines.push(`const SUB = "${lot.slug}";`);
  lines.push("");
  lines.push(`function frEn(fr: string, en: string) { return { fr, en }; }`);
  lines.push("");
  lines.push(`function base(`);
  lines.push(
    `  partial: Omit<CatalogRangeSeed, "familySlug" | "subfamilySlug" | "listingKind">,`,
  );
  lines.push(`): CatalogRangeSeed {`);
  lines.push(
    `  return { ...partial, listingKind: "range", familySlug: FAMILY, subfamilySlug: SUB };`,
  );
  lines.push(`}`);
  lines.push("");
  lines.push(`export const ${lot.exportName}: CatalogRangeSeed[] = [`);
  for (const it of items) {
    const mat = inferMaterial(it.pathKey, it.title);
    const conn = inferConnection(it.pathKey);
    lines.push(`  base({`);
    lines.push(`    reference: "${esc(it.reference)}",`);
    lines.push(`    slug: "${esc(it.productSlug)}",`);
    lines.push(`    name: frEn("${esc(it.title)}", "${esc(it.enTitle)}"),`);
    lines.push(`    description: frEn(`);
    lines.push(`      "Gamme vannes à sphère — catalogue SDMI.",`);
    lines.push(`      "Ball valve range — SDMI catalog.",`);
    lines.push(`    ),`);
    lines.push(`    dn: null, pn: "${esc(it.pn)}", material: frEn("${esc(mat.fr)}", "${esc(mat.en)}"),`);
    lines.push(
      `    connectionType: "${conn}", standards: ["en10204"], sectorTags: ["water", "building", "industry"],`,
    );
    lines.push(`    technicalSpecs: { connection: "${conn}", documentCount: 4 },`);
    lines.push(`  }),`);
  }
  lines.push(`];`);
  lines.push("");
  fs.writeFileSync(path.join(seedsDir, lot.fileName), lines.join("\n"));
}

const allSyncItems = [];

for (const lot of LOTS) {
  process.stderr.write(`\n${lot.slug} `);
  const urls = await scrapeCategory(lot.sferacoPath);
  const items = [];
  for (const url of urls) {
    const pathKey = url.split("/fr/")[1].replace(".html", "");
    const html = await fetch(url, {
      headers: { "user-agent": "SDMI-catalog-sync/1.0" },
    }).then((r) => r.text());
    const title = parseTitle(html) || refFromPathKey(pathKey);
    const sku = html.match(/itemprop="sku"[^>]*content="([^"]+)"/)?.[1]?.trim();
    const reference = (sku || refFromPathKey(pathKey)).replace(/\s+/g, "");
    const productSlug = `serie-${pathKey.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase()}`;
    items.push({
      pathKey,
      reference,
      title,
      enTitle: toEn(title),
      productSlug,
      pn: inferPn(pathKey, title),
    });
    process.stderr.write(".");
  }
  emitSeedFile(lot, items);
  for (const it of items) {
    allSyncItems.push({
      reference: it.reference,
      pathKey: it.pathKey,
      productSlug: it.productSlug,
      imageDir: lot.imageDir,
    });
  }
  process.stderr.write(` ${items.length}`);
}

const indexLines = LOTS.map(
  (lot) =>
    `import { ${lot.exportName} } from "@/lib/catalog/seeds/brass-pvc/${lot.fileName.replace(".ts", "")}";`,
);
indexLines.push("");
indexLines.push("export const brassPvcAllRanges = [");
for (const lot of LOTS) {
  indexLines.push(`  ...${lot.exportName},`);
}
indexLines.push("];");
indexLines.push("");
fs.writeFileSync(path.join(seedsDir, "index.ts"), indexLines.join("\n"));

fs.writeFileSync(
  path.join(root, "scripts", "brass-pvc-sync-items.generated.json"),
  JSON.stringify(allSyncItems, null, 2),
);

console.error(`\nTotal sync items: ${allSyncItems.length}`);
console.log("ok", seedsDir);
