'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import Masonry from 'react-masonry-css';

const projects = [
    {
        name: "Perfect App",
        description: "React and Node.js",
        image: "/images/perfect-cab.png",
        link: "https://perfect-app.netlify.app/"
    },
    {
        name: "FileToFlash",
        description: "Next.js/TypeScript - OCR Flashcard App",
        image: "/images/flash.png",
        link: "https://filetoflash.netlify.app/"
    },

    {
        name: "CocktailFinder",
        description: "Next.js/TypeScript",
        image: "/images/cocktail.png",
        link: "https://cool-cocktail-app.netlify.app/"
    },
    { name: "Deliveroo replica", description: "React/Express", image: "/images/project3.jpg", link: "https://dreplica.netlify.app" },
    { name: "Marvel Comics Database", description: "Frontend React", image: "/images/project2.jpg", link: "https://jenemarrrrvel.netlify.app/" },
    {
        name: "Paris Design Patrimoine",
        description: "Next.js/Tailwind - Construction Company",
        image: "/images/parisdesignpatrimoine.png",
        link: "https://parisdesignpatrimoine.netlify.app/"
    },
    { name: "Car Rental Reservation Application", description: "React/Express", image: "/images/project4.jpg", link: "https://rentauto.netlify.app" },
    { name: "Burger King replica", description: "Ask me for details", image: "/images/project5.jpg", link: "#" },
    {
        name: "Guess the Movie",
        description: "Next.js/TypeScript",
        image: "/images/project8.jpg",
        link: "https://tmdb-quiz.vercel.app/"
    },
    {
        name: "English Level Test App",
        description: "Next.js/TypeScript",
        image: "/images/project6.jpg",
        link: "https://cefr.netlify.app"
    },
    { name: "Vinted replica", description: "frontend/backend", image: "/images/project1.jpg", link: "https://vintversion.netlify.app/" },
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
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16 text-gray-900">Featured Projects</h2>
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
                                                    project.name === "CocktailFinder" || project.name === "FileToFlash" ? 'aspect-[3/4]' :
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
                                                <p className="mt-2 text-gray-600 font-light text-base md:text-lg">
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 relative">
                                        <div className="relative w-full overflow-hidden bg-gray-100">
                                            <div className={`relative bg-[#f8f8f8] ${
                                                // Vertical images
                                                project.name === "CocktailFinder" || project.name === "FileToFlash" ? 'aspect-[3/4]' :
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
                                            <p className="mt-2 text-gray-600 font-light text-base md:text-lg">
                                                {project.description}
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
