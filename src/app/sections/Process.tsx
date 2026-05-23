'use client';

const steps = [
  {
    number: "01",
    title: "Découverte",
    description:
      "On échange sur votre projet, vos objectifs business et vos utilisateurs cibles. Je comprends vos besoins et je définis le périmètre du projet.",
    details: [
      "Appel découverte gratuit (30 min)",
      "Analyse de vos objectifs et KPIs",
      "Étude de votre marché et concurrence",
      "Proposition détaillée sous 48h",
    ],
    duration: "1–2 jours",
  },
  {
    number: "02",
    title: "Design UX/UI",
    description:
      "Je conçois l'architecture de l'information, les wireframes, puis le design final. Vous validez chaque étape avant de passer à la suivante.",
    details: [
      "Architecture de l'information",
      "Wireframes et maquettes",
      "Design haute-fidélité",
      "Prototype interactif pour validation",
    ],
    duration: "1–2 semaines",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Je développe votre site ou application avec React et Next.js. Intégration pixel-perfect du design validé, code propre et performant.",
    details: [
      "Développement React / Next.js",
      "Responsive design (mobile-first)",
      "Optimisation performance et SEO",
      "Tests et assurance qualité",
    ],
    duration: "2–4 semaines",
  },
  {
    number: "04",
    title: "Lancement & Suivi",
    description:
      "Déploiement en production, vérification finale, et accompagnement post-lancement pour s'assurer que tout fonctionne parfaitement.",
    details: [
      "Mise en production",
      "Formation à l'utilisation",
      "Documentation technique",
      "Support post-lancement (30 jours)",
    ],
    duration: "1 semaine",
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-400 mb-3">
            Comment ça marche
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Un processus clair, sans surprises
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            De la première discussion au lancement — vous savez exactement où en est votre projet à chaque étape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900"
            >
              <div className="flex items-start gap-5">
                <span className="text-5xl font-extrabold text-blue-500/20 leading-none select-none">
                  {step.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-5">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Démarrer mon projet
          </a>
        </div>
      </div>
    </section>
  );
}
