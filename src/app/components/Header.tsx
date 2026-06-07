'use client';

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { PiGlobeLight } from "react-icons/pi";
import Nav from "./Nav";

const Header = ({ lang, dict }: { lang: string, dict: any }) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = (e: React.MouseEvent) => {
        if (pathname === `/${lang}`) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const toggleLanguage = () => {
        const nextLang = lang === "en" ? "fr" : "en";
        // pathname is something like /en/cv or /en
        const newPath = pathname.replace(`/${lang}`, `/${nextLang}`);
        router.push(newPath || `/${nextLang}`);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white py-4 text-black transition-all duration-300 z-[9999]">
            <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-52">
                <div className="flex items-center justify-between">
                    <Link
                        href={`/${lang}`}
                        className="flex items-center space-x-1 md:space-x-2 cursor-pointer"
                        onClick={handleLogoClick}
                    >
                        <div className="flex flex-col items-start justify-center">
                            <span className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
                                {lang === 'en' ? 'Full-stack web developer' : 'Développeur web Full-Stack'}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 font-medium mt-0.5">
                                Code & Design
                            </span>
                        </div>
                    </Link>
                    <div className="flex items-center gap-5 md:gap-8">
                        <div className="order-2 md:order-1 flex items-center h-full">
                            <Nav lang={lang} dict={dict} />
                        </div>
                        <button
                            onClick={toggleLanguage}
                            className="order-1 md:order-2 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
                            title={lang === "en" ? "Passer en Français" : "Switch to English"}
                        >
                            <PiGlobeLight size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
