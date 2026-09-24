"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import {
  Arrow,
  Reveal,
  eyebrow,
  handwriting,
  pageWidth,
  sectionTitle,
} from "./shared";

const steps = [
  "Intent understood",
  "Relevant context retrieved",
  "Tools selected and executed",
  "Result checked and delivered",
];

export default function AutomationDemo() {
  const [running, setRunning] = useState(false);
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!running) return;
    const timers = [1, 2, 3, 4].map((next) =>
      window.setTimeout(() => setStep(next), next * 550),
    );
    timers.push(window.setTimeout(() => setRunning(false), 2400));
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
            AI SYSTEMS / INTERACTIVE DEMO
          </p>
          <h2 id="demo-title" className={sectionTitle}>
            From intent
            <br />
            <span className="text-[#93949a]">to verified outcome.</span>
          </h2>
          <p className="mb-[25px] mt-[21px] max-w-[340px] text-[13px] leading-[1.85] text-[#80838c] md:mb-[30px] md:mt-6">
            A capable agent needs more than a prompt. It needs context, the
            right tools, clear execution, and a way to verify its own result.
          </p>
          <Button
            disabled={running}
            icon={<Arrow />}
            onClick={() => {
              setStep(0);
              setRunning(true);
            }}
          >
            {running
              ? "Making it happen…"
              : step === 4
                ? "Run it again"
                : "Run the agent"}
          </Button>
          <span
            className={`${handwriting} ml-[15px] inline-block rotate-[-8deg] text-[21px] md:ml-5 md:text-[23px]`}
          >
            watch the system think{" "}
            <Arrow diagonal className="ml-1 inline-block size-[.85em] align-[-.08em]" />
          </span>
        </Reveal>
        <Reveal className="rounded-[9px] border border-[#e1e4eb] bg-white p-[19px] shadow-[0_16px_35px_#27304906] md:p-[26px]">
          <div className="mb-[22px] flex items-center justify-between gap-3">
            <span className="font-mono text-[8px] tracking-[.09em] text-[#989ba5]">
              AGENT EXECUTION TRACE
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
            {step === 4
              ? "Verified result ready for review."
              : running
                ? "Connecting the dots…"
                : "One intent. A complete, inspectable execution."}
            <span className="text-lg text-[#2458ed]">
              {step === 4 ? "✓" : "↳"}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
