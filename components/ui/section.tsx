import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: Props) {
  return (
    <section id={id} className={cn("border-t border-border", className)}>
      <div className="container max-w-content py-20 md:py-28">
        {(eyebrow || title) && (
          <header className="mb-12 flex flex-col gap-2 md:mb-16">
            {eyebrow && (
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-display-lg font-medium text-fg">{title}</h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
