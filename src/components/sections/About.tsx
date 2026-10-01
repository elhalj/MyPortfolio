import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

function About() {
  return (
    <ScrollAnimation animation="fade-left">
      <section
        id="about"
        className="scroll-mt-20 border-t border-white/10 px-5 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-mono text-[10px] uppercase text-[#27d3e5]">
              À propos
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#e3eaed] md:text-4xl">
              À Propos de Moi
            </h2>
            <p className="mt-2 text-sm text-[#9eabb2]">
              Mon parcours, mes compétences et ma passion pour le développement.
            </p>
          </div>
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[#e3eaed]">
                Concepteur Créatif & Développeur Moderne
              </h3>
              <p className="mb-6 text-sm leading-7 text-[#aab7bd]">
                Développeur Full-Stack MERN et Mobile React Native passionné par
                la technologie et l'innovation. Je suis spécialisé dans la
                création d'applications web performantes et d'applications
                mobiles cross-platform. Mon objectif est de transformer des
                idées en solutions numériques scalables, intuitives et
                impactantes.
              </p>
              <ul className="space-y-4 text-sm leading-7 text-[#aab7bd]">
                <li>
                  <span className="font-semibold text-[#74e5ee]">
                    Ce que je fais :
                  </span>{" "}
                  Développement Web et Mobile, conception d'API robustes, et
                  création d'interfaces utilisateur dynamiques.
                </li>
                <li>
                  <span className="font-semibold text-[#74e5ee]">
                    Mon approche :
                  </span>{" "}
                  Un code propre, maintenable et testable. J'aime collaborer
                  pour aligner la technique avec les besoins métiers.
                </li>
                <li>
                  <span className="font-semibold text-[#74e5ee]">
                    Pourquoi moi ?
                  </span>{" "}
                  Curiosité sans limites, débrouillardise et une véritable
                  passion pour la création d'expériences utilisateur
                  exceptionnelles.
                </li>
              </ul>
              <p className="mt-6 text-sm leading-7 text-[#82919a]">
                En dehors du code, j'aime jouer aux jeux vidéos, explorer
                l'IA/ML, et préparer le café parfait ☕. Prêt à collaborer ?
                Discutons de votre projet !
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <Image
                src={"/assets/photo2.webp"}
                alt="Konan Wilson Ikeda Koffi en extérieur"
                className="h-auto w-full rounded-md border border-white/10 object-cover"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>
    </ScrollAnimation>
  );
}

export default About;
