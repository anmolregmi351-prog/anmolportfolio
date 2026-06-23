export type SkillCategory = "Programming" | "Frontend" | "Backend" | "Database" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: number; // 0-100
}

export const skills: Skill[] = [
  { name: "Python", category: "Programming", level: 85 },
  { name: "JavaScript", category: "Programming", level: 90 },
  { name: "TypeScript", category: "Programming", level: 82 },
  { name: "Java", category: "Programming", level: 70 },
  { name: "C++", category: "Programming", level: 68 },
  { name: "React", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 85 },
  { name: "Tailwind CSS", category: "Frontend", level: 92 },
  { name: "Node.js", category: "Backend", level: 80 },
  { name: "Express", category: "Backend", level: 78 },
  { name: "PostgreSQL", category: "Database", level: 75 },
  { name: "MongoDB", category: "Database", level: 78 },
  { name: "Git", category: "Tools", level: 88 },
  { name: "Docker", category: "Tools", level: 65 },
  { name: "VS Code", category: "Tools", level: 95 },
  { name: "Figma", category: "Tools", level: 72 },
];

export const skillCategories: SkillCategory[] = [
  "Programming",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];
