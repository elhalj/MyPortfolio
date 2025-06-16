import React from 'react';
import ecommerce from '../assets/path/to/ecommerce.png';
import moonchat from '../assets/path/to/moonchat.png';
import blog from '../assets/path/to/Blog.png';

const projects = [
  {
    title: 'Site E-commerce',
    description: 'Une plateforme de commerce électronique complète avec un design moderne.',
    image: ecommerce,
    link: 'https://fresh-fashon.onrender.com',
  },
  {
    title: 'MoonChat',
    description: 'Une application de chat en temps réel pour une communication instantanée.',
    image: moonchat,
    link: 'https://moonchat-fn47.onrender.com',
  },
  {
    title: 'Blog Statique',
    description: 'Un blog personnel simple et rapide, construit avec des technologies modernes.',
    image: blog,
    link: 'https://posts-seven-red.vercel.app/',
  },
];

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Voir le projet
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Mes Projets</h2>
        <p className="text-lg text-gray-400 mt-2">Quelques-uns de mes travaux récents.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
