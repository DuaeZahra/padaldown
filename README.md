# PedalDown Technologies — website

Marketing site for PedalDown Technologies. Next.js (App Router) + TypeScript +
Tailwind CSS, fully static, no CMS, no backend, no analytics.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
```

## Where things live

```
app/                     Routes (App Router). One folder per page.
  page.tsx               Homepage
  work/page.tsx           /work index (filterable)
  work/[slug]/page.tsx     /work/<slug> case study, rendered from data
  about/page.tsx           /about
  contact/page.tsx         /contact, form in ContactForm.tsx
  sitemap.ts, robots.ts    Generated SEO files
  opengraph-image.tsx      Default OG image (also one per case study)
src/data/projects.ts      Every project. Single source of truth.
src/components/           Shared UI (header, footer, cards, the query console, etc.)
src/lib/site.ts           Site-wide constants: name, email, phone, location, nav links
```

## Editing copy

Most page copy lives directly in the `.tsx` files under `app/` — it's plain
JSX text, edit it in place. Site-wide values (email, phone, location) are in
`src/lib/site.ts` so they only need changing once.

## Adding or editing a project

Everything about a project — title, domain, numbers, stack, live link — is
one object in `src/data/projects.ts`. To add a project, copy an existing
object in the `PROJECTS` array and fill in the fields:

```ts
{
  slug: "your-project-slug",       // becomes /work/your-project-slug
  title: "Project Name",
  domain: "Healthcare",             // one of the Domain union values
  client: "Client Name",            // optional
  tagline: "One-line description.",
  buyer: "Who this is aimed at",
  problem: "The problem in the buyer's words.",
  approach: "What we built.",
  architecture: ["Step one", "Step two", "..."],
  metrics: [{ value: "92%", label: "accuracy on a balanced validation set" }],
  outcomes: ["Sentence-form outcome for the case study body."],
  stack: ["Python", "PyTorch"],
  liveUrl: "https://example.com",   // optional
  liveLabel: "example.com",         // optional, defaults to liveUrl
  featured: true,                   // optional — shows on the homepage (max 3 recommended)
}
```

The homepage, `/work`, `/work/[slug]`, the sitemap, and the domain filter all
read from this one array — nothing else needs to change. Set `featured: true`
on at most three projects; those are the ones shown in "Selected work" on the
homepage.

> Note: the original brief referenced 9 projects, but only 8 were specified
> with real facts and numbers. Rather than invent a 9th, the site ships with
> the 8 real ones. Add a 9th the same way once you have the details.

## The signature element (query console)

`src/components/QueryConsole.tsx` is the interactive keyword-vs-semantic
search demo in the hero. It runs entirely client-side against a small fixed
set of six example documents — no API calls, nothing to configure. The
"semantic" side is a hand-authored cosine-similarity calculation over topic
vectors (not a real embedding model), which is disclosed in the component's
own caption text. To change the example queries or documents, edit `DOCS`,
`KEYWORD_DICTIONARY`, and `EXAMPLES` at the top of that file.

## Contact form

The form in `/contact` posts to a Formspree-compatible endpoint. Until you
set one, it shows visitors a direct-email fallback instead of silently
discarding submissions.

To connect it:

1. Create a form at [formspree.io](https://formspree.io) (or any endpoint
   that accepts a `multipart/form-data` POST and returns JSON).
2. Copy `.env.local.example` to `.env.local`.
3. Set `NEXT_PUBLIC_FORM_ENDPOINT` to your endpoint URL.
4. On Vercel, add the same variable under Project Settings → Environment
   Variables before deploying.

See the `TODO` comment at the top of `app/contact/ContactForm.tsx`.

## Site URL

`NEXT_PUBLIC_SITE_URL` (also in `.env.local.example`) drives canonical URLs,
the sitemap, and Open Graph tags. Set it to the real deployed domain before
going live — it defaults to a placeholder.

## Deploying to Vercel

No configuration needed beyond environment variables:

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in Vercel — it auto-detects Next.js.
3. Add `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_FORM_ENDPOINT` under
   Environment Variables.
4. Deploy.

## Quality checks run during development

- **Lighthouse (mobile)**: 100 performance / 100 accessibility / 100 best
  practices / 100 SEO on `/`, `/work`, `/work/ai-dental-diagnosis`, `/about`,
  and `/contact`, measured against a production build.
- **axe-core**: zero WCAG 2 A/AA violations on the same five pages.
- **Manual**: full keyboard tab-through with visible focus rings; verified
  `prefers-reduced-motion` disables all transitions; verified no horizontal
  overflow at 1440 / 768 / 390px.
