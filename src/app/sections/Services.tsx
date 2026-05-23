'use client';

import { FaSearch, FaPencilRuler, FaCode, FaSyncAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

const services: {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  accent: string;
  accentBg: string;
}[] = [
  {
    icon: FaSearch,
    title: "Audit UX",
    description:
      "Analyse complète de votre site ou application existante pour identifier les freins à la conversion et les opportunités d'amélioration.",
    features: [
      "Analyse heuristique de l'interface",
      "Cartographie des parcours utilisateurs",
      "Rapport avec recommandations priorisées",
      "Benchmarking concurrentiel",
    ],
    accent: "text-amber-600",
    accentBg: "bg-amber-50",
  },
  {
    icon: FaPencilRuler,
    title: "Design UX/UI",
    description:
      "Conception d'interfaces centrées utilisateur qui convertissent. Du wireframe au design system complet.",
    features: [
      "Wireframes et prototypes interactifs",
      "Design responsive (mobile-first)",
      "Design system réutilisable",
      "Tests utilisateurs et itérations",
    ],
    accent: "text-blue-600",
    accentBg: "bg-blue-50",
  },
  {
    icon: FaCode,
    title: "Développement React",
    description:
      "Développement front-end moderne avec React et Next.js. Code propre, performant et maintenable.",
    features: [
      "React / Next.js / TypeScript",
      "Intégration pixel-perfect du design",
      "Optimisation performance (Core Web Vitals)",
      "SEO technique et accessibilité",
    ],
    accent: "text-green-600",
    accentBg: "bg-green-50",
  },
  {
    icon: FaSyncAlt,
    title: "Refonte complète",
    description:
      "Transformation totale de votre présence digitale — de l'audit à la mise en production, en passant par le design et le développement.",
    features: [
      "Audit de l'existant + stratégie",
      "Nouveau design orienté conversion",
      "Développement et déploiement",
      "Formation et documentation",
    ],
    accent: "text-purple-600",
    accentBg: "bg-purple-50",
  },
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-600 mb-3">
            Ce que je propose
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
            Des services adaptés à vos besoins
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            De l&apos;audit UX au développement React complet — un seul interlocuteur pour tout votre projet digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-white"
              >
                <div className={`w-14 h-14 rounded-xl ${service.accentBg} flex items-center justify-center mb-6`}>
                  <Icon size={26} className={service.accent} />
                </div>

                <h3 className="text-xl font-bold text-gray-950 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-[0.95rem]">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${service.accentBg} ring-2 ${service.accent.replace('text-', 'ring-')} flex-shrink-0`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gray-950 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-lg"
          >
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
}
