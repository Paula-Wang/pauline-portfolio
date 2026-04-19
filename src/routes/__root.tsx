import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GradientBackdrop } from "@/components/GradientBackdrop";

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='light'){document.documentElement.classList.add('light');}}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <GradientBackdrop />
      <div className="glass-strong relative z-10 max-w-md rounded-3xl p-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-gradient">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That page wandered off. Let's get you back home.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-primary-foreground"
          style={{
            background:
              "linear-gradient(110deg, var(--color-glow-indigo), var(--color-primary), var(--color-glow-magenta))",
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Pauline Wang'ombe — Software Engineer & IT Systems" },
      {
        name: "description",
        content:
          "Portfolio of Pauline Wang'ombe — backend, mobile, and IT systems work across Kenya and Estonia.",
      },
      { name: "author", content: "Pauline Wang'ombe" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="grain relative min-h-screen">
      <GradientBackdrop />
      <Nav />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
