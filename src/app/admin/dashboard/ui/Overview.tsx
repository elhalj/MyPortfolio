import React from "react";

const quickStats = [
  { label: "Articles publiés", value: 18, trend: "+3 cette semaine" },
  { label: "Brouillons", value: 6, trend: "2 prêts à publier" },
  { label: "Lecteurs", value: 1240, trend: "+12% vs mois dernier" },
  { label: "Temps de lecture moyen", value: "4 min", trend: "Stable" },
];

const recentArticles = [
  {
    title: "Comprendre Convex en 10 min",
    status: "Publié",
    date: "01 Fév. 2026",
  },
  {
    title: "Design system pour startups",
    status: "Brouillon",
    date: "29 Jan. 2026",
  },
  {
    title: "React Server Actions : retour d'expérience",
    status: "Publié",
    date: "27 Jan. 2026",
  },
];

export default function Overview() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-500">
              {stat.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500">{stat.trend}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Activité
            </p>
            <h3 className="text-2xl font-[cormorant] text-slate-900">
              Dernières publications
            </h3>
          </div>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600">
            Voir tout
          </button>
        </header>

        <div className="mt-6 divide-y divide-slate-100">
          {recentArticles.map((article) => (
            <article
              key={article.title}
              className="flex flex-wrap items-center justify-between gap-3 py-4"
            >
              <div>
                <p className="text-base font-semibold text-slate-900">
                  {article.title}
                </p>
                <p className="text-sm text-slate-500">{article.date}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  article.status === "Publié"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {article.status}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
