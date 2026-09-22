"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const updateChapter = () => {
      // Read the current layout: pin spacers change chapter positions and
      // lengths after mount and whenever the responsive layout changes.
      let current = sections[0];
      for (const section of sections) {
        const boundary = section.parentElement?.classList.contains("pin-spacer")
          ? section.parentElement
          : section;
        if (boundary.getBoundingClientRect().top <= window.innerHeight * 0.55) {
          current = section;
        }
      }
      if (!current) return;
      const numeral = current.dataset.chapter ?? "";
      const title = current.dataset.chapterTitle ?? "";
      setChapter((previous) => previous.numeral === numeral ? previous : { numeral, title });
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
      updateChapter();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      resize.disconnect();
    };
  }, []);

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
