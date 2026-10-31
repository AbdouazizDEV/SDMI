import { unstable_cache } from "next/cache";

import { legacyClientLogos } from "@/lib/images/legacy-client-logos";
import { getCatalogV1FamilyImage } from "@/lib/catalog/catalog-v1-assets";
import { legacyCatalogNavigation } from "@/lib/images/legacy-catalog";
import {
  HOME_FEATURED_SECTOR_SLUGS,
  homeFeaturedSectorImages,
} from "@/lib/home/home-featured-sectors";
import { siteAssets } from "@/lib/images/site-assets";
import { getCatalogNavigation } from "@/lib/catalog/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { LocalizedText } from "@/types/localized";

export type HomeTrustIndicator = {
  value: string;
  translationKey: string;
  iconSlug: string;
};

export type HomeKeyFigure = {
  value: string;
  translationKey: string;
};

export type HomeSectorCard = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText | null;
  imageStoragePath: string | null;
};

export type HomeFamilyCard = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText | null;
  imageStoragePath: string | null;
  productCount: number;
};

export type HomeDocumentationHighlight = {
  storagePath: string;
  translationKey: string;
  iconSlug: string;
};

export type HomeClientLogo = {
  name: string;
  logoStoragePath: string;
};

export type HomeHero = {
  imageStoragePath: string;
  imageAlt: LocalizedText;
};

export type HomePageData = {
  hero: HomeHero;
  trustIndicators: HomeTrustIndicator[];
  sectors: HomeSectorCard[];
  families: HomeFamilyCard[];
  documentationHighlights: HomeDocumentationHighlight[];
  keyFigures: HomeKeyFigure[];
  clientLogos: HomeClientLogo[];
};

function familyImage(slug: string): string | null {
  return getCatalogV1FamilyImage(slug);
}

function buildHomeSectors(): HomeSectorCard[] {
  return HOME_FEATURED_SECTOR_SLUGS.flatMap((slug) => {
    const sector = legacyCatalogNavigation.sectors.find((item) => item.slug === slug);
    if (!sector) {
      return [];
    }
    return [
      {
        slug: sector.slug,
        name: sector.name,
        description: null,
        imageStoragePath: homeFeaturedSectorImages[slug],
      },
    ];
  });
}

async function fetchProductCountsByFamily(): Promise<Map<string, number>> {
  const supabase = createSupabaseServerClient();
  const counts = new Map<string, number>();

  if (!supabase) {
    return counts;
  }

  const [{ data: subfamilies }, { data: products }] = await Promise.all([
    supabase.from("product_subfamilies").select("id, family_id"),
    supabase.from("products").select("subfamily_id").eq("is_published", true),
  ]);

  const { data: families } = await supabase
    .from("product_families")
    .select("id, slug");

  const familySlugById = new Map(
    (families ?? []).map((family) => [family.id, family.slug]),
  );
  const subfamilyToFamily = new Map(
    (subfamilies ?? []).map((sub) => [sub.id, sub.family_id]),
  );

  for (const product of products ?? []) {
    const familyId = subfamilyToFamily.get(product.subfamily_id);
    if (!familyId) continue;
    const slug = familySlugById.get(familyId);
    if (!slug) continue;
    const slugAliases: Record<string, string> = {
      filtration: "filtres-et-clapets",
      "mesure-instrumentation": "mesures-et-comptage",
    };
    const mappedSlug = slugAliases[slug] ?? slug;
    counts.set(mappedSlug, (counts.get(mappedSlug) ?? 0) + 1);
  }

  return counts;
}

async function buildHomeFamilies(): Promise<HomeFamilyCard[]> {
  const catalog = await getCatalogNavigation();
  const productCounts = await fetchProductCountsByFamily();

  const families = catalog.families.map((family) => ({
    slug: family.slug,
    name: family.name,
    description: null,
    imageStoragePath: familyImage(family.slug),
    productCount: productCounts.get(family.slug) ?? 0,
  }));

  const firstSlug = "vannes";
  const lastSlug = "robinetterie-petrole-forgee-moulee";
  const first = families.filter((family) => family.slug === firstSlug);
  const last = families.filter((family) => family.slug === lastSlug);
  const middle = families.filter(
    (family) => family.slug !== firstSlug && family.slug !== lastSlug,
  );

  return [...first, ...middle, ...last];
}

async function buildHomePageDataUncached(): Promise<HomePageData> {
  const families = await buildHomeFamilies();

  return {
    hero: {
      imageStoragePath: siteAssets.hero,
      imageAlt: {
        fr: "Sénégalaise de distribution de matériels industriels — robinetterie industrielle",
        en: "Senegalese industrial equipment distributor — industrial valves",
      },
    },
    trustIndicators: [
      { value: "+12 000", translationKey: "stockDakar", iconSlug: "package" },
      { value: "24 h", translationKey: "quote24h", iconSlug: "clock" },
      { value: "ISO & CE", translationKey: "certified", iconSlug: "shield-check" },
    ],
    sectors: buildHomeSectors(),
    families,
    documentationHighlights: [],
    keyFigures: [],
    clientLogos: legacyClientLogos.map((logo) => ({
      name: logo.name,
      logoStoragePath: logo.path,
    })),
  };
}

export const getHomePageData = unstable_cache(
  buildHomePageDataUncached,
  ["sdmi-home-page-data-v3"],
  { revalidate: 300 },
);
