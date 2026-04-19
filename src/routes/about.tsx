import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Award, Languages } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pauline Wang'ombe" },
      {
        name: "description",
        content:
          "Education from Strathmore, Tallinn, and Brno; certifications from AWS, McKinsey, and more.",
      },
      { property: "og:title", content: "About — Pauline Wang'ombe" },
      {
        property: "og:description",
        content:
          "Education from Strathmore, Tallinn, and Brno; certifications from AWS, McKinsey, and more.",
      },
    ],
  }),
  component: About,
});

const education = [
  { school: "Strathmore University", detail: "Bachelor of Business Information Technology(BBIT)", place: "Nairobi, Kenya" },
  { school: "Tallinn University", detail: "Digital Explorers II Program covering Application Programming and Interaction Design", place: "Tallinn, Estonia" },
  { school: "Brno University of Technology", detail: "Brno International Summer School in Information Technology covering Cyber Security and Forensics ", place: "Brno, Czech Republic" },
];

const tools = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];


function About() {
  return (
    <PageShell
      eyebrow="About"
      title={
        <>
          From Nairobi <span className="text-gradient">to Tallinn</span>
        </>
      }
      intro="I studied Business Information Technology and had the opportunity to learn in different environments. From Nairobi to Brno to Tallinn.

Those experiences exposed me to different ways of building and using technology, which is what led me toward working across both development and IT support.

I have since worked on backend systems, mobile applications, and day-to-day system support, often in real operational settings where reliability matters just as much as building new features."
    >
      <h3 className="mb-6 text-lg font-semibold text-foreground">
        Education & Certifications
      </h3>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Reveal delay={80}>
          <section className="glass-strong h-full rounded-3xl p-7">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-glow-indigo), var(--color-primary))",
                }}
              >
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <h2 className="font-display text-lg font-semibold">Education</h2>
            </div>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.detail}</p>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {e.place}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section className="glass-strong h-full rounded-3xl p-7">
            <div className="mb-5 flex items-center gap-3">
              <div
                className="grid h-9 w-9 place-items-center rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-glow-cyan), var(--color-glow-magenta))",
                }}
              >
                <Award className="h-4 w-4 text-white" />
              </div>
              <h2 className="font-display text-lg font-semibold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition"
                >
                  <img
                    src={tool.icon}
                    className={`h-9 w-9 ${tool.name === "GitHub" ? "invert" : ""}`}
                  />
                  <span className="text-sm font-medium text-foreground">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            
          </section>
        </Reveal>
      </div>
    </PageShell>
  );
}
