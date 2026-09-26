"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ProjectGallerySlide } from "./project-types";

export default function ProjectGallery({ slides, name }: { slides: ProjectGallerySlide[]; name: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track || index < 0 || index >= slides.length) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    setActive(index);
  }

  return (
    <div className="mx-auto max-w-[1120px]">
      <div
        ref={trackRef}
        aria-label={`${name} screenshots`}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
        }}
        onScroll={(event) => {
          const track = event.currentTarget;
          setActive(Math.min(slides.length - 1, Math.max(0, Math.round(track.scrollLeft / track.clientWidth))));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[7px] border border-white/20 bg-black shadow-[0_32px_80px_#231a1433] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#2458ed] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:rounded-[12px]"
      >
        {slides.map((slide) => (
          <div key={slide.src} className="w-full shrink-0 snap-center">
            <Image src={slide.src} alt={slide.alt} width={slide.width} height={slide.height} sizes="(min-width: 1280px) 1120px, (min-width: 768px) 85vw, 90vw" quality={90} className="block h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 text-[#26231f] md:mt-7">
        <div aria-live="polite" className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#786f65]">{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</p>
          <p className="mt-1 text-[17px] font-medium md:text-[21px]">{slides[active].title}</p>
          <p className="mt-1 text-[13px] text-[#665e55] md:text-[15px]">{slides[active].description}</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous screenshot" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#493d3033] text-[20px] transition hover:border-[#493d30] hover:bg-white/60 disabled:cursor-default disabled:opacity-35">←</button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === slides.length - 1} aria-label="Next screenshot" className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#493d3033] text-[20px] transition hover:border-[#493d30] hover:bg-white/60 disabled:cursor-default disabled:opacity-35">→</button>
        </div>
      </div>
      <div className="mt-5 flex gap-1.5" aria-label="Gallery position">
        {slides.map((slide, index) => (
          <button key={slide.src} type="button" onClick={() => goTo(index)} aria-label={`Show screenshot ${index + 1}: ${slide.title}`} aria-current={active === index ? "true" : undefined} className={`h-1.5 flex-1 cursor-pointer rounded-full transition-colors ${active === index ? "bg-[#675343]" : "bg-[#675343]/20 hover:bg-[#675343]/45"}`} />
        ))}
      </div>
      <p className="mt-3 text-[11px] text-[#786f65] md:hidden">Swipe to explore more screens</p>
    </div>
  );
}
