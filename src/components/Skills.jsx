import React from "react";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import {
  SiExpo,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiRedux,
  SiTypescript,
  SiExpressvpn,
  SiTailwindcss,
  SiZedindustries,
  SiReacthookform,
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: <SiMongodb className="text-6xl text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpressvpn className="text-6xl text-gray-400" />,
  },
  { name: "React", icon: <FaReact className="text-6xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-400" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-6xl text-purple-500" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-teal-400" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-6xl text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl text-blue-500" />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="text-6xl text-red-500" />,
  },
  { name: "Redux", icon: <SiRedux className="text-6xl text-purple-600" /> },
  {
    name: "Zustand",
    icon: <SiZedindustries className="text-6xl text-white" />,
  },
  {
    name: "React Hook Form",
    icon: <SiReacthookform className="text-6xl text-blue-400" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-6xl text-yellow-500" />,
  },
  { name: "Expo", icon: <SiExpo className="text-6xl text-white" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-white" /> },
];

function SkillCard({ name, icon }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center gap-4 transform transition-transform duration-300 hover:scale-110 hover:shadow-cyan-400/20 shadow-lg">
      {icon}
      <p className="text-lg font-semibold text-gray-300">{name}</p>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400">
          Compétences Techniques
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Les technologies avec lesquelles j'aime travailler.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
