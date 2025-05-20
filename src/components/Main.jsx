import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { IoSchool } from "react-icons/io5";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { SiExpo, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiReactrouter, SiRedux, SiTypescript } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import logo from "../assets/photo3.jpg";
import about from "../assets/photo2.webp";
import cert from "../assets/cert.png";
import cv from "../assets/cv.png";
import ecommerce from "../assets/path/to/ecommerce.png";
import moonchat from "../assets/path/to/moonchat.png";
import blog from "../assets/path/to/Blog.png";
import bck from "../assets/bck.jpg";
import Contact from "./Contact";
import Description from "./Description";
import ScrollAnimation from "./ScrollAnimation";

function Main() {
  const [click, setClick] = useState(false);
  return (
    <>
      <section className="bg-slate-50 mb-20 md:mb-0">
        <div className="bg-purple-100 flex flex-col justify-center items-center md:items-start mt-4   md:flex-row h-52 md:h-[600px] w-full">
          {/* profil page */}
          <div
            className="h-full bg-orange-300 relative w-full"
            style={{
              backgroundImage: `url(${bck})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-center md:items-start md:ml-10 translate-y-20 md:translate-y-80 content-center">
              <img
                src={logo}
                alt="logo"
                className="h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full object-cover text-center"
              />
            </div>
          </div>
        </div>
        {/* name and profession */}
        <div className="mt-24 uppercase py-8">
          <div className="text-center md:text-start">
            <h1 className="text-2xl md:text-4xl md:px-8 font-bold p-1">
              konan wilson ikeda koffi
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 md:mx-1 my-2">
            <div className="md:ml-8 flex items-center gap-2">
              <IoSchool className="text-blue-500" />
              <h1>Software Developer</h1>
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="text-blue-500" />
              <h1>Abidjan</h1>
            </div>
            <div
              className={
                click
                  ? "bg-red-600 md:w-[300px] p-4 flex flex-col items-center rounded-full text-white mx-2 my-2 md:my-0 cursor-pointer duration-300"
                  : "bg-red-600 p-2 md:w-[200px] flex flex-col items-center rounded-full text-white mx-2 my-2 md:my-0 cursor-pointer duration-300"
              }
              onClick={() => setClick(!click)}
            >
              <h1 className="cursor-pointer duration-300">coordonnees</h1>
              {click && (
                <div className="flex gap-3 text-4xl">
                  <a
                    href="https://www.facebook.com/wilsonikeda.koffi.3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                  <a
                    href="https://www.instagram.com/elhalj_officiel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                  <a
                    href="https://wa.me/+2250504464486"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                  <a href="mailto:wilsonikedakoffi7@gmail.com">
                    <MdOutlineMail className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                  <a
                    href="https://github.com/elhalj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-purple-600 text-white hover:bg-blue-800 duration-300 rounded-full" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Description */}
      <ScrollAnimation animation="fade-right" className="delay-500">

        <Description />
      </ScrollAnimation>
      {/* /* about */}
      <ScrollAnimation animation="fade-left" className="delay-500">
        <section id="about" className="md:mx-0 md:my-[200px] mx-8 my-8">
          <div className="grid grid-cols-1 ">
            <div className="md:w-[800px] md:ml-[200px] bg-slate-100 p-4 rounded-lg hover:scale-105 hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-3xl bg-slate-50 p-2">
                Me Concernant
              </h3>
              <h2 className="font-Meow text-3xl md:text-4xl">
                Concepteur creatif avec cadre moderne
              </h2>
              <p>
                Développeur Full-Stack MERN & Mobile React Native Passionné par la
                technologie et l'innovation, je suis spécialisé dans la création
                d'applications web performantes avec la stack MERN (MongoDB,
                Express.js, React, Node.js) et d'applications mobiles
                cross-platform avec React Native. Mon objectif ? Transformer des
                idées en solutions numériques scalables, intuitives et
                impactantes.
              </p>
              <ol>
                <li className="my-2">
                  <span className="font-bold"> Ce que je fais :</span>
                  <br /> ✅ Développement Web Full-Stack : Création d'applications
                  web dynamiques et réactives avec React.js et Node.js. Conception
                  d’APIs RESTful robustes avec Node.js/Express.js. Interfaces
                  dynamiques et réactives avec React.js (Redux, Context API).
                  Bases de données NoSQL optimisées (MongoDB/Mongoose).
                </li>
                <li className="my-2">
                  <span className="font-bold">✅ Développement Mobile :</span>{" "}
                  Applications iOS/Android avec React Native (Expo, navigation,
                  animations). Intégration d'APIs tierces (Stripe, Google Maps,
                  Firebase). Performance et expérience utilisateur (optimisation
                  mémoire, UI/UX).
                </li>
                <li className="my-2">
                  <span className="font-bold">Mon approche :</span>
                  <br /> 🔹 Problème → Solution : Je privilégie un code propre,
                  maintenable et testable. <br />
                  🔹 Collaboration : J’aime travailler avec des designers, PO et
                  autres devs pour aligner technique et besoins métiers. <br />
                  🔹 Impact : Des applications qui allient performance,
                  accessibilité et élégance.
                </li>
                <li className="my-2">
                  <span className="font-bold"> Projets marquants :</span> Une
                  plateforme e-commerce full-stack avec paiement en temps réel
                  (MERN + Stripe). <br /> <p> </p>
                  Un outil de gestion de projets collaboratif en temps réel
                  (WebSocket + MongoDB Atlas).
                </li>
                <li className="my-2">
                  <span className="font-bold"> Pourquoi moi ?</span>🚀 Curiosité
                  sans limites : Toujours à l’affût des nouvelles tendances
                  (Next.js, TypeScript, React.js). <br />
                  🔧 Débrouillardise : Autonome, mais adepte du pair programming
                  et des revues de code. <br />
                  💡 Passion : Je ne me contente pas de coder, je crée des
                  expériences. <br />
                </li>
              </ol>
              <p>
                En dehors du code : Quand je ne suis pas devant VS Code, j’aime
                jouer aux jeux videos, explore l’IA/ML, ou prépare mon café
                parfait ☕. Prêt à collaborer ? Discutons de votre projet et
                donnons vie à vos idées !
              </p>
            </div>

            <div className="relative content-center bg-slate-100 p-4 rounded-lg m-auto md:ml[300px] mt-4">
              <img
                src={about}
                alt="about"
                className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] object-cover text-center rounded-xl"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" className="dalay-500">
        <section className="bg-slate-200">
          <div>
            <h1 className="font-Meow text-4xl text-center my-5 p-2">Skills</h1>
            <div className="flex flex-wrap justify-around">
              <SiMongodb className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiExpressvpn className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <FaReact className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <FaNodeJs className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <FaBootstrap className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiTailwindcss className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiJavascript className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiTypescript className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiReactrouter className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiRedux className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiFirebase className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiExpo className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
              <SiNextdotjs className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            </div>
          </div>
        </section>
      </ScrollAnimation>
      {/* Portfolio and Projects */}
      <ScrollAnimation animation="fade-up" className="delay-500">

        <section id="portfolio" className="bg-slate-50 mt-20 mb-20 md:mt-52">
          <div>
            <h1 className="font-Meow text-4xl text-center my-5 p-2">Portfolio</h1>
            <hr className="h-8" />
            <div className="flex flex-wrap justify-around p-4">
              {/* Add portfolio items here */}
              <div>
                <h1 className="text-center">Certificat</h1>
                <div>
                  <img
                    src={cert}
                    alt="certification"
                    className="h-[300px] w-[300px] md:h-[200px] md:w-[200px] rounded-xl"
                  />
                </div>
                <div className="text-center mt-2">
                  <a
                    href="../assets/path/to/certificat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border border-s-lime-500 p-2 w-20 bg-slate-300 drop-shadow-md">
                      Voir
                    </button>
                  </a>
                </div>
              </div>
              <div>
                <h1 className="text-center">CV</h1>
                <div>
                  <img
                    src={cv}
                    alt="CV"
                    className="h-[300px] w-[300px] md:h-[300px] md:w-[300px] rounded-xl"
                  />
                  <div className="text-center mt-2">
                    <a
                      href="../assets/path/to/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="border border-s-lime-500 p-2 w-20 bg-slate-300 drop-shadow-md">
                        Voir
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animation="fade-up" className="delay-500">
        <section id="projets" className="bg-slate-100 mt-20 mb-20 md:mt-52">
          <div>
            <h1 className="font-Meow text-4xl text-center my-5 p-2">Projets</h1>
            <hr className="h-8" />
            <div className="flex flex-wrap justify-around p-4">
              {/* Add project items here */}
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 hover:scale-105 hover:translate-y-0 transition-transform duration-300">
                <img className="w-full" src={ecommerce} alt="Project 1" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Projet 1</div>
                  <p className="text-gray-700 text-base">Site E-commerce.</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href="https://fresh-fashon.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 hover:scale-105 hover:translate-y-0 transition-transform duration-300">
                <img className="w-full" src={moonchat} alt="Project 2" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Projet 2</div>
                  <p className="text-gray-700 text-base">
                    Site de chat en ligne.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href="https://moonchat-fn47.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 hover:scale-105 hover:translate-y-0 transition-transform duration-300">
                <img className="w-full" src={blog} alt="Project 2" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Projet 3</div>
                  <p className="text-gray-700 text-base">
                    Blog Static version 0.0.1
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href="https://posts-seven-red.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Voir le projet
                  </a>
                </div>
              </div>
              {/* Add more projects as needed */}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" className="delay-500">
        <Contact />
      </ScrollAnimation>
    </>
  );
}

export default Main;
