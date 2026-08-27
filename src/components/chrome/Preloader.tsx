"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isInstantMode, prefersReducedMotion } from "@/lib/scroll";
import { beginJourney } from "@/lib/journey";

gsap.registerPlugin(useGSAP);

const WORDS = ["Engineer.", "Builder.", "Traveler."];

/** Curtain preloader. Dispatches `journey:begin` so the hero can enter. */
export default function Preloader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      document.documentElement.classList.add("no-scroll");

      const finish = () => {
        document.documentElement.classList.remove("no-scroll");
        beginJourney();
        setGone(true);
      };

      if (prefersReducedMotion() || isInstantMode()) {
        finish();
        return;
      }

      const tl = gsap.timeline({ onComplete: finish });

      // The words live in one stacked strip that rolls upward a line at a time.
      // Only ever one word sits in the mask, so they can never overlap.
      const stepPct = 100 / WORDS.length;
      gsap.set(".pre-strip", { yPercent: stepPct }); // start one line below → blank
      gsap.set(".pre-line", { scaleX: 0 });

      const move = 0.45;
      const hold = 0.8;
      let at = 0.15;
      tl.to(".pre-strip", { yPercent: 0, duration: move, ease: "power3.out" }, at); // first word rises in
      for (let i = 1; i < WORDS.length; i++) {
        at += hold;
        tl.to(
          ".pre-strip",
          { yPercent: -stepPct * i, duration: move, ease: "power3.inOut" },
          at
        );
      }
      const wordsEnd = at + move;

      tl.to(".pre-line", { scaleX: 1, duration: wordsEnd, ease: "power2.inOut" }, 0);
      tl.to(".pre-fade", { opacity: 0, duration: 0.35, ease: "power1.out" }, wordsEnd + 0.4);
      tl.to(".pre-panel-t", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, wordsEnd + 0.65);
      tl.to(".pre-panel-b", { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, wordsEnd + 0.65);
    },
    { scope: root }
  );

  if (gone) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[90]" aria-hidden>
      <div className="pre-panel-t absolute inset-x-0 top-0 h-[50.5%] bg-bone" />
      <div className="pre-panel-b absolute inset-x-0 bottom-0 h-[50.5%] bg-bone" />
      <div className="pre-fade absolute inset-0 flex flex-col items-center justify-center gap-6">
        <span className="label relative z-10 text-dim">
          Fatai Igomigo · Portfolio, Vol. II
        </span>
        <div className="relative z-10 h-[1.2em] w-[10em] overflow-hidden text-[clamp(2rem,5vw,3.4rem)]">
          <div
            className="pre-strip"
            style={{ transform: `translateY(${100 / WORDS.length}%)` }}
          >
            {WORDS.map((w) => (
              <span
                key={w}
                className="font-serif-display flex h-[1.2em] items-center justify-center italic leading-none text-ink"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
        <div className="pre-line relative z-10 h-px w-40 origin-left bg-bronze" />
      </div>
    </div>
  );
}
