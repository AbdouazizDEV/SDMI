import { Link } from "@/i18n/navigation";

type Crumb = {
  label: string;
  href?: string;
};

type CatalogBreadcrumbsProps = {
  ariaLabel: string;
  homeLabel: string;
  productsLabel: string;
  items: Crumb[];
};

export function CatalogBreadcrumbs({
  ariaLabel,
  homeLabel,
  productsLabel,
  items,
}: CatalogBreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel}>
      <ol className="text-muted-foreground flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-primary">
            {homeLabel}
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li>
          {items.length ? (
            <Link href="/produits" className="hover:text-primary">
              {productsLabel}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{productsLabel}</span>
          )}
        </li>
        {items.map((crumb) => (
          <li key={crumb.label} className="flex flex-wrap items-center gap-2">
            <span aria-hidden>/</span>
            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-primary">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{crumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
