'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';
import Masonry from 'react-masonry-css';

interface Project {
    name: string;
    description: string;
    stack: string;
    image: string;
    link: string;
}

const projects: Project[] = [
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
        image: "/images/perfect-cab.webp",
        link: "https://perfectcab.fr/fr/"
    },
    {
        name: "Paris Design Patrimoine",
        description: "A polished construction-company site shaped around services, trust, and easy client contact.",
        stack: "Next.js · Tailwind CSS",
        image: "/images/parisdesignpatrimoine.webp",
        link: "https://parisdesignpatrimoine.netlify.app/"
    },
    {
        name: "Cocktail Explorer",
        description: "Recipe discovery app for exploring cocktails through a clear search and browsing experience.",
        stack: "Next.js · TypeScript",
        image: "/images/cocktail.webp",
        link: "https://cool-cocktail-app.netlify.app/"
    },
    {
        name: "Guess the Movie",
        description: "Interactive movie quiz that turns TMDB content into a quick visual guessing game.",
        stack: "Next.js · TypeScript",
        image: "/images/project8.jpg",
        link: "https://tmdb-quiz.vercel.app/"
    },
];

const VERTICAL_PROJECTS = new Set(["Cocktail Explorer", "Roadmap Academy"]);

function getAspectClass(project: Project, index: number): string {
    if (VERTICAL_PROJECTS.has(project.name)) return 'aspect-[3/4]';
    if (index === 0) return 'aspect-[16/10]';
    return 'aspect-[4/3]';
}

function ProjectCardContent({ project, index }: { project: Project; index: number }) {
    const hasLink = project.link !== "#";

    return (
        <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 relative">
            <div className="relative w-full overflow-hidden bg-gray-100">
                <div className={`relative bg-[#f8f8f8] ${getAspectClass(project, index)}`}>
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.name}`}
                        fill
                        className="object-contain transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 40vw"
                        priority={index < 2}
                        loading={index < 2 ? undefined : "lazy"}
                        quality={85}
                    />
                </div>
            </div>
            <div className="p-6 md:p-8">
                <h3 className="font-bold text-gray-900 text-xl md:text-2xl lg:text-3xl tracking-tight flex items-center gap-2">
                    <span>{project.name}</span>
                    {hasLink && (
                        <BiLinkExternal className="text-lg md:text-xl lg:text-2xl opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#22c55e]" />
                    )}
                </h3>
                <p className="mt-3 text-gray-600 text-base md:text-lg">
                    {project.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-gray-900">
                    {project.stack}
                </p>
            </div>
        </div>
    );
}

export default function Projects() {
    const breakpointColumns = {
        default: 2,
        1280: 2,
        768: 1
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
                        <div key={project.name} className="mb-8 md:mb-12">
                            <div className="group relative transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-3xl cursor-pointer">
                                {project.link !== "#" ? (
                                    <Link href={project.link} target="_blank" className="block">
                                        <ProjectCardContent project={project} index={index} />
                                    </Link>
                                ) : (
                                    <ProjectCardContent project={project} index={index} />
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
