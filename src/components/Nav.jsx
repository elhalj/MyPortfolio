import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "About", href: "/#about" },
  { title: "Portfolio", href: "/#portfolio" },
  { title: "Projets", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
  { title: "Blog", href: "/blog" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4 text-white">
        <h1 className="text-3xl font-bold tracking-wider">
          <Link to="/" className="hover:text-cyan-400 transition-colors">
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
              className="text-lg font-medium transition-colors hover:text-cyan-400"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
            {isMenuOpen ? (
              <IoIosCloseCircleOutline className="h-8 w-8 text-cyan-400" />
            ) : (
              <RiMenu4Line className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-screen bg-gray-900/95 md:hidden flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={handleLinkClick}
              className="text-3xl font-medium py-4 text-white hover:text-cyan-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Nav;
