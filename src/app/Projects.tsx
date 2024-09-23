'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
    {
        name: "CocktailFinder",
        description: "Next.js/TypeScript",
        image: "/images/project7.jpg",
        link: "https://cool-cocktail-app.netlify.app/"
    },
    { name: "Deliveroo replica", description: "React/Express", image: "/images/project3.jpg", link: "https://dreplica.netlify.app" },

    { name: "Marvel Comics Database", description: "Frontend React", image: "/images/project2.jpg", link: "https://jenemarrrrvel.netlify.app/" },
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
    return (
        <section className="py-16 text-gray-900 rounded-2xl shadow-xl pb-24">
            <h2 className="text-center text-5xl font-extrabol mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:bg-gray-700 duration-300 cursor-pointer"
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                            width={500}
                            height={300}
                            className="object-fit w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                            {project.link !== "#" ? (
                                <div className="flex items-center justify-center">
                                    <BiLinkExternal className="mr-2" />
                                    <Link href={project.link} target="_blank" className="text-white">
                                        {project.name}
                                    </Link>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    <BiLinkExternal className="mr-2" />
                                    <span className="text-white">{project.name}</span>
                                </div>
                            )}
                            <p className="mt-2 text-gray-300">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
