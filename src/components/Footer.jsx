import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col md:flex-row justify-between items-center bg-black/50 text-blue-300 px-6 sm:px-12 lg:px-20">
      {/* Left text */}
      <p className="mb-4 md:mb-0 text-center md:text-left">
        Made with <span className="text-red-500">❤️</span> by <span className="font-semibold">Sudeep</span>
      </p>

      {/* Right social icons */}
      <div className="flex space-x-6">
        <a
          href="https://instagram.com/sudeep_sahu2027"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudeep-sahu-035a8328b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/Sudeepsahu20"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
