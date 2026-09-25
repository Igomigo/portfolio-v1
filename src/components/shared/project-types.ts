export type ProjectStep = {
  title: string;
  description: string;
};

export type ProjectTechnology = {
  name: string;
  icon: string;
};

export type ProjectData = {
  name: string;
  headline: string;
  summary: string;
  liveUrl: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  colors: {
    surface: string;
    accent: string;
  };
  visualNote: string;
  story: {
    title: string;
    paragraphs: string[];
    aside: string;
  };
  stepsTitle: string;
  steps: ProjectStep[];
  engineering: {
    title: string;
    intro: string;
    points: ProjectStep[];
  };
  technologies: ProjectTechnology[];
  closingLine: string;
};
