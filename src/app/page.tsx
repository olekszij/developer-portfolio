'use client';

import React from "react";
import AboutMe from "./AboutMe";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto md:px-20 lg:px-40 xl:px-52 pt-24">
        <div id="about-me" className="py-12 animate-fadeIn">
          <AboutMe />
        </div>
        <div id="technologies" className="py-12 animate-fadeIn">
          <Technologies />
        </div>
        <div id="projects" className="py-12 animate-fadeIn">
          <Projects />
        </div>
        <div id="contact" className="py-12 animate-fadeIn">
          <Contact />
        </div>
      </div>
    </main>
  );
}


