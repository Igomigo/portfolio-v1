"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Chapter IV — The Work. The moss world: vertical scroll becomes a
 * sideways voyage past four artifacts, each with its own inner parallax.
 */
export default function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const distance = () => (track.current?.scrollWidth ?? 0) - window.innerWidth;

      const move = gsap.to(track.current, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".work-visual-inner").forEach((visual) => {
        gsap.fromTo(
          visual,
          { xPercent: -7 },
          {
            xPercent: 7,
            ease: "none",
            scrollTrigger: {
              trigger: visual,
              containerAnimation: move,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });

      gsap.to(".work-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="work"
      data-chapter="IV"
      data-chapter-title="The Work"
      data-world-bg="#1d392f"
      data-world-fg="#f2ebdc"
      className="relative h-svh overflow-hidden bg-moss text-cream"
    >
      <div ref={track} className="flex h-full items-center gap-[6vw] pl-7 pr-[8vw]">
        {/* voyage intro */}
        <header className="w-[34vw] min-w-[300px] shrink-0">
          <p className="label mb-6 text-bronze">
            Ch. IV <span className="text-cream/40">/</span> The Work
          </p>
          <h2 className="font-serif-display text-[clamp(2.4rem,4.6vw,4.6rem)] leading-[1.02]">
            Four artifacts,
            <br />
            <span className="italic">carried home.</span>
          </h2>
          <p className="mt-6 max-w-[280px] text-[14px] leading-relaxed text-cream/55">
            Dummy artifacts for now, each will become a case study. Scroll on;
            the world moves sideways here.
          </p>
        </header>

        {projects.map((p) => (
          <article
            key={p.title}
            className="group w-[80vw] shrink-0 sm:w-[min(58vw,780px)]"
            data-cursor-label="View"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-cream/12">
              <div className="work-visual-inner absolute -inset-x-[10%] inset-y-0">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(58% 78% at 50% 62%, ${p.glow}, transparent 72%), linear-gradient(150deg, rgba(242,235,220,0.05), transparent 55%)`,
                  }}
                />
                {/* concentric hairline rings */}
                <svg className="absolute inset-0 size-full" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden>
                  {[46, 34, 23].map((r) => (
                    <circle key={r} cx="80" cy="50" r={r} stroke="#f2ebdc" strokeOpacity="0.14" strokeWidth="0.25" />
                  ))}
                </svg>
                <span className="font-serif-display absolute inset-0 flex items-center justify-center text-[clamp(7rem,18vw,15rem)] italic text-cream/85 transition-transform duration-700 ease-out group-hover:scale-105">
                  {p.glyph}
                </span>
              </div>
              <span className="label absolute left-5 top-5 text-cream/50">
                {p.index} / 0{projects.length}
              </span>
              <span className="label absolute right-5 top-5 text-bronze">{p.year}</span>
            </div>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="font-serif-display text-[clamp(1.7rem,2.6vw,2.6rem)]">
                {p.title}
                <span className="ml-3 align-middle font-sans text-[15px] not-italic text-cream/55">
                  {p.blurb}
                </span>
              </h3>
              <p className="label text-cream/45">{p.stack}</p>
            </div>
          </article>
        ))}

        {/* voyage outro */}
        <div className="flex w-[30vw] min-w-[240px] shrink-0 items-center">
          <p className="font-serif-display text-[clamp(1.6rem,2.8vw,2.6rem)] italic text-cream/70">
            The journey continues…
          </p>
        </div>
      </div>

      <div className="absolute inset-x-7 bottom-8 flex items-center gap-4">
        <span className="label text-cream/50">Voyage</span>
        <span className="relative h-px flex-1 overflow-hidden bg-cream/15">
          <span className="work-progress absolute inset-0 origin-left scale-x-0 bg-bronze" />
        </span>
        <span className="label text-cream/50">0{projects.length}</span>
      </div>
    </section>
  );
}
