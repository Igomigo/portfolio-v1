import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/portfolio/Header";
import { Arrow, Spark } from "@/components/portfolio/shared";
import ProjectCard from "@/components/shared/ProjectCard";
import SocialLinks from "@/components/shared/SocialLinks";
import { projectCatalog } from "@/lib/project-catalog";

export const metadata: Metadata = {
  title: "Projects — Fatai Igomigo",
  description: "Independent products and team contributions across software, AI, and the systems behind them.",
};

export default function ProjectsPage() {
  return (
    <div className="portfolio min-h-screen bg-white font-sans text-[#202124] [text-rendering:optimizeLegibility]">
      <a href="#projects-main" className="fixed left-4 -top-24 z-[100] bg-white p-3 focus:top-3">Skip to content</a>
      <Header projectName="All projects" backHref="/#work" backLabel="Back home" />
      <main id="projects-main" className="mx-auto max-w-[1392px] px-[22px] pb-20 md:px-9 md:pb-32 xl:px-14">
        <section className="grid gap-8 pb-12 pt-16 md:grid-cols-[1.3fr_.7fr] md:items-end md:pb-20 md:pt-24">
          <div>
            <p className="mb-6 font-mono text-[9px] uppercase tracking-[.15em] text-[#2458ed]">The project collection</p>
            <h1 className="text-[clamp(52px,8vw,105px)] font-medium leading-[1.02] tracking-[-.07em]">Ideas, built.<br /><span className="text-[#93949a]">Work, shared.</span></h1>
          </div>
          <div className="max-w-[360px] md:pb-2">
            <Spark className="mb-5 size-9 rotate-[8deg] text-[#2458ed]" />
            <p className="text-[14px] leading-[1.85] text-[#737680]">A closer look at products I’ve built and platforms I’ve helped bring to life. Each has a different story, and a little of how I think.</p>
            <span className="mt-5 block font-[family-name:var(--font-hand)] text-[25px] text-[#2458ed]">from the first idea to the finer details.</span>
          </div>
        </section>
        <section aria-label="All projects" className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16">
          {projectCatalog.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}
        </section>
      </main>
      <footer className="border-t border-[#e8ebf3] bg-[#f4f6fc]">
        <div className="mx-auto flex max-w-[1392px] flex-col gap-6 px-[22px] py-10 md:flex-row md:items-center md:justify-between md:px-9 xl:px-14">
          <div><p className="mb-3 text-[22px] tracking-[-.04em]">Have something in mind?</p><Link href="/#contact" className="inline-flex min-h-11 items-center gap-3 text-xs text-[#2458ed]">Let’s talk <Arrow diagonal className="size-4" /></Link></div>
          <SocialLinks />
        </div>
      </footer>
    </div>
  );
}
