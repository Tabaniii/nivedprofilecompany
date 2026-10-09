export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-xl focus:bg-foreground focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Skip to main content
    </a>
  );
}
