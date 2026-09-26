import ProjectActionButton from "./ProjectActionButton";
import type { ProjectData } from "./project-types";

export default function ProjectIntro({ project }: { project: ProjectData }) {
  return (
    <section className="mx-auto max-w-[1392px] px-[22px] pb-12 pt-[82px] md:px-9 md:pb-[82px] md:pt-[128px] xl:px-14">
      <div className="grid items-end gap-9 lg:grid-cols-[1.35fr_.65fr] lg:gap-20">
        <div>
          {project.status && (
            <p className="mb-7 font-mono text-[9px] uppercase tracking-[.16em] text-[#5a50c9] md:mb-9">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-[#7569e8] align-middle" />
              {project.status}
            </p>
          )}
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
          <ProjectActionButton action={project.action} />
        </div>
      </div>
    </section>
  );
}
