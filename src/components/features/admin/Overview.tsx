import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useBlog } from "@/features/blog/hooks/useBlog";
import React from "react";

export default function Overview() {
  const { blog } = useBlog();
  const articlePublié = blog?.find((f) => f.etat === "publié");
  const brouillon = blog?.find((f) => f.etat === "brouillon");
  const blogTrend = articlePublié?.length || 0;
  const lecteurs = 1240;

  const quickStats = [
    {
      label: "Articles publiés",
      value: articlePublié?.length || 0,
      trend: `+${blogTrend} cette semaine`,
    },
    {
      label: "Brouillons",
      value: brouillon?.length || 0,
      trend: `${brouillon?.length || 0} prêts à publier`,
    },
    { label: "Lecteurs", value: lecteurs, trend: "+12% vs mois dernier" },
    { label: "Temps de lecture moyen", value: "4 min", trend: "Stable" },
  ];

  const recentArticles = blog?.slice(-3);

  return (
    <ScrollAnimation
      animation="fade-up"
      className="transition-all duration-500 ease-out delay-100"
    >
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
            {recentArticles
              ?.map((article) => (
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
                      article.etat === "publié"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {article.etat}
                  </span>
                </article>
              ))
              .reverse()}
          </div>
        </section>
      </div>
    </ScrollAnimation>
  );
}
