import type { ProjectData } from "./project-types";

export default function ProjectStory({ story }: { story: ProjectData["story"] }) {
  return (
    <section className="mx-auto grid max-w-[1392px] gap-10 px-[22px] py-[95px] md:grid-cols-[.8fr_1.2fr] md:gap-20 md:px-9 md:py-[140px] xl:px-14">
      <div>
        <p className="mb-7 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">
          01 / The idea
        </p>
        <h2 className="max-w-[520px] text-[clamp(34px,4.4vw,62px)] leading-[1.12] tracking-[-.06em]">
          {story.title}
        </h2>
      </div>
      <div className="md:pt-14">
        {story.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="mb-6 max-w-[650px] text-[18px] leading-[1.72] tracking-[-.018em] text-[#5f646e] md:text-[22px]"
          >
            {paragraph}
          </p>
        ))}
        <div className="mt-12 border-l-2 border-[#2458ed] pl-5 font-[family-name:var(--font-hand)] text-[24px] text-[#2458ed] md:mt-16 md:text-[30px]">
          {story.aside}
        </div>
      </div>
    </section>
  );
}
