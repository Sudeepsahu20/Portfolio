import React from "react";

function About() {
   return (
    <section
      id="about"
      className="relative py-30 bg-gray-900  text-white px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-8 pt-6">
          About Me
        </h2>
        
        <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
          <p>
            Hi, I’m <span className="text-indigo-400 font-semibold">Sudeep Sahu</span>, a B.Tech (CSE-AI) student at BIT Durg with a strong passion for building and solving problems through code.
          </p>
          <p>
            Currently, I’m diving deep into <span className="text-indigo-400 font-medium">Full-Stack Development (MERN)</span> while also sharpening my skills in Data Structures & Algorithms to become a better problem solver.
          </p>
          <p>
            I enjoy creating projects that bring ideas to life — from small apps to full-fledged web solutions that can make an impact.
          </p>
          <p>
            My goal is to grow as a <span className="text-indigo-400 font-medium">software engineer</span> and contribute to innovative projects that solve real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
