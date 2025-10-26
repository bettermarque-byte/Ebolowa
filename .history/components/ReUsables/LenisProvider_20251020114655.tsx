// src/app/providers/lenis-provider.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider(): null {
  const lenisRef = useRef<any>(null);
  const rafRef = useRef<number | null>(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (mountedRef.current) return;
    mountedRef.current = true;
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({ duration: 1.2 });
    lenisRef.current = lenis;

    const loop = (t: DOMHighResTimeStamp) => {
      lenis.raf(t);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current?.destroy) lenisRef.current.destroy();
    };
  }, []);

  return null;
}
