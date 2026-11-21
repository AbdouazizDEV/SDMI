import { cn } from "@/lib/utils";

type SdmiPageLoaderProps = {
  variant?: "page" | "catalog";
  className?: string;
  label?: string;
};

function ShimmerBlock({ className }: { className?: string }) {
  return <div className={cn("sdmi-shimmer rounded-sm", className)} aria-hidden />;
}

/** Skeleton de chargement SDMI - page générique ou catalogue. */
export function SdmiPageLoader({
  variant = "page",
  className,
  label = "Chargement",
}: SdmiPageLoaderProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-7xl px-4 py-10 lg:px-6 lg:py-14",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={label}
    >
      <div
        className="from-cta via-cta/70 to-transparent absolute inset-x-4 top-0 h-0.5 bg-gradient-to-r lg:inset-x-6"
        aria-hidden
      />
      <div
        className="sdmi-loader-bar bg-cta/80 absolute inset-x-4 top-0 h-0.5 origin-left lg:inset-x-6"
        aria-hidden
      />

      {variant === "catalog" ? <CatalogSkeleton /> : <PageSkeleton />}

      <span className="sr-only">{label}</span>
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <ShimmerBlock className="h-3 w-24" />
        <ShimmerBlock className="h-9 max-w-xl" />
        <ShimmerBlock className="h-4 max-w-2xl" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="border-border/60 overflow-hidden rounded-xl border bg-card/40"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <ShimmerBlock className="aspect-[16/10] rounded-none" />
            <div className="space-y-2.5 p-4">
              <ShimmerBlock className="h-3 w-20" />
              <ShimmerBlock className="h-5 w-[85%]" />
              <ShimmerBlock className="h-3.5 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogSkeleton() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <aside className="border-border/60 w-full shrink-0 space-y-4 rounded-xl border bg-card/30 p-4 lg:w-64">
        <ShimmerBlock className="h-4 w-28" />
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <ShimmerBlock key={index} className="h-8 w-full rounded-md" />
          ))}
        </div>
        <ShimmerBlock className="mt-4 h-4 w-20" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <ShimmerBlock key={index} className="h-7 w-full rounded-md" />
          ))}
        </div>
      </aside>

      <div className="min-w-0 flex-1 space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="space-y-2">
            <ShimmerBlock className="h-3 w-24" />
            <ShimmerBlock className="h-8 w-56 max-w-full" />
          </div>
          <ShimmerBlock className="h-9 w-36 rounded-md" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="border-border/60 overflow-hidden rounded-xl border bg-card/40"
            >
              <ShimmerBlock className="aspect-[4/3] rounded-none" />
              <div className="space-y-2 p-3.5">
                <ShimmerBlock className="h-3 w-16" />
                <ShimmerBlock className="h-4 w-[90%]" />
                <ShimmerBlock className="h-3 w-[70%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
