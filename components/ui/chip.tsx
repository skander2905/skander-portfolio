import { cn } from "@/lib/utils";

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
