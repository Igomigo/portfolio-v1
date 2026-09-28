"use client";

import type { ReactNode } from "react";
import { openProjectDemo } from "./openProjectDemo";

export default function ProjectDemoTrigger({
  children,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  className: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={openProjectDemo}
    >
      {children}
    </button>
  );
}
