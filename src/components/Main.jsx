import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaRegFileCode } from "react-icons/fa";
import { LuFolderCode, LuMapPin } from "react-icons/lu";
import { RiCodeView } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import logo from "../assets/photo3.jpg";
import about from "../assets/photo2.webp";
import cert from "../assets/cert.png";
import cv from "../assets/cv.png";
import ecommerce from "../assets/path/to/ecommerce.png";
import moonchat from "../assets/path/to/moonchat.png";
import bck  from "../assets/bck.jpg";
import Contact from "./Contact";
import Description from "./Description";

function Main() {
  const [click, setClick] = useState(false);
  return (
    <>
      <section className="bg-slate-50 mb-20 md:mb-0">
        <div className="bg-purple-100 flex flex-col justify-center items-center md:items-start mt-4   md:flex-row h-52 md:h-[600px] w-full">
          {/* profil page */}
          <div className="h-full bg-orange-300 relative w-full" style={{backgroundImage: `url(${bck})`, backgroundPosition:"center", backgroundSize:"cover"}}>
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
              <h1 className="cursor-pointer duration-300">
                coordonnees
              </h1>
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
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Description */}
      <Description />
      {/* /* about */ }
      <section id="about" className="md:mx-0 md:my-[200px] mx-8 my-8">
        <div className="grid grid-cols-1 ">
          <div className="md:w-[800px] md:ml-[200px] ">
            <h3 className="font-bold text-3xl bg-slate-50 p-2">About me</h3>
            <h2 className="font-Meow text-3xl md:text-4xl">
              Creative Designer with Modern framework
            </h2>
            <p>
              Hello! I'm a passionate MERN stack developer with a strong background in building dynamic and responsive web applications. My expertise lies in the following technologies:
            </p>
            <ol>
              <li className="my-2">
                <span className="font-bold"> MongoDB:</span> Proficient in designing and managing NoSQL databases, ensuring efficient data storage and retrieval.
              </li>
              <li className="my-2">
                <span className="font-bold"> Express.js:</span> Skilled in creating robust backend services and RESTful APIs to handle client-server communication
              </li>
              <li className="my-2">
                <span className="font-bold">React.js:</span> Experienced in developing interactive and user-friendly front-end interfaces using modern JavaScript frameworks.
              </li>
              <li className="my-2">
                <span className="font-bold"> Node.js:</span> Adept at building scalable server-side applications and handling asynchronous operations.
              </li>
            </ol>
            <p>
              I thrive in collaborative environments and enjoy working on projects that challenge me to learn and grow. My goal is to deliver high-quality software solutions that meet user needs and drive business success.
            </p>
          </div>

          <div className="relative content-center bg-slate-100 m-auto md:ml[300px] mt-4">
            <img
              src={about}
              alt="about"
              className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] object-cover text-center rounded-xl"
            />
          </div>
        </div>
      </section>
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
          </div>
        </div>
      </section>
      <section className="bg-slate-50 mt-20 mb-20 md:mt-52">
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
      <section className="bg-slate-100 mt-20 mb-20 md:mt-52">
        <div>
          <h1 className="font-Meow text-4xl text-center my-5 p-2">Projets</h1>
          <hr className="h-8" />
          <div className="flex flex-wrap justify-around p-4">
            {/* Add project items here */}
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
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
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4">
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
            {/* Add more projects as needed */}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}

export default Main;
