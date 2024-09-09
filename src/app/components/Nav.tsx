import React from "react";


const Nav = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-10">
            <div className="container mx-auto flex justify-center space-x-8">
                <a href="#about-me" className="hover:underline">About Me</a>
                <a href="#technologies" className="hover:underline">Technologies</a>
                <a href="#projects" className="hover:underline">Projects</a>
            </div>
        </nav>

    );
};

export default Nav;