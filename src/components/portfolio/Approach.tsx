"use client";

import { useState } from "react";
import {
  Arrow,
  Reveal,
  Spark,
  eyebrow,
  handwriting,
  pageWidth,
  sectionTitle,
} from "./shared";

const principles = [
  {
    label: "Understand",
    title: "Start with the right question.",
    body: "Before a line of code, I want to know who we’re building for, what’s getting in their way, and what a better day would look like.",
    note: "the why, before the how",
  },
  {
    label: "Simplify",
    title: "Find the simplest useful version.",
    body: "Map the moving parts. Challenge the assumptions. Make the important thing easy, and give everything else a reason to exist.",
    note: "less, but considered",
  },
  {
    label: "Make",
    title: "Build it. Use it. Make it better.",
    body: "The details reveal themselves when an idea becomes something you can touch. I build, test, and refine until the experience feels right.",
    note: "details make the difference",
  },
];

function Sketch({ index }: { index: number }) {
  if (index === 0)
    return (
      <div className="relative grid min-h-[110px] w-[140px] place-content-center text-center text-[#2458ed] md:min-h-[180px] md:w-auto">
        <span className="rotate-[-8deg] font-[family-name:var(--font-hand)] text-[47px] md:text-[55px]">
          why?
        </span>
        <svg
          className="absolute left-[-5px] top-3 h-[85px] w-[150px] md:-left-3 md:top-[38px] md:h-[100px] md:w-[175px]"
          viewBox="0 0 180 100"
          fill="none"
        >
          <path
            className="motion-draw"
            pathLength="1"
            d="M160 43C167 4 27-6 15 45S161 105 166 48C169 18 90 2 53 13"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </div>
    );
  if (index === 1)
    return (
      <div className="grid min-h-[110px] place-content-center text-center text-[#2458ed] md:min-h-[180px]">
        <span className="text-[30px] tracking-[5px]">○ ○ ○</span>
        <b className="font-[family-name:var(--font-hand)] text-4xl font-normal">
          ↓
        </b>
        <span className="text-[30px]">●</span>
      </div>
    );
  return (
    <div className="relative grid min-h-[110px] w-[140px] place-content-center text-[#2458ed] md:min-h-[180px] md:w-auto">
      <span className="grid size-[76px] rotate-[-7deg] place-items-center rounded-[10px_6px_9px_4px] border-[1.5px] border-[#2458ed] font-[family-name:var(--font-hand)] text-[56px]">
        ✓
      </span>
      <Spark className="absolute right-0 top-0 size-[33px] md:top-3" />
    </div>
  );
}

export default function Approach() {
  const [active, setActive] = useState(0);
  return (
    <section
      className={`${pageWidth} py-[70px] md:py-[115px]`}
      aria-labelledby="approach-title"
    >
      <Reveal className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-10">
        <div>
          <p className={`${eyebrow} mb-5 md:mb-6`}>03 / THE WAY I WORK</p>
          <h2 id="approach-title" className={sectionTitle}>
            Care is a process.
          </h2>
        </div>
        <span className={`${handwriting} self-end rotate-[-5deg] md:mr-11`}>
          no magic. just intention.
        </span>
      </Reveal>
      <Reveal className="grid grid-cols-1 gap-[30px] md:grid-cols-[1fr_2fr] md:gap-[70px]">
        <div
          className="flex gap-4 md:flex-col md:gap-0"
          role="tablist"
          aria-label="My process"
        >
          {principles.map((item, index) => (
            <button
              key={item.label}
              id={`process-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls="process-panel"
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                const next =
                  event.key === "ArrowRight"
                    ? (index + 1) % 3
                    : event.key === "ArrowLeft"
                      ? (index + 2) % 3
                      : event.key === "Home"
                        ? 0
                        : event.key === "End"
                          ? 2
                          : null;
                if (next !== null) {
                  event.preventDefault();
                  setActive(next);
                  document.getElementById(`process-tab-${next}`)?.focus();
                }
              }}
              className={`flex flex-1 items-center gap-[7px] whitespace-nowrap border-b py-3.5 text-left text-xs transition md:gap-5 md:border-t-0 md:py-[22px] md:text-base ${active === index ? "border-[#2458ed] text-[#2458ed]" : "border-[#e6e6e8] text-[#a2a4ac]"}`}
            >
              <span className="font-mono text-[7px] md:text-[9px]">
                0{index + 1}
              </span>
              {item.label}
              <Arrow
                className={`ml-auto hidden size-4 md:block ${active === index ? "opacity-100" : "opacity-0"}`}
              />
            </button>
          ))}
        </div>
        <div
          id="process-panel"
          role="tabpanel"
          aria-labelledby={`process-tab-${active}`}
          tabIndex={0}
          className="min-h-[330px] content-center md:min-h-0"
        >
          <div
            key={active}
            className="motion-enter grid grid-cols-1 items-center gap-[15px] md:grid-cols-[150px_1fr] md:gap-[45px]"
          >
            <Sketch index={active} />
            <div>
              <h3 className="mb-[15px] text-[22px] font-medium leading-[1.3] tracking-[-.04em] md:text-[23px]">
                {principles[active].title}
              </h3>
              <p className="mb-[18px] text-[13px] leading-[1.9] text-[#82858e] md:text-xs">
                {principles[active].body}
              </p>
              <span className={handwriting}>{principles[active].note}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
