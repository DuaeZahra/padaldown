import type { ReactNode } from "react";
import { AuroraBackdrop } from "@/src/components/AuroraBackdrop";
import { Container } from "@/src/components/Container";

export function PageHeader({
  title,
  shine,
  intro,
  above,
  children,
}: {
  /** Plain part of the heading. */
  title: string;
  /** Trailing part of the heading that gets the animated gradient sweep. */
  shine?: ReactNode;
  intro?: ReactNode;
  /** Optional slot above the heading (breadcrumbs, domain tag). */
  above?: ReactNode;
  children?: ReactNode;
}) {
  return (
    // Same backdrop and centred type as the homepage hero, at about half its
    // height: tall enough to read as the same site, short enough that the page's
    // actual content still shows above the fold.
    <section className="relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-terminal pt-28 pb-20 sm:min-h-[65vh] sm:pt-32 sm:pb-24">
      <AuroraBackdrop fade="bottom" />
      <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
        {above}
        <h1 className="font-display text-5xl leading-[1.03] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          {title}
          {shine ? <> <em className="italic">{shine}</em></> : null}
        </h1>
        {intro ? <div className="max-w-2xl text-lg text-cream/75">{intro}</div> : null}
        {children}
      </Container>
    </section>
  );
}
