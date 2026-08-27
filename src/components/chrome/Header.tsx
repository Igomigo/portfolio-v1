"use client";

import { scrollToEl } from "@/lib/scroll";

const LINKS = [
  { label: "About", target: "#craft" },
  { label: "Work", target: "#work" },
  { label: "Contact", target: "#invitation" },
] as const;

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-5 sm:px-7 sm:py-6">
      <button
        onClick={() => scrollToEl("#origin")}
        className="font-serif-display text-[17px] italic"
        data-cursor
        style={{ color: "var(--world-fg)" }}
      >
        Fatai Igomigo
      </button>
      <nav className="flex items-center gap-4 sm:gap-7">
        <span
          className="label hidden items-center gap-2 opacity-60 md:flex"
          style={{ color: "var(--world-fg)" }}
        >
          <i className="inline-block size-[6px] rounded-full bg-bronze" />
          Open to work
        </span>
        {LINKS.map((l) => (
          <button
            key={l.label}
            onClick={() => scrollToEl(l.target)}
            className="label group relative"
            data-cursor
            style={{ color: "var(--world-fg)" }}
          >
            {l.label}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-[width] duration-300 ease-out group-hover:w-full" />
          </button>
        ))}
      </nav>
    </header>
  );
}
