"use client";

import ScrollAnimation from "@/components/ui/ScrollAnimation";
import React from "react";
import { FiMail, FiPhone, FiShield, FiUserPlus } from "react-icons/fi";

const teamMembers = [
  {
    name: "Ikeda Koffi",
    role: "Admin principal",
    email: "wilson@studio.dev",
    phone: "+225 05 04 46 44 86",
    status: "En ligne",
  },
  {
    name: "Awa Diallo",
    role: "Rédactrice",
    email: "awa@studio.dev",
    phone: "+225 07 45 33 21 09",
    status: "Dernière connexion il y a 3h",
  },
  {
    name: "Noah Kouamé",
    role: "Modérateur",
    email: "noah@studio.dev",
    phone: "+225 01 22 88 77 55",
    status: "En pause",
  },
];

export default function Team() {
  return (
    <ScrollAnimation
      animation="fade-up"
      className="space-y-6 transition-all duration-500 ease-out delay-100"
    >
      <section className="space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Collaborateurs
            </p>
            <h3 className="text-2xl font-[cormorant] text-slate-900">
              Équipe éditoriale
            </h3>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-500">
            <FiUserPlus /> Ajouter un membre
          </button>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.email}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    {member.name}
                  </p>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {member.status}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <FiMail className="text-cyan-500" /> {member.email}
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="text-cyan-500" /> {member.phone}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <FiShield /> Accès complet
                </span>
                <button className="text-cyan-600 hover:text-cyan-700">
                  Modifier
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollAnimation>
  );
}
