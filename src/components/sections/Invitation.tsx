"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { identity } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SOCIALS = ["GitHub", "LinkedIn", "X / Twitter"] as const;

/** Chapter VI — The Invitation. Night world; the journey ends at a door. */
export default function Invitation() {
  const root = useRef<HTMLElement>(null);
  const magnet = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".invite-rise",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 62%" },
        }
      );

      // magnetic email button
      const el = magnet.current;
      if (!el || window.matchMedia("(pointer: coarse)").matches) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          xTo(dx * 0.28);
          yTo(dy * 0.28);
        } else {
          xTo(0);
          yTo(0);
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="invitation"
      data-chapter="VI"
      data-chapter-title="The Invitation"
      data-world-bg="#181510"
      data-world-fg="#f2ebdc"
      className="relative flex min-h-svh flex-col justify-between bg-ink px-7 pb-8 pt-[18vh] text-cream"
    >
      <div className="flex flex-col items-center text-center">
        <p className="invite-rise label mb-8 text-bronze">
          Ch. VI <span className="text-cream/40">/</span> The Invitation
        </p>
        <h2 className="invite-rise font-serif-display text-[clamp(3rem,10vw,9rem)] leading-[0.98]">
          Let&apos;s build
          <br />
          <span className="italic text-bronze">impossible</span> things.
        </h2>
        <p className="invite-rise mt-8 max-w-md text-[15px] leading-relaxed text-cream/55">
          Products, platforms, and autonomous agents. If it needs to be
          engineered beautifully, I&apos;m your traveler.
        </p>
        <a
          ref={magnet}
          href={`mailto:${identity.email}`}
          data-cursor-label="Say hi"
          className="invite-rise mt-12 inline-block rounded-full border border-cream/25 px-9 py-4 font-mono text-[13px] tracking-[0.08em] transition-colors duration-300 hover:border-bronze hover:text-bronze"
        >
          {identity.email}
        </a>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/12 pt-6">
        <span className="label text-cream/45">© 2026 Fatai Igomigo</span>
        <div className="flex gap-7">
          {SOCIALS.map((s) => (
            <a key={s} href="#" data-cursor className="label text-cream/60 transition-colors hover:text-bronze">
              {s}
            </a>
          ))}
        </div>
        <span className="label text-cream/45">Crafted between worlds</span>
      </footer>
    </section>
  );
}
