import Link from "next/link";
import { Container } from "@/src/components/Container";
import { Hero } from "@/src/components/Hero";
import { Capabilities } from "@/src/components/Capabilities";
import { ProjectCard } from "@/src/components/ProjectCard";
import { EngagementLadder } from "@/src/components/EngagementLadder";
import { ParallaxNumbers } from "@/src/components/ParallaxNumbers";
import { Reveal } from "@/src/components/Reveal";
import { OtherWorkRow } from "@/src/components/OtherWorkRow";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/src/data/projects";
import { SITE } from "@/src/lib/site";

export default function Home() {
  return (
    <>
      <Hero />

      <main id="main-content">
        <section aria-labelledby="what-we-do" className="pt-20 pb-12 sm:pt-28 sm:pb-16">
          <Container className="max-w-2xl">
            <h2 id="what-we-do" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
              What we <em className="italic">do</em>
            </h2>
            <p className="mt-4 text-cream/70">
              Three groups of work, and the projects that prove each one.
            </p>
          </Container>
        </section>
        <Capabilities />

        <section aria-labelledby="selected-work" className="bg-paper-raised/70 py-16 sm:py-24">
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
              Start small. A paid pilot, not a workshop. We do not publish prices here. Book a
              call and we&rsquo;ll scope one.
            </p>
          </Container>
        </section>
        <EngagementLadder />

        <section aria-labelledby="other-work" className="bg-paper-raised/70 py-16 sm:py-24">
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

        <section
          aria-labelledby="contact-cta"
          className="relative overflow-hidden py-20 sm:py-28"
        >
          {/* Bookends the page against the hero it opened with. */}
          <Container className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="contact-cta" className="font-display text-4xl leading-tight text-cream sm:text-5xl">
                Let&rsquo;s talk about <em className="italic">your system</em>.
              </h2>
              <p className="mt-4 max-w-md text-cream/75">
                Tell us what you&rsquo;re trying to build. We&rsquo;ll tell you honestly whether
                a pilot makes sense.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-cream px-7 py-3.5 text-center text-sm text-terminal transition-colors hover:bg-white"
                >
                  Book a call
                </Link>
                <Link
                  href="/work"
                  className="rounded-full border border-cream/30 px-7 py-3.5 text-center text-sm text-cream transition-colors hover:border-cream/70"
                >
                  See the work
                </Link>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="font-mono text-sm text-cream/70 transition-colors hover:text-cream sm:text-right"
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
