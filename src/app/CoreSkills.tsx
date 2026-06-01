'use client';

import { IconType } from 'react-icons';
import { FiCheckCircle, FiCode, FiDatabase, FiTerminal, FiTool } from 'react-icons/fi';
import { SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript, SiVitest } from 'react-icons/si';

const skillGroups: {
    title: string;
    description: string;
    icon: IconType;
    accent: string;
    skills: { name: string; icon?: IconType }[];
}[] = [
    {
        title: 'Frontend',
        description: 'Building responsive, accessible interfaces with a strong eye for UX.',
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
        title: 'Backend & Data',
        description: 'Designing APIs and working with both SQL and NoSQL data models.',
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
        title: 'Testing',
        description: 'Checking real user flows and keeping projects reliable.',
        icon: FiCheckCircle,
        accent: '#1d6fb8',
        skills: [
            { name: 'Vitest', icon: SiVitest },
            { name: 'Playwright', icon: FiCheckCircle },
        ],
    },
    {
        title: 'Tools',
        description: 'Working cleanly with code, planning, and debugging.',
        icon: FiTool,
        accent: '#1d6fb8',
        skills: [
            { name: 'Git', icon: SiGit },
            { name: 'GitHub', icon: SiGithub },
            { name: 'Command Line', icon: FiTerminal },
        ],
    },
];

export default function CoreSkills() {
    return (
        <section className="bg-white py-14 md:py-20">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center md:mb-12">
                    <h2 className="mb-4 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">Core Skills</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        A practical snapshot of the skills I use to build, test, and support modern web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {skillGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                            <article
                                key={group.title}
                                className="flex min-h-[320px] flex-col rounded-2xl border border-sky-100 bg-[#eaf6ff] p-6 shadow-sm md:p-7"
                            >
                                <div className="mb-5 flex items-start justify-between gap-4">
                                    <div>
                                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700/70">
                                            {group.title === 'Backend & Data' ? 'Backend' : group.title}
                                        </p>
                                        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-gray-950">
                                            {group.title}
                                        </h3>
                                    </div>
                                    <div
                                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-700"
                                        style={{ color: group.accent }}
                                    >
                                        <GroupIcon size={21} />
                                    </div>
                                </div>

                                <p className="mb-6 text-base leading-7 text-gray-700">
                                    {group.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {group.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-gray-800"
                                            >
                                                {SkillIcon && <SkillIcon size={15} style={{ color: group.accent }} />}
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
