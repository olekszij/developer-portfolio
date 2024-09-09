import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2024 Olek K. All rights reserved.</p>
            </div>
            <div className="container mx-auto text-center"></div>
            <div className="flex justify-center space-x-4 pt-4">
                <a href="https://github.com/olegkondratedsdfsdfnko" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/oleg-ksdfsdfondratenko/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com/olegkondsdfsdfsratenko" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                </a>
            </div>


        </footer>
    );
};

export default Footer;