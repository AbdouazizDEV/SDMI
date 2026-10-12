import { ArrowRightIcon } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type HomeSectionViewAllLinkProps = {
  href: "/produits" | "/secteurs";
  label: string;
  className?: string;
};

export function HomeSectionViewAllLink({
  href,
  label,
  className,
}: HomeSectionViewAllLinkProps) {
  return (
    <div className={cn("mt-8 flex justify-center sm:justify-end", className)}>
      <Link
        href={href}
        className="text-primary hover:text-cta inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors"
      >
        {label}
        <ArrowRightIcon aria-hidden className="size-4" />
      </Link>
    </div>
  );
}
