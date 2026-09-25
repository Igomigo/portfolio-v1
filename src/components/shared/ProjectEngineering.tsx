import type { ProjectData } from "./project-types";

export default function ProjectEngineering({
  engineering,
}: {
  engineering: ProjectData["engineering"];
}) {
  return (
    <section className="mx-auto grid max-w-[1392px] gap-10 px-[22px] py-[95px] md:grid-cols-[.8fr_1.2fr] md:gap-20 md:px-9 md:py-[140px] xl:px-14">
      <div>
        <p className="mb-7 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">
          03 / Under the hood
        </p>
        <h2 className="max-w-[500px] text-[clamp(36px,4.4vw,62px)] leading-[1.12] tracking-[-.06em]">
          {engineering.title}
        </h2>
      </div>
      <div>
        <p className="mb-8 max-w-[640px] text-[17px] leading-[1.75] text-[#666b75] md:text-[20px]">
          {engineering.intro}
        </p>
        {engineering.points.map((point, index) => (
          <div
            key={point.title}
            className="grid gap-2 border-t border-[#e6e8ed] py-6 md:grid-cols-[58px_1fr] md:gap-5 md:py-8"
          >
            <span className="font-mono text-[10px] text-[#9da0aa]">
              0{index + 1}
            </span>
            <div>
              <h3 className="mb-2 text-[21px] font-medium tracking-[-.04em]">
                {point.title}
              </h3>
              <p className="max-w-[560px] text-[13px] leading-[1.8] text-[#797e89] md:text-[14px]">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
