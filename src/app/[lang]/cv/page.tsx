import React from "react";
import Link from 'next/link';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import { getDictionary } from "@/dictionaries";

export default async function CvPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);
    return (
        <div className="relative overflow-hidden min-h-screen bg-slate-50 px-4 pb-16 pt-28 md:pt-36 w-full">
            {/* Ambient Background Blobs */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-200/40 blur-[100px]"></div>
            <div className="pointer-events-none absolute -right-20 bottom-0 h-[700px] w-[700px] rounded-full bg-slate-200/50 blur-[120px]"></div>

            <div className="relative z-10 mx-auto max-w-5xl">
                {/* Top Action Bar */}
                <div className="mb-8 flex items-center justify-between">
                    <Link
                        href={`/${lang}`}
                        title={dict.cv.back}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/60 text-gray-900 backdrop-blur-md transition-all hover:scale-110 hover:border-white/80 hover:bg-white/80 shadow-sm"
                    >
                        <FaArrowLeft size={18} />
                    </Link>
                    <a
                        href="/pdf/KOLOSZOV%20Olekszij%20CV.pdf"
                        download
                        title={dict.cv.download}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/60 text-gray-900 backdrop-blur-md transition-all hover:scale-110 hover:border-white/80 hover:bg-white/80 shadow-sm"
                    >
                        <FaDownload size={18} />
                    </a>
                </div>

                {/* Main CV Container */}
                <article className="rounded-[2rem] border border-white/60 bg-white/40 p-6 md:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl">
                    
                    {/* Header */}
                    <header className="mb-12 border-b border-gray-200/50 pb-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-gray-500">
                            Curriculum Vitae
                        </p>
                        <h1 className="mb-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-950 tracking-tight">
                            Olekszij <br className="hidden md:block"/> Koloszov
                        </h1>
                        <p className="mb-6 text-xl md:text-2xl font-medium text-gray-700">
                            {dict.cv.role}
                        </p>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm md:text-base font-medium text-gray-600">
                            <a href="mailto:olekszijk@gmail.com" className="font-semibold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 transition-all hover:decoration-gray-900">olekszijk@gmail.com</a>
                            <a href="tel:+33651393356" className="font-semibold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 transition-all hover:decoration-gray-900">+33 6 51 39 33 56</a>
                            <span>{dict.cv.location}</span>
                            <a href="https://github.com/olekszij" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 transition-all hover:decoration-gray-900">GitHub</a>
                            <a href="https://www.linkedin.com/in/olek-k/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 underline decoration-gray-300 decoration-2 underline-offset-4 transition-all hover:decoration-gray-900">LinkedIn</a>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column: Sidebar info */}
                        <aside className="lg:col-span-1 space-y-10">
                            
                            {/* Skills Section */}
                            <section>
                                <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900">{dict.cv.skills.title}</h2>
                                
                                <div className="mb-6">
                                    <h3 className="mb-3 text-sm font-semibold text-gray-800">{dict.cv.skills.frontend}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">React</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Next.js</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">TypeScript</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">JavaScript ES6+</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">HTML5</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">CSS3</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Tailwind CSS</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">UX Design</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="mb-3 text-sm font-semibold text-gray-800">{dict.cv.skills.backend}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Node.js</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Express</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">REST API</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">PostgreSQL</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">SQL</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Neon.tech</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">MongoDB</span>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-3 text-sm font-semibold text-gray-800">{dict.cv.skills.tooling}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Vitest</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Playwright</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Git / GitHub</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Debugging</span>
                                        <span className="inline-flex rounded-full border border-white/50 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur-md">Project Coordination</span>
                                    </div>
                                </div>
                            </section>

                            {/* Languages */}
                            <section>
                                <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900">{dict.cv.languages.title}</h2>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-semibold text-gray-800">{dict.cv.languages.french}</span>
                                            <span className="text-gray-500">{dict.cv.languages.frenchLevel}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden shadow-inner">
                                            <div className="h-full bg-gray-800 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-semibold text-gray-800">{dict.cv.languages.english}</span>
                                            <span className="text-gray-500">{dict.cv.languages.englishLevel}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden shadow-inner">
                                            <div className="h-full bg-gray-800 rounded-full" style={{ width: '60%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-1">
                                            <span className="font-semibold text-gray-800">{dict.cv.languages.belarusian}</span>
                                            <span className="text-gray-500">{dict.cv.languages.belarusianLevel}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-200/50 rounded-full overflow-hidden shadow-inner">
                                            <div className="h-full bg-gray-800 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h2 className="mb-5 text-xl font-bold tracking-tight text-gray-900">{dict.cv.education.title}</h2>
                                <div className="space-y-5">
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">UX Design</h3>
                                        <p className="text-sm text-gray-600 mt-1">{dict.cv.education.ux} · {dict.cv.education.expected} 2026</p>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">Full-Stack React / Node.js</h3>
                                        <p className="text-sm text-gray-600 mt-1">{dict.cv.education.fullstack}, BAC +2 · 2024</p>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-gray-800">Developer & Integrator</h3>
                                        <p className="text-sm text-gray-600 mt-1">{dict.cv.education.integrator}, BAC +2 · 2015-2016</p>
                                    </div>
                                </div>
                            </section>
                        </aside>

                        {/* Right Column: Experience and summary */}
                        <div className="lg:col-span-2 space-y-10">
                            
                            {/* Profile Summary */}
                            <section>
                                <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">{dict.cv.profile.title}</h2>
                                <p className="text-base leading-relaxed text-gray-700">
                                    {dict.cv.profile.description}
                                </p>
                            </section>

                            {/* Developer Experience */}
                            <section>
                                <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">{dict.cv.devExp.title}</h2>
                                <div className="space-y-8">
                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-[3px] border-gray-800 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">Perfect Cab</h3>
                                            <span className="text-sm font-medium text-gray-800 bg-gray-200/80 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start sm:self-auto">2 {dict.cv.devExp.months}</span>
                                        </div>
                                        <p className="text-base font-medium text-gray-700">{dict.cv.devExp.intern}</p>
                                    </div>

                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-[3px] border-gray-400 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">Freelance</h3>
                                            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full mt-2 sm:mt-0 self-start sm:self-auto">7 {dict.cv.devExp.years}</span>
                                        </div>
                                        <p className="text-base font-medium text-gray-700">{dict.cv.devExp.freelance}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Previous Experience */}
                            <section>
                                <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">{dict.cv.prevExp.title}</h2>
                                <div className="space-y-8">
                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-[3px] border-gray-300 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-800">Sens Unique Paris</h3>
                                            <span className="text-sm text-gray-500 mt-1 sm:mt-0">3 {dict.cv.devExp.years.split(' ')[0]}</span>
                                        </div>
                                        <p className="text-base text-gray-600">{dict.cv.prevExp.pm}</p>
                                    </div>

                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-[3px] border-gray-300 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-800">Entrepreneur</h3>
                                            <span className="text-sm text-gray-500 mt-1 sm:mt-0">9 {dict.cv.devExp.years.split(' ')[0]}</span>
                                        </div>
                                        <p className="text-base text-gray-600">{dict.cv.prevExp.tech}</p>
                                    </div>

                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-[3px] border-gray-300 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-800">Adliga Advertising Agency</h3>
                                            <span className="text-sm text-gray-500 mt-1 sm:mt-0">2 {dict.cv.devExp.years.split(' ')[0]}</span>
                                        </div>
                                        <p className="text-base text-gray-600">{dict.cv.prevExp.pm2}</p>
                                    </div>

                                    <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-200/60">
                                        <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-white border-[3px] border-gray-300 shadow-sm"></div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-gray-800">Sens Unique Paris</h3>
                                            <span className="text-sm text-gray-500 mt-1 sm:mt-0">3 {dict.cv.devExp.months}</span>
                                        </div>
                                        <p className="text-base text-gray-600">{dict.cv.prevExp.intern}</p>
                                    </div>
                                </div>
                            </section>
                            
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
