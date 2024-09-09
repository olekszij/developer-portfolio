'use client';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Technologies from './Technologies';


const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <main className="container mx-auto">
      <section id="about-me" className="py-12 animate-fadeIn">
        <AboutMe />
      </section>
      <section id="technologies" className="py-12 animate-fadeIn">
        <Technologies />
      </section>
      <section id="projects" className="py-12 animate-fadeIn">
        <Projects />
      </section>
      <section id="proddjects" className="py-12 animate-fadeIn">
        <Projects />
      </section>
    </main>
  </div>
);

export default Home;



