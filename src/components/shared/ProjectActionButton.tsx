"use client";

import Button from "@/components/ui/Button";
import { Arrow } from "@/components/portfolio/shared";
import type { ProjectAction } from "./project-types";
import { openProjectDemo } from "./openProjectDemo";

export default function ProjectActionButton({
  action,
  footer = false,
}: {
  action: ProjectAction;
  footer?: boolean;
}) {
  if (action.kind === "external") {
    return (
      <Button
        href={action.href}
        target="_blank"
        icon={<Arrow diagonal className="size-4" />}
      >
        {footer ? action.footerLabel : action.label}
      </Button>
    );
  }

  return (
    <Button
      onClick={openProjectDemo}
      icon={
        <svg viewBox="0 0 24 24" fill="none" className="size-4" aria-hidden="true">
          <path d="m9 6 9 6-9 6V6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      }
    >
      {action.label}
    </Button>
  );
}
