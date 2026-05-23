'use client';

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'processus', label: 'Processus' },
    { id: 'realisations', label: 'Réalisations' },
    { id: 'faq', label: 'FAQ' },
];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
        e?.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                aria-label="Ouvrir le menu de navigation"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl"
            >
                {isOpen ? (
                    <FaTimes size={24} className="text-gray-950" />
                ) : (
                    <FaBars size={24} className="text-gray-950" />
                )}
            </button>

            <nav className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(item.id, e)}
                        className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    onClick={(e) => scrollToSection('contact', e)}
                    className="inline-flex items-center justify-center rounded-lg bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
                >
                    Contact
                </a>
            </nav>

            {isOpen && (
                <nav className="fixed inset-0 bg-white z-50 md:hidden">
                    <div className="absolute top-5 right-4">
                        <button
                            aria-label="Fermer le menu de navigation"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes size={24} className="text-gray-950" />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full space-y-10">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                onClick={(e) => scrollToSection(item.id, e)}
                                className="text-2xl font-semibold text-gray-950"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection('contact', e)}
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Nav;
