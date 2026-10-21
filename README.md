# PedalDown Technologies: services website (Desgy template)

A services site for PedalDown Technologies, built on the free
[Desgy Next.js + Tailwind template](https://github.com/GetNextjsTemplates/desgy-nextjs-tailwind-landing-page-template-free).

## Run locally

```bash
npm install
npm run dev
```

## Editing content

Most copy (services, projects, tech stack, why-us, results, nav and footer links)
lives in `src/app/api/data/route.ts`. The hero, FAQ and contact sections are
written directly in `src/app/components/Home/*`.

The contact form opens the visitor's email client addressed to
`pedaldowntechnologies@gmail.com` (see `src/app/components/Home/Contact/index.tsx`).
