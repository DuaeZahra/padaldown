import Link from "next/link";
import { CinematicBackdrop } from "@/src/components/CinematicBackdrop";
import { Container } from "@/src/components/Container";
import { Hero } from "@/src/components/Hero";
import { ProofStrip } from "@/src/components/ProofStrip";
import { WedgeCards } from "@/src/components/WedgeCards";
import { ProjectCard } from "@/src/components/ProjectCard";
import { EngagementLadder } from "@/src/components/EngagementLadder";
import { ParallaxNumbers } from "@/src/components/ParallaxNumbers";
import { StackMarquee } from "@/src/components/StackMarquee";
import { QueryConsole } from "@/src/components/QueryConsole";
import { Reveal } from "@/src/components/Reveal";
import { OtherWorkRow } from "@/src/components/OtherWorkRow";
import { ShineText } from "@/src/components/ShineText";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/src/data/projects";
import { SITE } from "@/src/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="main-content">
        <ProofStrip />

        {/* The signature demo gets hero treatment — it's the one thing on the
            page a visitor is meant to touch. */}
        <section
          aria-labelledby="live-demo"
          className="page-glow relative overflow-hidden bg-terminal py-20 sm:py-28"
        >
          <CinematicBackdrop
            overlayClassName="bg-gradient-to-b from-black/80 via-black/65 to-black/80"
            fade="both"
          />
          <Container className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-md">
              <h2 id="live-demo" className="font-display text-3xl font-semibold text-white sm:text-4xl">
                See the wedge, not just hear about it.
              </h2>
              <p className="mt-3 text-white/80">
                Type a plain-language question. Keyword search fails on it. Semantic search —
                the same idea as a pgvector query inside Postgres — doesn&rsquo;t.
              </p>
            </div>
            <div className="flex-1">
              <QueryConsole />
            </div>
          </Container>
        </section>

        <section aria-labelledby="what-we-do" className="py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h2 id="what-we-do" className="font-display text-3xl font-semibold text-ink">
                What we do
              </h2>
              <p className="mt-3 text-ink-muted">
                Two things, done deeply, instead of everything done at once.
              </p>
            </div>
            <WedgeCards />
          </Container>
        </section>

        <section aria-labelledby="selected-work" className="border-t border-line bg-paper-raised py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h2 id="selected-work" className="font-display text-3xl font-semibold text-ink">
                  Selected work
                </h2>
                <p className="mt-3 text-ink-muted">
                  Three systems in production, with the numbers to show for it.
                </p>
              </div>
              <Link href="/work" className="font-mono text-sm text-steel hover:text-steel-dark">
                All work →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {FEATURED_PROJECTS.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="how-we-engage" className="py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h2 id="how-we-engage" className="font-display text-3xl font-semibold text-ink">
                How we engage
              </h2>
              <p className="mt-3 text-ink-muted">
                Start small. A paid pilot, not a workshop. We do not publish prices here — book a
                call and we&rsquo;ll scope one.
              </p>
            </div>
            <EngagementLadder />
          </Container>
        </section>

        <section aria-labelledby="other-work" className="border-t border-line bg-paper-raised py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h2 id="other-work" className="font-display text-3xl font-semibold text-ink">
                Other work
              </h2>
              <p className="mt-3 text-ink-muted">The rest of the range.</p>
            </div>
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {OTHER_PROJECTS.map((project, i) => (
                <OtherWorkRow key={project.slug} project={project} delay={i * 50} />
              ))}
            </ul>
          </Container>
        </section>

        <ParallaxNumbers />

        <section aria-labelledby="stack" className="border-t border-line py-16 sm:py-24">
          <Container className="flex flex-col gap-8">
            <h2 id="stack" className="font-display text-2xl font-semibold text-ink">
              Stack
            </h2>
          </Container>
          <StackMarquee />
        </section>

        <section
          aria-labelledby="contact-cta"
          className="page-glow relative overflow-hidden bg-terminal py-20 sm:py-28"
        >
          {/* Bookends the page against the hero it opened with. */}
          <CinematicBackdrop
            overlayClassName="bg-gradient-to-b from-black/80 via-black/60 to-black/80"
            fade="both"
          />
          <Container className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="contact-cta" className="font-display text-3xl font-semibold text-white sm:text-4xl">
                Let&rsquo;s talk about{" "}
                <ShineText>your system.</ShineText>
              </h2>
              <p className="mt-3 max-w-md text-white/80">
                Tell us what you&rsquo;re trying to build. We&rsquo;ll tell you honestly whether
                a pilot makes sense.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-center font-mono text-sm text-terminal transition-colors hover:bg-steel-dark"
              >
                Book a call
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="text-center font-mono text-sm text-white/75 transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
