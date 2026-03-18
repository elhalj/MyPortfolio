"use client";

import { useConnexion } from "@/features/auth/hooks/useConnexion";
import React from "react";
import { CiLogout } from "react-icons/ci";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiPlus,
  FiSettings,
} from "react-icons/fi";

interface HeaderProps {
  isReduce: boolean;
  handleReduce: () => void;
  activeView: string;
  onSelectView: (view: string) => void;
}

export default function DashboardHeader({
  isReduce,
  handleReduce,
  activeView,
  onSelectView,
}: HeaderProps) {
  const { isConnected, user } = useConnexion();

  if (!isConnected) {
    return <div>Vous devez être connecté pour accéder au dashboard</div>;
  }

  const navItems = [
    { label: "Vue d'ensemble", icon: FiHome, key: "overview" },
    { label: "Articles", icon: FiFileText, key: "articles" },
    { label: "Ajouter un article", icon: FiPlus, key: "create" },
    { label: "Collaborateurs", icon: FiUsers, key: "team" },
    { label: "Paramètres", icon: FiSettings, key: "settings" },
    { label: "Deconnexion", icon: CiLogout, key: "logout" },
  ];

  const widthClasses = isReduce
    ? "md:w-20 transition-all duration-300"
    : "md:w-64 transition-all duration-300";

  return (
    <aside
      className={`relative w-full shrink-0 border-b border-slate-200 bg-white shadow-sm transition-all duration-300 md:min-h-screen md:border-b-0 md:border-r ${widthClasses}`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4">
        <div className="min-w-0">
          <p className="text-xs font-[cormorant] uppercase tracking-wide text-slate-400">
            Connecté
          </p>
          <h1 className="truncate text-base font-[cormorant] text-slate-900">
            {user?.email}
          </h1>
        </div>

        <button
          type="button"
          onClick={handleReduce}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-600 text-white shadow transition hover:bg-cyan-500 md:absolute md:top-1/2 md:-right-5 md:h-12 md:w-12 md:-translate-y-1/2"
          aria-label={
            isReduce ? "Déployer la navigation" : "Réduire la navigation"
          }
        >
          {isReduce ? <FaGreaterThan size={18} /> : <FaLessThan size={18} />}
        </button>
      </div>

      <nav className="flex flex-wrap gap-2 border-t border-slate-100 px-4 py-4 md:flex-col md:gap-3 md:border-t-0">
        {navItems.map(({ label, icon: Icon, key }) => (
          <button
            key={key}
            type="button"
            title={label}
            onClick={() => onSelectView(key)}
            className={`flex w-full items-center rounded-lg px-3 py-2 text-sm font-[cormorant] transition ${isReduce ? "justify-center gap-0" : "gap-3"} ${activeView === key ? "bg-cyan-50 text-cyan-700" : "text-slate-600 hover:bg-slate-100"}`}
          >
            <Icon size={18} />
            <span
              className={`whitespace-nowrap ${isReduce ? "md:hidden" : ""}`}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
