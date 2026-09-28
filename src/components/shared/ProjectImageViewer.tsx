"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ProjectGallerySlide } from "./project-types";

type Props = {
  name: string;
  slides: ProjectGallerySlide[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function ProjectImageViewer({ name, slides, index, onChange, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const current = slides[index ?? 0];

  function change(next: number) {
    if (next < 0 || next >= slides.length) return;
    setZoomed(false);
    onChange(next);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={`${name} image gallery`}
      onClose={() => { setZoomed(false); onClose(); }}
      onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current?.close(); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") { event.preventDefault(); change((index ?? 0) + 1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); change((index ?? 0) - 1); }
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-[#111211] p-0 text-white backdrop:bg-black/90"
    >
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex shrink-0 items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-5">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[.14em] text-white/50">{name} <span className="mx-2">/</span> {String((index ?? 0) + 1).padStart(2, "0")} of {String(slides.length).padStart(2, "0")}</p>
            <p className="mt-1 truncate text-[15px] font-medium md:text-[18px]">{current.title}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={() => setZoomed((value) => !value)} aria-label={zoomed ? "Fit image to screen" : "Zoom into image"} className="h-11 cursor-pointer rounded-full border border-white/25 px-3 text-[11px] transition hover:bg-white/10 sm:px-4 sm:text-[12px]">{zoomed ? "Fit" : "Zoom"}</button>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label="Close image viewer" className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 text-[23px] leading-none transition hover:bg-white/10">×</button>
          </div>
        </div>

        <div
          className={`relative min-h-0 flex-1 ${zoomed ? "overflow-auto" : "flex items-center justify-center overflow-hidden"}`}
          onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (zoomed || touchStartX.current === null) return;
            const distance = event.changedTouches[0].clientX - touchStartX.current;
            if (Math.abs(distance) > 55) change((index ?? 0) + (distance < 0 ? 1 : -1));
            touchStartX.current = null;
          }}
        >
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="(min-width: 1280px) 1600px, 200vw"
            quality={90}
            className={zoomed ? "mx-auto block h-auto w-[200vw] max-w-none" : "block h-auto max-h-full w-auto max-w-full object-contain"}
          />
        </div>

        <div className={`flex shrink-0 items-center gap-3 px-4 py-3 md:px-8 md:py-5 ${slides.length > 1 ? "justify-between" : "justify-center"}`}>
          {slides.length > 1 && <button type="button" onClick={() => change((index ?? 0) - 1)} disabled={index === 0} aria-label="Previous full-screen image" className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 text-[21px] transition hover:bg-white/10 disabled:cursor-default disabled:opacity-30">←</button>}
          <p className="hidden max-w-[65ch] truncate text-center text-[12px] text-white/60 sm:block">{current.description}</p>
          <a href={current.src} target="_blank" rel="noopener noreferrer" className="text-center text-[11px] text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white sm:hidden">Open original ↗</a>
          {slides.length > 1 && <button type="button" onClick={() => change((index ?? 0) + 1)} disabled={index === slides.length - 1} aria-label="Next full-screen image" className="grid size-11 cursor-pointer place-items-center rounded-full border border-white/25 text-[21px] transition hover:bg-white/10 disabled:cursor-default disabled:opacity-30">→</button>}
        </div>
      </div>
    </dialog>
  );
}
