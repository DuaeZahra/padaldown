import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import { Container } from "@/src/components/Container";
import { CountUpMetric } from "@/src/components/CountUpMetric";
import { PROJECTS, getProjectBySlug } from "@/src/data/projects";
import { DOMAIN_STYLES } from "@/src/lib/domain-colors";
import { SITE } from "@/src/lib/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.tagline,
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const style = DOMAIN_STYLES[project.domain];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Work", item: `${SITE.url}/work` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${SITE.url}/work/${project.slug}`,
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Same backdrop as the hero and the other page headers. Left-aligned
          rather than centred, because this one leads with breadcrumbs. */}
      <section className="relative flex min-h-[55vh] flex-col justify-center overflow-hidden pt-28 pb-16 sm:min-h-[60vh] sm:pt-32 sm:pb-20">
        <Container className="relative z-10 flex flex-col gap-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Work", href: "/work" },
              { label: project.title },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide ${style.text}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
              {project.domain}
            </span>
            {project.client ? (
              <span className="text-sm text-cream/70">{project.client}</span>
            ) : null}
          </div>
          <h1 className="font-display text-5xl leading-[1.03] tracking-tight text-cream sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-cream/75">{project.tagline}</p>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-steel px-4 py-2 font-mono text-sm text-steel transition-colors hover:bg-steel-tint"
            >
              {project.liveLabel ?? project.liveUrl} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </Container>
      </section>

      <Container className="flex flex-col gap-12 pt-8 pb-14 sm:pt-10 sm:pb-20">
        <div className={`flex flex-wrap gap-x-10 gap-y-4 border-t-2 border-b border-b-line py-8 ${style.border}`}>
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <CountUpMetric value={m.value} className={`font-mono text-3xl font-semibold ${style.text}`} />
              <span className="text-sm text-ink-muted">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-10">
            <section>
              <h2 className="font-display text-2xl text-cream">The problem</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.problem}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-cream">What we built</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{project.approach}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-cream">Architecture</h2>
              <ol className="mt-3 flex flex-col gap-2">
                {project.architecture.map((step, i) => (
                  <li key={step} className="flex items-baseline gap-3 font-mono text-sm text-ink">
                    <span className="text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="font-display text-2xl text-cream">Outcome</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-2 leading-relaxed text-ink-muted">
                    <span className={style.text} aria-hidden="true">
                      →
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                Buyer
              </h2>
              <p className="mt-2 text-sm text-ink-muted">{project.buyer}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-wide text-ink-soft">Stack</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-sm border border-line px-2.5 py-1 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="border-t border-line pt-10">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-cream px-7 py-3.5 text-sm text-terminal transition-colors hover:bg-white"
          >
            Talk to us about something like this
          </Link>
        </div>
      </Container>
    </article>
  );
}
