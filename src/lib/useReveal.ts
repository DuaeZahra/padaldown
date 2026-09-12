"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Adds `reveal-on-scroll is-visible` (defined in globals.css) the first
 * time the element scrolls into view. Content has no hidden resting
 * state of its own — without JS, or before the observer fires, it just
 * renders normally — so this only ever adds a one-shot entrance
 * animation, never hides content.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, revealClassName: visible ? "reveal-on-scroll is-visible" : "" };
}
