import ScrollAnimation from "../ui/ScrollAnimation";
import Experience from "./Experience";
import Formation from "./Formation";
import ProfilePro from "./ProfilePro";

function Description() {
  return (
    <ScrollAnimation animation="fade-up">
      <section
        id="experience"
        className="scroll-mt-20 border-t border-white/10 px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <header>
            <p className="font-mono text-[10px] uppercase text-[#27d3e5]">
              Parcours
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#e3eaed] md:text-4xl">
              Expérience & formation
            </h2>
          </header>
          <ScrollAnimation animation="fade-right">
            <ProfilePro />
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollAnimation animation="fade-right">
              <Experience />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-right">
              <Formation />
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default Description;
