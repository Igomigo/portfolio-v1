import Image from "next/image";
import {
  Reveal,
  Spark,
  eyebrow,
  handwriting,
  pageWidth,
} from "./shared";

function Portrait() {
  return (
    <div className="absolute right-0 top-10 h-[220px] w-[170px] rotate-[6deg] overflow-hidden rounded-[4px] border border-[#dfe3ee] bg-[#e9eefb] shadow-[0_16px_35px_rgba(36,88,237,.1)] md:top-[72px] md:h-[320px] md:w-[235px]">
      <Image
        src="/fatai.jpg"
        alt="Portrait of Igomigo Fatai"
        fill
        sizes="(min-width: 768px) 235px, 170px"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/35"
        aria-hidden="true"
      />
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className={`${pageWidth} grid grid-cols-1 gap-[58px] py-[78px] md:grid-cols-[1fr_1.08fr] md:gap-[100px] md:py-[120px]`}
      aria-labelledby="about-label"
    >
      <Reveal className="relative mx-auto h-[310px] w-full max-w-[390px] md:mx-0 md:h-[430px] md:max-w-[460px]">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle,#202124_1px,transparent_1.2px)] [background-size:11px_11px] opacity-[.11] md:[background-size:13px_13px]"
          aria-hidden="true"
        />
        <div className="absolute left-0 top-5 z-10 flex h-[220px] w-[205px] rotate-[-6deg] flex-col items-start rounded-[3px] border border-[#e7e6e2] bg-[#fbfaf6] p-[25px] shadow-[4px_9px_20px_#2d251108] md:top-6 md:h-[290px] md:w-[270px] md:px-8 md:py-[42px]">
          <Spark className="absolute right-[22px] top-[22px] size-8 text-[#2458ed] md:right-[27px] md:top-8 md:size-[38px]" />
          <span className={handwriting}>Hello, I’m</span>
          <strong className="mb-[17px] mt-1.5 text-[58px] font-medium leading-[1.2] tracking-[-.07em] md:mb-[27px] md:mt-[9px] md:text-[76px]">
            Fatai.
          </strong>
          <span className="font-mono text-[7px] tracking-[.09em] text-[#9e9d95]">
            ENGINEER. BUILDER.
          </span>
        </div>
        <Portrait />
        <span
          className={`${handwriting} absolute bottom-2 right-2 z-20 rotate-[-4deg] text-[21px] md:bottom-0 md:right-0 md:text-[25px]`}
        >
          the human behind the systems ↗
        </span>
      </Reveal>
      <Reveal className="self-center">
        <p id="about-label" className={`${eyebrow} mb-6 md:mb-8`}>
          ABOUT
        </p>
        <p className="mb-7 max-w-[650px] text-[21px] font-normal leading-[1.55] tracking-[-.025em] text-[#292a2e] md:text-[26px] md:leading-[1.5]">
          I’m a software engineer focused on building complete products,
          scalable backend systems, AI agents, and automation that solves
          meaningful business problems.
        </p>
        <p className="max-w-[620px] text-[17px] leading-[1.75] tracking-[-.012em] text-[#6f737d] md:text-[19px] md:leading-[1.7]">
          I work across the stack from architecture and APIs to the final
          interaction on screen. I care about reliability, clear product
          thinking, and the small design decisions that make complex software
          feel obvious.
        </p>
      </Reveal>
    </section>
  );
}
