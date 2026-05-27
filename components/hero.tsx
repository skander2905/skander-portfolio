"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }
  });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" aria-hidden />
      <div className="container max-w-content pb-24 pt-20 md:pb-32 md:pt-28">
        <motion.div {...fade(0)} className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          Skander Abid · Software Engineer
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          className="max-w-3xl text-display-xl font-medium tracking-tight text-fg"
        >
          I build product interfaces in React, Next.js,
          <span className="text-muted"> and TypeScript.</span>
        </motion.h1>

        <motion.p {...fade(0.12)} className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg">
          Software engineer focused on the frontend. I care about UI architecture, component
          systems, and the small details that make a product feel finished — and I'm
          comfortable reaching into the backend when the problem needs it.
        </motion.p>

        <motion.div {...fade(0.2)} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-fg hairline transition-colors hover:bg-surface"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-2 py-2.5 text-sm text-muted transition-colors hover:text-fg"
          >
            View work →
          </a>
        </motion.div>

        <motion.dl
          {...fade(0.28)}
          className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 md:grid-cols-4"
        >
          <Meta label="Focus" value="Frontend / Product" />
          <Meta label="Stack" value="React · TS · Next.js" />
          <Meta label="Based in" value={site.location} />
          <Meta label="Currently" value="Cognira" />
        </motion.dl>
      </div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{label}</dt>
      <dd className="text-sm text-fg">{value}</dd>
    </div>
  );
}
