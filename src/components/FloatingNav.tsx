"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/src/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 100);
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 md:pt-6">
      <div className="relative">
        <div
          className={`inline-flex items-center rounded-full border border-white/10 px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
            scrolled ? "bg-paper-raised/95 shadow-lg shadow-black/40" : "bg-paper-raised/70"
          }`}
        >
          <Link
            href="/"
            aria-label="PedalDown home"
            className="group accent-gradient flex h-9 w-9 items-center justify-center rounded-full p-[2px] transition-transform duration-300 hover:scale-110"
          >
            <span className="flex h-full w-full items-center justify-center rounded-full bg-paper font-display text-[13px] font-semibold text-ink">
              PD
            </span>
          </Link>

          <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />

          <nav aria-label="Primary" className="hidden items-center sm:flex">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    active
                      ? "bg-line/60 text-ink"
                      : "text-ink-muted hover:bg-line/50 hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden="true" />

          <Link
            href="/contact"
            className="group relative ml-1 hidden rounded-full sm:inline-flex"
          >
            <span
              aria-hidden="true"
              className="accent-gradient absolute -inset-[2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative rounded-full bg-paper-raised px-4 py-2 font-mono text-sm text-ink backdrop-blur-md">
              Book a call <span aria-hidden="true">↗</span>
            </span>
          </Link>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="floating-nav-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="rounded-full px-3 py-1.5 text-ink sm:hidden"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div
            id="floating-nav-menu"
            className="absolute left-1/2 top-full z-50 mt-2 flex w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 flex-col gap-1 rounded-2xl border border-white/10 bg-paper-raised/95 p-3 backdrop-blur-md sm:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                  isActive(pathname, link.href)
                    ? "bg-line/60 text-ink"
                    : "text-ink-muted hover:bg-line/50 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-ink px-3 py-2 text-center font-mono text-sm text-paper"
            >
              Book a call
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
