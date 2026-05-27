import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <Reveal>
        <div className="flex flex-col gap-8">
          <h2 className="text-display-lg font-medium tracking-tight">
            Want to talk?
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Always happy to discuss frontend architecture, product engineering,
            or an interesting problem. Email is the fastest way to reach me.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {site.email}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-fg hairline transition-colors hover:bg-surface"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-fg hairline transition-colors hover:bg-surface"
            >
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
