import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "Trivon Ventures — Creator-led user adoption for tech products" },
      { name: "description", content: "Trivon Ventures partners with India's top tech voices to drive real user adoption for ambitious tech products." },
      { name: "author", content: "Trivon Ventures" },
      { property: "og:title", content: "Trivon Ventures — Creator-led user adoption for tech products" },
      { property: "og:description", content: "Trivon Ventures partners with India's top tech voices to drive real user adoption for ambitious tech products." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@trivonventures" },
      { name: "twitter:title", content: "Trivon Ventures — Creator-led user adoption for tech products" },
      { name: "twitter:description", content: "Trivon Ventures partners with India's top tech voices to drive real user adoption for ambitious tech products." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/gzkiSTeunAXjHXGU5ahMtxdqNbJ3/social-images/social-1777366347258-Trivon_Logo.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/gzkiSTeunAXjHXGU5ahMtxdqNbJ3/social-images/social-1777366347258-Trivon_Logo.webp" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Outlet,
  notFoundComponent: NotFoundComponent,
});
