import type { ReactNode } from "react";

export const pageWidth =
  "mx-auto w-[calc(100%-44px)] max-w-[1280px] md:w-[calc(100%-72px)] xl:w-[calc(100%-112px)]";
export const eyebrow =
  "font-mono text-[8px] font-normal leading-[1.6] tracking-[.1em] md:text-[10px] md:tracking-[.13em]";
export const handwriting =
  "font-[family-name:var(--font-hand)] text-[23px] font-medium leading-[1.05] text-[#2458ed] md:text-[25px]";
export const sectionTitle =
  "text-[clamp(30px,7.7vw,43px)] font-medium leading-[1.14] tracking-[-.052em] md:text-[clamp(34px,3.5vw,50px)] md:tracking-[-.055em]";
export function Arrow({
  diagonal = false,
  className = "size-5",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M10 5h9v9" : "M4 12h15m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Spark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m39 4 2 72M8 18l63 44M5 48l70-17M20 72 42 5l17 65M6 34l69 18"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`motion-underline pointer-events-none absolute -bottom-[.13em] left-0 h-[.24em] w-full overflow-visible ${className}`}
      viewBox="0 0 570 30"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        pathLength="1"
        d="M5 18C151 2 385 3 561 14M71 25C259 13 428 13 524 21"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}
