import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, Code2, Headphones } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pauline Wang'ombe — Software Engineer & IT Systems" },
      {
        name: "description",
        content:
          "Backend, mobile, and IT systems work — building software and supporting the people who use it.",
      },
      { property: "og:title", content: "Pauline Wang'ombe — Software Engineer & IT Systems" },
      {
        property: "og:description",
        content:
          "Backend, mobile, and IT systems work — building software and supporting the people who use it.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "50+", label: "staff supported" },
  { value: "3+", label: "Backend Features Built" },
  { value: "10+", label: "REST APIs Intergrated" },
  { value: "2", label: "countries worked in" },
];

const featured = [
  {
    title: "SGA Security",
    role: "IT Graduate Trainee",
    blurb: "Java + Spring Boot backend, Flutter app, Power BI automation, IT support.",
  },
  {
    title: "Triumf Health · Estonia",
    role: "Lead User Researcher",
    blurb: "Designed 40+ Emotional Intelligence questions for a children's mental-health game.",
  },
  {
    title: "@iLabAfrica",
    role: "Webmaster / IT Support",
    blurb: "Maintained the institutional site and supported staff & students.",
  },
];

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-12 pt-32 sm:pt-40">
      {/* HERO */}
      <Reveal>
        <section className="relative">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Nairobi · SOFTWARE ENGINEER & IT SYSTEMS
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[1.02] sm:text-7xl md:text-[5.5rem]">
            Pauline <br className="sm:hidden" />
            <span className="text-gradient">Wang'ombe</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a software engineer working across backend systems, mobile apps, and application support. 
            I use Java, Spring Boot, REST APIs, and SQL to build features, resolve production issues, and keep systems used by real users running smoothly.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{
                background:
                  "linear-gradient(110deg, var(--color-glow-indigo), var(--color-primary), var(--color-glow-magenta))",
              }}
            >
              View work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <a
              href="/Pauline Wang'ombe CV 1.pdf"
              download
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition hover:scale-[1.02]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </section>
      </Reveal>

      {/* TWO PILLARS */}
      <section className="mt-24 grid gap-4 md:grid-cols-2">
        <Reveal delay={80}>
          <div className="glass-strong h-full rounded-3xl p-7">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-glow-indigo), var(--color-primary))",
                }}
              >
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="font-display text-xl font-semibold">Building software</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Backend services in Java and Spring Boot, mobile apps in Flutter, and REST APIs backed by SQL for real operational workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["Java", "Spring Boot", "Flutter", "REST APIs", "SQL", "Git"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-glass-border)] px-2.5 py-1 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="glass-strong h-full rounded-3xl p-7">
            <div className="flex items-center gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-glow-cyan), var(--color-glow-magenta))",
                }}
              >
                <Headphones className="h-5 w-5 text-white" />
              </div>
              <h2 className="font-display text-xl font-semibold">Supporting systems & people</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Day-to-day IT support for 50+ staff, Microsoft 365 administration, software troubleshooting, and Power BI dashboards for operational reporting.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5 font-mono text-[11px]">
              {["IT Support", "Microsoft 365", "Power BI", "Troubleshooting"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[var(--color-glass-border)] px-2.5 py-1 text-muted-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </Reveal>
      </section>

      {/* STATS */}
      <section className="mt-16">
        <Reveal>
          <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-[var(--color-glass)] px-5 py-7 text-center">
                <div className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FEATURED */}
      <section className="mt-20">
        <Reveal>
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Selected work
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
                Where I've been
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted-foreground transition hover:text-foreground sm:inline-flex"
            >
              All roles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <Link
                to="/work"
                className="glass group block h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[var(--color-primary)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {f.role}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-primary opacity-0 transition group-hover:opacity-100">
                  Read more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
