export interface ExperienceEntry {
  position: string;
  org: string;
  duration: string;
  responsibilities: string[];
  achievements?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    position: "Founder",
    org: "Eshara Nepal",
    duration: "2024 — Present",
    responsibilities: [
      "Designed product strategy and feature roadmap for a national crowdfunding platform.",
      "Led a small engineering and design team across frontend, backend and brand.",
    ],
    achievements: ["Onboarded first volunteer cohort", "Validated MVP with active campaigns"],
  },
  {
    position: "Co-Founder & Builder",
    org: "Smart Agro Hub",
    duration: "2023 — Present",
    responsibilities: [
      "Built marketplace pricing logic and buyer ↔ farmer matching flow.",
      "Conducted field interviews with local farmers to ground product decisions.",
    ],
    achievements: ["Featured in school innovation showcase"],
  },
  {
    position: "Project Lead",
    org: "Emergency Vehicle Alert System",
    duration: "2023",
    responsibilities: [
      "Engineered IoT prototype for crash detection paired with SMS/voice dispatch.",
      "Coordinated hardware sourcing, embedded firmware and cloud function design.",
    ],
    achievements: ["Demoed working prototype at regional STEM event"],
  },
];
