import { createFileRoute } from "@tanstack/react-router";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Pauline Wang'ombe" },
      {
        name: "description",
        content: "Get in touch by email or LinkedIn.",
      },
      { property: "og:title", content: "Contact — Pauline Wang'ombe" },
      { property: "og:description", content: "Get in touch by email or LinkedIn." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    label: "Email",
    handle: "Send me an email",
    href: "https://mail.google.com/mail/?view=cm&to=nimopaula8@gmail.com",
    Icon: Mail,
    accent: "var(--color-glow-indigo)",
  },
  {
    label: "LinkedIn",
    handle: "in/pauline-wangombe",
    href: "https://www.linkedin.com/in/pauline-wang-ombe-4b6807252/",
    Icon: Linkedin,
    accent: "var(--color-glow-magenta)",
  },
];

function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title={
        <>
          Let's <span className="text-gradient">talk</span>
        </>
      }
      intro="If you would like to connect or discuss a project, feel free to reach out."
    >
      <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-3xl">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 80}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass-strong group relative block h-full overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-30 blur-3xl transition group-hover:opacity-70"
                style={{ background: c.accent }}
              />
              <div className="relative flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center rounded-full"
                    style={{ background: c.accent }}
                  >
                    <c.Icon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 font-display text-base font-medium">{c.handle}</p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
