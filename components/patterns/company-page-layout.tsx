import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CompanyPageLayoutProps = {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  breadcrumbLabel?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  heroAside?: React.ReactNode;
  className?: string;
};

export function CompanyPageLayout({
  breadcrumbHome,
  breadcrumbCurrent,
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  children,
  heroAside,
  className,
}: CompanyPageLayoutProps) {
  return (
    <>
      <div className="border-border/80 border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <nav aria-label={breadcrumbLabel ?? breadcrumbCurrent}>
            <ol className="text-muted-foreground flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary font-medium">
                  {breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{breadcrumbCurrent}</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="border-border/60 border-b bg-card/50">
        <div
          className={cn(
            "mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:px-6 lg:py-12",
            heroAside ? "lg:grid-cols-2 lg:items-center" : "max-w-3xl",
          )}
        >
          <div className="min-w-0">
            {eyebrow ? (
              <p className="text-cta mb-2 text-xs font-bold tracking-widest uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="font-heading text-primary sdmi-heading-accent text-2xl leading-tight font-bold tracking-tight uppercase md:text-3xl lg:text-4xl">
              {title}
            </h1>
            {description ? (
              <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
                {description}
              </p>
            ) : null}
          </div>
          {heroAside ? <div className="min-w-0">{heroAside}</div> : null}
        </div>
      </div>

      <div className={cn("mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14", className)}>
        {children}
      </div>
    </>
  );
}
