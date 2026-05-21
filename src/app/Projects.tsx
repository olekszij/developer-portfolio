'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import Masonry from 'react-masonry-css';

const projects = [
    {
        name: "Roadmap Academy",
        description: "Interactive learning roadmaps that turn UX/UI and web-development topics into clear next steps.",
        stack: "Next.js · TypeScript · UX",
        image: "/images/roadmapux.netlify.app__Pixel-7_.webp",
        link: "https://roadmapux.netlify.app/"
    },
    {
        name: "Perfect Cab",
        description: "Customer-facing cab service experience with booking-oriented pages and a real business presence.",
        stack: "React · Node.js",
        image: "/images/perfect-cab.png",
        link: "https://perfectcab.fr/fr/"
    },
    {
        name: "Paris Design Patrimoine",
        description: "A polished construction-company site shaped around services, trust, and easy client contact.",
        stack: "Next.js · Tailwind CSS",
        image: "/images/parisdesignpatrimoine.png",
        link: "https://parisdesignpatrimoine.netlify.app/"
    },
    {
        name: "Cocktail Explorer",
        description: "Recipe discovery app for exploring cocktails through a clear search and browsing experience.",
        stack: "Next.js · TypeScript",
        image: "/images/cocktail.png",
        link: "https://cool-cocktail-app.netlify.app/"
    },
    {
        name: "Guess the Movie",
        description: "Interactive movie quiz that turns TMDB content into a quick visual guessing game.",
        stack: "Next.js · TypeScript",
        image: "/images/project8.jpg",
        link: "https://tmdb-quiz.vercel.app/"
    },
    {
        name: "English Level Test App",
        description: "English-level testing flow designed to keep assessment steps focused and readable.",
        stack: "Next.js · TypeScript",
        image: "/images/project6.jpg",
        link: "https://cefr.netlify.app"
    },
];

export default function Projects() {
    const breakpointColumns = {
        default: 3,
        1920: 3,
        1536: 2,
        1280: 2,
        768: 1
    };

    const handleDoubleClick = (link: string) => {
        if (link !== "#") {
            window.open(link, '_blank');
        }
    };

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Selected Projects</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A few projects that show how I combine product thinking, frontend craft, and full-stack delivery.
                    </p>
                </div>
                <Masonry
                    breakpointCols={breakpointColumns}
                    className="flex -ml-8 md:-ml-12 w-auto"
                    columnClassName="pl-8 md:pl-12 bg-clip-padding"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="mb-8 md:mb-12"
                        >
                            <div
                                className="group relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl cursor-pointer"
                                onDoubleClick={() => handleDoubleClick(project.link)}
                            >
                                {project.link !== "#" ? (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="block"
                                    >
                                        <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 relative">
                                            <div className="relative w-full overflow-hidden bg-gray-100">
                                                <div className={`relative bg-[#f8f8f8] ${
                                                    // Vertical images
                                                    project.name === "Cocktail Explorer" || project.name === "Roadmap Academy" ? 'aspect-[3/4]' :
                                                        // Wide landscape images
                                                        index === 0 ? 'aspect-[16/10]' :
                                                            // Default square-ish ratio
                                                            'aspect-[4/3]'
                                                    }`}>
                                                    <Image
                                                        src={project.image}
                                                        alt={project.name}
                                                        fill
                                                        className="object-contain transition-all duration-500"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                                        priority={index < 4}
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-6 md:p-8">
                                                <h3 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl tracking-tight flex items-center gap-2">
                                                    <span>{project.name}</span>
                                                    <BiLinkExternal className="text-lg md:text-xl lg:text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#22c55e]" />
                                                </h3>
                                                <p className="mt-3 text-gray-600  text-base md:text-lg">
                                                    {project.description}
                                                </p>
                                                <p className="mt-4 text-sm font-semibold text-gray-900">
                                                    {project.stack}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 relative">
                                        <div className="relative w-full overflow-hidden bg-gray-100">
                                            <div className={`relative bg-[#f8f8f8] ${
                                                // Vertical images
                                                project.name === "Cocktail Explorer" ? 'aspect-[3/4]' :
                                                    // Wide landscape images
                                                    index === 0 ? 'aspect-[16/10]' :
                                                        // Default square-ish ratio
                                                        'aspect-[4/3]'
                                                }`}>
                                                <Image
                                                    src={project.image}
                                                    alt={project.name}
                                                    fill
                                                    className="object-contain transition-all duration-500"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 33vw"
                                                    priority={index < 4}
                                                />
                                            </div>
                                        </div>
                                        <div className="p-6 md:p-8">
                                            <h3 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl tracking-tight">
                                                {project.name}
                                            </h3>
                                            <p className="mt-3 text-gray-600 font-light text-base md:text-lg">
                                                {project.description}
                                            </p>
                                            <p className="mt-4 text-sm font-semibold text-gray-900">
                                                {project.stack}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/[0.08] pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </div>
        </section>
    );
}
