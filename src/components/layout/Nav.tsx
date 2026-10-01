"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuCodeXml, LuMenu, LuX } from "react-icons/lu";

const navLinks = [
  { title: "About", href: "/#about" },
  { title: "Projects", href: "/#projects" },
  { title: "Experience", href: "/#experience" },
  { title: "Blog", href: "/blog" },
];

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080d10]/95 text-white backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
        aria-label="Navigation principale"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-wide text-[#27d3e5]"
          onClick={handleLinkClick}
        >
          <LuCodeXml aria-hidden="true" className="h-5 w-5" />
          KOFFI.DEV
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={handleLinkClick}
              className="text-xs font-medium tracking-wide text-[#a6b2ba] transition-colors hover:text-white"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <a
          href="mailto:wilsonikedakoffi7@gmail.com"
          className="hidden items-center gap-2 rounded-md bg-[#27d3e5] px-4 py-2 text-xs font-bold text-[#061116] transition-colors hover:bg-[#83eff7] md:flex"
        >
          Contact <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded p-2 text-[#dce5e8] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27d3e5] md:hidden"
        >
          {isMenuOpen ? (
            <LuX className="h-5 w-5" />
          ) : (
            <LuMenu className="h-5 w-5" />
          )}
        </button>

        <div
          id="mobile-navigation"
          className={`absolute inset-x-0 top-16 flex flex-col gap-1 border-b border-white/10 bg-[#080d10] px-5 pb-5 pt-3 shadow-xl transition-[opacity,transform,visibility] md:hidden ${
            isMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={handleLinkClick}
              tabIndex={isMenuOpen ? 0 : -1}
              className="rounded px-3 py-3 text-sm text-[#c1ccd1] transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.title}
            </Link>
          ))}
          <a
            href="mailto:wilsonikedakoffi7@gmail.com"
            onClick={handleLinkClick}
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-2 rounded-md bg-[#27d3e5] px-4 py-3 text-center text-sm font-bold text-[#061116]"
          >
            Me contacter
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
