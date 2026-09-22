import {
  Reveal,
  Spark,
  eyebrow,
  handwriting,
  pageWidth,
  sectionTitle,
} from "./shared";

export default function About() {
  return (
    <section
      id="about"
      className={`${pageWidth} grid grid-cols-1 gap-[45px] border-t border-[#e6e6e8] py-[65px] md:grid-cols-[1fr_1.15fr] md:gap-[120px] md:pb-[120px] md:pt-[105px]`}
      aria-labelledby="about-title"
    >
      <Reveal>
        <p className={`${eyebrow} mb-5 md:mb-6`}>04 / THE HUMAN BIT</p>
        <div className="relative mx-auto mt-9 flex h-[210px] w-[230px] rotate-[-5deg] flex-col items-start rounded-[3px] border border-[#e7e6e2] bg-[#fbfaf6] p-[25px] shadow-[4px_9px_20px_#2d251105] md:mx-0 md:mt-10 md:h-[255px] md:w-[270px] md:px-7 md:py-[38px]">
          <Spark className="absolute right-[23px] top-[23px] size-8 text-[#2458ed] md:right-[27px] md:top-8 md:size-[38px]" />
          <span className={handwriting}>Hello, I’m</span>
          <strong className="mb-[17px] mt-1.5 text-[65px] font-medium leading-[1.2] tracking-[-.07em] md:mb-[23px] md:mt-[9px] md:text-[72px]">
            Fatai.
          </strong>
          <span className="font-mono text-[7px] tracking-[.09em] text-[#9e9d95]">
            ENGINEER. ALWAYS A STUDENT.
          </span>
        </div>
        <span
          className={`${handwriting} mt-[27px] block rotate-[-4deg] text-center md:ml-[84px] md:mt-[30px] md:text-left`}
        >
          still asking “what if?”
        </span>
      </Reveal>
      <Reveal>
        <h2 id="about-title" className={`${sectionTitle} mb-6 md:mb-[30px]`}>
          A systems mind.
          <br />
          An eye for the details.
        </h2>
        <p className="mb-5 text-[13px] leading-[1.9] text-[#7e818a] md:text-sm">
          I’m a software engineer working across products, AI agents, and
          automation. I like the space where a difficult technical problem meets
          a very human need.
        </p>
        <p className="mb-5 text-[13px] leading-[1.9] text-[#7e818a] md:text-sm">
          I care about the architecture behind an experience as much as the
          experience itself. The useful abstraction. The thoughtful default. The
          interaction that makes you think,{" "}
          <em className="font-normal text-[#202124]">“of course.”</em>
        </p>
        <div className="mt-[34px] border-t border-[#e6e6e8] pt-[22px]">
          <span className="font-mono text-[8px] tracking-[.09em] text-[#a0a2aa]">
            THINGS I THINK ABOUT
          </span>
          <div className="mt-[17px] grid grid-cols-2 gap-x-2.5 gap-y-3.5 text-[10px] text-[#666b76] md:gap-x-6 md:text-[11px]">
            <span>Product engineering</span>
            <span>Intelligent systems</span>
            <span>Interfaces & motion</span>
            <span>APIs & infrastructure</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
