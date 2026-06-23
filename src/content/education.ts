export interface EducationEntry {
  title: string;
  org: string;
  duration: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

export const education: EducationEntry[] = [
  {
    title: "Grade 11 — Science",
    org: "High School",
    duration: "2024 — 2025",
    description: "Focus on Mathematics, Physics and Computer Science.",
    status: "current",
  },
  {
    title: "Software Engineering (B.E. / B.Sc.)",
    org: "Target — Undergraduate Programme",
    duration: "2026 — 2030",
    description:
      "Planned degree path with emphasis on systems, distributed software and entrepreneurship.",
    status: "upcoming",
  },
  {
    title: "Web Development Certification",
    org: "Self-directed + Online Platforms",
    duration: "2023",
    description: "Full-stack JavaScript fundamentals, React and Node.js.",
    status: "completed",
  },
  {
    title: "Python for Everybody",
    org: "Online Specialization",
    duration: "2022",
    description: "Programming fundamentals, data structures and basic data analysis.",
    status: "completed",
  },
];
