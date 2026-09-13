"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#8739d5", "#3064d0", "#27fcf2", "#5fcb96"];

/**
 * The drifting point cloud behind the hero — creativeans runs one of these on a
 * canvas, a slow vortex of cyan and blue specks.
 *
 * Points orbit a centre at a speed that falls off with radius, so the field
 * shears into spiral arms instead of rotating as a rigid disc. Everything is
 * sized in fractions of the canvas, so a resize re-lays-out rather than
 * stretching.
 *
 * Decorative only: aria-hidden, and it never starts under
 * prefers-reduced-motion — a CSS animation override can't stop a rAF loop, so
 * the check has to happen here.
 */
export function ParticleField({ count = 320 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const points = Array.from({ length: count }, () => {
      // sqrt keeps the points area-uniform; without it they bunch at the centre.
      const radius = Math.sqrt(Math.random()) * 0.52;
      return {
        radius,
        angle: Math.random() * Math.PI * 2,
        // Inner points sweep faster, which is what draws the arms out.
        speed: (0.16 / (radius + 0.22)) * (Math.random() * 0.4 + 0.8),
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.55 + 0.2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    });

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      ctx.clearRect(0, 0, width, height);
      const cx = width * 0.5;
      const cy = height * 0.52;
      // Ellipse rather than circle: the field reads as a disc seen at an angle.
      const scale = Math.min(width, height) * 1.25;

      for (const p of points) {
        p.angle += p.speed * dt;
        const x = cx + Math.cos(p.angle) * p.radius * scale;
        const y = cy + Math.sin(p.angle) * p.radius * scale * 0.42;

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
