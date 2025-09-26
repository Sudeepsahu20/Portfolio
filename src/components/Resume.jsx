import React from "react";
import resumePDF from "/SudeepResume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="relative py-30 bg-gray-900 text-white text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:opacity-20"></div>

      <div className="relative z-10 px-4">
        <h2 className="text-4xl font-bold text-indigo-400 mb-8">Resume</h2>
        <p className="text-gray-300 mb-6">Download my resume to see my education, skills, and projects.</p>
        <a href={resumePDF} download className="bg-indigo-700 px-6 py-3 rounded-xl text-white shadow-lg hover:bg-indigo-500 transition-colors">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
