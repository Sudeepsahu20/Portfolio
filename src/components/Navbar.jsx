import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 
      bg-gradient-to-r from-gray-800/80 via-gray-900/80 to-gray-800/80 
      backdrop-blur-md z-50 border-b border-indigo-500/20 shadow-md">
      
      <h1
        className="text-2xl font-bold text-indigo-400 cursor-pointer"
        onClick={() => scrollToSection("hero")}
      >
        Portfolio
      </h1>

      <ul className="flex gap-6 text-white pr-6">
        {["about", "skills", "projects", "resume", "contact"].map((section, idx, arr) => (
          <li
            key={section}
            className={`cursor-pointer hover:text-indigo-400 capitalize transition-colors ${
              idx === arr.length - 1 ? "mr-4" : ""
            }`}
            onClick={() => scrollToSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
