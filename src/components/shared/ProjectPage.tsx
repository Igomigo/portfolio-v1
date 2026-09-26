import ProjectEngineering from "./ProjectEngineering";
import ProjectDemoModal from "./ProjectDemoModal";
import ProjectFooter from "./ProjectFooter";
import ProjectIntro from "./ProjectIntro";
import Header from "@/components/portfolio/Header";
import ProjectSteps from "./ProjectSteps";
import ProjectStory from "./ProjectStory";
import ProjectVisual from "./ProjectVisual";
import TechnologyGrid from "./TechnologyGrid";
import type { ProjectData } from "./project-types";

export default function ProjectPage({ project }: { project: ProjectData }) {
  return (
    <div className="portfolio min-h-screen bg-white font-sans text-[#202124] [text-rendering:optimizeLegibility]">
      <a
        className="fixed left-4 -top-24 z-[100] bg-white p-3 focus:top-3"
        href="#project-main"
      >
        Skip to content
      </a>
      <Header projectName={project.name} />
      <main id="project-main">
        <ProjectIntro project={project} />
        <ProjectVisual project={project} />
        <ProjectStory story={project.story} />
        <ProjectSteps title={project.stepsTitle} steps={project.steps} />
        <ProjectEngineering engineering={project.engineering} />
        <TechnologyGrid technologies={project.technologies} />
      </main>
      <ProjectFooter project={project} />
      {project.action.kind === "demo" && <ProjectDemoModal project={project} />}
    </div>
  );
}
