import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anmol — Entrepreneur & Future Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Anmol — entrepreneur and future software engineer building Eshara Nepal, Smart Agro Hub, and the Emergency Vehicle Alert System.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
