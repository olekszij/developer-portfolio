'use client';

import React from "react";
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm text-black py-5 z-[9999] border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="flex items-center justify-between">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="text-xl md:text-2xl font-extrabold text-gray-950 tracking-tight">
                            Olek
                        </span>
                        <span className="text-xl md:text-2xl font-extrabold text-blue-600 tracking-tight">
                            .dev
                        </span>
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
