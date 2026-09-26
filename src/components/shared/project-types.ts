export type ProjectStep = {
  title: string;
  description: string;
};

export type ProjectTechnology = {
  name: string;
  icon: string;
};

export type ProjectAction =
  | { kind: "external"; href: string; label: string; footerLabel: string }
  | { kind: "demo"; label: string; videoSrc?: string };

export type ProjectGallerySlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
};

export type ProjectData = {
  name: string;
  headline: string;
  summary: string;
  status?: string;
  action: ProjectAction;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  gallery?: ProjectGallerySlide[];
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
