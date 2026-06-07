'use client';

import { IconType } from 'react-icons';
import { FiCheckCircle, FiCode, FiDatabase, FiTerminal, FiTool } from 'react-icons/fi';
import { SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVitest } from 'react-icons/si';

const getSkillGroups = (dict: any) => [
    {
        title: dict?.frontend || 'Frontend',
        description: dict?.frontendDesc || 'Building responsive, accessible interfaces with a strong eye for UX.',
        icon: FiCode,
        accent: '#1d6fb8',
        skills: [
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'JavaScript ES6+', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'HTML5 / CSS3' },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
        ],
    },
    {
        title: dict?.backend || 'Backend & Data',
        description: dict?.backendDesc || 'Designing APIs and working with both SQL and NoSQL data models.',
        icon: FiDatabase,
        accent: '#1d6fb8',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Express', icon: SiExpress },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MongoDB', icon: SiMongodb },
        ],
    },
    {
        title: dict?.testing || 'Testing',
        description: dict?.testingDesc || 'Checking real user flows and keeping projects reliable.',
        icon: FiCheckCircle,
        accent: '#1d6fb8',
        skills: [
            { name: 'Vitest', icon: SiVitest },
            { name: 'Playwright', icon: FiCheckCircle },
        ],
    },
    {
        title: dict?.tools || 'Tools',
        description: dict?.toolsDesc || 'Working cleanly with code, planning, and debugging.',
        icon: FiTool,
        accent: '#1d6fb8',
        skills: [
            { name: 'Git', icon: SiGit },
            { name: 'GitHub', icon: SiGithub },
            { name: 'Command Line', icon: FiTerminal },
        ],
    },
];

export default function CoreSkills({ dict }: { dict?: any }) {
    const skillGroups = getSkillGroups(dict);
    return (
        <section className="relative overflow-hidden w-full bg-slate-50 py-16 md:py-24">
            {/* Ambient Background Blobs for light Glassmorphism effect */}
            <div className="pointer-events-none absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-white/40 blur-[100px]"></div>
            <div className="pointer-events-none absolute -right-20 bottom-0 h-[700px] w-[700px] rounded-full bg-sky-200/50 blur-[120px]"></div>
            
            <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl lg:text-6xl drop-shadow-sm">
                        {dict?.title || "Core Skills"}
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        {dict?.subtitle || "A practical snapshot of the skills I use to build, test, and support modern web applications."}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {skillGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                            <article
                                key={group.title}
                                className="group relative flex min-h-[320px] flex-col rounded-[2rem] border border-white/60 bg-white/40 p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/50 hover:border-white/80 md:p-8"
                            >
                                <div className="mb-6 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                            {group.title === dict?.backend ? 'Backend' : group.title}
                                        </p>
                                        <h3 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 drop-shadow-sm">
                                            {group.title}
                                        </h3>
                                    </div>
                                    <div
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/60 border border-white/80 shadow-sm backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/80"
                                        style={{ color: group.accent }}
                                    >
                                        <GroupIcon size={24} />
                                    </div>
                                </div>

                                <p className="mb-8 text-base leading-relaxed text-gray-700">
                                    {group.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {group.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur-md transition-colors hover:bg-white/80 hover:border-white/100 shadow-sm"
                                            >
                                                {SkillIcon && <SkillIcon size={16} style={{ color: group.accent }} />}
                                                {skill.name}
                                            </span>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
