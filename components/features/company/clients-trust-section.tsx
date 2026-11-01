import { ClientsBackdropVideo } from "@/components/features/company/clients-backdrop-video";
import {
  HomeClientsMarquee,
  type HomeClientMarqueeLogo,
} from "@/components/features/home/home-clients-marquee";
import { SectionHeading } from "@/components/features/home/section-heading";

type ClientsTrustSectionProps = {
  logos: HomeClientMarqueeLogo[];
  title: string;
  headingId: string;
  showHeading?: boolean;
};

export function ClientsTrustSection({
  logos,
  title,
  headingId,
  showHeading = true,
}: ClientsTrustSectionProps) {
  const midpoint = Math.ceil(logos.length / 2);
  const topRow = logos.slice(0, midpoint);
  const bottomRow = logos.slice(midpoint);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#071422] py-16 lg:py-24"
      aria-labelledby={showHeading ? headingId : undefined}
      aria-label={showHeading ? undefined : title}
    >
      <ClientsBackdropVideo />
      <div
        className="pointer-events-none absolute inset-0 bg-[#071422]/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#071422]/80 via-[#1b3a57]/25 to-[#071422]/88"
        aria-hidden
      />

      <div className="relative z-10">
        {showHeading ? (
          <div className="mx-auto mb-8 max-w-7xl px-4 lg:mb-10 lg:px-6">
            <SectionHeading
              id={headingId}
              title={title}
              tone="inverse"
              className="mb-0"
            />
          </div>
        ) : null}

        <div className="flex flex-col gap-4 md:gap-5">
          <HomeClientsMarquee
            logos={topRow}
            durationSeconds={38}
            direction="forward"
            fade="mask"
          />
          {bottomRow.length > 0 ? (
            <HomeClientsMarquee
              logos={bottomRow}
              durationSeconds={46}
              direction="reverse"
              fade="mask"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
