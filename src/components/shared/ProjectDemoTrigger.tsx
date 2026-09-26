"use client";

import type { ReactNode } from "react";

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
      onClick={() =>
        (document.getElementById("project-demo") as HTMLDialogElement | null)?.showModal()
      }
    >
      {children}
    </button>
  );
}
