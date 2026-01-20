import React from "react";
import ecommerce from "../../public/assets/path/to/ecommerce.webp";
import moonchat from "../../public/assets/path/to/moonchat_1.webp";
import blog from "../../public/assets/path/to/Blog.webp";
import seguikro from "../../public/assets/path/to/seguikro.webp";
import civisRecens from "../../public/assets/path/to/civisRecens.png";
import tasks from "../../public/assets/path/to/tasks.webp";
import { FaGithub } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

type Project = {
  title: string;
  description: string;
  image: StaticImageData;
  technologies?: string[];
  link: string;
  version: string;
  icon: IconType;
  codeSource: string;
};

const projects: Project[] = [
  {
    title: "MoonChat",
    description:
      "Une application de chat en temps réel pour une communication instantanée.",
    image: moonchat,
    technologies: ["React", "Node.js", "Socket.io"],
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
    technologies: ["Tailwind CSS", "Markdown", "Vercel", "TypeScript", "React"],
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
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "MongoDB",
    ],
    link: "https://seguikro.vercel.app/",
    version: "0.0.2",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/seguikro",
  },
  {
    title: "Site E-commerce",
    description:
      "Une plateforme de commerce électronique complète avec un design moderne.",
    image: ecommerce,
    technologies: ["React", "CSS3", "Node.js", "MongoDB"],
    link: "#",
    version: "0.0.1",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/fresh-fashon",
  },
  {
    title: "CivisRecens",
    description:
      "Une plateforme pour l'auto-recencement des civils, Les services adminisatrative et Informations medical.",
    image: civisRecens,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    link: "https://civi-recens.vercel.app",
    version: "0.0.1",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/CiviRecens",
  },
  {
    title: "Task",
    description:
      "Une plateforme pour l'ajoute de tache, chat entre utilisateurs, envoie de projet.",
    image: tasks,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Node.js",
      "MongoDB",
    ],
    link: "https://colab-flow.netlify.app/login",
    version: "0.0.1",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/Tasks_api",
  },
];

function ProjectCard({
  title,
  description,
  image,
  technologies,
  link,
  version,
  icon: Icon,
  codeSource,
}: Project) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20">
      <Image
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        width={600}
        height={600}
        priority={false}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-5">
          {technologies?.map((tech) => (
            <li
              key={tech}
              className="text-gray-400 bg-blue-200/10 p-1 rounded mb-1"
            >
              #{tech}
            </li>
          ))}
        </ul>

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
            <p className="text-cyan-400 uppercase">version: V{version} </p>
            <a
              href={codeSource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <Icon className="h-7 w-7" />
              {}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      <section id="projects" className="py-20 px-4 md:px-12 bg-gray-900">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400">Mes Projets</h2>
          <p className="text-lg text-gray-400 mt-2">
            Quelques-uns de mes travaux récents.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects
            .map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
                version={project.version}
                icon={project.icon}
                codeSource={project.codeSource}
              />
            ))
            .reverse()}
        </div>
      </section>
    </>
  );
}

export default Projects;
