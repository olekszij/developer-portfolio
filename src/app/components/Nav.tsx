'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = ({ lang, dict }: { lang: string, dict: any }) => {
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
        <div className="relative flex items-center h-full">
            {/* Hamburger button */}
            <button
                aria-label="Toggle navigation menu"
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex items-center justify-center"
            >
                <div className="flex items-center justify-center">
                    {isOpen ?
                        <FaTimes size={28} style={{ fill: 'black' }} /> :
                        <FaBars size={28} style={{ fill: 'black' }} />
                    }
                </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-12">
                <Link
                    href={`/${lang}/#about-me`}
                    onClick={(e) => scrollToSection('about-me', e)}
                    className="text-lg font-bold text-black transition-all duration-300 relative group py-1">
                    {dict?.aboutMe || "About Me"}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href={`/${lang}/#skills`}
                    onClick={(e) => scrollToSection('skills', e)}
                    className="text-lg font-bold text-black transition-all duration-300 relative group py-1">
                    {dict?.skills || "Skills"}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href={`/${lang}/#projects`}
                    onClick={(e) => scrollToSection('projects', e)}
                    className="text-lg font-bold text-black transition-all duration-300 relative group py-1">
                    {dict?.projects || "Projects"}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                    href={`/${lang}/#contact`}
                    onClick={(e) => scrollToSection('contact', e)}
                    className="text-lg font-bold text-black transition-all duration-300 relative group py-1">
                    {dict?.contact || "Contact"}
                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="fixed top-0 left-0 w-screen h-[100dvh] bg-[#F5F4EF] z-50 md:hidden flex flex-col overflow-y-auto">
                    {/* Top Header */}
                    <div className="flex justify-end items-center px-6 py-6">
                        <button
                            aria-label="Close navigation menu"
                            onClick={() => setIsOpen(false)}
                            className="text-black hover:opacity-70 transition-opacity"
                        >
                            <FaTimes size={32} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-1 flex-col items-center justify-center space-y-8 px-4 pb-20">
                        <Link
                            href={`/${lang}/#about-me`}
                            onClick={(e) => scrollToSection('about-me', e)}
                            className="text-4xl font-extrabold text-black tracking-tight hover:opacity-70 transition-opacity">
                            {dict?.aboutMe || "About Me"}
                        </Link>
                        <Link
                            href={`/${lang}/#skills`}
                            onClick={(e) => scrollToSection('skills', e)}
                            className="text-4xl font-extrabold text-black tracking-tight hover:opacity-70 transition-opacity">
                            {dict?.skills || "Skills"}
                        </Link>
                        <Link
                            href={`/${lang}/#projects`}
                            onClick={(e) => scrollToSection('projects', e)}
                            className="text-4xl font-extrabold text-black tracking-tight hover:opacity-70 transition-opacity">
                            {dict?.projects || "Projects"}
                        </Link>
                        <Link
                            href={`/${lang}/#contact`}
                            onClick={(e) => scrollToSection('contact', e)}
                            className="text-4xl font-extrabold text-black tracking-tight hover:opacity-70 transition-opacity">
                            {dict?.contact || "Contact"}
                        </Link>
                        <Link
                            href={`/${lang}/cv`}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl font-extrabold text-black tracking-tight hover:opacity-70 transition-opacity">
                            {dict?.cv || "View CV"}
                        </Link>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Nav;
