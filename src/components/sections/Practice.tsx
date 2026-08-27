"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { capabilities } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Chapter V — The Practice. Back in the light: what I actually do. */
export default function Practice() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".practice-row").forEach((row) => {
        gsap.fromTo(
          row,
          { clipPath: "inset(0 0 100% 0)", y: 30 },
          {
            clipPath: "inset(0 0 -8% 0)",
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      data-chapter="V"
      data-chapter-title="The Practice"
      data-world-bg="#f6f2e9"
      data-world-fg="#181510"
      className="relative px-7 py-[20vh]"
    >
      <div className="mb-16 flex items-end justify-between gap-6">
        <p className="label text-bronze">
          Ch. V <span className="text-dim">/</span> The Practice
        </p>
        <p className="label hidden text-dim md:block">Six disciplines, one standard</p>
      </div>

      <ul>
        {capabilities.map((c) => (
          <li key={c.index} className="practice-row group relative" data-cursor>
            <div
              className="flex items-baseline justify-between gap-6 border-t py-[3.6vh]"
              style={{ borderColor: "color-mix(in srgb, var(--world-fg) 16%, transparent)" }}
            >
              <div className="flex items-baseline gap-6">
                <span className="label text-dim transition-colors duration-300 group-hover:text-bronze">
                  {c.index}
                </span>
                <h3 className="font-serif-display text-[clamp(1.8rem,4.4vw,4rem)] leading-none transition-transform duration-500 ease-out group-hover:translate-x-4 group-hover:italic">
                  {c.title}
                </h3>
              </div>
              <p className="label hidden shrink-0 text-dim opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
                {c.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div
        className="border-t"
        style={{ borderColor: "color-mix(in srgb, var(--world-fg) 16%, transparent)" }}
      />
    </section>
  );
}
