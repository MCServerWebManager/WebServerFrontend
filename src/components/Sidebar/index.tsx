import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Paper, Drawer, List, Divider, ListItemButton, ListItemText } from '@mui/material';
import { Menu, PowerSettingsNew, Groups, Public, Article, Terminal } from '@mui/icons-material';

/*侧边栏信息: MenuItems -> {服务器状态, 控制台, 日志, 玩家, 世界管理}*/
const menuItems = [
    { icon: <PowerSettingsNew sx={{ fontSize: 35, color: "black" }} />, text: "服务器", route: "/server" },
    { icon: <Terminal sx={{ fontSize: 35, color: "black" }} />, text: "控制台", route: "/console" },
    { icon: <Article sx={{ fontSize: 35, color: "black" }} />, text: "日志", route: "/log" },
    { icon: <Groups sx={{ fontSize: 35, color: "black" }} />, text: "玩家", route: "/players" },
    { icon: <Public sx={{ fontSize: 35, color: "black" }} />, text: "世界", route: "/world" },
];

function Sidebar() {
    /*跳转路由*/
    const router = useRouter(),
        [selectedRoute, setSelectedRoute] = useState(router.pathname);

    async function goToRoute(route: string) {
        await router.push(route)
        setSelectedRoute(route)
    }

    /*折叠侧边栏*/
    const [collapsed, setCollapsed] = useState(true) // 设置网页侧边栏折叠初始值

    useEffect(() => {
        const localStorageValue = localStorage.getItem("sidebar_collapsed");
        setCollapsed(localStorageValue !== null ? JSON.parse(localStorageValue) : false) // 设置网页侧边栏折叠默认值
    }, [])

    function sidebarCollapsed() { // 按钮折叠状态切换
        setCollapsed(!collapsed)
        localStorage.setItem("sidebar_collapsed", JSON.stringify(!collapsed))
    }

    /*渲染内容*/
    return (
        <Drawer
            open
            ModalProps={{ BackdropProps: { invisible: true } }}
        >
            <Paper sx={{ width: collapsed ? "4vw" : "17vw", height: "100%", transition: "all 0.8s ease" }}>
                <List sx={{ marginTop: "10vh", height: "75%" }}>
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Divider />
                            <ListItemButton
                                sx={{
                                    paddingLeft: collapsed ? 2 : 5,
                                    backgroundColor: selectedRoute === item.route ? 'rgb(245, 245, 245)': 'transparent',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '10px',
                                        backgroundColor: selectedRoute === item.route ? 'rgb(50, 50, 50)' : 'transparent',
                                    },
                                    transition: "padding-left 0.8s ease"
                                }}
                                onClick={() => goToRoute(item.route)}
                            >
                                {item.icon}
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        marginLeft: 5,
                                        fontSize: '1.2rem',
                                        color: "black",
                                        fontWeight: 5,
                                        whiteSpace: 'nowrap', // 不允许文本换行
                                        overflow: 'hidden', // 隐藏文本溢出部分
                                    }}
                                />
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
                <List>
                    <Divider sx={{ backgroundColor: 'black' }} />
                    <ListItemButton
                        sx={{
                            justifyContent: "center"
                        }}
                        onClick={() => sidebarCollapsed()}
                    >
                        <Menu sx={{ fontSize: 40, color: "black" }} />
                    </ListItemButton>
                </List>
            </Paper>
        </Drawer>
    );
}

export default Sidebar