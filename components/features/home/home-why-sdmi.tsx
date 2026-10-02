import { getTranslations } from "next-intl/server";

import { SectionHeading } from "@/components/features/home/section-heading";
import type { HomeKeyFigure } from "@/lib/home/get-home-page-data";

type HomeWhySdmiSectionProps = {
  keyFigures: HomeKeyFigure[];
};

export async function HomeWhySdmiSection({ keyFigures }: HomeWhySdmiSectionProps) {
  const t = await getTranslations("Home");
  const tFigures = await getTranslations("Home.figures");

  return (
    <section
      className="mx-auto max-w-7xl px-4 py-14 lg:px-6 lg:py-20"
      aria-labelledby="home-why-heading"
    >
      <SectionHeading
        id="home-why-heading"
        title={t("why.title")}
        description={t("why.description")}
        className="mb-10"
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {keyFigures.map((figure) => (
          <li
            key={figure.translationKey}
            className="border-border rounded-sm border bg-card px-4 py-6 text-center"
          >
            <p className="font-heading text-cta text-4xl font-bold md:text-5xl">
              {figure.value}
            </p>
            <p className="text-muted-foreground mt-2 text-sm">
              {tFigures(figure.translationKey)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
