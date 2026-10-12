import Image from "next/image";
import { Arrow } from "@/components/portfolio/shared";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/igomigo-fatai/", icon: "/social/linkedin.svg" },
  { name: "GitHub", href: "https://github.com/Igomigo", icon: "/social/github.svg" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <nav aria-label="Social profiles" className={`flex flex-wrap gap-3 ${className}`}>
      {socials.map((social) => (
        <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
          aria-label={`${social.name} profile (opens in a new tab)`}
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-full border border-[#dfe3ee] bg-white/60 px-4 text-[11px] text-[#383b43] transition duration-300 hover:-translate-y-0.5 hover:border-[#bccaff] hover:bg-white hover:text-[#2458ed] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2458ed]">
          <Image src={social.icon} alt="" width={17} height={17} className="size-[17px] object-contain" />
          {social.name}
          <Arrow diagonal className="ml-1 size-3 text-[#9095a2] transition-colors group-hover:text-[#2458ed]" />
        </a>
      ))}
    </nav>
  );
}
