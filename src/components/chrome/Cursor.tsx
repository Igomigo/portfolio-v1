"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { CINEMATIC_QUERY } from "@/lib/scroll";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * Hairline cursor: an ink dot with a trailing ring. Over [data-cursor]
 * targets the ring tightens; over [data-cursor-label] it fills bronze
 * and shows a verb. Colors ride the world variables.
 */
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [mode, setMode] = useState<"idle" | "tight" | "labeled">("idle");

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add(CINEMATIC_QUERY, () => {

      const pos = { x: innerWidth / 2, y: innerHeight / 2 };
      const ringPos = { ...pos };

      const onMove = (e: MouseEvent) => {
        pos.x = e.clientX;
        pos.y = e.clientY;
      };
      window.addEventListener("mousemove", onMove);

      const tick = () => {
        ringPos.x += (pos.x - ringPos.x) * 0.16;
        ringPos.y += (pos.y - ringPos.y) * 0.16;
        if (dot.current)
          dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%,-50%)`;
        if (ring.current)
          ring.current.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%,-50%)`;
      };
      gsap.ticker.add(tick);

      const over = (e: MouseEvent) => {
        const t = (e.target as HTMLElement).closest<HTMLElement>(
          "[data-cursor], [data-cursor-label]"
        );
        if (t?.dataset.cursorLabel) {
          setLabel(t.dataset.cursorLabel);
          setMode("labeled");
        } else if (t) {
          setMode("tight");
        } else {
          setMode("idle");
        }
      };
      window.addEventListener("mouseover", over);

      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseover", over);
        gsap.ticker.remove(tick);
      };
    });
    return () => media.revert();
  });

  return (
    <div className="custom-cursor pointer-events-none fixed inset-0 z-[80] hidden [@media(pointer:fine)]:block">
      <div
        ref={dot}
        className="absolute left-0 top-0 size-[6px] rounded-full transition-opacity duration-200"
        style={{
          background: "var(--world-fg)",
          opacity: mode === "labeled" ? 0 : 1,
        }}
      />
      <div
        ref={ring}
        className="absolute left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,background-color,border-color] duration-300 ease-out"
        style={{
          width: mode === "labeled" ? 84 : mode === "tight" ? 22 : 38,
          height: mode === "labeled" ? 84 : mode === "tight" ? 22 : 38,
          borderColor:
            mode === "labeled"
              ? "#a9834f"
              : "color-mix(in srgb, var(--world-fg) 45%, transparent)",
          background: mode === "labeled" ? "#a9834f" : "transparent",
        }}
      >
        <span
          className="label text-bone transition-opacity duration-200"
          style={{ opacity: mode === "labeled" ? 1 : 0 }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
