import type Lenis from "lenis";

let lenis: Lenis | null = null;

// Keep in sync with the natural-flow layout in globals.css.
export const CINEMATIC_QUERY =
  "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function scrollToEl(selector: string) {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { duration: 1.8 });
  } else {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth" });
  }
}

export function isInstantMode(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("instant");
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
