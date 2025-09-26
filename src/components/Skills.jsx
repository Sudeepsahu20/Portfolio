import React from "react";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind",
  "DSA",
  "C",
  "C++",
  "Java",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-30 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-gray-900 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:opacity-20"></div>

      <div className="relative max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-indigo-400 mb-6">My Skills</h2>
        <p className="text-gray-300 mb-10">
          Here are some of the tools, technologies, and programming languages I
          work with. I continuously learn and improve my skill set to stay
          updated with modern development practices.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-indigo-500/40 hover:scale-105 transform transition-all"
            >
              <p className="text-indigo-300 font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
