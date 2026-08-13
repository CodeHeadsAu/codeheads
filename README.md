# CodeHeads

Marketing site for CodeHeads — custom websites & web apps. Next.js (App Router), TypeScript, Tailwind CSS, hosted on Vercel.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui (Base UI)
- react-hook-form + zod (contact form validation)
- Resend (contact form email)
- pnpm

## Getting started

```bash
pnpm install
cp .env.local.example .env.local   # add RESEND_API_KEY to enable the contact form
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Without `RESEND_API_KEY` set, the contact form's submit endpoint returns a clean
error to the visitor and logs why — it never throws or breaks the page.

## Pages

- `/` — Home
- `/services` — Services
- `/portfolio` — Portfolio index
- `/portfolio/[slug]` — Case study detail, sourced from `src/lib/portfolio.ts`
- `/contact` — Contact form

## Adding a new case study

Add an entry to the `caseStudies` array in `src/lib/portfolio.ts`. The
portfolio index and `/portfolio/[slug]` detail page are both driven from
that array — no other changes needed.

## Deploy

Push to GitHub and import the repo in Vercel. Add `RESEND_API_KEY` (and
optionally `RESEND_FROM_EMAIL`) as environment variables in the Vercel
project settings.
