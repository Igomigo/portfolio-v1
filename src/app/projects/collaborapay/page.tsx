import type { Metadata } from "next";
import ProjectPage from "@/components/shared/ProjectPage";
import type { ProjectData } from "@/components/shared/project-types";

export const metadata: Metadata = {
  title: "Collaborapay — Fatai Igomigo",
  description: "A group contribution tracking platform for trips, events, and shared expenses, with invitations, payment confirmations, reminders, and statements.",
};

const project: ProjectData = {
  name: "Collaborapay",
  headline: "Shared plans. Clear contributions.",
  status: "Built end to end · Frontend & backend",
  summary: "A trip, an event, a plan worth making together. Collaborapay gives the organiser one place to track contributions, confirm payments, and see what’s still outstanding, while everyone gets a clear view of their own balance.",
  action: { kind: "external", href: "https://collaborapay.com/", label: "Explore Collaborapay", footerLabel: "Open Collaborapay" },
  image: { src: "/collaborapay/collaborapay-light-mode.png", alt: "Collaborapay group dashboard showing contributions and outstanding balances", width: 3456, height: 2158 },
  gallery: [
    { src: "/collaborapay/collaborapay-light-mode.png", width: 3456, height: 2158, alt: "Collaborapay light-mode group contribution overview", title: "The shared picture", description: "Collected contributions, deadlines, and individual balances in one place." },
    { src: "/collaborapay/groups-dashboard.png", width: 3456, height: 2158, alt: "Collaborapay groups dashboard", title: "Every group, together", description: "A workspace for keeping track of different trips, events, and shared plans." },
    { src: "/collaborapay/create-group-flow.png", width: 3456, height: 2162, alt: "Collaborapay create-group flow", title: "Start a shared plan", description: "Set up the group, contribution amount, payment details, and deadline." },
    { src: "/collaborapay/scan-code-to-join-group.png", width: 3456, height: 2162, alt: "Collaborapay QR invitation to join a group", title: "Bring everyone in", description: "Share a group invitation by link or QR code." },
    { src: "/collaborapay/group-page.png", width: 3456, height: 2164, alt: "Collaborapay group page and contribution details", title: "The details that matter", description: "Keep the group’s contributions and progress easy to follow." },
    { src: "/collaborapay/members-page.png", width: 3454, height: 2160, alt: "Collaborapay members workspace", title: "A view of each member", description: "Keep track of contributions and what each person still owes." },
    { src: "/collaborapay/auth-flow.png", width: 3450, height: 2146, alt: "Collaborapay authentication screen", title: "A simple way in", description: "An entry point for organisers to access their workspace." },
    { src: "/collaborapay/settings-page.png", width: 3456, height: 2156, alt: "Collaborapay account settings", title: "Make it yours", description: "Manage account details and preferences." },
  ],
  colors: { surface: "radial-gradient(ellipse at 50% 25%, #fbfdff 0%, #eaf2ff 60%, #dce8fa 100%)", accent: "#2374db" },
  visualNote: "less chasing. more getting together.",
  story: {
    title: "The plan is fun. Chasing payments isn’t.",
    paragraphs: [
      "Organising a group trip or event often means becoming the person who remembers everything: who has paid, who sent part of their share, and who still needs a reminder. Messages and spreadsheets can keep things moving, but the picture gets harder to follow as the group grows.",
      "Collaborapay gives that work a home. Create a group, set the contribution and deadline, then invite people with a link or QR code. Members get a personal access link by email, so they can see their balance and submit a payment for the organiser to confirm.",
      "Payments are made to the organiser’s bank account; Collaborapay keeps track of them. Confirmed contributions update member balances, pending submissions stay visible for review, and reminders help follow up with people who still owe. Exports and downloadable statements make it easier to share a clear record of the group’s progress.",
    ],
    aside: "More time for the plan. Less time chasing the details.",
  },
  stepsTitle: "From the first invite to the final contribution.",
  steps: [
    { title: "Set up the group.", description: "Add the shared plan, contribution amount, bank details, and deadline. Invite members with a group link or QR code." },
    { title: "Keep contributions visible.", description: "Members access their page through an emailed link and submit payment details after paying. The organiser reviews and confirms each submission." },
    { title: "Close the loop.", description: "See updated balances, send reminders to unpaid members, and export the records or download a group statement." },
  ],
  engineering: {
    title: "Simple on the surface. Connected underneath.",
    intro: "I built Collaborapay end to end, from the frontend to the backend. That includes the organiser and member interfaces, authentication, group invitations, payment review, balance tracking, notifications, and reporting. Together, they form a complete flow from joining a group to recording a confirmed contribution.",
    points: [
      { title: "Two sides of the same group", description: "An organiser workspace manages groups and members, while personal access links let members view their contribution details without the same account setup." },
      { title: "Payment review with consistent balances", description: "Submitted payments move through pending, confirmed, or rejected states. MongoDB transactions keep confirmation and member balance updates together." },
      { title: "Invitations and follow-up", description: "Group codes, QR invitations, emailed access links, payment reminders, and in-app notifications connect the steps that otherwise happen across separate messages." },
      { title: "A record people can use", description: "Search, CSV exports, and PDF group statements turn contribution history into a record that organisers can review and share." },
    ],
  },
  technologies: [
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "React", icon: "/tech/react.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Express", icon: "/tech/express.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  ],
  closingLine: "Keep everyone on the same page.",
};

export default function CollaborapayProjectPage() {
  return <ProjectPage project={project} />;
}
