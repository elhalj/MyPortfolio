import React from "react";
import Hero from "@/components/sections/Hero";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/features/portfolio/Projects";
import Contact from "@/components/sections/Contact";
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
      {/* <ScrollAnimation animation="fade-up" className="delay-500">
        <Portfolio />
      </ScrollAnimation> */}
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
