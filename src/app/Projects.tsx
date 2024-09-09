'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
    { name: "Vinted replica", description: "frontend/backend", image: "/images/project1.jpg", link: "https://vintversion.netlify.app/offers/66cf3934b4d2bb07a6978b2f" },
    { name: "Project 2", description: "Description of project 2", image: "/images/project2.jpg", link: "https://github.com/olegkondratenko/nextjs-portfolio" },
    { name: "Project 3", description: "Description of project 3", image: "/images/project3.jpg", link: "https://github.com/olegkondratenko/nextjs-portfolio" },
    { name: "Project 4", description: "Description of project 4", image: "/images/project4.jpg", link: "https://github.com/olegkondratenko/nextjs-portfolio" },
    { name: "Project 5", description: "Description of project 5", image: "/images/project5.jpg", link: "https://github.com/olegkondratenko/nextjs-portfolio" },
    { name: "Project 6", description: "Description of project 6", image: "/images/project6.jpg", link: "https://github.com/olegkondratenko/nextjs-portfolio" },
];

export default function Projects() {
    return (
        <section className="py-16 text-gray-900 rounded-2xl shadow-xl pb-24">
            <h2 className="text-center text-5xl font-extrabol  mb-12">Projects</h2>
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
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                            <div className="flex items-center justify-center">
                                <BiLinkExternal className="mr-2" />
                                <Link href={project.link} target="_blank" className="text-white">
                                    {project.name}
                                </Link>
                            </div>
                            <p className="mt-2 text-gray-300">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
