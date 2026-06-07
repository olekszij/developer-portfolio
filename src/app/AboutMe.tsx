import CrumpledNameTag from "./components/CrumpledNameTag";
import { FiFolder, FiMail, FiFileText } from "react-icons/fi";

const AboutMe = ({ dict, lang }: { dict?: any, lang?: string }) => {
    return (
        <section className="relative overflow-hidden w-full bg-slate-50 px-4 pt-28 pb-16 md:pt-36 md:pb-24">
            {/* Ambient Background Blobs */}
            <div className="pointer-events-none absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-[120px]"></div>
            <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-slate-200/50 blur-[120px]"></div>
            
            <div className="relative z-10 container mx-auto max-w-7xl">
                <div className="relative flex justify-center items-center">
                    <div className="relative z-10 transform hover:rotate-2 transition-transform duration-300">
                        <CrumpledNameTag />
                    </div>
                </div>

                <div className="mt-10 md:mt-16 max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gray-500 mb-4">
                        {dict?.title || "Full-stack web developer"}
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tight">
                        {dict?.heading || "React products with a strong UX eye."}
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                        {dict?.description || "I build modern web applications with React, Next.js, TypeScript, Node.js, and practical testing. I care about clear user flows, reliable APIs, and interfaces people can understand quickly."}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <a
                            href={`/${lang || 'en'}/#projects`}
                            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-5 py-2.5 text-sm font-semibold text-gray-950 backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/80"
                        >
                            <FiFolder size={18} />
                            <span>{dict?.projects || "Projects"}</span>
                        </a>
                        <a
                            href={`/${lang || 'en'}/#contact`}
                            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-5 py-2.5 text-sm font-semibold text-gray-950 backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/80"
                        >
                            <FiMail size={18} />
                            <span>{dict?.contact || "Contact"}</span>
                        </a>
                        <a
                            href={`/${lang || 'en'}/cv`}
                            className="flex items-center gap-2 rounded-full border border-white/60 bg-white/60 px-5 py-2.5 text-sm font-semibold text-gray-950 backdrop-blur-md shadow-sm transition-all hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/80"
                        >
                            <FiFileText size={18} />
                            <span>{dict?.resume || "Resume"}</span>
                        </a>
                    </div>
                </div>

                <div className="mx-auto mt-14 grid max-w-5xl gap-4 pb-8 md:mt-20 md:grid-cols-5">
                    <div className="group relative flex flex-col rounded-[2rem] border border-white/60 bg-white/40 p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:border-white/80 md:col-span-3 md:p-8">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                            {dict?.scope || "Scope"}
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                            {dict?.aboutWork || "About My Work"}
                        </h2>
                        <p className="text-base leading-7 text-gray-700 md:text-lg">
                            {dict?.aboutWorkDesc || "I develop full-stack web projects from responsive frontend screens to REST APIs and data models. My work spans product sites, learning tools, booking flows, and interactive apps."}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {(dict?.scopeTags || ['Responsive UI', 'REST APIs', 'Data models']).map((item: string) => (
                                <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur-md transition-colors hover:bg-white/80 hover:border-white/100 shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-[2rem] border border-white/60 bg-white/40 p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:border-white/80 md:col-span-2 md:p-8">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                            {dict?.process || "Process"}
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                            {dict?.myApproach || "My Approach"}
                        </h2>
                        <p className="text-base leading-7 text-gray-700 md:text-lg">
                            {dict?.approachDesc || "UX thinking guides my implementation: I simplify flows, test important behavior with Vitest and Playwright, and troubleshoot details until the experience feels dependable."}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {(dict?.processTags || ['Clear user flows', 'Practical tests', 'Reliable details']).map((item: string) => (
                                <div key={item} className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur-md transition-colors hover:bg-white/80 hover:border-white/100 shadow-sm">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
