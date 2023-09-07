import React, { useState } from "react";
import { Button } from "@mui/material";
// eslint-disable-next-line import/extensions
import DashboardLayout from "@/components/Layouts/DashboardLayout";
// eslint-disable-next-line import/extensions
import { DashboardSelection } from "@/components/Sidebar/Sidebar";

function LogPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <DashboardLayout selection={DashboardSelection.Log}>
      <main className="h-full w-full">
        <div className="flex items-start justify-center h-full w-full">
          <Button onClick={handleToggleSidebar}>Toggle Sidebar</Button>
          {/* 页面内容 */}
        </div>
      </main>
    </DashboardLayout>
  );
}

export default LogPage;
