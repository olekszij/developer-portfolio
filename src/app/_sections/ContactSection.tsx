'use client';

import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
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
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-950">Get in Touch</h2>
                <p className="mt-4 text-lg text-gray-700">
                    Open to web-development roles and product-minded projects. Reach out here or find me on:
                </p>
                <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                        href="https://github.com/olekszij"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-950 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olek-k/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-950 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                        <FaLinkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="/cv"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-950 transition hover:border-gray-300 hover:bg-gray-50"
                    >
                        View CV
                    </a>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            >
                {status.type && (
                    <div
                        role="alert"
                        className={`p-4 rounded-lg ${status.type === 'success'
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                    >
                        {status.message}
                    </div>
                )}

                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-gray-400 focus:ring-2 focus:ring-gray-200 focus:outline-none transition-all duration-300 resize-none bg-gray-50 hover:bg-white"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl active:shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
