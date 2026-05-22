import Image from "next/image";
import CrumpledNameTag from "./components/CrumpledNameTag";

const AboutMe = () => {
    return (
        <section className="bg-white px-4 py-8 md:p-12">
            <div className="container mx-auto max-w-7xl">
                <div className="relative flex flex-col md:flex-row justify-center items-center">
                    {/* Photo Column */}
                    <div className="relative z-0 -mb-8 md:mb-0 md:-mr-16">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-xl bg-gray-400/20 transform translate-x-2 translate-y-2 blur-sm"></div>
                            <div className="relative w-[248px] h-[248px] sm:w-[300px] sm:h-[300px] transform group-hover:scale-[1.02] transition-transform duration-300">
                                <div className="absolute inset-0 rounded-xl bg-white shadow-[inset_1px_1px_3px_rgba(0,0,0,0.2)]"></div>
                                <div className="absolute -inset-3 rounded-xl bg-white/90 shadow-lg"></div>
                                <Image
                                    src="/images/notmyface.webp"
                                    alt="Olek K"
                                    fill
                                    className="rounded-xl object-cover"
                                    style={{
                                        boxShadow: `
                                            2px 2px 5px rgba(0,0,0,0.1),
                                            -1px -1px 3px rgba(255,255,255,0.25) inset,
                                            0 0 0 12px white
                                        `
                                    }}
                                    priority
                                    fetchPriority="high"
                                    quality={90}
                                    sizes="(max-width: 768px) 300px, 400px"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name Badge Column */}
                    <div className="relative z-10 transform hover:rotate-2 transition-transform duration-300">
                        <CrumpledNameTag />
                    </div>
                </div>

                <div className="mt-10 md:mt-16 max-w-4xl mx-auto text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700 mb-4">
                        Full-stack web developer
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tight">
                        React products with a strong UX eye.
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                        I build modern web applications with React, Next.js, TypeScript, Node.js, and practical testing.
                        I care about clear user flows, reliable APIs, and interfaces people can understand quickly.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="#projects"
                            className="w-full sm:w-auto inline-flex justify-center rounded-lg bg-gray-950 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-gray-800"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto inline-flex justify-center rounded-lg border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-950 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/cv"
                            className="w-full sm:w-auto inline-flex justify-center rounded-lg border border-gray-200 bg-white px-6 py-3.5 text-base font-semibold text-gray-950 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            View CV
                        </a>
                    </div>
                </div>

                <div className="mt-14 md:mt-20 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto pb-8">
                    <div className="border-t border-gray-100 pt-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">About My Work</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            I develop full-stack web projects from responsive frontend screens to REST APIs and data
                            models. My work spans product sites, learning tools, booking flows, and interactive apps.
                        </p>
                    </div>
                    <div className="border-t border-gray-100 pt-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Approach</h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            UX thinking guides my implementation: I simplify flows, test important behavior with
                            Vitest and Playwright, and troubleshoot details until the experience feels dependable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
