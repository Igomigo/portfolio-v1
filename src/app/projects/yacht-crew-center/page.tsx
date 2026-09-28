import type { Metadata } from "next";
import ProjectPage from "@/components/shared/ProjectPage";
import type { ProjectData } from "@/components/shared/project-types";

export const metadata: Metadata = {
  title: "Yacht Crew Center — Fatai Igomigo",
  description:
    "Yacht Crew Center connects yacht crews with suppliers, service providers, and AI-assisted tools for managing work on board.",
};

const project: ProjectData = {
  name: "Yacht Crew Center",
  headline: "One place for the work behind every voyage.",
  summary:
    "A connected platform for yacht crews, suppliers, and service providers. It brings sourcing, services, orders, and practical AI assistance into the same workflow, wherever the vessel is headed.",
  action: {
    kind: "external",
    href: "https://yachtcrewcenter.com/",
    label: "Visit the live platform",
    footerLabel: "Open Yacht Crew Center",
  },
  image: {
    src: "/ycc/ycc.png",
    alt: "Yacht Crew Center homepage introducing crew resources and vessel management",
    width: 3450,
    height: 2160,
  },
  gallery: [
    {
      src: "/ycc/ycc.png",
      alt: "Yacht Crew Center homepage with crew resources and vessel management",
      width: 3450,
      height: 2160,
      title: "The platform",
      description: "A starting point for crew resources, suppliers, and services.",
    },
  ],
  colors: {
    surface:
      "radial-gradient(ellipse at 50% 30%, #f9fcff 0%, #e6f3f7 65%, #d3e9f1 100%)",
    accent: "#1478a8",
  },
  visualNote: "built for life on board.",
  story: {
    title: "Running a vessel takes more than a crew.",
    paragraphs: [
      "A yacht's day-to-day work reaches far beyond the people on board. Every department needs supplies, specialist services, and timely answers, often while the vessel is moving between locations. When those requests live across separate contacts and tools, even a straightforward task takes more coordination than it should.",
      "Yacht Crew Center brings that work together. Crew can find suppliers and service providers, source products, and manage requests in one place. Suppliers have an orders workspace, service providers have a portal for bookings and requests, and international shipping supports products that need to reach a vessel across borders.",
      "An AI assistant makes the platform easier to use in the middle of a busy day. Its answers draw on retrieved information, and it can place an order through an in-app conversation. The same yacht agent is available on WhatsApp, so crew can ask for help or place an order when they are away from the app.",
    ],
    aside: "The right people, supplies, and answers—within reach.",
  },
  stepsTitle: "From a need on board to the people who can help.",
  steps: [
    {
      title: "Start with the task.",
      description:
        "A crew member can look for a product or service, or tell the yacht agent what they need in the app or on WhatsApp.",
    },
    {
      title: "Find a way forward.",
      description:
        "Explore suppliers and service providers, use the agent for grounded answers, and place product orders through the conversation when it helps.",
    },
    {
      title: "Keep it moving.",
      description:
        "Suppliers handle orders, service providers manage requests, and the platform supports international shipping for products headed beyond the local port.",
    },
  ],
  engineering: {
    title: "Several workflows. One connected system.",
    intro:
      "This was a team project. I contributed across the frontend, backend, and AI system, working on the crew experience as well as the supplier, service-provider, and administrative sides of the platform.",
    points: [
      {
        title: "The right view for each role",
        description:
          "Role-based access connects crew, suppliers, service providers, and administrators to the tools and information relevant to their work.",
      },
      {
        title: "Orders and services in motion",
        description:
          "The platform coordinates product orders, supplier workflows, service requests, and international shipping across the different portals.",
      },
      {
        title: "An agent that can act",
        description:
          "A retrieval-augmented AI workflow grounds responses in relevant information and can take an order from conversation through to placement in the app.",
      },
      {
        title: "The same help beyond the app",
        description:
          "WhatsApp integration lets crew reach the yacht agent and place orders even when they are not in the platform.",
      },
    ],
  },
  technologies: [
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "n8n", icon: "/tech/n8n.svg" },
    { name: "ChatGPT", icon: "/tech/openai.svg" },
  ],
  closingLine: "Keep the work moving, wherever the vessel goes.",
};

export default function YachtCrewCenterProjectPage() {
  return <ProjectPage project={project} />;
}
