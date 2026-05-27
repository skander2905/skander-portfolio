import { cn } from "@/lib/utils";

export function LinkInline({
  href,
  children,
  className,
  external = true
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:text-fg hover:decoration-fg/50",
        className
      )}
    >
      {children}
    </a>
  );
}
