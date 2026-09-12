import type { ReactNode } from "react";
import { CinematicBackdrop } from "@/src/components/CinematicBackdrop";
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
    <section className="page-glow relative flex min-h-[60vh] flex-col justify-center overflow-hidden bg-terminal pt-28 pb-20 sm:min-h-[65vh] sm:pt-32 sm:pb-24">
      <CinematicBackdrop
        overlayClassName="bg-gradient-to-b from-black/80 via-black/55 to-black/75"
        fadeToPage
      />
      <Container className="relative z-10 flex flex-col items-center gap-4 text-center">
        {above}
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
          {shine ? <> {shine}</> : null}
        </h1>
        {intro ? <div className="max-w-2xl text-lg text-white/80">{intro}</div> : null}
        {children}
      </Container>
    </section>
  );
}
