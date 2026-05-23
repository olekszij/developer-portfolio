'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "Pourquoi travailler avec un freelance plutôt qu'une agence ?",
    answer:
      "Avec un freelance, vous avez un interlocuteur unique qui connaît votre projet de A à Z. Pas de turnover, pas de chef de projet intermédiaire. Le résultat : une communication plus fluide, des délais plus courts, et un budget 40 à 60% inférieur à celui d'une agence parisienne pour une qualité équivalente.",
  },
  {
    question: "Quel est l'avantage d'un profil UX + Développeur ?",
    answer:
      "La plupart des professionnels sont soit designer, soit développeur. Quand les deux rôles sont séparés, le passage du design au code crée des frictions : perte de détails, allers-retours, délais. Avec un profil hybride, le design est pensé pour être développé, et le code respecte le design au pixel près. Zéro friction.",
  },
  {
    question: "Combien coûte un projet type ?",
    answer:
      "Un site vitrine professionnel commence autour de 3 000€. Une application web sur mesure entre 8 000€ et 25 000€ selon la complexité. Un audit UX à partir de 1 500€. Je propose toujours un devis détaillé et transparent après notre appel découverte — sans surprise.",
  },
  {
    question: "Quels sont les délais habituels ?",
    answer:
      "Un site vitrine : 3 à 5 semaines. Une application web : 6 à 12 semaines. Un audit UX : 1 à 2 semaines. Ces délais incluent la phase de design ET de développement. Chaque projet est différent — on en discute lors de l'appel découverte.",
  },
  {
    question: "Travaillez-vous uniquement à Paris ?",
    answer:
      "Je suis basé à Paris et disponible pour des rendez-vous en présentiel dans Paris et l'Île-de-France. Je travaille également à distance avec des clients partout en France. Les réunions se font via Google Meet ou en personne selon vos préférences.",
  },
  {
    question: "Que se passe-t-il après la livraison ?",
    answer:
      "Chaque projet inclut 30 jours de support post-lancement pour corriger les bugs éventuels et répondre à vos questions. Je fournis également une documentation technique et une formation pour que vous puissiez gérer votre site en autonomie. Des contrats de maintenance mensuels sont aussi disponibles.",
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer:
      "React, Next.js, TypeScript et Tailwind CSS pour le front-end. Node.js et PostgreSQL pour le back-end quand nécessaire. Figma pour le design. Vercel ou Netlify pour l'hébergement. Je choisis toujours les outils les plus adaptés à votre projet, pas les plus à la mode.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 mb-3">
            Questions fréquentes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Vos questions, mes réponses
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-100 bg-gray-50/50 transition-all duration-200 hover:border-gray-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-950 pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    size={14}
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
