type PageMainProps = {
  children?: React.ReactNode;
  className?: string;
};

export function PageMain({ children, className }: PageMainProps) {
  return (
    <main
      id="main-content"
      className={`flex flex-1 flex-col ${className ?? ""}`}
    >
      {children}
    </main>
  );
}
