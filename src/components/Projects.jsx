import React from "react";
import project1 from "/images/uneek.jpg";
import project2 from "/images/OIP.jpeg";
import project3 from "/images/weatherApp.jpg";
import project4 from "/images/OIP.jpeg"; 

const projects = [
  {
    title: "Uneek-Store",
    desc: "Uneek Store – An elegant online store to explore and shop unique T-shirts.And much more...",
    img: project1,
    github: "https://github.com/Sudeepsahu20/uneek-store",
  },
  {
    title: "Wanderlust",
    desc: "Travel booking platform with CRUD.",
    img: project2,
    github: "https://github.com/Sudeepsahu20/wanderlust-travel-app",
  },
  {
    title: "Weather-App",
    desc: "A weather app that shows real-time temperature, humidity, and conditions using a weather API.",
    img: project3,
    github: "https://github.com/Sudeepsahu20/weather-app",
  },
  {
    title: "Mini-WhatsApp",
    desc: "A real-time chat app built with CRUD operations and Socket.IO.",
    img: project4,
    github: "https://github.com/Sudeepsahu20/mini-whatsapp",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-30 bg-gray-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gray-900 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:opacity-20"></div>

      <div className="relative max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-indigo-400 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-indigo-500/40 hover:scale-105 transform transition-all"
            >
              <a href={proj.github} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-1">
                    {proj.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{proj.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
