import Link from "next/link";
import { Arrow } from "@/components/portfolio/shared";
import { projectCatalog } from "@/lib/project-catalog";

export default function ProjectNavigation({ name }: { name: string }) {
  const index = projectCatalog.findIndex((project) => project.name === name);
  if (index < 0) return null;
  const previous = projectCatalog[(index + projectCatalog.length - 1) % projectCatalog.length];
  const next = projectCatalog[(index + 1) % projectCatalog.length];
  return (
    <nav aria-label="Project navigation" className="mx-auto grid max-w-[1392px] grid-cols-2 gap-5 px-[22px] py-12 md:grid-cols-3 md:px-9 md:py-16 xl:px-14">
      <Link href={`/projects/${previous.slug}`} className="group flex min-h-11 items-center gap-3 text-[12px] transition-colors hover:text-[#2458ed]">
        <Arrow className="size-4 shrink-0 rotate-180" /><span><span className="mb-1 block font-mono text-[8px] uppercase tracking-[.12em] text-[#9095a2]">Previous project</span>{previous.name}</span>
      </Link>
      <Link href="/projects" className="col-span-2 row-start-2 mx-auto inline-flex min-h-11 items-center text-[12px] text-[#2458ed] underline decoration-[#cbd5ff] underline-offset-4 transition hover:decoration-[#2458ed] md:col-span-1 md:row-auto">All projects</Link>
      <Link href={`/projects/${next.slug}`} className="group flex min-h-11 items-center justify-end gap-3 text-right text-[12px] transition-colors hover:text-[#2458ed]">
        <span><span className="mb-1 block font-mono text-[8px] uppercase tracking-[.12em] text-[#9095a2]">Next project</span>{next.name}</span><Arrow className="size-4 shrink-0" />
      </Link>
    </nav>
  );
}
