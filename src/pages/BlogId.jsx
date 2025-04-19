import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BlogId({ data }) { // Renommez 'donnee' en 'data' pour cohérence
  const { slug } = useParams()

  const decodeSlug = (slug) => {
    return slug.replace(/-/g, ' ')
  }

  const post = data.find(item =>
    item.title.toLowerCase() === decodeSlug(slug).toLowerCase()
  )

  if (!post) return <div>Article non trouvé</div>

  return (
    <div className='container mx-auto flex flex-col items-center mt-8  p-4 h-full'>
      <div className='flex flex-col gap-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'>
        <h1 className='text-2xl font-bold mb-4 uppercase'>{post.title}</h1>
        <p className='text-lg mb-2'>{post.description}</p>
        <p className='text-sm text-gray-500'>{post.date}</p>
        <Link
          to="/blog"
          className='mt-4 text-blue-500 hover:underline'
        >
          Retour aux articles
        </Link>
      </div>

    </div>
  )
}

export default BlogId