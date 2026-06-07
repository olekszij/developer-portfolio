'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { FaNodeJs, FaReact, FaGitAlt, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiVercel, SiExpress, SiTypescript, SiNetlify, SiNextdotjs, SiVite } from 'react-icons/si';
import { IconType } from 'react-icons';

const TechCard = ({ icon: Icon, name, color, description }: { icon: IconType, name: string, color: string, description: string }) => {
    return (
        <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            className="flex-shrink-0 w-72 h-[500px] mx-4 p-8 rounded-3xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col items-center justify-start text-center relative overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
        >
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
                style={{ backgroundColor: color }}
            />
            <div className="h-32 flex items-center justify-center mb-6">
                <Icon
                    size={80}
                    style={{ color }}
                    className="transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{name}</h3>
            <p className="text-gray-800 leading-relaxed text-base">
                {description}
            </p>
        </motion.div>
    );
};

const getTechnologies = (dict: any) => [
        { icon: FaJs, name: "JavaScript", color: '#F7DF1E', description: dict?.items?.js || "Core language for web development, used in all my projects. Experienced in ES6+, asynchronous programming, and DOM manipulation." },
        { icon: SiTypescript, name: "TypeScript", color: '#3178C6', description: dict?.items?.ts || "Type-safe JavaScript, ensuring code quality and scalability in complex applications. Proficient in interfaces, types, and generics." },
        { icon: FaReact, name: "React", color: '#61DBFB', description: dict?.items?.react || "Building interactive UIs with a component-based architecture. Expert in hooks, context API, and performance optimization." },
        { icon: SiNextdotjs, name: "Next.js", color: '#000000', description: dict?.items?.next || "Full-stack React framework optimized for performance and SEO. Experienced in SSR, ISR, and file-based routing." },
        { icon: SiVite, name: "Vite", color: '#646CFF', description: dict?.items?.vite || "Ultrafast build tool for modern web projects. Leverages native ES modules for lightning-fast HMR and development." },
        { icon: SiTailwindcss, name: "Tailwind CSS", color: '#38B2AC', description: dict?.items?.tailwind || "Utility-first CSS framework for rapid UI development. Skilled in responsive design and creating custom design systems." },
        { icon: FaNodeJs, name: "Node.js", color: '#68A063', description: dict?.items?.node || "Server-side JavaScript environment. Building scalable network applications and RESTful backend architectures." },
        { icon: SiExpress, name: "Express.js", color: '#000000', description: dict?.items?.express || "Fast, unopinionated, minimalist web framework for Node.js. Used for building robust APIs and server-side logic." },
        { icon: SiMongodb, name: "MongoDB", color: '#47A248', description: dict?.items?.mongo || "NoSQL document database. Proficient in schema design, aggregation pipelines, and data modeling for flexibility." },
        { icon: FaGitAlt, name: "Git", color: '#F05032', description: dict?.items?.git || "Distributed version control system. Expert in branching strategies, merge conflict resolution, and collaborative workflows." },
        { icon: SiVercel, name: "Vercel", color: '#000000', description: dict?.items?.vercel || "Deployment and collaboration platform for frontend developers. Optimized for Next.js with instant deployments and scaling." },
        { icon: SiNetlify, name: "Netlify", color: '#38A169', description: dict?.items?.netlify || "All-in-one platform for automating modern web projects. Experienced in CI/CD, form handling, and serverless functions." },
    ];

const TechnologiesList = ({ dict }: { dict?: any }) => {
    const technologies = getTechnologies(dict);

    const containerRef = useRef<HTMLDivElement>(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0 });
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.scrollWidth;
                const viewWidth = containerRef.current.offsetWidth;
                setConstraints({ left: -(containerWidth - viewWidth), right: 0 });
            }
        };

        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (!isHovered && constraints.left < 0) {
            interval = setInterval(() => {
                const currentX = x.get();
                const cardWidth = 288 + 32; // w-72 (288px) + gap (mx-4 = 32px)

                let nextX = currentX - cardWidth;
                if (nextX <= constraints.left - 10) { // Add a small buffer
                    nextX = 0;
                }

                animate(x, nextX, {
                    type: "spring",
                    stiffness: 40, // Slower, smoother spring
                    damping: 15
                });
            }, 4000); // Slightly longer pause
        }

        return () => clearInterval(interval);
    }, [isHovered, constraints.left, x]);

    return (
        <section
            className="py-24 bg-white overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="max-w-[1920px] mx-auto">
                <div className="px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 italic tracking-tight">{dict?.title || "Technologies & Tools"}</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
                        {dict?.subtitle || "A curated selection of the tools and frameworks I use to bring ideas to life."}
                    </p>
                </div>

                <div className="cursor-grab active:cursor-grabbing">
                    <motion.div
                        ref={containerRef}
                        drag="x"
                        dragConstraints={constraints}
                        style={{ x }}
                        className="flex px-[5vw] py-10"
                        whileTap={{ cursor: "grabbing" }}
                    >
                        {technologies.map((tech, index) => (
                            <TechCard key={index} {...tech} />
                        ))}
                    </motion.div>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gray-300"
                            animate={{
                                x: ["-100%", "100%"]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologiesList;


