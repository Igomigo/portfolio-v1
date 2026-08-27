"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { setLenis, isInstantMode, prefersReducedMotion } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger);

/**
 * Owns the scroll engine for the whole journey: Lenis drives native scroll
 * with inertia, GSAP's ticker drives Lenis, ScrollTrigger listens to Lenis.
 * `?instant` disables smoothing and fast-forwards timelines (used for
 * automated verification); reduced-motion gets native scroll.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    if (isInstantMode()) {
      gsap.globalTimeline.timeScale(30);
      return;
    }
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ lerp: 0.09 });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      gsap.ticker.remove(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return <>{children}</>;
}
