'use client';

import React from "react";
import Nav from "./Nav";
import { FaReact } from "react-icons/fa";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-10">
            <style jsx global>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .react-icon {
                    animation: spin-slow 20s linear infinite;
                    filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
                }
            `}</style>
            <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-52">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 md:space-x-2">
                        <div className="relative" style={{ transform: 'scale(0.55)' }}>
                            <FaReact className="text-6xl md:text-8xl react-icon" style={{ fill: 'url(#blue-purple-gradient)' }} />
                            <svg width="0" height="0">
                                <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop stopColor="#3B82F6" offset="0%" />
                                    <stop stopColor="#9333EA" offset="100%" />
                                </linearGradient>
                            </svg>
                        </div>
                        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                            Full-Stack Dev
                        </span>
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;