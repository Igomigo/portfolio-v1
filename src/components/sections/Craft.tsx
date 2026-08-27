"use client";

import { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { craftStatement, facts } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface Word {
  text: string;
  accent: boolean;
}

/** `backtick` words in the statement become italic serif bronze. */
function parseStatement(src: string): Word[] {
  return src.split(" ").map((raw) => {
    const accent = raw.includes("`");
    return { text: raw.replaceAll("`", ""), accent };
  });
}

/** Chapter II — The Craft. Sand world; the statement surfaces word by word. */
export default function Craft() {
  const root = useRef<HTMLElement>(null);
  const words = useMemo(() => parseStatement(craftStatement), []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".craft-word",
        { opacity: 0.13 },
        {
          opacity: 1,
          stagger: 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: ".craft-statement",
            start: "top 78%",
            end: "bottom 42%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".craft-fact",
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: ".craft-facts", start: "top 85%" },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="craft"
      data-chapter="II"
      data-chapter-title="The Craft"
      data-world-bg="#ebe2d0"
      data-world-fg="#181510"
      className="relative grid gap-14 px-7 py-[22vh] md:grid-cols-[1fr_2.2fr]"
    >
      <div>
        <p className="label sticky top-28 text-bronze">
          Ch. II <span className="text-dim">/</span> The Craft
        </p>
      </div>

      <div>
        <p className="craft-statement max-w-4xl text-[clamp(1.7rem,3.3vw,3rem)] font-medium leading-[1.32] tracking-[-0.01em]">
          {words.map((w, i) => (
            <span key={i}>
              <span
                className={`craft-word ${
                  w.accent ? "font-serif-display italic text-bronze" : ""
                }`}
              >
                {w.text}
              </span>{" "}
            </span>
          ))}
        </p>

        <div className="craft-facts mt-[12vh] grid grid-cols-2 gap-x-8 gap-y-10 border-t pt-9 md:grid-cols-4" style={{ borderColor: "color-mix(in srgb, var(--world-fg) 16%, transparent)" }}>
          {facts.map((f) => (
            <div key={f.caption} className="craft-fact">
              <p className="font-serif-display text-[clamp(2.2rem,4vw,3.6rem)] leading-none">
                {f.value}
              </p>
              <p className="label mt-3 text-dim">{f.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
