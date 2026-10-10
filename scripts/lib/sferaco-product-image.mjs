/** Choisit l’URL image la plus détaillée sur une fiche produit Sferaco (Magento). */

function unescapeMagentoUrl(raw) {
  return raw.replace(/\\\//g, "/");
}

/** Extrait le chemin catalogue `/2/1/fichier.jpg` depuis une URL cache ou directe. */
export function catalogProductPathFromUrl(url) {
  const m = url.match(
    /\/media\/catalog\/product\/(?:cache\/[a-f0-9]+\/)?((?:[^/]+\/){2,}[^/?#]+\.(?:jpe?g|png|webp))/i,
  );
  return m?.[1] ?? null;
}

/**
 * @param {string} html
 * @returns {string | null} URL absolue (de préférence JPEG original ~ pleine résolution)
 */
export function pickSferacoHighResImageUrl(html) {
  const fullJson = html.match(/"full":"((?:\\\/|[^"])+)"/);
  if (fullJson?.[1]) {
    const full = unescapeMagentoUrl(fullJson[1]);
    const path = catalogProductPathFromUrl(full);
    if (path) {
      const jpgPath = path.replace(/\.webp$/i, ".jpg");
      return `https://www.sferaco.com/media/catalog/product/${jpgPath}`;
    }
  }

  const cacheUrls = [
    ...html.matchAll(
      /https:\/\/www\.sferaco\.com\/media\/catalog\/product\/cache\/[a-f0-9]+\/(?:[^/"'\s]+\/){2,}[^"'\s]+\.(?:jpe?g|png|webp)/gi,
    ),
  ].map((m) => m[0]);

  const paths = new Set();
  for (const u of cacheUrls) {
    const p = catalogProductPathFromUrl(u);
    if (p) paths.add(p.replace(/\.webp$/i, ".jpg"));
  }

  const direct = [
    ...html.matchAll(
      /https:\/\/www\.sferaco\.com\/media\/catalog\/product\/(?:[^/"'\s]+\/){2,}[^"'\s]+\.(?:jpe?g|png)/gi,
    ),
  ].map((m) => m[0]);
  for (const u of direct) {
    const p = catalogProductPathFromUrl(u);
    if (p) paths.add(p.replace(/\.webp$/i, ".jpg"));
  }

  if (paths.size === 0) return null;

  const preferred = [...paths].sort((a, b) => b.length - a.length)[0];
  return `https://www.sferaco.com/media/catalog/product/${preferred}`;
}
