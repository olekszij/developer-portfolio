'use client';

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Блокируем скролл при открытом меню
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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <div className="relative">
            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl"
            >
                <div className="relative">
                    <svg width="0" height="0">
                        <linearGradient id="hamburger-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop stopColor="#3B82F6" offset="0%" />
                            <stop stopColor="#9333EA" offset="100%" />
                        </linearGradient>
                    </svg>
                    {isOpen ?
                        <FaTimes size={28} style={{ fill: 'url(#hamburger-gradient)' }} /> :
                        <FaBars size={28} style={{ fill: 'url(#hamburger-gradient)' }} />
                    }
                </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
                <button
                    onClick={() => scrollToSection('about-me')}
                    className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                    About Me
                </button>
                <button
                    onClick={() => scrollToSection('technologies')}
                    className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                    Technologies
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                    Projects
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="fixed inset-0 bg-gray-800 z-50 md:hidden">
                    <div className="absolute top-4 right-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            <FaTimes size={28} style={{ fill: 'url(#hamburger-gradient)' }} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <button
                            onClick={() => scrollToSection('about-me')}
                            className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                            About Me
                        </button>
                        <button
                            onClick={() => scrollToSection('technologies')}
                            className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                            Technologies
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text transition-all duration-300 hover:scale-110">
                            Projects
                        </button>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Nav;