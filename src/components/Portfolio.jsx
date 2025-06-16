import React from 'react';
import certImg from '../assets/cert.png';
import cvImg from '../assets/cv.png';
import certificatPDF from '../assets/path/to/certificat.pdf';
import cvPDF from '../assets/path/to/cv.pdf';

const portfolioItems = [
  {
    title: 'Certificat',
    image: certImg,
    link: certificatPDF,
  },
  {
    title: 'CV',
    image: cvImg,
    link: cvPDF,
  },
];

function PortfolioCard({ title, image, link }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
        >
          Voir
        </a>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-12 bg-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400">Mon Portfolio</h2>
        <p className="text-lg text-gray-400 mt-2">Mes certifications et mon parcours professionnel.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
