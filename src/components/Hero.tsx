import Link from "next/link";
import { SITE } from "@/src/lib/site";

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[720px] w-full flex-col overflow-hidden">

      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream/60 md:text-sm">
            {SITE.location}
          </p>

          {/* The serif's italic is the emphasis mechanism, the way their
              headlines lean on it mid-sentence rather than reaching for a
              second weight or a color. */}
          <h1 className="mt-5 max-w-5xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">
              We build <em className="italic">production</em> AI systems.
            </span>
            <em className="block italic">Not prototypes.</em>
          </h1>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-cream px-7 py-3.5 text-sm text-terminal transition-colors hover:bg-white md:px-9 md:py-4 md:text-base"
            >
              Book a call
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm text-cream transition-colors hover:border-cream/70 md:px-9 md:py-4 md:text-base"
            >
              See the work
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
