'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
    {
        name: "Perfect Cab",
        description: "Customer-facing cab service experience with booking-oriented pages and a real business presence.",
        stack: "React · TypeScript · PostgreSQL · UX/UI · UX Research · SEO",
        image: "/images/perfect-cab.webp",
        link: "https://perfectcab.fr/fr/"
    },
    {
        name: "Roadmap Academy",
        description: "Interactive learning roadmaps that turn UX/UI and web-development topics into clear next steps.",
        stack: "React · TypeScript · PostgreSQL",
        image: "/images/roadmap-academy.webp",
        link: "https://roadmapux.netlify.app/"
    },
    {
        name: "PragmaBAT",
        description: "Renovation-company website presenting services, guarantees, and completed interior projects.",
        stack: "HTML · CSS · JavaScript",
        image: "/images/pragmabat-front.webp",
        link: "https://pragmabat.netlify.app/"
    },
    {
        name: "Cocktail Explorer",
        description: "Recipe discovery app for exploring cocktails through a clear search and browsing experience.",
        stack: "Next.js · TypeScript",
        image: "/images/coctailexplorer.webp",
        link: "https://cool-cocktail-app.netlify.app/"
    },
    {
        name: "Guess the Movie",
        description: "Interactive movie quiz that turns TMDB content into a quick visual guessing game.",
        stack: "Next.js · TypeScript",
        image: "/images/guess.webp",
        link: "https://tmdb-quiz.vercel.app/"
    },
    {
        name: "Level Up!",
        description: "Interactive IT quiz application built as a Progressive Web App.",
        stack: "React · Tailwind CSS",
        image: "/images/levelup.webp",
        link: "https://it-quiz-pwa.netlify.app/"
    },
    {
        name: "Paris Design Patrimoine",
        description: "A polished construction-company site shaped around services, trust, and easy client contact.",
        stack: "HTML · CSS · JavaScript",
        image: "/images/patrimoine.webp",
        link: "https://parisdesignpatrimoine.netlify.app/"
    },
    {
        name: "Challenge Board",
        description: "Productivity suite application to manage challenges, tasks, and track personal progress.",
        stack: "React · TypeScript",
        image: "/images/challengeBoard.webp",
        link: "https://challengebo.netlify.app/"
    }
];

const categories = ["All", "React", "Next.js", "Vanilla JS"];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");

    const handleDoubleClick = (link: string) => {
        if (link !== "#") {
            window.open(link, '_blank');
        }
    };

    const filteredProjects = projects.filter(project => {
        if (activeCategory === "All") return true;
        if (activeCategory === "React") return project.stack.includes("React");
        if (activeCategory === "Next.js") return project.stack.includes("Next.js");
        if (activeCategory === "Vanilla JS") return project.stack.includes("HTML");
        return true;
    });

    return (
        <section className="py-16 md:py-24 bg-slate-200">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Selected Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A few projects that show how I combine product thinking, frontend craft, and full-stack delivery.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 md:px-6 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gray-900 text-white shadow-md'
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 shadow-sm'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer rounded-b-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full flex flex-col"
                            onDoubleClick={() => handleDoubleClick(project.link)}
                        >
                            {project.link !== "#" ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="block h-full"
                                >
                                    <div className="relative overflow-hidden rounded-b-3xl bg-white shadow-sm transition-all duration-500 h-full flex flex-col">
                                        <div className="relative w-full overflow-hidden bg-gray-100 shrink-0">
                                            <div className="relative aspect-[16/10] bg-slate-200">
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover object-top transition-all duration-500"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    priority={index < 2}
                                                    loading={index < 2 ? undefined : "lazy"}
                                                    quality={85}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-8 flex flex-col flex-1">
                                            <h3 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl tracking-tight flex items-center gap-2">
                                                <span>{project.name}</span>
                                                <BiLinkExternal className="text-lg md:text-xl lg:text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#22c55e]" />
                                            </h3>
                                            <p className="mt-3 text-gray-600  text-base md:text-lg flex-1">
                                                {project.description}
                                            </p>
                                            <p className="mt-4 text-sm font-semibold text-gray-900">
                                                {project.stack}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="relative overflow-hidden rounded-b-3xl bg-white shadow-sm transition-all duration-500 h-full flex flex-col">
                                    <div className="relative w-full overflow-hidden bg-gray-100 shrink-0">
                                        <div className="relative aspect-[16/10] bg-[#f8f8f8]">
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover object-top transition-all duration-500"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority={index < 2}
                                                loading={index < 2 ? undefined : "lazy"}
                                                quality={85}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-1">
                                        <h3 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl tracking-tight">
                                            {project.name}
                                        </h3>
                                        <p className="mt-3 text-gray-600 font-light text-base md:text-lg flex-1">
                                            {project.description}
                                        </p>
                                        <p className="mt-4 text-sm font-semibold text-gray-900">
                                            {project.stack}
                                        </p>
                                    </div>
                                </div>
                            )}
                            <div className="pointer-events-none absolute inset-0 rounded-b-3xl ring-1 ring-inset ring-black/[0.08]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
