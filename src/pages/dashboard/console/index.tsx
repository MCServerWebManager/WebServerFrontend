import React from "react";
// eslint-disable-next-line import/extensions
import DashboardLayout from "@/components/Layouts/DashboardLayout";
// eslint-disable-next-line import/extensions
import { DashboardSelection } from "@/components/Sidebar/Sidebar";

function ConsolePage() {
  return (
    <DashboardLayout selection={DashboardSelection.Console}>
      <main className="h-full w-full">
        <div className="flex items-start justify-center h-full w-full">
          <h6>Hello world</h6>
        </div>
      </main>
    </DashboardLayout>
  );
}

export default ConsolePage;
