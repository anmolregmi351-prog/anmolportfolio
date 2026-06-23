import eshara from "@/assets/project-eshara.jpg";
import agro from "@/assets/project-agro.jpg";
import emergency from "@/assets/project-emergency.jpg";

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Eshara Nepal",
    category: "Civic Tech",
    description:
      "A crowdfunding and volunteering platform connecting people who want to help with causes that need it — built to make giving and volunteering in Nepal faster to find and easier to trust.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind", "Stripe"],
    image: eshara,
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Agro Hub",
    category: "Agritech",
    description:
      "Cuts out the middle layer between farmers and the people who buy from them, so farmers see fairer prices and buyers see fresher, more transparent sourcing.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    image: agro,
    github: "#",
    demo: "#",
  },
  {
    title: "Emergency Vehicle Alert System",
    category: "Public Safety",
    description:
      "Detects accidents and automatically notifies emergency responders — built to shrink the minutes between an accident happening and help arriving.",
    tech: ["Python", "IoT", "Firebase", "Twilio", "Mapbox"],
    image: emergency,
    github: "#",
    demo: "#",
  },
];
