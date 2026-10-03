import fs from "node:fs";
import path from "node:path";

export function loadManifest(manifestPath) {
  if (!fs.existsSync(manifestPath)) {
    return { references: {}, slugs: {} };
  }
  const raw = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  if (raw.references) {
    return { references: raw.references, slugs: raw.slugs ?? {} };
  }
  return { references: raw, slugs: {} };
}

export function saveManifest(manifestPath, manifest) {
  fs.writeFileSync(
    manifestPath,
    `${JSON.stringify({ references: manifest.references, slugs: manifest.slugs }, null, 2)}\n`,
  );
}

export function assignImage(manifest, { reference, productSlug, publicPath }) {
  if (productSlug) {
    manifest.slugs[productSlug] = publicPath;
  } else {
    manifest.references[reference] = publicPath;
  }
}
