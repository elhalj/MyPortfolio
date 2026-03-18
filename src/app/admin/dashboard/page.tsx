import React from "react";
import DashbordLAyout from "@/components/features/admin/DashbordLAyout";
import DashboardPage from "./DashboardPage";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50">
      <DashbordLAyout>
        <DashboardPage />
      </DashbordLAyout>
    </div>
  );
}
