import type { LocalizedText } from "../../types/localized";

/** Types navigation catalogue — fichier sans dépendance runtime (next.config, redirects). */
export type CatalogNavFamily = {
  slug: string;
  name: LocalizedText;
  subfamilies: {
    slug: string;
    name: LocalizedText;
  }[];
};

export type CatalogNavSector = {
  slug: string;
  name: LocalizedText;
};

export type CatalogNavigation = {
  families: CatalogNavFamily[];
  sectors: CatalogNavSector[];
};
