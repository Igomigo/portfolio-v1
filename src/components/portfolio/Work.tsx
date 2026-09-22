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

function ProjectDetails({ children }: { children: React.ReactNode }) {
  return (
    <details className="group mt-2 border-b border-[#e6e6e8] md:mt-5">
      <summary className="flex min-h-11 w-fit list-none items-center gap-4 py-[15px] text-[10px] marker:hidden">
        Inside the concept{" "}
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

function HaloMockup() {
  return (
    <div
      className={`${scene} bg-[#eaf0fc] bg-[radial-gradient(ellipse_at_55%_20%,#f9fbff,transparent_70%)]`}
    >
      <span className="absolute left-[18px] top-[18px] font-mono text-[7px] tracking-[.09em] text-[#76849c] md:left-7 md:top-[26px] md:text-[9px]">
        01 — INTELLIGENT SYSTEMS
      </span>
      <div className="w-[90%] rotate-[-3deg] rounded-md border border-[#dce2ee] bg-white shadow-[0_30px_65px_#3f598b20] transition duration-700 hover:rotate-0 md:w-[78%] md:max-w-[850px] md:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(3deg)_rotateZ(-2deg)] md:hover:[transform:perspective(1200px)_rotateY(0)_rotateX(0)_rotateZ(0)]">
        <div className="flex items-center gap-1.5 border-b border-[#eceef4] px-3 py-2.5 text-sm md:gap-2 md:px-[22px] md:py-4 md:text-lg">
          <span className="text-[19px] text-[#2458ed] md:text-[25px]">✳</span>
          <strong>halo</strong>
          <span className="ml-[18px] hidden text-[6px] tracking-[.12em] text-[#8a8d99] md:inline">
            YOUR SUPPORT, CONNECTED.
          </span>
          <span className="ml-auto text-xs tracking-[.1em] text-[#a0a4ae]">
            •••
          </span>
        </div>
        <div className="grid min-h-0 grid-cols-[36px_1fr] md:min-h-[270px] md:grid-cols-[155px_1fr]">
          <div className="relative border-r border-[#eceef4] px-[5px] py-3 text-xs text-[#8a8c98] md:px-3 md:py-[22px] md:text-[10px]">
            <span className="mb-[9px] flex items-center gap-2 rounded bg-[#edf2ff] p-[5px] text-[#2458ed] md:mb-[5px] md:p-2.5">
              ▤ <i className="hidden not-italic md:inline">Inbox</i>
              <b className="ml-auto hidden text-[8px] font-normal md:inline">
                8
              </b>
            </span>
            <span className="mb-[9px] flex p-[5px] md:mb-[5px] md:p-2.5">
              ◷ <i className="hidden not-italic md:inline">Activity</i>
            </span>
            <span className="flex p-[5px] md:p-2.5">
              ◈ <i className="hidden not-italic md:inline">Knowledge</i>
            </span>
            <div className="absolute bottom-5 left-5 hidden items-center gap-1.5 text-[7px] md:flex">
              <i className="size-1 rounded-full bg-[#3d9b68]" /> All systems
              ready
            </div>
          </div>
          <div className="p-3 text-[8px] md:px-7 md:py-[23px] md:text-[10px]">
            <div className="flex items-center gap-1.5 md:gap-[9px]">
              <span className="grid size-[23px] place-items-center rounded-full bg-[#f0eff5] text-[7px] text-[#737786] md:size-[30px] md:text-[9px]">
                JD
              </span>
              <span>
                <strong className="block text-[8px] font-medium md:text-[10px]">
                  Jamie Davis
                </strong>
                <small className="mt-[3px] block text-[6px] text-[#9597a1] md:text-[7px]">
                  Order enquiry · just now
                </small>
              </span>
              <span className="ml-auto rounded bg-[#edf8f3] px-[5px] py-[3px] text-[6px] text-[#439777] md:px-2 md:py-1 md:text-[7px]">
                Resolved
              </span>
            </div>
            <p className="my-3 inline-block rounded-r-md rounded-bl-md bg-[#f5f5f7] px-2 py-[7px] md:mb-3 md:mt-5 md:px-[13px] md:py-2.5">
              Hey! Could you help me find my order?
            </p>
            <div className="rounded-md border border-[#e1e8fb] bg-[#f0f4ff] p-[9px] md:p-3.5">
              <span className="font-mono text-[6px] text-[#2458ed]">
                ✳ HALO ASSISTANT
              </span>
              <p className="my-[5px] leading-[1.6] md:mb-3 md:mt-2">
                Of course. Your order is on its way and arrives tomorrow.
              </p>
              <div className="flex items-center gap-1.5 rounded border border-[#e6ebf7] bg-white p-[7px] md:gap-2.5 md:p-2.5">
                <span className="text-sm text-[#2458ed] md:text-xl">↗</span>
                <span>
                  <strong className="block text-[8px] font-medium md:text-[10px]">
                    Order #1042
                  </strong>
                  <small className="block text-[6px] text-[#9597a1] md:text-[7px]">
                    In transit · arriving tomorrow
                  </small>
                </span>
                <span className="ml-auto text-[#439777]">✓</span>
              </div>
            </div>
            <div className="mt-2.5 flex items-center gap-1 text-[5px] text-[#9597a1] md:mt-4 md:gap-[7px] md:text-[7px]">
              <i className="size-1 rounded-full bg-[#3d9b68]" /> Answer grounded
              in your knowledge base.
            </div>
          </div>
        </div>
      </div>
      <span
        className={`${handwriting} absolute bottom-[15px] right-[17px] rotate-[-5deg] text-[21px] md:bottom-[22px] md:right-9 md:text-[25px]`}
      >
        helpful. not just automated.
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
        02 — THOUGHTFUL AUTOMATION
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
            Useful by design.
            <br />
            <span className="text-[#93949a]">Considered in every detail.</span>
          </h2>
        </div>
        <div className="flex w-full items-center justify-between gap-5 md:relative md:block md:w-auto md:pt-8">
          <Spark className="hidden size-[34px] rotate-[8deg] text-[#2458ed] md:absolute md:-top-2 md:left-[30px] md:block" />
          <span
            className={`${handwriting} rotate-[-5deg] text-[22px] md:mb-3 md:block md:text-[25px]`}
          >
            a few possibilities.
          </span>
          <p className="m-0 text-[8px] leading-[1.7] text-[#8a8b92] md:text-[10px]">
            Concept studies for now.
            <br />
            Real project stories are on their way.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <article>
          <HaloMockup />
          <ProjectInfo
            name="Halo"
            index="01"
            description="A calmer way to keep the conversation going."
            tags={["AI agents", "Product design"]}
          />
          <ProjectDetails>
            <p>
              An exploration of support software that keeps context close: the
              customer’s question, a grounded answer, and the next useful action
              in one place.
            </p>
            <p>
              <strong className="block font-medium text-[#202124]">
                The engineering question
              </strong>
              How do you connect retrieval, order data, and human handoff
              without making the interface feel complicated?
            </p>
            <span className={commonDetails}>
              DESIGN STUDY · NOT A SHIPPED CLIENT PROJECT
            </span>
          </ProjectDetails>
        </article>
      </Reveal>
      <Reveal className="mt-10 md:mt-[72px]">
        <article>
          <RelayMockup />
          <ProjectInfo
            name="Relay"
            index="02"
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
