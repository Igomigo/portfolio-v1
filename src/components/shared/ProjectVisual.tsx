import Image from "next/image";
import type { ProjectData } from "./project-types";

export default function ProjectVisual({ project }: { project: ProjectData }) {
  return (
    <section className="mx-auto max-w-[1392px] px-[22px] md:px-9 xl:px-14">
      <div
        className="relative overflow-hidden rounded-[12px] px-[18px] pb-12 pt-8 md:rounded-[20px] md:px-12 md:pb-[95px] md:pt-[80px] xl:px-[85px]"
        style={{ background: project.colors.surface }}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={"Open " + project.name + " live product"}
          className="mx-auto block max-w-[1120px] overflow-hidden rounded-[7px] border border-white/20 bg-black shadow-[0_32px_80px_#231a1433] transition duration-500 hover:-translate-y-1 hover:shadow-[0_42px_95px_#231a1440] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2458ed] md:rounded-[12px]"
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1280px) 1120px, (min-width: 768px) 85vw, 90vw"
            quality={90}
            className="block h-auto w-full"
          />
        </a>
        <span
          className="absolute bottom-3 right-5 rotate-[-4deg] font-[family-name:var(--font-hand)] text-[21px] md:bottom-7 md:right-10 md:text-[29px]"
          style={{ color: project.colors.accent }}
        >
          {project.visualNote}
        </span>
      </div>
    </section>
  );
}
