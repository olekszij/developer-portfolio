import Image from "next/image";
import CrumpledNameTag from "./components/CrumpledNameTag";

const AboutMe = () => {
    return (
        <section className="bg-white md:p-12">
            <div className="container mx-auto max-w-7xl">
                <div className="relative flex flex-col md:flex-row justify-center items-center">
                    {/* Photo Column */}
                    <div className="relative z-0 -mb-8 md:mb-0 md:-mr-16">
                        <div className="relative group">
                            <div className="absolute inset-0 rounded-xl bg-gray-400/20 transform translate-x-2 translate-y-2 blur-sm"></div>
                            <div className="relative w-[300px] h-[300px] transform group-hover:scale-[1.02] transition-transform duration-300">
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
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name Badge Column */}
                    <div className="relative z-10 transform hover:rotate-2 transition-transform duration-300">
                        <CrumpledNameTag />
                    </div>
                </div>

                {/* Description Text */}
                <div className="mt-20 max-w-3xl mx-auto text-center pb-12">
                    <p className="text-xl leading-relaxed text-gray-800">
                        I am a passionate self-taught web developer with a strong focus on building efficient, high-performance applications using modern web technologies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
