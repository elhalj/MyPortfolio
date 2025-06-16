import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa6';
import { MdOutlineMail } from 'react-icons/md';
import { IoSchool } from 'react-icons/io5';
import { LuMapPin } from 'react-icons/lu';
import logo from '../assets/photo3.jpg';
import bck from '../assets/bck.jpg';

function Hero() {
  const [click, setClick] = useState(false);

  return (
    <section className="relative text-white">
      <div
        className="h-[400px] md:h-[600px] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bck})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 md:left-1/4 transform -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/4 flex flex-col items-center text-center md:text-left">
        <img
          src={logo}
          alt="logo"
          className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-full object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="mt-6">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
            Konan Wilson Ikeda Koffi
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4 text-lg">
            <div className="flex items-center gap-2">
              <IoSchool className="text-cyan-400" />
              <span>Software Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="text-cyan-400" />
              <span>Abidjan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8">
        <div
          className={`bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 rounded-full p-3 cursor-pointer ${click ? 'w-auto' : 'w-16 h-16 flex items-center justify-center'}`}
          onClick={() => setClick(!click)}
        >
          {click ? (
            <div className="flex gap-4 px-4">
              <a href="https://www.facebook.com/wilsonikeda.koffi.3" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/elhalj_officiel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://wa.me/+2250504464486" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="mailto:wilsonikedakoffi7@gmail.com" className="hover:text-gray-300">
                <MdOutlineMail size={24} />
              </a>
              <a href="https://github.com/elhalj" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub size={24} />
              </a>
            </div>
          ) : (
            <span className="text-sm font-semibold">Contact</span>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
