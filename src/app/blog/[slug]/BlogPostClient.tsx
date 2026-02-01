"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Loader from "@/components/ui/Loader";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const blog = useQuery(api.blog.get);
  const [copied, setCopied] = useState(false);

  if (!blog) {
    return (
      <div className="flex h-screen items-center justify-center text-white">
        <Loader />
      </div>
    );
  }

  const post = Array.isArray(blog)
    ? blog.find(
        (p) => String(p._id) === slug || String(p.slug) === slug,
      )
    : null;

  if (!post) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-white">
        <h2 className="mb-4 text-2xl font-bold">Article introuvable</h2>
        <Link
          href="/blog"
          className="rounded-full bg-amber-600 px-2 py-1 text-white"
        >
          Retour au blog
        </Link>
      </div>
    );
  }

  const sharePost = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    try {
      if ((navigator as any).share) {
        await (navigator as any).share({
          title: post.title ?? "Article",
          text: post.description ?? "",
          url,
        });
        return;
      }

      if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (e) {
      console.error("Share failed", e);
    }
  };

  return (
    <ScrollAnimation animation="fade-right" className="delay-500">
      <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 px-4 py-10 text-white font-[cormorant]">
        <div className="mx-auto max-w-4xl rounded-lg bg-gray-800 p-8 shadow-lg">
          <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              className="mb-4 h-64 w-full rounded-md object-cover"
              width={100}
              height={100}
            />
          )}

          <div className="mb-4 flex gap-2">
            {post.etat && (
              <span className="rounded-full bg-emerald-600 px-2 py-1 text-xs">
                {post.etat}
              </span>
            )}
            {post.date && (
              <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
                {post.date}
              </span>
            )}
            {post.lecture && (
              <span className="rounded-full bg-slate-700 px-2 py-1 text-xs">
                {post.lecture}
              </span>
            )}
          </div>

          <div className="prose prose-invert max-w-none text-gray-200">
            {(post.content ?? "")
              .split("\n")
              .map((line: string, i: number) =>
                line.trim() ? <p key={i}>{line}</p> : <br key={i} />,
              )}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-white transition-colors hover:bg-blue-500"
              aria-label="Retour au blog"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Retour au blog
            </Link>
            <button
              onClick={sharePost}
              className="inline-flex items-center rounded-full bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
              aria-label="Partager cet article"
            >
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v10m0 0l-4-4m4 4 4-4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7"
                />
              </svg>
              Partager
            </button>

            {copied && (
              <span className="text-sm text-emerald-400">Lien copié !</span>
            )}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
