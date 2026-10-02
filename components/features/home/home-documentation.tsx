import { getTranslations } from "next-intl/server";

import { HomeIcon } from "@/components/features/home/home-icon";
import { SectionHeading } from "@/components/features/home/section-heading";
import type { HomeDocumentationHighlight } from "@/lib/home/get-home-page-data";
import { getStoragePublicUrl } from "@/lib/storage/public-url";

type HomeDocumentationSectionProps = {
  highlights: HomeDocumentationHighlight[];
};

export async function HomeDocumentationSection({
  highlights,
}: HomeDocumentationSectionProps) {
  const t = await getTranslations("Home");
  const tDocs = await getTranslations("Home.documentation.items");

  return (
    <section
      className="bg-primary text-primary-foreground py-14 lg:py-20"
      aria-labelledby="home-documentation-heading"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading
          id="home-documentation-heading"
          title={t("documentation.title")}
          description={t("documentation.description")}
          className="mb-8 [&_h2]:text-primary-foreground [&_p]:text-primary-foreground/80"
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => {
            const href = getStoragePublicUrl(item.storagePath);
            const title = tDocs(item.translationKey);
            const description = tDocs(`${item.translationKey}_description`);

            return (
              <li key={item.translationKey}>
                {href ? (
                  <a
                    href={href}
                    download
                    className="border-primary-foreground/20 hover:bg-primary-foreground/10 focus-visible:ring-primary-foreground flex h-full flex-col rounded-sm border p-5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                  >
                    <HomeIcon
                      slug={item.iconSlug}
                      className="text-cta mb-4 size-8"
                    />
                    <h3 className="font-heading text-lg font-bold uppercase">
                      {title}
                    </h3>
                    <p className="text-primary-foreground/80 mt-2 text-sm">
                      {description}
                    </p>
                    <span className="text-cta mt-4 text-sm font-semibold">
                      {t("documentation.downloadLabel")}
                    </span>
                  </a>
                ) : (
                  <div className="border-primary-foreground/20 flex h-full flex-col rounded-sm border p-5 opacity-80">
                    <HomeIcon
                      slug={item.iconSlug}
                      className="text-cta mb-4 size-8"
                    />
                    <h3 className="font-heading text-lg font-bold uppercase">
                      {title}
                    </h3>
                    <p className="text-primary-foreground/80 mt-2 text-sm">
                      {description}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
