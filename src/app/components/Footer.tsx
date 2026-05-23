import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-950 border-t border-gray-800 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center">
                        <span className="text-xl font-extrabold text-white tracking-tight">
                            Olek
                        </span>
                        <span className="text-xl font-extrabold text-blue-500 tracking-tight">
                            .dev
                        </span>
                        <span className="ml-4 text-sm text-gray-500">
                            UX/UI Design &amp; React Development
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/olekszij"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/olek-k/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Olek K. — Paris, France
                    </p>
                    <p className="text-sm text-gray-500">
                        Disponible pour des projets freelance
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
