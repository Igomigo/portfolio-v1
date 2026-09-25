import Image from "next/image";
import type { ProjectTechnology } from "./project-types";

export default function TechnologyGrid({
  technologies,
}: {
  technologies: ProjectTechnology[];
}) {
  return (
    <section className="border-y border-[#ebedf2] bg-[#fbfbfc] py-[90px] md:py-[120px]">
      <div className="mx-auto max-w-[1392px] px-[22px] md:px-9 xl:px-14">
        <div className="mb-11 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">
              04 / The toolkit
            </p>
            <h2 className="text-[clamp(36px,4.4vw,62px)] leading-[1.12] tracking-[-.06em]">
              Built with the right tools.
            </h2>
          </div>
          <p className="max-w-[300px] text-[13px] leading-[1.7] text-[#838792]">
            A selected look at the technologies behind the experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="group flex min-h-[152px] flex-col items-center justify-center rounded-[8px] border border-[#e8eaf0] bg-white px-3 py-6 transition duration-300 hover:-translate-y-1 hover:border-[#cbd5ff] hover:shadow-[0_16px_35px_#263b7510] md:min-h-[185px]"
            >
              <div className="mb-5 grid size-[52px] place-items-center md:size-[60px]">
                <Image
                  src={technology.icon}
                  alt=""
                  width={52}
                  height={52}
                  className="max-h-[52px] max-w-[52px] object-contain"
                />
              </div>
              <span className="text-center text-[12px] font-medium tracking-[-.02em] text-[#343740] md:text-[13px]">
                {technology.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
