import React from "react";
import type { DashboardSelection } from "@/components/Sidebar/Sidebar";
// eslint-disable-next-line import/extensions
import Sidebar from "@/components/Sidebar/Sidebar";

interface Props {
  children: React.JSX.Element;
  selection: DashboardSelection;
}

export default function DashboardLayout({ selection, children }: Props) {
  return (
    <div className="h-full w-full flex items-stretch flex-nowrap">
      {/* 侧边 navbar */}
      <div>
        <Sidebar selectedIndex={selection} />
      </div>

      {/* children内容 */}
      <div className="grow">{children}</div>
    </div>
  );
}
