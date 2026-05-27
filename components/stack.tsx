import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { stack } from "@/lib/data";

export function Stack() {
  const groups = Object.entries(stack);
  return (
    <Section id="stack" eyebrow="Stack" title="Tools I reach for">
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(([label, items], i) => (
          <Reveal key={label} delay={i * 0.03}>
            <div>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                {label}
              </div>
              <ul className="space-y-1.5 text-sm text-fg/90">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
