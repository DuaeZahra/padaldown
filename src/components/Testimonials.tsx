import Link from "next/link";
import { Container } from "@/src/components/Container";
import { Reveal } from "@/src/components/Reveal";
import { TESTIMONIALS } from "@/src/data/testimonials";
import { getProjectBySlug } from "@/src/data/projects";

/**
 * Client quotes, in the serif italic the rest of the site uses for anything
 * spoken rather than stated.
 *
 * Renders nothing at all while TESTIMONIALS is empty, so the homepage never
 * shows an empty heading waiting to be filled, and never ships placeholder
 * praise by accident.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section aria-labelledby="testimonials" className="py-20 sm:py-28">
      <Container className="flex flex-col gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
              In their words
            </span>
          </div>
          <h2
            id="testimonials"
            className="mt-5 font-display text-4xl leading-tight text-cream sm:text-5xl"
          >
            What clients <em className="italic">say</em>
          </h2>
        </div>

        <ul
          className={`grid grid-cols-1 gap-6 ${
            TESTIMONIALS.length > 1 ? "md:grid-cols-2" : ""
          } ${TESTIMONIALS.length > 2 ? "lg:grid-cols-3" : ""}`}
        >
          {TESTIMONIALS.map((testimonial, i) => {
            const project = testimonial.projectSlug
              ? getProjectBySlug(testimonial.projectSlug)
              : undefined;

            return (
              <li key={testimonial.name + i}>
                <Reveal delay={i * 80}>
                  <figure className="corner-sweep flex h-full flex-col justify-between gap-6 border border-line bg-paper-raised/85 p-6 transition-colors duration-500 hover:border-line-strong sm:p-8">
                    <blockquote className="font-display text-2xl italic leading-snug text-cream">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="flex flex-col gap-1">
                      <span className="text-sm text-cream">{testimonial.name}</span>
                      <span className="text-sm text-cream/65">{testimonial.title}</span>
                      {project ? (
                        <Link
                          href={`/work/${project.slug}`}
                          className="mt-2 w-fit font-mono text-xs uppercase tracking-wide text-steel transition-colors hover:text-steel-dark"
                        >
                          {project.title}
                        </Link>
                      ) : null}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
