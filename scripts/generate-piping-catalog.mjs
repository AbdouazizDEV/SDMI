#!/usr/bin/env node
/** Génère seeds TS + liste sync pour la famille tuyauterie-et-accessoires (Sferaco). */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const seedsDir = path.join(root, "lib", "catalog", "seeds", "piping");
fs.mkdirSync(seedsDir, { recursive: true });
const FAMILY = "tuyauterie-et-accessoires";

const LOTS = [
  {
    slug: "brides-a-collerettes",
    sferacoPath: "brides-et-collets/brides-a-collerettes",
    exportName: "bridesCollerettesRanges",
    fileName: "brides-collerettes-ranges.ts",
    imageDir: "brides-collerettes",
  },
  {
    slug: "brides-plates",
    sferacoPath: "brides-et-collets/brides-plates",
    exportName: "bridesPlatesRanges",
    fileName: "brides-plates-ranges.ts",
    imageDir: "brides-plates",
  },
  {
    slug: "brides-pleines",
    sferacoPath: "brides-et-collets/brides-pleines",
    exportName: "bridesPleinesRanges",
    fileName: "brides-pleines-ranges.ts",
    imageDir: "brides-pleines",
  },
  {
    slug: "brides-taraudees",
    sferacoPath: "brides-et-collets/brides-taraudees",
    exportName: "bridesTaraudeesRanges",
    fileName: "brides-taraudees-ranges.ts",
    imageDir: "brides-taraudees",
  },
  {
    slug: "brides-tournantes",
    sferacoPath: "brides-et-collets/brides-tournantes",
    exportName: "bridesTournantesRanges",
    fileName: "brides-tournantes-ranges.ts",
    imageDir: "brides-tournantes",
  },
  {
    slug: "brides-petrole-asme",
    sferacoPath: "brides-et-collets/brides-petrole",
    exportName: "bridesPetroleRanges",
    fileName: "brides-petrole-ranges.ts",
    imageDir: "brides-petrole",
  },
  {
    slug: "kit-boulonnerie-equipements-brides",
    sferacoPath: "brides-et-collets/kit-boulonnerie-et-equipements-brides",
    exportName: "kitBoulonnerieBridesRanges",
    fileName: "kit-boulonnerie-brides-ranges.ts",
    imageDir: "kit-boulonnerie-brides",
  },
  {
    slug: "collets-forges",
    sferacoPath: "brides-et-collets/collets",
    exportName: "colletsForgesRanges",
    fileName: "collets-forges-ranges.ts",
    imageDir: "collets-forges",
  },
  {
    slug: "raccords-deca",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-deca",
    exportName: "raccordsDecaRanges",
    fileName: "raccords-deca-ranges.ts",
    imageDir: "raccords-deca",
  },
  {
    slug: "raccords-polypropylene",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-polypropylene",
    exportName: "raccordsPolypropyleneRanges",
    fileName: "raccords-polypropylene-ranges.ts",
    imageDir: "raccords-polypropylene",
  },
  {
    slug: "raccords-fonte-malleable",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-fonte-malleable",
    exportName: "raccordsFonteMalleableRanges",
    fileName: "raccords-fonte-malleable-ranges.ts",
    imageDir: "raccords-fonte-malleable",
  },
  {
    slug: "mamelons-et-manchons-acier",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/mamelons-et-manchons-acier",
    exportName: "mamelonsManchonsAcierRanges",
    fileName: "mamelons-manchons-acier-ranges.ts",
    imageDir: "mamelons-manchons-acier",
  },
  {
    slug: "raccords-inox",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-inox",
    exportName: "raccordsInoxRanges",
    fileName: "raccords-inox-ranges.ts",
    imageDir: "raccords-inox",
  },
  {
    slug: "raccords-laiton-a-visser",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-laiton-a-visser",
    exportName: "raccordsLaitonVisserRanges",
    fileName: "raccords-laiton-visser-ranges.ts",
    imageDir: "raccords-laiton-visser",
  },
  {
    slug: "raccords-a-cames",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-a-cames",
    exportName: "raccordsCamesRanges",
    fileName: "raccords-cames-ranges.ts",
    imageDir: "raccords-cames",
  },
  {
    slug: "raccords-express",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-express",
    exportName: "raccordsExpressRanges",
    fileName: "raccords-express-ranges.ts",
    imageDir: "raccords-express",
  },
  {
    slug: "raccords-symetriques",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-symetriques",
    exportName: "raccordsSymetriquesRanges",
    fileName: "raccords-symetriques-ranges.ts",
    imageDir: "raccords-symetriques",
  },
  {
    slug: "raccords-acier-a-souder",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/raccords-acier-a-souder",
    exportName: "raccordsAcierSouderRanges",
    fileName: "raccords-acier-souder-ranges.ts",
    imageDir: "raccords-acier-souder",
  },
  {
    slug: "colliers-de-prise-en-charge",
    sferacoPath: "raccords-et-colliers-de-prise-en-charge/colliers-de-prise-en-charge",
    exportName: "colliersPriseEnChargeRanges",
    fileName: "colliers-prise-en-charge-ranges.ts",
    imageDir: "colliers-prise-en-charge",
  },
  {
    slug: "adaptateurs-de-brides-eau",
    sferacoPath: "manchons-et-adaptateurs-de-brides-eau/adaptateurs-de-brides",
    exportName: "adaptateursBridesEauRanges",
    fileName: "adaptateurs-brides-eau-ranges.ts",
    imageDir: "adaptateurs-brides-eau",
  },
  {
    slug: "brides-reseau-eau",
    sferacoPath: "manchons-et-adaptateurs-de-brides-eau/brides",
    exportName: "bridesReseauEauRanges",
    fileName: "brides-reseau-eau-ranges.ts",
    imageDir: "brides-reseau-eau",
  },
  {
    slug: "manchons-reseau-eau",
    sferacoPath: "manchons-et-adaptateurs-de-brides-eau/manchons",
    exportName: "manchonsReseauEauRanges",
    fileName: "manchons-reseau-eau-ranges.ts",
    imageDir: "manchons-reseau-eau",
  },
  {
    slug: "manchons-compensateurs-elastomere",
    sferacoPath: "manchons-compensateurs/manchons-compensateurs-elastomere",
    exportName: "compensateursElastomereRanges",
    fileName: "compensateurs-elastomere-ranges.ts",
    imageDir: "compensateurs-elastomere",
  },
  {
    slug: "manchons-compensateurs-teguflex",
    sferacoPath: "manchons-compensateurs/manchons-compensateurs-industrie-teguflex",
    exportName: "compensateursTeguflexRanges",
    fileName: "compensateurs-teguflex-ranges.ts",
    imageDir: "compensateurs-teguflex",
  },
  {
    slug: "manchons-compensateurs-metalliques",
    sferacoPath: "manchons-compensateurs/manchons-compensateurs-metalliques-a-soufflet",
    exportName: "compensateursMetalliquesRanges",
    fileName: "compensateurs-metalliques-ranges.ts",
    imageDir: "compensateurs-metalliques",
  },
  {
    slug: "manchons-compensateurs-antibruit",
    sferacoPath: "manchons-compensateurs/manchons-compensateurs-antibruit",
    exportName: "compensateursAntibruitRanges",
    fileName: "compensateurs-antibruit-ranges.ts",
    imageDir: "compensateurs-antibruit",
  },
];

