import React from "react";
import AboutMe from "./_sections/AboutMe";
import CoreSkills from "./_sections/CoreSkills";
import Projects from "./_sections/Projects";
import ContactSection from "./_sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto md:px-20 lg:px-40 xl:px-52 pt-24">
        <div id="about-me" className="scroll-mt-28 py-8 md:py-12">
          <AboutMe />
        </div>
        <div id="skills" className="scroll-mt-28 py-4 md:py-8">
          <CoreSkills />
        </div>
        <div id="projects" className="scroll-mt-28 py-4 md:py-8">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-28 py-8 md:py-12">
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
