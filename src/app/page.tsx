'use client';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Technologies from './Technologies';
import Header from './components/Header';

const Home = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="container mx-auto md:px-20 lg:px-40 xl:px-52 pt-24">
      <div id="about-me" className="py-12 animate-fadeIn">
        <AboutMe />
      </div>
      <div id="technologies" className="py-12 animate-fadeIn">
        <Technologies />
      </div>
      <div id="projects" className="py-12 animate-fadeIn">
        <Projects />
      </div>
    </main>
  </div>
);

export default Home;



