import React from "react";
// eslint-disable-next-line import/extensions
import { DashboardSelection } from "@/components/Sidebar/Sidebar";
// eslint-disable-next-line import/extensions
import DashboardLayout from "@/components/Layouts/DashboardLayout";

function PlayersPage() {
  return (
    <DashboardLayout selection={DashboardSelection.Players}>
      <main className="h-full w-full">
        <div className="flex items-start justify-center h-full w-full">
          {/* 侧边栏 */}
        </div>
      </main>
    </DashboardLayout>
  );
}

export default PlayersPage;
