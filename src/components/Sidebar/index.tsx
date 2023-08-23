import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {Paper, Drawer, List, Divider, ListItemButton, ListItemText, ListItemIcon} from '@mui/material';
import {PowerSettingsNew, Groups, Public, Article, Terminal} from '@mui/icons-material'

function Sidebar() {
    // MenuItems -> {服务器状态, 控制台, 日志, 玩家, 世界管理}
    const menuItems = [
        { icon: <PowerSettingsNew sx={{ fontSize: 35, color: "black" }} />, text: "服务器", route: "/server"},
        { icon: <Terminal sx={{ fontSize: 35, color: "black" }} />, text: "控制台", route: "/console"},
        { icon: <Article sx={{ fontSize: 35, color: "black" }} />, text: "日志", route: "/log"},
        { icon: <Groups sx={{ fontSize: 35, color: "black" }} />, text: "玩家", route: "/players"},
        { icon: <Public sx={{ fontSize: 35, color: "black" }} />, text: "世界", route: "/world"},
    ];

    const router = useRouter()
    const [selectedRoute, setSelectedRoute] = useState(router.pathname);
    function goToRoute(route: string) {
        router.push(route)
        setSelectedRoute(route)
    }

    return (
        <Drawer
            anchor={ "left" }
            open={ true }
            ModalProps={{ BackdropProps: { invisible: true } }}
        >
            <Paper sx={{ width: "17vw", height: "100%"}}>
                <List sx={{ marginTop: "30%" }}>
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Divider />
                            <ListItemButton
                                sx={{
                                    paddingLeft: 4,
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
                                }}
                                onClick={() => goToRoute(item.route)}
                            >
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        paddingLeft: 4,
                                        fontSize: '1.2rem',
                                        color: "black",
                                        fontWeight: 5
                                    }}
                                />
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Drawer>
    );
}

export default Sidebar