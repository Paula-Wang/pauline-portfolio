import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { to: "/work", label: "Work" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "glass flex items-center justify-between rounded-full px-3 py-2 transition-all sm:px-4",
            scrolled && "shadow-lg shadow-black/10",
          )}
        >
          <Link to="/" className="group flex items-center gap-2 pl-1">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-full font-display text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, var(--color-glow-indigo), var(--color-glow-magenta))",
                color: "white",
              }}
            >
              PW
            </span>
            <span className="hidden font-display text-sm font-semibold sm:inline">
              Pauline Wang'ombe
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-full px-3 py-1.5 text-sm text-foreground bg-[var(--color-glass)]",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Pauline-Wangombe-CV.pdf"
              download
              className="hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-primary-foreground transition hover:opacity-90 sm:inline-flex"
              style={{
                background:
                  "linear-gradient(110deg, var(--color-glow-indigo), var(--color-primary), var(--color-glow-magenta))",
              }}
            >
              <Download className="h-3.5 w-3.5" />
              CV
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Open menu"
              className="glass inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-2 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition hover:bg-[var(--color-glass)] hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-xl px-3 py-2 text-sm text-foreground bg-[var(--color-glass)]",
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/Pauline-Wangombe-CV.pdf"
              download
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-primary-foreground"
              style={{
                background:
                  "linear-gradient(110deg, var(--color-glow-indigo), var(--color-primary), var(--color-glow-magenta))",
              }}
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
