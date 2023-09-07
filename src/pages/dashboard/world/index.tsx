import React, { useState } from "react";
import { Button } from "@mui/material";
// eslint-disable-next-line import/extensions
import { DashboardSelection } from "@/components/Sidebar/Sidebar";
// eslint-disable-next-line import/extensions
import DashboardLayout from "@/components/Layouts/DashboardLayout";

function WorldPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <DashboardLayout selection={DashboardSelection.World}>
      <main className="h-full w-full">
        <div className="flex items-start justify-center h-full w-full">
          <Button onClick={handleToggleSidebar}>Toggle Sidebar</Button>
          {/* 页面内容 */}
        </div>
      </main>
    </DashboardLayout>
  );
}

export default WorldPage;
