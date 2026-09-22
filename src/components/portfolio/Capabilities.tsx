import {
  Reveal,
  Spark,
  eyebrow,
  handwriting,
  pageWidth,
  sectionTitle,
} from "./shared";

const capabilities = [
  {
    title: "Product engineering",
    body: "Full-stack products shaped from requirements through architecture, implementation, and release.",
    detail: "Web apps · platforms · internal tools",
  },
  {
    title: "AI agents",
    body: "Grounded agent systems that reason with context, use tools, and produce inspectable outcomes.",
    detail: "Orchestration · RAG · evaluations",
  },
  {
    title: "Automation systems",
    body: "Reliable workflows that connect teams, data, and services while reducing repetitive operational work.",
    detail: "Events · queues · integrations",
  },
  {
    title: "Backend & infrastructure",
    body: "APIs, services, and deployment foundations designed for clarity, observability, and scale.",
    detail: "APIs · data · cloud systems",
  },
  {
    title: "Interfaces & motion",
    body: "Thoughtful interfaces where hierarchy, feedback, and movement help people understand the product.",
    detail: "React · interaction · design systems",
  },
];

export default function Capabilities() {
  return (
    <section
      className="border-y border-[#eceef3] bg-[#f8f9fc] py-[75px] md:py-[105px]"
      aria-labelledby="capabilities-title"
    >
      <div className={pageWidth}>
        <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div>
            <p className={`${eyebrow} mb-5 md:mb-6`}>
              ENGINEERING CAPABILITIES
            </p>
            <h2 id="capabilities-title" className={sectionTitle}>
              Depth across the stack.
              <br />
              <span className="text-[#93949a]">Care across the product.</span>
            </h2>
          </div>
          <div className="relative mr-8 self-end md:mr-14">
            <Spark className="absolute -left-11 -top-5 size-8 rotate-12 text-[#2458ed]" />
            <span className={`${handwriting} block rotate-[-5deg]`}>
              designed. engineered. shipped.
            </span>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 border-t border-[#dfe2e9] md:grid-cols-2">
          {capabilities.map((item, index) => (
            <Reveal
              key={item.title}
              className={`group border-b border-[#dfe2e9] py-7 transition md:min-h-[220px] md:p-8 ${index % 2 === 0 ? "md:border-r" : ""} ${index === 4 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12" : ""}`}
            >
              <div>
                <span className="mb-5 block font-mono text-[8px] tracking-[.12em] text-[#9a9eaa]">
                  0{index + 1}
                </span>
                <h3 className="text-[22px] font-medium tracking-[-.04em] transition group-hover:text-[#2458ed] md:text-[26px]">
                  {item.title}
                </h3>
              </div>
              <div className={index === 4 ? "md:self-end" : ""}>
                <p className="mb-5 mt-3 max-w-md text-xs leading-[1.8] text-[#777b86]">
                  {item.body}
                </p>
                <span className="font-mono text-[7px] tracking-[.08em] text-[#a1a4ae]">
                  {item.detail.toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
