"use client";
import Image from "next/image";
import { LuArrowDownToLine, LuArrowUpRight, LuMapPin } from "react-icons/lu";

function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden border-b border-white/10 bg-[var(--ink)] text-[var(--paper)]">
      <div className="mx-auto grid min-h-[410px] max-w-7xl items-center gap-12 px-5 pb-14 pt-28 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pb-16 md:pt-28">
        <div className="relative z-10 animate-[hero-rise_.65s_ease-out_both]">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-[#91eaf2]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#27d3e5] shadow-[0_0_10px_#27d3e5]" />
            Disponible pour de nouvelles opportunités
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-[#e3eaed] sm:text-5xl md:text-6xl">
            KONAN WILSON
            <br />
            IKEDA KOFFI
          </h1>
          <p className="mt-5 text-sm text-[#a7b4bb]">
            Développeur web et mobile{" "}
            <span className="px-1 text-[#27d3e5]">|</span> JavaScript
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-[#82919a]">
            <LuMapPin aria-hidden="true" className="h-4 w-4 text-[#27d3e5]" />
            Abidjan, Côte d'Ivoire
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:wilsonikedakoffi7@gmail.com"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#27d3e5] px-5 text-sm font-bold text-[#051116] transition-colors hover:bg-[#8aedf4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27d3e5]"
            >
              Me contacter{" "}
              <LuArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="/assets/path/to/cv.pdf"
              download
              aria-label="Télécharger mon CV"
              title="Télécharger mon CV"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 text-[#dce5e8] transition-colors hover:border-[#27d3e5]/60 hover:text-[#27d3e5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#27d3e5]"
            >
              <LuArrowDownToLine aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-fit animate-[hero-rise_.8s_ease-out_.12s_both]">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-full border border-[#27d3e5]/10"
          />
          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-full border border-white/10"
          />
          <Image
            src="/assets/photo3.webp"
            alt="Portrait de Konan Wilson Ikeda Koffi"
            className="relative h-56 w-56 rounded-full border-[7px] border-[#1b2631] object-cover object-top shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:h-64 sm:w-64 md:h-72 md:w-72"
            width={360}
            height={360}
            priority
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
