"use client";

import { useCallback, useEffect, useRef } from "react";

/** Matches the observer's rootMargin below, so both agree on "near enough". */
const MARGIN = 200;

// Autoplay isn't something CSS's prefers-reduced-motion override can stop —
// it's a media API, not an animation/transition. So this pauses the clip
// itself on mount for anyone who has asked not to see large-scale motion,
// leaving a single static frame behind the text instead.
//
// The homepage stacks four of these (hero, proof strip, demo, closing CTA).
// They share one cached file, so the cost isn't bandwidth — it's four hardware
// decoders running at once for three clips nobody is looking at. Only the
// on-screen one is left playing.
export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const isOnScreen = useCallback(() => {
    const video = ref.current;
    if (!video) return false;
    const rect = video.getBoundingClientRect();
    return rect.bottom > -MARGIN && rect.top < window.innerHeight + MARGIN;
  }, []);

  // `autoPlay` stays on the element so the hero starts with no dependency on
  // JavaScript at all. That means the three offscreen clips also start on their
  // own, so catch them at the moment they do and put them back to sleep. A
  // rect read is cheap and, unlike observer state, can't be stale.
  const handlePlay = useCallback(() => {
    if (!isOnScreen()) ref.current?.pause();
  }, [isOnScreen]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // play() rejects if the element is detached mid-scroll; nothing to
          // recover from, and an unhandled rejection surfaces as an error.
          void video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: `${MARGIN}px` },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      onPlay={handlePlay}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    />
  );
}
