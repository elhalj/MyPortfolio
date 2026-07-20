import React from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Description from "@/components/sections/Description";
import Projects from "@/components/sections/Projects";

function Main() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Description />
      <Projects />
    </main>
  );
}

export default Main;
