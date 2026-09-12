"use client";

import { useEffect, useRef } from "react";

// Autoplay isn't something CSS's prefers-reduced-motion override can stop —
// it's a media API, not an animation/transition. So this pauses the clip
// itself on mount for anyone who has asked not to see large-scale motion,
// leaving a single static frame behind the text instead.
export function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current?.pause();
    }
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      playsInline
      aria-hidden="true"
    />
  );
}
