"use client";

import { useEffect, useState } from "react";
import { Arrow, Underline, pageWidth, primaryButton } from "./shared";

export default function Hero() {
  const [shift, setShift] = useState(0);
  useEffect(() => {
    let frame = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      frame = 0;
      setShift(reduce.matches ? 0 : Math.min(scrollY * 0.09, 65));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, []);
  return (
    <section
      className={`${pageWidth} pt-[35px] md:pt-[62px]`}
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-1 items-center gap-2.5 pb-[30px] pt-[7px] md:grid-cols-[1.45fr_1fr] md:gap-[35px] md:pb-[65px] md:pt-[9px]">
        <div>
          <h1
            id="hero-title"
            className="motion-enter m-0 mb-[30px] text-[clamp(52px,12vw,85px)] font-medium leading-[1.04] tracking-[-.07em] md:mb-[38px] md:text-[clamp(64px,7.45vw,108px)] md:leading-[1.01] md:tracking-[-.075em]"
          >
            I build software
            <br />
            <span className="relative inline-block text-[#2458ed]">
              that works beautifully.
              <Underline />
            </span>
          </h1>
          <div className="motion-enter-delayed">
            <p className="mb-5 max-w-[310px] text-[13px] leading-[1.75] text-[#6e7077] md:mb-[27px] md:max-w-none md:text-[15px] md:leading-[1.8]">
              I’m Fatai, a software engineer specializing in product
              engineering, AI agents, and automation. I build scalable products
              end to end from thoughtful interfaces to resilient backend
              systems.
            </p>
            <a className={primaryButton} href="#work">
              Explore my work <Arrow className="size-[17px]" />
            </a>
          </div>
        </div>
        <div
          className="relative mx-auto mb-[30px] mt-[47px] h-[300px] w-[250px] md:mb-0 md:mt-6 md:h-[390px] md:w-full md:max-w-[355px]"
          style={{
            transform: `translateY(${shift}px)`,
          }}
          aria-label="An animated sketch transforming a tangled line into a clear path"
        >
          <span className="absolute -right-[27px] -top-[23px] z-[2] rotate-[8deg] font-[family-name:var(--font-hand)] text-2xl font-medium leading-none text-[#2458ed] md:-right-[18px] md:-top-[42px] md:text-[25px]">
            built for people.
            <br />
            ready to scale.
          </span>
          <svg
            className="absolute -right-[26px] top-6 z-[3] h-[55px] w-[49px] text-[#2458ed] md:-right-5 md:top-1 md:h-[66px] md:w-[68px]"
            viewBox="0 0 90 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M77 5C77 48 56 58 17 60m13-12L15 60l16 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-x-4 bottom-[26px] top-4 rotate-[9deg] rounded-[3px] border border-[#e4e5e9] bg-[#f4f6fa] shadow-[2px_10px_30px_#222a4510] md:inset-x-[14px] md:bottom-[30px] md:top-8" />
          <div className="motion-paper absolute inset-x-4 bottom-[26px] top-4 rotate-[-7deg] rounded-[3px] border border-[#e4e5e9] bg-white p-4 shadow-[0_15px_30px_#222a4510] md:inset-x-[14px] md:bottom-[30px] md:top-8 md:p-[23px]">
            <div className="flex items-center justify-between text-[#888b94]">
              <span className="size-[7px] rounded-full border border-[#9b9ca3]" />
            </div>
            <svg
              className="h-[153px] w-full overflow-visible text-[#2458ed] md:h-[200px]"
              viewBox="0 0 300 240"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="motion-tangle"
                d="M20 100C54 27 154 33 152 108S34 166 79 82 211 51 171 125 76 146 98 79 227 118 176 149 73 84 147 67 239 148 185 163 107 100 163 83 241 90 218 145 165 186 169 135 246 109 263 126"
                stroke="#b4b8c2"
                strokeWidth="1.2"
              />
              <path
                className="motion-draw"
                pathLength="1"
                d="M22 184C80 184 72 123 131 123H261m-12-12 13 12-13 12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle className="motion-traveler" r="5" fill="currentColor">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M22 184C80 184 72 123 131 123H261"
                />
              </circle>
            </svg>
            <div className="flex items-center justify-between text-[10px] leading-[1.5] md:text-xs">
              <span>
                  Clear product.
                <br />
                <strong className="font-medium text-[#2458ed]">
                  Strong system.
                </strong>
              </span>
              <span className="text-[22px] font-light">+</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-y border-[#e6e6e8] py-[17px] text-[8px] text-[#777981] md:py-[22px] md:text-[10px]">
        <span>
          Product engineer{" "}
          <span className="mx-[7px] text-[#c3c3c8] md:mx-2.5">/</span> AI &
          intelligent systems
        </span>
        <a className="flex gap-0 md:gap-6" href="#work">
          <span className="hidden md:inline">Selected engineering work</span>
          <b className="text-[15px] font-normal text-[#202124]">↓</b>
        </a>
      </div>
    </section>
  );
}
