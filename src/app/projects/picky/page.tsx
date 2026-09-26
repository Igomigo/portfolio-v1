import type { Metadata } from "next";
import ProjectPage from "@/components/shared/ProjectPage";
import type { ProjectData } from "@/components/shared/project-types";

export const metadata: Metadata = {
  title: "Picky — Fatai Igomigo",
  description:
    "Picky is an AI shopping assistant that gathers marketplace listings, compares the details that matter, and explains which option is worth buying.",
};

const project: ProjectData = {
  name: "Picky",
  headline: "Find the one worth buying.",
  summary:
    "Tell Picky what you’re looking for. It brings listings together, weighs price, condition, and seller feedback, then explains its strongest pick and a worthwhile alternative.",
  status: "In the lab · Work in progress",
  action: { kind: "demo", label: "See demo" },
  image: {
    src: "/picky/picky.png",
    alt: "Picky showing live phone listings from Jiji as the search completes",
    width: 3456,
    height: 2162,
  },
  gallery: [
    {
      src: "/picky/picky.png",
      alt: "Picky displaying phone listings alongside its search activity",
      width: 3456,
      height: 2162,
      title: "Search in motion",
      description: "Watch listings arrive as Picky works through the options.",
    },
    {
      src: "/picky/picky-comparison.png",
      alt: "Picky comparing phone listings with prices, reviews, and reliability scores",
      width: 3456,
      height: 2144,
      title: "Compare the options",
      description: "See how price, condition, and seller feedback stack up.",
    },
    {
      src: "/picky/picky-recommendation.png",
      alt: "Picky recommending a phone with reasons and an alternative",
      width: 3456,
      height: 2148,
      title: "A reasoned pick",
      description: "Get a recommendation, the reasons behind it, and an alternative.",
    },
    {
      src: "/picky/picky-product.png",
      alt: "Picky showing product photos, specifications, and seller reviews",
      width: 3444,
      height: 2142,
      title: "Look closer",
      description: "Inspect the listing, its specifications, and seller reviews.",
    },
    {
      src: "/picky/picky-landing.png",
      alt: "Picky's search page with Jiji selected and other marketplaces marked as coming soon",
      width: 3422,
      height: 2126,
      title: "Start with a search",
      description: "Describe what you want and choose where to look.",
    },
  ],
  colors: {
    surface:
      "radial-gradient(ellipse at 50% 25%, #fffdfb 0%, #f2efff 58%, #e6e1fb 100%)",
    accent: "#4f46e5",
  },
  visualNote: "pick with confidence.",
  story: {
    title: "More listings shouldn't mean more doubt.",
    paragraphs: [
      "A search can turn up dozens of similar products, each with a different price, condition, and seller story. Comparing them across tabs takes time, and the cheapest listing isn't always the one you'd feel good about buying.",
      "Picky puts the options in one place, then looks beyond the headline price. It weighs the listing details and seller feedback, shows how the candidates compare, and explains why one stands out. You also get an alternative when there’s another option worth a look.",
      "Jiji is the first connected marketplace. The product is still in the lab, with Jumia, Konga, and Amazon shown as future sources rather than available searches today.",
    ],
    aside: "A clearer answer, with the reasoning beside it.",
  },
  stepsTitle: "From one search to a considered choice.",
  steps: [
    {
      title: "Say what you want.",
      description:
        "Search for a product in plain language. Picky starts with live Jiji listings and gathers the details behind each result.",
    },
    {
      title: "See the options unfold.",
      description:
        "Listings arrive as they’re found. Picky compares condition, price, specifications, and seller feedback in one view.",
    },
    {
      title: "Choose with context.",
      description:
        "Get a recommended listing, the reasons it won, and an alternative worth considering. Open the original listing when you’re ready.",
    },
  ],
  engineering: {
    title: "A live search with a reasoned finish.",
    intro:
      "I built Picky across the frontend, backend, and AI workflow: from a focused search interface to live product updates and a recommendation that explains itself.",
    points: [
      {
        title: "Marketplace data, made useful",
        description:
          "The backend retrieves Jiji listings, product details, and available seller reviews, then presents them in a consistent format for comparison.",
      },
      {
        title: "Progress you can actually see",
        description:
          "Server-sent events stream status updates and listings to the interface before the comparison and final recommendation arrive.",
      },
      {
        title: "A recommendation with reasons",
        description:
          "AI workflows compare the candidates and return a leading pick, the thinking behind it, and an alternative. The marketplace layer leaves room for more sources as they’re built.",
      },
    ],
  },
  technologies: [
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "Vite", icon: "/tech/vite.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "n8n", icon: "/tech/n8n.svg" },
    { name: "ChatGPT", icon: "/tech/openai.svg" },
  ],
  closingLine: "Good choices deserve good reasons.",
};

export default function PickyProjectPage() {
  return <ProjectPage project={project} />;
}
