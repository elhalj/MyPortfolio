import React from "react";

import Contact from "./Contact";

import ScrollAnimation from "./ScrollAnimation";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import Hero from "./Hero";

function Main() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Hero />
      {/* /* about */}
      <ScrollAnimation animation="fade-left" className="delay-500">
        <About />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" className="delay-500">
        <Skills />
      </ScrollAnimation>
      {/* Portfolio and Projects */}
      <ScrollAnimation animation="fade-up" className="delay-500">
        <Portfolio />
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" className="delay-500">
        <Projects />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" className="delay-500">
        <Contact />
      </ScrollAnimation>
    </main>
  );
}

export default Main;
