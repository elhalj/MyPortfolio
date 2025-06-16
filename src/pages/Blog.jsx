import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Blog({ donnee }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        setData(donnee);
      } catch (error) {
        console.error("Erreur de récupération des données:", error);
      }
    };
    fetchData();
  }, [donnee]);

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
  };

  return (
    <div className='bg-gray-900 min-h-screen py-20 px-4 md:px-12'>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-cyan-400">Mon Blog</h2>
        <p className="text-lg text-gray-400 mt-2">Découvrez mes derniers articles et réflexions.</p>
      </div>
      <ul className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
        {data.map((post) => (
          <li
            key={post.id}
            className='bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/20'
          >
            <article className='flex flex-col h-full p-6'>
              <h3 className='text-2xl font-bold text-white mb-3'>{post.title}</h3>
              <time className='text-sm text-gray-400 mb-4'>{post.date}</time>
              <div className="flex-grow"></div>
              <Link
                to={`/blog/${createSlug(post.title)}`}
                className='mt-4 self-start bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300'
              >
                Lire la suite
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog