import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaRegFileCode } from "react-icons/fa";
import { LuFolderCode } from "react-icons/lu";
import { RiCodeView } from "react-icons/ri";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpressvpn } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import logo from "./f4.png";
import Contact from "./Contact";

function Main() {
  return (
    <>
      <section className="bg-slate-50">
        <div className="md:flex md:justify-center">
          <div className="relative container m-auto p-auto">
            <div className="md:h-[600px] md:w-[600px] sm:h-[300px] sm:w-[300px] bg-slate-100 m-auto mt-4 rounded-full text-center relative content-center   ">
              <img
                src={logo}
                alt="logo"
                className="md:h-[600px] md:w-[600px] sm:h-[300px] sm:w-[300px] rounded-full object-cover text-center"
              />
            </div>
            <FaRegFileCode className="absolute top-[50%] md:-left-2 text-5xl left-1 text-slate-500 bg-slate-300 p-1 rounded-full" />
            <LuFolderCode className="absolute md:top-2 -top-4 text-5xl right-[50%] text-slate-500 bg-slate-300 p-1 rounded-full" />
            <RiCodeView className="absolute right-2 md:-right-16 top-[50%] text-5xl text-slate-500 bg-slate-300 p-1 rounded-full" />
            <div className="absolute right-0 bottom-4 bg-slate-300 p-1 rounded-xl">
              {" "}
              01 Years Experience
            </div>
            <div className="absolute">{/* logo */}</div>
          </div>
          <div className="container m-auto mt-4 p-auto gap-4 md:-translate-x-10 md:h-[600px] md:flex md:flex-col md:justify-around  bg-slate-100">
            <p className="text-6xl md:text-8xl py-5 ">
              wilson <span className="text-slate-500 py-2 inline">ikeda</span>
            </p>
            <p className="text-4xl md:text-6xl">Frontend Developer</p>
            <p className="text-4xl md:text-6xl">Backend Developer</p>
            <p className="text-3xl underline">Software Developer</p>
            <div className="flex gap-3 text-4xl">
              {/* icon rreseau */}
              <a
                href="https://www.facebook.com/wilsonikeda.koffi.3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-slate-500 text-white hover:bg-purple-200" />
              </a>
              <a
                href="https://www.instagram.com/elhalj_officiel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-slate-500 text-white hover:bg-slate-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-slate-500 text-white hover:bg-slate-200" />
              </a>
              <a
                href="https://wa.me/+2250504464486"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-slate-500 text-white hover:bg-slate-200" />
              </a>
              <a href="mailto:wilsonikedakoffi7@gmail.com">
                <MdOutlineMail className="my-2 border-red-50 md:p-2 md:text-4xl p-2 cursor-pointer bg-slate-500 text-white hover:bg-slate-200" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="md:mx-4  md:my-[200px] mx-8 my-8">
        <div className="md:flex md:flex-row md:justify-center md:items-baseline flex flex-col-reverse md:mx-4">
          <div className="md:w-[600px] md:translate-x-20">
            <h3 className="font-bold text-3xl bg-slate-50 p-2">About me</h3>
            <h2 className="font-Meow text-3xl md:text-4xl">
              Creative Designer with Modern framework
            </h2>
            <p>
              Hello! I'm a passionate MERN stack developer with a strong
              background in building dynamic and responsive web applications. My
              expertise lies in the following technologies:
            </p>
            <ol>
              <li className="my-2">
                <span className="font-bold"> MongoDB:</span> Proficient in
                designing and managing NoSQL databases, ensuring efficient data
                storage and retrieval.
              </li>
              <li className="my-2">
                <span className="font-bold"> Express.js:</span> Skilled in
                creating robust backend services and RESTful APIs to handle
                client-server communication
              </li>
              <li className="my-2">
                <span className="font-bold">React.js:</span> Experienced in
                developing interactive and user-friendly front-end interfaces
                using modern JavaScript frameworks.
              </li>
              <li className="my-2">
                <span className="font-bold"> Node.js:</span> Adept at building
                scalable server-side applications and handling asynchronous
                operations.
              </li>
            </ol>
            <p>
              I thrive in collaborative environments and enjoy working on
              projects that challenge me to learn and grow. My goal is to
              deliver high-quality software solutions that meet user needs and
              drive business success.
            </p>
          </div>

          <div className="relative content-center bg-slate-100 m-auto mt-4">
            <img
              src=""
              alt="about"
              className="h-[300px] w-[300px] md:h-[600px] md:w-[600px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-200">
        <div>
          <h1 className="font-Meow text-4xl text-center my-5 p-2">Skills</h1>
          <div className="flex justify-around">
            <SiMongodb className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            <SiExpressvpn className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            <FaReact className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            <FaNodeJs className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            <FaBootstrap className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
            <SiTailwindcss className="text-6xl p-2 mb-4 bg-slate-500 text-white" />
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div>
          <h1 className="font-Meow text-4xl text-center my-5 p-2">Portfolio</h1>
          <div className="flex flex-wrap justify-around">
            {/* Add portfolio items here */}
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export default Main;
