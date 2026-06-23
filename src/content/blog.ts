export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Eshara Nepal: Notes From The First 90 Days",
    category: "Founder Notes",
    excerpt:
      "What I learned shipping a crowdfunding platform in a market that doesn't have one — and the trust gap nobody warned me about.",
    readTime: "6 min read",
    date: "Jun 2026",
  },
  {
    title: "Why I'm Choosing Software Engineering As A Founder",
    category: "Career",
    excerpt:
      "The case for going deep on engineering even when your long-term path is entrepreneurship.",
    readTime: "4 min read",
    date: "May 2026",
  },
  {
    title: "Smart Agro Hub: Removing The Middle Layer",
    category: "Agritech",
    excerpt:
      "Field interviews with farmers reshaped our entire pricing model. Here's what changed and why.",
    readTime: "5 min read",
    date: "Apr 2026",
  },
];
