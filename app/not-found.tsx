import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] max-w-content flex-col items-start justify-center gap-4 py-24">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">404</span>
      <h1 className="text-display-lg font-medium tracking-tight">Page not found.</h1>
      <p className="text-muted">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="mt-2 inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
      >
        Back home
      </Link>
    </section>
  );
}
