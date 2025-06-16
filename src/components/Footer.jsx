import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/elhalj', // Remplacez par votre URL
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/wilson-ikeda-koffi-ehalj', // Remplacez par votre URL
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    url: 'https://twitter.com/your-handle', // Remplacez par votre URL
  },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <link.icon className="h-7 w-7" />
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Elhalj. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer
