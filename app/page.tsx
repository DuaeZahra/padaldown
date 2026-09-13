import Link from "next/link";
import { AuroraBackdrop } from "@/src/components/AuroraBackdrop";
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
          className="relative overflow-hidden bg-terminal py-20 sm:py-28"
        >
          <AuroraBackdrop fade="both" />
          <Container className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-md">
              <h2 id="live-demo" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
                See the wedge, not just <em className="italic">hear</em> about it.
              </h2>
              <p className="mt-4 text-cream/75">
                Type a plain-language question. Keyword search fails on it. Semantic search —
                the same idea as a pgvector query inside Postgres — doesn&rsquo;t.
              </p>
            </div>
            <div className="flex-1">
              <QueryConsole />
            </div>
          </Container>
        </section>

        <section aria-labelledby="what-we-do" className="pt-20 pb-12 sm:pt-28 sm:pb-16">
          <Container className="max-w-2xl">
            <h2 id="what-we-do" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              What we <em className="italic">do</em>
            </h2>
            <p className="mt-4 text-cream/70">
              Two things, done deeply, instead of everything done at once.
            </p>
          </Container>
        </section>
        <WedgeCards />

        <section aria-labelledby="selected-work" className="bg-paper-raised py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <h2 id="selected-work" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
                  Selected <em className="italic">work</em>
                </h2>
                <p className="mt-4 text-cream/70">
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

        <section aria-labelledby="how-we-engage" className="pt-20 pb-12 sm:pt-28 sm:pb-16">
          <Container className="max-w-2xl">
            <h2 id="how-we-engage" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              How we <em className="italic">engage</em>
            </h2>
            <p className="mt-4 text-cream/70">
              Start small. A paid pilot, not a workshop. We do not publish prices here — book a
              call and we&rsquo;ll scope one.
            </p>
          </Container>
        </section>
        <EngagementLadder />

        <section aria-labelledby="other-work" className="bg-paper-raised py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <div className="max-w-2xl">
              <h2 id="other-work" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
                Other <em className="italic">work</em>
              </h2>
              <p className="mt-4 text-cream/70">The rest of the range.</p>
            </div>
            <ul className="flex flex-col divide-y divide-line border-y border-line">
              {OTHER_PROJECTS.map((project, i) => (
                <OtherWorkRow key={project.slug} project={project} delay={i * 50} />
              ))}
            </ul>
          </Container>
        </section>

        <ParallaxNumbers />

        <section aria-labelledby="stack" className="py-16 sm:py-24">
          <Container className="flex flex-col gap-8">
            <h2 id="stack" className="font-display text-3xl leading-tight text-cream sm:text-4xl">
              Stack
            </h2>
          </Container>
          <StackMarquee />
        </section>

        <section
          aria-labelledby="contact-cta"
          className="relative overflow-hidden bg-terminal py-20 sm:py-28"
        >
          {/* Bookends the page against the hero it opened with. */}
          <AuroraBackdrop fade="both" />
          <Container className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="contact-cta" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
                Let&rsquo;s talk about{" "}
                your system.
              </h2>
              <p className="mt-4 max-w-md text-cream/75">
                Tell us what you&rsquo;re trying to build. We&rsquo;ll tell you honestly whether
                a pilot makes sense.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-cream px-7 py-3.5 text-center text-sm text-terminal transition-colors hover:bg-white"
              >
                Book a call
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="text-center font-mono text-sm text-cream/70 transition-colors hover:text-cream"
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
