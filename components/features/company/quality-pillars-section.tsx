import { getTranslations } from "next-intl/server";
import { FlaskConicalIcon, ShieldCheckIcon, WrenchIcon } from "lucide-react";

import { SectionHeading } from "@/components/features/home/section-heading";
import { SectionShell } from "@/components/patterns/section-shell";

const pillarKeys = ["traceability", "testing", "engineering"] as const;

const pillarIcons = {
  traceability: ShieldCheckIcon,
  testing: FlaskConicalIcon,
  engineering: WrenchIcon,
} as const;

type QualityPillarsSectionProps = {
  /** Clé racine next-intl (ex. Home.quality) */
  namespace?: string;
  variant?: "default" | "embedded";
};

export async function QualityPillarsSection({
  namespace = "Home.quality",
  variant = "default",
}: QualityPillarsSectionProps) {
  const t = await getTranslations(namespace);

  const grid = (
    <ul className="grid gap-6 lg:grid-cols-3">
      {pillarKeys.map((key) => {
        const Icon = pillarIcons[key];

        return (
          <li key={key}>
            <article className="sdmi-surface-card sdmi-surface-card-accent group h-full bg-card p-6 transition-transform duration-300 hover:-translate-y-0.5 md:p-7">
              <div className="bg-cta/10 text-cta mb-4 flex size-12 items-center justify-center rounded-xl ring-1 ring-cta/20 transition-colors group-hover:bg-cta/15">
                <Icon aria-hidden className="size-6" />
              </div>
              <h3 className="font-heading text-primary text-lg font-bold tracking-tight uppercase md:text-xl">
                {t(`pillars.${key}.title`)}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {t(`pillars.${key}.description`)}
              </p>
              <ul className="text-foreground mt-5 space-y-2.5 border-t border-border/60 pt-4 text-sm">
                {[0, 1, 2].map((index) => (
                  <li key={index} className="flex gap-2.5">
                    <span
                      className="bg-cta mt-2 size-1.5 shrink-0 rounded-full"
                      aria-hidden
                    />
                    <span>{t(`pillars.${key}.items.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        );
      })}
    </ul>
  );

  if (variant === "embedded") {
    return (
      <section aria-labelledby="quality-pillars-heading">
        <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
          {t("eyebrow")}
        </p>
        <SectionHeading
          id="quality-pillars-heading"
          title={t("title")}
          description={t("description")}
          className="mb-10"
        />
        {grid}
      </section>
    );
  }

  return (
    <SectionShell variant="muted" labelledBy="home-quality-heading">
      <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
        {t("eyebrow")}
      </p>
      <SectionHeading
        id="home-quality-heading"
        title={t("title")}
        description={t("description")}
        className="mb-10"
      />
      {grid}
    </SectionShell>
  );
}
