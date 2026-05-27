import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LinkInline } from "@/components/ui/link-inline";
import { education } from "@/lib/data";

const COGNIRA_URL = "https://www.cognira.com";

export function About() {
  return (
    <Section id="about" eyebrow="About">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <div className="space-y-5 text-base leading-relaxed text-fg/90 md:text-lg">
            <p>
              I'm a software engineer focused on the frontend. I work in React, Next.js, and
              TypeScript, building interfaces for products that need to be fast, predictable,
              and easy to evolve.
            </p>
            <p>
              I think about UI as a system — how components compose, where state lives, how
              data flows in, and how the whole thing degrades when something goes wrong. I'm
              comfortable across the stack and write Node and SQL when the work calls for it,
              but my best work happens close to the product surface.
            </p>
            <p>
              Right now I'm building PromoAI at{" "}
              <LinkInline href={COGNIRA_URL}>Cognira</LinkInline>, a retail-AI platform used
              by enterprise pricing and promotion teams.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="md:col-span-4">
          <div className="flex flex-col gap-6 rounded-lg border border-border bg-surface/40 p-5">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Education
              </div>
              <div className="mt-2 text-sm text-fg">
                <LinkInline href={education.url}>{education.school}</LinkInline>
              </div>
              <div className="mt-0.5 text-sm text-muted">{education.degree}</div>
              <div className="mt-0.5 text-xs text-muted">
                {education.specialization} · {education.period}
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Currently
              </div>
              <div className="mt-2 text-sm text-fg">
                Software Engineer at{" "}
                <LinkInline href={COGNIRA_URL}>Cognira</LinkInline>
              </div>
              <div className="text-sm text-muted">Working on PromoAI · since Sep 2024</div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
