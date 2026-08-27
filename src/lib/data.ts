export interface Chapter {
  numeral: string;
  title: string;
}

export interface Project {
  index: string;
  title: string;
  blurb: string;
  stack: string;
  year: string;
  glyph: string;
  /** subtle temperature shift inside the moss world — stays in family */
  glow: string;
}

export interface Capability {
  index: string;
  title: string;
  note: string;
}

export const identity = {
  name: ["Fatai", "Igomigo"],
  role: "Software Engineer · AI Agents & Automation",
  email: "igomigofatai@gmail.com",
  statement:
    "I build products end to end, and autonomous agents that keep building while I sleep.",
} as const;

export const craftStatement =
  "I'm Fatai, a software engineer who treats craft as non negotiable. I design systems end to end: interfaces with `soul`, APIs with `spine`, and autonomous agents that turn hours of work into `seconds`.";

export const facts = [
  { value: "05+", caption: "Years shipping" },
  { value: "24", caption: "Products & systems" },
  { value: "40+", caption: "Agents deployed" },
  { value: "∞", caption: "Curiosity" },
] as const;

export const crossingWords = [
  "Engineering",
  "Intelligence",
  "Automation",
  "Motion",
] as const;

export const projects: Project[] = [
  {
    index: "01",
    title: "Halo",
    blurb: "Autonomous support agent fleet",
    stack: "LLM orchestration · RAG · TypeScript",
    year: "2026",
    glyph: "H",
    glow: "rgba(201, 164, 104, 0.35)",
  },
  {
    index: "02",
    title: "Relay",
    blurb: "Workflow automation engine",
    stack: "Event driven · Queues · Go",
    year: "2025",
    glyph: "R",
    glow: "rgba(158, 183, 145, 0.30)",
  },
  {
    index: "03",
    title: "Pulse",
    blurb: "Realtime analytics platform",
    stack: "React · Go · WebSockets",
    year: "2025",
    glyph: "P",
    glow: "rgba(214, 170, 148, 0.30)",
  },
  {
    index: "04",
    title: "Atlas",
    blurb: "Geospatial intelligence",
    stack: "Next.js · deck.gl · Postgres",
    year: "2024",
    glyph: "A",
    glow: "rgba(148, 170, 183, 0.30)",
  },
];

export const capabilities: Capability[] = [
  { index: "001", title: "AI Agents & Orchestration", note: "multi agent systems, RAG, evals" },
  { index: "002", title: "Automation Systems", note: "pipelines that erase busywork" },
  { index: "003", title: "Product Engineering", note: "full stack, end to end" },
  { index: "004", title: "Interface & Motion", note: "the feel is the feature" },
  { index: "005", title: "APIs & Data", note: "spines that scale" },
  { index: "006", title: "Cloud & Infra", note: "boring, reliable, fast" },
];
