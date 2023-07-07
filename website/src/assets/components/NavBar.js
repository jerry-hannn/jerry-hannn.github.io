import React from "react";
// import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/solid";

export default function NavBar() {
    return (
        <header className="bg-violet-950 md:sticky top-0 z-10"> 
            <div className="w-full flex flex-wrap p-5 flex-col md:flex-row items-center h-full">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Jerry Han
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="https://drive.google.com/file/d/1nkQET5cAfVRfDYH0uraE7-ebMe-zPFFs/view?usp=sharing" target="_blank" className="mr-5 hover:text-white">
                        Resume
                    </a>
                </nav>
                <a href= "https://github.com/jerry-hannn">
                    <img src={require('../github-mark-white.png')} alt="github" className="w-10 h-10 ml-5"/>
                </a>
                <a href="https://www.linkedin.com/in/gerald-han/">
                    <img src={require('../linkedin.png')} alt="linkedin" className="w-10 h-10 ml-5"/>
                </a>
                <a
                href="#contact"
                className="inline-flex ml-5 items-center bg-violet-900 border-0 py-1 px-3 focus:outline-none hover:bg-violet-800 rounded text-base mt-4 md:mt-0">
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
