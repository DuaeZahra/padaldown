import Link from "next/link";
import { CinematicBackdrop } from "@/src/components/CinematicBackdrop";
import { Container } from "@/src/components/Container";
import { ScrollCue } from "@/src/components/ScrollCue";
import { ShineText } from "@/src/components/ShineText";
import { SITE } from "@/src/lib/site";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full flex-col overflow-hidden bg-terminal">
      <CinematicBackdrop />

      <div className="relative z-10 flex h-full w-full flex-col">
        <Container className="pt-28 md:pt-32">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-12">
            <p className="max-w-md text-sm text-white/80 md:text-base">
              Our code is merged into pgEdge&rsquo;s open-source pgvector tooling. Our
              reinforcement-learning scenarios were used in Claude model training.
            </p>
            <p className="max-w-md text-sm text-white/80 md:text-base lg:ml-auto lg:text-right">
              Two products live in production today.
            </p>
          </div>
        </Container>

        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-tight text-white/70 md:text-sm">
            {SITE.location}
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">We build production AI systems.</span>
            <ShineText className="block">Not prototypes.</ShineText>
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 font-mono text-sm text-white ring-1 ring-white/15 transition-colors hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
            >
              Book a call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/25 px-6 py-3 font-mono text-sm text-white transition-colors hover:border-white/50 md:px-8 md:py-4 md:text-base"
            >
              See the work
            </Link>
          </div>
        </div>
      </div>

      <ScrollCue />
    </section>
  );
}
