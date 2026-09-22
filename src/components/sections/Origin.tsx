"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { identity } from "@/lib/data";
import { CINEMATIC_QUERY } from "@/lib/scroll";
import { onJourneyBegin } from "@/lib/journey";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Chars({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden pb-[0.06em] align-top ${className ?? ""}`}>
      {[...text].map((c, i) => (
        <span
          key={i}
          className="origin-char inline-block will-change-transform"
        >
          {c}
        </span>
      ))}
    </span>
  );
}

/** Chapter I — Origin. Bone world, astrolabe ring, the name arrives. */
export default function Origin() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add(CINEMATIC_QUERY, () => {
        // The entrance and scroll transforms live on separate elements.
        gsap.set(".origin-char", { yPercent: 120, rotate: 4 });
        const enter = gsap.timeline({ paused: true });
        enter
          .to(".origin-char", { yPercent: 0, rotate: 0, duration: 1.15, ease: "expo.out", stagger: 0.035 })
          .fromTo(".origin-fade", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, "-=0.7")
          .fromTo(".origin-ring-enter", { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.4 }, 0.2);
        const offBegin = onJourneyBegin(() => enter.play());

        // perpetual, almost imperceptible ring rotation
        gsap.to(".origin-ring-spin", { rotate: 360, duration: 90, repeat: -1, ease: "none" });

        // scroll: the two name lines part ways, the ring swells past you
        const scrub = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
        scrub
          .to(".origin-line-1", { xPercent: -7, ease: "none" }, 0)
          .to(".origin-line-2", { xPercent: 7, ease: "none" }, 0)
          .to(".origin-ring", { scale: 1.7, opacity: 0, ease: "none" }, 0)
          .to(".origin-fade", { opacity: 0, y: -30, ease: "none" }, 0);

        return offBegin;
      });
      return () => media.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="origin"
      data-chapter="I"
      data-chapter-title="Origin"
      data-world-bg="#f6f2e9"
      data-world-fg="#181510"
      className="origin-section relative flex h-svh flex-col justify-between overflow-hidden px-7 pb-10 pt-28"
    >
      {/* astrolabe ring */}
      <div className="origin-ring pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="origin-ring-enter">
          <svg
            className="origin-ring-spin size-[76vmin]"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            <circle cx="50" cy="50" r="49.4" stroke="#181510" strokeOpacity="0.3" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <circle
              cx="50" cy="50" r="44"
              stroke="#181510" strokeOpacity="0.4" strokeWidth="1" vectorEffect="non-scaling-stroke"
              strokeDasharray="0.28 4.4"
            />
            <circle cx="50" cy="0.9" r="0.9" fill="#a9834f" />
          </svg>
        </div>
      </div>

      <p className="origin-fade label max-w-56 text-dim">
        A portfolio told as a journey, five worlds, one engineer
      </p>

      <h1 className="origin-name relative z-10 text-center leading-[0.92]">
        <span className="origin-line-1 font-serif-display block text-[clamp(4rem,16vw,15rem)]">
          <Chars text={identity.name[0]} />
        </span>
        <span className="origin-line-2 font-serif-display block text-[clamp(4rem,16vw,15rem)] italic text-moss">
          <Chars text={identity.name[1]} />
        </span>
      </h1>

      <div className="origin-details relative z-10 flex flex-col items-start gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="origin-fade max-w-sm">
          <p className="label mb-3 text-bronze">{identity.role}</p>
          <p className="text-[15px] leading-relaxed text-dim">{identity.statement}</p>
        </div>
        <div className="origin-fade label flex items-center gap-3 text-dim">
          Begin the journey
          <span className="relative block h-14 w-px overflow-hidden">
            <span className="hairline absolute inset-0" />
            <span className="absolute left-0 top-0 h-4 w-px animate-[cue-drop_1.8s_ease-in-out_infinite] bg-bronze" />
          </span>
        </div>
      </div>
    </section>
  );
}
