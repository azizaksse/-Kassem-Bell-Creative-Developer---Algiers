"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      document.documentElement.classList.remove("lenis");
      return;
    }

    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const lenis = new Lenis({
      duration: 0.6,
      lerp: hasFinePointer ? 0.24 : 0.16,
      wheelMultiplier: hasFinePointer ? 1 : 1.1,
      touchMultiplier: hasFinePointer ? 1 : 1.15,
      smoothWheel: hasFinePointer,
      syncTouch: false,
      easing: (t: number) => t,
    });

    let animationFrame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
