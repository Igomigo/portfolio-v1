import Image from "next/image";

import {
  Reveal,
  Spark,
  eyebrow,
  handwriting,
  pageWidth,
  sectionTitle,
} from "./shared";

const scene =
  "relative flex h-[330px] items-center justify-center overflow-hidden rounded-md md:h-[520px] md:rounded-lg";

function ProjectDetails({
  children,
  label = "Inside the concept",
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <details className="group mt-2 border-b border-[#e6e6e8] md:mt-5">
      <summary className="flex min-h-11 w-fit list-none items-center gap-4 py-[15px] text-[10px] marker:hidden">
        {label}{" "}
        <span className="text-lg text-[#2458ed] transition group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="motion-enter grid max-w-[850px] grid-cols-1 gap-1.5 pb-[26px] pt-2.5 text-xs leading-[1.8] text-[#737680] md:grid-cols-2 md:gap-x-12 md:gap-y-[18px]">
        {children}
      </div>
    </details>
  );
}

function ProjectInfo({
  name,
  index,
  description,
  tags,
}: {
  name: string;
  index: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col items-start gap-[15px] pt-5 md:flex-row md:items-center md:justify-between md:gap-6 md:pt-6">
      <div>
        <h3 className="mb-2 text-2xl font-medium tracking-[-.045em] md:text-[26px]">
          {name}
          <span className="pl-2.5 align-top font-mono text-[8px] tracking-normal text-[#9a9ca5]">
            {index}
          </span>
        </h3>
        <p className="m-0 text-[11px] leading-[1.6] text-[#80828a] md:text-xs">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-[7px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#e3e4e8] px-[9px] py-[5px] text-[8px] text-[#7b7d87] md:px-[11px] md:py-1.5 md:text-[9px]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function TailrMockup() {
  return (
    <div
      className={`${scene} bg-[#f2ece2] bg-[radial-gradient(ellipse_at_48%_30%,#fffdf9_0%,#f2ece2_65%,#e9e0d4_100%)] md:h-[600px]`}
    >
      <span className="absolute left-[18px] top-[18px] font-mono text-[7px] tracking-[.09em] text-[#817261] md:left-7 md:top-[26px] md:text-[9px]">
        01 — AI RESUME BUILDER
      </span>

      <a
        href="/tailr-app.png"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the full-size screenshot of Tailr's resume builder"
        className="relative mt-5 block w-[90%] rotate-[-3deg] overflow-hidden rounded-[9px] border border-white/15 bg-black shadow-[0_30px_65px_#34251938] transition duration-700 hover:rotate-0 focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a57228] md:mt-6 md:w-[76%] md:max-w-[760px] md:rounded-[13px] md:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(3deg)_rotateZ(-2deg)] md:hover:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)] md:focus-visible:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)]"
      >
        <Image
          src="/tailr-app.png"
          alt="Tailr's dark resume builder interface with a chat prompt and resume template gallery"
          width={3456}
          height={2234}
          sizes="(min-width: 1280px) 760px, (min-width: 768px) 76vw, 90vw"
          quality={90}
          className="block h-auto w-full"
        />
      </a>

      <span className="absolute bottom-[12px] right-[18px] rotate-[-4deg] font-[family-name:var(--font-hand)] text-[20px] text-[#a57228] md:bottom-[20px] md:right-8 md:text-[25px]">
        your experience, tailored.
      </span>
    </div>
  );
}

function PickyMockup() {
  return (
    <div
      className={`${scene} bg-[#eeebfa] bg-[radial-gradient(ellipse_at_50%_25%,#fffdfb_0%,#f2efff_58%,#e6e1fb_100%)] md:h-[600px]`}
    >
      <span className="absolute left-[18px] top-[18px] font-mono text-[7px] tracking-[.09em] text-[#77709f] md:left-7 md:top-[26px] md:text-[9px]">
        02 — AI SHOPPING ASSISTANT
      </span>

      <a
        href="/picky.png"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the full-size screenshot of Picky's shopping comparison"
        className="relative mt-5 block w-[90%] rotate-[-3deg] overflow-hidden rounded-[9px] border border-white/80 bg-white shadow-[0_30px_65px_#3d2b7d26] transition duration-700 hover:rotate-0 focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4f46e5] md:mt-6 md:w-[76%] md:max-w-[760px] md:rounded-[13px] md:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(3deg)_rotateZ(-2deg)] md:hover:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)] md:focus-visible:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)]"
      >
        <Image
          src="/picky.png"
          alt="Picky comparing phone listings from an online marketplace"
          width={3456}
          height={2234}
          sizes="(min-width: 1280px) 760px, (min-width: 768px) 76vw, 90vw"
          quality={90}
          className="block h-auto w-full"
        />
      </a>

      <span className="absolute bottom-[12px] right-[18px] rotate-[-4deg] font-[family-name:var(--font-hand)] text-[20px] text-[#4f46e5] md:bottom-[20px] md:right-8 md:text-[25px]">
        the right pick, without the guesswork.
      </span>
    </div>
  );
}

function RelayMockup() {
  const items = [
    ["↙", "A new idea", "Capture the request"],
    ["✳", "A little intelligence", "Find the next step"],
    ["✓", "One less task", "Make it happen"],
  ];
  return (
    <div
      className={`${scene} bg-[#f4f1ea] [background-image:radial-gradient(#dbd6cc_1px,transparent_1px)] [background-size:16px_16px]`}
    >
      <span className="absolute left-[18px] top-[18px] font-mono text-[7px] tracking-[.09em] text-[#999181] md:left-7 md:top-[26px] md:text-[9px]">
        03 — THOUGHTFUL AUTOMATION
      </span>
      <div className="w-[91%] rotate-[1.5deg] rounded-lg border border-[#e5e0d7] bg-[#fffefa] px-3 py-5 shadow-[0_20px_45px_#746b5510] transition duration-700 hover:rotate-0 md:w-[82%] md:p-[34px]">
        <div className="flex items-center gap-[11px] text-[17px] leading-[1.15] tracking-[-.05em] md:gap-[17px] md:text-xl">
          <span className="grid size-[34px] place-items-center rounded-[7px] bg-[#fa633b] text-[21px] font-semibold text-white md:size-12 md:rounded-[9px] md:text-[25px]">
            r↗
          </span>
          <span>
            Good things.
            <br />
            <strong className="font-medium text-[#a5a298]">
              On autopilot.
            </strong>
          </span>
        </div>
        <div className="flex items-center py-[26px] md:pb-8 md:pt-10">
          {items.map((item, i) => (
            <div className="contents" key={item[1]}>
              {i > 0 && (
                <div className="motion-flow relative h-px w-3 shrink-0 bg-[#ded7c9] md:w-[35px]">
                  <i className="absolute -top-0.5 size-[5px] rounded-full bg-[#f78360]" />
                </div>
              )}
              <div
                className={`flex-1 rounded-[5px] border bg-white p-[7px] md:rounded-[7px] md:px-[13px] md:py-4 ${i === 1 ? "border-[#f1bcae] shadow-[0_4px_12px_#e87d4910]" : "border-[#e7e3dc]"}`}
              >
                <span
                  className={`mb-[11px] grid size-[22px] place-items-center rounded-md bg-[#f7f5f0] text-sm md:mb-[17px] md:size-[26px] md:text-[17px] ${i === 1 ? "bg-[#fff0e9] text-[#ec6c47]" : ""}`}
                >
                  {item[0]}
                </span>
                <strong className="block text-[8px] font-medium leading-[1.4] tracking-[-.03em] md:text-[11px]">
                  {item[1]}
                </strong>
                <small className="mt-[5px] block text-[6px] leading-[1.4] text-[#9b988f] md:text-[8px]">
                  {item[2]}
                </small>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-2 border-t border-[#efede6] pt-[13px] text-[5px] text-[#9b988f] md:pt-[18px] md:text-[7px]">
          <span>
            <i className="mr-1 inline-block size-1 rounded-full bg-[#72a786]" />
            Everything in its right place.
          </span>
          <span>relay / workflow studio</span>
        </div>
      </div>
      <span
        className={`${handwriting} absolute bottom-[15px] right-[17px] rotate-[-5deg] text-[19px] text-[#c06443] md:bottom-[22px] md:right-9 md:text-[25px]`}
      >
        more time for the good stuff.
      </span>
    </div>
  );
}

export default function Work() {
  const commonDetails = "col-span-full font-mono text-[8px]";
  return (
    <section
      id="work"
      className={`${pageWidth} py-[65px] md:pb-[105px] md:pt-[115px]`}
      aria-labelledby="work-title"
    >
      <Reveal className="mb-7 flex flex-col items-start justify-between gap-[23px] md:mb-12 md:flex-row md:items-end md:gap-10">
        <div>
          <p className={`${eyebrow} mb-5 md:mb-6`}>
            SELECTED WORK
          </p>
          <h2 id="work-title" className={sectionTitle}>
            A few things
            <br />
            <span className="text-[#93949a]">I’ve worked on.</span>
          </h2>
        </div>
        <div className="flex w-full items-center justify-between gap-5 md:relative md:block md:w-auto md:pt-8">
          <Spark className="hidden size-[34px] rotate-[8deg] text-[#2458ed] md:absolute md:-top-2 md:left-[30px] md:block" />
          <span
            className={`${handwriting} rotate-[-5deg] text-[22px] md:mb-3 md:block md:text-[25px]`}
          >
            made. imagined. explored.
          </span>
          <p className="m-0 text-[8px] leading-[1.7] text-[#8a8b92] md:text-[10px]">
            A closer look at the work.
            <br />
            More projects are on their way.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <article>
          <TailrMockup />
          <ProjectInfo
            name="Tailr"
            index="01"
            description="An AI resume builder you can talk to."
            tags={["AI product", "Full-stack", "Document systems"]}
          />
          <ProjectDetails label="Inside the product">
            <p>
              Tailr makes tailoring a resume feel like a conversation. Share the
              job description, upload your current resume if you have one, and
              work with AI to bring the most relevant parts of your experience
              forward. Then choose a template and turn it into a polished PDF
              ready to send.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                What I built
              </strong>
              I built Tailr end to end: the chat interface, resume uploads and
              job-description handling, AI-assisted drafting, template gallery,
              and PDF generation. Together, they make a powerful workflow feel
              as simple as explaining the role you want.
            </p>
            <span className={commonDetails}>AI RESUME BUILDER</span>
          </ProjectDetails>
        </article>
      </Reveal>
      <Reveal className="mt-10 md:mt-[72px]">
        <article>
          <PickyMockup />
          <ProjectInfo
            name="Picky"
            index="02"
            description="An AI shopping assistant that finds the one worth buying."
            tags={["AI product", "Shopping", "Full-stack"]}
          />
          <ProjectDetails label="Inside the product">
            <p>
              Tell Picky what you’re looking for and it gathers live listings
              in one place. It compares price, condition, and seller feedback,
              then recommends the strongest option with a clear reason and an
              alternative worth considering.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                What I built
              </strong>
              I built the search-to-recommendation flow: collecting product
              listings and seller reviews from Jiji, showing the options as
              they come in, comparing them with AI, and turning the analysis
              into a reasoned pick and a backup choice.
            </p>
            <span className={commonDetails}>AI SHOPPING ASSISTANT</span>
          </ProjectDetails>
        </article>
      </Reveal>
      <Reveal className="mt-10 md:mt-[72px]">
        <article>
          <RelayMockup />
          <ProjectInfo
            name="Relay"
            index="03"
            description="Less moving things around. More moving forward."
            tags={["Automation", "Systems"]}
          />
          <ProjectDetails>
            <p>
              A study of a visual workflow builder that makes automated work
              understandable. Every step shows what goes in, what happens, and
              what comes next.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                The engineering question
              </strong>
              How do you make retries, approvals, and failure states as
              understandable as the happy path?
            </p>
            <span className={commonDetails}>
              DESIGN STUDY · NOT A SHIPPED CLIENT PROJECT
            </span>
          </ProjectDetails>
        </article>
      </Reveal>
    </section>
  );
}
