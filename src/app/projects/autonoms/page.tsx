import type { Metadata } from "next";
import ProjectPage from "@/components/shared/ProjectPage";
import type { ProjectData } from "@/components/shared/project-types";

export const metadata: Metadata = {
  title: "Autonoms — Fatai Igomigo",
  description: "My full-stack contribution to Autonoms by Loubby AI: an autonomous SDR workforce that sources prospects, qualifies leads, runs outreach, and books meetings in a private company cloud.",
};

const project: ProjectData = {
  name: "Autonoms",
  headline: "From the first prospect to the booked meeting.",
  status: "A Loubby AI product · Team contribution",
  summary: "An autonomous AI workforce for the entire sales development pipeline: sourcing prospects, qualifying leads, reaching out through email, LinkedIn, and cold calls, then booking meetings. Built by Loubby AI, with my contribution across the frontend, backend, and AI systems.",
  action: { kind: "external", href: "https://autonoms.ai/", label: "Explore Autonoms", footerLabel: "Visit Autonoms" },
  image: { src: "/autonoms/autonoms.png", alt: "Autonoms by Loubby AI introducing its AI workforce and dashboard", width: 3456, height: 2234 },
  gallery: [{ src: "/autonoms/autonoms.png", alt: "Autonoms homepage with private-cloud AI teams and a workspace preview", width: 3456, height: 2234, title: "Meet the platform", description: "The introduction to Autonoms and its AI workforce." }],
  colors: { surface: "radial-gradient(ellipse at 45% 25%, #f7fffc 0%, #e7f2ee 60%, #dce9f1 100%)", accent: "#28766a" },
  visualNote: "a team of agents. a world of possibility.",
  story: {
    title: "A sales goal needs more than a list of leads.",
    paragraphs: [
      "Finding the right prospects is only the beginning. A sales development team still has to research them, decide who is a good fit, start conversations, follow up, and turn interest into a meeting. Every stage depends on the one before it, and every handoff is another place for a promising opportunity to lose momentum.",
      "Autonoms handles that entire pipeline autonomously. Its specialist AI agents work together to source prospects, enrich and qualify leads, run outreach across email, LinkedIn, and cold calling, and follow through to booking meetings. Context moves with the work, so the team can keep a conversation moving from the first contact to the calendar, with human oversight where it matters.",
      "Integrations with business systems extend what the agents can do: access relevant information, act through connected tools, and keep the sales workflow aligned with the company’s goals. Each business gets its own private cloud, where its agents and working environment are isolated and dedicated to that company.",
      "Autonoms is a Loubby AI product. As part of the company’s team, I contributed heavily across the frontend, backend, AI teams, integrations, and the platform that hosts them. The engineering challenge was making all those moving parts work together as one dependable sales workflow.",
    ],
    aside: "The whole journey, from a potential customer to a real conversation.",
  },
  stepsTitle: "One coordinated team. The entire SDR pipeline.",
  steps: [
    { title: "Find and qualify.", description: "Agents source prospects, gather relevant context, and qualify leads against the company’s target customer profile, giving outreach a focused starting point." },
    { title: "Reach out and follow through.", description: "Coordinate email, LinkedIn outreach, and cold calls. Agents carry context between stages and follow up to move qualified prospects toward a conversation." },
    { title: "Put the meeting on the calendar.", description: "Turn interest into booked meetings, connect scheduling with the wider sales workflow, and keep the team informed as opportunities move forward." },
  ],
  engineering: {
    title: "The systems behind an autonomous sales team.",
    intro: "At Loubby AI, I worked across the stack to help turn a coordinated AI workforce into a working product. My contribution spans the platform experience, backend services, agent teams, and integrations that support the journey from prospect sourcing to meeting booking.",
    points: [
      { title: "A workspace for people and agents", description: "I helped build the frontend and platform experience that gives businesses a way to work with their AI teams." },
      { title: "Connected systems, capable agents", description: "I contributed to the backend and integrations that connect agents with business systems, giving them the information and tools to carry out sales workflows." },
      { title: "An end-to-end SDR workforce", description: "I helped build the AI teams and connect their work across sourcing, qualification, multichannel outreach, follow-up, and meeting booking, so each stage feeds into the next." },
      { title: "A separate environment for each company", description: "My work included the platform supporting private company clouds, where agents are isolated and operate for their own business." },
    ],
  },
  technologies: [
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    { name: "Claude", icon: "/tech/claude.svg" },
    { name: "ChatGPT", icon: "/tech/openai.svg" },
  ],
  closingLine: "See the journey from prospect to booked meeting.",
};

export default function AutonomsProjectPage() {
  return <ProjectPage project={project} />;
}
