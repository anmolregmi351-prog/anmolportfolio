export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Thapa",
    role: "Mentor, Startup Incubator",
    initials: "ST",
    quote:
      "Anmol thinks like an engineer and ships like a founder. The combination is rare at any age — at his, it's unusual.",
  },
  {
    name: "Rajiv K.",
    role: "Engineering Lead",
    initials: "RK",
    quote:
      "Pragmatic, technical, and unafraid of the boring problems that actually matter. A genuinely high-leverage builder.",
  },
  {
    name: "Mira Sharma",
    role: "Community Partner, Eshara Nepal",
    initials: "MS",
    quote:
      "He listens before he builds. That's why the things he ships actually get used by the people they're meant for.",
  },
];
