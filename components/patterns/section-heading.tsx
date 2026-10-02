import { cn } from "@/lib/utils";

type PatternSectionHeadingProps = {
  title: string;
  description?: string;
  id?: string;
  className?: string;
  accent?: boolean;
};

export function PatternSectionHeading({
  title,
  description,
  id,
  className,
  accent = true,
}: PatternSectionHeadingProps) {
  return (
    <header className={className}>
      <h2
        id={id}
        className={cn(
          "font-heading text-primary text-2xl font-bold tracking-tight uppercase md:text-3xl",
          accent && "sdmi-heading-accent",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-2 max-w-2xl text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
