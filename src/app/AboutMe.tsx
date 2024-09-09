import Image from "next/image";

const AboutMe = () => {
    return (
        <section className="bg-white text-gray-800 p-12  rounded-2xl shadow-xl">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                <div className="md:pr-8">
                    <h2 className="text-4xl font-bold mb-2">Olek Koloszov</h2>
                    <h1 className="text-6xl font-bold mb-2 ">Full Stack Developer</h1>
                    <p className="text-lg leading-relaxed">
                        with a passion for crafting modern web applications...
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <Image
                        src="/images/notmyface.webp"
                        alt="Olek K"
                        width={400}
                        height={400}
                        className="rounded-full shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
