'use client';

import React, { useState } from 'react';

export default function Contact() {
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
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
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
                        Name
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
                        Email
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
                        Message
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
                    Send Message
                </button>
            </form>
        </div>
    );
} 
