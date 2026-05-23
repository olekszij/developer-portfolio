import Link from 'next/link';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import './cv-editorial.css';

const skillGroups = [
    {
        title: 'Frontend',
        className: 'cv-tag-accent',
        items: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'UX Design'],
    },
    {
        title: 'Backend & Data',
        className: 'cv-tag-accent-two',
        items: ['Node.js', 'Express', 'REST API', 'PostgreSQL', 'SQL', 'Neon.tech', 'MongoDB'],
    },
    {
        title: 'Tooling & Methods',
        className: '',
        items: ['Vitest', 'Playwright', 'Git / GitHub', 'Debugging', 'Project Coordination'],
    },
];

const languages = [
    { name: 'French', level: 'Fluent', width: '95%' },
    { name: 'English', level: 'B1', width: '60%' },
    { name: 'Belarusian', level: 'Native', width: '100%' },
];

const education = [
    {
        degree: 'UX Design',
        school: 'Google Ateliers Numeriques',
        date: 'Expected 2026',
    },
    {
        degree: 'Full-Stack React / Node.js',
        school: 'Le Reacteur Bootcamp, BAC +2',
        date: '2024',
    },
    {
        degree: 'Developer & Integrator',
        school: 'CFAS Institut, BAC +2',
        date: '2015-2016',
    },
];

const developerExperience = [
    {
        company: 'Perfect Cab',
        role: 'Full-Stack Developer Intern',
        duration: '2 months',
    },
    {
        company: 'Freelance',
        role: 'Web Integrator / Web Creation & Support',
        duration: '7 years combined',
    },
];

const previousExperience = [
    {
        company: 'Sens Unique Paris',
        role: 'IT Project Manager',
        duration: '3 years',
    },
    {
        company: 'Entrepreneur',
        role: 'IT Support Technician',
        duration: '9 years',
    },
    {
        company: 'Adliga Advertising Agency',
        role: 'Project Manager',
        duration: '2 years',
    },
    {
        company: 'Sens Unique Paris',
        role: 'Intern',
        duration: '3 months',
    },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
    return <h2 className="cv-editorial-label">{children}</h2>;
}

function ExperienceList({
    entries,
}: {
    entries: { company: string; role: string; duration: string }[];
}) {
    return (
        <div className="cv-editorial-experience-list">
            {entries.map((entry) => (
                <div key={`${entry.company}-${entry.role}`} className="cv-editorial-experience">
                    <div className="cv-editorial-experience-head">
                        <h3>{entry.company}</h3>
                        <p>{entry.duration}</p>
                    </div>
                    <p className="cv-editorial-role">{entry.role}</p>
                </div>
            ))}
        </div>
    );
}

export default function CvPage() {
    return (
        <div className="cv-editorial-shell min-h-screen px-4 pb-16 pt-28">
            <div className="print-hidden mx-auto mb-6 flex max-w-[960px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg border border-black/10 bg-white/80 px-5 py-3 font-semibold text-[#0f0e0c] transition hover:bg-white"
                >
                <FaArrowLeft />

                </Link>
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                        href="/pdf/KOLOSZOV%20Olekszij%20CV.pdf"
                        download
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white/80 px-5 py-3 font-semibold text-[#0f0e0c] transition hover:bg-white"
                    >
                        <FaDownload size={16} />
                    </a>
                </div>
            </div>

            <article className="cv-editorial-page">
                <header className="cv-editorial-header">
                    <p className="cv-editorial-eyebrow">Curriculum Vitae</p>
                    <h1>
                        Olekszij{' '}
                        <br />
                        Koloszov
                    </h1>
                    <p className="cv-editorial-title">Full-Stack Developer</p>
                    <div className="cv-editorial-contact">
                        <a href="mailto:olekszijk@gmail.com">olekszijk@gmail.com</a>
                        <span />
                        <a href="tel:+33651393356">+33 6 51 39 33 56</a>
                        <span />
                        <p>Paris, France</p>
                        <span />
                        <Link href="/">Portfolio</Link>
                        <span />
                        <a href="https://github.com/olekszij" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <span />
                        <a href="https://www.linkedin.com/in/olek-k/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>
                </header>

                <div className="cv-editorial-grid">
                    <aside className="cv-editorial-sidebar">
                        {skillGroups.map((group) => (
                            <section key={group.title} className="cv-editorial-section cv-print-skills">
                                <SectionLabel>{group.title}</SectionLabel>
                                <p className="cv-print-skill-line">
                                    <strong>{group.title}:</strong> {group.items.join(', ')}
                                </p>
                                <div className="cv-editorial-tags">
                                    {group.items.map((item, index) => (
                                        <span
                                            key={item}
                                            className={`cv-editorial-tag ${index < 2 ? group.className : ''}`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        ))}

                        <section className="cv-editorial-section cv-print-languages">
                            <SectionLabel>Languages</SectionLabel>
                            <p className="cv-print-language-line">
                                French: Fluent | English: B1 | Belarusian: Native
                            </p>
                            <div className="cv-editorial-languages">
                                {languages.map((language) => (
                                    <div key={language.name} className="cv-editorial-language">
                                        <p>{language.name}</p>
                                        <span>
                                            <i style={{ width: language.width }} />
                                        </span>
                                        <small>{language.level}</small>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="cv-editorial-section cv-print-education">
                            <SectionLabel>Education</SectionLabel>
                            <div className="cv-editorial-education-list">
                                {education.map((item) => (
                                    <div key={item.degree} className="cv-editorial-education">
                                        <h3>{item.degree}</h3>
                                        <p>
                                            {item.school} · {item.date}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </aside>

                    <div className="cv-editorial-main">
                        <section className="cv-editorial-section cv-print-summary">
                            <SectionLabel>Profile</SectionLabel>
                            <p className="cv-editorial-summary">
                                Product-minded full-stack developer focused on responsive React and Next.js applications,
                                TypeScript, Node.js APIs, SQL and NoSQL data, and UX-aware interfaces. Previous project
                                management and support experience strengthens delivery, debugging, and communication
                                across teams.
                            </p>
                        </section>

                        <section className="cv-editorial-section cv-print-developer-experience">
                            <SectionLabel>Developer Experience</SectionLabel>
                            <ExperienceList entries={developerExperience} />
                        </section>

                        <section className="cv-editorial-section cv-print-previous-experience">
                            <SectionLabel>Previous Relevant Experience</SectionLabel>
                            <ExperienceList entries={previousExperience} />
                        </section>
                    </div>
                </div>
            </article>
        </div>
    );
}
