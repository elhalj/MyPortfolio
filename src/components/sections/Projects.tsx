import Image from "next/image";
import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

type Project = {
  title: string;
  description: string;
  image: string;
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
    image: "/assets/path/to/moonchat_1.webp",
    technologies: ["React", "Node.js", "Socket.io"],
    link: "https://moonchat-fn47.onrender.com",
    version: "0.0.3",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/moon",
  },
  {
    title: "Financial contribution",
    description:
      "cotization plateforme frontend and more financial contribution.",
    image: "/assets/path/to/seguikro.webp",
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
    title: "CivisRecens",
    description:
      "Une plateforme pour l'auto-recencement des civils, Les services adminisatrative et Informations medical.",
    image: "/assets/path/to/civisRecens.png",
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
    image: "/assets/path/to/tasks.webp",
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
  {
    title: "Gbairai",
    description:
      "Un plateforme de journalisme citoyenne des informations vrai, analysés et verifiés",
    image: "/assets/path/to/Gbairai.png",
    technologies: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "React query",
    ],
    link: "https://gbairais.netlify.app",
    version: "1.3",
    icon: FaGithub,
    codeSource: "https://github.com/elhalj/Gbairai",
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
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-[#111923] transition-colors duration-300 hover:border-[#27d3e5]/40">
      <Image
        src={image}
        alt={title}
        className="aspect-video w-full border-b border-white/10 object-cover"
        width={1200}
        height={675}
        priority={false}
      />
      <div className="p-4 md:p-5">
        <h3 className="mb-2 text-lg font-semibold text-[#e1e8eb]">{title}</h3>
        <p className="mb-4 min-h-10 text-xs leading-5 text-[#9eabb2]">
          {description}
        </p>
        <ul className="mb-5 flex flex-wrap gap-2">
          {technologies?.map((tech) => (
            <li
              key={tech}
              className="rounded bg-white/[0.06] px-2 py-1 font-mono text-[9px] text-[#b7c3c8]"
            >
              #{tech}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#70e3ec] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#27d3e5]"
          >
            Voir le projet <span aria-hidden="true">↗</span>
          </a>
          <div className="flex items-center gap-3">
            <p className="font-mono text-[9px] uppercase text-[#74838b]">
              v{version}
            </p>
            <a
              href={codeSource}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Code source de ${title} sur GitHub`}
              title="Voir le code source"
              className="text-[#9eabb2] transition-colors hover:text-[#27d3e5]"
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 border-b border-white/10 px-5 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase text-[#27d3e5]">
            Sélection
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#e3eaed] md:text-4xl">
            Mes Projets
          </h2>
          <p className="mt-2 text-sm text-[#9eabb2]">
            Quelques-uns de mes travaux récents.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {[...projects].reverse().map((project) => (
            <ScrollAnimation key={project.title} animation="fade-up">
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
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
