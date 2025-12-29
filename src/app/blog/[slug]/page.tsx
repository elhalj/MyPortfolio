"use client"

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Loader from "@/components/Loader";
import React, { useState } from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
     const { slug } = (React as any).use(params)
    ? (React as any).use(params)
    : { slug: undefined }; // fallback si React.use non disponible
    const blog = useQuery(api.blog.get);
        const [copied, setCopied] = useState(false);

    if (!blog) {
        return (
            <div className="flex h-screen items-center justify-center text-white">
                <Loader />
            </div>
        )
    }

    const post = Array.isArray(blog)
        ? blog.find(p => String(p._id) === String(slug) || String(p.slug) === String(slug))
        : null;

    if (!post) {
        return (
            <div className="flex h-screen flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-bold mb-4">Article introuvable</h2>
                <Link href="/blog" className="text-white px-2 py-1 rounded-full bg-amber-600">Retour au blog</Link>
            </div>
        )
    }

   // Fonction de partage 
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
            // ignore user cancel or errors
            console.error("Share failed", e);
        }
    };

    return (
        <div className="min-h-screen py-10 px-4 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

                {post.image && (
                    <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
                )}

                <div className="flex gap-2 mb-4">
                    {post.etat && <span className="text-xs px-2 py-1 rounded-full bg-emerald-600">{post.etat}</span>}
                    {post.date && <span className="text-xs px-2 py-1 rounded-full bg-slate-700">{post.date}</span>}
                    {post.lecture && <span className="text-xs px-2 py-1 rounded-full bg-slate-700">{post.lecture}</span>}
                </div>

                <div className="prose prose-invert max-w-none text-gray-200">
                    {(post.content ?? "").split('\n').map((line: string, i: number) =>
                        line.trim() ? <p key={i}>{line}</p> : <br key={i} />
                    )}
                </div>

                <div className="mt-6 flex items-center gap-3">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-white px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-500 transition-colors"
                        aria-label="Retour au blog"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Retour au blog
                    </Link>
                    <button
                        onClick={sharePost}
                        className="inline-flex items-center text-white px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-600"
                        aria-label="Partager cet article"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v10m0 0l-4-4m4 4 4-4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
                        </svg>
                        Partager
                    </button>

                    {copied && <span className="text-sm text-emerald-400">Lien copié !</span>}
                </div>
            </div>
        </div>
    )
}