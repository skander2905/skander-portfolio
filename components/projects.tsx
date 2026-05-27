import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Things I've built">
      <div className="grid gap-5 md:grid-cols-1">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.04}>
            <article className="group relative overflow-hidden rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-fg/20 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span>{p.year}</span>
                    <span aria-hidden>·</span>
                    <span>Side project</span>
                  </div>
                  <h3 className="text-2xl font-medium text-fg md:text-3xl">{p.name}</h3>
                  <p className="mt-2 text-base text-fg/85">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-fg/85">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span aria-hidden className="mt-2 inline-block h-px w-3 shrink-0 bg-fg/30" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-fg underline-offset-4 transition-colors hover:underline"
                      >
                        {l.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
