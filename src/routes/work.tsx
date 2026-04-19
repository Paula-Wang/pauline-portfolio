import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Pauline Wang'ombe" },
      {
        name: "description",
        content:
          "Roles across software engineering, IT support, research, and IoT — Kenya and Estonia.",
      },
      { property: "og:title", content: "Work — Pauline Wang'ombe" },
      {
        property: "og:description",
        content:
          "Roles across software engineering, IT support, research, and IoT — Kenya and Estonia.",
      },
    ],
  }),
  component: Work,
});

type Tag =
  | "Java"
  | "Spring Boot"
  | "IT Support"
  | "Flutter"
  | "Power BI"
  | "Microsoft 365"
  | "User Research"
  | "UX"
  | "WordPress"
  | "Web Support"
  | "IT Support"
  | "IoT"
  | "Inventory Management";

interface Role {
  org: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tags: Tag[];
}

const roles: Role[] = [
  {
    org: "SGA Security",
    role: "IT Graduate Trainee",
    period: "2025 — Present",
    location: "Nairobi, Kenya",
    bullets: [
      "Develop and maintain 3 enterprise backend features using Java, Spring Boot, and MySQL, supporting operations across 2 countries and improving system reliability for daily business workflows.",
      "Build a mobile application using Flutter and Dart, integrating REST APIs to enable real-time data access and streamline internal workflows.",
      "Automate reporting workflows and Power BI dashboards using SQL-driven data, reducing manual reporting effort and improving data visibility for decision-making.",
      "Provide IT support to 50+ staff members within a 3-person IT support function embedded in a wider operations team, using Microsoft 365 Admin Center to manage access, resolve issues, and produce usage reports.",
    ],
    tags: ["Java", "Spring Boot", "Flutter", "Power BI", "Microsoft 365"],
  },
  {
    org: "Triumf Health",
    role: "Lead User Researcher",
    period: "2024",
    location: "Tallinn, Estonia",
    bullets: [
      "Developed and integrated 40 emotional intelligence questions into a mini game, enhancing emotional intelligence education for children aged 7-12.",
    ],
    tags: ["User Research", "UX"],
  },
  {
    org: "Angaza Elimu",
    role: "IoT Associate",
    period: "2024",
    location: "Nairobi, Kenya",
    bullets: [
      "Managed distribution and return of IoT components, ensuring proper inventory tracking and accountability among students, resulting in a 95% return rate of the components.",
    ],
    tags: ["IoT", "Inventory Management"],
  },
  {
    org: "@iLabAfrica",
    role: "Webmaster / IT Support",
    period: "2023",
    location: "Nairobi, Kenya",
    bullets: [
      "Managed ongoing updates to the @iLabAfrica WordPress website, keeping content current and aligned with institutional activities.",
      "Collaborated with all 6 departments to obtain and integrate content, resulting in a fully accurate and relevant website.",
      "Developed and tested website functionality by checking for bugs and ensuring proper user experience.",
      "Provided technical support for website-related issues, troubleshooting problems, and ensuring smooth operation.",
    ],
    tags: ["WordPress", "Web Support", "IT Support"],
  },
];

const tagColors: Record<Tag, string> = {
  "Java": "var(--color-glow-indigo)",
  "Spring Boot": "var(--color-glow-indigo)",
  "Flutter": "var(--color-glow-cyan)",
  "Power BI": "var(--color-accent)",
  "Microsoft 365": "var(--color-primary)",
  "IT Support": "var(--color-glow-cyan)",
  "User Research": "var(--color-glow-magenta)",
  "UX": "var(--color-glow-magenta)",
  "WordPress": "var(--color-glow-indigo)",
  "Web Support": "var(--color-glow-magenta)",
  "IoT": "var(--color-glow-cyan)",
  "Inventory Management": "var(--color-primary)",
};

function Work() {
  return (
    <PageShell
      eyebrow="Work"
      title={
        <>
          Building software <span className="text-gradient">& supporting systems</span>
        </>
      }
      intro="Experience across backend development, mobile applications, and IT support. Building features, resolving issues, and keeping systems running for real users."
    >
      <div className="space-y-4">
        {roles.map((r, i) => (
          <Reveal key={r.org} delay={i * 60}>
            <article className="glass-strong rounded-3xl p-6 transition hover:-translate-y-0.5 sm:p-8">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold sm:text-2xl">{r.org}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{r.role}</p>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {r.period} · {r.location}
                </p>
              </header>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ background: "var(--color-primary)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2.5 py-1 font-mono text-[11px]"
                    style={{
                      borderColor: `${tagColors[t]}55`,
                      color: tagColors[t],
                      background: `${tagColors[t]}12`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
