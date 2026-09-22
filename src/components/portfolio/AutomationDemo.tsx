"use client";

import { useEffect, useState } from "react";
import {
  Arrow,
  Reveal,
  eyebrow,
  handwriting,
  pageWidth,
  primaryButton,
  sectionTitle,
} from "./shared";

const steps = [
  "A request comes in",
  "The right context is found",
  "A useful draft is ready",
];

export default function AutomationDemo() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!running) return;
    const timers = [1, 2, 3].map((next) =>
      window.setTimeout(() => setStep(next), next * 650),
    );
    timers.push(window.setTimeout(() => setRunning(false), 2150));
    return () => timers.forEach(clearTimeout);
  }, [running]);
  return (
    <section
      className="border-y border-[#eeeff1] bg-[#f7f8fa] py-[60px] md:py-[90px]"
      aria-labelledby="demo-title"
    >
      <div
        className={`${pageWidth} grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-[100px]`}
      >
        <Reveal>
          <p className={`${eyebrow} mb-5 md:mb-6`}>
            02 / A SMALL DEMONSTRATION
          </p>
          <h2 id="demo-title" className={sectionTitle}>
            Less busywork.
            <br />
            <span className="text-[#93949a]">More possibility.</span>
          </h2>
          <p className="mb-[25px] mt-[21px] max-w-[340px] text-[13px] leading-[1.85] text-[#80838c] md:mb-[30px] md:mt-6">
            The best automation gives you something back. Your attention. Your
            afternoon. The space to do work that matters.
          </p>
          <button
            className={`${primaryButton} border-[#dadce2] bg-white text-[#202124] hover:text-white disabled:cursor-wait disabled:opacity-60`}
            disabled={running}
            onClick={() => {
              setStep(0);
              setRunning(true);
            }}
          >
            {running
              ? "Making it happen…"
              : step === 3
                ? "Run it again"
                : "Give it a little nudge"}
            <Arrow />
          </button>
          <span
            className={`${handwriting} ml-[15px] inline-block rotate-[-8deg] text-[21px] md:ml-5 md:text-[23px]`}
          >
            go on, try it ↗
          </span>
        </Reveal>
        <Reveal className="rounded-[9px] border border-[#e1e4eb] bg-white p-[19px] shadow-[0_16px_35px_#27304906] md:p-[26px]">
          <div className="mb-[22px] flex items-center justify-between gap-3">
            <span className="font-mono text-[8px] tracking-[.09em] text-[#989ba5]">
              A TINY WORKFLOW
            </span>
            <span className="rounded-full bg-[#f2f5ff] px-[9px] py-[5px] text-[8px] text-[#2458ed]">
              Interactive demo
            </span>
          </div>
          {steps.map((label, index) => {
            const done = step > index;
            return (
              <div
                key={label}
                className={`flex items-center gap-[15px] border-t border-[#eeeff3] py-[19px] text-[11px] transition md:text-xs ${done ? "text-[#202124]" : "text-[#777d8a]"}`}
              >
                <span
                  className={`grid size-[30px] place-items-center rounded-full border text-[9px] transition ${done ? "border-[#2458ed] bg-[#2458ed] text-white" : "border-[#e4e6ed]"}`}
                >
                  {done ? "✓" : `0${index + 1}`}
                </span>
                <span>{label}</span>
                <span
                  className={`ml-auto size-[5px] rounded-full ${done ? "bg-[#58a67c]" : "bg-[#e1e4ec]"}`}
                />
              </div>
            );
          })}
          <div
            className="flex min-h-[50px] items-center justify-between gap-3 rounded-[5px] bg-[#f7f8fb] p-[14px] text-[9px] text-[#7f8696] md:text-[10px]"
            role="status"
          >
            {step === 3
              ? "Done. You take it from here."
              : running
                ? "Connecting the dots…"
                : "Three steps. One less thing on your mind."}
            <span className="text-lg text-[#2458ed]">
              {step === 3 ? "↗" : "↳"}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
