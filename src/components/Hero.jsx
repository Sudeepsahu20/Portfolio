import React from "react";
import heroImage from "/images/sudeep.jpg"; // 👈 apna image path daalna

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-8"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-400">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Sudeep <br /> Sahu
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-indigo-400">
            Full Stack Developer
          </h2>
          <p className="text-gray-300 max-w-lg">
            I create modern, responsive web applications with the MERN stack.
            Passionate about clean code, problem-solving, and building projects
            that bring ideas to life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
             <a href="https://github.com/Sudeepsahu20"> GitHub</a>
            </button>
            <button className="px-6 py-2 rounded-lg border border-gray-500 hover:border-indigo-400 transition">
              Get In Touch
            </button>
          </div>
        </div>

       {/* Mera Image Part*/}
  <div className="flex justify-center md:justify-end">

  <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full p-1 
                  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

    <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
      <img
        src={heroImage}
        alt="Sudeep Sahu"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Hero;
