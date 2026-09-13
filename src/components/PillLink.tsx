import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Their call-to-action shape: a hairline pill with the label on the left and a
 * filled circular arrow badge on the right. Used inside colour bands, where a
 * plain text link would disappear.
 */
export function PillLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`group inline-flex w-fit items-center gap-3 rounded-full border border-cream/40 py-1.5 pl-5 pr-1.5 text-sm text-cream transition-colors hover:border-cream ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-[13px] text-terminal transition-transform duration-300 group-hover:rotate-45"
      >
        ↗
      </span>
    </Link>
  );
}
