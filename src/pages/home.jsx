import { useEffect } from "react";
import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Profile from "@/components/sections/profile";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Education from "@/components/sections/education";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/40 selection:text-foreground">

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="divide-y divide-white/[0.04]">
          <Profile />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/5 text-center font-mono text-sm">
        <p className="text-muted-foreground">
          Designed & Built by{" "}
          <span className="text-gradient font-semibold">Shital Kumari</span>
        </p>
      </footer>
    </div>
  );
}



