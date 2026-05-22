'use client';

import { IconType } from 'react-icons';
import { FaCode, FaDatabase, FaGithub, FaTools, FaVial } from 'react-icons/fa';
import { SiExpress, SiJavascript, SiMongodb, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript, SiVitest } from 'react-icons/si';

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
        icon: FaCode,
        accent: '#2563eb',
        skills: [
            { name: 'JavaScript ES6+', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'HTML5 / CSS3' },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
        ],
    },
    {
        title: 'Backend & Data',
        description: 'Designing APIs and working with both SQL and NoSQL data models.',
        icon: FaDatabase,
        accent: '#16a34a',
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
        icon: FaVial,
        accent: '#7c3aed',
        skills: [
            { name: 'Vitest', icon: SiVitest },
            { name: 'Playwright', icon: FaVial },
        ],
    },
    {
        title: 'Tools',
        description: 'Working cleanly with code, planning, and debugging.',
        icon: FaTools,
        accent: '#dc2626',
        skills: [
            { name: 'Git', icon: FaGithub },
            { name: 'GitHub', icon: FaGithub },
        ],
    },
];

export default function CoreSkills() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">Core Skills</h2>
                    <p className="text-gray-900 text-lg max-w-2xl mx-auto">
                        A practical snapshot of the skills I use to build, test, and support modern web applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {skillGroups.map((group) => {
                        const GroupIcon = group.icon;

                        return (
                            <article
                                key={group.title}
                                className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                            >
                                <div className="flex items-center gap-4 mb-5">
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-white border border-gray-100"
                                        style={{ color: group.accent }}
                                    >
                                        <GroupIcon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{group.title}</h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-6 min-h-[78px]">
                                    {group.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-medium text-gray-800 border border-gray-100"
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
