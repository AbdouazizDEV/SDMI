import { PatternSectionHeading } from "@/components/patterns/section-heading";
import { Link } from "@/i18n/navigation";

type ContentPageShellProps = {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function ContentPageShell({
  breadcrumbHome,
  breadcrumbCurrent,
  title,
  description,
  children,
}: ContentPageShellProps) {
  return (
    <>
      <div className="border-border border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm lg:px-6">
          <nav aria-label={breadcrumbCurrent}>
            <ol className="text-muted-foreground flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">
                  {breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground font-medium">{breadcrumbCurrent}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <PatternSectionHeading title={title} description={description} className="mb-8" />
        {children}
      </div>
    </>
  );
}
