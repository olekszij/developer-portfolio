import React from "react";
import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Realisations from "./sections/Realisations";
import FAQ from "./sections/FAQ";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div id="accueil" className="scroll-mt-20">
        <Hero />
      </div>
      <div id="problemes" className="scroll-mt-20">
        <Problems />
      </div>
      <div id="services" className="scroll-mt-20">
        <Services />
      </div>
      <div id="processus" className="scroll-mt-20">
        <Process />
      </div>
      <div id="realisations" className="scroll-mt-20">
        <Realisations />
      </div>
      <div id="faq" className="scroll-mt-20">
        <FAQ />
      </div>
      <div id="contact" className="scroll-mt-20">
        <ContactSection />
      </div>
    </main>
  );
}
