import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Blog({ donnee }) {
  const [data, setData] = useState([])

  useEffect(() => {
    // Simule un chargement asynchrone
    const fetchData = () => {
      try {
        setData(donnee)
      } catch (error) {
        console.error("Erreur de récupération des données:", error)
      }
    }
    fetchData()
  }, [donnee])

  /**
 * Creates a URL slug from a given title by converting it to lowercase, 
 * removing special characters, and replacing spaces with hyphens.
 *
 * @param {string} title - The title to be converted into a slug.
 * @return {string} The URL slug.
 */
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/g, '') // Supprime les caractères spéciaux
      .replace(/\s+/g, '-') // Remplace les espaces par des tirets
  }

  return (
    <div className='container mx-auto p-4 h-screen'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Blog</h2>
      <ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((post) => (
          <li
            key={post.id}
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
          >
            <article className='flex flex-col h-full'>
              <h3 className='text-xl font-semibold mb-2'>{post.title}</h3>
              <time className='text-sm text-gray-500 mt-2'>{post.date}</time>
              <Link
                to={`/blog/${createSlug(post.title)}`}
                className='mt-4 self-start text-blue-500 hover:underline'
              >
                Lire la suite →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog