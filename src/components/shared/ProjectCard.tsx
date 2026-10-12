import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/portfolio/shared";
import type { ProjectPreview } from "@/lib/project-catalog";

export default function ProjectCard({ project, index }: { project: ProjectPreview; index: number }) {
  return (
    <article>
      <Link href={`/projects/${project.slug}`} className="group block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2458ed]">
        <div className="relative flex aspect-[1.35] items-center justify-center overflow-hidden rounded-xl px-5 py-14 md:aspect-[1.4] md:px-8" style={{ background: project.surface }}>
          <span className="absolute left-5 top-5 font-mono text-[8px] uppercase tracking-[.12em] md:left-7 md:top-6" style={{ color: project.accent }}>{project.category}</span>
          <div className={`w-[94%] overflow-hidden rounded-lg border border-white/50 shadow-[0_22px_50px_#20212422] transition-transform duration-700 motion-reduce:transform-none motion-reduce:transition-none ${index % 2 ? "rotate-[2deg]" : "rotate-[-3deg]"} group-hover:rotate-0 group-focus-visible:rotate-0 group-hover:scale-[1.025]`}>
            <Image src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} sizes="(min-width: 1280px) 520px, (min-width: 768px) 42vw, 82vw" quality={90} className="block h-auto w-full" />
          </div>
          <span className="absolute bottom-4 right-5 rotate-[-4deg] font-[family-name:var(--font-hand)] text-[20px] md:right-7 md:text-[23px]" style={{ color: project.accent }}>{project.note}</span>
        </div>
        <div className="flex items-start justify-between gap-5 pb-2 pt-5">
          <div>
            <p className="mb-2 font-mono text-[8px] uppercase tracking-[.1em] text-[#858994]">{project.context}</p>
            <h2 className="text-[25px] font-medium tracking-[-.045em] transition-colors group-hover:text-[#2458ed] md:text-[29px]">{project.name}</h2>
            <p className="mt-2 max-w-[440px] text-[12px] leading-[1.8] text-[#737680] md:text-[13px]">{project.description}</p>
          </div>
          <span className="mt-5 grid size-10 shrink-0 place-items-center rounded-full border border-[#e3e6ed] transition duration-300 group-hover:border-[#2458ed] group-hover:bg-[#2458ed] group-hover:text-white"><Arrow diagonal className="size-4" /></span>
        </div>
      </Link>
    </article>
  );
}
