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
                    {isOpen ?
                        <FaTimes size={28} style={{ fill: 'black' }} /> :
                        <FaBars size={28} style={{ fill: 'black' }} />
                    }
                </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
                <button
                    onClick={() => scrollToSection('about-me')}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                    onClick={() => scrollToSection('technologies')}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    Technologies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="fixed inset-0 bg-white z-50 md:hidden">
                    <div className="absolute top-6 right-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl"
                        >
                            <FaTimes size={28} style={{ fill: 'black' }} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full space-y-12">
                        <button
                            onClick={() => scrollToSection('about-me')}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            About Me
                        </button>
                        <button
                            onClick={() => scrollToSection('technologies')}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            Technologies
                        </button>
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            Projects
                        </button>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Nav;