"use client";

import { useEffect, useRef } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Work from "./Work";
import AutomationDemo from "./AutomationDemo";
import Approach from "./Approach";
import About from "./About";
import Contact from "./Contact";
import Capabilities from "./Capabilities";

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-waiting");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    element.querySelectorAll("[data-reveal]").forEach((item) => {
      if (item.getBoundingClientRect().top > innerHeight * 0.88)
        item.classList.add("reveal-waiting");
      observer.observe(item);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={root}
      id="top"
      className="portfolio min-h-screen overflow-clip bg-white font-sans text-[#202124] [text-rendering:optimizeLegibility]"
    >
      <a
        className="fixed left-4 -top-24 z-[100] bg-white p-3 focus:top-3"
        href="#main"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <AutomationDemo />
        <Approach />
        <Capabilities />
        <Contact />
      </main>
    </div>
  );
}
