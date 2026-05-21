'use client';

import React from "react";
import Nav from "./Nav";
import { FaReact } from "react-icons/fa";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white text-black py-6 z-[9999] border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-20 lg:px-40 xl:px-52">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 md:space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="flex items-center">
                            <FaReact className="text-xl md:text-2xl animate-spin-slow mr-2" style={{ fill: 'black' }} />
                            <span className="text-xl md:text-2xl font-bold text-black tracking-tight">
                                Full-Stack Dev
                            </span>
                        </div>
                    </div>
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;