"use client";

import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ChapterState {
  numeral: string;
  title: string;
}

/** Fixed wayfinding: which world you are currently traveling through. */
export default function ChapterRail() {
  const [chapter, setChapter] = useState<ChapterState>({
    numeral: "I",
    title: "Origin",
  });
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    document.querySelectorAll<HTMLElement>("[data-chapter]").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onToggle: (self) => {
          if (!self.isActive) return;
          setChapter({
            numeral: el.dataset.chapter ?? "",
            title: el.dataset.chapterTitle ?? "",
          });
        },
      });
    });

    ScrollTrigger.create({
      start: 0,
      end: () => ScrollTrigger.maxScroll(window),
      onUpdate: (self) => setProgress(self.progress),
    });
  });

  return (
    <aside
      className="label fixed bottom-6 left-7 z-[60] hidden items-center gap-3 md:flex"
      style={{ color: "var(--world-fg)" }}
      aria-live="polite"
    >
      <span className="relative h-px w-16 overflow-hidden">
        <span className="hairline absolute inset-0" />
        <span
          className="absolute inset-y-0 left-0 w-full origin-left bg-bronze transition-transform duration-150 ease-linear"
          style={{ transform: `scaleX(${progress})` }}
        />
      </span>
      <span key={chapter.numeral} className="animate-[fade-slide_.6s_ease]">
        Ch. {chapter.numeral} / {chapter.title}
      </span>
    </aside>
  );
}
