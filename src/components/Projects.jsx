import React from "react";
import ecommerce from "../assets/path/to/ecommerce.webp";
import moonchat from "../assets/path/to/moonchat_1.webp";
import blog from "../assets/path/to/Blog.webp";
import seguikro from "../assets/path/to/seguikro.webp";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Site E-commerce",
    description:
      "Une plateforme de commerce électronique complète avec un design moderne.",
    image: ecommerce,
    link: "https://fresh-fashon.onrender.com",
    version: "0.0.1",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/fresh-fashon",
  },
  {
    title: "MoonChat",
    description:
      "Une application de chat en temps réel pour une communication instantanée.",
    image: moonchat,
    link: "https://moonchat-fn47.onrender.com",
    version: "0.0.3",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/moon",
  },
  {
    title: "Blog Statique",
    description:
      "Un blog personnel simple et rapide, construit avec des technologies modernes.",
    image: blog,
    link: "https://posts-seven-red.vercel.app",
    version: "0.0.8",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/Posts",
  },
  {
    title: "Financial contribution",
    description:
      "cotization plateforme frontend and more financial contribution.",
    image: seguikro,
    link: "https://seguikro.vercel.app/",
    version: "0.0.2",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/seguikro",
  },
];

function ProjectCard({
  title,
  description,
  image,
  link,
  version,
  icon: Icon,
  codeSource,
}) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        <div className="flex justify-between p-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Demo
          </a>
          <div className="flex gap-2 items-center justify-center">
            <p className="text-cyan-400 uppercase">
              version: V{version}{" "}
            </p>
            <a
              href={codeSource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Mes Projets</h2>
        <p className="text-lg text-gray-400 mt-2">
          Quelques-uns de mes travaux récents.
        </p>
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
