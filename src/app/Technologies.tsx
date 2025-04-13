'use client';

import { FaNodeJs, FaReact, FaGitAlt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVercel, SiExpress, SiTypescript, SiNetlify, SiNextdotjs, SiVite } from 'react-icons/si';

const TechnologiesList = () => {
    const technologies = [
        // Core Languages
        {
            icon: FaJs,
            name: "JavaScript",
            color: '#F7DF1E',
            description: "Core language for web development, used in all my projects"
        },
        {
            icon: SiTypescript,
            name: "TypeScript",
            color: '#3178C6',
            description: "Type-safe JavaScript, used in most modern projects"
        },

        // Frontend Frameworks
        {
            icon: FaReact,
            name: "React",
            color: '#61DBFB',
            description: "Building interactive UIs, state management, hooks"
        },
        {
            icon: SiNextdotjs,
            name: "Next.js",
            color: '#000000',
            description: "Full-stack React framework, SSR, API routes"
        },
        {
            icon: SiVite,
            name: "Vite",
            color: '#646CFF',
            description: "Fast build tool for modern web projects"
        },

        // Styling
        {
            icon: SiTailwindcss,
            name: "Tailwind CSS",
            color: '#38B2AC',
            description: "Utility-first CSS framework, responsive design"
        },

        // Backend
        {
            icon: FaNodeJs,
            name: "Node.js",
            color: '#68A063',
            description: "Server-side JavaScript, building APIs"
        },
        {
            icon: SiExpress,
            name: "Express.js",
            color: '#000000',
            description: "Web framework for Node.js, REST APIs"
        },

        // Databases
        {
            icon: SiMongodb,
            name: "MongoDB",
            color: '#47A248',
            description: "NoSQL database, document-based storage"
        },

        // Version Control
        {
            icon: FaGitAlt,
            name: "Git",
            color: '#F05032',
            description: "Version control, collaboration, CI/CD"
        },

        // Deployment
        {
            icon: SiVercel,
            name: "Vercel",
            color: '#000000',
            description: "Deployment platform, serverless functions"
        },
        {
            icon: SiNetlify,
            name: "Netlify",
            color: '#38A169',
            description: "Static site hosting, form handling"
        },
    ];

    return (
        <section className="py-16 flex-col items-center justify-center rounded-2xl pb-0">
            <h2 className="text-5xl font-bold mb-12 text-center">Technologies & Tools</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {technologies.map(({ icon: Icon, name, color, description }, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-center group"
                    >
                        <Icon
                            size={96}
                            style={{ color }}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-[-10px] opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-lg p-3 transition-opacity duration-300 transform translate-y-5 group-hover:translate-y-0 max-w-[200px] text-center">
                            <div className="font-bold mb-1">{name}</div>
                            <div className="text-gray-300 text-xs">{description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologiesList;


