import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface PageShellProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:pt-36">
      <Reveal>
        <header className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {intro}
            </p>
          )}
        </header>
      </Reveal>
      {children}
    </div>
  );
}
