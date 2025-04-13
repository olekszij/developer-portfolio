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
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">About My Work</h3>
                            <p className="text-xl leading-relaxed text-gray-800">
                                I&apos;m a web developer passionate about technology and creating great digital experiences. Specializing in modern web technologies, I build efficient and performant applications that users enjoy working with.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Approach</h3>
                            <p className="text-xl leading-relaxed text-gray-800">
                                My development journey is all about continuous learning and keeping up with the latest industry trends. I believe in building solutions that are both technically sound and user-friendly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
