"use client";
import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { BsJournalAlbum } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";

const navLinks = [
  { title: "About", href: "/#about", icon: <RiMenu4Line /> },
  { title: "Portfolio", href: "/portfolio", icon: <BsJournalAlbum /> },
  { title: "Projets", href: "/#projects", icon: <BsBook /> },
  {
    title: "Contact",
    href: "/#contact",
    icon: <FcContacts color="white" className="text-white" />,
  },
  { title: "Blog", href: "/blog", icon: <RiMenu4Line /> },
  { title: "Connexion", href: "/admin/dashboard/connexion", icon: <MdDashboard /> },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-cyan-600/80"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <h1 className="text-3xl font-bold tracking-wider">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Elhalj.
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={handleLinkClick}
              className=" flex items-center gap-2 text-lg font-medium transition-colors hover:text-cyan-400"
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
            {isMenuOpen ? (
              // <IoIosCloseCircleOutline className="h-8 w-8 text-cyan-400" />
              ""
            ) : (
              <RiMenu4Line className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-gray-900/95 md:hidden flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="absolute top-4 right-4"
          >
            <IoIosCloseCircleOutline className="h-8 w-8 text-cyan-400" />
            {}
          </button>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={handleLinkClick}
              className="flex items-center gap-2 text-3xl font-medium py-4 text-white hover:text-cyan-400 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
