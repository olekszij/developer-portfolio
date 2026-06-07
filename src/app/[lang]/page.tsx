import React from "react";
import AboutMe from "../AboutMe";
import CoreSkills from "../CoreSkills";
import Projects from "../Projects";
import Contact from "../Contact";
import { getDictionary } from "@/dictionaries";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen w-full flex flex-col">
      <div id="about-me" className="scroll-mt-28 w-full">
        <AboutMe dict={dict.aboutMe} lang={lang} />
      </div>
      <div id="skills" className="scroll-mt-28 w-full">
        <CoreSkills dict={dict.coreSkills} />
      </div>
      <div id="projects" className="scroll-mt-28 w-full">
        <Projects dict={dict.projects} />
      </div>
      <div id="contact" className="scroll-mt-28 w-full">
        <Contact dict={dict.contact} />
      </div>
    </main>
  );
}
