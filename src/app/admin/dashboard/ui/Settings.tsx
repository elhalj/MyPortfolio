"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import React from "react";
import { FiBell, FiGlobe, FiSave } from "react-icons/fi";

export default function Settings() {
  return (
    <ScrollAnimation
      animation="fade-up"
      className="space-y-6 transition-all duration-500 ease-out delay-100"
    >
      <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Préférences
          </p>
          <h3 className="text-2xl font-[cormorant] text-slate-900">
            Paramètres du dashboard
          </h3>
          <p className="text-sm text-slate-500">
            Personnalisez les notifications, la langue d'interface et
            l'apparence générale de l'espace d'administration.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-100 p-5">
            <h4 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <FiBell /> Notifications
            </h4>
            <p className="text-sm text-slate-500">
              Choisissez comment vous souhaitez être averti des nouvelles
              actions.
            </p>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <label className="flex items-center justify-between">
                Alertes critiques
                <input
                  type="checkbox"
                  className="accent-cyan-600"
                  defaultChecked
                />
              </label>
              <label className="flex items-center justify-between">
                Nouveaux commentaires
                <input type="checkbox" className="accent-cyan-600" />
              </label>
              <label className="flex items-center justify-between">
                Hebdo analytics
                <input
                  type="checkbox"
                  className="accent-cyan-600"
                  defaultChecked
                />
              </label>
            </div>
          </article>

          <article className="rounded-2xl border border-slate-100 p-5">
            <h4 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <FiGlobe /> Langue & thème
            </h4>
            <p className="text-sm text-slate-500">
              Ajustez la langue de l'interface et les contrastes du dashboard.
            </p>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div>
                <label
                  htmlFor="language-select"
                  className="text-xs uppercase text-slate-400"
                >
                  Langue
                </label>
                <select
                  id="language-select"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
                >
                  <option>Français</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="theme-select"
                  className="text-xs uppercase text-slate-400"
                >
                  Thème
                </label>
                <select
                  id="theme-select"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2"
                >
                  <option>Clair</option>
                  <option>Sombre</option>
                </select>
              </div>
            </div>
          </article>
        </div>

        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800">
            <FiSave /> Enregistrer les changements
          </button>
        </div>
      </section>
    </ScrollAnimation>
  );
}
