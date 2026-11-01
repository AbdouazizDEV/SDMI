import { cn } from "@/lib/utils";

type PatternSectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
  className?: string;
  accent?: boolean;
  tone?: "default" | "inverse";
};

export function PatternSectionHeading({
  title,
  description,
  id,
  className,
  accent = true,
  tone = "default",
}: PatternSectionHeadingProps) {
  return (
    <header className={className}>
      <h2
        id={id}
        className={cn(
          "font-heading text-2xl font-bold tracking-tight uppercase md:text-3xl",
          tone === "inverse" ? "text-white" : "text-primary",
          accent && "sdmi-heading-accent",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-2 max-w-2xl text-base",
            tone === "inverse" ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}
