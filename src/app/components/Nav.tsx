'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
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

    const scrollToSection = (sectionId: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
        const element = document.getElementById(sectionId);
        if (element) {
            e?.preventDefault();
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
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
                <Link
                    href="/#about-me"
                    onClick={(e) => scrollToSection('about-me', e)}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="/#skills"
                    onClick={(e) => scrollToSection('skills', e)}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    Skills
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="/#projects"
                    onClick={(e) => scrollToSection('projects', e)}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    Projects
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href="/#contact"
                    onClick={(e) => scrollToSection('contact', e)}
                    className="text-base font-medium text-black transition-all duration-300 relative group">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
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
                        <Link
                            href="/#about-me"
                            onClick={(e) => scrollToSection('about-me', e)}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            About Me
                        </Link>
                        <Link
                            href="/#skills"
                            onClick={(e) => scrollToSection('skills', e)}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            Skills
                        </Link>
                        <Link
                            href="/#projects"
                            onClick={(e) => scrollToSection('projects', e)}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            Projects
                        </Link>
                        <Link
                            href="/#contact"
                            onClick={(e) => scrollToSection('contact', e)}
                            className="text-2xl font-medium text-black transition-all duration-300">
                            Contact
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Nav;
