'use client';

import { FaArrowRight } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 mb-6">
            UX/UI Design &amp; Développement React — Paris &amp; Île-de-France
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
            Votre idée mérite
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              un produit digital
            </span>
            <br />
            qui convertit.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            UX Designer et Développeur React — un seul interlocuteur pour concevoir, 
            designer et développer votre site ou application web. 
            Du premier wireframe au code en production.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Réservez un appel découverte
              <FaArrowRight size={14} />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center rounded-xl border border-gray-700 bg-gray-900/50 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gray-500 hover:bg-gray-800"
            >
              Voir mes réalisations
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl">
            <div className="border-l-2 border-blue-500/40 pl-4">
              <p className="text-3xl font-bold text-white">5+</p>
              <p className="text-sm text-gray-400 mt-1">Projets livrés</p>
            </div>
            <div className="border-l-2 border-blue-500/40 pl-4">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400 mt-1">Clients satisfaits</p>
            </div>
            <div className="border-l-2 border-blue-500/40 pl-4">
              <p className="text-3xl font-bold text-white">Paris</p>
              <p className="text-sm text-gray-400 mt-1">Disponible en présentiel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
