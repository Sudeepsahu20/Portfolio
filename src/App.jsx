import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white h-screen w-full overflow-hidden">
      <Navbar />
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <section className="snap-start h-screen"><Hero /></section>
        <section className="snap-start h-screen"><About /></section>
        <section className="snap-start h-screen"><Skills /></section>
        <section className="snap-start h-screen"><Projects /></section>
        <section className="snap-start h-screen"><Resume /></section>
        <section className="snap-start h-screen"><Contact /></section>

        {/* Footer as a full section */}
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
