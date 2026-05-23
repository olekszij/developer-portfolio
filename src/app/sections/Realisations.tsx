'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
  {
    name: "Roadmap Academy",
    description:
      "Plateforme d'apprentissage interactive avec des roadmaps structurées pour l'UX/UI et le développement web.",
    stack: "Next.js · TypeScript · UX Design",
    image: "/images/roadmapux.netlify.app__Pixel-7_.webp",
    link: "https://roadmapux.netlify.app/",
    category: "Application Web",
  },
  {
    name: "Perfect Cab",
    description:
      "Site vitrine et système de réservation pour une entreprise de VTC. Design orienté conversion avec parcours de réservation simplifié.",
    stack: "React · Node.js · UX",
    image: "/images/perfect-cab.webp",
    link: "https://perfectcab.fr/fr/",
    category: "Site Vitrine + Réservation",
  },
  {
    name: "Paris Design Patrimoine",
    description:
      "Site professionnel pour une entreprise de construction/rénovation parisienne. Axé sur la confiance et la prise de contact.",
    stack: "Next.js · Tailwind CSS",
    image: "/images/parisdesignpatrimoine.webp",
    link: "https://parisdesignpatrimoine.netlify.app/",
    category: "Site Entreprise",
  },
  {
    name: "Cocktail Explorer",
    description:
      "Application de découverte de recettes de cocktails avec recherche intuitive et navigation fluide.",
    stack: "Next.js · TypeScript · API",
    image: "/images/cocktail.webp",
    link: "https://cool-cocktail-app.netlify.app/",
    category: "Application Web",
  },
];

export default function Realisations() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Projets récents
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Des projets concrets qui montrent comment je combine réflexion UX, design soigné et développement React.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              className="group block"
            >
              <article className="rounded-2xl overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <BiLinkExternal size={18} className="text-gray-800" />
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-950 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[0.95rem] mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    {project.stack}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
