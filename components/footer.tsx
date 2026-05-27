import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-3 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p className="font-mono">© {new Date().getFullYear()} {site.name}</p>
        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-fg">LinkedIn</a>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">Email</a>
        </div>
      </div>
    </footer>
  );
}
