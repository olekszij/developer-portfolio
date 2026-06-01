import CrumpledNameTag from "./components/CrumpledNameTag";

const AboutMe = () => {
    return (
        <section className="rounded bg-slate-200 px-4 py-8 md:p-12">
            <div className="container mx-auto max-w-7xl">
                <div className="relative flex justify-center items-center">
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

                <div className="mx-auto mt-14 grid max-w-5xl gap-4 pb-8 md:mt-20 md:grid-cols-5">
                    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm md:col-span-3 md:p-8">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                            Scope
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                            About My Work
                        </h2>
                        <p className="text-base leading-7 text-gray-700 md:text-lg">
                            I develop full-stack web projects from responsive frontend screens to REST APIs and data
                            models. My work spans product sites, learning tools, booking flows, and interactive apps.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {['Responsive UI', 'REST APIs', 'Data models'].map((item) => (
                                <div key={item} className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-800">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-blue-100 bg-[#eaf6ff] p-6 shadow-sm md:col-span-2 md:p-8">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                            Process
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-950 md:text-3xl">
                            My Approach
                        </h2>
                        <p className="text-base leading-7 text-gray-700 md:text-lg">
                            UX thinking guides my implementation: I simplify flows, test important behavior with
                            Vitest and Playwright, and troubleshoot details until the experience feels dependable.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {['Clear user flows', 'Practical tests', 'Reliable details'].map((item) => (
                                <div key={item} className="rounded-lg bg-white/80 px-3 py-1.5 text-xs font-semibold text-gray-800">
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
