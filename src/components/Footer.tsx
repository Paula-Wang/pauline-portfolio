import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-glass-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold">Pauline Wang'ombe</p>
          <p className="mt-1 font-mono text-xs text-muted-foreground">
            Nairobi, Kenya · Software Engineer · © {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
          <Link to="/work" className="transition hover:text-foreground">Work</Link>
          <Link to="/projects" className="transition hover:text-foreground">Projects</Link>
          <Link to="/about" className="transition hover:text-foreground">About</Link>
          <Link to="/contact" className="transition hover:text-foreground">Contact</Link>
          <a
            href="https://github.com/Paula-Wang"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>

        </div>
      </div>
    </footer>
  );
}
