"use client";

import React, { useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import Formulaire from "./Formulaire";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import Overview from "./Overview";
import Team from "./Team";
import Settings from "./Settings";
import ArticlesBoard from "./ArticlesBoard";
import { useConnexion } from "@/features/auth/hooks/useConnexion";
import { useRouter } from "next/navigation";

type DashbordLAyoutProps = {
  children: React.ReactNode;
};

export default function DashbordLAyout({ children }: DashbordLAyoutProps) {
  const [isReduce, setIsReduce] = React.useState(false);
  const [activeView, setActiveView] = React.useState<
    "overview" | "articles" | "create" | "team" | "settings" | "logout"
  >("overview");
  const router = useRouter();
  const { logout } = useConnexion();

  useEffect(() => {
    if (activeView === "logout") {
      logout();
      router.push("/admin/dashboard/connexion");
    }
  }, [activeView, logout]);

  const handleReduce = () => {
    setIsReduce((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return <Overview />;
      case "articles":
        return <ArticlesBoard />;
      case "create":
        return <Formulaire />;
      case "team":
        return <Team />;
      case "settings":
        return <Settings />;
      case "logout":
        return (
          <p className="text-center text-sm text-slate-500">
            Déconnexion en cours...
          </p>
        );
      default:
        return children;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 md:flex-row">
      <DashboardHeader
        isReduce={isReduce}
        handleReduce={handleReduce}
        activeView={activeView}
        onSelectView={(view) => setActiveView(view as typeof activeView)}
      />
      <main className="flex-1 font-[cormorant] overflow-auto px-4 py-6 sm:px-6 lg:px-8">
        <ScrollAnimation
          animation="fade-up"
          className="space-y-6 transition-all duration-500 ease-out"
        >
          {renderContent()}
        </ScrollAnimation>
      </main>
    </div>
  );
}
