"use client";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import Image from "next/image";

function Hero() {
  const [showSocials, setShowSocials] = useState(true);

  const socialLinks = [
    {
      href: "https://www.facebook.com/wilsonikeda.koffi.3",
      icon: <FaFacebookF size={24} />,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/elhalj_officiel",
      icon: <FaInstagram size={24} />,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj",
      icon: <FaLinkedinIn size={24} />,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/+2250769988211",
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
    },
    {
      href: "mailto:wilsonikedakoffi7@gmail.com",
      icon: <MdOutlineMail size={24} />,
      label: "Email",
    },
    {
      href: "https://github.com/elhalj",
      icon: <FaGithub size={24} />,
      label: "GitHub",
    },
  ];

  return (
    <section className="relative min-h-screen text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/assets/bck.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
        <Image
          src="/assets/photo3.webp"
          alt="Konan Wilson Ikeda Koffi"
          className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
          width={250}
          height={250}
        />
        <div className="mt-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
            Konan Wilson Ikeda Koffi
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4 text-lg">
            <div className="flex items-center gap-2">
              <IoSchool className="text-cyan-400" />
              <span>Developer web/mobile | JS</span>
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="text-cyan-400" />
              <span>Abidjan</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 z-20 transition-transform duration-1000 hover:scale-105 hover:translate-y-0">
        <button
          onClick={() => setShowSocials(!showSocials)}
          className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-700 rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-105 hover:translate-y-0"
          aria-label="Toggle social links"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setShowSocials(!showSocials);
            }
          }}
        >
          {showSocials ? (
            <div className="flex  gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hover:text-cyan-300 transition-all duration-100"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          ) : (
            <span className="text-sm font-bold">Contact</span>
          )}
        </button>
      </div>
    </section>
  );
}
export default Hero;
