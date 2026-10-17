import { contactMapEmbedUrl } from "@/lib/site/contact-map";
import { cn } from "@/lib/utils";

type ContactGoogleMapProps = {
  title: string;
  className?: string;
};

export function ContactGoogleMap({ title, className }: ContactGoogleMapProps) {
  return (
    <div
      className={cn(
        "relative min-h-[280px] overflow-hidden rounded-xl ring-1 ring-border/60 md:min-h-[320px] lg:min-h-[360px]",
        className,
      )}
    >
      <iframe
        title={title}
        src={contactMapEmbedUrl}
        className="absolute inset-0 size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
