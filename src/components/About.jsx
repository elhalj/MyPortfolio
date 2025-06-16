import React from 'react';
import about from "../assets/photo2.webp";

function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400">À Propos de Moi</h2>
        <p className="text-lg text-gray-400 mt-2">Mon parcours, mes compétences et ma passion pour le développement.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">Concepteur Créatif & Développeur Moderne</h3>
          <p className="text-gray-300 mb-6">
            Développeur Full-Stack MERN et Mobile React Native passionné par la technologie et l'innovation. Je suis spécialisé dans la création d'applications web performantes et d'applications mobiles cross-platform. Mon objectif est de transformer des idées en solutions numériques scalables, intuitives et impactantes.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li><span className="font-bold text-cyan-400">Ce que je fais :</span> Développement Web et Mobile, conception d'API robustes, et création d'interfaces utilisateur dynamiques.</li>
            <li><span className="font-bold text-cyan-400">Mon approche :</span> Un code propre, maintenable et testable. J'aime collaborer pour aligner la technique avec les besoins métiers.</li>
            <li><span className="font-bold text-cyan-400">Pourquoi moi ?</span> Curiosité sans limites, débrouillardise et une véritable passion pour la création d'expériences utilisateur exceptionnelles.</li>
          </ul>
          <p className="mt-6 text-gray-400">
            En dehors du code, j'aime jouer aux jeux vidéos, explorer l'IA/ML, et préparer le café parfait ☕. Prêt à collaborer ? Discutons de votre projet !
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={about}
            alt="about"
            className="h-auto w-full max-w-md rounded-lg shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
