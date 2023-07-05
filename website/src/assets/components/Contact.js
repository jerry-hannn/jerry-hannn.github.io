import React, { useState }from "react";

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    function encode(data) {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative bg-gray-800">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe  
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d115297.98384065159!2d-87.64551251731245!3d41.96963319276569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688503223115!5m2!1sen!2sus"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Evanston/Chicago, IL
                            </p>
                            <p className="mt-1">   
                                Contact me for details!
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-indigo-400 leading-relaxed" onClick={() => {window.location.href ='mailto:han.gerald.2@gmail.com';}}>
                                han.gerald.2@gmail.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">(515) 708-8699</p>
                        </div>
                    </div>
                </div>
                <form 
                    onSubmit={handleSubmit}
                    netlify
                    name="contact"
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Let's Talk!
                    </h2>
                    <p className="leading-relaxed mb-5">
                        I am currently looking for a full-time internship in software engineering for the summer of 2024. Please feel free to contact me if you have any questions or would like to work with me!
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            placeholder={"Leave me a message!"}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
                    