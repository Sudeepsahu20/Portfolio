import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newError.name = "Please enter a valid name";
      isValid = false;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newError.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newError.message = "Please enter your message";
      isValid = false;
    }

    setError(newError);

    if (isValid) {
      // EmailJS send
      emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formData,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
).then(
        (result) => {
          alert("Message sent! Thank you 😊");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Oops! Something went wrong. Try again.");
          console.error(error.text);
        }
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative py-30 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-900 before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] before:opacity-20"></div>

      <div className="relative max-w-lg mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">Contact Me</h2>

        <p className="text-gray-300 mb-8">
          Let’s get in touch and discuss potential opportunities.  
          I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 border border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none text-white"
          />
          {error.name && <p className="text-red-500 text-sm">{error.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 border border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none text-white"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 border border-indigo-500 focus:ring-2 focus:ring-indigo-400 outline-none text-white"
            rows="5"
          ></textarea>
          {error.message && <p className="text-red-500 text-sm">{error.message}</p>}

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:from-indigo-500 hover:to-purple-500 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
     
    </section>
  );
};

export default Contact;
