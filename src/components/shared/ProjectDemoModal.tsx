"use client";

import { useRef } from "react";
import Image from "next/image";
import type { ProjectData } from "./project-types";

export default function ProjectDemoModal({ project }: { project: ProjectData }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const videoSrc = project.action.kind === "demo" ? project.action.videoSrc : undefined;

  return (
    <dialog
      id="project-demo"
      ref={dialog}
      onClose={() => video.current?.pause()}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current?.close();
      }}
      aria-labelledby="project-demo-title"
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100vw-32px)] max-w-[1080px] overflow-y-auto rounded-[16px] border border-white/70 bg-[#f8f6ff] p-0 text-[#202124] shadow-[0_32px_100px_#14122555] backdrop:bg-[#171426b3] backdrop:backdrop-blur-[6px]"
    >
      <div className="relative p-5 md:p-9">
        <button
          type="button"
          onClick={() => dialog.current?.close()}
          aria-label="Close demo"
          className="absolute right-5 top-5 z-10 grid size-10 cursor-pointer place-items-center rounded-full border border-[#d9d6e5] bg-white text-xl leading-none transition hover:bg-[#eeebfa] md:right-9 md:top-9"
        >
          ×
        </button>
        <div className="max-w-[700px] pr-12">
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[.16em] text-[#6155c9]">
            {project.name} / In the lab
          </p>
          <h2 id="project-demo-title" className="text-[clamp(29px,4vw,48px)] leading-[1.1] tracking-[-.055em]">
            {videoSrc ? `Watch ${project.name} in action.` : `A closer look at ${project.name}.`}
          </h2>
          {!videoSrc && (
            <p className="mt-4 max-w-[590px] text-[14px] leading-[1.7] text-[#6e6b79] md:text-[16px]">
              The video walkthrough is being prepared. For now, here’s the current product interface; the full demo will appear here soon.
            </p>
          )}
        </div>
        <div className="mt-7 overflow-hidden rounded-[10px] border border-[#e3dff0] bg-white shadow-[0_24px_55px_#2820521f] md:mt-9">
          {videoSrc ? (
            <video
              ref={video}
              controls
              playsInline
              preload="metadata"
              poster={project.image.src}
              className="block aspect-video w-full bg-black object-contain"
            >
              <source src={videoSrc} />
              Your browser does not support this video.
            </video>
          ) : (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1080px) 1000px, 95vw"
              className="block h-auto w-full"
            />
          )}
        </div>
      </div>
    </dialog>
  );
}
