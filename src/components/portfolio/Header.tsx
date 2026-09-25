"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Arrow } from "./shared";

export default function Header({ projectName }: { projectName?: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-white/45 bg-white/55 px-[22px] pt-[env(safe-area-inset-top)] shadow-[0_1px_0_rgba(32,33,36,.05)] backdrop-blur-[4px] md:h-[88px] md:px-9 xl:px-14">
      <Link
        href={projectName ? "/" : "#top"}
        className="text-[31px] font-semibold leading-none tracking-[-.09em] text-[#202124] md:text-4xl"
        aria-label={
          projectName ? "Fatai Igomigo, home" : "Fatai Igomigo, back to top"
        }
      >
        fi<span className="text-[#2458ed]">.</span>
      </Link>
      {projectName ? (
        <>
          <span className="absolute left-1/2 hidden -translate-x-1/2 font-mono text-[9px] uppercase tracking-[.14em] text-[#92949c] md:block">
            Selected work / {projectName}
          </span>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-[11px] text-[#383b43] transition-colors hover:text-[#2458ed] md:text-xs"
          >
            <Arrow className="size-4 rotate-180" />
            Back home
          </Link>
        </>
      ) : (
        <nav
          className="flex items-center gap-[23px] text-[11px] md:gap-[34px] md:text-xs"
          aria-label="Main navigation"
        >
          <a
            className="flex min-h-11 items-center transition hover:text-[#2458ed]"
            href="#work"
          >
            Work
          </a>
          <a
            className="flex min-h-11 items-center transition hover:text-[#2458ed]"
            href="#about"
          >
            About
          </a>
          <a
            className="flex min-h-11 items-center gap-2 transition hover:text-[#2458ed] md:ml-4 md:gap-3"
            href="#contact"
          >
            Let’s talk <Arrow diagonal className="size-[15px] md:size-5" />
          </a>
        </nav>
      )}
      <span
        className="absolute -bottom-px left-0 h-0.5 w-full origin-left bg-[#2458ed]"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </header>
  );
}
