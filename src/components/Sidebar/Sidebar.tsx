import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  MenuOutlined,
  PowerSettingsNewOutlined,
  GroupsOutlined,
  PublicOutlined,
  ArticleOutlined,
  TerminalOutlined,
} from "@mui/icons-material";
// eslint-disable-next-line import/extensions
import { GlobalContext } from "@/pages/_app";

/* 侧边栏信息: MenuItems -> {服务器状态, 控制台, 日志, 玩家, 世界管理} */
const menuItems = [
  {
    icon: <PowerSettingsNewOutlined sx={{ fontSize: 25, color: "black" }} />,
    text: "服务器",
    route: "/dashboard/server",
  },
  {
    icon: <TerminalOutlined sx={{ fontSize: 25, color: "black" }} />,
    text: "控制台",
    route: "/dashboard/console",
  },
  {
    icon: <ArticleOutlined sx={{ fontSize: 25, color: "black" }} />,
    text: "日志",
    route: "/dashboard/log",
  },
  {
    icon: <GroupsOutlined sx={{ fontSize: 25, color: "black" }} />,
    text: "玩家",
    route: "/dashboard/players",
  },
  {
    icon: <PublicOutlined sx={{ fontSize: 25, color: "black" }} />,
    text: "世界",
    route: "/dashboard/world",
  },
];

export enum DashboardSelection {
  Server,
  Console,
  Log,
  Players,
  World,
}

function Sidebar({ selectedIndex }: { selectedIndex?: DashboardSelection }) {
  // 全局 context
  const globalContext = useContext(GlobalContext);

  // 跳转路由
  const router = useRouter();

  const [, setSelectedRoute] = useState(router.pathname);

  // 假设用户没有定义selected 就默认选中 第一个选项
  const currentIndex = selectedIndex ?? DashboardSelection.Server;

  async function goToRoute(route: string) {
    await router.push(route);
    setSelectedRoute(route);
  }

  function sidebarCollapsed() {
    // 按钮折叠状态切换
    globalContext?.setCollapsed(!globalContext?.collapsed);
  }

  /* 渲染内容 */
  return (
    <div className="flex flex-nowrap flex-col gap-4 bg-white h-full p-2 shadow-2xl ease-in-out duration-200">
      {menuItems.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
          <div
            onClick={async () => goToRoute(item.route)}
            className={`items-center flex flex-nowrap rounded-lg grow-0 p-1 hover:shadow-xl ease-in-out duration-200 cursor-pointer hover:-translate-y-0.5${
              currentIndex === index
                ? " shadow-inner bg-slate-100"
                : " shadow-none"
            }`}
          >
            <div>{item.icon}</div>
            <h6
              className={`overflow-hidden ease-in-out duration-300 whitespace-nowrap${
                globalContext?.collapsed ? "" : " pl-2 pr-1"
              }`}
              style={{
                maxWidth: globalContext?.collapsed ? "0px" : "1000px",
              }}
            >
              {item.text}
            </h6>
          </div>
        </React.Fragment>
      ))}
      <div className="grow" />

      {/* 展开和缩放按钮 */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => sidebarCollapsed()}
        className="flex gap-2 flex-nowrap flex-row-reverse rounded-lg grow-0 p-1 ease-in--out duration-300 hover:-translate-y-0.5 cursor-pointer"
      >
        <MenuOutlined sx={{ fontSize: 25, color: "black" }} />
      </div>
    </div>
  );
}

export default Sidebar;
