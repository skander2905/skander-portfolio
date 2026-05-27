import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Chip } from "@/components/ui/chip";
import { LinkInline } from "@/components/ui/link-inline";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I studied">
      <Reveal>
        <div className="grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {education.period}
            </div>
            <div className="mt-1 text-sm text-muted">{education.location}</div>
          </div>

          <div className="md:col-span-9">
            <h3 className="text-lg font-medium text-fg md:text-xl">
              <LinkInline href={education.url}>{education.school}</LinkInline>{" "}
              <span className="text-muted">· {education.shortName}</span>
            </h3>
            <p className="mt-2 text-base text-fg/85">
              {education.degree} — {education.specialization}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {education.description}
            </p>

            <div className="mt-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Selected coursework
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
