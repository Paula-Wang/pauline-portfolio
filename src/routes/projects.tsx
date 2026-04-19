import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Pauline Wang'ombe" },
      {
        name: "description",
        content:
          "Selected projects: Cognitive Load Butler, Budget Buddy, and an IoT irrigation system.",
      },
      { property: "og:title", content: "Projects — Pauline Wang'ombe" },
      {
        property: "og:description",
        content:
          "Selected projects: Cognitive Load Butler, Budget Buddy, and an IoT irrigation system.",
      },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    name: "Cognitive Load Butler",
    blurb:
      "A Flutter app for tracking and managing cognitive workload and mental fatigue throughout the day.",
    stack: ["Flutter", "Dart", "Servepod"],
    accent: "var(--color-glow-indigo)",
    link: "https://github.com/Paula-Wang/cognitive_load_butler",
  },
  {
    name: "Budget Buddy",
    blurb:
      "A web app for tracking expenses, categorising spend, and managing monthly budgets.",
    stack: ["NextJs", "React", "JavaScript", "Supabase"],
    accent: "var(--color-glow-cyan)",
    link: "https://github.com/Paula-Wang/budget-buddy",
  },
  {
    name: "IoT Irrigation System",
    blurb:
      "An IoT system that monitors soil moisture and automates irrigation using microcontrollers.",
    stack: ["IoT", "Microcontrollers", "Sensors"],
    accent: "var(--color-glow-magenta)",
    link: "https://github.com/Paula-Wang/135859",
  },
];

function Projects() {
  return (
    <PageShell
      eyebrow="Projects"
      title={
        <>
          Featured <span className="text-gradient">Work</span>
        </>
      }
      intro="Projects built to apply my skills. From backend systems to practical tools."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article
              onClick={() => window.open(p.link, "_blank")}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") window.open(p.link, "_blank");
              }}
              className="glass-strong group relative h-full overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 cursor-pointer"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-30 blur-3xl transition group-hover:opacity-60"
                style={{ background: p.accent }}
              />
              <div className="relative">
                <h2 className="font-display text-xl font-semibold">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[var(--color-glass-border)] px-2.5 py-1 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
