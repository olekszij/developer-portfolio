'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const getProjects = (dict: any) => {
    const items = dict?.items || [
        {
            name: "Perfect Cab",
            description: "Customer-facing cab service experience with booking-oriented pages and a real business presence.",
            stack: "React · TypeScript · PostgreSQL · UX/UI · UX Research · SEO"
        },
        {
            name: "Roadmap Academy",
            description: "Interactive learning roadmaps that turn UX/UI and web-development topics into clear next steps.",
            stack: "React · TypeScript · PostgreSQL"
        },
        {
            name: "PragmaBAT",
            description: "Renovation-company website presenting services, guarantees, and completed interior projects.",
            stack: "HTML · CSS · JavaScript"
        },
        {
            name: "Cocktail Explorer",
            description: "Recipe discovery app for exploring cocktails through a clear search and browsing experience.",
            stack: "Next.js · TypeScript"
        },
        {
            name: "Guess the Movie",
            description: "Interactive movie quiz that turns TMDB content into a quick visual guessing game.",
            stack: "Next.js · TypeScript"
        },
        {
            name: "Level Up!",
            description: "Interactive IT quiz application built as a Progressive Web App.",
            stack: "React · Tailwind CSS"
        },
        {
            name: "Paris Design Patrimoine",
            description: "A polished construction-company site shaped around services, trust, and easy client contact.",
            stack: "HTML · CSS · JavaScript"
        },
        {
            name: "Challenge Board",
            description: "Productivity suite application to manage challenges, tasks, and track personal progress.",
            stack: "React · TypeScript"
        }
    ];

    return items.map((item: any, i: number) => ({
        ...item,
        image: [
            "/images/perfect-cab.webp",
            "/images/roadmap-academy.webp",
            "/images/pragmabat-front.webp",
            "/images/coctailexplorer.webp",
            "/images/guess.webp",
            "/images/levelup.webp",
            "/images/patrimoine.webp",
            "/images/challengeBoard.webp"
        ][i],
        link: [
            "https://perfectcab.fr/fr/",
            "https://roadmapux.netlify.app/",
            "https://pragmabat.netlify.app/",
            "https://cool-cocktail-app.netlify.app/",
            "https://tmdb-quiz.vercel.app/",
            "https://it-quiz-pwa.netlify.app/",
            "https://parisdesignpatrimoine.netlify.app/",
            "https://challengebo.netlify.app/"
        ][i]
    }));
};

export default function Projects({ dict, lang }: { dict?: any, lang?: string }) {
    const projects = getProjects(dict);
    const categories = dict?.categories || ["All", "React", "Next.js", "Vanilla JS"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleDoubleClick = (link: string) => {
        if (link !== "#") {
            window.open(link, '_blank');
        }
    };

    const filteredProjects = projects.filter((project: any) => {
        if (activeCategory === categories[0]) return true;
        if (activeCategory === categories[1]) return project.stack.includes("React");
        if (activeCategory === categories[2]) return project.stack.includes("Next.js");
        if (activeCategory === categories[3]) return project.stack.includes("HTML");
        return true;
    });

    return (
        <section className="relative overflow-hidden w-full bg-sky-50 py-16 md:py-24">
            {/* Ambient Background Blobs */}
            <div className="pointer-events-none absolute left-10 top-0 h-[600px] w-[600px] rounded-full bg-cyan-200/40 blur-[100px]"></div>
            <div className="pointer-events-none absolute -right-10 bottom-20 h-[700px] w-[700px] rounded-full bg-blue-200/40 blur-[120px]"></div>
            
            <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-32">
                <div className="text-center mb-16">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl lg:text-6xl drop-shadow-sm">{dict?.title || "Selected Projects"}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        {dict?.subtitle || "A few projects that show how I combine product thinking, frontend craft, and full-stack delivery."}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-10">
                        {categories.map((category: string) => (
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
                    {filteredProjects.map((project: any, index: number) => (
                        <div
                            key={index}
                            className="group relative cursor-pointer rounded-[2rem] transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                            onDoubleClick={() => handleDoubleClick(project.link)}
                        >
                            {project.link !== "#" ? (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="block h-full"
                                >
                                    <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 h-full flex flex-col hover:bg-white/50 hover:border-white/80">
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
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 h-full flex flex-col hover:bg-white/50 hover:border-white/80">
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

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
