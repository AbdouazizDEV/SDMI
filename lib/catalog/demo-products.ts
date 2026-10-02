import type { LocalizedText } from "@/types/localized";

export type DemoCatalogProduct = {
  slug: string;
  familySlug: string;
  subfamilySlug: string;
  reference: string;
  name: LocalizedText;
  description: LocalizedText;
  dn: number;
  pn: string;
  material: LocalizedText;
  connectionType?: string;
  standards?: string[];
  sectorTags?: string[];
  stockUnits?: number;
  certified31?: boolean;
};

/** Références demo retirées — import catalogue via Supabase / scripts à venir. */
export const demoCatalogProducts: DemoCatalogProduct[] = [];

export const allDemoCatalogProducts: DemoCatalogProduct[] = [];
