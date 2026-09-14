import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/src/components/Container";
import { PageHeader } from "@/src/components/PageHeader";
import { Reveal } from "@/src/components/Reveal";
import { SITE } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "PedalDown Technologies is an AI engineering studio in Pakistan. We contribute to pgEdge's pgvector tooling and built RL training scenarios used in Claude model training.",
  alternates: { canonical: "/about" },
};

const PARAGRAPHS = [
  <>
    PedalDown Technologies is an AI engineering studio based in Pakistan, working with clients
    globally. Our engineers come from one of the country&rsquo;s top engineering universities. We
    build and deploy production AI systems, not prototypes.
  </>,
  <>
    We contribute to pgEdge&rsquo;s open-source pgvector tooling. Our code is merged into the
    official{" "}
    <a
      href="https://github.com/pgEdge/pgedge-vectorizer"
      target="_blank"
      rel="noopener noreferrer"
      className="text-steel underline decoration-line-strong underline-offset-2 hover:text-steel-dark"
    >
      pgEdge/pgedge-vectorizer
    </a>{" "}
    repository. That is the project other engineering teams already run in production, not a
    private fork of it.
  </>,
  <>
    We also built reinforcement-learning training scenarios used in Anthropic&rsquo;s Claude model
    training, including CUDA kernel debugging and precision-optimization tasks across INT8, INT4,
    BF16, and FP16 on H100 hardware.
  </>,
  <>
    That work sits next to our client work, not apart from it. The engineers who debug a CUDA
    kernel for a frontier lab are the same engineers who build your system, and the same discipline
    applies to both: a 2.26° error margin on a diagnostic model gets reported honestly, the same
    way a precision bug on H100 gets reported honestly.
  </>,
  <>{SITE.location}.</>,
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="Built by people who"
        shine="ship."
      />

      <section className="py-14 sm:py-20">
        <Container className="max-w-2xl">
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-ink-muted">
            {PARAGRAPHS.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-ink px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-steel-dark"
          >
            Get in touch
          </Link>
        </Container>
      </section>
    </>
  );
}
