"use client";

import React from "react";
import { useBlog } from "@/hooks/useBlog";
import { FiExternalLink } from "react-icons/fi";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function ArticlesBoard() {
  const { blog } = useBlog();

  return (
    <ScrollAnimation animation="fade-up" className="space-y-6 transition-all duration-500 ease-out delay-100">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Articles
          </p>
          <h3 className="text-2xl font-[cormorant] text-slate-900">
            Gestion des publications
          </h3>
        </div>
        <span className="rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-600">
          {blog?.length ?? 0} éléments
        </span>
      </header>

      <div className="mt-8 overflow-x-scroll rounded-2xl border border-slate-100">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Titre</th>
              <th className="px-4 py-3">Auteur</th>
              <th className="px-4 py-3">Lecture</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {blog?.map((article) => (
              <tr key={article._id?.toString() ?? article.title}>
                <td className="px-4 py-4">
                  <p className="font-medium text-slate-900">{article.title}</p>
                  <p className="text-xs text-slate-500 line-clamp-1">
                    {article.description}
                  </p>
                </td>
                <td className="px-4 py-4 text-slate-500">{article.author}</td>
                <td className="px-4 py-4 text-slate-500">{article.lecture}</td>
                <td className="px-4 py-4">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {article.etat === "published" ? "Publié" : "Brouillon"}
                  </span>
                </td>
                <td className="px-4 py-4 text-right">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700">
                    Ouvrir <FiExternalLink />
                  </button>
                </td>
              </tr>
            )) || (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-slate-400"
                >
                  Aucun article pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
    </ScrollAnimation>
    
  );
}
