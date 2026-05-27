import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { experience } from "@/lib/data";

export function Work() {
  return (
    <Section id="work" eyebrow="Experience" title="Where I've worked">
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className="group relative">
            <Reveal delay={i * 0.03}>
              <div className="grid gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-10 md:py-10">
                <div className="md:col-span-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {job.period}
                  </div>
                  {job.location && (
                    <div className="mt-1 text-sm text-muted">{job.location}</div>
                  )}
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-medium text-fg md:text-xl">
                    {job.role}{" "}
                    <span className="text-muted">
                      ·{" "}
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:text-fg hover:decoration-fg/50"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </span>
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-fg/85">{job.summary}</p>
                  {job.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span aria-hidden className="mt-2 inline-block h-px w-3 shrink-0 bg-border" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.stack.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
