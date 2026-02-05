"use client";

import { useBlog } from "@/hooks/useBlog";
import Image from "next/image";
import Link from "next/link";

export default function BlogPageClient() {
  const { blog } = useBlog();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6 font-[cormorant]">
      {blog &&
        (Array.isArray(blog) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl w-full mx-auto gap-6">
            {blog.map((post, idx) => (
              <article
                key={post._id ?? post.slug ?? idx}
                aria-labelledby={`post-${idx}-title`}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title ?? `Post ${idx + 1}`}
                      className="w-full md:w-1/3 h-48 md:h-40 object-cover rounded-md bg-gray-700 shrink-0"
                      width={100}
                      height={100}
                    />
                  )}
                  <div className="flex-1">
                    <h2
                      id={`post-${idx}-title`}
                      className="text-2xl font-[cormorant] mb-2"
                    >
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-3">{post.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.etat && (
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-emerald-600 font[cormorant]">
                          {post.etat}
                        </span>
                      )}
                      {post.date && (
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-slate-700">
                          {post.date}
                        </span>
                      )}
                      {post.lecture && (
                        <span className="text-xs text-white px-2 py-1 rounded-full bg-slate-700">
                          {post.lecture}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post._id ?? post.slug ?? idx}`}
                      className="inline-block text-white px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors font-[cormorant]"
                    >
                      Read
                    </Link>
                  </div>
                </div>
              </article>
            )).reverse()}
          </div>
        ) : (
          <div className="max-w-4xl w-full mx-auto">
            <p className="text-gray-400">Format d'article invalide.</p>
          </div>
        ))}
    </div>
  );
}
