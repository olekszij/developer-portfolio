'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact({ dict, lang }: { dict?: any, lang?: string }) {
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xblrozzg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Thank you for your message! I will get back to you soon.' });
                form.reset();
            } else {
                throw new Error('Network response was not ok');
            }
        } catch {
            setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
        }
    };

    return (
        <section className="relative overflow-hidden w-full bg-fuchsia-50 py-16 md:py-24">
            {/* Ambient Background Blobs */}
            <div className="pointer-events-none absolute -left-40 bottom-0 h-[600px] w-[600px] rounded-full bg-fuchsia-200/40 blur-[120px]"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-pink-200/50 blur-[100px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl lg:text-6xl drop-shadow-sm">{dict?.title || "Get in Touch"}</h2>
                <p className="mt-4 text-lg text-gray-700">
                    {dict?.subtitle || "Open to web-development roles and product-minded projects. Reach out here or find me on:"}
                </p>
                <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="https://github.com/olekszij"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-3.5 font-semibold text-gray-950 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:border-white/80"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olek-k/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-3.5 font-semibold text-gray-950 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:border-white/80"
                    >
                        <FaLinkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href={`/${lang || 'en'}/cv`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/40 px-6 py-3.5 font-semibold text-gray-950 shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:border-white/80"
                    >
                        {dict?.cv || "View CV"}
                    </a>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 hover:bg-white/50 hover:border-white/80 md:p-12"
            >
                {status.type && (
                    <div className={`p-4 rounded-lg ${status.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                        {status.message}
                    </div>
                )}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {dict?.form?.name || "Name"}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-300 transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {dict?.form?.email || "Email"}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-300 transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {dict?.form?.message || "Message"}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-300 transition-all duration-300 resize-none bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl active:shadow-md"
                >
                    {dict?.form?.send || "Send Message"}
                </button>
            </form>
        </div>
        </section>
    );
} 
