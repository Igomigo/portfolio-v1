import Link from "next/link";
import ProjectActionButton from "./ProjectActionButton";
import type { ProjectData } from "./project-types";

export default function ProjectFooter({ project }: { project: ProjectData }) {
  return (
    <footer className="bg-[#f4f6fc] pt-[90px] md:pt-[130px]">
      <div className="mx-auto max-w-[1392px] px-[22px] md:px-9 xl:px-14">
        <p className="mb-6 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">
          {project.action.kind === "demo" ? "An inside look" : "Explore the product"}
        </p>
        <h2 className="mb-9 max-w-[1000px] text-[clamp(38px,6vw,84px)] leading-[1.08] tracking-[-.065em]">
          {project.closingLine}
        </h2>
        <ProjectActionButton action={project.action} footer />
        <div className="mt-[105px] flex items-center justify-between gap-5 border-t border-[#dfe3ee] py-6 text-[10px] text-[#8b90a0] md:mt-[145px]">
          <Link href="/" className="text-[29px] font-semibold leading-none tracking-[-.09em] text-[#202124]">
            fi<span className="text-[#2458ed]">.</span>
          </Link>
          <span>© 2026 Fatai Igomigo</span>
          <Link href="/" className="transition-colors hover:text-[#2458ed]">
            Back home ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
