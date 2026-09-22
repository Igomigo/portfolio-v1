"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { identity } from "@/lib/data";
import {
  Arrow,
  Reveal,
  Spark,
  Underline,
  eyebrow,
  handwriting,
  pageWidth,
  primaryButton,
} from "./shared";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setFailed(false);
    } catch {
      setFailed(true);
    }
  }
  return (
    <section
      id="contact"
      className="border-t border-[#e8ebf3] bg-[#f4f6fc] pt-10 md:pt-[65px]"
    >
      <div className={pageWidth}>
        <Reveal className="flex items-center justify-between">
          <p
            className={`${eyebrow} m-0 max-w-[190px] text-[7px] text-[#787e8e] md:max-w-none md:text-[9px]`}
          >
            OPEN TO THE RIGHT ENGINEERING TEAM.
          </p>
          <Spark className="mr-2 size-[35px] text-[#2458ed] md:mr-[18px] md:size-[53px]" />
        </Reveal>
        <Reveal className="grid grid-cols-1 items-center gap-[38px] pb-[35px] pt-7 md:grid-cols-[1.4fr_1fr] md:gap-[70px] md:pb-[65px] md:pt-[45px]">
          <h2 className="text-[clamp(61px,14.4vw,100px)] font-medium leading-[1.05] tracking-[-.07em] md:text-[clamp(70px,8vw,115px)]">
            Building
            <br />
            something{" "}
            <span className="relative inline-block text-[#2458ed]">
              ambitious?
              <Underline />
            </span>
          </h2>
          <div>
            <p className="mb-5 text-[13px] leading-[1.85] text-[#737a8b] md:mb-[26px] md:text-[15px]">
              I’m interested in engineering roles where strong systems,
              thoughtful products, AI, and attention to detail matter.
            </p>
            <a className={primaryButton} href={`mailto:${identity.email}`}>
              Start a conversation <Arrow diagonal />
            </a>
            <span
              className={`${handwriting} mt-[22px] block rotate-[-4deg] md:mt-[21px] md:text-[22px]`}
            >
              good teams build remarkable things.
            </span>
          </div>
        </Reveal>
        <div className="relative flex flex-wrap items-center gap-2 pb-[35px] md:gap-[25px] md:pb-11">
          <a
            className="text-xs tracking-[-.025em] md:text-sm"
            href={`mailto:${identity.email}`}
          >
            {identity.email}
          </a>
          <button
            className="min-h-11 px-[7px] text-[8px] text-[#868da0] md:px-3 md:text-[9px]"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {copied ? "Copied ✓" : "Copy email ↗"}
          </button>
          <span
            className="absolute bottom-3 text-[9px] text-[#2458ed] md:bottom-5 md:text-[10px]"
            role="status"
          >
            {failed
              ? "Please select the email address to copy it."
              : copied
                ? "Email address copied."
                : ""}
          </span>
        </div>
        <footer className="flex flex-wrap items-center gap-4 border-t border-[#dfe3ee] py-6 text-[8px] text-[#868da0] md:gap-[30px] md:text-[9px]">
          <a
            href="#top"
            className="mr-1 text-[28px] font-semibold leading-none tracking-[-.09em] text-[#202124]"
          >
            fi<span className="text-[#2458ed]">.</span>
          </a>
          <span>© 2026 Fatai Igomigo</span>
          <span className="hidden md:inline">Made with intention.</span>
          <Link
            className="ml-auto flex min-h-11 items-center gap-1 md:gap-2"
            href="/archive/original"
          >
            View original <Arrow diagonal className="size-3" />
          </Link>
          <a
            className="hidden p-3 text-[17px] text-[#202124] md:block"
            href="#top"
            aria-label="Back to top"
          >
            ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
