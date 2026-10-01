import About from "@/components/sections/About";
import Description from "@/components/sections/Description";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import VueEnsemble from "@/components/sections/VueEnsemble";

function Main() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      <Hero />
      <VueEnsemble />
      <Projects />
      <About />
      <Description />
    </div>
  );
}

export default Main;
