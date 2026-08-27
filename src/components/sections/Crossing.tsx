"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { crossingWords } from "@/lib/data";
import Drift from "./Drift";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Chapter III — The Crossing. The showpiece: a circular gate opens in the
 * sand world and swallows the viewport; you drift through another sky as
 * the disciplines fly past, then the light dims into the moss world where
 * the work lives. One pinned, scrubbed timeline.
 */
export default function Crossing() {
  const root = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const activeRef = useRef(false);

  useGSAP(
    () => {
      const words = gsap.utils.toArray<HTMLElement>(".crossing-word");
      let dark = false;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=430%",
          pin: true,
          scrub: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            progressRef.current = self.progress;
            // chrome flips to light-on-dark once the sky has dimmed;
            // only tween on the state change, never per tick
            const nowDark = self.progress > 0.62;
            if (nowDark !== dark) {
              dark = nowDark;
              gsap.to(document.documentElement, {
                "--world-fg": dark ? "#f2ebdc" : "#181510",
                "--world-bg": dark ? "#1d392f" : "#ebe2d0",
                duration: 0.5,
                overwrite: "auto",
              });
            }
          },
          onToggle: (self) => {
            activeRef.current = self.isActive;
          },
        },
      });

      // rest state: the gate is a closed point of light — invisible, so the
      // intro copy reads perfectly clean. Nothing sits on top of the words.
      gsap.set(".crossing-gate", { clipPath: "circle(0% at 50% 56%)" });
      gsap.set(".crossing-rim", { scale: 0.2, opacity: 0 });

      // 0 — the invitation lifts away, clearing the stage first
      tl.to(".crossing-lead", { opacity: 0, y: -46, duration: 0.32, ease: "power1.in" }, 0.05);

      // 1 — only once the copy is gone, the gate blooms out of nothing
      tl.to(
        ".crossing-gate",
        { clipPath: "circle(7% at 50% 56%)", duration: 0.28, ease: "power2.out" },
        0.34
      );
      tl.to(
        ".crossing-rim",
        { scale: 1, opacity: 1, duration: 0.28, ease: "power2.out" },
        0.34
      );

      // 2 — the gate swallows the viewport while its rim races outward
      tl.to(
        ".crossing-gate",
        { clipPath: "circle(120% at 50% 50%)", duration: 2.15, ease: "power2.inOut" },
        0.62
      );
      tl.to(
        ".crossing-rim",
        { scale: 17, opacity: 0, duration: 2.15, ease: "power2.inOut" },
        0.62
      );
      tl.to(".crossing-sky", { scale: 1, duration: 2.15, ease: "power2.inOut" }, 0.62);

      // 2 — the disciplines travel past, near to far
      const wordStart = 2.5;
      const wordGap = 1.15;
      words.forEach((word, i) => {
        const at = wordStart + i * wordGap;
        tl.fromTo(
          word,
          { scale: 0.34, autoAlpha: 0, filter: "blur(7px)" },
          { scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 0.75, ease: "power1.out" },
          at
        ).to(
          word,
          { scale: 5.6, autoAlpha: 0, filter: "blur(12px)", duration: 1.05, ease: "power2.in" },
          at + 0.75
        );
      });

      // 3 — dusk falls: the sky dims into the moss world
      const duskAt = wordStart + 1.9 * wordGap;
      tl.to(".crossing-dusk", { opacity: 1, duration: 2.2, ease: "power1.inOut" }, duskAt);

      // 4 — arrival
      const arriveAt = wordStart + crossingWords.length * wordGap + 0.9;
      tl.fromTo(
        ".crossing-arrival",
        { autoAlpha: 0, y: 70, scale: 0.94 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power2.out" },
        arriveAt
      );
      tl.fromTo(
        ".crossing-arrival .label",
        { letterSpacing: "0.6em" },
        { letterSpacing: "0.18em", duration: 1.1, ease: "power2.out" },
        arriveAt
      );
      // breathing room at the end of the pin
      tl.to({}, { duration: 0.8 });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      data-chapter="III"
      data-chapter-title="The Crossing"
      data-world-bg="#ebe2d0"
      data-world-fg="#181510"
      className="relative h-svh overflow-hidden"
    >
      {/* lead-in, sitting in the sand world */}
      <div className="crossing-lead absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-7 text-center">
        <p className="label text-bronze">
          Ch. III <span className="text-dim">/</span> The Crossing
        </p>
        <p className="font-serif-display max-w-2xl text-[clamp(1.8rem,4vw,3.4rem)] italic leading-tight">
          Every portfolio shows the work.
          <br />
          Few take you there.
        </p>
        <p className="label text-dim">Keep scrolling, the gate is opening</p>
      </div>

      {/* the rim of the gate — hidden at rest, revealed as the gate blooms */}
      <div
        className="crossing-rim pointer-events-none absolute left-1/2 top-[56%] z-30 size-[13vmax] -translate-x-1/2 -translate-y-1/2 rounded-full border border-bronze/70 opacity-0"
        aria-hidden
      />

      {/* the other world, revealed through the gate */}
      <div
        className="crossing-gate absolute inset-0 z-20"
        style={{ clipPath: "circle(0% at 50% 56%)" }}
      >
        <div
          className="crossing-sky absolute inset-0 scale-[1.25]"
          style={{
            background:
              "linear-gradient(180deg, #f4e3cb 0%, #ecc4a2 34%, #cf9377 62%, #8a6a58 100%)",
          }}
        />
        <div
          className="crossing-dusk absolute inset-0 opacity-0"
          style={{
            background:
              "linear-gradient(180deg, #24443a 0%, #1d392f 55%, #163026 100%)",
          }}
        />
        <Drift progressRef={progressRef} activeRef={activeRef} />

        {crossingWords.map((word, i) => (
          <p
            key={word}
            className={`crossing-word font-serif-display invisible absolute inset-0 flex items-center justify-center text-[clamp(3rem,10vw,9.5rem)] italic ${
              i < 2 ? "text-ink" : "text-cream"
            }`}
          >
            {word}
          </p>
        ))}

        <div className="crossing-arrival invisible absolute inset-0 flex flex-col items-center justify-center gap-5 px-7 text-center text-cream">
          <p className="label text-bronze" style={{ letterSpacing: "0.6em" }}>
            Ch. IV / The Work
          </p>
          <p className="font-serif-display text-[clamp(2.6rem,7vw,6.5rem)] leading-none">
            Selected <span className="italic">artifacts</span>
          </p>
          <p className="label text-cream/60">brought back from the other side</p>
        </div>
      </div>
    </section>
  );
}
