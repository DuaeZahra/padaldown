# PedalDown Technologies website

The marketing site for **PedalDown Technologies**, an AI and software
engineering firm. It presents the company's services, flagship projects,
open-source and research work, technology stack, and a contact form.

Built with Next.js, React and Tailwind CSS, starting from the free
[Desgy landing page template](https://github.com/GetNextjsTemplates/desgy-nextjs-tailwind-landing-page-template-free).
Deployed on Vercel.

## Tech stack

| | |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI | Headless UI (FAQ accordion), react-slick (tech stack carousel) |
| Animation | Framer Motion, AOS |
| Icons | Iconify, with the Tabler icons used on the site bundled locally |

## Getting started

Requires Node.js 18.18 or later (Node 22 recommended).

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint the project
```

## Page sections

The home page (`src/app/page.tsx`) renders these sections in order. Each lives
in `src/app/components/Home/<Folder>/index.tsx`.

| Section | Folder | Anchor |
| --- | --- | --- |
| Hero | `Hero` | |
| Services | `AboutUs` | `#Services` |
| Quote from the Head of Sales | `Dedicated` | |
| Who we are | `Digital` | |
| Flagship projects | `Projects` | `#Projects` |
| Measurable results | `Results` | |
| Open source and research | `Beliefs` | `#OpenSource` |
| Technology stack | `Work` | `#Stack` |
| Why choose us | `WhyUs` | `#WhyUs` |
| FAQ | `FAQ` | `#FAQ` |
| Contact | `Contact` | `#Contact` |

The header and footer are in `src/app/components/Layout/`.

## Editing content

Most of the site's content is plain data in one file,
**`src/app/api/data/route.ts`**:

| Data | Used by |
| --- | --- |
| `headerData` | Header navigation links |
| `Aboutdata` | Services cards |
| `ProjectsData` | Project cards (title, domain, stack, highlights, optional live link) |
| `ResultsData` | Results figures |
| `WorkData` | Technology stack carousel |
| `WhyUsData` | Why choose us cards |
| `FooterLinksData` | Footer link columns |

The components fetch this data from `/api/data` at runtime. The types for each
list are in `src/app/types/`.

Text that is written directly in a component:

- **Hero, Who we are, quote, open source and research:** the matching component folder above.
- **FAQ questions and answers:** the `faqs` array in `FAQ/index.tsx`.
- **Page title and description:** `metadata` in `src/app/page.tsx`.

### Images

Images live in `public/images/`. The Head of Sales photo is
`public/images/dedicated/head-of-sales.webp`.

### Icons

Icons come from the [Tabler](https://tabler.io/icons) set, referenced by name
such as `tabler:brain`. Only the icons the site uses are bundled, in
`src/utils/icons.ts`, so they render without calling the Iconify API. To use a
new icon, add it to that file; otherwise it falls back to loading from the
Iconify API in the browser.

### Contact form

The form opens the visitor's email app with a message addressed to
**pedaldowntechnologies@gmail.com**. To change the address, edit
`CONTACT_EMAIL` in `src/app/components/Home/Contact/index.tsx`. The same
address also appears in the footer (`src/app/components/Layout/Footer/index.tsx`).

## Project structure

```
public/images/            Static images
src/app/
  api/data/route.ts       Site content (see "Editing content")
  components/Home/        Home page sections
  components/Layout/      Header and footer
  components/Skeleton/    Loading placeholders
  types/                  TypeScript types for the content data
  globals.css             Tailwind theme (colors, sizes, base typography)
  layout.tsx              Root layout and font
  page.tsx                Home page and metadata
src/utils/                AOS setup and the bundled icon set
```

Brand colors and other theme values are defined in the `@theme` block at the
top of `src/app/globals.css`.

## Deployment

The repository is connected to Vercel. Every push to `main` deploys to
production automatically; check the Vercel dashboard or the commit status on
GitHub to see whether a deploy succeeded.

`next`, `react` and `react-dom` are pinned to exact patched versions. Vercel
blocks deployments that use Next.js or React versions affected by known
security vulnerabilities, so keep these packages up to date when upgrading.

## Credits

Based on the [Desgy template](https://github.com/GetNextjsTemplates/desgy-nextjs-tailwind-landing-page-template-free)
by GetNextJsTemplates.
