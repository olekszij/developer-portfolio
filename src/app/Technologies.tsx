'use client';

import { FaNodeJs, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVercel, SiExpress, SiVisualstudiocode, SiTypescript, SiNetlify } from 'react-icons/si';
import { useState } from 'react';

const TechnologiesList = () => {
    const technologies = [
        { icon: FaNodeJs, name: "Node.js", color: '#68A063' }, // Node.js
        { icon: SiExpress, name: "Express.js", color: '#000000' }, // Express.js
        { icon: FaReact, name: "React", color: '#61DBFB' }, // React
        { icon: SiTypescript, name: "TypeScript", color: '#3178C6' }, // TypeScript
        { icon: SiTailwindcss, name: "Tailwind CSS", color: '#38B2AC' }, // Tailwind CSS
        { icon: SiMongodb, name: "MongoDB", color: '#47A248' }, // MongoDB
        { icon: FaGitAlt, name: "Git", color: '#F05032' }, // Git
        { icon: SiVercel, name: "Vercel", color: '#000000' }, // Vercel
        { icon: SiNetlify, name: "Netlify", color: '#38A169' }, // Netlify
    ];

    return (
        <section className="py-16 flex-col items-center justify-center rounded-2xl shadow-xl pb-24">
            <h2 className="text-5xl font-bold mb-12 text-center">Technologies & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {technologies.map(({ icon: Icon, name, color }, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-center group"
                    >
                        {/* Иконка с hover-эффектом */}
                        <Icon
                            size={96}
                            style={{ color }}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Описание технологии, появляется при наведении */}
                        <div className="absolute top-[-10px] opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg p-2 transition-opacity duration-300 transform translate-y-5 group-hover:translate-y-0">
                            {name}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesList;


