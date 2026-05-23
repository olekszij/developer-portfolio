'use client';

import { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblrozzg', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            'Merci pour votre message ! Je vous répondrai dans les 24 heures.',
        });
        form.reset();
      } else {
        throw new Error('Erreur réseau');
      }
    } catch {
      setStatus({
        type: 'error',
        message:
          "Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.",
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-400 mb-3">
            Parlons de votre projet
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Prêt à démarrer ?
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Décrivez votre projet en quelques lignes et je vous répondrai sous
            24 heures avec une première proposition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-gray-900/50 border border-gray-800 p-8 rounded-2xl"
            >
              {status.type && (
                <div
                  className={`p-4 rounded-xl text-sm ${
                    status.type === 'success'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Entreprise{' '}
                  <span className="text-gray-500">(optionnel)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Budget estimé
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                >
                  <option value="">Sélectionnez une fourchette</option>
                  <option value="< 3 000€">&lt; 3 000€</option>
                  <option value="3 000€ – 8 000€">3 000€ – 8 000€</option>
                  <option value="8 000€ – 15 000€">8 000€ – 15 000€</option>
                  <option value="15 000€ – 25 000€">15 000€ – 25 000€</option>
                  <option value="> 25 000€">&gt; 25 000€</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Décrivez votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                  placeholder="Parlez-moi de votre projet, vos objectifs, vos délais..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">
                Autres moyens de contact
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:olekszijk@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      olekszijk@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <FaLinkedin size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/olek-k/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/olek-k
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="text-white">
                      Paris &amp; Île-de-France
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">
                  Appel découverte gratuit
                </span>{' '}
                — 30 minutes pour discuter de votre projet, comprendre vos
                besoins et voir comment je peux vous aider. Sans engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
