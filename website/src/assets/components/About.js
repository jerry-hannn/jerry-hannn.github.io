import React, { useRef }from "react";
// import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Jerry
                    </h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'I am a Software Engineer',
                                1000,
                                'I am a student at Northwestern University',
                                1000,
                                'I am a Full Stack Developer',
                                1000,
                                'I am a Gym Rat',
                                1000,
                                'I am a Foodie',
                                1000,
                                'I am a little tired...',
                                1000,
                            ]}
                            speed={30}
                            style={{fontSize: '1em'}}
                            repeat={Infinity}
                            wrapper={"div"}
                        />
                    </h1>
                    {/* <p className="mb-8 leading-relaxed">
                        I am a student at Northwestern University studying Computer Science and Economics. I am passionate about building software that solves problems and makes people's lives easier. I am currently looking for full-time opportunities in software engineering.
                    </p> */}
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src='./coding.svg'
                    />
                </div> */}
            </div>
        </section>
    );
}