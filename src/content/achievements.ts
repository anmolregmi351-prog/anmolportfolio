export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface Badge {
  title: string;
  org: string;
  year: string;
}

export const stats: Stat[] = [
  { label: "Startups Built", value: 3 },
  { label: "Competitions Entered", value: 6 },
  { label: "Leadership Roles", value: 4 },
  { label: "Communities Served", value: 12, suffix: "+" },
];

export const badges: Badge[] = [
  { title: "Young Innovator Award", org: "Regional STEM Fair", year: "2024" },
  { title: "Top 10 Startup Pitch", org: "School Entrepreneurship Cup", year: "2024" },
  { title: "Hackathon Finalist", org: "National Code Sprint", year: "2023" },
  { title: "Community Impact Recognition", org: "Local Government", year: "2023" },
];
