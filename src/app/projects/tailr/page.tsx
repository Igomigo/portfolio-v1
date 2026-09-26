import type { Metadata } from "next";
import ProjectPage from "@/components/shared/ProjectPage";
import type { ProjectData } from "@/components/shared/project-types";

export const metadata: Metadata = {
  title: "Tailr — Fatai Igomigo",
  description:
    "Tailr is an AI resume builder that turns a job description and your experience into a tailored, beautifully designed resume through conversation.",
};

const project: ProjectData = {
  name: "Tailr",
  headline: "A better resume starts with a conversation.",
  summary:
    "Tailr helps people turn their real experience into a resume shaped for the role they want. Bring the job description, talk through the details, and leave with a polished PDF.",
  action: {
    kind: "external",
    href: "https://tailr.igomigofatai.com/",
    label: "Visit the live product",
    footerLabel: "Open Tailr",
  },
  image: {
    src: "/tailr/tailr-app.png",
    alt: "Tailr's chat-led resume builder showing the prompt and template gallery",
    width: 3456,
    height: 2234,
  },
  gallery: [
    { src: "/tailr/tailr-app.png", alt: "Tailr's chat-led resume workspace", width: 3456, height: 2234, title: "The workspace", description: "Build and refine your resume in conversation." },
    { src: "/tailr/tailr-templates.png", alt: "Tailr's resume template gallery", width: 3456, height: 2234, title: "Choose a template", description: "Find a clean finish that suits your experience." },
    { src: "/tailr/tailr-session.png", alt: "A completed Tailr conversation with a resume ready to download", width: 3456, height: 2234, title: "Ready to send", description: "Review the result and download your PDF." },
    { src: "/tailr/tailr-search.png", alt: "Tailr's conversation search", width: 3456, height: 2234, title: "Find past work", description: "Pick up an earlier conversation when you need it." },
    { src: "/tailr/tailr-landing.png", alt: "Tailr's landing page", width: 3456, height: 2234, title: "The first impression", description: "A simple introduction to the product." },
    { src: "/tailr/tailr-auth.png", alt: "Tailr's account creation screen", width: 3456, height: 2234, title: "Getting started", description: "Create an account and begin." },
  ],
  colors: {
    surface:
      "radial-gradient(ellipse at 48% 30%, #fffdf9 0%, #f2ece2 65%, #e9e0d4 100%)",
    accent: "#a57228",
  },
  visualNote: "your experience, tailored.",
  story: {
    title: "The job is specific. Your resume should be, too.",
    paragraphs: [
      "A good opportunity can move quickly. By the time you've rearranged your resume for a new role, the application may already be crowded or closed. Sending the same version everywhere is faster, but it can bury the experience that matters most for this job.",
      "Tailr makes it easier to be both quick and specific. Paste the job description, bring your current resume or start fresh, and let it build a draft around the role. It brings relevant experience forward, then you can refine everything in chat: move a section, expand a point, cut a line, or add something you forgot. The editing happens for you; the facts stay yours.",
      "When it feels right, choose a clean, ATS-friendly template and download a PDF that's ready to submit. Less time moving boxes around. More time making your case while the opportunity is still there.",
    ],
    aside: "Move quickly. Make the right experience count.",
  },
  stepsTitle: "From job description to a resume ready to send.",
  steps: [
    {
      title: "Bring the role.",
      description:
        "Paste a job description and, if you have one, attach your current PDF or DOCX resume. Starting from scratch works too.",
    },
    {
      title: "Refine in conversation.",
      description:
        "Talk through the draft, adjust the emphasis, and make sure it sounds like you. Tailr keeps the facts grounded in your real experience.",
    },
    {
      title: "Choose your finish.",
      description:
        "Choose from clean, ATS-friendly templates, with more styles on the way. Approve the content and download a PDF ready for the application.",
    },
  ],
  engineering: {
    title: "A calm interface. A serious system behind it.",
    intro:
      "I built Tailr across the stack, connecting the chat experience to file handling, AI-assisted drafting, structured resume data, and final document generation.",
    points: [
      {
        title: "Conversation with guardrails",
        description:
          "The AI can improve wording, structure, and emphasis, but it is instructed not to invent employers, dates, degrees, or metrics.",
      },
      {
        title: "A structured document pipeline",
        description:
          "Approved content becomes structured resume data. The backend renders it through a designed HTML template before Gotenberg turns it into a PDF.",
      },
      {
        title: "Files and history that stay connected",
        description:
          "Uploads and generated documents are stored in Cloudinary, while MongoDB keeps the conversation and its output available for the next edit.",
      },
    ],
  },
  technologies: [
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "OpenAI / ChatGPT", icon: "/tech/openai.svg" },
    { name: "Cloudinary", icon: "/tech/cloudinary.svg" },
    { name: "Gotenberg", icon: "/tech/gotenberg.png" },
  ],
  closingLine: "A clearer story for the role ahead.",
};

export default function TailrProjectPage() {
  return <ProjectPage project={project} />;
}
