# Skander Abid — Portfolio

Personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

The site is designed for Vercel.

1. Push this repo to GitHub.
2. Import the repo on https://vercel.com/new.
3. Framework preset: **Next.js**. No env vars required.
4. Set a custom domain in **Project → Settings → Domains** and update `site.url` in `lib/data.ts`.

## Structure

```
app/                Next.js App Router (layout, page, metadata, robots, sitemap)
components/         Sections + small UI primitives
components/ui/      Section, Chip, Reveal
lib/                Site data and helpers
```

Content lives in `lib/data.ts` — edit there to update copy, experience, projects, and stack.
