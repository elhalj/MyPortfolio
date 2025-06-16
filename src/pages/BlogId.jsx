import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogId({ data }) {
  const { slug } = useParams();

  const decodeSlug = (slug) => {
    return slug.replace(/-/g, ' ');
  };

  const post = data.find(item =>
    item.title.toLowerCase() === decodeSlug(slug).toLowerCase()
  );

  if (!post) {
    return (
      <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white p-4'>
        <h1 className='text-4xl font-bold text-red-500 mb-4'>404</h1>
        <p className='text-xl text-gray-300 mb-8'>Article non trouvé</p>
        <Link
          to="/blog"
          className='bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300'
        >
          Retour au Blog
        </Link>
      </div>
    );
  }

  return (
    <div className='bg-gray-900 min-h-screen py-20 px-4 md:px-12'>
      <article className='max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8 md:p-12'>
        <h1 className='text-4xl md:text-5xl font-bold text-cyan-400 mb-4'>{post.title}</h1>
        <p className='text-sm text-gray-400 mb-8'>{post.date}</p>
        <p className='text-gray-300 text-lg leading-relaxed'>
          {post.description}
        </p>
        <Link
          to="/blog"
          className='inline-block mt-12 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300'
        >
          ← Retour au Blog
        </Link>
      </article>
    </div>
  );
}

export default BlogId