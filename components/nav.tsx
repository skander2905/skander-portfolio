"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" }
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-200",
        scrolled ? "border-b border-border bg-bg/70 backdrop-blur-md" : "border-b border-transparent"
      )}
    >
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-tight">
          skander<span className="text-muted">.abid</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "dark";
  const next = current === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} mode`}
      onClick={() => setTheme(next)}
      className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted hairline transition-colors hover:text-fg"
    >
      {/* simple sun/moon */}
      {current === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
