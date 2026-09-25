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
  liveUrl: "https://tailr.igomigofatai.com/",
  image: {
    src: "/tailr-app.png",
    alt: "Tailr's chat-led resume builder showing the prompt and template gallery",
    width: 3456,
    height: 2234,
  },
  colors: {
    surface:
      "radial-gradient(ellipse at 48% 30%, #fffdf9 0%, #f2ece2 65%, #e9e0d4 100%)",
    accent: "#a57228",
  },
  visualNote: "your experience, tailored.",
  story: {
    title: "The job is specific. Your resume should be, too.",
    paragraphs: [
      "Every role calls for a slightly different version of your story. Yet tailoring a resume often means staring at the same document, guessing what to keep, and rewriting it all over again.",
      "Tailr starts with the job description and the experience you already have. Bring an existing resume or start fresh, then shape the draft through conversation. It helps bring the most relevant details forward, keeps the facts yours, and gives you a finished resume you can actually send.",
    ],
    aside: "You shouldn't have to start over for every application.",
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
        "Pick a resume style, approve the content, and download an ATS-friendly PDF ready for the application.",
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
  ],
  closingLine: "A clearer story for the role ahead.",
};

export default function TailrProjectPage() {
  return <ProjectPage project={project} />;
}
