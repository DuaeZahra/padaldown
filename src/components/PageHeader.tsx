import type { ReactNode } from "react";
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
    <section className="page-glow relative overflow-hidden border-b border-line pt-14 pb-12 sm:pt-20 sm:pb-16">
      <Container className="relative flex flex-col gap-4">
        {above}
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
          {shine ? <> {shine}</> : null}
        </h1>
        {intro ? <div className="max-w-2xl text-lg text-ink-muted">{intro}</div> : null}
        {children}
      </Container>
    </section>
  );
}
