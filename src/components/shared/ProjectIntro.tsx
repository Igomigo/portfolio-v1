import Button from "@/components/ui/Button";
import { Arrow } from "@/components/portfolio/shared";
import type { ProjectData } from "./project-types";

export default function ProjectIntro({ project }: { project: ProjectData }) {
  return (
    <section className="mx-auto max-w-[1392px] px-[22px] pb-12 pt-[82px] md:px-9 md:pb-[82px] md:pt-[128px] xl:px-14">
      <div className="grid items-end gap-9 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
        <div>
          <h1 className="m-0 text-[clamp(74px,15vw,176px)] font-medium leading-[.86] tracking-[-.085em] text-[#202124]">
            {project.name}
            <span style={{ color: project.colors.accent }}>.</span>
          </h1>
          <p className="mb-0 mt-7 max-w-[820px] text-[clamp(27px,4vw,53px)] font-normal leading-[1.13] tracking-[-.055em] text-[#373940] md:mt-11">
            {project.headline}
          </p>
        </div>
        <div className="max-w-[440px] pb-1">
          <p className="mb-7 text-[14px] leading-[1.85] text-[#727680] md:text-[16px]">
            {project.summary}
          </p>
          <Button
            href={project.liveUrl}
            target="_blank"
            icon={<Arrow diagonal className="size-4" />}
          >
            Visit the live product
          </Button>
        </div>
      </div>
    </section>
  );
}
