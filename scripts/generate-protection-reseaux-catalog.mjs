#!/usr/bin/env node
/** Génère seeds TS + liste sync pour Protection régulation des réseaux (Sferaco). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedsDir = path.join(root, "lib", "catalog", "seeds", "protection-reseaux");
fs.mkdirSync(seedsDir, { recursive: true });

const FAMILY = "protection-regulation-des-reseaux";
const SF_BASE = "https://www.sferaco.com/fr/protection-regulation-des-reseaux";
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const LOTS = [
  {
    slug: "vannes-a-sphere-avec-clapet-anti-retour-ballstop",
    sferacoPath: "vannes-a-sphere-avec-clapet-anti-retour-ballstop",
    exportName: "ballstopRanges",
    fileName: "ballstop-ranges.ts",
    imageDir: "ballstop",
  },
  {
    slug: "ventouses-et-regulation",
    sferacoPath: "ventouses-et-regulation",
    exportName: "ventousesRegulationRanges",
    fileName: "ventouses-regulation-ranges.ts",
    imageDir: "ventouses",
  },
  {
    slug: "disconnecteur-antipollution-scudo",
    sferacoPath: "disconnecteur-antipollution-scudo",
    exportName: "scudoDisconnecteurRanges",
    fileName: "scudo-disconnecteur-ranges.ts",
    imageDir: "scudo",
  },
  {
    slug: "clapets-de-retenue-antipollution",
    sferacoPath: "clapets-de-retenue-antipollution",
    exportName: "clapetsRetenueAntipollutionRanges",
    fileName: "clapets-retenue-antipollution-ranges.ts",
    imageDir: "clapets-retenue",
  },
];

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html", "accept-language": "fr-FR,fr;q=0.9" },
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

async function scrapeCategory(sferacoPath) {
  const urls = new Set();
  for (let p = 1; p <= 10; p++) {
    const pageUrl =
      p === 1
        ? `${SF_BASE}/${sferacoPath}.html`
        : `${SF_BASE}/${sferacoPath}.html?p=${p}`;
    let html;
    try {
      html = await fetchText(pageUrl);
    } catch (err) {
      if (p > 1) break;
      throw err;
    }
    const count = (html.match(/product-item-info_/g) || []).length;
    let added = 0;
    const re = /class="product-item-link"\s+href="([^"]+)"/g;
    let m;
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
  if (/^[0-9]+/.test(pathKey)) {
    return pathKey.match(/^[0-9]+[a-z]*/i)?.[0] ?? pathKey.split("-")[0];
  }
  return pathKey.split("-")[0];
}

