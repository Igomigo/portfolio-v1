import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  target?: "_blank";
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const styles =
  "inline-flex min-h-12 cursor-pointer items-center justify-between gap-7 rounded-[5px] border border-[#202124] bg-[#202124] px-[17px] py-[13px] text-[11px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#2458ed] hover:bg-[#2458ed] hover:shadow-[0_6px_20px_#2458ed18] disabled:cursor-wait disabled:opacity-60 md:min-h-[50px] md:gap-[34px] md:px-5 md:py-[15px] md:text-xs";

export default function Button({
  children,
  icon,
  href,
  target,
  className = "",
  disabled,
  onClick,
  type = "button",
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  if (href) {
    return (
      <a
        className={`${styles} ${className}`}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${styles} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}
