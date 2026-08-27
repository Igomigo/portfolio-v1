"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The page is one continuous canvas: sections declare their world via
 * data-world-bg / data-world-fg and the body cross-fades between them,
 * so the chrome (header, rail, cursor) always adapts.
 */
export default function WorldColor() {
  useGSAP(() => {
    const root = document.documentElement;
    document
      .querySelectorAll<HTMLElement>("[data-world-bg]")
      .forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => {
            if (!self.isActive) return;
            gsap.to(root, {
              "--world-bg": el.dataset.worldBg,
              "--world-fg": el.dataset.worldFg,
              duration: 0.9,
              ease: "power2.out",
              overwrite: true,
            });
          },
        });
      });
  });

  return null;
}
