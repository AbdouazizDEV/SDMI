export default function LocaleLoading() {
  return (
    <div className="mx-auto w-full max-w-7xl animate-pulse px-4 py-10 lg:px-6 lg:py-14">
      <div className="bg-muted mb-6 h-4 w-32 rounded-sm" />
      <div className="bg-muted mb-3 h-10 max-w-2xl rounded-sm" />
      <div className="bg-muted mb-8 h-5 max-w-3xl rounded-sm" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-muted/70 aspect-4/3 rounded-sm" />
        ))}
      </div>
    </div>
  );
}