function parseTitle(html) {
  const m = html.match(/class="base"[^>]*>\s*([^<]+)/);
  if (m) return m[1].trim().replace(/&#039;/g, "'");
  const t = html.match(/<title>([^|<]+)/);
  return t?.[1]?.trim() ?? null;
}

function inferMaterial(pathKey, title) {
  const t = `${title} ${pathKey}`.toLowerCase();
  if (/pvc|plastique|composite|polypropyl/i.test(t)) {
    return { fr: "Composite / plastique", en: "Composite / plastic" };
  }
  if (/fonte/i.test(t)) return { fr: "Fonte", en: "Cast iron" };
  if (/inox/i.test(t)) return { fr: "Inox", en: "Stainless steel" };
  if (/laiton|brass|ballstop|scudo|clapet/i.test(t)) {
    return { fr: "Laiton", en: "Brass" };
  }
  return { fr: "Laiton", en: "Brass" };
}

function inferConnection(pathKey, title) {
  const t = `${pathKey} ${title}`.toLowerCase();
  if (/bride|flange|a-brides/i.test(t)) return "flanged-rf";
  return "threaded";
}

function inferPn(pathKey, title) {
  const t = `${title}${pathKey}`;
  if (/pn25/i.test(t)) return "PN25";
  if (/pn16/i.test(t)) return "PN16";
  if (/pn10/i.test(t)) return "PN10";
  if (/pn40/i.test(t)) return "PN40";
  return null;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function toEn(title) {
  return title
    .replace(/Vanne à sphère/gi, "Ball valve")
    .replace(/Clapet/gi, "Check valve")
    .replace(/Disconnecteur/gi, "Backflow preventer")
    .replace(/Ventouse/gi, "Air valve")
    .replace(/antipollution/gi, "anti-pollution")
    .replace(/laiton/gi, "brass")
    .replace(/fonte/gi, "cast iron")
    .replace(/inox/gi, "stainless");
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
    const conn = inferConnection(it.pathKey, it.title);
    const pn = inferPn(it.pathKey, it.title);
    const pnLit = pn == null ? "null" : `"${esc(pn)}"`;
    lines.push(`  base({`);
    lines.push(`    reference: "${esc(it.reference)}",`);
    lines.push(`    slug: "${esc(it.productSlug)}",`);
    lines.push(`    name: frEn("${esc(it.title)}", "${esc(it.enTitle)}"),`);
    lines.push(`    description: frEn(`);
    lines.push(
      `      "Gamme protection et régulation des réseaux — catalogue SDMI.",`,
    );
    lines.push(`      "Network protection & regulation range — SDMI catalog.",`);
    lines.push(`    ),`);
    lines.push(
      `    dn: null, pn: ${pnLit}, material: frEn("${esc(mat.fr)}", "${esc(mat.en)}"),`,
    );
    lines.push(
      `    connectionType: "${conn}", standards: ["en10204"], sectorTags: ["water", "building"],`,
    );
    lines.push(`    technicalSpecs: { connection: "${conn}", documentCount: 4 },`);
    lines.push(`  }),`);
  }
  lines.push(`];`);
  lines.push("");
  fs.writeFileSync(path.join(seedsDir, lot.fileName), lines.join("\n"));
}

const allSyncItems = [];
/** Dédup inter-sous-familles : même fiche Sferaco (pathKey), pas la série seule. */
const seenPathKeys = new Set();

for (const lot of LOTS) {
  process.stderr.write(`\n${lot.slug} `);
  const urls = await scrapeCategory(lot.sferacoPath);
  const items = [];
  for (const url of urls) {
    const pathKey = url.split("/fr/")[1].replace(".html", "");
    if (seenPathKeys.has(pathKey)) {
      process.stderr.write("d");
      continue;
    }
    const html = await fetchText(url);
    const title = parseTitle(html) || refFromPathKey(pathKey);
    const sku = html.match(/itemprop="sku"[^>]*content="([^"]+)"/)?.[1]?.trim();
    // Référence série : doublons de série OK si pathKey / slug distincts (comme fonte malléable).
    const reference = (sku || refFromPathKey(pathKey)).replace(/\s+/g, "");
    seenPathKeys.add(pathKey);
    const productSlug = `serie-${pathKey
      .replace(/[^a-z0-9]+/gi, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()}`;
    items.push({
      pathKey,
      reference,
      title,
      enTitle: toEn(title),
      productSlug,
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
    `import { ${lot.exportName} } from "@/lib/catalog/seeds/protection-reseaux/${lot.fileName.replace(".ts", "")}";`,
);
indexLines.push("");
indexLines.push("export const protectionReseauxAllRanges = [");
for (const lot of LOTS) {
  indexLines.push(`  ...${lot.exportName},`);
}
indexLines.push("];");
indexLines.push("");
fs.writeFileSync(path.join(seedsDir, "index.ts"), indexLines.join("\n"));

fs.writeFileSync(
  path.join(root, "scripts", "protection-reseaux-sync-items.generated.json"),
  JSON.stringify(allSyncItems, null, 2),
);

console.error(`\nTotal sync items: ${allSyncItems.length}`);
console.log("ok", seedsDir);
