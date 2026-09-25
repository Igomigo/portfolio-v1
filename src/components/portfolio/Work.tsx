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

function YachtCrewCenterMockup() {
  return (
    <div
      className={`${scene} bg-[#e6f3f7] bg-[radial-gradient(ellipse_at_50%_30%,#f9fcff_0%,#e6f3f7_65%,#d3e9f1_100%)] md:h-[600px]`}
    >
      <span className="absolute left-[18px] top-[18px] font-mono text-[7px] tracking-[.09em] text-[#5c8192] md:left-7 md:top-[26px] md:text-[9px]">
        03 — YACHT OPERATIONS
      </span>

      <a
        href="/ycc.png"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open the full-size screenshot of Yacht Crew Center"
        className="relative mt-5 block w-[90%] rotate-[2deg] overflow-hidden rounded-[9px] border border-white/20 bg-[#03121c] shadow-[0_30px_65px_#134b6533] transition duration-700 hover:rotate-0 focus-visible:rotate-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1478a8] md:mt-6 md:w-[76%] md:max-w-[760px] md:rounded-[13px] md:[transform:perspective(1200px)_rotateY(5deg)_rotateX(3deg)_rotateZ(2deg)] md:hover:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)] md:focus-visible:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)]"
      >
        <Image
          src="/ycc.png"
          alt="Yacht Crew Center homepage with a yacht at sea and crew resources"
          width={3456}
          height={2234}
          sizes="(min-width: 1280px) 760px, (min-width: 768px) 76vw, 90vw"
          quality={90}
          className="block h-auto w-full"
        />
      </a>

      <span className="absolute bottom-[12px] right-[18px] rotate-[-4deg] font-[family-name:var(--font-hand)] text-[20px] text-[#1478a8] md:bottom-[20px] md:right-8 md:text-[25px]">
        built for life on board.
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
          <p className={`${eyebrow} mb-5 md:mb-6`}>SELECTED WORK</p>
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
              Tell Picky what you’re looking for and it gathers live listings in
              one place. It compares price, condition, and seller feedback, then
              recommends the strongest option with a clear reason and an
              alternative worth considering.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                What I built
              </strong>
              I built picky end to end, the search-to-recommendation flow:
              collecting product listings and seller reviews from Jiji, showing
              the options as they come in, comparing them with AI, and turning
              the analysis into a reasoned pick and a backup choice. Jiji is the
              first live marketplace; the interface already makes room for
              Jumia, Amazon, and more as future sources.
            </p>
            <span className={commonDetails}>AI SHOPPING ASSISTANT</span>
          </ProjectDetails>
        </article>
      </Reveal>
      <Reveal className="mt-10 md:mt-[72px]">
        <article>
          <YachtCrewCenterMockup />
          <ProjectInfo
            name="Yacht Crew Center"
            index="03"
            description="A connected home for yacht crews and vessel operations."
            tags={["Yachting", "Platform", "AI tools"]}
          />
          <ProjectDetails label="Inside the product">
            <p>
              Yacht Crew Center brings crew resources, marine suppliers, and
              local service providers into one place. Crews can find the support
              they need for their department while captains have a clearer way
              to coordinate the work of running a vessel.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                What I built
              </strong>
              I contributed across the platform: the frontend experience for
              crew and departments, backend services that connect its tools and
              resources, and AI workflows that help make day-to-day vessel
              operations easier to manage.
            </p>
            <span className={commonDetails}>YACHT OPERATIONS PLATFORM</span>
          </ProjectDetails>
        </article>
      </Reveal>
    </section>
  );
}