async function scrapeCategory(sferacoPath) {
  const urls = new Set();
  for (let p = 1; p <= 25; p++) {
    const pageUrl =
      p === 1
        ? `https://www.sferaco.com/fr/${sferacoPath}.html`
        : `https://www.sferaco.com/fr/${sferacoPath}.html?p=${p}`;
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
  const base = pathKey.split("/").pop() ?? pathKey;
  const skuLike = base.match(/^([0-9]+[a-z0-9]*)/i);
  if (skuLike) return skuLike[1];
  const beforeProduct = base.match(/^([^-]+(?:-[^-]+)?)-(?:bride|raccord|manchon|collet|kit|mamelon|collier|adaptateur|compensateur)/i);
  if (beforeProduct) return beforeProduct[1];
  return base.split("-")[0];
}

function parseTitle(html) {
  const m = html.match(/class="base"[^>]*>\s*([^<]+)/);
  if (m) return m[1].trim();
  const t = html.match(/<title>([^|<]+)/);
  return t?.[1]?.trim() ?? null;
}

function inferMaterial(pathKey, title) {
  const t = (title + pathKey).toLowerCase();
  if (/inox|316|304|1\.4404|1\.4307/.test(t)) return { fr: "Acier inoxydable", en: "Stainless steel" };
  if (/galvanis|zingu/.test(t)) return { fr: "Acier galvanisé", en: "Galvanized steel" };
  if (/fonte|malléable|malleable/.test(t)) return { fr: "Fonte malléable", en: "Malleable cast iron" };
  if (/laiton|brass/.test(t)) return { fr: "Laiton", en: "Brass" };
  if (/polypropyl|pp-r|pp r/.test(t)) return { fr: "Polypropylène", en: "Polypropylene" };
  if (/elastom|caoutchouc|epdm|teguflex/.test(t)) return { fr: "Élastomère", en: "Elastomer" };
  if (/a105|carbone|acier/.test(t)) return { fr: "Acier carbone", en: "Carbon steel" };
  return { fr: "Acier", en: "Steel" };
}

function inferConnection(pathKey) {
  const k = pathKey.toLowerCase();
  if (/a-brides|brides|bride|flange/.test(k)) return "flanged-rf";
  if (/a-souder|soud/.test(k)) return "butt-weld";
  if (/visser|filet|bsp|npt/.test(k)) return "threaded";
  if (/deca|pe|poly/.test(k)) return "compression";
  if (/cames|express|symetri/.test(k)) return "mechanical-coupling";
  return "flanged-rf";
}

function inferPn(pathKey, title) {
  const t = `${title}${pathKey}`;
  if (/2500#|class 2500/i.test(t)) return "2500#";
  if (/1500#|class 1500/i.test(t)) return "1500#";
  if (/900#|class 900/i.test(t)) return "900#";
  if (/600#|class 600/i.test(t)) return "600#";
  if (/300#|class 300/i.test(t)) return "300#";
  if (/150#|class 150/i.test(t)) return "150#";
  if (/pn40/i.test(t)) return "PN40";
  if (/pn25/i.test(t)) return "PN25";
  if (/pn16/i.test(t)) return "PN16";
  if (/pn10/i.test(t)) return "PN10";
  return null;
}

function inferStandards(pathKey, title) {
  const t = `${title}${pathKey}`.toLowerCase();
  const out = ["en10204"];
  if (/en1092|1092-1/.test(t)) out.push("en1092");
  if (/b16\.5|asme/.test(t)) out.push("asme-b16-5");
  if (/a105/.test(t)) out.push("astm-a105");
  if (/api 5l|a106|a53/.test(t)) out.push("api-5l");
  return [...new Set(out)];
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function toEn(title) {
  return title
    .replace(/Bride/gi, "Flange")
    .replace(/Raccord/gi, "Fitting")
    .replace(/Manchon/gi, "Coupling")
    .replace(/Collet/gi, "Forged fitting")
    .replace(/Mamelon/gi, "Nipple")
    .replace(/Collier/gi, "Saddle clamp")
    .replace(/Compensateur/gi, "Expansion joint")
    .replace(/laiton/gi, "brass")
    .replace(/inox/gi, "stainless")
    .replace(/acier/gi, "steel")
    .replace(/fonte/gi, "cast iron");
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
    const standards = inferStandards(it.pathKey, it.title);
    const pn = it.pn ? `"${esc(it.pn)}"` : "null";
    lines.push(`  base({`);
    lines.push(`    reference: "${esc(it.reference)}",`);
    lines.push(`    slug: "${esc(it.productSlug)}",`);
    lines.push(`    name: frEn("${esc(it.title)}", "${esc(it.enTitle)}"),`);
    lines.push(`    description: frEn(`);
    lines.push(`      "Gamme tuyauterie et accessoires — catalogue SDMI.",`);
    lines.push(`      "Piping & accessories range — SDMI catalog.",`);
    lines.push(`    ),`);
    lines.push(`    dn: null, pn: ${pn}, material: frEn("${esc(mat.fr)}", "${esc(mat.en)}"),`);
    lines.push(
      `    connectionType: "${conn}", standards: ${JSON.stringify(standards)}, sectorTags: ["water", "building", "industry"],`,
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
    let pathKey = url.split("/fr/")[1].replace(".html", "");
    if (pathKey && !pathKey.includes("/")) {
      pathKey = `${lot.sferacoPath}/${pathKey}`;
    }
    const html = await fetch(url, {
      headers: { "user-agent": "SDMI-catalog-sync/1.0" },
    }).then((r) => r.text());
    const title = parseTitle(html) || refFromPathKey(pathKey);
    const sku = html.match(/itemprop="sku"[^>]*content="([^"]+)"/)?.[1]?.trim();
    const pathRef = refFromPathKey(pathKey.split("/").pop() ?? pathKey);
    const reference = (sku && sku.length > 2 ? sku : pathRef).replace(/\s+/g, "");
    const pathSlug = pathKey.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
    const productSlug = `serie-${lot.slug}-${pathSlug}`;
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
    `import { ${lot.exportName} } from "@/lib/catalog/seeds/piping/${lot.fileName.replace(".ts", "")}";`,
);
indexLines.push(`import { sdmiTubesAndFlangesRanges } from "@/lib/catalog/seeds/piping/sdmi-tubes-flanges-ranges";`);
indexLines.push("");
indexLines.push("export const pipingAllRanges = [");
indexLines.push("  ...sdmiTubesAndFlangesRanges,");
for (const lot of LOTS) {
  indexLines.push(`  ...${lot.exportName},`);
}
indexLines.push("];");
indexLines.push("");
fs.writeFileSync(path.join(seedsDir, "index.ts"), indexLines.join("\n"));

fs.writeFileSync(
  path.join(root, "scripts", "piping-sync-items.generated.json"),
  JSON.stringify(allSyncItems, null, 2),
);

console.error(`\nTotal sync items: ${allSyncItems.length}`);
console.log("ok", seedsDir);
