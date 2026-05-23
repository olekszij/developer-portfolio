'use client';

import { FaExclamationTriangle, FaMobileAlt, FaUserSlash, FaPalette, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { IconType } from 'react-icons';

const problems: { icon: IconType; title: string; description: string }[] = [
  {
    icon: FaUserSlash,
    title: "Votre site ne génère pas de clients",
    description:
      "Vous avez un site, mais il ne convertit pas. Les visiteurs partent sans prendre contact. Le problème n'est pas le trafic — c'est l'expérience utilisateur.",
  },
  {
    icon: FaPalette,
    title: "Le design ne reflète pas votre expertise",
    description:
      "Votre image en ligne ne correspond pas à la qualité de vos services. Un design daté ou générique fait perdre la confiance des prospects dès les premières secondes.",
  },
  {
    icon: FaExclamationTriangle,
    title: "L'agence a livré un site qui ne vous ressemble pas",
    description:
      "Vous avez investi dans une agence, mais le résultat ne correspond pas à vos attentes. Modifications coûteuses, communication difficile, délais dépassés.",
  },
  {
    icon: FaMobileAlt,
    title: "Votre site ne fonctionne pas sur mobile",
    description:
      "Plus de 60% de vos visiteurs naviguent sur smartphone. Si votre site n'est pas optimisé mobile, vous perdez la majorité de vos prospects.",
  },
  {
    icon: FaClock,
    title: "Vous avez besoin d'un produit rapidement",
    description:
      "Votre startup a besoin d'un MVP pour valider le marché, mais coordonner un designer et un développeur prend trop de temps et de budget.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Le budget agence est trop élevé",
    description:
      "Les agences parisiennes facturent entre 15K et 80K€ pour un site. Un freelance senior offre la même qualité avec plus de flexibilité, pour 40 à 60% de moins.",
  },
];

export default function Problems() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-red-600 mb-3">
            Vous vous reconnaissez ?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Les problèmes que je résous
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Si l&apos;une de ces situations vous parle, vous êtes au bon endroit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <article
                key={problem.title}
                className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-100"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                  <Icon size={22} className="text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[0.95rem]">
                  {problem.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
