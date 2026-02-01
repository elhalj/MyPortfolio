import React from "react";
import DashbordLAyout from "./ui/DashbordLAyout";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashbordLAyout>
        <section className="space-y-6">
          <header>
            <h1 className="text-3xl font-semibold text-slate-900">
              Bienvenue sur votre dashboard
            </h1>
            <p className="text-slate-500">
              Ajoutez ici les widgets ou les statistiques que vous souhaitez
              afficher.
            </p>
          </header>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-600">
              Contenu exemple : liste des articles, statistiques, etc.
            </p>
          </div>
        </section>
      </DashbordLAyout>
    </div>
  );
}
