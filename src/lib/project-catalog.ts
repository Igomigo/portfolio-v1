export type ProjectPreview = {
  slug: string;
  name: string;
  description: string;
  context: string;
  category: string;
  note: string;
  image: { src: string; width: number; height: number; alt: string };
  surface: string;
  accent: string;
};

export const projectCatalog: ProjectPreview[] = [
  {
    slug: "tailr", name: "Tailr", category: "AI resume builder", context: "Independent project",
    description: "Turn your experience into a job-ready resume, through a conversation.",
    note: "your experience, tailored.",
    image: { src: "/tailr/tailr-app.png", width: 3456, height: 2234, alt: "Tailr chat interface and resume templates" },
    surface: "radial-gradient(ellipse at 48% 30%, #fffdf9 0%, #f2ece2 65%, #e9e0d4 100%)", accent: "#a57228",
  },
  {
    slug: "picky", name: "Picky", category: "AI shopping assistant", context: "Independent project · In the lab",
    description: "Live listings, thoughtful comparisons, and a pick you can feel good about.",
    note: "pick with confidence.",
    image: { src: "/picky/picky.png", width: 3456, height: 2162, alt: "Picky live marketplace listings" },
    surface: "radial-gradient(ellipse at 50% 25%, #fffdfb 0%, #f2efff 58%, #e6e1fb 100%)", accent: "#4f46e5",
  },
  {
    slug: "yacht-crew-center", name: "Yacht Crew Center", category: "Yacht operations", context: "Team project · Full-stack & AI",
    description: "Suppliers, services, and an AI yacht agent. Connected for life on board.",
    note: "built for life on board.",
    image: { src: "/ycc/ycc.png", width: 3450, height: 2160, alt: "Yacht Crew Center platform homepage" },
    surface: "radial-gradient(ellipse at 50% 30%, #f9fcff 0%, #e6f3f7 65%, #d3e9f1 100%)", accent: "#1478a8",
  },
  {
    slug: "autonoms", name: "Autonoms", category: "AI workforce platform", context: "Loubby AI · Full-stack contributor",
    description: "An autonomous SDR team, from sourcing and qualification to outreach and booked meetings.",
    note: "a team of agents. a world of possibility.",
    image: { src: "/autonoms/autonoms.png", width: 3456, height: 2234, alt: "Autonoms AI workforce platform by Loubby AI" },
    surface: "radial-gradient(ellipse at 45% 25%, #f7fffc 0%, #e7f2ee 60%, #dce9f1 100%)", accent: "#28766a",
  },
  {
    slug: "collaborapay", name: "Collaborapay", category: "Group contribution tracking", context: "Built end to end",
    description: "Keep shared plans moving with a clear picture of who has paid and what’s left.",
    note: "less chasing. more getting together.",
    image: { src: "/collaborapay/collaborapay-light-mode.png", width: 3456, height: 2158, alt: "Collaborapay group contributions and member balances" },
    surface: "radial-gradient(ellipse at 50% 25%, #fbfdff 0%, #eaf2ff 60%, #dce8fa 100%)", accent: "#2374db",
  },
];
