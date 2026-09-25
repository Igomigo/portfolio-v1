import type { ProjectStep } from "./project-types";

export default function ProjectSteps({
  title,
  steps,
}: {
  title: string;
  steps: ProjectStep[];
}) {
  return (
    <section className="border-y border-[#ececf0] bg-[#f8f9fb] py-[90px] md:py-[125px]">
      <div className="mx-auto max-w-[1392px] px-[22px] md:px-9 xl:px-14">
        <p className="mb-5 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">
          02 / The experience
        </p>
        <h2 className="mb-12 max-w-[700px] text-[clamp(36px,4.5vw,62px)] leading-[1.12] tracking-[-.06em] md:mb-16">
          {title}
        </h2>
        <div className="grid gap-0 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-t border-[#dce0e8] py-7 md:min-h-[245px] md:border-r md:px-8 md:py-8 md:first:pl-0 md:last:border-r-0"
            >
              <span className="mb-12 block font-mono text-[11px] text-[#2458ed] md:mb-14">
                0{index + 1}
              </span>
              <h3 className="mb-3 text-[23px] font-medium tracking-[-.045em] md:text-[26px]">
                {step.title}
              </h3>
              <p className="max-w-[350px] text-[13px] leading-[1.8] text-[#777c87] md:text-[14px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
