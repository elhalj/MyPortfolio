import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/elhalj", // Remplacez par votre URL
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj", // Remplacez par votre URL
  },
  {
    name: "Email",
    icon: MdOutlineMail,
    url: "mailto:wilsonikedakoffi7@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d10] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-7 sm:flex-row md:px-8">
        <a href="/" className="font-mono text-sm font-bold text-[#27d3e5]">
          KOFFI.DEV
        </a>
        <p className="font-mono text-[10px] text-[#7f8d95]">
          © {new Date().getFullYear()} Konan Wilson Ikeda Koffi
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="flex items-center gap-1.5 text-[11px] text-[#9eabb2] transition-colors hover:text-[#27d3e5]"
            >
              <link.icon aria-hidden="true" className="h-4 w-4" />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
